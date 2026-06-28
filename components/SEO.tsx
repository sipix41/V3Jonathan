import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../constants';

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
  
  // Si overrideFullTitle est fourni, on l'utilise. Sinon, si le titre contient déjà le nom de l'entreprise
  // ou s'il est déjà long et structuré, on l'utilise tel quel pour éviter la sur-optimisation.
  let fullTitle = overrideFullTitle;
  if (!fullTitle) {
    const titleLower = title.toLowerCase();
    const hasBrand = titleLower.includes('toiture jonathan') || titleLower.includes('toiture j.') || titleLower.includes('toiture tjd') || titleLower.includes('delisle');
    const isCustomFull = title.length >= 40 && title.includes('|');
    
    if (hasBrand || isCustomFull) {
      fullTitle = title;
    } else {
      fullTitle = `${title} | Toiture Jonathan Délisle Inc.`;
    }
  }
  
  // Use provided canonicalUrl or current path
  const finalPath = canonicalUrl || currentPath;
  // Make sure not to double slash root
  const formattedPath = finalPath === '/' ? '' : finalPath;
  const url = `${BASE_URL}${formattedPath}`;

  // Schéma d'entreprise locale (JSON-LD) spécifique pour Couvreur (RoofingContractor)
  // Recommandé pour la page d'accueil afin de valider l'audit SEO
  const localBusinessSchema = finalPath === '/' ? {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Toiture Jonathan Délisle Inc.",
    "alternateName": "Toiture JJD",
    "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
    "@id": "https://toiturejonathandelisle.ca/#organization",
    "url": "https://toiturejonathandelisle.ca",
    "telephone": "+18193236665",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sainte-Agathe-des-Monts",
      "addressLocality": "Sainte-Agathe-des-Monts",
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://facebook.com/share"
    ],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Laurentides"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Sainte-Agathe-des-Monts"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Saint-Sauveur"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Mont-Tremblant"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Val-David"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Saint-Donat"
      }
    ]
  } : null;

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
      <meta property="og:image" content="https://i.postimg.cc/FKLjSjn2/thumb-show.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://i.postimg.cc/FKLjSjn2/thumb-show.jpg" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      {localBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}
      
      {children}
    </Helmet>
  );
};
