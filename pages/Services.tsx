import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layers, Hammer, Snowflake, Check, Search, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
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

export const Services: React.FC = () => {
  const getServiceCardClass = () => `grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 p-8 md:p-10 rounded-3xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 relative overflow-hidden group`;

  return (
    <div className="bg-zinc-50">
      <SEO title="Services" description="Découvrez nos services d'expert couvreur pour Services. Toiture Jonathan Délisle inc dans les Laurentides." canonicalUrl="/services" />
      
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white pt-16 pb-10 md:pt-24 md:pb-12 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img loading="lazy" 
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=2000" 
            alt="Nos services de toiture" 
            className="w-full h-full object-cover opacity-30 filter mix-blend-luminosity h-auto"
          decoding="async" width="800" height="600" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/10 blur-[120px] -translate-y-1/4 translate-x-1/4 rounded-full pointer-events-none"></div>
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div 
            className="max-w-4xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/40 text-red-200 text-sm font-semibold mb-6 border border-red-500/30 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-red"></span>
              </span>
              Expertise complète
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] sm:whitespace-nowrap">
              <span className="text-brand-red">Nos Services</span> de Toiture
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-medium whitespace-normal">
              De l'installation à l'entretien, nous offrons une gamme complète de services pour assurer la protection optimale de votre bâtiment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-brand-red transition-colors">Accueil</Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-900">Services</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-6">
        
        {/* Service 1: Bardeaux */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={getServiceCardClass()}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-red"></div>
          <div className="order-2 md:order-1 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                <Layers className="text-brand-red group-hover:text-white w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Bardeaux d'Asphalte</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Notre spécialité principale. Le bardeau d'asphalte offre un excellent rapport qualité-prix et une esthétique variée. Nous installons les meilleures marques (IKO, BP) avec une précision chirurgicale pour garantir l'étanchéité maximale.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <Check className="text-brand-red w-4 h-4" />
                </div>
                <span>Large choix de couleurs et styles</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <Check className="text-brand-red w-4 h-4" />
                </div>
                <span>Installation rapide et propre</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <Check className="text-brand-red w-4 h-4" />
                </div>
                <span>Garanties manufacturières étendues</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-100">
              <Link to="/contact">
                <Button className="w-full sm:w-auto text-base">Obtenir une soumission</Button>
              </Link>
              <Link to="/services/bardeaux">
                <Button variant="outline" className="w-full sm:w-auto text-base">En savoir plus</Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img loading="lazy" 
              src="https://i.ibb.co/PsxYSsrK/t-l-charg-1.jpg" 
              alt="Toiture bardeaux" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover bg-gray-200 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] h-auto"
            decoding="async" width="800" height="600" />
          </div>
        </motion.div>

        {/* Service 2: Réparations */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={getServiceCardClass()}
        >
          <div className="absolute top-0 right-0 w-2 h-full bg-brand-black"></div>
          <div className="order-1">
             <img loading="lazy" 
              src="https://reno-toit.com/wp-content/uploads/2025/07/inspection-evaluation-toiture.jpg" 
              alt="Réparation de toiture" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover bg-gray-200 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] h-auto"
            decoding="async" width="800" height="600" />
          </div>
          <div className="order-2 relative z-10 pl-0 md:pl-6">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-brand-black group-hover:scale-110 transition-all duration-300">
                <Hammer className="text-brand-black group-hover:text-white w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Rénovations & Réparations</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Une petite fuite peut causer de gros dégâts. Nous intervenons rapidement pour réparer bardeaux arrachés, solins endommagés ou problèmes de ventilation. Ne laissez pas votre toiture se détériorer.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <Check className="text-brand-black w-4 h-4" />
                </div>
                <span>Réparation d'urgence</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <Check className="text-brand-black w-4 h-4" />
                </div>
                <span>Correction de la ventilation</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <Check className="text-brand-black w-4 h-4" />
                </div>
                <span>Inspection préventive</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-100">
              <Link to="/contact">
                <Button className="w-full sm:w-auto text-base bg-brand-black hover:bg-gray-900 border-none">Nous contacter</Button>
              </Link>
              <Link to="/services/reparations">
                <Button variant="outline" className="w-full sm:w-auto text-base">En savoir plus</Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Service 3: Inspection */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={getServiceCardClass()}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-brand-red"></div>
          <div className="order-2 md:order-1 relative z-10 pr-0 md:pr-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                <Search className="text-brand-red group-hover:text-white w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Inspection de Toiture</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Prévenez les dommages coûteux avec notre service d'inspection professionnel. Nous évaluons l'état général de votre toiture, identifions les zones à risque et proposons des solutions préventives. Une inspection minutieuse peut prolonger la durée de vie de votre toit considérablement.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <Check className="text-brand-red w-4 h-4" />
                </div>
                <span>Rapport détaillé avec photos</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <Check className="text-brand-red w-4 h-4" />
                </div>
                <span>Évaluation de l'isolation et ventilation</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <Check className="text-brand-red w-4 h-4" />
                </div>
                <span>Identification des signes d'usure</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-100">
              <Link to="/contact">
                <Button className="w-full sm:w-auto text-base">Planifier une inspection</Button>
              </Link>
              <Link to="/services/inspection">
                <Button variant="outline" className="w-full sm:w-auto text-base">En savoir plus</Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
             <img loading="lazy" 
              src="https://cdn.prod.website-files.com/682b39f8500ff14e90ad1760/6846eadd9dc4f25969f64de9_4.jpg" 
              alt="Inspection de toiture" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover bg-gray-200 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] h-auto"
            decoding="async" width="800" height="600" />
          </div>
        </motion.div>

        {/* Service 4: Déneigement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={getServiceCardClass()}
        >
          <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
          <div className="order-1">
             <img loading="lazy" 
              src="https://cimtchau.ca/app/uploads/deneigement-toit-2.jpg" 
              alt="Déneigement de Toiture" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover bg-gray-200 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] h-auto"
            decoding="async" width="800" height="600" />
          </div>
          <div className="order-2 relative z-10 pl-0 md:pl-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <Snowflake className="text-blue-600 group-hover:text-white w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Déneigement de Toiture</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              L'hiver dans les Laurentides est rigoureux. L'accumulation de neige et de glace peut compromettre la structure de votre toit. Notre équipe intervient de façon sécuritaire sans endommager votre revêtement.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="text-blue-600 w-4 h-4" />
                </div>
                <span>Service sécuritaire avec harnais</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="text-blue-600 w-4 h-4" />
                </div>
                <span>Prévention des barrages de glace</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Check className="text-blue-600 w-4 h-4" />
                </div>
                <span>Disponibilité rapide</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-100">
              <Link to="/contact">
                <Button className="w-full sm:w-auto text-base bg-blue-600 hover:bg-blue-700 border-none">Réserver un déneigement</Button>
              </Link>
              <Link to="/services/deneigement">
                <Button variant="outline" className="w-full sm:w-auto text-base border-blue-200 text-blue-700 hover:bg-blue-50">En savoir plus</Button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};