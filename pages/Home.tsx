import React, { Suspense,  useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, ArrowRight, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';
const ChampsExpertise = React.lazy(() => import('../components/ChampsExpertise').then(m => ({ default: m.ChampsExpertise })));

const REVIEWS = [
  {
    id: 1,
    name: "David Waddington",
    location: "Sainte-Agathe-Des-Monts",
    text: "Very impressed with the professionalism and competence of Jonathan Delisle and his team. They worked hard, and now I have a nice new roof at a reasonable price.",
    initials: "DW"
  },
  {
    id: 2,
    name: "Julie Nantel",
    location: "Val-David",
    text: "Superbe travail - excellent service à la clientèle et bon prix! Et en plus très bonne communication.",
    initials: "JN"
  },
  {
    id: 3,
    name: "Michel Lessard",
    location: "Lachute",
    text: "Toiture refaite auj. au Lac Clair. Un gros merci à Jonathan et son équipe pour un super travail professionel et absolument impeccable! Nous recommandons sans hésitation! 👍🙂",
    initials: "ML"
  },
  {
    id: 4,
    name: "Pierre Gagnon",
    location: "Saint-Sauveur",
    text: "Une équipe ponctuelle et propre. Ils ont laissé le chantier impeccable après l'installation de ma toiture en bardeaux. Je recommande fortement.",
    initials: "PG"
  },
  {
    id: 5,
    name: "Sophie Bouchard",
    location: "Mont-Tremblant",
    text: "Réparation d'urgence effectuée rapidement avant l'hiver. Le service est courtois et le prix était très honnête pour la qualité du travail.",
    initials: "SB"
  }
];

const TURNKEY_SERVICES = [
  "Protection complète de votre terrain et aménagement paysager",
  "Enlèvement et disposition écologique des vieux bardeaux",
  "Fourniture d'un conteneur à déchets à nos frais",
  "Nettoyage minutieux du périmètre avec balai magnétique (clous)",
  "Inspection finale rigoureuse avec le propriétaire"
];

const STARS_ARRAY = [0, 1, 2, 3, 4];

const BACKGROUND_IMAGES = [
  "https://i.postimg.cc/76wH34nT/telecharge-(9).jpg",
  "https://i.postimg.cc/SskS64fS/telecharge-(4).jpg",
  "https://i.postimg.cc/gJmzVpHR/telecharge-(10).jpg"
];

export const Home: React.FC = () => {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll for hero background
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgImageIndex(prev => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, []);

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerPage, isPaused]);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Toiture TJD | Couvreur d'excellence"
        description="Expert en toiture à Sainte-Agathe-des-Monts. Toiture Bardeaux, Membrane, réparation et déneigement. Soumission gratuite. RBQ: 5831-9658-01."
        canonicalUrl="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-[550px] md:h-[650px] flex items-center bg-gray-900 py-4 md:py-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {BACKGROUND_IMAGES.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`Toiture neuve Laurentides ${idx + 1}`} 
              loading={idx === 0 ? "eager" : "lazy"}
              {...({ fetchpriority: idx === 0 ? "high" : "auto" } as any)}
              decoding={idx === 0 ? "sync" : "async"}
              className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${idx === bgImageIndex ? 'opacity-40' : 'opacity-0'} ${idx === 0 ? 'object-cover object-top' : 'object-contain object-center'}`}
            width="800" height="600" />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/70 md:via-black/50 to-transparent z-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-tight mb-4 md:mb-6">
              Expertise et <span className="text-brand-red">Rigueur</span> pour votre toiture
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 font-light max-w-xl">
              Votre couvreur de confiance dans les {COMPANY_INFO.region} depuis plus de {COMPANY_INFO.yearsExperience} ans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="w-full text-lg md:text-xl font-extrabold px-6 py-4 md:px-10 md:py-5 shadow-brand-red/50 shadow-xl sm:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Soumission gratuite
              </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full text-base md:text-lg px-6 py-4 md:px-8 md:py-5 hover:scale-105 transition-transform duration-300">
                  Nos Services
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm font-semibold">
              <div className="flex items-center text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    fill="currentColor" 
                    size={16} 
                    className="md:w-[18px] md:h-[18px] animate-pulse" 
                    style={{ animationDelay: `${i * 150}ms` }} 
                    aria-hidden="true"
                  />
                ))}
              </div>
              <a href="#testimonials" className="hover:text-brand-red transition-colors cursor-pointer">
                Recommandé à 100%
              </a>
              <span className="hidden sm:inline w-1 h-1 bg-gray-500 rounded-full"></span>
              <span className="w-full sm:w-auto mt-1 sm:mt-0 text-gray-400 sm:text-white">
                <a 
                  href="https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/5831965801?mode=Entreprise" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-red transition-colors"
                >
                  RBQ: {COMPANY_INFO.rbq}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}><ChampsExpertise /></Suspense>

      {/* Turnkey Service / Clé en main Section */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center gap-8">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-50 rounded-full blur-3xl"></div>
            
            <div className="lg:w-1/2 relative z-10 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold mb-6">
                <CheckCircle className="w-4 h-4" />
                Service complet sans tracas
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-black mb-6 uppercase tracking-tight">
                Un service <span className="text-brand-red">Clé en main</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Refaire sa toiture ne devrait pas être un casse-tête. C'est pourquoi nous prenons en charge la totalité de votre projet, de A à Z. Vous n'avez à vous soucier de rien.
              </p>
              
              <ul className="space-y-4 mb-2">
                {TURNKEY_SERVICES.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-brand-red/10 text-brand-red rounded-full p-1 shrink-0">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 relative z-10 w-full">
               <img loading="lazy" decoding="async"
                 src="https://i.postimg.cc/Jnx1KFpJ/telecharge-(17).jpg" 
                 alt="Maison avec toiture propre et sécuritaire" 
                 className="rounded-2xl shadow-xl w-full object-cover h-[400px] h-auto"
                 width="1000"
                 height="400"
               />
               
               {/* Floating badge */}
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce-slow">
                 <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                   <Star size={24} fill="currentColor" className="animate-pulse" aria-hidden="true" />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 font-bold uppercase">Satisfaction</p>
                   <p className="font-extrabold text-brand-black text-lg">Garantie 100%</p>
                 </div>
               </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-brand-black uppercase mb-4">Combien coûte une toiture en bardeaux d'asphalte ?</h2>
            <div className="w-20 h-1 bg-brand-red mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600">Comprendre votre investissement : Ce qui influence le coût.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-10">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
                Le prix d'une toiture n'est pas fixe. Un prix trop bas cache souvent des économies sur la qualité des matériaux ou un manque d'expertise. Voici les principaux facteurs qui font varier l'investissement :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-red font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-black">Superficie, Pente et Complexité</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">La grandeur dicte la quantité de matériaux. Une toiture avec plusieurs noues, pignons ou une pente abrupte nécessite des équipements de sécurité spécialisés et plus de temps de coupe, influençant le coût direct.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-red font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-black">Aération et Accessoires</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">L'ajout ou le remplacement d'aérateurs, de ventilateurs, de solins (autour des cheminées) et le type de membrane protectrice jouent un rôle majeur dans le prix de la réparation ou réfection.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-red font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-black">État du pontage (Structure)</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Lors de l'arrachement des vieux matériaux, si le bois sous-jacent est pourri à cause d'une mauvaise isolation passée ou de fuites, il devra être remplacé (feuilles de contreplaqué) pour solidifier la base.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                    <span className="text-brand-red font-bold text-xl">4</span>
                  </div>
                  <div>
                     <h3 className="text-xl font-bold mb-2 text-brand-black">Qualité et Garanties</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Choisir des bardeaux architecturaux de haute qualité avec des garanties prolongées des fabricants représente un investissement initial plus élevé, mais se rentabilise sur la durée de vie du toit.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <p className="font-semibold text-brand-black">Obtenez le juste prix pour votre maison</p>
                  <p className="text-sm text-gray-500">Sans mauvaises surprises, avec une inspection complète.</p>
                </div>
                <Link to="/contact">
                  <Button className="bg-brand-red hover:bg-red-700 text-white shadow-lg whitespace-nowrap">
                    Évaluation exacte gratuite
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-4 bg-brand-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-12 w-80 h-80 bg-brand-red opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-8 w-80 h-80 bg-brand-red opacity-10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold uppercase mb-6">Pourquoi choisir<br/><span className="text-brand-red">Toiture Jonathan Délisle</span> ?</h2>
            <div className="space-y-6">
              <div className="flex gap-4 group cursor-default">
                <CheckCircle className="text-brand-red flex-shrink-0 group-hover:scale-125 transition-transform duration-300 delay-75" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-red transition-colors duration-300">Une toiture conçue pour survivre aux hivers des Laurentides</h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Neige lourde, cycles gel-dégel, vents violents : nos installations sont adaptées aux réalités climatiques locales pour éviter infiltrations, affaissements prématurés et réparations coûteuses.</p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-default">
                <CheckCircle className="text-brand-red flex-shrink-0 group-hover:scale-125 transition-transform duration-300 delay-75" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-red transition-colors duration-300">Des matériaux éprouvés, pas des compromis</h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Nous utilisons uniquement des matériaux certifiés, testés pour le climat québécois, afin d’assurer une durabilité maximale et une vraie tranquillité d’esprit à long terme.</p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-default">
                <CheckCircle className="text-brand-red flex-shrink-0 group-hover:scale-125 transition-transform duration-300 delay-75" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-red transition-colors duration-300">Un chantier propre. Un travail assumé.</h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Respect des délais, nettoyage complet après les travaux et service après-vente fiable. Quand on termine un chantier, il est fait pour durer et on le garantit.</p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-default">
                <CheckCircle className="text-brand-red flex-shrink-0 group-hover:scale-125 transition-transform duration-300 delay-75" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-red transition-colors duration-300">Sécurité maximale, protection totale</h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Travailler sur un toit demande de la rigueur. Nos installateurs sont formés aux normes de sécurité les plus strictes et nous détenons toutes les assurances requises. Vous avez l'esprit tranquille : vos proches, votre propriété et nos équipes sont pleinement protégés.</p>
                </div>
              </div>
              <div className="flex gap-4 group cursor-default">
                <CheckCircle className="text-brand-red flex-shrink-0 group-hover:scale-125 transition-transform duration-300 delay-75" size={28} />
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-red transition-colors duration-300">Le respect du métier et des normes</h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Pour nous, travailler dans les règles de l'art est une question de fierté. Nos couvreurs qualifiés appliquent les meilleures pratiques de l'industrie à chaque étape de l'installation. Le résultat ? Une toiture esthétique, performante et certifiée, conforme à 100 % aux exigences du Code du bâtiment.</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Link to="/a-propos">
                <Button variant="outline">Rencontrez notre équipe</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section id="testimonials" className="py-4 bg-gray-50 overflow-hidden scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-brand-black uppercase mb-4">Ce que disent nos clients</h2>
            <div className="w-20 h-1 bg-brand-red mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600">La satisfaction de nos clients est notre meilleure publicité.</p>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-10 bg-white p-3 rounded-full shadow-lg text-brand-black hover:text-brand-red hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-brand-red"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-10 bg-white p-3 rounded-full shadow-lg text-brand-black hover:text-brand-red hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-brand-red"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden px-4 md:px-0 -mx-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
              >
                {REVIEWS.map((review) => (
                  <div 
                    key={review.id} 
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white p-8 rounded-xl shadow-lg relative border-b-4 border-brand-red h-full flex flex-col">
                      <Quote className="absolute top-4 right-4 text-gray-100 w-12 h-12" />
                      <div className="flex text-yellow-400 mb-4 gap-0.5">
                        {STARS_ARRAY.map((i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            fill="currentColor" 
                            className="animate-pulse" 
                            style={{ animationDelay: `${i * 150}ms` }} 
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 italic mb-6 relative z-10 leading-relaxed flex-grow">
                        "{review.text}"
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="w-10 h-10 bg-brand-black text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {review.initials}
                        </div>
                        <div>
                          <p className="font-bold text-brand-black">{review.name}</p>
                          <p className="text-xs text-gray-500 uppercase font-semibold">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'bg-brand-red w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer Pre */}
      <section className="bg-brand-red py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 uppercase">
            Prêt à refaire votre toiture ?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une estimation gratuite et sans engagement dans les {COMPANY_INFO.region}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/contact">
              <button className="bg-white text-brand-red font-bold text-lg px-8 py-4 rounded shadow-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
                Soumission Gratuite
              </button>
             </Link>
             <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto block">
              <button className="bg-brand-black text-white font-bold text-lg px-8 py-4 rounded shadow-lg hover:bg-gray-900 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                <ArrowRight size={20} /> Appeler maintenant
              </button>
             </a>
          </div>
        </div>
      </section>

    </div>
  );
};