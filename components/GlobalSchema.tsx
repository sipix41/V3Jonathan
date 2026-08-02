import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO, CITIES } from '../constants';

export const GlobalSchema: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_SITE_URL || "https://toiturejonathandelisle.ca";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    "name": COMPANY_INFO.name,
    "alternateName": COMPANY_INFO.alternateName,
    "url": BASE_URL,
    "logo": "/images/thumb-show.jpg",
    "sameAs": [
      COMPANY_INFO.facebookUrl,
      COMPANY_INFO.instagramUrl
    ].filter(url => url && url !== "#")
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "LocalBusiness"],
    "@id": `${BASE_URL}/#localbusiness`,
    "name": COMPANY_INFO.name,
    "image": "/images/thumb-show.jpg",
    "description": "Experts en toiture dans les Laurentides, spécialisés en bardeaux d'asphalte, toits plats, réfection et déneigement.",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.address,
      "addressLocality": COMPANY_INFO.city,
      "addressRegion": COMPANY_INFO.state,
      "postalCode": COMPANY_INFO.postalCode,
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.7804,
      "longitude": -74.0036
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Laurentides"
      },
      ...CITIES.map(c => ({
        "@type": "City",
        "name": c.name
      }))
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
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify([organizationSchema, localBusinessSchema])}
      </script>
    </Helmet>
  );
};
