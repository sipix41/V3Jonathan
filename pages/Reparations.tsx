import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, AlertTriangle, ShieldCheck, MapPin, CheckCircle2, ChevronRight, ArrowRight, Droplets, Wind, Search, FileText, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';
import { CTA } from '../components/CTA';

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

export const Reparations: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO title="Réparations et Rénovations" description="Découvrez nos services d'expert couvreur pour réparations de toiture. Toiture Jonathan Délisle inc dans les Laurentides." canonicalUrl="/reparations" />
      
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            loading="lazy" 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Réparation et rénovation de toiture dans les Laurentides" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/10 blur-[120px] rounded-full pointer-events-none"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
          <motion.div 
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 text-brand-red text-sm font-semibold mb-6 border border-brand-red/30 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-red"></span>
              </span>
              Service Rapide & Urgences Toiture
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Expert en <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-brand-red pb-2">Réparation & Rénovation</span><br />
              <span className="text-3xl md:text-5xl lg:text-6xl">dans les Laurentides</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-medium">
              Infiltration d'eau, bardeaux arrachés ou toiture vieillissante ? Nous intervenons rapidement pour sécuriser et remettre à neuf votre toiture.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="text-lg w-full sm:w-auto h-14 px-8 shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40 transition-all group">
                  Demander une inspection gratuite
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto">
                <Button size="lg" className="text-lg w-full h-14 px-8 flex items-center justify-center gap-3 transition-colors shadow-lg shadow-brand-red/30 hover:shadow-brand-red/50">
                  <PhonePulse /> Urgence : {COMPANY_INFO.phone}
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
            <span className="text-gray-900 font-medium">Réparations & Rénovations</span>
          </div>
        </div>
      </div>

      {/* Services Description */}
      <section className="py-8 md:py-4 bg-gray-50 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6 tracking-tight">
              <span className="text-brand-red">Réparation</span> de toiture, calfeutrage <br className="hidden md:block"/>
              et <span className="text-brand-red">correction</span> de fuites et <span className="text-brand-red">rénovations</span> extérieures
            </h2>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red text-sm font-bold tracking-widest uppercase mb-6">
              Service local et rapide dans les Laurentides
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Un problème de toiture n'implique pas toujours de tout refaire ! Notre équipe intervient rapidement pour cibler et corriger les fuites, remplacer quelques bardeaux arrachés ou solidifier vos joints de calfeutrage. Une intervention précise aujourd'hui permet de sauver votre toit et d'éviter un remplacement prématuré complet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex flex-row items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Réparation d'Urgence</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Intervention rapide suite à une tempête, des vents violents ou une infiltration soudaine. Nous colmatons les brèches, sécurisons la toiture temporairement si nécessaire, puis effectuons les réparations permanentes.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex flex-row items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Inspection Préventive</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Évaluation minutieuse de l'état de vos bardeaux, des solins, de la ventilation de l'entretoit et de l'étanchéité globale. La prévention est le meilleur moyen d'éviter des rénovations coûteuses et prématurées.
              </p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex flex-row items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-red/10 blur-xl rounded-full"></div>
                  <Hammer className="w-6 h-6 relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">Rénovation Complète</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Quand les réparations locales ne suffisent plus, nous procédons à la réfection complète de votre toiture selon les plus hautes normes de l'industrie, en remplaçant au besoin le pontage endommagé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs of damage */}
      <section className="py-8 md:py-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 skew-x-12 translate-x-1/2 rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red to-red-400 rounded-3xl -translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:-translate-x-6 group-hover:translate-y-6"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img loading="lazy" 
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1000" 
                  alt="Signes de dommages sur une toiture" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                decoding="async" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6 tracking-tight leading-tight">
                Avez-vous repéré ces <br/>
                <span className="text-brand-red">signes alarmants ?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                Ne sous-estimez jamais les petits défauts visuels. Voici les signes fréquents indiquant qu'une réparation ou une réfection de toiture est nécessaire :
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-brand-red transition-colors">Infiltrations d'eau</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Taches d'eau brunâtres au plafond ou sur les murs intérieurs, signes clairs d'une fuite.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <Wind className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-brand-red transition-colors">Bardeaux manquants</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Arrive souvent suite à des bourrasques de vent ou de fortes tempêtes dans la région.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-brand-red transition-colors">Bardeaux gondolés</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Signe de vieillissement extrême ou d'une ventilation insuffisante de l'entretoit.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-red-50 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-brand-red transition-colors">Gel et dégel</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">La formation de barrages de glace crée des infiltrations majeures, souvent liées à la ventilation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New specific sections */}
      <section className="py-8 md:py-4 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Des petites réparations qui <span className="text-brand-red">sauvent gros</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Pas de panique devant une petite infiltration ! La très grande majorité des problèmes peuvent être réglés de façon localisée. Nous ciblons chirurgicalement le défaut pour stopper la fuite net, ce qui protège votre maison sans exploser votre budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <Wrench size={24} />
                </div>
                Calfeutrage et joints
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Les fuites proviennent le plus souvent des cheminées, lucarnes ou évents, là où le vieux calfeutrage a séché ou craqué. Ce sont des réparations simples ! Nous retirons le vieux scellant et appliquons un produit ultra-flexible pour redonner une étanchéité parfaite à votre toiture.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={24} />
                </div>
                Solins : La cause #1
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                L'eau s'infiltre souvent sous des solins métalliques mal fixés, pliés ou rouillés. Notre équipe identifie rapidement la zone ciblée. Nous pouvons remplacer ou sceller les éléments endommagés solidement pour protéger votre investissement, <strong>sans avoir à refaire tout le toit</strong>.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <Wind size={24} />
                </div>
                Ventilation : Corriger le tir
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Si vos bardeaux ondulent ou s'il y a de la condensation, nous pouvons corriger le tir en ajoutant des évents pour optimiser la circulation d'air dans l'entretoit. Cela réduit la condensation et protège votre isolation, tout en sauvant vos bardeaux existants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quand réparer et quand remplacer */}
      <section className="py-8 md:py-4 bg-zinc-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6 tracking-tight">
              <span className="text-brand-red">Réparer</span> plutôt que tout remplacer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Parce que nous sommes honnêtes avant tout, nous ne vous proposons une réfection complète que si elle est réellement inévitable. Voici comment nous vous aidons à y voir plus clair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-6 border-b border-gray-100">La Réparation Partielle</h3>
              <p className="text-gray-600 mb-8 font-medium">Idéale si votre toiture est relativement récente (moins de 10-15 ans) et que les dommages sont localisés à un secteur spécifique.</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Coût réduit :</strong> Solution plus économique à court terme.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Correction ciblée :</strong> Remplacement de quelques bardeaux, réparation de solins de cheminée ou colmatage d'évents.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Prolonge la durée de vie :</strong> Permet de corriger un défaut mineur avant qu'il ne détruise le système en entier.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Intervention rapide :</strong> Les travaux sont généralement terminés en moins d'une journée, minimisant les désagréments.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-brand-black to-gray-900 rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_rgba(220,38,38,0.15)] border border-gray-800 text-white relative overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none"></div>
              <h3 className="text-2xl font-bold mb-6 pb-6 border-b border-gray-800 relative z-10">Rénovation Complète</h3>
              <p className="text-gray-300 mb-8 font-medium relative z-10">Recommandée lorsque la toiture approche de sa fin de vie utile (15-20+ ans) ou que les dommages causés par l'eau sont structurels. Voici notre méthode complète :</p>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-gray-300 leading-relaxed"><strong className="text-white">Dégarnissage & Inspection :</strong> On retire les anciens bardeaux pour inspecter le pontage de bois et remplacer la pourriture (souvent causée par une ventilation insuffisante ou des infiltrations d'eau).</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-gray-300 leading-relaxed"><strong className="text-white">Membrane, solins et ventilation :</strong> On installe une sous-couche synthétique protectrice, un pare-glace aux avant-toits, et de nouveaux solins. Nous ajustons ensuite la ventilation pour contrer la condensation.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-gray-300 leading-relaxed"><strong className="text-white">Installation durable :</strong> Pose experte des bardeaux selon les devis du fabricant pour prévenir les arrachements face au vent direct, garantie d'affronter nos hivers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-8 md:py-4 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6 tracking-tight">
              <span className="text-brand-red">Notre Processus</span> d'Intervention
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Efficace, transparent et professionnel. Voici comment nous traitons votre urgence ou votre projet de rénovation de A à Z.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", icon: Search, title: "Inspection", desc: "Nous examinons minutieusement le toit, l'entretoit et les gouttières pour repérer la source exacte du problème." },
              { num: "02", icon: FileText, title: "Diagnostic & Soumission", desc: "Nous vous remettons une évaluation honnête des travaux requis (partiels ou complets) avec un devis détaillé gratuit." },
              { num: "03", icon: Hammer, title: "Travaux", desc: "Notre équipe de couvreurs certifiés exécute les travaux selon les plus hauts standards, dans le respect de votre propriété." },
              { num: "04", icon: ShieldCheck, title: "Suivi & Qualité", desc: "Nettoyage complet du chantier (démagnétisation des clous) et inspection finale pour assurer votre entière satisfaction." }
            ].map((step, idx) => (
              <div key={idx} className="bg-zinc-50 p-8 rounded-[2rem] shadow-sm border border-gray-100 relative group hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-4xl font-black text-gray-100 absolute top-6 right-6 -z-0 group-hover:text-brand-red/10 transition-colors duration-500">{step.num}</div>
                <div className="flex flex-row items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-brand-red group-hover:scale-110 transition-transform duration-300 border border-gray-100 shrink-0">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10 group-hover:text-gray-700 transition-colors">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autres Services */}
      <section className="py-4 md:py-6 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-red/5 skew-x-12 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase mb-4">
                <Wrench className="w-4 h-4" /> Projets Spéciaux
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                Rénovations extérieures <span className="text-brand-red">sur mesure</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Au-delà de la toiture principale, notre équipe met son savoir-faire à votre disposition pour divers projets d'amélioration extérieure, disponibles sur demande.
              </p>
              <ul className="space-y-4">
                {[
                  "Construction et rénovation de cabanons",
                  "Réfection et construction de balcons",
                  "Installation de revêtement extérieur (contour de maison)",
                  "Divers projets d'enveloppe du bâtiment"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-red w-5 h-5 shrink-0" />
                    <span className="text-lg text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-900 rounded-3xl border border-gray-800 p-8 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden">
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-red/10 blur-3xl rounded-full"></div>
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-red/5 blur-3xl rounded-full"></div>
                <Hammer className="w-20 h-20 text-brand-red mb-6" />
                <h3 className="text-2xl font-bold mb-3 text-white">Prêt à réaliser votre projet ?</h3>
                <p className="text-gray-400 mb-6 max-w-sm">
                  Contactez-nous pour évaluer la faisabilité et obtenir une soumission pour vos travaux sur mesure.
                </p>
                <a href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-red text-white rounded-full font-bold hover:bg-white hover:text-brand-black transition-colors duration-300">
                  Demander une évaluation <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 md:py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">
              Foire Aux Questions <span className="text-brand-red">(FAQ)</span> - Réparations
            </h2>
            <p className="text-xl text-gray-600">
              Des réponses claires pour vous guider dans vos travaux de toiture.
            </p>
          </div>

          <div className="space-y-6">
            <details className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 border-l-[6px] border-l-brand-red cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1">
              <summary className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors group-open:bg-gray-50/50 outline-none list-none text-xl md:text-2xl font-bold pr-8 tracking-tight group-open:text-brand-red text-gray-900">
                Quelle est la différence entre une urgence et une réparation planifiée ?
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors group-open:bg-brand-red group-open:text-white group-open:shadow-md bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 group-open:rotate-90" />
                </div>
              </summary>
              <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg font-medium">
                <strong>L'urgence</strong> implique une infiltration d'eau active à l'intérieur de la maison ou une section de toit arrachée par le vent, nécessitant une bâche ou un colmatage immédiat pour stopper les dommages. <strong>Une réparation planifiée</strong> concerne un dommage non-critique (quelques bardeaux recourbés, vieux solins) qui ne coule pas encore mais qui doit être corrigé bientôt.
              </div>
            </details>

            <details className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 border-l-[6px] border-l-brand-black cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1">
              <summary className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors group-open:bg-gray-50/50 outline-none list-none text-xl md:text-2xl font-bold pr-8 tracking-tight group-open:text-brand-red text-gray-900">
                Est-ce que mes assurances habitation couvrent la rénovation du toit ?
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors group-open:bg-brand-red group-open:text-white group-open:shadow-md bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 group-open:rotate-90" />
                </div>
              </summary>
              <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg font-medium">
                Généralement, les assurances couvrent les dommages soudains et imprévus (ex: arbre tombé, rafales extrêmes, grêle). Ils ne couvrent <strong>pas</strong> la réfection due à l'usure normale, au vieillissement ou à un manque d'entretien. Nous pouvons vous aider à documenter les dommages pour votre assureur si la cause est fortuite.
              </div>
            </details>

            <details className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 border-l-[6px] border-l-brand-red cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1">
              <summary className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors group-open:bg-gray-50/50 outline-none list-none text-xl md:text-2xl font-bold pr-8 tracking-tight group-open:text-brand-red text-gray-900">
                Pouvez-vous réparer une fuite autour de ma cheminée ?
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors group-open:bg-brand-red group-open:text-white group-open:shadow-md bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 group-open:rotate-90" />
                </div>
              </summary>
              <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg font-medium">
                Absolument. Les fuites de cheminée ou de puits de lumière sont très fréquentes (souvent liées à des solins défectueux ou un calfeutrage asséché). Nous effectuons le remplacement des solins métalliques et scellons complètement la zone pour rendre l'ensemble étanche.
              </div>
            </details>

            <details className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 border-l-[6px] border-l-brand-black cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1">
              <summary className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors group-open:bg-gray-50/50 outline-none list-none text-xl md:text-2xl font-bold pr-8 tracking-tight group-open:text-brand-red text-gray-900">
                Pourquoi la durée de ma toiture est plus courte que prévu ?
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors group-open:bg-brand-red group-open:text-white group-open:shadow-md bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 group-open:rotate-90" />
                </div>
              </summary>
              <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg font-medium">
                La cause principale d'un vieillissement prématuré est un problème de <strong>ventilation dans l'entretoit</strong>. Si l'air ne circule pas de bas en haut (des soffites jusqu'aux évents de faîte), la chaleur détruit l'asphalte l'été, et l'humidité fait pourrir le pontage l'hiver. Nous inspectons toujours la ventilation lors d'une soumission.
              </div>
            </details>

            <details className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 border-l-[6px] border-l-brand-red cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1">
              <summary className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors group-open:bg-gray-50/50 outline-none list-none text-xl md:text-2xl font-bold pr-8 tracking-tight group-open:text-brand-red text-gray-900">
                Faites-vous les travaux de réparation aussi en hiver ?
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors group-open:bg-brand-red group-open:text-white group-open:shadow-md bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 group-open:rotate-90" />
                </div>
              </summary>
              <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg font-medium">
                Oui. Dans les Laurentides, les urgences n'attendent pas le printemps. Nous effectuons le déneigement de la zone affectée et utilisons des techniques et des scellants compatibles avec les basses températures pour réaliser des réparations temporaires ou permanentes d'urgence.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-4 bg-brand-black text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center text-center">
            <div className="bg-brand-red/20 p-4 rounded-full">
              <MapPin className="w-8 h-8 text-brand-red" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-white mb-2">Zones d'intervention d'urgence</h2>
              <p className="text-gray-400">
                Basés à <strong><Link to="/sainte-agathe-des-monts" className="text-brand-red font-bold hover:underline">{COMPANY_INFO.address.split(',')[0]}</Link>{COMPANY_INFO.address.includes(',') ? `, ${COMPANY_INFO.address.split(',')[1]}` : ''}</strong>, nos couvreurs se déplacent rapidement à <Link to="/val-david" className="text-brand-red font-bold hover:underline">Val-David</Link>, Mont-Blanc, <Link to="/mont-tremblant" className="text-brand-red font-bold hover:underline">Mont-Tremblant</Link>, Piedmont, <Link to="/saint-sauveur" className="text-brand-red font-bold hover:underline">Saint-Sauveur</Link> et partout dans les <Link to="/laurentides" className="text-brand-red font-bold hover:underline">Laurentides</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA 
        title="Votre toiture a besoin d'attention ?"
        description="N'attendez pas que les dommages s'aggravent. Une réparation rapide effectuée aujourd'hui vous sauvera des coûts faramineux de rénovation demain."
        primaryButtonText={<>Demandez une évaluation <ArrowRight className="inline ml-2" size={20} /></>}
        secondaryButtonText={<><AlertTriangle className="inline w-5 h-5 mr-2" /> Urgence ? Appelez maintenant</>}
      />

    </div>
  );
};

// Simple phone pulse icon component
const PhonePulse = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="animate-[pulse_1.5s_ease-in-out_infinite]"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
