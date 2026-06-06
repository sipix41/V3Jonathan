import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Facebook, Phone, MapPin, Mail, Award, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-gray-300">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-white text-lg font-bold uppercase mb-4 tracking-wider border-l-4 border-brand-red pl-3">
            {COMPANY_INFO.name}
          </h3>
          <p className="text-sm mb-6 leading-relaxed">
            Expertise et rigueur pour tous vos projets de toiture résidentielle et commerciale dans les <Link to="/laurentides" className="text-brand-red font-bold hover:underline">Laurentides</Link>.
          </p>
          
          {/* Partners / Affiliates Section */}
          <div className="mb-6">
            <h4 className="text-white text-xs font-bold uppercase mb-2 flex items-center gap-2 text-gray-400">
              Partenaires Recommandés
            </h4>
            <NavLink 
              to="/partenaires" 
              className="group inline-flex items-center text-sm font-medium text-gray-300 hover:text-brand-red transition-colors"
            >
              <span className="border-b border-gray-600 group-hover:border-brand-red pb-0.5 transition-colors">Découvrir nos partenaires</span>
              <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

          <div className="flex items-center gap-2 mb-4 text-white font-semibold">
            <Award className="text-brand-red" size={20} />
            <span>RBQ: {COMPANY_INFO.rbq}</span>
          </div>
          <a 
            href={COMPANY_INFO.facebookUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-red hover:text-white transition-colors"
            aria-label="Rejoignez-nous sur Facebook"
          >
            <Facebook size={20} aria-hidden="true" />
            <span>Suivez-nous sur Facebook</span>
          </a>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold uppercase mb-4 tracking-wider border-l-4 border-brand-red pl-3">
            Navigation
          </h3>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:text-brand-red transition-colors">Accueil</NavLink></li>
            <li><NavLink to="/services" className="hover:text-brand-red transition-colors">Nos Services</NavLink></li>
            <li><NavLink to="/a-propos" className="hover:text-brand-red transition-colors">À Propos</NavLink></li>
            <li><NavLink to="/realisations" className="hover:text-brand-red transition-colors">Réalisations</NavLink></li>
            <li><NavLink to="/faq" className="hover:text-brand-red transition-colors">Foire Aux Questions</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-brand-red transition-colors">Contactez-nous</NavLink></li>
            <li><NavLink to="/carriere" className="hover:text-brand-red transition-colors text-brand-red font-semibold">Carrières / Emplois</NavLink></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-white text-lg font-bold uppercase mb-4 tracking-wider border-l-4 border-brand-red pl-3">
            Coordonnées
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-brand-red mt-1 flex-shrink-0" size={18} />
              <span className="leading-snug">
                <Link to="/sainte-agathe-des-monts" className="hover:text-brand-red transition-colors font-bold underline underline-offset-4 decoration-brand-red/50">
                  {COMPANY_INFO.address.split(',')[0]}
                </Link>
                {COMPANY_INFO.address.includes(',') ? `, ${COMPANY_INFO.address.split(',')[1]}` : ''}
                <br />{COMPANY_INFO.region}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-brand-red flex-shrink-0" size={18} />
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white font-bold text-lg transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 break-all">
              <Mail className="text-brand-red flex-shrink-0" size={18} />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                {COMPANY_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-neutral-900 py-6 border-t border-gray-800 text-center text-xs md:text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            <NavLink to="/droits-auteur" className="hover:text-brand-red transition-colors">
              &copy; 2023-2026 {COMPANY_INFO.name} Tous droits réservés.
            </NavLink>
          </p>
          <p className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
            <NavLink to="/termes" className="text-gray-400 hover:text-brand-red hover:underline transition-colors">Termes et conditions</NavLink>
            <span className="hidden sm:inline text-gray-700">|</span>
            <NavLink to="/confidentialite" className="text-gray-400 hover:text-brand-red hover:underline transition-colors">Politique de confidentialité</NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};