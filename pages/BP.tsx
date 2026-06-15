import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Layers, ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';
import { CTA } from '../components/CTA';

export const BP: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="BP Canada | Expert Installateur Laurentides" 
        description="Bardeaux BP Canada avec technologie Weather-Tite. Installation experte par Toiture Jonathan Délisle. Everest 42, Mystique 42 et protection maximale." 
        canonicalUrl="/services/bardeaux/bp" 
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1628592102751-ba83b03bc677?auto=format&fit=crop&q=80&w=2000" 
            alt="Toiture BP Canada installation experte" 
            className="w-full h-full object-cover opacity-30 scale-105 h-auto"
          loading="lazy" decoding="async" width="800" height="600" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-sm font-black mb-8 uppercase tracking-widest leading-none">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              Expertise BP Canada certifiée
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              Bardeaux BP : La Force <br />
              de la Technologie <span className="text-brand-red">Weather-Tite</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-medium">
              Conçus au Québec pour affronter les climats les plus rudes. Une étanchéité unique au monde pour une toiture qui ne bouge jamais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link to="/soumission" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold px-8 py-4 text-lg"
              >
                Soumission gratuite
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold px-8 py-4 text-lg"
              >
                Appeler au {COMPANY_INFO.phone}
              </Button>
            </a>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Gammes Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-6">Gammes de bardeaux <span className="text-brand-red">BP</span></h2>
            <p className="text-xl text-gray-600 font-medium">BP offre plusieurs familles de bardeaux pour différents budgets et styles de maisons.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 3 pattes */}
            <div className="bg-zinc-50 rounded-[3rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
               <div className="w-14 h-14 bg-white text-brand-black rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Layers size={28} />
              </div>
              <h3 className="text-2xl font-black text-brand-black mb-4">Bardeaux 3 pattes</h3>
              <p className="text-brand-red font-bold text-sm uppercase tracking-widest mb-6">Yukon, Ontario, Dakota</p>
              <p className="text-gray-600 leading-relaxed font-medium">
                Option économique, durée de vie typique 20–25 ans, bonne protection de base et large choix de couleurs.
              </p>
            </div>

            {/* Architecturaux */}
            <div className="bg-white rounded-[3rem] p-10 border-2 border-brand-red shadow-xl scale-105 z-10">
              <div className="w-14 h-14 bg-brand-red text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-black text-brand-black mb-4">Bardeaux Architecturaux</h3>
              <p className="text-brand-red font-bold text-sm uppercase tracking-widest mb-6">Mystique, Everest 42, Manoir, Vangard</p>
              <p className="text-gray-600 leading-relaxed font-medium">
                Bardeaux laminés double couche avec effet 3D qui imitent le cèdre ou l’ardoise, avec des garanties pouvant aller jusqu’à la durée de vie et une résistance accrue au vent et aux impacts.
              </p>
            </div>

            {/* Haut de gamme */}
            <div className="bg-zinc-50 rounded-[3rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
               <div className="w-14 h-14 bg-white text-brand-black rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-black text-brand-black mb-4">Haut de gamme / Signature</h3>
              <p className="text-brand-red font-bold text-sm uppercase tracking-widest mb-6">Technologies Avancées</p>
              <p className="text-gray-600 leading-relaxed font-medium">
                Design plus travaillé, palette de couleurs modernes et technologies avancées (résistance aux algues, meilleure protection UV, résistance aux vents jusqu’à 220 km/h selon le modèle).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 bg-zinc-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-6">
              Foire aux questions <span className="text-brand-red">BP Canada</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Obtenez des réponses à vos questions fréquentes sur les bardeaux BP.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "Quelle est la durée de vie des bardeaux BP Canada ?", 
                a: "Les bardeaux architecturaux (comme Mystique 42 et Everest 42) sont couverts par une garantie limitée à vie, offrant une protection exceptionnelle pour votre maison pendant plusieurs décennies s'ils sont bien entretenus."
              },
              {
                q: "Qu'est-ce que la technologie Weather-Tite ?",
                a: "C'est un système innovant à deux bandes d'adhésif haute performance. Il offre une résistance supérieure contre le soulèvement par le vent et empêche l'infiltration d'eau sous les bardeaux."
              },
              {
                q: "Est-ce qu'une toiture BP résiste bien aux hivers québécois ?",
                a: "Absolument. Les produits BP sont fabriqués au Canada et conçus spécifiquement pour faire face aux froids intenses, aux cycles de gel-dégel et aux fortes accumulations de neige de notre climat."
              },
              {
                q: "Les bardeaux BP sont-ils résistants à la grêle ?",
                a: "Certains modèles haut de gamme, comme la série Manoir, sont classés résistance aux impacts (Classe 3 ou 4) et assurent une excellente protection contre la grêle, évitant les dommages aux granules."
              },
              {
                q: "Pourquoi choisir BP plutôt qu'une autre marque comme IKO ?",
                a: "Les deux marques proposent d'excellents produits, mais BP se démarque avec la technologie Weather-Tite et une fabrication 100% approuvée pour notre rigoureux climat du Québec. Le choix final dépend de vos besoins esthétiques et de votre budget."
              },
              {
                q: "Dois-je entretenir mes bardeaux BP ?",
                a: "Une toiture nécessite peu d'entretien, mais des inspections régulières (visuelles) et un bon déneigement hivernal prolongeront la beauté de vos bardeaux et préserveront l'intégrité de la garantie."
              }
            ].map((faq, idx) => (
              <motion.details 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 border-l-[6px] ${idx % 2 === 0 ? 'border-l-brand-red' : 'border-l-brand-black'} cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1`}
              >
                <summary className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between outline-none list-none bg-transparent group-open:bg-gray-50/50 transition-colors">
                  <span className="text-xl md:text-2xl font-bold pr-8 tracking-tight text-gray-900 group-open:text-brand-red transition-colors">
                    {faq.q}
                  </span>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center transition-colors group-open:bg-brand-red group-open:text-white group-open:shadow-md">
                    <ChevronDown className="w-6 h-6 transition-transform duration-300 group-open:rotate-180" />
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-8 pt-2 text-gray-600 leading-relaxed text-lg border-t border-transparent group-open:border-gray-50">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <CTA 
        title="Protégez votre maison avec BP Canada dès aujourd'hui"
        description="Ne laissez pas un toit vieillissant compromettre la valeur de votre demeure. Obtenez une inspection et un devis gratuit pour une installation BP experte."
      />
    </div>
  );
};
