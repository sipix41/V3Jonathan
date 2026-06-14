import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  overrideFullTitle?: string;
  children?: React.ReactNode;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl, overrideFullTitle, noindex = false, children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const fullTitle = overrideFullTitle || `${title} | Toiture Jonathan Délisle Inc.`;
  const BASE_URL = import.meta.env.VITE_SITE_URL || 'https://toiturejonathandelisle.ca';
  
  // Use provided canonicalUrl or current path
  const finalPath = canonicalUrl || currentPath;
  // Make sure not to double slash root
  const formattedPath = finalPath === '/' ? '' : finalPath;
  const url = `${BASE_URL}${formattedPath}`;

  // Generate dynamic BreadcrumbList Schema
  const pathSegments = currentPath.split('/').filter(p => p);
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": BASE_URL
      }
    ]
  };

  let accumulatedPath = '';
  pathSegments.forEach((segment, index) => {
    accumulatedPath += `/${segment}`;
    breadcrumbList.itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      "item": `${BASE_URL}${accumulatedPath}`
    }) as any;
  });

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${BASE_URL}/logo.png`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${BASE_URL}/logo.png`} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Inject BreadcrumbList JSON-LD directly */}
      {pathSegments.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbList)}
        </script>
      )}
      
      {children}
    </Helmet>
  );
};
