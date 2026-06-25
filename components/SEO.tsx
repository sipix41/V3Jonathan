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
  const fullTitle = overrideFullTitle || `${title} | Toiture Jonathan Délisle Inc.`;
  
  // Use provided canonicalUrl or current path
  const finalPath = canonicalUrl || currentPath;
  // Make sure not to double slash root
  const formattedPath = finalPath === '/' ? '' : finalPath;
  const url = `${BASE_URL}${formattedPath}`;

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
      
      {children}
    </Helmet>
  );
};
