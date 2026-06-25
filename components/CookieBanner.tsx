import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { initAnalytics } from '../src/hooks/useAnalytics';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Granular settings corresponding to Loi 25 requirements
  const [preferences, setPreferences] = useState({
    functional: true, // always required for core site features
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    } else {
      try {
        const storedPrefs = localStorage.getItem('cookiePreferences');
        if (storedPrefs) {
          const parsed = JSON.parse(storedPrefs);
          setPreferences(parsed);
          if (parsed.analytics) {
            initAnalytics();
          }
        }
      } catch (e) {
        // Fallback if not JSON
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { functional: true, analytics: true, marketing: true };
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setIsVisible(false);
    initAnalytics();
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsVisible(false);
    if (preferences.analytics) {
      initAnalytics();
    }
  };

  const togglePreference = (key: 'analytics' | 'marketing') => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-xs md:max-w-sm z-50 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-2xl p-4 animate-fade-in text-left font-sans"
      role="alertdialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      {!showSettings ? (
        <>
          <div className="mb-3">
            <h2 id="cookie-banner-title" className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              Respect de votre vie privée (Loi 25)
            </h2>
            <p id="cookie-banner-desc" className="text-xs text-gray-500 mt-1 leading-relaxed">
              Nous utilisons des témoins pour améliorer votre expérience et analyser notre trafic.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 mt-3">
            <Button 
              variant="primary" 
              onClick={handleAcceptAll}
              className="w-full text-xs py-2 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-sm"
              aria-label="Accepter tous les cookies"
            >
              Accepter, merci
            </Button>
            
            <div className="flex items-center justify-between text-xs px-1">
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="text-gray-500 hover:text-brand-red font-medium transition-colors hover:underline focus:outline-none"
              >
                Paramètres
              </button>
              <Link 
                to="/confidentialite" 
                className="text-gray-400 hover:text-gray-600 transition-colors hover:underline"
              >
                Politique
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mb-3">
            <h2 className="text-sm font-bold text-gray-900">
              Paramètres des témoins
            </h2>
            <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
              Personnalisez les technologies de suivi selon vos préférences de confidentialité.
            </p>
          </div>

          <div className="space-y-2 mt-3 my-4">
            {/* Functional - Always active */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 border border-gray-100">
              <div>
                <p className="text-xs font-semibold text-gray-800">Essentiels</p>
                <p className="text-[10px] text-gray-400">Requis pour le site web</p>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase mr-1">Actif</span>
            </div>

            {/* Analytics Toggle */}
            <div 
              className="flex items-center justify-between p-2 rounded-lg bg-white border border-gray-100 hover:bg-gray-50/50 cursor-pointer transition-colors"
              onClick={() => togglePreference('analytics')}
            >
              <div>
                <p className="text-xs font-semibold text-gray-800">Analyses tactiques</p>
                <p className="text-[10px] text-gray-400 font-normal">Mesurer l'utilisation locale</p>
              </div>
              <div className="relative inline-flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.analytics}
                  onChange={() => {}} // Swapped by outer div click
                  className="sr-only peer"
                />
                <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-brand-red"></div>
              </div>
            </div>

            {/* Marketing Toggle */}
            <div 
              className="flex items-center justify-between p-2 rounded-lg bg-white border border-gray-100 hover:bg-gray-50/50 cursor-pointer transition-colors"
              onClick={() => togglePreference('marketing')}
            >
              <div>
                <p className="text-xs font-semibold text-gray-800">Publicité ciblée</p>
                <p className="text-[10px] text-gray-400 font-normal">Offres locales adaptées</p>
              </div>
              <div className="relative inline-flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.marketing}
                  onChange={() => {}} // Swapped by outer div click
                  className="sr-only peer"
                />
                <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-brand-red"></div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4 pt-1 border-t border-gray-50">
            <button 
              type="button"
              onClick={() => setShowSettings(false)}
              className="w-1/2 text-xs py-2 border border-gray-200 hover:bg-gray-50 text-gray-500 rounded-lg font-medium transition-colors"
            >
              Retour
            </button>
            <button 
              type="button"
              onClick={handleSavePreferences}
              className="w-1/2 text-xs py-2 bg-brand-black hover:bg-black text-white font-bold rounded-lg transition-colors shadow-sm"
            >
              Enregistrer
            </button>
          </div>
        </>
      )}
    </div>
  );
};
