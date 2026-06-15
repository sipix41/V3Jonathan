import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

const PARTNERS = [
  {
    id: 'apchq',
    name: "APCHQ",
    fullName: "Association des professionnels de la construction et de l'habitation du Québec",
    description: "En tant que membre de l'APCHQ, nous adhérons à des standards élevés de professionnalisme et de qualité. C'est un gage de confiance pour nos clients, assurant que nous suivons les meilleures pratiques de l'industrie.",
    icon: (
      <svg viewBox="0 0 240 70" className="h-12 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Modern APCHQ blue building/roof crest on the left */}
        <g transform="translate(10, 5)">
          <path d="M5,40 L25,20 L45,40" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13,50 L25,38 L37,50" stroke="#0E7490" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25,17 L25,10" stroke="#E11D48" strokeWidth="5" strokeLinecap="round" />
        </g>
        <text x="65" y="48" fill="#0F172A" fontSize="38" fontWeight="900" fontFamily="'Inter', 'Arial', sans-serif" letterSpacing="-1">APCHQ</text>
      </svg>
    ),
    type: "Association"
  },
  {
    id: 'iko',
    name: "IKO",
    fullName: "Expert en bardeaux de toiture",
    description: "IKO est un chef de file mondial dans la fabrication de produits de toiture. Leurs bardeaux offrent une durabilité exceptionnelle face aux intempéries du Québec et une vaste gamme de couleurs pour rehausser l'esthétique de votre maison.",
    icon: (
      <svg viewBox="0 0 240 70" className="h-12 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Red crest emblem on the left */}
        <g transform="translate(5, 5)">
          {/* Outer shield outline */}
          <path d="M19,30 C19,36 30,55 30,55 C30,55 41,36 41,30 C41,25 38,20 30,19 C22,20 19,25 19,30 Z" fill="#E11D48" />
          {/* Shield crest top crown shape */}
          <path d="M30,12 C33,12 35,9 33,6 C32,4 28,4 27,6 C25,9 27,12 30,12 Z" fill="#E11D48" />
          <path d="M30,18 C35,18 39,15 39,11 C39,7 30,5 30,5 C30,5 21,7 21,11 C21,15 25,18 30,18 Z" fill="#E11D48" />
          {/* Inner grid patterns/texture inside the red shield */}
          <path d="M30,18 L30,50" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M23,28 Q30,34 37,28" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22,36 Q30,42 38,36" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24,43 Q30,49 36,43" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        {/* "IKO" letter text on the right - italicized, geometric, modern black */}
        <text x="65" y="48" fill="#18181B" fontSize="46" fontWeight="900" fontStyle="italic" fontFamily="Impact, 'Arial Black', sans-serif" letterSpacing="0">IKO</text>
      </svg>
    ),
    type: "Fournisseur"
  },
  {
    id: 'bp',
    name: "BP Canada",
    fullName: "Matériaux de construction BP Canada",
    description: "Depuis plus d'un siècle, BP Canada produit des matériaux de haute qualité. Leur technologie Weather-Tite offre une protection supérieure contre le vent et la pluie, idéale pour les toitures des Laurentides.",
    icon: (
      <svg viewBox="0 0 240 70" className="h-12 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tilted oval sleeve */}
        <g transform="skewX(-15) translate(25, 5)">
          <ellipse cx="70" cy="30" rx="60" ry="25" stroke="#18181B" strokeWidth="6" />
          {/* "BP" Text */}
          <text x="70" y="41" fill="#18181B" fontSize="36" fontWeight="900" fontStyle="italic" fontFamily="Impact, 'Arial Black', sans-serif" textAnchor="middle" letterSpacing="1">BP</text>
        </g>
      </svg>
    ),
    type: "Fournisseur"
  }
];

export const Partners: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO title="Partenaires" description="Découvrez nos partenaires de confiance. Toiture Jonathan Délisle inc dans les Laurentides." canonicalUrl="/partenaires" />
      {/* Hero Section */}
      <div className="bg-brand-black py-4 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red opacity-10 rounded-full blur-3xl -ml-10 -mt-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">Nos Partenaires <span className="text-brand-red">Recommandés</span></h1>
          <p className="text-xl text-gray-300 font-medium">La qualité passe par le choix des meilleurs matériaux et associations.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-black mb-6">Pourquoi ces partenaires ?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Chez Toiture Jonathan Délisle inc, nous ne faisons aucun compromis sur la qualité. C'est pourquoi nous avons choisi de travailler exclusivement avec des fournisseurs et des associations qui partagent notre rigueur et notre vision d'excellence.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {PARTNERS.map((partner) => (
            <div key={partner.id} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl shadow-sm group-hover:shadow-md transition-all ${'iconBg' in partner ? partner.iconBg : 'bg-white'}`}>
                  {partner.icon}
                </div>
                <span className="px-3 py-1 bg-zinc-200 text-zinc-700 text-xs font-bold uppercase tracking-wider rounded-full">
                  {partner.type}
                </span>
              </div>
              
              <h3 className="text-2xl font-extrabold text-brand-black mb-2">{partner.name}</h3>
              <p className="text-sm font-semibold text-brand-red mb-4">{partner.fullName}</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {partner.description}
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Produits certifiés</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Garanties solides</span>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-brand-red opacity-5 transform skew-x-12"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Un projet en tête ?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Profitez de notre expertise et de la qualité de nos partenaires pour une toiture durable qui résistera aux hivers québécois.
            </p>
            <Link to="/contact">
              <Button size="lg" className="shadow-brand-red/20 shadow-lg">
                Soumission gratuite
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};