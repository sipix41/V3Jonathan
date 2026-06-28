import express from "express";
import path from "path";
import fs from "fs";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { STATIC_ROUTES, CITIES } from "./constants";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10)
});

async function startServer() {
  const app = express();
  // Utiliser le port fourni par l'hébergeur (WHC) ou 3000 par défaut
  const PORT = process.env.PORT || 3000;

  // Add compression and security headers
  app.use(compression());
  app.use(helmet({
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
        scriptSrc: ["'self'", "https://www.googletagmanager.com"],
        // 'unsafe-inline' est retiré comme demandé pour améliorer la sécurité.
        styleSrc: ["'self'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https://images.unsplash.com", "https://i.postimg.cc", "https://www.image-heberg.fr", "https://www.google-analytics.com"],
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
    max: 10, // limit each IP to 10 requests per windowMs
    message: { error: "Trop de requêtes, veuillez réessayer plus tard." }
  });

  app.post('/api/submit-form', formLimiter, async (req, res) => {
    try {
      const parsedData = formSchema.safeParse(req.body);
      if (!parsedData.success) {
        return res.status(400).json({ error: "Données invalides", details: parsedData.error.errors });
      }

      const FORMSUBMIT_TOKEN = process.env.VITE_FORMSUBMIT_TOKEN || process.env.FORMSUBMIT_TOKEN;
      if (!FORMSUBMIT_TOKEN) {
        console.error("Missing FORMSUBMIT_TOKEN");
        return res.status(500).json({ error: "Configuration error" });
      }

      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(parsedData.data)
      });

      if (response.ok) {
        res.status(200).json({ success: true });
      } else {
        res.status(response.status).json({ error: "Forwarding failed" });
      }
    } catch (error) {
      console.error("Error in /api/submit-form:", error);
      res.status(500).json({ error: "Internal server error" });
    }
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

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
