import React from 'react';
import { MapPin, Phone, Star, Shield, Hammer, Snowflake, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { COMPANY_INFO } from '../constants';

export const CityHero: React.FC<{ cityName: string }> = ({ cityName }) => (
  <section className="relative bg-brand-black text-white py-8 lg:py-4 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/95 to-brand-black/80 z-10" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 text-brand-red text-sm font-bold uppercase tracking-wider mb-6 border border-brand-red/30">
          <MapPin size={16} /> Couvreur à {cityName}
        </div>
        <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
          Couvreur{" "}
          <span className="text-brand-red block mt-2">{cityName}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
          L'expert de confiance pour protéger votre maison face aux intempéries
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/soumission" className="w-full sm:w-auto block">
            <Button size="lg" className="w-full font-bold uppercase tracking-wide px-8 py-4 text-lg">
              Soumission gratuite
            </Button>
          </Link>
          <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto block">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10 font-bold uppercase tracking-wide px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" /> Appeler maintenant
            </Button>
          </a>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm font-medium text-gray-300">
          <div className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/5 hover:border-white/20 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm">
            <Star className="text-yellow-500 w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 ease-out" />
            <span>Réputation 5 étoiles</span>
          </div>
          <div className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/5 hover:border-white/20 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm">
            <Shield className="text-brand-red w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ease-out" />
            <span>Travaux garantis</span>
          </div>
          <div className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl border border-white/5 hover:border-white/20 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm">
            <MapPin className="text-brand-red w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 ease-out" />
            <span>Expertise climat Laurentides</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const CityIntro: React.FC<{ cityName: string, customContent: Record<string, string> }> = ({ cityName, customContent }) => (
  <section className="py-6 lg:py-8 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
        <p className="font-medium text-2xl md:text-3xl text-gray-900 border-l-4 border-brand-red pl-6">
          {customContent?.introPart1 || (
            <>Toiture Jonathan Délisle Inc : Votre partenaire couvreur expert à <strong>{cityName}</strong>. Sécurisez votre propriété face aux vents des plaines et aux rigueurs climatiques.</>
          )}
        </p>
        <p>
          {customContent?.introPart2 || (
            <>En pleine expansion, la vaste ville de <strong>{cityName}</strong> possède un charme unique avec ses paysages naturels et ses quartiers variés. Des propriétés au cœur de la ville aux chalets nichés en pleine nature, son paysage immobilier de la région est riche et hétéroclite. Ces différents secteurs partagent toutefois des vulnérabilités communes face aux éléments.</>
          )}
        </p>
        <p>
          {customContent?.introPart3 || (
            <>La topographie plane et dégagée de {cityName} expose particulièrement les toitures aux vents dominants puissants, souvent sans l'obstacle protecteur de grandes forêts ou de montagnes, augmentant le risque d'arrachement de bardeaux. De plus, les accumulations de neige lors des tempêtes hivernales frappant la plaine exigent des toitures infaillibles. En tant qu'<strong>entrepreneur couvreur à {cityName}</strong>, <strong>Toiture Jonathan Délisle Inc</strong> installe des revêtements d'une solidité éprouvée, capables de résister aux rafales les plus intenses pour assurer l'étanchéité absolue de votre foyer.</>
          )}
        </p>
      </div>
    </div>
  </section>
);

export const CityPose: React.FC<{ cityName: string, customContent: Record<string, string> }> = ({ cityName, customContent }) => (
  <section className="py-4 lg:py-6 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <h2 className="text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight relative pb-4">
            Pose et remplacement de bardeaux d'asphalte à {cityName}
            <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              {customContent?.posePart1 || (
                <>Le <strong>remplacement de bardeaux d'asphalte à {cityName}</strong> représente le cœur de nos interventions, particulièrement avec le vieillissement des premières phases de développements résidentiels de la ville. Les matériaux de recouvrement ont énormément évolué au cours des dernières années, et les bardeaux architecturaux d'aujourd'hui offrent une résistance remarquable jumelée à un rapport qualité-prix inégalé sur le marché. Chez Toiture Jonathan Délisle Inc, nous sommes de véritables spécialistes de l'installation de ces bardeaux d'asphalte de qualité supérieure. Fini le temps des vieux bardeaux plats à trois pattes qui s'arrachaient au moindre coup de vent. Les modèles architecturaux que nous installons sont multidimensionnels, beaucoup plus épais, lourdement texturés, et spécifiquement testés pour résister à des vents de force majeure.</>
              )}
            </p>
            <p>
              {customContent?.posePart2 || (
                <>Notre méthodologie pour tout projet de <strong>remplacement de bardeaux d'asphalte à {cityName}</strong> est d'une rigueur absolue. Chaque chantier débute par l'arrachage méticuleux et total des anciennes couches de revêtement afin de mettre à nu le pontage de bois. Cette étape est non négociable : elle nous permet d'inspecter physiquement la santé de votre charpente. Il est techniquement impensable de poser un toit neuf sur des planches pourries ou un contreplaqué délaminé par l'humidité. Si du bois est endommagé ou affaibli, nos experts le remplacent sur-le-champ pour garantir une base solide à 100 %.</>
              )}
            </p>
            <p>
              {customContent?.posePart3 || (
                <>Une fois la fondation approuvée, nous passons à l'imperméabilisation stratégique de l'enveloppe. Nous fixons d'abord des larmiers métalliques au périmètre pour guider l'eau de pluie loin de vos fascias et soffites. Ensuite, nous déployons une large membrane autocollante de haute performance (membrane élastomère) aux endroits critiques : les avant-toits, les noues (les vallées où l'eau s'écoule), et tout autour de la cheminée ou des puits de lumière. À {cityName}, où l'exposition au vent refroidit rapidement les toits, la formation de barrages de glace est fréquente ; cette membrane caoutchoutée est votre ultime bouclier contre les infiltrations. La surface restante est ensuite couverte d'une sous-couche synthétique de fine pointe. Enfin, les bardeaux sont installés selon un schéma de clouage précis, garantissant la validité des garanties des manufacturiers pour votre toiture à {cityName}.</>
              )}
            </p>
            {!customContent?.posePart1 && (
              <p>
                Nous n'oublions jamais que la santé d'un toit passe obligatoirement par sa capacité à respirer. Nous évaluons et optimisons toujours votre système de ventilation (entrées d'air aux soffites et aérateurs de toit) pour prévenir la condensation hivernale et la surchauffe étouffante de l'entretoit en plein mois de juillet.
              </p>
            )}
          </div>
        </div>
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="text-[34px] shrink-0">🔨</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Préparation du pontage</h3>
              <p className="text-sm text-gray-600">Retrait complet de l'ancien revêtement et remplacement du bois abîmé au besoin.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8 flex items-start gap-4">
            <div className="text-[34px] shrink-0">🏠</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Bardeaux architecturaux</h3>
              <p className="text-sm text-gray-600">Épais, multidimensionnels et testés pour résister aux vents de force majeure.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className="text-[34px] shrink-0">🛡️</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Imperméabilisation stratégique</h3>
              <p className="text-sm text-gray-600">Membrane élastomère et sous-couche synthétique pour une protection optimale.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8 flex items-start gap-4">
            <div className="text-[34px] shrink-0">💨</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Ventilation adéquate</h3>
              <p className="text-sm text-gray-600">Prévention de la condensation hivernale et la surchauffe estivale de l'entretoit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
