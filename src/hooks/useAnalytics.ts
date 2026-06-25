import { useEffect } from 'react';

export const GA_TRACKING_ID = import.meta.env.VITE_GA_ID || '';

export const isAnalyticsEnabled = () => {
  try {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') return true;
    if (consent === 'custom') {
      const prefs = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
      return prefs.analytics === true;
    }
  } catch (e) {
    // ignore
  }
  return false;
};

// Types for GA data layer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const initAnalytics = () => {
  if (!isAnalyticsEnabled() || !GA_TRACKING_ID) return;

  if (document.getElementById('ga-script')) return; // Already loaded

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_path: window.location.pathname,
  });
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (!isAnalyticsEnabled() || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const useGlobalTracking = () => {
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href && link.href.startsWith('tel:')) {
        trackEvent('click_call', 'contact', link.href);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);
};
