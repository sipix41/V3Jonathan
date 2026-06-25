import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, AlertTriangle, ShieldCheck, ChevronRight, Droplets, Sun, Eye, Phone } from 'lucide-react';
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

export const Inspection: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO title="Inspection de Toiture" description="Découvrez nos services d'expert couvreur pour l'inspection de toiture. Toiture Jonathan Délisle inc dans les Laurentides." canonicalUrl="/services/inspection" />
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-6 md:py-8 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img loading="lazy" 
            src="https://i.ibb.co/Dgs96DpR/533529545-702578862825816-4072289905900816055-n.jpg" 
            alt="Inspection de toiture" 
            className="w-full h-full object-cover opacity-40"
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
              Évaluation Préventive
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              Inspection de Toiture à <span className="text-brand-red">{COMPANY_INFO.region}</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            >
              Prévenez les dommages et prolongez la vie de votre toiture. Une inspection rigoureuse pour identifier les défis cachés par nos experts certifiés.
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border-l-4 border-brand-red mb-10 inline-block"
            >
              <p className="text-white italic">
                <strong className="text-brand-red">Le saviez-vous ?</strong> Une inspection annuelle peut doubler la durée de vie utile de votre revêtement de bardeaux.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact">
                <Button size="lg" className="text-lg w-full sm:w-auto shadow-2xl hover:shadow-brand-red/40 bg-brand-red hover:scale-105 transition-transform">
                  Demander mon inspection gratuite
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="text-lg w-full bg-white/5 hover:bg-brand-red hover:border-brand-red text-white border-white/20 flex items-center justify-center gap-2 transition-all">
                  <PhonePulse /> Appelez : {COMPANY_INFO.phone}
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
            <span className="text-gray-900 font-medium">Inspection</span>
          </div>
        </div>
      </div>

      {/* Pourquoi planifier une inspection */}
      <section className="py-8 md:py-4 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6">
              Pourquoi faire <span className="text-brand-red">inspecter</span> sa toiture ?
            </h2>
            <p className="text-xl text-gray-600">
              Une inspection après l’hiver ou après une tempête est cruciale dans les Laurentides, tout comme l'évaluation de routine pour prolonger la vie de vos bardeaux. Ne laissez pas les intempéries dégrader votre investissement sans réagir !
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-red/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                  <Eye className="text-brand-red group-hover:text-white w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap truncate">Inspection préventive</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                C'est la tranquillité d'esprit absolue avant signature, ou simplement pour documenter l'état réel de votre investissement et éviter les surprises coûteuses.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-red/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                  <AlertTriangle className="text-brand-red group-hover:text-white w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap truncate">Après l'hiver ou tempête</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Vérification immédiate des dommages invisibles du sol après les fortes chutes de neige, de grêle, ou des vents violents.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-red/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                  <Sun className="text-brand-red group-hover:text-white w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap truncate">Gel et dégel</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Les barrages de glace hivernaux peuvent endommager votre membrane et causer des infiltrations majeures dans la structure.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-red/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                  <ShieldCheck className="text-brand-red group-hover:text-white w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap truncate">Membrane et solins</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Vérification des joints cruciaux, de l'état de la membrane, et du flux d'air pour contrer la ventilation insuffisante.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-red/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                  <Droplets className="text-brand-red group-hover:text-white w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap truncate">Moisissures et mousses</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Indique une rétention d'humidité nuisible qui peut accélérer la dégradation de votre toiture et affecter votre santé.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-red/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                  <Search className="text-brand-red group-hover:text-white w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 whitespace-nowrap truncate">Structure et pontage</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Détection de zones molles ou de signes de pourriture du bois sous-jacent garantissant la solidité de votre toit.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-8 md:py-4 bg-white border-y border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-red/5 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6">
              Ce que nous vérifions : <span className="text-brand-red">Notre Processus d'Inspection</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nous ne nous contentons pas de "regarder". Nous analysons méticuleusement chaque composante de votre système de toiture pour une évaluation rigoureuse :
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                step: "1",
                title: "Examen Visuel & Surface",
                desc: "Analyse détaillée de la surface des bardeaux et de l'usure.",
                benefit: "Identification des zones d'usure avant qu'elles ne fassent défaut."
              },
              {
                step: "2",
                title: "État des Solins (Essentiels)",
                desc: "Inspection des solins autour des cheminées et noues.",
                benefit: "Garantie d'une étanchéité maximale contre les infiltrations."
              },
              {
                step: "3",
                title: "Évents et Circulation d'Air",
                desc: "Mesure du flux d'air et inspection de la ventilation de l'entretoit.",
                benefit: "Permet de réduire la condensation et d'éviter la pourriture."
              },
              {
                step: "4",
                title: "Isolation et Pontage",
                desc: "Vérification de l'entretoit pour s'assurer d'une toiture adaptée.",
                benefit: "Aide à prévenir les barrages de glace hivernaux."
              },
              {
                step: "5",
                title: "Rapport Complet",
                desc: "Remise d'un rapport, photos et recommandations claires.",
                benefit: "Une preuve visuelle claire pour vos assurances ou la revente."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-zinc-50 border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl hover:border-brand-red/30 transition-all duration-300 relative group"
              >
                <div className="absolute top-6 right-6 text-4xl font-black text-gray-200 group-hover:text-brand-red/10 transition-colors duration-300">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-10">{item.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-brand-red font-bold uppercase tracking-widest mb-1">Action</p>
                      <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-brand-black font-bold uppercase tracking-widest mb-1">Bénéfice</p>
                      <p className="text-gray-600 font-medium leading-relaxed">{item.benefit}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEO/Localisation Block */}
      <section className="py-8 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-brand-black leading-relaxed italic font-medium">
            "Que vous soyez à <strong>Sainte-Agathe-des-Monts</strong>, <strong>Val-David</strong> ou dans les environs de <strong>{COMPANY_INFO.region}</strong>, notre équipe de couvreurs locaux connaît les défis climatiques de notre région. Des hivers rigoureux aux orages d'été, nous adaptons nos recommandations pour que votre toiture en bardeaux résiste au climat québécois."
          </p>
        </div>
      </section>

      {/* Signes Toiture Fin de Vie */}
      <section className="py-8 md:py-4 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-red/5 skew-x-12 translate-x-1/3"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
              7 Signes que votre toiture<br />
              <span className="text-brand-red">est en fin de vie</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Il est parfois difficile de savoir s'il faut simplement réparer ou remplacer. Si vous observez l'un des signes suivants, une inspection professionnelle est urgente.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { title: "Des granules dans vos gouttières", text: "Si vous retrouvez des dépôts de sable noir ou gris dans vos gouttières, cela signifie que vos bardeaux perdent leur protection UV. Le bardeau devient cassant et perd son étanchéité." },
              { title: "Bardeaux qui gondolent ou se détachent", text: "Le bardeau se courbe, ondule vers le haut ou se détache complètement au vent ? C’est souvent le signe d’une ventilation insuffisante de l’entretoit ou d’un assèchement du bitume." },
              { title: "Effet 'Dents de Scie'", text: "Après une tempête ou de forts vents, vérifiez si des morceaux de bardeaux jonchent votre terrain. Même un seul bardeau manquant expose la membrane protectrice." },
              { title: "Taches sombres ou mousse", text: "La présence de mousses vertes ou d'algues n'est pas seulement esthétique. Ces organismes retiennent l’humidité contre le bardeau, ce qui fait pourrir la structure." },
              { title: "Lumière dans le grenier", text: "Si vous pouvez voir la lumière du jour passer à travers les planches de votre toit depuis votre grenier, l'eau passera aussi. C'est une urgence critique." },
              { title: "Infiltrations d'eau et cernes", text: "Des taches jaunâtres ou brunâtres sur vos plafonds ou dans le haut de vos murs indiquent des infiltrations d'eau. L'isolation est déjà imbibée." },
              { title: "L'âge de votre toiture", text: "Les signes d'usure deviennent criants avec l'âge. Si votre toit approche 15 à 22 ans, ou subit chroniquement le gel et dégel, une inspection dictera la marche à suivre." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-brand-red/50 transition-all duration-300 group flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red font-black text-xl flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                    {idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-red transition-colors">{item.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}

            <motion.div 
              variants={fadeIn}
              className="md:col-span-1 lg:col-span-2 bg-brand-red border border-brand-red/50 p-8 rounded-3xl flex items-center justify-center text-center shadow-2xl shadow-brand-red/20"
            >
              <p className="text-white text-xl md:text-xl lg:text-2xl font-medium tracking-tight">
                <strong>Conseil d'expert :</strong> "Mieux vaut prévenir que guérir. Une inspection préventive coûte une fraction du prix d'un remplacement complet suite à une infiltration majeure."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4 tracking-tight">
              Questions <span className="text-brand-red">Fréquentes</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Combien de temps dure une inspection de toiture ?",
                a: "Une inspection professionnelle dure généralement entre 45 minutes et 1 heure. Cela comprend l'examen de la surface extérieure du toit, les vérifications des gouttières, et souvent une visite rapide du grenier ou de l'entretoit pour valider la ventilation et l'absence d'infiltration."
              },
              {
                q: "Est-ce qu'une inspection est couverte par mes assurances ?",
                a: "Les inspections de routine ne sont généralement pas couvertes. Toutefois, si l'inspection fait suite à un événement couvert (comme une tempête de grêle, un vent violent ou la chute d'un arbre), votre assureur peut exiger ou rembourser les frais d'inspection dans le cadre de votre réclamation."
              },
              {
                q: "À quelle fréquence devrais-je faire inspecter ma toiture ?",
                a: "Nous recommandons une inspection professionnelle au moins une fois par an, de préférence au printemps pour évaluer les dommages potentiels causés par l'hiver, ou à l'automne pour s'assurer que le toit est prêt à affronter le froid et la neige."
              },
              {
                q: "Quels sont les éléments spécifiques vérifiés lors de l'inspection ?",
                a: "Nos experts vérifient l'état général des bardeaux (usure, fissures, granules manquants), les solins autour des cheminées et évents, l'étanchéité des noues, l'état du pontage, ainsi que la ventilation de l'entretoit."
              },
              {
                q: "Est-ce que je dois être présent lors de l'inspection de ma toiture ?",
                a: "Il n'est pas obligatoire d'être présent si l'inspection ne concerne que l'extérieur, mais c'est recommandé. Votre présence nous permet de vous montrer immédiatement les potentiels problèmes trouvés et de discuter des solutions possibles."
              },
              {
                q: "Que se passe-t-il si vous trouvez des problèmes pendant l'inspection ?",
                a: "Nous vous fournirons un rapport détaillé avec des photos à l'appui, ainsi qu'une soumission claire et sans engagement pour les réparations nécessaires. Aucuns travaux ne seront effectués sans votre accord explicite."
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 cursor-pointer group hover:shadow-md hover:-translate-y-0.5 open:shadow-[0_8px_30px_rgb(0,0,0,0.08)] open:-translate-y-1">
                <summary className={`w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors group-open:bg-gray-50/50 outline-none list-none text-xl font-bold pr-8 group-open:text-brand-red text-gray-900 border-l-[6px] ${idx % 2 === 0 ? 'border-l-brand-red' : 'border-l-brand-black'} group-open:border-l-brand-red`}>
                  {faq.q}
                  <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-open:bg-brand-red group-open:text-white bg-gray-100 text-gray-500 group-hover:bg-gray-200">
                    <ChevronRight className="w-6 h-6 transition-transform duration-300 group-open:rotate-90" />
                  </div>
                </summary>
                <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg border-l-[6px] border-l-brand-red group-open:bg-gray-50/50 hidden group-open:block">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-4 text-center relative overflow-hidden border-t-8 border-brand-red">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red via-transparent to-transparent"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-black mb-8 uppercase tracking-wider leading-tight"
          >
            Ne laissez pas une petite fissure<br />
            <span className="text-brand-red">devenir une grosse facture.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg lg:text-xl font-medium mb-12 max-w-3xl mx-auto italic"
          >
            Contactez {COMPANY_INFO.name} dès aujourd'hui pour planifier une inspection de votre toiture.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto text-xl px-12 py-6 shadow-2xl shadow-brand-red/40 bg-brand-red text-white hover:bg-red-700 hover:scale-105 transition-all font-black">
                DEMANDER MON INSPECTION
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto block">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-xl px-12 py-6 border-2 border-gray-200 hover:border-brand-red hover:bg-brand-red text-brand-black hover:text-white hover:scale-105 transition-all font-bold flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" /> {COMPANY_INFO.phone}
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

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
