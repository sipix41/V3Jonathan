import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Hammer, ArrowRight, CheckCircle2, ChevronRight, ChevronDown, MapPin, Wind, Snowflake, ThermometerSun, ShieldCheck, Star, Award, Clock, Grid, Layers } from 'lucide-react';
import { Button } from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Bardeaux: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO title="Bardeaux" description="Découvrez nos services d'expert couvreur pour Bardeaux. Toiture Jonathan Délisle inc dans les Laurentides." canonicalUrl="/bardeaux" />
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-8 md:py-4 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img loading="lazy" 
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=2000" 
            alt="Toiture en bardeaux d'asphalte dans les Laurentides" 
            className="w-full h-full object-cover opacity-40 h-auto"
          decoding="async" width="800" height="600" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red text-sm font-semibold mb-6 border border-brand-red/30"
            >
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              Installation Certifiée et Garantie
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              L'Expertise en Toiture de <span className="text-brand-red">Bardeaux d'Asphalte</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            >
              Spécialistes de la toiture résidentielle à Sainte-Agathe-des-Monts. Une synergie entre durabilité, esthétique et performance thermique.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="text-lg w-full sm:w-auto shadow-2xl hover:shadow-brand-red/40 bg-brand-red hover:scale-105 transition-transform">
                  Demander une soumission gratuite
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="text-lg w-full bg-white/5 hover:bg-brand-red hover:border-brand-red text-white border-white/20 transition-all">
                  Appelez le {COMPANY_INFO.phone}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-red transition-colors">Accueil</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/services" className="hover:text-brand-red transition-colors">Services</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-900 font-medium">Bardeaux d'Asphalte</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-8 leading-tight">
                La référence pour votre <span className="text-brand-red">toit en bardeaux</span>
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="text-lg leading-relaxed">
                  Le bardeau d'asphalte est le revêtement de toiture par excellence au Québec. Il allie <strong>protection robuste</strong> et esthétique polyvalente. Dans les Laurentides, où les écarts de température sont extrêmes, le choix des matériaux et la précision de la main-d'œuvre font toute la différence.
                </p>
                <p>
                  Nous ne nous contentons pas de poser des bardeaux ; nous créons un système de protection complet. Chaque projet bénéficie de notre rigueur et de l'utilisation de matériaux haut de gamme.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Award, text: "Garanties Manufacturier" },
                  { icon: ShieldCheck, text: "Installation 5 Étoiles" },
                  { icon: Clock, text: "Respect des Échéanciers" },
                  { icon: CheckCircle2, text: "Service après-vente" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red">
                      <item.icon size={20} />
                    </div>
                    <span className="font-semibold text-gray-900">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-4 bg-brand-red/5 rounded-[2.5rem] -rotate-3 blur-2xl"></div>
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-red rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                <img loading="lazy" 
                  src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000" 
                  alt="Travaux de couverture en bardeaux" 
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border-8 border-white h-auto"
                decoding="async" width="800" height="600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined Types & Brands Section */}
      <section className="py-4 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Types de Bardeaux */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6">
                  Types de Bardeaux
                </h2>
                <p className="text-xl text-gray-600">
                  Des solutions adaptées à chaque besoin, du budget contrôlé à la protection ultime.
                </p>
              </div>

              <motion.div 
                className="space-y-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {/* Type 1 */}
                <motion.div 
                  variants={fadeIn}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-red/30 transition-all duration-300 group flex gap-5 items-start"
                >
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red/10 transition-colors">
                    <Hammer className="text-brand-black group-hover:text-brand-red w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Standard (3 Pattes)</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      L'option économique et classique. Idéal pour les budgets serrés tout en offrant une protection de base adéquate.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-brand-black font-semibold bg-gray-50 px-2 py-1 rounded-md">
                        <CheckCircle2 size={12} className="text-green-600" /> Budget accessible
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-brand-black font-semibold bg-gray-50 px-2 py-1 rounded-md">
                        <CheckCircle2 size={12} className="text-green-600" /> Style uniforme
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Type 2 */}
                <motion.div 
                  variants={fadeIn}
                  className="bg-white p-6 rounded-3xl shadow-xl border-l-[6px] border-l-brand-red relative group flex gap-5 items-start border border-gray-100"
                >
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="text-brand-red w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Architectural <span className="ml-2 text-[10px] bg-brand-red text-white px-2 py-0.5 rounded-full uppercase tracking-widest">Populaire</span></h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Fini 3D imitant l'ardoise. Plusieurs couches d'asphalte fusionnées pour une résistance accrue au vent.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-gray-700 font-semibold bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                        <CheckCircle2 size={12} className="text-brand-red" /> Haute résistance
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-700 font-semibold bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                        <CheckCircle2 size={12} className="text-brand-red" /> Esthétique moderne
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Type 3 */}
                <motion.div 
                  variants={fadeIn}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-red/30 transition-all duration-300 group flex gap-5 items-start"
                >
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red/10 transition-colors">
                    <Star className="text-brand-black group-hover:text-brand-red w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Luxe & Premium</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Le summum de la protection. Imitation parfaite du cèdre ou de l'ardoise avec une durée de vie exceptionnelle.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-brand-black font-semibold bg-gray-50 px-2 py-1 rounded-md">
                        <CheckCircle2 size={12} className="text-green-600" /> Jusqu'à 50 ans
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-brand-black font-semibold bg-gray-50 px-2 py-1 rounded-md">
                        <CheckCircle2 size={12} className="text-green-600" /> Cachet supérieur
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Marques de Confiance */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6">
                  Marques de Confiance
                </h2>
                <p className="text-xl text-gray-600">
                  Nous travaillons exclusivement avec les meilleurs manufacturiers pour garantir durabilité et protection.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="block bg-white shadow-sm p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-[3rem] -z-10 transition-colors"></div>
                    <div className="mb-4 flex items-center">
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
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Technologie ArmourZone</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Bardeaux performants dotés d'une grande zone de clouage résistant aux vents extrêmes et aux intempéries québécoises.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="bg-white shadow-sm p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden block">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-50/50 rounded-bl-[3rem] -z-10 transition-colors"></div>
                    <div className="mb-4 flex items-center">
                      <svg viewBox="0 0 240 70" className="h-12 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Tilted oval sleeve */}
                        <g transform="skewX(-15) translate(25, 5)">
                          <ellipse cx="70" cy="30" rx="60" ry="25" stroke="#18181B" strokeWidth="6" />
                          {/* "BP" Text */}
                          <text x="70" y="41" fill="#18181B" fontSize="36" fontWeight="900" fontStyle="italic" fontFamily="Impact, 'Arial Black', sans-serif" textAnchor="middle" letterSpacing="1">BP</text>
                        </g>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Bande Weather-Tite</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Conçue spécifiquement pour notre climat canadien, la gamme BP offre une protection scellée contre l'eau et le vent.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
            <div className="relative group">
               <div className="sticky top-24">
                 <div className="absolute -inset-4 bg-brand-red/5 rounded-[2rem] blur-2xl"></div>
                 <img loading="lazy" 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Processus d'installation de toiture professionnelle" 
                    className="relative rounded-[2rem] shadow-2xl w-full h-[600px] object-cover ring-1 ring-gray-100 h-auto"
                  decoding="async" width="800" height="600" />
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute bottom-8 left-8 right-8 bg-brand-black/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-l-4 border-brand-red"
                  >
                    <p className="text-white text-lg font-medium italic leading-relaxed">
                      "Une toiture performante ne dépend pas uniquement du bardeau, mais bien de <strong>l'ensemble du système</strong>."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center font-bold text-white uppercase">{COMPANY_INFO.owner.charAt(0)}</div>
                      <p className="text-brand-red font-bold">— {COMPANY_INFO.owner}, Président</p>
                    </div>
                  </motion.div>
               </div>
            </div>
            
            <div>
              <div className="inline-block px-4 py-1 bg-gray-100 text-gray-600 font-bold rounded-full text-xs uppercase tracking-widest mb-4">
                Notre Méthode
              </div>
              <h2 className="text-4xl md:text-4xl font-extrabold text-brand-black mb-10 leading-tight">
                Installation de <br /> <span className="text-brand-red">Précision Absolute</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  { title: "Préparation & Arrachage", desc: "Inspection structurelle complète du pontage." },
                  { title: "Barrières d'Étanchéité", desc: "Membranes pare-glace et pare-eau triples." },
                  { title: "Sous-couche Premium", desc: "Protection synthétique respirante." },
                  { title: "Pose aux Normes", desc: "Clouage haute résistance (6 clous/bardeau)." },
                  { title: "Ventilation Master", desc: "Installation de systèmes Type Maximum." }
                ].map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex gap-6 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl bg-white border-2 border-gray-100 shadow-sm text-brand-red font-bold flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300">
                        {idx + 1}
                      </div>
                      {idx !== 4 && <div className="h-full w-px bg-gradient-to-b from-gray-200 to-transparent my-2"></div>}
                    </div>
                    <div className="pt-2">
                       <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-brand-red transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Larmier et Sous-couche Section */}
      <section className="py-6 bg-zinc-50 border-y border-zinc-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-brand-black mb-8 tracking-tight"
            >
              Larmier et <span className="text-brand-red">sous‑couche de toiture</span>
            </motion.h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Pour qu’une toiture en bardeaux d’asphalte soit vraiment efficace et durable, le larmier et la sous‑couche sont aussi importants que les bardeaux eux‑mêmes. Ils forment une barrière continue qui protège votre investissement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 group"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 bg-brand-red/10 text-brand-red rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-brand-black">Le Larmier</h3>
              </div>
              <h4 className="text-brand-red font-bold uppercase text-xs tracking-widest mb-4">Guider l'eau loin de la maison</h4>
              <p className="text-gray-600 leading-relaxed mb-8">
                Le larmier est une bande métallique installée en bordure du toit. Son rôle est de diriger l’eau de pluie et la fonte des neiges dans la gouttière et loin de la structure, empêchant l'eau de remonter sous les bardeaux ou derrière le fascia.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Évite la pourriture du bois",
                  "Protège le fascia",
                  "Dirige l'eau vers les gouttières",
                  "Finition esthétique"
                ].map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-3 text-gray-700 font-bold text-sm">
                    <CheckCircle2 size={16} className="text-brand-red" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-black text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center shrink-0">
                    <Layers size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold">La Sous‑couche</h3>
                </div>
                <h4 className="text-brand-red font-bold uppercase text-xs tracking-widest mb-4">Protection secondaire essentielle</h4>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Elle se pose directement sur le contreplaqué avant les bardeaux. Elle agit comme une deuxième ligne de défense en cas de vent fort, de glace ou de bardeaux soulevés, renforçant l'étanchéité totale du système.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Barrière d'étanchéité",
                    "Protège le pontage",
                    "Respirabilité optimale",
                    "Norme de qualité"
                  ].map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-3 text-gray-200 font-bold text-sm">
                      <CheckCircle2 size={16} className="text-brand-red" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-extrabold text-brand-black mb-6">Membrane autocollante et sous‑couche synthétique</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Le traditionnel « papier noir » est avantageusement remplacé par des <strong>membranes synthétiques en polyoléfine</strong> plus durables. Elles offrent une meilleure imperméabilité et une grande résistance à la déchirure.
              </p>
              <div className="bg-red-50/50 p-6 rounded-2xl border-l-4 border-brand-red italic text-gray-700">
                "Combinées à une membrane autocollante (glace‑eau) dans les zones critiques, ces sous‑couches modernes forment un système complet qui limite grandement les risques d’infiltration."
              </div>
            </div>
            <div className="bg-zinc-900 text-white p-10 rounded-[2.5rem] flex flex-col justify-center shadow-xl">
              <h3 className="text-xl font-extrabold mb-4">Notre Approche</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sur chaque projet, nous installons un larmier conforme aux normes sur tout le pourtour du toit, puis une sous‑couche de qualité supérieure adaptée aux exigences de votre bâtiment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Solins & Ventilation */}
      <section className="py-4 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-brand-black mb-8 leading-tight tracking-tight"
            >
              Plus qu'un bardeau : <br className="hidden md:block" />
              <span className="text-brand-red">Une Ingénierie de Toiture</span>
            </motion.h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Dans les Laurentides, nos toitures subissent un véritable test d'endurance. Pour garantir la longévité de votre investissement, deux éléments sont cruciaux : <strong>l'étanchéité des solins</strong> et la <strong>performance de la ventilation</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Solins */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-brand-red text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/20">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">L'Armure d'Étanchéité</h3>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Les solins sont les articulations de votre toiture. Sans eux, l'eau finirait par s'infiltrer aux points critiques, causant des dommages structuraux invisibles mais dévastateurs.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  { t: "Cheminées", d: "Scellage hermétique jonction maçonnerie." },
                  { t: "Lucarnes", d: "Protection contre les pluies fouettantes." },
                  { t: "Noues", d: "Étanchéité maximale dans les angles 'V'." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors border border-transparent hover:border-gray-100">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={20} />
                    <div>
                      <span className="block font-extrabold text-gray-900">{item.t}</span>
                      <span className="text-gray-600">{item.d}</span>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Ventilation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-brand-black text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl">
                  <Wind size={32} />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Un Entretoit qui Respire</h3>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Une ventilation équilibrée est le secret d'une toiture saine. Elle prévient la condensation en hiver et la surchauffe en été.
              </p>

              <div className="grid gap-6">
                <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-orange-50 text-orange-500 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      <ThermometerSun size={24} />
                    </div>
                    <h4 className="text-xl font-extrabold text-gray-900">Protection Estivale</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Évite que le bardeau ne "cuise" sous la chaleur intense, prolongeant sa durée de vie de plusieurs années.
                  </p>
                </div>

                <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-50 text-blue-500 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Snowflake size={24} />
                    </div>
                    <h4 className="text-xl font-extrabold text-gray-900">Prévention Hivernale</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Expulse l'humidité interne pour prévenir la moisissure et les barrages de glace destructeurs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Déneigement et Approche */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-brand-black text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Snowflake size={120} />
              </div>
              <h3 className="text-3xl font-extrabold mb-6 tracking-tight">Déneigement Sécuritaire</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Dans les Laurentides, le poids de la neige n'est pas le seul ennemi. Une accumulation massive bloque les aérateurs, emprisonnant l'humidité.
              </p>
              <ul className="space-y-4">
                {[
                  "Évite l'arrachement mécanique des granules.",
                  "Protection des solins et évents lors du déglaçage.",
                  "Maintien d'une couche protectrice contre le gel."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-100 font-medium">
                    <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-10 rounded-[2.5rem] shadow-sm relative group overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl translate-x-12 translate-y-12"></div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Notre Gage de Qualité</h3>
              <div className="space-y-6">
                {[
                  { t: "Matériaux Premium", d: "IKO et BP certifiés pour le Québec." },
                  { t: "Rigueur Technique", d: "Alignement laser et fixations renforcées." },
                  { t: "Ratio de Débit", d: "Calcul scientifique de la ventilation requise." },
                  { t: "Longévité Maximisée", d: "Une durée de vie de 25 à 40 ans selon le grade." }
                ].map((item, idx) => (
                  <div key={idx} className="relative z-10">
                    <h4 className="font-extrabold text-brand-red uppercase text-xs tracking-widest mb-1">{item.t}</h4>
                    <p className="text-gray-700 font-medium leading-snug">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Technical Section: Soffite, Fascia & Ventilation */}
      <section className="py-6 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-8 tracking-tight">
                Soffite, fascia et <span className="text-brand-red">ventilation de toiture</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Une toiture en bardeaux d’asphalte performante ne se limite pas aux bardeaux : le soffite, le fascia et la ventilation de l’entretoit jouent un rôle essentiel pour protéger la maison contre l’humidité, les infiltrations d’eau et les variations extrêmes de température.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-50 p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full -z-0"></div>
              <div className="relative z-10 text-left">
                <h3 className="text-3xl font-extrabold text-brand-black mb-6">Qu’est‑ce qu’un soffite?</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Le soffite est la surface horizontale située sous l’avant‑toit, visible lorsque vous levez les yeux sous le débord de toiture. Généralement perforé, il permet à l’air frais d’entrer dans l’entretoit et assure une ventilation constante qui évacue l’humidité et la chaleur excessive.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-brand-red font-bold">
                    <CheckCircle2 size={20} />
                    <span>Réduit les risques de condensation</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-red font-bold">
                    <CheckCircle2 size={20} />
                    <span>Prévient la pourriture du bois</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-red font-bold">
                    <CheckCircle2 size={20} />
                    <span>Évacue la chaleur excessive</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-black text-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-0"></div>
              <div className="relative z-10 text-left">
                <h3 className="text-3xl font-extrabold mb-6">Qu’est‑ce que le fascia?</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Le fascia est la planche verticale qui borde l’extrémité du toit et sur laquelle sont fixées les gouttières. Il protège l’extrémité des chevrons contre la pluie, la neige, le vent et les infiltrations d’eau.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-brand-red font-bold">
                    <CheckCircle2 size={20} />
                    <span>Maintien la stabilité des gouttières</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-red font-bold">
                    <CheckCircle2 size={20} />
                    <span>Finition esthétique impeccable</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-red font-bold">
                    <CheckCircle2 size={20} />
                    <span>Protège l'extrémité des chevrons</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-12">
            <div className="order-2 lg:order-1 text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-8 leading-tight">
                L’importance d’une bonne <br /> <span className="text-brand-red">ventilation de toit</span>
              </h3>
              <div className="space-y-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  La ventilation de l’entretoit repose sur un équilibre entre l’entrée d’air par les soffites et la sortie d’air par les évents de toit. Ce mouvement d’air évite l’accumulation d’humidité, limite la formation de givre et de moisissures l’hiver, et réduit la surchauffe du grenier en été.
                </p>
                <div className="grid gap-6">
                  {[
                    "Évite l'accumulation d'humidité et la moisissure",
                    "Limite la formation de givre hivernal",
                    "Réduit la surchauffe et économise l'énergie",
                    "Préserve la structure du toit à long terme"
                  ].map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0">
                        <CheckCircle2 size={20} />
                      </div>
                      <p className="text-gray-700 font-medium pt-1">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 bg-zinc-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-red/20 via-transparent to-transparent opacity-60"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight">Notre service de <span className="text-brand-red caps">Soffite, Fascia et Ventilation</span></h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Nous inspectons l’état des pièces existantes, vérifions la circulation d’air et remplaçons les éléments endommagés afin d’optimiser la protection et la durabilité de votre toiture.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-black shadow-lg shadow-brand-red/20 hover:scale-105 transition-all w-full">
                    DEMANDER UNE INSPECTION
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 bg-zinc-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red font-bold rounded-full text-xs uppercase tracking-widest mb-4">
              Questions & Réponses
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6 tracking-tight">
              Tout savoir sur votre <span className="text-brand-red">toiture</span>
            </h2>
            <p className="text-xl text-gray-600">
              Des réponses directes d'experts couvreurs pour vous aider à décider.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "Quand dois-je remplacer ma toiture ?", 
                a: "Bardeaux retroussés, perte de granules, moisissure au plafond ou si le toit a plus de 20 ans. Une inspection gratuite est le meilleur moyen d'être fixé."
              },
              {
                q: "L'importance de la ventilation ?",
                a: "Cruciale ! Elle évite que le bardeau ne 'cuise' en été et empêche les barrages de glace en hiver. C'est l'assurance-vie de votre toit."
              },
              {
                q: "Combien de temps faut-il pour refaire un toit ?",
                a: "Généralement de 1 à 2 jours pour une résidence unifamiliale. Nous assurons un nettoyage complet du terrain avant de partir."
              },
              {
                q: "Peut-on poser par-dessus l'ancien bardeau ?",
                a: "Nous le déconseillons fortement. L'arrachage complet permet d'inspecter le bois et de garantir l'étanchéité de la membrane."
              },
              {
                q: "Quelle est la durée de vie moyenne d'un toit en bardeaux d'asphalte ?",
                a: "Dans les Laurentides, une toiture en bardeaux architecturaux de qualité (IKO ou BP) installée par nos experts dure généralement entre 20 et 25 ans. Une ventilation adéquate est primordiale pour maximiser cette longévité."
              },
              {
                q: "Quel est le meilleur moment pour refaire sa toiture ?",
                a: "Les températures clémentes de mai à novembre sont idéales. La chaleur permet aux bandes adhésives des bardeaux de bien se sceller entre elles avant les rigueurs de l'hiver."
              },
              {
                q: "Comment protégez-vous mon terrain et mes aménagements ?",
                a: "Nous installons des toiles de protection autour de votre maison. Les débris sont placés dans un conteneur et nous terminons l'ouvrage avec un balai magnétique pour ramasser le moindre clou."
              },
              {
                q: "Quelles sont les garanties offertes sur vos installations ?",
                a: "Nous travaillons avec des matériaux bénéficiant d'excellentes garanties limitées à vie du manufacturier, et Toiture Jonathan Délisle soutient la qualité de son travail par une garantie sur la main-d'œuvre."
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

      {/* Service Areas */}
      <section className="py-4 bg-zinc-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center text-center">
            <div className="bg-brand-red/10 p-4 rounded-full">
              <MapPin className="w-8 h-8 text-brand-red" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-white mb-2">Couvreur dans les Laurentides</h2>
              <p className="text-gray-400">
                Nous desservons avec fierté : <strong className="text-white"><Link to="/sainte-agathe-des-monts" className="hover:text-brand-red font-bold hover:underline">{COMPANY_INFO.city}</Link></strong>, <Link to="/val-david" className="text-white hover:text-brand-red font-bold hover:underline">Val-David</Link>, Val-Morin, Saint-Adolphe-d&#39;Howard, Mont-Blanc, Tremblant, Piedmont, Mont-Rolland et toutes les municipalités environnantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspired CTA Section */}
      <section className="bg-white py-4 text-center relative overflow-hidden border-t-8 border-brand-red">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-extrabold text-brand-black mb-8 uppercase tracking-widest leading-tight"
          >
            Prêt pour une toiture <br className="hidden md:block" /> <span className="text-brand-red">solide et garantie ?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg lg:text-xl font-medium mb-12 max-w-3xl mx-auto italic"
          >
            N'attendez pas une fuite. Demandez une inspection et votre devis gratuit dès aujourd'hui. Notre équipe estimera votre projet avec justesse.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-brand-red/40 bg-brand-red text-white hover:bg-red-700 hover:scale-105 transition-all font-bold">
                OBTENIR MON DEVIS
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto block">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-brand-black/20 text-brand-black hover:bg-brand-black hover:text-white transition-all font-bold">
                APPELER LE {COMPANY_INFO.phone}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
