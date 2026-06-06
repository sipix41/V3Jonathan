import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../constants';

export const GlobalSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "LocalBusiness"],
    "@id": "https://toiturejonathandelisle.ca/#organization",
    "name": "Toiture Jonathan Délisle Inc",
    "alternateName": "Toiture Délisle",
    "url": "https://toiturejonathandelisle.ca",
    "logo": "https://toiturejonathandelisle.ca/logo.png",
    "image": "https://toiturejonathandelisle.ca/logo.png",
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
        "@type": "State",
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
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/toiturejonathandelisle",
      "https://www.instagram.com/toiturejonathandelisle"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
