import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { COMPANY_INFO } from '../constants';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <SEO 
        title="Page non trouvée | Toiture Jonathan Délisle inc."
        description="Désolé, la page que vous recherchez est introuvable."
      />
      <div className="max-w-xl w-full text-center">
        <h1 className="text-9xl font-black text-brand-red mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Page introuvable</h2>
        <p className="text-lg text-gray-600 mb-8">
          Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
              <Home size={20} />
              Retour à l'accueil
            </Button>
          </Link>
          <a href={`tel:${COMPANY_INFO.phoneClean}`}>
            <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center justify-center gap-2">
              <Phone size={20} />
              {COMPANY_INFO.phone}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
