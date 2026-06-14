import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import express from 'express';

const distPath = path.join(process.cwd(), 'dist');

async function prerender() {
  console.log('Starting prerendering for SEO...');
  
  // 1. Read sitemap to get all URLs
  const sitemapPath = path.join(distPath, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('Sitemap not found, cannot prerender.');
    return;
  }
  
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  // Simple regex to extract all <loc> content from sitemap
  const matches = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)];
  
  // Base URL is the website URL from sitemap, we need to extract paths
  // e.g. "https://toiturejonathandelisle.ca/val-david" -> "/val-david"
  const baseUrl = process.env.VITE_SITE_URL || 'https://toiturejonathandelisle.ca';
  
  const routes = matches.map(m => {
    let url = m[1];
    if (url.startsWith(baseUrl)) {
      url = url.slice(baseUrl.length);
    }
    return url || '/';
  });

  console.log(`Found ${routes.length} routes to prerender.`);

  // 2. Start a local server to serve the SPA
  const app = express();
  app.use(express.static(distPath));
  app.get('*all', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
  
  const server = app.listen(3001, () => {
    console.log('Local server running on port 3001');
  });

  // 3. Launch Puppeteer
  const browser = await puppeteer.launch({ 
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: "new"
  });

  // 4. Prerender each route
  const page = await browser.newPage();
  
  // We want to avoid loading external scripts like Analytics during prerender if possible,
  // but it's okay for now. We can intercept requests if needed.

  for (const route of routes) {
    if (route.includes('.pdf') || route.includes('.jpg')) continue;

    console.log(`Prerendering ${route}...`);
    try {
      await page.goto(`http://localhost:3001${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Get the HTML content after hydration
      const html = await page.content();
      
      // We want to remove any scripts injected by Puppeteer or make sure it's clean (page.content() is usually clean)
      
      // Create directories
      const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
      const filePath = path.join(distPath, routePath);
      
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, html, 'utf8');
      
    } catch (e) {
      console.error(`Failed to prerender ${route}:`, e);
    }
  }

  // 5. Cleanup
  await browser.close();
  server.close();
  console.log('Prerendering complete!');
}

prerender().catch(console.error);
