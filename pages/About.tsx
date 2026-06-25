import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Award, ThumbsUp, Search, FileSignature, Users, HardHat, CheckCircle2, Trash2, Shield, ShieldCheck, Star, Quote } from 'lucide-react';
import { Button } from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen">
      <SEO 
        title="À Propos de Toiture Jonathan Délisle Inc | Notre Histoire" 
        description="Découvrez l'histoire, les valeurs et l'engagement envers la qualité de Toiture Jonathan Délisle Inc., votre expert couvreur de confiance dans les Laurentides depuis plus de 17 ans." 
        canonicalUrl="/a-propos" 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-10 md:pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6 md:gap-8 text-center pt-2 md:pt-4">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase mb-4">
                <Users className="w-4 h-4" /> NOTRE HISTOIRE
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-white mb-2 tracking-tight"><span className="text-brand-red">À Propos</span> de Nous</h1>
              <p className="text-[clamp(11px,3.5vw,20px)] lg:text-[clamp(16px,1.8vw,22px)] text-gray-300 font-medium whitespace-nowrap tracking-tight">Une entreprise familiale ancrée dans les Laurentides.</p>
            </div>
            
            <div className="relative mt-2 md:mt-0">
               <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-brand-red -mt-4 -ml-4"></div>
               <img loading="lazy" 
                src="https://i.postimg.cc/50b4BJSb/B.jpg" 
                alt="Jonathan Délisle sur un chantier" 
                className="rounded-xl shadow-2xl w-full aspect-[4/3] object-cover border border-zinc-800 relative z-10"
              decoding="async" width="800" height="600" />
               <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-brand-red -mb-4 -mr-4"></div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-12">
              <a 
                href="https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/5831965801?mode=Entreprise"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://www.image-heberg.fr/files/17783600033809957581.jpg" 
                  alt="Logo RBQ" 
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain" 
                loading="lazy" decoding="async" width="150" height="96" />
              </a>
              <a 
                href="https://www.apchq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://www.image-heberg.fr/files/177835927549167421.webp" 
                  alt="Logo APCHQ" 
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain" 
                loading="lazy" decoding="async" width="150" height="96" />
              </a>
            </div>
          </div>

          <div className="md:pl-4">
            <h2 className="text-3xl font-bold text-white mb-6">Un mot du propriétaire</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Bonjour, je suis <strong className="text-brand-red">{COMPANY_INFO.owner}</strong>. Avec plus de <strong className="text-brand-red">{COMPANY_INFO.yearsExperience} ans d'expérience</strong> dans le domaine de la toiture, j'ai fondé mon entreprise sur des valeurs simples mais essentielles : l'honnêteté, le travail bien fait et le respect du client.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Basés à <strong><Link to="/sainte-agathe-des-monts" className="text-white hover:text-brand-red transition-colors underline">{COMPANY_INFO.city}</Link></strong>, nous servons fièrement la communauté des {COMPANY_INFO.region}. Nous comprenons que votre toiture est l'investissement le plus important pour protéger votre maison. C'est pourquoi je suis présent sur chaque chantier pour m'assurer que les standards de qualité les plus élevés sont respectés.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <Link to="/sainte-agathe-des-monts" className="block text-center p-4 border border-zinc-700 bg-zinc-900/50 rounded hover:border-brand-red transition-all group scale-100 hover:scale-105 cursor-pointer">
                <MapPin className="mx-auto text-brand-red mb-2 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-bold text-white">Locale</h4>
                <p className="text-sm text-gray-400">Sainte-Agathe-des-Monts</p>
              </Link>
              <a href="#testimonials" className="block text-center p-4 border border-zinc-700 bg-zinc-900/50 rounded hover:border-brand-red transition-all group scale-100 hover:scale-105 cursor-pointer">
                <ThumbsUp className="mx-auto text-brand-red mb-2 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-bold text-white">Recommandée</h4>
                <p className="text-sm text-gray-400">Satisfaction 100%</p>
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="shadow-brand-red/20 shadow-lg w-full sm:w-auto">Parlez-nous de votre projet</Button>
              </Link>
              <Link to="/realisations">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-zinc-600 text-white hover:bg-zinc-800 hover:border-zinc-500 border-2"
                >
                  Visitez Nos Réalisations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notre approche et Sécurité, qualité, propreté */}
      <div className="bg-white py-4 lg:py-6 relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column: Notre approche transparente */}
            <div className="space-y-12">
              <div className="relative">
                <div className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                  Méthodologie
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6 tracking-tight">
                  Notre approche <span className="text-brand-red">transparente</span>
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed max-w-xl">
                  Pour nous, chaque projet commence par une éducation du client. Nous ne vendons pas qu'un toit : nous conseillons le type de bardeaux le plus approprié pour votre propriété et nous expliquons pourquoi elle a besoin de telle membrane ou de tel type de ventilation.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="group p-8 rounded-2xl bg-zinc-50 transition-all duration-300 hover:bg-white hover:border-brand-red/30 hover:shadow-xl hover:shadow-zinc-200/50 border border-zinc-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300 shadow-sm border border-zinc-100">
                      <Search className="w-6 h-6 text-brand-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-wider">Diagnostic de précision</h3>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    Nous analysons méticuleusement l'état des solins, la santé du contreplaqué et l'efficacité des aérateurs pour identifier la vraie source du problème.
                  </p>
                </div>

                <div className="group p-8 rounded-2xl bg-zinc-50 transition-all duration-300 hover:bg-white hover:border-brand-red/30 hover:shadow-xl hover:shadow-zinc-200/50 border border-zinc-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300 shadow-sm border border-zinc-100">
                      <FileSignature className="w-6 h-6 text-brand-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-wider">Soumission détaillée</h3>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    Aucun frais caché. Tout est spécifié noir sur blanc, incluant le remplacement du pontage en mauvais état si nécessaire. Vous êtes systématiquement consulté et averti avant toute modification imprévue pour éviter les surprises sur la facture.
                  </p>
                </div>

                <div className="group p-8 rounded-2xl bg-zinc-50 transition-all duration-300 hover:bg-white hover:border-brand-red/30 hover:shadow-xl hover:shadow-zinc-200/50 border border-zinc-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300 shadow-sm border border-zinc-100">
                      <Users className="w-6 h-6 text-brand-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-wider">Communication directe</h3>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    Vous faites affaire avec une entreprise humaine où le propriétaire veille personnellement à la satisfaction de chaque client.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Sécurité, qualité et propreté */}
            <div className="space-y-12">
              <div className="relative">
                <div className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                  Sur le terrain
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6 tracking-tight">
                  Sécurité, qualité & <span className="text-brand-red">propreté</span>
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed max-w-xl">
                  Le respect de votre investissement. Le chaos sur un chantier est inacceptable. Nous avons instauré une charte de travail stricte pour votre tranquillité d'esprit.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="group p-8 rounded-2xl bg-zinc-50 transition-all duration-300 hover:bg-white hover:border-brand-red/30 hover:shadow-xl hover:shadow-zinc-200/50 border border-zinc-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300 shadow-sm border border-zinc-100">
                      <HardHat className="w-6 h-6 text-brand-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-wider">Sécurité absolue</h3>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    Nos équipes respectent rigoureusement les normes de la CNESST. L'usage de harnais et d'équipements de pointe est obligatoire pour prévenir tout incident.
                  </p>
                </div>

                <div className="group p-8 rounded-2xl bg-zinc-50 transition-all duration-300 hover:bg-white hover:border-brand-red/30 hover:shadow-xl hover:shadow-zinc-200/50 border border-zinc-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300 shadow-sm border border-zinc-100">
                      <CheckCircle2 className="w-6 h-6 text-brand-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-wider">Standard de qualité</h3>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    Nous utilisons des bardeaux de haute performance et portons une attention obsessionnelle aux noues et aux jonctions critiques du toit.
                  </p>
                </div>

                <div className="group p-8 rounded-2xl bg-zinc-50 transition-all duration-300 hover:bg-white hover:border-brand-red/30 hover:shadow-xl hover:shadow-zinc-200/50 border border-zinc-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300 shadow-sm border border-zinc-100">
                      <Trash2 className="w-6 h-6 text-brand-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-wider">Chantier impeccable</h3>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    À la fin de chaque journée, votre terrain est nettoyé. Nous utilisons des aimants industriels pour récupérer chaque clou et des toiles de protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RBQ, assurance et garantie */}
      <div className="bg-zinc-900 border-t border-zinc-800 py-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <img loading="lazy" src="https://i.postimg.cc/xC50gZ6N/telecharge-(16).jpg" className="w-full h-full object-cover" alt="Background" decoding="async" width="800" height="600" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">RBQ, assurance et garantie</h2>
              <p className="text-xl text-brand-red font-medium mb-8">Une protection juridique totale</p>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Travailler avec {COMPANY_INFO.name}, c'est choisir la tranquillité d'esprit légale et financière.
              </p>
              <ul className="space-y-8">
                <li className="flex items-start gap-5 group cursor-default">
                  <div className="w-14 h-14 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0 border border-brand-red/20 neon-pulse-effect group-hover:scale-125 transition-transform duration-300">
                    <Award className="text-brand-red w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      <a 
                        href="https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/5831965801?mode=Entreprise"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-red transition-colors"
                      >
                        Licence RBQ ({COMPANY_INFO.rbq})
                      </a>
                    </h4>
                    <p className="text-gray-400 leading-relaxed">Nous sommes fiers détenteurs d'une licence de la Régie du bâtiment du Québec, attestant de nos compétences professionnelles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 group cursor-default">
                  <div className="w-14 h-14 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0 border border-brand-red/20 neon-pulse-effect group-hover:scale-125 transition-transform duration-300">
                    <ShieldCheck className="text-brand-red w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Assurance Responsabilité</h4>
                    <p className="text-gray-400 leading-relaxed">Nous détenons une couverture complète de plusieurs millions pour protéger votre bâtiment contre tout imprévu durant les travaux.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 group cursor-default">
                  <div className="w-14 h-14 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0 border border-brand-red/20 neon-pulse-effect group-hover:scale-125 transition-transform duration-300">
                    <Shield className="text-brand-red w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Garantie Double</h4>
                    <p className="text-gray-400 leading-relaxed">Vous bénéficiez de la garantie du manufacturier sur les matériaux et de notre garantie exclusive sur la main-d’œuvre. Si un problème survient, nous sommes là.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-brand-red rounded-3xl transform rotate-3 scale-105"></div>
              <img loading="lazy" src="https://www.image-heberg.fr/files/17711315183833199704.jpg" alt="Jonathan Délisle sur le toit" className="relative z-10 rounded-3xl shadow-2xl object-cover h-[550px] w-full" decoding="async" width="800" height="600" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-zinc-50 py-8 md:py-12 border-t border-zinc-200 scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-extrabold text-zinc-900 mb-2 uppercase tracking-wider">Ce que disent nos clients</h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-4"></div>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto font-light italic">
              "La satisfaction de nos clients est notre meilleure carte de visite."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 flex flex-col relative">
              <Quote className="absolute top-4 right-6 text-zinc-100 w-10 h-10 -z-0" />
              <div className="flex mb-3 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-zinc-700 leading-relaxed mb-4 italic relative z-10 text-sm">
                "Jonathan et son équipe ont fait un travail exceptionnel. Ce que j'ai le plus apprécié, c'est la clarté de la soumission. Pas de surprises, tout était exactement comme prévu. Je recommande fortement !"
              </p>
              <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red font-bold text-base">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">Marc-André T.</h4>
                  <p className="text-xs text-zinc-500">Sainte-Agathe-des-Monts</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 flex flex-col relative transform scale-105 z-10 border-t-4 border-t-brand-red">
               <Quote className="absolute top-4 right-6 text-zinc-100 w-10 h-10 -z-0" />
              <div className="flex mb-3 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-zinc-700 leading-relaxed mb-4 italic relative z-10 text-sm">
                "J'avais peur du bordel sur mon terrain, mais Toiture Jonathan Délisle a été impeccable. À la fin de chaque journée, le terrain était passé à l'aimant industriel. Mon toit est magnifique et mon terrain est propre !"
              </p>
              <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red font-bold text-base">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">Sophie L.</h4>
                  <p className="text-xs text-zinc-500">Val-David</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 flex flex-col relative">
               <Quote className="absolute top-4 right-6 text-zinc-100 w-10 h-10 -z-0" />
              <div className="flex mb-3 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-zinc-700 leading-relaxed mb-4 italic relative z-10 text-sm">
                "Un service humain de A à Z. Voir le propriétaire sur le toit avec ses gars, ça donne confiance. On sent qu'ils prennent leur travail à cœur. La finition des noues est exemplaire."
              </p>
              <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red font-bold text-base">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">Pierre-Luc B.</h4>
                  <p className="text-xs text-zinc-500">Saint-Sauveur</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href={COMPANY_INFO.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-red font-bold border-b-2 border-brand-red/30 hover:border-brand-red transition-all pb-1 group text-sm"
            >
              Consulter plus d'avis sur Facebook
              <ThumbsUp className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-white py-4 text-center border-t-8 border-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-black uppercase tracking-wider mb-2">Prêt à confier votre toiture à nos experts ?</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light max-w-3xl mx-auto">
            Demandez une estimation gratuite aujourd'hui et découvrez la différence qu'un service d'excellence peut faire.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg hover:shadow-brand-red/40 bg-brand-red text-white hover:bg-red-700">
                Soumission gratuite
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto block">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg hover:shadow-brand-red/40 bg-brand-red text-white hover:bg-red-700">
                Appeler le {COMPANY_INFO.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};