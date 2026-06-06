import express from "express";
import path from "path";
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
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "https://formsubmit.co"]
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
      // Set strict caching headers for CDN
      res.setHeader("Cache-Control", "public, s-maxage=31536000, stale-while-revalidate");
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
      setHeaders: (res, path) => {
        // Enforce the headers specified by the user
        res.setHeader("Cache-Control", "public, s-maxage=31536000, stale-while-revalidate");
      }
    }));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
