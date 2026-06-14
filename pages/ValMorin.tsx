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
    question: "Quelle est la longévité réelle d'une toiture à Val-Morin ?",
    answer: "Avec les conditions climatiques particulièrement rigoureuses de notre zone montagneuse, une toiture dotée de bardeaux d'asphalte architecturaux de qualité supérieure, si elle est jumelée à une excellente ventilation de l'entretoit, offrira une durabilité réaliste de 20 à 30 ans. Le maintien de cette durée de vie maximale passe obligatoirement par un entretien régulier, un nettoyage complet des gouttières et un déneigement préventif.",
  },
  {
    question: "Quel est le moment opportun pour demander une inspection de toiture Val-Morin ?",
    answer: "Dans les secteurs très boisés de la municipalité, les débris tombent rapidement. Une approche proactive est essentielle. Une inspection visuelle annuelle est vivement recommandée, idéalement à la toute fin de l'automne, pour s'assurer que le calfeutrage et les solins sont intacts avant l'arrivée du grand froid. Le printemps est aussi un excellent moment pour déceler rapidement tout dommage occasionné par le poids de la neige et la fonte des glaces.",
  },
  {
    question: "Intervenez-vous pour une réparation toiture Laurentides d'urgence suite à une tempête ?",
    answer: "Absolument. Nous comprenons qu'une infiltration d'eau majeure au-dessus de votre cuisine ou de votre salon est une situation de crise. Si les grands vents ont arraché une section de votre revêtement ou si un arbre tombé a percé votre structure, appelez-nous sans hésiter. Notre équipe se déplacera le plus vite possible pour installer des bâches de protection temporaires afin de limiter les dégâts matériels, pour ensuite planifier les réparations permanentes.",
  },
  {
    question: "De quoi dépend exactement le prix pour un remplacement bardeaux asphalte Val-Morin ?",
    answer: "Parce que chaque maison possède sa propre architecture, le prix total varie selon de très multiples facteurs : l'inclinaison des pentes (un toit abrupt demande plus d'équipements de protection antichute et de temps), la superficie totale en pieds carrés, la complexité des angles (lucarnes multiples, tourelles, noues), la quantité de couches de vieux bardeaux superposés à arracher, et l'état général du pontage de bois en dessous. Pour obtenir l'heure juste, contactez-nous pour une estimation 100 % gratuite sur place.",
  },
  {
    question: "Pourquoi est-il si important de confier le déneigement toiture Laurentides à des experts certifiés ?",
    answer: "La sécurité de votre personne est la toute première raison. Monter sur un toit glissant à plusieurs mètres du sol est l'une des causes les plus fréquentes de blessures graves l'hiver au Québec. La seconde raison est la protection de vos matériaux. Il est malheureusement très fréquent de voir des propriétaires briser, fendre ou arracher leurs propres bardeaux gelés en utilisant des pelles de métal, des pioches ou des haches. Ces dommages annulent instantanément vos garanties et provoquent des fuites coûteuses au printemps. Nos maîtres couvreurs possèdent l'équipement de sécurité homologué et les bonnes pelles en polymère pour nettoyer votre maison en douceur, sans jamais abîmer votre toiture.",
  },
];

export const ValMorin: React.FC = () => {
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
      "name": "Services de toiture à Val-Morin",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Val-Morin",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Val-Morin"
      },
      "description": "À la recherche d'un couvreur de confiance à Val-Morin? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de toiture à Val-Morin",
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
        title="Couvreur Val-Morin | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        overrideFullTitle="Couvreur Val-Morin | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        description="À la recherche d'un couvreur de confiance à Val-Morin? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement. Soumission gratuite!"
        canonicalUrl="/val-morin"
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
              <MapPin size={16} /> Couvreur à Val-Morin
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">Val-Morin</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour protéger votre maison au cœur de la nature
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
              Toiture Jonathan Délisle Inc : L'expert couvreur dédié à <strong>Val-Morin</strong>. Préservez le charme et l'étanchéité de votre propriété au cœur des montagnes et des lacs.
            </p>
            <p>
              Reconnue pour sa nature flamboyante et son rythme de vie paisible, la municipalité de <strong>Val-Morin</strong> offre un cadre idyllique. Des coquets chalets bordant les rives du lac Raymond aux résidences unifamiliales du secteur du lac LaSalle, en passant par les propriétés nichées près du Parc régional Val-David-Val-Morin (secteur Far Hills), l'architecture s'intègre à merveille dans la forêt laurentienne.
            </p>
            <p>
              Cependant, cet environnement boisé et parsemé de cours d'eau génère un climat hostile pour les toitures. Les taux d'humidité élevés causés par la rivière du Nord et les nombreux lacs favorisent l'usure des matériaux et l'apparition de mousse. De plus, les accumulations exceptionnelles de neige en altitude exigent une intégrité architecturale sans faille. En tant qu'<strong>entrepreneur couvreur à Val-Morin</strong>, <strong>Toiture Jonathan Délisle Inc</strong> déploie un savoir-faire spécialisé pour prévenir la détérioration liée à ce microclimat, avec des matériaux résistants et des méthodes de pose infaillibles.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                Que vous soyez situé près du théâtre du Marais, le long de la route 117 ou au fond d'un domaine boisé, nous intervenons avec diligence et professionnalisme. Nous maîtrisons les exigences de Val-Morin pour une aération optimale des entretoits de votre chalet, ce qui est crucial pour contrer la condensation durant l'hiver.
              </p>
              <p>
                Toiture Jonathan Délisle Inc est la référence pour une tranquillité d'esprit totale. Installation experte de bardeaux d'asphalte architecturaux, déneigement de toiture complet et inspections préventives : nous consolidons votre bâtiment à Val-Morin avec la rigueur et l'honnêteté d'une entreprise bien de chez nous.
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
                Pose et remplacement de bardeaux d'asphalte à Val-Morin
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le <strong>remplacement bardeaux asphalte Val-Morin</strong> demeure le service que nous effectuons le plus régulièrement pour les propriétaires résidentiels et commerciaux du secteur. La raison est simple : ce revêtement, lorsqu'il est de qualité supérieure, offre de loin le meilleur rapport qualité-prix, tout en constituant un bouclier redoutable contre les intempéries de notre climat nordique. Chez Toiture Jonathan Délisle Inc, nous nous faisons une fierté d'installer exclusivement des bardeaux d'asphalte architecturaux de première qualité. Contrairement aux anciens bardeaux plats à trois pattes qui s'envolaient au premier coup de vent, ces nouveaux modèles sont multidimensionnels, beaucoup plus épais, texturés, et spécifiquement fabriqués pour affronter les rafales extrêmes et les brusques variations thermiques des Laurentides.
                </p>
                <p>
                  Notre méthodologie pour chaque projet de <strong>remplacement bardeaux asphalte Val-Morin</strong> est extrêmement rigoureuse. Nous exigeons toujours de procéder au retrait complet de l'ancien revêtement, couche par couche, jusqu'à mettre le pontage de bois complètement à nu. Cette étape de préparation est cruciale : elle nous permet d'inspecter visuellement et physiquement l'intégrité de la charpente de votre maison. Il est impensable pour nous d'installer une toiture neuve sur un contreplaqué pourri ou des planches affaissées par l'humidité. Si du bois doit être remplacé, nos techniciens s'en chargent immédiatement pour assurer une base parfaitement saine.
                </p>
                <p>
                  Une fois la fondation de bois solidifiée, nous passons à l'étape vitale de l'imperméabilisation. Nous fixons d'abord des larmiers d'acier au périmètre, puis nous déployons une large membrane autocollante haute performance (membrane élastomère) sur les zones les plus à risque : les avant-toits, les noues (où deux pentes se croisent), et tout autour des éléments saillants comme les cheminées de maçonnerie et les puits de lumière. Avec les fortes précipitations de neige à Val-Morin, la formation de barrages de glace est fréquente ; cette membrane est l'unique façon de bloquer les infiltrations d'eau à la source. Le reste de la surface est ensuite protégé par une sous-couche synthétique haut de gamme, respirante mais totalement hydrofuge. Finalement, les bardeaux sont cloués avec la plus grande précision géométrique, selon les normes strictes des fabricants, assurant ainsi la pérennité de votre <strong>toiture Val-Morin</strong>.
                </p>
                <p>
                  Nous accordons également une importance capitale à la ventilation. Une toiture bien aérée ne condense pas l'hiver et ne surchauffe pas l'été. Nous optimisons vos flux d'air en validant l'état de vos soffites et en installant des aérateurs de toit (ventilateurs) performants pour protéger votre investissement à long terme.
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
                Réparation de toiture à Val-Morin
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                La nature est magnifique à Val-Morin, mais elle peut aussi se montrer brutale. Un fort vent qui s'engouffre dans la vallée, une branche d'arbre mature arrachée par le verglas ou un orage d'été particulièrement violent peuvent causer des bris soudains à votre toiture. Si vous retrouvez des morceaux de bardeaux sur votre pelouse, si vous constatez des infiltrations actives, des auréoles d'eau sur le plafond du salon ou des solins de métal arrachés, une action immédiate s'impose. Notre service rapide d'intervention en <strong>réparation toiture Laurentides</strong> est conçu pour limiter rapidement les dégâts avant qu'une petite fuite vicieuse ne se transforme en un désastre structurel majeur, nécessitant des milliers de dollars de rénovation intérieure.
              </p>
              <p>
                Comme entrepreneur <strong>toiture Val-Morin</strong> chevronné, nous savons d'expérience que l'eau trouve toujours son chemin. Une goutte qui perle dans votre chambre provient bien souvent d'une brèche située plusieurs mètres plus haut sur la pente du toit. C'est pourquoi, lors de chaque appel pour une réparation toiture Laurentides, nous menons une véritable investigation pour débusquer la source réelle et profonde de l'infiltration, plutôt que de simplement beurrer un scellant temporaire sur les symptômes apparents.
              </p>
              <p>
                Qu'il s'agisse d'un vieux calfeutrage complètement asséché autour d'un collet de plomberie, de dommages créés par des rongeurs cherchant un abri, d'un solin de cheminée fissuré par le gel ou de bardeaux prématurément vieillis, nous appliquons une solution technique permanente. De plus, parce que nous sommes soucieux de la beauté de votre maison, nous prenons le soin de rechercher des bardeaux de remplacement dont la couleur et le modèle s'agencent le plus parfaitement possible avec votre toiture actuelle.
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
                  Il est toujours préférable, et surtout beaucoup plus économique, de prévenir que de guérir. Une <strong>inspection de toiture Val-Morin</strong> effectuée de manière préventive par des maîtres couvreurs peut ajouter de nombreuses années à la vie de votre revêtement et sauver votre portefeuille. Nous recommandons fortement à nos clients de procéder à une inspection visuelle professionnelle au moins une fois par an. L'automne est le moment idéal pour nettoyer les gouttières encombrées par les feuilles mortes et les aiguilles de pin, et le printemps permet de constater rapidement s'il y a eu des dommages causés par le fardeau de la glace hivernale.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    En tant qu'entrepreneur <strong>toiture Val-Morin</strong> reconnu pour son intégrité, nous vous proposons une évaluation de santé exhaustive et 100 % transparente. Ce service est d'une valeur inestimable, tout particulièrement pour les propriétaires de maisons centenaires, les acheteurs immobiliers prudents ou les propriétaires de chalets locatifs qui ne sont pas toujours présents sur les lieux pour surveiller l'état de leur couverture.
                  </p>
                  <p className="text-sm mt-4">
                    Durant notre <strong>inspection de toiture Val-Morin</strong>, nous passons tout en revue : la quantité de granules protecteurs restante sur l'asphalte, la présence de bardeaux fendillés, gondolés ou de clous soulevés, la solidité des solins d'acier de la cheminée et la propreté du réseau de gouttières. Si la configuration de la maison nous y donne accès, nous inspectons aussi l'intérieur de l'entretoit pour vérifier l'état de la laine isolante, détecter toute trace de moisissure et nous assurer que les soffites ne sont pas obstrués. Au terme de cette visite complète, nous vous présentons un bilan clair. Si des travaux s'imposent, une soumission détaillée vous sera remise, sans aucune tactique de vente à haute pression.
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Val-Morin : Pourquoi c'est essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  Les accumulations de neige à Val-Morin font le bonheur des amateurs de raquette et de ski de fond, mais lorsqu'elles s'empilent massivement sur le toit d'une propriété, elles deviennent une menace lourde et silencieuse. Un service professionnel de <strong>déneigement toiture Laurentides</strong> est absolument vital pour éviter que le poids écrasant de la neige gorgée d'eau ou de la glace ne vienne courber, affaisser ou même briser les fermes de toit de votre structure.
                </p>
                <p>
                  Au-delà de la pression physique extrême, le plus grand danger hivernal provient des redoutables barrières de glace (digues de glace). Celles-ci se forment en bordure de la toiture à cause de la déperdition de chaleur de la maison et des cycles de gel-dégel. La neige fond au sommet du toit, s'écoule lentement et gèle instantanément en atteignant l'avant-toit non chauffé. Un véritable barrage de glace se dresse, empêchant la nouvelle eau de fonte de rejoindre les gouttières. Prise au piège, l'eau s'accumule derrière la glace et finit par remonter à contresens sous les bardeaux pour s'infiltrer massivement dans vos plafonds et vos murs.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Nous vous déconseillons très fortement de tenter de déneiger votre toit vous-même. Grimper sur un plan incliné recouvert de glace est la cause de multiples chutes graves chaque hiver. De plus, l'utilisation de haches, de pics ou de pelles en métal endommagera de façon irréversible l'asphalte gelé de vos bardeaux, annulant immédiatement toutes vos garanties. Confiez cette tâche à haut risque à l'équipe de Toiture Jonathan Délisle Inc. Nos couvreurs sont arrimés sécuritairement, formés pour le travail en hauteur, et utilisent des pelles en polymère conçues pour glisser sans rayer. Nous effectuons le déneigement toiture Laurentides en laissant une pellicule de protection sécuritaire, protégeant ainsi l'intégrité de votre investissement.
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
              <span className="text-brand-red">Val-Morin</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              La sélection de votre <strong>couvreur Val-Morin</strong> est une étape décisionnelle capitale. La toiture est l'élément structural qui protège la totalité de votre foyer et tout ce qu'il contient. Chez Toiture Jonathan Délisle Inc, nous faisons toute la différence grâce à notre approche hautement personnalisée, notre grande rigueur technique et notre connaissance approfondie des défis climatiques liés à une <strong>toiture Laurentides</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Connaissance experte du secteur",
                desc: "Nous connaissons les vents qui balayent le lac Raymond et les conditions d'humidité de la forêt. Nos méthodes d'installation et de clouage sont fermement adaptées pour y faire face.",
              },
              {
                title: "Qualité intransigeante des matériaux",
                desc: "Nous n'installons que des bardeaux, des membranes et des systèmes de ventilation certifiés, reconnus mondialement, et ayant fait leurs preuves dans notre rude climat québécois.",
              },
              {
                title: "Clarté, intégrité et transparence",
                desc: "Nos estimations écrites sont complètes et détaillées point par point. Avec nous, il n'y a pas de frais cachés, de petits caractères illisibles ou de mauvaises surprises au moment de la facturation.",
              },
              {
                title: "Chantier d'une propreté impeccable",
                desc: "Nous prenons un soin jaloux de vos plates-bandes, de vos escaliers extérieurs et de votre cour. Avant de quitter le chantier, nous nettoyons tout et passons un balai magnétique de puissance industrielle sur la pelouse pour ramasser le moindre petit clou tombé au sol.",
              },
              {
                title: "Assurances et garanties solides",
                desc: "Notre entreprise est entièrement assurée en responsabilité civile (pour vous protéger), et nos travaux impeccables sont couverts par des garanties de main-d'œuvre rassurantes, qui viennent consolider celles des grands manufacturiers.",
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
            Zone de service — Val-Morin et les villes des Laurentides desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Extrêmement fiers de notre statut d'entrepreneur <strong>toiture Val-Morin</strong> de confiance, nous déployons notre main-d'œuvre qualifiée, nos camions et notre savoir-faire bien au-delà du cœur du village. Notre équipe mobile dessert avec le même niveau d'exigence l'ensemble de la magnifique région des Laurentides.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Val-Morin",
              
              "Sainte-Agathe-des-Monts",
              "Val-David",
              "Sainte-Adèle",
              "Piedmont"
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
            Que votre demeure se situe sur les rives du lac Raymond, dans les zones boisées près du Parc régional, en plein centre de la municipalité dynamique de Sainte-Agathe-des-Monts, dans le village voisin et créatif de Val-David, ou plus au sud vers Sainte-Adèle et Piedmont, nous sommes le couvreur qu'il vous faut. Peu importe votre adresse dans la région, Toiture Jonathan Délisle Inc s'engage à vous garantir un service ponctuel, des matériaux d'une qualité exceptionnelle et une exécution sans faille pour la réussite de votre <strong>toiture Laurentides</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture à Val-Morin
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
            décennies à venir ?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4 font-medium">
            Ne laissez pas la santé du toit de votre propriété au hasard. Votre maison est un investissement familial majeur, et sa protection contre le climat québécois mérite tout simplement ce qu'il y a de mieux sur le marché. Que ce soit pour une évaluation de routine pré-hivernale, une réparation critique et urgente suite aux intempéries ou le remplacement total de votre revêtement en bardeaux d'asphalte, l'équipe passionnée et dévouée de <strong>Toiture Jonathan Délisle Inc</strong> est à votre entière écoute et prête à travailler fort pour vous.
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
