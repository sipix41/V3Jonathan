import React, { Suspense, useState  } from 'react';
import {
  Shield,
  Star,
  Wrench, Hammer,
  Snowflake,
  CheckCircle,
  MapPin,
  Phone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SEO } from "../components/SEO";
import { Button } from "../components/Button";
import { COMPANY_INFO } from "../constants";
import { Link } from "react-router-dom";
const ChampsExpertise = React.lazy(() => import('../components/ChampsExpertise').then(m => ({ default: m.ChampsExpertise })));

const FAQ_DATA = [
  {
    question: "Quelle est la longévité réelle d'une toiture en bardeaux d'asphalte à Piedmont ?",
    answer: "Dans une région montagneuse soumise à des extrêmes météorologiques (froid polaire, neige abondante, vents forts, rayons UV intenses), une toiture en bardeaux d'asphalte architecturaux de qualité supérieure, si elle est parfaitement ventilée par l'entretoit et posée dans les règles de l'art, durera réalistement entre 20 et 30 ans. Le déneigement préventif et le nettoyage des gouttières jouent un rôle crucial dans le maintien de cette espérance de vie.",
  },
  {
    question: "Quel est le moment idéal de l'année pour procéder à une inspection de toiture Piedmont ?",
    answer: "Pour être véritablement proactif, nous suggérons fortement de réaliser une inspection visuelle annuelle. Le moment le plus stratégique est la fin de la saison automnale. Cela permet de s'assurer que les solins sont parfaitement étanches et que les gouttières sont libérées des feuilles mortes avant les premières neiges. Une inspection printanière est aussi très pertinente pour déceler rapidement tout dommage potentiel causé par la fonte des barrières de glace.",
  },
  {
    question: "Intervenez-vous pour un service de réparation toiture Laurentides en cas d'urgence météorologique ?",
    answer: "Absolument. Nous comprenons qu'une infiltration d'eau active au milieu de la nuit ou après une tempête est source d'un énorme stress. Si des vents violents ont arraché une section de votre revêtement ou si une branche a endommagé la structure, contactez-nous immédiatement. Notre équipe d'urgence se déploiera pour sécuriser les lieux avec des toiles temporaires afin de stopper les dégâts à l'intérieur, puis nous planifierons les réparations permanentes.",
  },
  {
    question: "De quoi dépend le coût moyen d'un remplacement bardeaux asphalte Piedmont ?",
    answer: "Chaque propriété est unique. Le coût d'une réfection complète n'est pas fixe et varie selon de multiples critères : la superficie totale à couvrir (en pieds carrés), la pente du toit (les toits de type chalet très abrupts exigent plus de temps et d'équipements de sécurité), l'accessibilité du terrain pour nos conteneurs, le nombre de couches de vieux bardeaux à arracher, l'état du pontage en dessous et la gamme de matériaux choisis. Le mieux est de nous appeler pour une évaluation sur place, 100 % gratuite.",
  },
  {
    question: "Pourquoi est-il si risqué de faire le déneigement toiture Laurentides par moi-même ?",
    answer: "Le déneigement de toiture est l'une des tâches d'entretien les plus dangereuses. Sans un équipement de protection antichute certifié (harnais, cordage), le risque de glissade fatale est très élevé. De plus, sans le savoir-faire approprié et les bonnes pelles en polymère, les propriétaires utilisent souvent des pelles d'aluminium ou des pics à glace qui détruisent l'asphalte gelé des bardeaux. Cela détruit l'étanchéité du toit, annule instantanément vos garanties de manufacturier et cause de graves infiltrations au premier redoux. Les experts possèdent le matériel et les techniques pour le faire de façon rapide et sécuritaire.",
  },
];

export const Piedmont: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_DATA.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Services de toiture à Piedmont",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Piedmont",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Piedmont"
      },
      "description": "À la recherche d'un couvreur de confiance à Piedmont? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de toiture à Piedmont",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Installation de bardeaux d'asphalte"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Réparation de toiture"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Déneigement de toiture"
            }
          }
        ]
      }
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="Couvreur Piedmont | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        overrideFullTitle="Couvreur Piedmont | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        description="À la recherche d'un couvreur de confiance à Piedmont? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement. Soumission gratuite!"
        canonicalUrl="/piedmont"
      >
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </SEO>

      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-8 lg:py-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/95 to-brand-black/80 z-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 text-brand-red text-sm font-bold uppercase tracking-wider mb-6 border border-brand-red/30">
              <MapPin size={16} /> Couvreur à Piedmont
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">Piedmont</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour protéger votre maison au pied des montagnes
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/soumission" className="w-full sm:w-auto block">
                <Button
                  size="lg"
                  className="w-full font-bold uppercase tracking-wide px-8 py-4 text-lg"
                >
                  Soumission gratuite
                </Button>
              </Link>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto block">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10 font-bold uppercase tracking-wide px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" /> Appeler maintenant
                </Button>
              </a>
            </div>
                                                {/* Trust bar simple inline */}
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
                <MapPin className="text-brand-red w-5 h-5 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 ease-out" />
                <span>Expertise climat Laurentides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-6 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
            <p className="font-medium text-2xl md:text-3xl text-gray-900 border-l-4 border-brand-red pl-6">
              Toiture Jonathan Délisle Inc : L'expert couvreur de choix à <strong>Piedmont</strong>. Protégez votre propriété de prestige au cœur des montagnes avec une expertise adaptée aux réalités des Pays-d'en-Haut.
            </p>
            <p>
              Nichée entre rivières préservées et massifs rocheux, la municipalité de <strong>Piedmont</strong> offre un cadre de vie prisé. Des vastes résidences en montagne de la rue des Bastions aux propriétés cossues près du Sommet Olympia, et jusqu'aux habitations pittoresques jouxtant le P'tit Train du Nord, l'architecture d'ici nécessite une attention particulière. Qu'il s'agisse de toits à pentes prononcées ou de toitures aux conceptions plus modernes, les exigences structurelles sont constantes.
            </p>
            <p>
              La topographie de la vallée engendre un microclimat avec de forts vents tourbillonnants, du verglas persistant et de lourdes charges de neige en hiver. Ces éléments exigent une barrière de protection impénétrable. En tant qu'<strong>entrepreneur couvreur à Piedmont</strong>, <strong>Toiture Jonathan Délisle Inc</strong> emploie des matériaux d'une résistance exceptionnelle et des techniques de pose strictes pour s'assurer de l'imperméabilité totale de votre revêtement face aux tempêtes laurentiennes.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                Que vous résidiez au domaine du Mont-Olympia, près du chemin de la Rivière, ou au cœur du village municipal, notre équipe intervient de façon proactive. Nous adaptons parfaitement le niveau de ventilation d'entretoit pour contrecarrer les effets de la condensation durant nos longs hivers et pour minimiser les risques de barrages de glace.
              </p>
              <p>
                Misez sur la tranquillité d'esprit sans compromis grâce à Toiture Jonathan Délisle Inc. Installation complète de bardeaux d'asphalte architecturaux garantis, services d'inspection et de déneigement. Nous sommes fiers d'être l'allié incontournable de votre toiture à Piedmont.
              </p>
            </>
          } 
        />
      </Suspense>

      {/* Section 1 */}
      <section className="py-4 lg:py-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight relative pb-4">
                Pose et remplacement de bardeaux d'asphalte à Piedmont
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le <strong>remplacement bardeaux asphalte Piedmont</strong> représente la pierre angulaire de nos services, et pour cause : les matériaux d'aujourd'hui offrent une résistance remarquable et un rapport qualité-prix inégalé pour affronter notre rude climat. Chez Toiture Jonathan Délisle Inc, nous sommes de véritables maîtres dans l'art de l'installation de bardeaux d'asphalte architecturaux de qualité supérieure. Fini le temps des vieux bardeaux minces à trois pattes qui se soulevaient au moindre coup de vent descendant des montagnes. Les bardeaux architecturaux que nous privilégions sont épais, multidimensionnels, et spécifiquement testés pour résister à des vents de force ouragan et aux chocs thermiques brutaux si fréquents dans les Pays-d'en-Haut.
                </p>
                <p>
                  Notre méthode de travail pour tout <strong>remplacement bardeaux asphalte Piedmont</strong> est stricte, rigoureuse et ne laisse aucune place au compromis. Chaque projet débute par l'arrachage méticuleux des anciennes couches de revêtement afin de mettre à nu le pontage de bois (la fondation de votre toiture). Cette étape est non négociable pour nous : elle permet d'inspecter visuellement et physiquement la santé de votre charpente. Il est impensable de poser un toit neuf sur des planches pourries ou un contreplaqué délaminé par la condensation. Si du bois est endommagé, nos experts le remplacent immédiatement.
                </p>
                <p>
                  Une fois la base solidifiée, nous passons à l'imperméabilisation stratégique de la toiture. Nous fixons d'abord des larmiers métalliques au périmètre pour guider l'eau loin des fascias. Ensuite, nous installons une large membrane autocollante de haute performance (membrane élastomère) aux endroits critiques : les avant-toits, les noues (les vallées où deux pentes se rencontrent), et tout autour des éléments saillants comme les cheminées de maçonnerie et les puits de lumière. Dans une municipalité de ski comme Piedmont, les accumulations de neige provoquent inévitablement des barrages de glace; cette membrane est votre ultime bouclier contre les infiltrations. La surface restante est couverte d'une sous-couche synthétique haut de gamme qui laisse respirer la maison tout en bloquant l'eau. Enfin, les bardeaux sont installés selon un schéma de clouage précis, garantissant la validité de toutes les garanties du manufacturier pour votre <strong>toiture Piedmont</strong>.
                </p>
                <p>
                  Parce qu'une toiture durable est une toiture qui respire, nous évaluons et optimisons toujours votre système de ventilation (soffites et aérateurs de toit) pour prévenir la condensation hivernale et la surchauffe estivale.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="text-[34px] shrink-0">🔨</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Préparation du pontage
                
                  </h3>
                  <p className="text-sm text-gray-600">
                    Retrait complet de l'ancien revêtement et remplacement du bois
                  abîmé au besoin.
                
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8 flex items-start gap-4">
                <div className="text-[34px] shrink-0">🏠</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Bardeaux architecturaux
                
                  </h3>
                  <p className="text-sm text-gray-600">
                    Architecturaux haut de gamme pour résister aux vents extrêmes
                  et écarts de température.
                
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="text-[34px] shrink-0">🛡️</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Imperméabilisation stratégique
                
                  </h3>
                  <p className="text-sm text-gray-600">
                    Larmiers, membrane élastomère aux endroits vulnérables et sous-couche synthétique.
                
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8 flex items-start gap-4">
                <div className="text-[34px] shrink-0">💨</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Ventilation adéquate
                
                  </h3>
                  <p className="text-sm text-gray-600">
                    Prévention de la condensation hivernale et la surchauffe
                  estivale.
                
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-4 lg:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight flex-col sm:flex-row flex items-center justify-center gap-3">
                <Hammer size={36} className="text-brand-red flex-shrink-0" />
                Réparation de toiture à Piedmont
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Même avec les meilleurs matériaux, la météo imprévisible du Québec peut parfois causer des dommages inattendus. Après une tempête de vent automnale canalisée par la vallée de la rivière du Nord ou suite à un violent orage estival de grêle, il arrive que l'on retrouve des morceaux de bardeaux éparpillés sur le terrain. Si vous observez des cernes d'humidité au plafond, de la peinture qui s'écaille près des fenêtres supérieures ou des solins tordus sur votre toit, il faut réagir rapidement. Notre service d'intervention en <strong>réparation toiture Laurentides</strong> est spécialement conçu pour stopper les dommages avant qu'ils ne compromettent la structure de votre résidence et n'entraînent des coûts astronomiques.
              </p>
              <p>
                En tant qu'entrepreneur <strong>toiture Piedmont</strong> d'expérience, nous savons que l'eau est un élément extrêmement vicieux. Elle peut s'infiltrer par une micro-fissure au sommet du toit, glisser le long des chevrons dans l'entretoit, et goutter à un endroit complètement différent à l'intérieur de la maison. C'est pourquoi chaque intervention de réparation toiture Laurentides commence par une véritable enquête diagnostique. Nous ne nous contentons pas de colmater l'apparence du problème avec du goudron ; nous trouvons la source exacte de la fuite pour appliquer un correctif permanent.
              </p>
              <p>
                Que le problème provienne d'un joint de calfeutrage asséché par les rayons UV, d'un évent de plomberie dont le collet de caoutchouc est fissuré, ou de dommages causés par des écureuils cherchant la chaleur de votre entretoit, nous avons l'expertise pour y remédier. De plus, conscients que l'esthétique de votre maison est importante, nous mettons un point d'honneur à utiliser des bardeaux de remplacement dont la couleur et le motif se fondent harmonieusement avec le reste de votre toiture existante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 & 4 */}
      <section className="py-4 lg:py-6 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Shield size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Inspection de toiture professionnelle dans les Laurentides
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  On dit souvent que mieux vaut prévenir que guérir, et cette maxime prend tout son sens lorsqu'il s'agit de l'entretien d'une propriété dans les Laurentides. Une <strong>inspection de toiture Piedmont</strong> effectuée de manière préventive par des maîtres couvreurs peut vous faire économiser des milliers de dollars en prévenant des sinistres majeurs et en allongeant la durée de vie de votre couverture. Idéalement, une toiture devrait être inspectée à la fin de l'automne, pour s'assurer que les gouttières sont dégagées des feuilles mortes et que le toit est prêt pour la neige, ainsi qu'au printemps, pour évaluer l'impact de la glace hivernale.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    En tant qu'entrepreneur <strong>toiture Piedmont</strong> intègre et transparent, nous offrons un service d'inspection rigoureux, particulièrement recommandé pour les maisons unifamiliales vieillissantes, les nouveaux acheteurs soucieux d'éviter les vices cachés, ou les propriétés situées dans des zones très boisées où les débris s'accumulent.
                  </p>
                  <p className="text-sm mt-4">
                    Lors de notre <strong>inspection de toiture Piedmont</strong>, nous passons votre toit au peigne fin. Nous vérifions l'état général des bardeaux : présentent-ils une perte anormale de granules, du fendillement ou un gondolement ? Nous inspectons minutieusement l'étanchéité des solins d'acier autour de la cheminée et des murs de jonction, l'état du calfeutrage et la solidité de votre système de gouttières. Si l'architecture le permet, nous inspectons également l'entretoit pour valider que l'isolation n'est pas gorgée d'humidité et que la circulation de l'air est optimale. À la suite de cet examen, nous vous remettons un rapport franc et une soumission détaillée si des travaux correctifs sont jugés nécessaires, le tout sans aucune pression de vente.
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Piedmont : Pourquoi c'est essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  Située à l'ombre de grandes stations de ski, la municipalité de Piedmont reçoit des précipitations de neige abondantes et souvent très lourdes. Bien que cette neige fasse la joie des skieurs, elle représente une menace mécanique colossale pour la charpente de nos maisons. Un service professionnel de <strong>déneigement toiture Laurentides</strong> est absolument vital pour prévenir l'affaissement, la déformation ou l'effondrement des fermes de toit sous la charge.
                </p>
                <p>
                  Le danger ne se limite pas seulement au poids. Les fameuses barrières de glace (ou digues de glace) sont le pire ennemi des maisons en hiver. Elles se forment en bordure de toit à cause des cycles répétés de gel et de dégel : la neige fond sur la partie supérieure du toit (réchauffée par l'intérieur de la maison), s'écoule, et regèle instantanément au contact des avant-toits plus froids, bloquant l'accès aux gouttières. L'eau s'accumule derrière ce mur de glace, remonte inévitablement sous les bardeaux d'asphalte et s'infiltre à l'intérieur, détruisant l'isolation, les murs et les plafonds.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Monter sur un toit incliné et glacé est une entreprise extrêmement dangereuse qui cause de graves accidents chaque année. Il est donc impératif de confier le déneigement toiture Laurentides à des spécialistes. L'équipe de Toiture Jonathan Délisle Inc intervient avec des harnais de sécurité conformes aux normes et utilise des pelles en plastique adaptées pour ne jamais rayer ou endommager vos précieux bardeaux. Nous déneigeons de façon stratégique, en laissant une mince pellicule de neige pour protéger le revêtement contre les chocs, assurant ainsi la pérennité de votre investissement.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 : Pourquoi choisir */}
      <section className="py-4 lg:py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-16">
            <h2 className="text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight mb-6">
              Pourquoi choisir Toiture Jonathan Délisle Inc à{" "}
              <span className="text-brand-red">Piedmont</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Le choix d'un <strong>couvreur Piedmont</strong> ne devrait jamais se baser uniquement sur le prix le plus bas de la soumission. Votre toiture est la première ligne de défense de tout ce que vous possédez. Chez Toiture Jonathan Délisle Inc, nous nous démarquons par notre approche humaine, notre souci obsessionnel du travail bien fait et notre connaissance pointue des enjeux climatiques d'une véritable <strong>toiture Laurentides</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Une expertise locale pointue",
                desc: "Nous connaissons les corridors de vent de la vallée de Piedmont et les défis des grandes accumulations de neige. Nos techniques de clouage et d'imperméabilisation sont adaptées en conséquence.",
              },
              {
                title: "Des matériaux de classe mondiale",
                desc: "Nous refusons d'utiliser des produits bas de gamme. Nous installons exclusivement des bardeaux et des membranes certifiés, ayant fait leurs preuves sous le rude climat québécois.",
              },
              {
                title: "Clarté, intégrité et transparence",
                desc: "Nos soumissions sont détaillées, point par point. Vous savez exactement pour quoi vous payez. Pas de frais cachés ni de mauvaises surprises à la fin des travaux.",
              },
              {
                title: "Respect maniaque de votre propriété",
                desc: "Nous traitons votre domicile comme si c'était le nôtre. Nous protégeons votre aménagement paysager pendant les travaux et, avant de quitter, nous passons l'entièreté de votre terrain au rouleau magnétique pour ramasser tous les vieux clous égarés.",
              },
              {
                title: "Assurances et garanties béton",
                desc: "Nous sommes couverts par une assurance responsabilité civile complète et offrons d'excellentes garanties de main-d'œuvre qui viennent solidifier celles des fabricants.",
              },
              {
                title: "Service client attentionné",
                desc: "Nous sommes à l'écoute de vos besoins spécifiques courtois. Notre équipe s'assure de vous offrir un accompagnement personnalisé et exceptionnel, de la première rencontre à l'inspection.",
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg mb-2 text-gray-900 flex items-start gap-3">
                  <CheckCircle className="text-brand-red w-6 h-6 shrink-0" />
                  <span className="mt-[-2px]">{feature.title}</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 : Zone Desservie */}
      <section className="py-4 lg:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin size={48} className="mx-auto text-brand-red mb-6" />
          <h2 className="text-2xl md:text-3xl font-black text-brand-black tracking-tight mb-4">
            Zone de service — Piedmont et la grande région des Pays-d'en-Haut
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Bien que nous soyons fiers de notre statut de choix comme <strong>entrepreneur toiture Piedmont</strong>, notre flotte de camions sillonne fièrement les routes avoisinantes pour desservir une vaste clientèle. Notre expertise couvre l'ensemble du territoire des Laurentides.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Piedmont",
              "Mont-Olympia",
              "Saint-Sauveur",
              
              "Prévost",
              "Saint-Jérôme"
            ].map((ville) => {
              const getSlug = (name) => name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/'/g, '').replace(/'/g, '').replace(/'/g, '').replace('les-laurentides', 'laurentides').replace('st-', 'saint-');
              const slug = getSlug(ville);
              const validRoutes = ['sainte-agathe-des-monts', 'saint-sauveur', 'mont-tremblant', 'mont-blanc', 'piedmont', 'val-david', 'val-morin', 'sainte-adele', 'sainte-anne-des-lacs', 'prevost', 'mirabel', 'saint-jerome', 'saint-hippolyte', 'morin-heights', 'lac-superieur', 'sainte-lucie-des-laurentides', 'laurentides', 'amherst', 'arundel', 'bellefeuille', 'lantier', 'mont-olympia', 'saint-adolphe-dhoward', 'saint-colomban', 'saint-faustin-lac-carre', 'sainte-marguerite-du-lac-masson', 'sainte-sophie', 'val-des-lacs', 'wentworth-nord', 'esterel', 'mille-isles'];
              const isValid = validRoutes.includes(slug);
              
              if (isValid) {
                return (
                  <Link
                    to={`/${slug}`}
                    key={ville}
                    onClick={() => window.scrollTo(0, 0)}
                    className={"px-5 py-2 bg-brand-red/5 text-brand-red font-bold rounded-full text-sm border border-brand-red/10 hover:scale-105 inline-block transition-transform cursor-pointer"}
                  >
                    📍 {ville}
                  </Link>
                );
              }
              return (
                <span
                  key={ville}
                  className={"px-5 py-2 bg-brand-red/5 text-brand-red font-bold rounded-full text-sm border border-brand-red/10"}
                >
                  📍 {ville}
                </span>
              );
            })}
          </div>
          <p className="text-gray-700">
            Que votre propriété soit juchée sur les hauteurs de Piedmont, tout près du Mont-Olympia, au cœur du village animé de Saint-Sauveur, dans les secteurs vallonnés de Sainte-Adèle (comme Mont-Rolland), ou encore vers Prévost et Saint-Jérôme, notre équipe est à votre disposition. Quelle que soit votre situation géographique dans notre magnifique région, nous vous garantissons un service rapide, courtois et d'une qualité technique sans compromis pour tous vos projets de <strong>toiture Laurentides</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture à Piedmont
            </h2>
          </div>

          <div className="space-y-6">
            {FAQ_DATA.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 border-l-[6px] ${index % 2 === 0 ? 'border-l-brand-red' : 'border-l-brand-black'} ${openFaqIndex === index ? 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] -translate-y-1' : 'hover:shadow-md hover:-translate-y-0.5'}`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className={`w-full text-left px-5 py-4 md:px-6 flex items-center justify-between focus:outline-none transition-colors ${openFaqIndex === index ? 'bg-gray-50/50' : 'bg-transparent'}`}
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className={`text-base md:text-lg font-bold pr-8 tracking-tight transition-colors ${openFaqIndex === index ? 'text-brand-red' : 'text-gray-900'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaqIndex === index ? 'bg-brand-red text-white shadow-sm' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <div 
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={openFaqIndex !== index}
                >
                  <div className="p-5 md:px-6 pt-0 pb-5 text-gray-600 leading-relaxed text-sm md:text-base font-normal">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-6 lg:py-8 bg-white border-t-[8px] border-brand-red">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-2 tracking-tight">
            Prêt à protéger votre maison et votre tranquillité d'esprit pour les
            années à venir ?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4 font-medium">
            Ne confiez pas le toit qui abrite votre famille, vos souvenirs et vos biens à n'importe qui. Que vous ayez besoin d'un simple examen de routine avant l'arrivée de l'hiver, d'une réparation cruciale suite à des intempéries ou de l'installation d'une toiture entièrement neuve construite selon les plus hauts standards de l'industrie, l'équipe passionnée et dévouée de <strong>Toiture Jonathan Délisle Inc</strong> est à votre entière disposition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
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
        </div>
      </section>
    </div>
  );
};
