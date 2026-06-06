import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  overrideFullTitle?: string;
  children?: React.ReactNode;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl, overrideFullTitle, children }) => {
  const fullTitle = overrideFullTitle || `${title} | Toiture Jonathan Délisle inc.`;
  const url = canonicalUrl ? `https://toiturejonathandelisle.ca${canonicalUrl}` : 'https://toiturejonathandelisle.ca';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://toiturejonathandelisle.ca/logo.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://toiturejonathandelisle.ca/logo.png" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={url} />}
      
      {children}
    </Helmet>
  );
};
