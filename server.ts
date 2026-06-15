import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import helmet from "helmet";
import compression from "compression";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add compression and security headers
  app.use(compression());
  app.use(helmet({
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "https://formsubmit.co"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"]
      }
    } : false
  }));

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

  if (process.env.NODE_ENV !== "production") {
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
    app.get('*', (req, res) => {
      let routePath = req.path;
      if (routePath.endsWith('/')) {
        routePath = routePath.slice(0, -1);
      }
      
      const specificHtmlPath = path.join(distPath, routePath, 'index.html');
      
      if (fs.existsSync(specificHtmlPath)) {
        res.sendFile(specificHtmlPath);
      } else {
        res.sendFile(path.join(distPath, 'index.html'));
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
