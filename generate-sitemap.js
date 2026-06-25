import fs from 'fs';
import path from 'path';
import { CITIES, STATIC_ROUTES } from './constants';

const APP_URL = process.env.VITE_SITE_URL || 'https://toiturejonathandelisle.ca';

function getFileLastMod(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch (error) {
    return new Date().toISOString().split('T')[0];
  }
}

function generateSitemap() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');

  // Use STATIC_ROUTES as base
  const paths = [...STATIC_ROUTES];

  // Inject cities
  CITIES.forEach(city => {
    if (!paths.includes(city.path)) {
      paths.push(city.path);
    }
  });

  // Generate XML
  const urls = paths.map(routePath => {
    // Determine priority and changefreq based on path depth and type
    let priority = 0.8;
    let changefreq = 'monthly';
    
    // Determine file path for lastmod
    let sourceFile = 'index.html';
    if (routePath === '/') {
      sourceFile = 'pages/Home.tsx';
    } else if (routePath.startsWith('/services/bardeaux')) {
      if (routePath === '/services/bardeaux') {
        sourceFile = 'pages/Bardeaux.tsx';
      } else if (routePath.includes('bp')) {
        sourceFile = 'pages/BP.tsx';
      } else if (routePath.includes('iko')) {
        sourceFile = 'pages/Iko.tsx';
      }
    } else if (routePath.startsWith('/services/')) {
      const parts = routePath.split('/');
      const pageName = parts[parts.length - 1];
      sourceFile = `pages/${pageName.charAt(0).toUpperCase() + pageName.slice(1)}.tsx`;
    } else if (CITIES.some(c => c.path === routePath)) {
      sourceFile = 'pages/CityTemplate.tsx';
    } else {
      const parts = routePath.split('/');
      const pageName = parts[parts.length - 1];
      if (pageName) {
         sourceFile = `pages/${pageName.charAt(0).toUpperCase() + pageName.slice(1)}.tsx`;
      }
    }
    const fullSourcePath = path.join(process.cwd(), sourceFile);
    const lastmod = getFileLastMod(fullSourcePath);

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
