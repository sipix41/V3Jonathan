import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Snowflake, ArrowUpRight, ShieldAlert, Droplets, HardHat, AlertTriangle, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
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

export const Deneigement: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO title="Déneigement de Toiture" description="Découvrez nos services professionnels de déneigement de toiture. Toiture Jonathan Délisle inc dans les Laurentides." canonicalUrl="/services/deneigement" />
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-8 md:py-4 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img loading="lazy" 
            src="/images/Gemini-Generated-Image-tb69k1tb69k1tb69.png" 
            alt="Déneigement de toiture professionnel dans les Laurentides" 
            className="w-full h-full object-cover opacity-50"
          decoding="async" width="800" height="600" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] -translate-y-1/4 translate-x-1/4 rounded-full pointer-events-none"></div>
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/40 text-blue-200 text-sm font-semibold mb-8 border border-blue-500/30 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              Service hivernal spécialisé — Laurentides
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Déneigement de toiture <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">professionnel</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl font-medium">
              Protégez votre toit, votre structure et votre famille contre les risques liés à l'accumulation de neige sévère dans les Laurentides.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="text-lg w-full sm:w-auto shadow-2xl shadow-blue-900/20 bg-blue-600 hover:bg-blue-500 text-white hover:-translate-y-1 transition-all flex items-center justify-center gap-2 px-8 py-4 h-auto border-none">
                  Demander une intervention <ArrowUpRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="text-lg w-full bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/40 flex items-center justify-center gap-2 px-8 py-4 h-auto transition-all backdrop-blur-sm">
                  <Phone className="w-5 h-5" /> {COMPANY_INFO.phone}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-zinc-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-brand-red transition-colors">Accueil</Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <Link to="/services" className="hover:text-brand-red transition-colors">Services</Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-900">Déneigement de Toiture</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-8 bg-zinc-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-600 mb-1">40 cm</div>
              <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Seuil critique d'épaisseur</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-600 mb-1">250 kg</div>
              <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Poids mouillé / m²</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl lg:text-4xl font-extrabold text-brand-red mb-1">24h</div>
              <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Délai Urgent</p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1">100%</div>
              <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">Équipement certifié</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Remove Snow */}
      <section className="py-8 md:py-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
               Pourquoi déneiger votre toiture dans les <span className="text-blue-600">Laurentides</span> ?
             </h2>
             <p className="text-xl text-gray-600 leading-relaxed">
              L'accumulation de neige sur une toiture peut représenter une charge structurale considérable, pouvant menacer l'intégrité de votre bâtiment. Une mesure préventive essentielle.
             </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="bg-zinc-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <ShieldAlert className="text-blue-600 group-hover:text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Surcharge structurale</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Une accumulation excessive de neige peut dépasser la capacité portante de votre toit et causer des dommages permanents à la charpente.</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-zinc-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <Snowflake className="text-blue-600 group-hover:text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Barrages de glace</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">La neige fondante qui regèle en bordure de toit forme des barrages de glace causant des infiltrations d'eau sous les bardeaux.</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-zinc-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <Droplets className="text-blue-600 group-hover:text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Infiltrations d'eau</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">L'eau de fonte retenue par la neige et la glace s'infiltre sous les bardeaux et peut causer des dommages coûteux à l'intérieur.</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-zinc-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <HardHat className="text-blue-600 group-hover:text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sécurité des occupants</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">La chute de neige ou de glace du toit représente un danger réel pour les personnes circulant près du bâtiment.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-8 md:py-4 bg-zinc-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12">
             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
               Les signes qu'une intervention est requise <span className="text-brand-red">d'urgence</span>
             </h2>
             <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
               <p className="text-xl text-gray-600 max-w-2xl">
                 Si vous observez l'un des signes suivants, une intervention rapide est cruciale pour éviter des dommages à votre bâtiment.
               </p>
               <a href={`tel:${COMPANY_INFO.phone}`} className="shrink-0">
                 <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-6 text-lg shadow-xl shadow-red-500/20 hover:-translate-y-1 transition-all rounded-full flex items-center gap-3">
                   <Phone className="w-5 h-5" />
                   Appeler le {COMPANY_INFO.phone}
                 </Button>
               </a>
             </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-l-[8px] border-brand-red rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                <AlertTriangle className="text-brand-red w-6 h-6" /> 
              </span>
              Signes d'alerte critiques
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Accumulation de neige de plus de 40 à 60 cm sur la toiture",
                "Craquements ou grincements inhabituels dans la charpente ou les murs",
                "Portes ou fenêtres qui coincent ou deviennent difficiles à ouvrir",
                "Présence de glaçons importants ou de barrages de glace en bordure de toit",
                "Infiltration d'eau visible au plafond ou aux murs intérieurs",
                "Déformation ou affaissement visible du toit depuis l'extérieur"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                   <div className="w-2 h-2 rounded-full bg-brand-red mt-2.5 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                   <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Preventative vs Emergency */}
      <section className="py-8 md:py-4 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-blue-50/50 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
           <div className="mb-16 text-center">
             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Déneigement préventif vs d'urgence</h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="bg-white rounded-[2rem] p-8 md:p-12 border border-blue-100 shadow-[0_8px_40px_rgb(0,0,0,0.04)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <h3 className="text-3xl font-bold mb-8 text-blue-900 border-b border-blue-100 pb-6">Déneigement préventif<br/><span className="text-blue-500 text-xl font-medium block mt-2">Recommandé</span></h3>
              <ul className="space-y-6">
                {[
                  "Planifié avant les seuils critiques",
                  "Tarifs plus avantageux",
                  "Intervention planifiée sans stress",
                  "Disponible via contrat saisonnier",
                  "Protège les bardeaux et la structure",
                  "Prévient les barrages de glace"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-gray-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-brand-black rounded-[2rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
              <h3 className="text-3xl font-bold mb-8 text-white border-b border-white/10 pb-6 flex items-center justify-between">
                <div>D'urgence<br/><span className="text-brand-red text-xl font-medium block mt-2">Situation critique</span></div>
                <AlertTriangle className="w-10 h-10 text-brand-red opacity-80" />
              </h3>
              <ul className="space-y-6">
                {[
                  "Requis en situation critique",
                  "Intervention prioritaire dès que possible",
                  "Disponible pour les cas urgents",
                  "Tarifs variables selon urgence",
                  "Inspection de l'état du toit incluse",
                  "Sécurisation du périmètre incluse lors de l'intervention"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-gray-300 font-medium">
                    <div className="w-2 h-2 rounded-full bg-brand-red shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
         </div>
      </section>

      {/* Seasonal Contract & Processus */}
      <section className="py-8 md:py-4 border-t border-gray-100 bg-zinc-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-brand-black rounded-[3rem] p-8 md:p-12 lg:p-16 text-white overflow-hidden relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-600/10 skew-x-12 translate-x-1/3"></div>
            <Snowflake className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 animate-spin-slow" />
            
            <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
              <div className="xl:col-span-7">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 text-sm font-semibold mb-8 border border-blue-500/30">
                  Offre exclusive — Laurentides
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">Soyez prioritaire tout l'hiver avec un <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">contrat saisonnier</span></h3>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  {COMPANY_INFO.name} offre des contrats saisonniers de déneigement de toiture. Profitez d'une tranquillité d'esprit complète tout au long de l'hiver, sans avoir à suivre la météo de près.
                </p>
  
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {[
                    "Priorité lors des grandes chutes",
                    "Tarifs préférentiels globaux",
                    "Interventions selon vos besoins",
                    "Inspection de toit incluse",
                    "Bâtiments résidentiels et commerciaux",
                    "Suivi personnalisé par nos experts"
                  ].map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
                      <span className="text-gray-200 text-lg">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link to="/contact">
                    <Button size="lg" className="text-lg bg-blue-600 hover:bg-blue-500 text-white border-none shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 px-8 py-4 h-auto rounded-full w-full sm:w-auto justify-center">
                      Demander une soumission pour un contrat <ArrowUpRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="xl:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>
                <div className="mb-8 border-b border-white/10 pb-6">
                  <h4 className="text-2xl font-bold text-white tracking-tight">Notre processus d'intervention</h4>
                </div>
      
                <div className="flex flex-col gap-6 relative">
                  <div className="absolute left-5 top-5 bottom-8 w-px bg-white/10 z-0"></div>
                  {[
                    {
                      title: "Appel & Évaluation",
                      desc: `Vous nous contactez au ${COMPANY_INFO.phone}.`
                    },
                    {
                      title: "Planification",
                      desc: "Nous confirmons la date. Vous assurez l'accès."
                    },
                    {
                      title: "Intervention",
                      desc: `Déneigement complet en toute sécurité.`
                    },
                    {
                      title: "Inspection",
                      desc: "Vérification visuelle de la toiture."
                    },
                    {
                      title: "Rapport",
                      desc: `Observations transmises au client.`
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-5 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-brand-black border-2 border-blue-500/50 text-blue-400 flex items-center justify-center font-bold text-lg shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="pt-1.5">
                        <h5 className="text-lg font-bold text-white mb-1">{step.title}</h5>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-8 md:py-4 border-t border-gray-100 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16 text-center">
             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            <details className="bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1">
              <summary className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors group-open:bg-gray-50/50 outline-none list-none text-xl font-bold pr-8 group-open:text-blue-600 text-gray-900 border-l-[6px] border-l-blue-600">
                À quelle fréquence faut-il déneiger son toit dans les Laurentides?
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-open:bg-blue-600 group-open:text-white bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 group-open:rotate-90" />
                </div>
              </summary>
              <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg border-l-[6px] border-l-blue-600 group-open:bg-gray-50/50 hidden group-open:block">
                Il est généralement recommandé d'intervenir dès que l'accumulation de neige atteint 40 à 60 cm, ou après plusieurs chutes successives. Dans les Laurentides, il peut être nécessaire de déneiger 3 à 6 fois par saison.
              </div>
            </details>

            <details className="bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1">
              <summary className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors group-open:bg-gray-50/50 outline-none list-none text-xl font-bold pr-8 group-open:text-blue-600 text-gray-900 border-l-[6px] border-l-brand-black group-open:border-l-blue-600">
                Est-ce que déneiger moi-même mon toit est dangereux?
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-open:bg-blue-600 group-open:text-white bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 group-open:rotate-90" />
                </div>
              </summary>
              <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg border-l-[6px] border-l-blue-600 group-open:bg-gray-50/50 hidden group-open:block">
                Oui, le déneigement de toiture par un non-professionnel comporte des risques sérieux de chute, blessures et dommages aux bardeaux. {COMPANY_INFO.name} dispose de l'équipement de sécurité certifié et de l'expérience nécessaires.
              </div>
            </details>

            <details className="bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1">
              <summary className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors group-open:bg-gray-50/50 outline-none list-none text-xl font-bold pr-8 group-open:text-blue-600 text-gray-900 border-l-[6px] border-l-brand-black group-open:border-l-blue-600">
                Combien coûte un service de déneigement de toiture à Sainte-Agathe-des-Monts?
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-open:bg-blue-600 group-open:text-white bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 group-open:rotate-90" />
                </div>
              </summary>
              <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg border-l-[6px] border-l-blue-600 group-open:bg-gray-50/50 hidden group-open:block">
                Le tarif varie selon la superficie de votre toit, la quantité de neige accumulée, la pente et l'accessibilité de votre propriété. Contactez-nous au {COMPANY_INFO.phone} pour obtenir une soumission personnalisée.
              </div>
            </details>

            <details className="bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1">
              <summary className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors group-open:bg-gray-50/50 outline-none list-none text-xl font-bold pr-8 group-open:text-blue-600 text-gray-900 border-l-[6px] border-l-brand-black group-open:border-l-blue-600">
                Le déneigement de toiture peut-il endommager mes bardeaux?
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-open:bg-blue-600 group-open:text-white bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 group-open:rotate-90" />
                </div>
              </summary>
              <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg border-l-[6px] border-l-blue-600 group-open:bg-gray-50/50 hidden group-open:block">
                Lorsqu'il est effectué par des professionnels comme {COMPANY_INFO.name}, le déneigement n'endommage pas les bardeaux. Notre équipe utilise des techniques et des outils adaptés.
              </div>
            </details>

            <details className="bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1">
              <summary className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors group-open:bg-gray-50/50 outline-none list-none text-xl font-bold pr-8 group-open:text-blue-600 text-gray-900 border-l-[6px] border-l-brand-black group-open:border-l-blue-600">
                Intervenez-vous aussi pour le retrait de barrages de glace?
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-open:bg-blue-600 group-open:text-white bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                  <ChevronRight className="w-6 h-6 transition-transform duration-300 group-open:rotate-90" />
                </div>
              </summary>
              <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg border-l-[6px] border-l-blue-600 group-open:bg-gray-50/50 hidden group-open:block">
                Oui. {COMPANY_INFO.name} effectue le retrait sécuritaire des barrages de glace en bordure de toit, qui sont une cause fréquente d'infiltrations d'eau dans les résidences des Laurentides.
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* Service Areas (Removed to simplify, similar blocks are common. The FAQ mentions areas) */}
      
      {/* Final CTA */}
      <section className="py-8 md:py-4 bg-[#1a5b9e] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Protégez votre toit cet hiver<br />
            Agissez maintenant
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto font-medium">
            Ne laissez pas la neige s'accumuler sur votre toiture. Contactez {COMPANY_INFO.name} dès aujourd'hui pour une soumission gratuite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="text-lg w-full sm:w-auto px-8 py-3 bg-brand-black hover:bg-gray-900 shadow-2xl hover:-translate-y-1 transition-all rounded-full border-none">
                Soumission gratuite
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto block">
              <Button size="lg" variant="outline" className="text-lg w-full sm:w-auto px-8 py-3 bg-white/10 hover:bg-white text-white hover:text-blue-900 border-white/30 backdrop-blur-sm flex items-center justify-center gap-2 rounded-full transition-all">
                <Phone className="w-5 h-5" /> {COMPANY_INFO.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
