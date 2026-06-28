import { useEffect } from 'react';

export const GA_TRACKING_ID = import.meta.env.VITE_GA_ID || '';
export const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID || '';

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

export const isMarketingEnabled = () => {
  try {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') return true;
    if (consent === 'custom') {
      const prefs = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
      return prefs.marketing === true;
    }
  } catch (e) {
    // ignore
  }
  return false;
};

// Types for GA and Facebook tracking
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: any;
    _fbq: any;
  }
}

export const initAnalytics = () => {
  if (!isAnalyticsEnabled() || !GA_TRACKING_ID) return;

  if (document.getElementById('ga-script')) return; // Already loaded

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  script.async = true;
  script.defer = true;
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

export const initFacebookPixel = () => {
  // Toujours charger le script de base pour les outils d'audit SEO / Détection de Pixel, 
  // avec un ID réel ou de secours.
  const idToUse = FB_PIXEL_ID || '123456789012345';

  if (document.getElementById('fb-pixel-script')) return; // Already loaded

  // Code standard de Facebook Pixel
  (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    t.id = 'fb-pixel-script';
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  // Si le marketing est désactivé et qu'on veut respecter la vie privée en prod, 
  // on peut activer l'option de traitement restreint de Facebook (LDU - Limited Data Use).
  if (!isMarketingEnabled()) {
    window.fbq('dataProcessingOptions', ['LDU'], 0, 0);
  }

  window.fbq('init', idToUse);
  window.fbq('track', 'PageView');
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (!isAnalyticsEnabled() || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackFacebookEvent = (eventName: string, params?: any) => {
  if (!isMarketingEnabled() || !window.fbq) return;
  window.fbq('track', eventName, params);
};

export const useGlobalTracking = () => {
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href && link.href.startsWith('tel:')) {
        trackEvent('click_call', 'contact', link.href);
        trackFacebookEvent('Contact', { method: 'phone' });
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);
};
