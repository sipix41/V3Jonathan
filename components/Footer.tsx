import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Facebook, Phone, MapPin, Mail, Award, ArrowRight, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, CITIES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-brand-black text-gray-300">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-white hover:text-brand-red text-lg font-bold uppercase mb-4 tracking-wider border-l-4 border-brand-red pl-3 hover:pl-4 transition-all duration-300 cursor-default">
            {COMPANY_INFO.name}
          </h3>
          <p className="text-sm mb-6 leading-relaxed">
            Expertise et rigueur pour tous vos projets de toiture résidentielle et commerciale dans les <Link to="/laurentides" className="text-brand-red font-bold hover:underline">Laurentides</Link>.
          </p>
          
          {/* Partners / Affiliates Section */}
          <div className="mb-6">
            <NavLink 
              to="/partenaires" 
              className="text-white hover:text-brand-red text-xs font-bold uppercase mb-2 flex items-center gap-2 transition-colors duration-150 inline-block"
            >
              Partenaires Recommandés
            </NavLink>
            <br />
            <NavLink 
              to="/devenir-partenaire" 
              className="group inline-flex items-center text-sm font-medium text-gray-300 hover:text-brand-red transition-colors mt-1"
            >
              <span className="border-b border-gray-600 group-hover:border-brand-red pb-0.5 transition-colors">Devenir partenaire</span>
              <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

          <a 
            href="https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/5831965801?mode=Entreprise"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 mb-4 text-white hover:text-brand-red font-semibold transition-colors"
          >
            <Award className="text-brand-red group-hover:text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" size={20} />
            <span>RBQ: {COMPANY_INFO.rbq}</span>
          </a>
          <a 
            href={COMPANY_INFO.facebookUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-brand-red hover:text-white transition-colors"
            aria-label="Rejoignez-nous sur Facebook"
          >
            <Facebook className="group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300 group-hover:animate-pulse" size={20} aria-hidden="true" />
            <span>Suivez-nous sur <span className="text-[#1877F2] font-bold inline-block group-hover:animate-bounce">Facebook</span></span>
          </a>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:mx-auto">
          <h3 className="text-white hover:text-brand-red text-lg font-bold uppercase mb-4 tracking-wider border-l-4 border-brand-red pl-3 hover:pl-4 transition-all duration-300 cursor-default">
            Navigation
          </h3>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:text-brand-red transition-colors">Accueil</NavLink></li>
            <li><NavLink to="/services" className="hover:text-brand-red transition-colors">Nos Services</NavLink></li>
            <li><NavLink to="/a-propos" className="hover:text-brand-red transition-colors">À Propos</NavLink></li>
            <li><NavLink to="/realisations" className="hover:text-brand-red transition-colors">Réalisations</NavLink></li>
            <li><NavLink to="/faq" className="hover:text-brand-red transition-colors">Foire Aux Questions</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-brand-red transition-colors">Contactez-nous</NavLink></li>
            <li><NavLink to="/carriere" className="hover:text-brand-red transition-colors">Carrières / Emplois</NavLink></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-white hover:text-brand-red text-lg font-bold uppercase mb-4 tracking-wider border-l-4 border-brand-red pl-3 hover:pl-4 transition-all duration-300 cursor-default">
            Coordonnées
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <MapPin className="text-brand-red mt-1 flex-shrink-0 group-hover:scale-125 group-hover:text-white transition-all duration-300" size={18} />
              <span className="leading-snug">
                <Link to="/sainte-agathe-des-monts" className="hover:text-brand-red transition-colors font-bold underline underline-offset-4 decoration-brand-red/50">
                  {COMPANY_INFO.city}
                </Link>
                , {COMPANY_INFO.region}
              </span>
            </li>
            <li className="flex items-center gap-3 group">
              <Phone className="text-brand-red flex-shrink-0 group-hover:scale-125 group-hover:text-white group-hover:rotate-12 transition-all duration-300" size={18} />
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-brand-red font-bold text-lg transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 group break-all">
              <Mail className="text-brand-red flex-shrink-0 group-hover:scale-125 group-hover:text-white group-hover:-rotate-12 transition-all duration-300" size={18} />
              <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold hover:text-brand-red transition-colors">
                {COMPANY_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Accordion List for Zones d'intervention */}
      <div className="bg-black border-t border-neutral-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="flex items-center gap-4 text-white hover:text-brand-red transition-colors focus:outline-none w-full text-left font-bold uppercase tracking-wider text-sm md:text-base outline-none group cursor-pointer"
            aria-expanded={isOpen}
          >
            <span>ZONES D'INTERVENTION (INSTALLATION & SOUMISSION)</span>
            <div className="bg-neutral-900 group-hover:bg-neutral-800 transition-colors duration-200 rounded-full p-1.5 inline-flex items-center justify-center text-white w-8 h-8 flex-shrink-0">
              <ChevronDown size={18} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-x-8 mt-6 pt-6 border-t border-neutral-900 text-sm text-gray-400">
                  {CITIES.map((city, idx) => (
                    <div key={idx} className="break-inside-avoid mb-2">
                      <Link 
                        to={city.path} 
                        className="inline-block hover:text-brand-red hover:font-bold hover:scale-110 origin-left transition-all duration-300"
                      >
                        {city.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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