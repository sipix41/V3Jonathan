import express from "express";
import path from "path";
import fs from "fs";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import nodemailer from "nodemailer";
import { STATIC_ROUTES, CITIES } from "./constants";

const formSchema = z.record(z.any());

async function startServer() {
  const app = express();
  app.set("trust proxy", 1);
  // Utiliser le port fourni par l'hébergeur (WHC) ou 3000 par défaut
  const PORT = process.env.PORT || 3000;

  // Add compression and security headers
  app.use(compression());
  app.use(helmet({
    crossOriginResourcePolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginEmbedderPolicy: false,
    frameguard: false, // REQUIRED for AI Studio iframe preview
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true
    },
    referrerPolicy: {
      policy: "no-referrer-when-downgrade"
    },
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["*", "data:", "blob:"],
        connectSrc: ["'self'", "https://formsubmit.co", "https://www.google-analytics.com"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"]
      }
    } : false
  }));

  app.use((req, res, next) => {
    res.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
    next();
  });

  // Middleware to parse JSON bodies
  app.use(express.json());

  const formLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: { error: "Trop de requêtes, veuillez réessayer plus tard." }
  });

  app.post('/api/submit-form', formLimiter, async (req, res) => {
    try {
      console.log("Received form submission:", req.body);
      const parsedData = formSchema.safeParse(req.body);
      if (!parsedData.success) {
        console.log("Invalid data:", parsedData);
        return res.status(400).json({ error: "Données invalides", details: (parsedData as any).error.errors });
      }

      const targetEmail = "soumission@toiturejonathandelisle.ca";
      
      const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
      console.log("SMTP Config present:", { host: !!SMTP_HOST, port: !!SMTP_PORT, user: !!SMTP_USER, pass: !!SMTP_PASS });

      if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
        console.warn("Mocking form submission because SMTP credentials are missing");
        return res.status(200).json({ success: true, mocked: true });
      }

      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      console.log("Sending email...");

      const mailOptions = {
        from: SMTP_USER,
        to: targetEmail,
        subject: `Nouvelle demande de soumission de ${parsedData.data.name || "Client"}`,
        text: JSON.stringify(parsedData.data, null, 2),
        html: `
          <h2>Nouvelle demande de soumission</h2>
          <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
            ${Object.entries(parsedData.data).map(([key, value]) => `
              <tr>
                <td><strong>${key}</strong></td>
                <td>${value}</td>
              </tr>
            `).join('')}
          </table>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error in /api/submit-form:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get('/api/debug-info', (req, res) => {
    res.json({
      cwd: process.cwd(),
      dir: __dirname,
      filesCwd: fs.readdirSync(process.cwd()),
      documentRoot: process.env.DOCUMENT_ROOT || 'unknown'
    });
  });

  // Add custom caching middleware for static assets (Cloud Run specific optimization)
  app.use((req, res, next) => {
    // Exclude root path and HTML files from cache entirely
    if (req.url === '/' || req.url.endsWith('.html')) {
      res.setHeader("Cache-Control", "no-cache");
    } 
    // Only target specific static extensions
    else if (/\.(js|css|webp|png|jpg|jpeg|svg|woff2?|ico|json)$/.test(req.url)) {
      // Set strict caching headers for CDN with immutable
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    }
    next();
  });

  const env = process.env.NODE_ENV?.toLowerCase()?.trim();
  if (env !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    // Serve static files with express cache options as well just in case
    app.use(express.static(distPath, {
      maxAge: '1y',
      immutable: true,
      setHeaders: (res, reqPath) => {
        if (reqPath.endsWith('.html')) {
          res.setHeader("Cache-Control", "no-cache");
        } else {
          // Enforce the headers specified by the user
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
      }
    }));
    app.get(/(.*)/, (req, res) => {
      let routePath = req.path;
      if (routePath.endsWith('/')) {
        routePath = routePath.slice(0, -1);
      }
      
      const safePath = path.normalize(routePath).replace(/^(\.\.[\/\\])+/, '');
      const specificHtmlPath = path.join(distPath, safePath, 'index.html');
      
      if (fs.existsSync(specificHtmlPath)) {
        res.sendFile(specificHtmlPath);
      } else {
        const isValidRoute = STATIC_ROUTES.includes(routePath) || CITIES.some(city => city.path === routePath) || routePath === '';
        
        if (isValidRoute) {
          res.sendFile(path.join(distPath, 'index.html'));
        } else {
          res.status(404).sendFile(path.join(distPath, 'index.html'));
        }
      }
    });
  }

  if (typeof PORT === 'string' && isNaN(Number(PORT))) {
    // Port is a socket/pipe (common in Passenger)
    app.listen(PORT, () => {
      console.log(`Server running on socket ${PORT}`);
    });
  } else {
    // Port is a number
    app.listen(Number(PORT), "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

startServer();
