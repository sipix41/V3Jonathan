import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2, Shield, Wind, Zap, Layers, Droplets, ShieldCheck, Sparkles, Home } from 'lucide-react';
import { Button } from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';
import { CTA } from '../components/CTA';

const DYNASTY_COLORS = [
  {
    id: "rouge-appalaches",
    name: "Rouge Appalaches",
    hex: "#823b38",
    image: "https://images.unsplash.com/photo-1605276374104-eaa14f18376c?auto=format&fit=crop&q=80&w=1200", 
  },
  {
    id: "gris-ardoise",
    name: "Gris Ardoise",
    hex: "#5C656D",
    image: "https://images.unsplash.com/photo-1628622115682-1be4f4204e3b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "brun-castor",
    name: "Brun Castor",
    hex: "#5A4432",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "noir-glacier",
    name: "Noir Glacier",
    hex: "#2B2C30",
    image: "https://images.unsplash.com/photo-1520625902097-4b8fb4958ce9?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "brume-cotiere",
    name: "Brume Côtière",
    hex: "#8f9293",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200",
  }
];

export const Iko: React.FC = () => {
  const [activeColor, setActiveColor] = useState(DYNASTY_COLORS[1]);
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="bg-white">
      <SEO title="Bardeaux IKO Dynasty" description="Découvrez les bardeaux architecturaux haute performance IKO Dynasty avec la technologie ArmourZone. Installation experte dans les Laurentides." canonicalUrl="/iko" />
      
      {/* Hero Section */}
      <section className="relative bg-[#0d1522] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy" 
            src="https://images.unsplash.com/photo-1519782487440-fb9742ef709c?auto=format&fit=crop&q=80&w=2000" 
            alt="Toiture en bardeaux d'asphalte IKO Dynasty" 
            className="w-full h-full object-cover opacity-20"
          decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1522] via-[#0d1522]/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-sm font-bold mb-6 border border-brand-red/20 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-red"></span>
              Produit vedette IKO
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
              IKO <span className="text-brand-red">Dynasty®</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
              Des bardeaux architecturaux de qualité supérieure, conçus pour résister aux vents violents grâce à la technologie exclusive <span className="font-semibold text-white">ArmourZone®</span>. Une beauté inégalée qui protège votre investissement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="text-lg w-full sm:w-auto shadow-xl hover:shadow-brand-red/40 px-8 py-4">
                Soumission gratuite
              </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="text-lg w-full bg-white/5 hover:bg-white/10 text-white border-white/20 px-8 py-4">
                  {COMPANY_INFO.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-red transition-colors whitespace-nowrap">Accueil</Link>
            <ChevronRight size={16} className="mx-2 shrink-0" />
            <Link to="/services" className="hover:text-brand-red transition-colors whitespace-nowrap">Services</Link>
            <ChevronRight size={16} className="mx-2 shrink-0" />
            <Link to="/services/bardeaux" className="hover:text-brand-red transition-colors whitespace-nowrap">Bardeaux d'Asphalte</Link>
            <ChevronRight size={16} className="mx-2 shrink-0" />
            <span className="text-gray-900 font-medium whitespace-nowrap">Dynasty</span>
          </div>
        </div>
      </div>

      {/* Color Selector Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Interactive Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gray-100 rounded-[2rem] transform -rotate-1 transition-transform group-hover:rotate-0 duration-500 ease-out z-0"></div>
              
              <div className="relative z-10 w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                {DYNASTY_COLORS.map((color) => (
                  <img
                    key={color.id}
                    src={color.image}
                    alt={`Toiture IKO Dynasty couleur ${color.name}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      activeColor.id === color.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Color Controls */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-brand-red font-semibold tracking-wider uppercase text-sm mb-4">
                <Shield size={18} />
                La beauté des mélanges HD
              </div>
              <h2 className="text-4xl md:text-4xl font-extrabold text-brand-black mb-6">
                Personnalisez votre <br/><span className="text-gray-400">toiture parfaite.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Les bardeaux IKO Dynasty se distinguent par leurs mélanges de couleurs haute définition qui confèrent à votre toit un relief et une texture exceptionnels.
              </p>

              {/* Dynamic Color Title */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Couleur sélectionnée</p>
                <h3 className="text-3xl font-bold text-gray-900 transition-all duration-300">
                  {activeColor.name}
                </h3>
              </div>

              {/* Color Swatch Buttons */}
              <div className="flex flex-wrap gap-4">
                {DYNASTY_COLORS.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setActiveColor(color)}
                    aria-label={`Sélectionner la couleur ${color.name}`}
                    aria-pressed={activeColor.id === color.id}
                    className={`
                      relative group rounded-full p-1 transition-all duration-300
                      ${activeColor.id === color.id 
                        ? 'ring-2 ring-brand-red ring-offset-2 scale-110' 
                        : 'ring-1 ring-gray-200 hover:ring-gray-400 hover:scale-105'
                      }
                    `}
                  >
                    <div 
                      className="w-12 h-12 rounded-full shadow-inner border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6">
              Pourquoi choisir <span className="text-brand-red">Dynasty</span>?
            </h2>
            <p className="text-xl text-gray-600">
              Des technologies de pointe pour une protection maximale et une esthétique qui rehausse la valeur de votre propriété.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 shadow-sm">
                <Wind size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Résistance extrême au vent</h3>
              <p className="text-gray-600 leading-relaxed">
                Garantie contre les vents jusqu'à <strong className="text-gray-900">210 km/h (130 mi/h)</strong>. Votre toiture reste en place même lors des tempêtes les plus violentes du Québec.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg">EXCLUSIVITÉ</div>
              <div className="w-16 h-16 rounded-2xl bg-red-50 text-brand-red flex items-center justify-center mb-8 shadow-sm">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">La zone ArmourZone®</h3>
              <p className="text-gray-600 leading-relaxed">
                Une bande clouable élargie avec une bande de renfort ultra-résistante intégrée. Elle offre aux clous une prise spectaculaire pour empêcher l'arrachement.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-8 shadow-sm">
                <Layers size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Format "Avantage" plus grand</h3>
              <p className="text-gray-600 leading-relaxed">
                Les bardeaux IKO Dynasty sont de dimension supérieure comparativement à la plupart des concurrents, offrant une couverture accrue et un aspect profilé majestueux.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery / Installation */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-black mb-6">
                L'importance d'une installation certifiée
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Même le bardeau le plus performant au monde, comme le Dynasty, doit être installé selon les règles de l'art. Chez <strong>Toiture Jonathan Délisle inc</strong>, nos couvreurs maîtrisent les spécifications techniques de la pose ArmourZone®.
                </p>
                <p>
                  Nous nous assurons du bon nombre de fixations par bardeau, du respect des dégagements, de l'installation des sous-couches protectrices IKO PROFORMAX™ et d'une ventilation adéquate.
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" size={24} />
                  <div>
                    <strong className="block text-gray-900 mb-1">Garantie complète du fabricant</strong>
                    <span className="text-gray-600 text-sm">Une pose conforme valide les termes de votre garantie IKO.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" size={24} />
                  <div>
                    <strong className="block text-gray-900 mb-1">Tranquillité d'esprit absolue</strong>
                    <span className="text-gray-600 text-sm">Une toiture conçue pour traverser les pires intempéries québécoises sans broncher.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1628622115682-1be4f4204e3b?auto=format&fit=crop&q=80&w=800" 
                  alt="Installation de toiture" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1542621459-a2c5a2ce2b59?auto=format&fit=crop&q=80&w=800" 
                  alt="Couvreurs au travail" 
                  className="rounded-2xl w-full h-64 object-cover shadow-lg mt-8"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Anatomie d'un toit IKO */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-sm font-bold mb-6 border border-brand-red/20 uppercase tracking-widest">
              Système unifié
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-6">
              Bardeaux et accessoires IKO: <span className="text-brand-red">Mieux ensemble</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              La véritable solidité d’un toit provient de pièces qui fonctionnent ensemble dans un système unifié. Les accessoires IKO® comme les protecteurs du platelage, les sous-couches synthétiques et les amorces de toit sont conçus pour fonctionner avec nos bardeaux afin de construire un toit qui est plus grand que la somme de ses parties pour une fiabilité ultime. Et comme nous contrôlons la création de presque tous nos accessoires de toit, nous pouvons offrir le plus haut niveau de contrôle de la qualité.
            </p>
            <div className="w-24 h-1 bg-brand-red/20 mx-auto rounded-full mb-10"></div>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              L’anatomie d’un toit IKO
            </h3>
            <p className="text-lg text-gray-600">
              Le toit est le moyen le plus fondamental d’abriter votre maison. Mais c’est bien plus qu’une simple couverture. Chaque élément joue un rôle dans la construction et le maintien d’une toiture de haute qualité sur laquelle vous pouvez compter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Element 1 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm shrink-0">
                  <Droplets size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Barrière étanche</h4>
                  <p className="text-brand-red font-medium mt-1">StormShield® Ice & Water</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">Prévenez la moisissure et la détérioration dès le départ avec une barrière protectrice et résistante à l’eau.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Crée une barrière pour se protéger contre les barrages de glace et la pluie poussée par le vent</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Forme un joint étanche, évacuant l’eau entre les bardeaux</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Défense ultime du platelage contre la glace et l’eau</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Sceller les zones vulnérables du toit</span>
                </li>
              </ul>
            </div>

            {/* Element 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-800 flex items-center justify-center shadow-sm shrink-0">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Protéger le platelage</h4>
                  <p className="text-brand-red font-medium mt-1">Stormtite® Sous-couche Synthétique</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">Protégez votre toit contre les éléments avec une couche de protection secondaire.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Barrière légère et semblable à un tissu qui agit comme un retardateur de vapeur</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Empêche le « picture framing » ou les irrégularités sur la surface en bois du toit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Sous-couche synthétique pour une protection étanche</span>
                </li>
              </ul>
            </div>

            {/* Element 3 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm shrink-0">
                  <Home size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Commencer intelligemment</h4>
                  <p className="text-brand-red font-medium mt-1">Démarreurs de toit</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">Commencez votre toiture avec des bardeaux qui aident à prévenir les dommages causés par le vent tout en offrant un aspect uniforme et esthétique.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Forme un joint hermétique dans les zones exposées au vent</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Crée une apparence à bord droit sous les bardeaux installés</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Bardeaux conçus pour les régions exposées au vent</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Assurer l’adhérence la plus forte le long des larmiers</span>
                </li>
              </ul>
            </div>

            {/* Element 4 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-sm shrink-0">
                  <Sparkles size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Protection élégante</h4>
                  <p className="text-brand-red font-medium mt-1">Bardeaux de faîtage et d’arêtier</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">Ajoutez une touche de style et de texture avec des bardeaux spécialement conçus pour protéger les zones vulnérables.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Ajoute du relief et du style le long des faîtages et des arêtiers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Favorise l’évacuation de l’eau directement depuis le sommet</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Ajouter une dimension aux zones vulnérables</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 w-5 h-5 mt-0.5" />
                  <span className="text-gray-700">Bardeaux spécialement conçus pour la ligne de toit et les rives</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Spécifications et normes */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-12">
            Spécifications et normes
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Normes */}
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Normes</h3>
              <div className="space-y-0 text-sm md:text-base">
                {[
                  "Norme De Produit ASTM D3462",
                  "Norme De Produit ASTM D3018",
                  "Résistance Au Vent ASTM D3161 Classe F",
                  "Résistance Au Vent ASTM D7158 Classe H",
                  <React.Fragment key="feua">Résistance Au Feu ASTM E108/UL 790 Classe A <sup className="text-brand-red font-bold">2</sup></React.Fragment>,
                  <React.Fragment key="feuc">Résistance Au Feu CAN/ULC S107 Classe A (Canada) <sup className="text-brand-red font-bold">2</sup></React.Fragment>,
                  "Norme De Produit CSA A123.5 (Canada)",
                  <React.Fragment key="impact">Résistance Aux Impacts FM 4473 / UL 2218 Classe 3 <sup className="text-brand-red font-bold">3</sup></React.Fragment>,
                  <React.Fragment key="miami">Approbation De Produit Du Comté De Miami-Dade <sup className="text-brand-red font-bold">4</sup></React.Fragment>,
                  <React.Fragment key="florida">Approbation Du Florida Building Code — Zone D'ouragans À Haute Vélocité (HVHZ) <sup className="text-brand-red font-bold">4</sup></React.Fragment>
                ].map((norme, index) => (
                  <div key={index} className={`font-bold text-gray-800 p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    {norme}
                  </div>
                ))}
              </div>
            </div>

            {/* Spécifications */}
            <div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Spécifications</h3>
              <div className="space-y-0 text-sm md:text-base flex flex-col">
                {[
                  { label: "Dimensions (L X L)", value: "40 7/8 pouces x 13 3/4 pouces (1 038 mm x 349 mm)" },
                  { label: "Exposition", value: "5 7/8 pouces (149 mm)" },
                  { label: "Couverture Par Paquet", value: "33 1/3 pi² (3,1 m²)" },
                  { label: "Paquets Par Palette", value: "56" },
                  { label: "Bardeaux Par Carré", value: "60" },
                  { label: "Bardeaux Par Paquet", value: "20" },
                  { label: "Garantie Limitée", value: <React.Fragment>À vie limitée <sup className="text-brand-red font-bold">1</sup></React.Fragment> },
                  { label: "Protection Iron Cladᴹᴰ", value: <React.Fragment>15 ans <sup className="text-brand-red font-bold">1</sup></React.Fragment> },
                  { label: "Garantie Limitée Contre Le Vent", value: <React.Fragment>130 mi/h (210 km/h) <sup className="text-brand-red font-bold">1</sup></React.Fragment> },
                  { label: "Garantie Limitée Contre La Résistance Aux Algues", value: <React.Fragment>10 ans (bleu-vert) <sup className="text-brand-red font-bold">1</sup></React.Fragment> }
                ].map((spec, index) => (
                  <div key={index} className={`flex justify-between items-center p-4 gap-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="font-bold text-gray-800">{spec.label}</span>
                    <span className="text-gray-500 text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTA 
        title="Prêt à rehausser la valeur de votre maison ?"
        description="Obtenez une estimation gratuite pour l'installation d'une toiture IKO Dynasty. Notre équipe certifiée se déplace partout dans les Laurentides."
      />

    </div>
  );
};

