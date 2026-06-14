import fs from 'fs';
import path from 'path';
import { CITIES } from './constants';

const APP_URL = process.env.VITE_SITE_URL || 'https://toiturejonathandelisle.ca';

function generateSitemap() {
  const appTsxPath = path.join(process.cwd(), 'App.tsx');
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');

  if (!fs.existsSync(appTsxPath)) {
    console.error('App.tsx not found!');
    process.exit(1);
  }

  const content = fs.readFileSync(appTsxPath, 'utf8');
  
  // Extract all paths using regex
  const routeRegex = /<Route[^>]+path=["']([^"']+)["']/g;
  const paths = [];
  let match;

  while ((match = routeRegex.exec(content)) !== null) {
    const routePath = match[1];
    // Exclude wildcard routes or layout wrappers if any
    const excludePatterns = ['*', '/confidentialite', '/termes', '/droits-auteur'];
    if (!excludePatterns.includes(routePath) && !routePath.includes(':')) {
      paths.push(routePath);
    }
  }

  // Inject cities
  CITIES.forEach(city => {
    paths.push(city.path);
  });

  const lastmod = new Date().toISOString().split('T')[0];

  // Generate XML
  const urls = paths.map(routePath => {
    // Determine priority and changefreq based on path depth and type
    let priority = 0.8;
    let changefreq = 'monthly';

    if (routePath === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (routePath === '/contact' || routePath === '/soumission') {
      priority = 0.9;
    } else if (routePath.split('/').length > 2) {
      priority = 0.7;
    } else if (routePath.includes('confidentialite') || routePath.includes('termes') || routePath.includes('droits-auteur')) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    // Format URL (handle trailing slash avoidance except for root)
    const loc = `${APP_URL}${routePath === '/' ? '/' : routePath}`;

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  });

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`Sitemap successfully generated at ${sitemapPath} with ${paths.length} URLs.`);
}

generateSitemap();
