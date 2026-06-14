import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../constants';

export const GlobalSchema: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_SITE_URL || "https://toiturejonathandelisle.ca";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": "Toiture Jonathan Délisle Inc",
    "alternateName": "Toiture Délisle",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "sameAs": [
      "https://www.facebook.com/toiturejonathandelisle",
      "https://www.instagram.com/toiturejonathandelisle"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "LocalBusiness"],
    "@id": `${BASE_URL}/#localbusiness`,
    "name": "Toiture Jonathan Délisle Inc",
    "image": `${BASE_URL}/logo.png`,
    "description": "Experts en toiture dans les Laurentides, spécialisés en bardeaux d'asphalte, toits plats, réfection et déneigement.",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "361, Chemin du Lac-Écho",
      "addressLocality": "Prévost",
      "addressRegion": "QC",
      "postalCode": "J0R 1T0",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.8647,
      "longitude": -74.0688
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Laurentides"
      },
      {
        "@type": "City",
        "name": "Prévost"
      },
      {
        "@type": "City",
        "name": "Saint-Sauveur"
      },
      {
        "@type": "City",
        "name": "Saint-Jérôme"
      },
      {
        "@type": "City",
        "name": "Sainte-Agathe-des-Monts"
      },
      {
        "@type": "City",
        "name": "Mont-Tremblant"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.phone,
      "contactType": "customer service",
      "areaServed": "CA-QC",
      "availableLanguage": ["French", "English"]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Réfection de toiture",
    "provider": {
      "@id": `${BASE_URL}/#organization`
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Laurentides"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de toiture",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation de bardeaux d'asphalte"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Réparation de toiture"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Déneigement de toiture"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify([organizationSchema, localBusinessSchema, serviceSchema])}
      </script>
    </Helmet>
  );
};
