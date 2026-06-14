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
    question: "Quelle est la longévité réelle d'une toiture à Mont-Blanc ?",
    answer: "Avec les conditions climatiques particulièrement rigoureuses de notre zone montagneuse, une toiture dotée de bardeaux d'asphalte architecturaux de qualité supérieure, couplée à une excellente ventilation de l'entretoit, offrira une durabilité de 20 à 30 ans. Le maintien de cette durée de vie passe par un entretien régulier, un nettoyage des gouttières et un déneigement préventif.",
  },
  {
    question: "Quel est le moment opportun pour demander une inspection de toiture Mont-Blanc ?",
    answer: "Dans les secteurs très boisés de notre région, une approche proactive est essentielle. Une inspection visuelle annuelle est recommandée, idéalement à la fin de l'automne, pour s'assurer que le calfeutrage et les solins sont intacts avant l'arrivée du grand froid, ou encore au printemps pour déceler rapidement tout dommage occasionné par les barrages de glace.",
  },
  {
    question: "Intervenez-vous pour une réparation toiture Laurentides d'urgence suite à une tempête ?",
    answer: "Absolument. Une fuite d'eau ne peut pas attendre. Si les grands vents ont arraché une section de votre revêtement ou si une branche a percé votre toiture, appelez-nous immédiatement. Notre équipe d'urgence se déplacera pour installer rapidement des toiles protectrices afin de limiter les dommages à l'intérieur de la maison, pour ensuite procéder aux réparations permanentes.",
  },
  {
    question: "De quoi dépend le prix pour un remplacement bardeaux asphalte Mont-Blanc ?",
    answer: "Chaque maison étant unique, le prix varie selon de multiples facteurs : l'inclinaison du toit, la superficie totale à couvrir, la complexité des angles (lucarnes, noues multiples), la quantité de couches de vieux bardeaux à arracher et l'état du pontage en dessous. Pour obtenir un prix juste, contactez-nous. Nous viendrons prendre des mesures exactes et vous remettrons une estimation gratuite et détaillée sur place.",
  },
  {
    question: "Pourquoi est-il si important de faire faire le déneigement toiture Laurentides par des pros ?",
    answer: "La sécurité est la première raison. Monter sur un toit incliné recouvert de glace et de neige est l'une des causes fréquentes d'accidents graves l'hiver. La seconde raison est matérielle : il est très facile de briser et de fendre des bardeaux gelés si vous utilisez de mauvais outils (pelles de métal, haches). Nos couvreurs possèdent l'équipement de sécurité certifié et les techniques de travail nécessaires pour déneiger votre maison en toute sécurité, sans abîmer votre toiture.",
  },
];

export const MontBlanc: React.FC = () => {
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
      "name": "Services de toiture à Mont-Blanc",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mont-Blanc",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Mont-Blanc"
      },
      "description": "Installation, réparation, inspection et déneigement de toiture résidentielle et commerciale pour la région de Mont-Blanc.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de toiture à Mont-Blanc",
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
        title="Couvreur Mont-Blanc"
        overrideFullTitle="Couvreur Mont-Blanc | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        description="À la recherche d'un couvreur d'expérience à Mont-Blanc? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement. Soumission gratuite!"
        canonicalUrl="/mont-blanc"
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
              <MapPin size={16} /> Couvreur à Mont-Blanc
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">Mont-Blanc</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour une toiture durable dans les Laurentides
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
              Toiture Jonathan Délisle Inc : L'expert couvreur de confiance à <strong>Mont-Blanc</strong>. Préservez la valeur et l'intégrité de votre résidence au cœur des montagnes laurentiennes.
            </p>
            <p>
              Anciennement connue sous le nom de Saint-Faustin–Lac-Carré, la municipalité de <strong>Mont-Blanc</strong> offre un équilibre parfait entre vie de village, lacs paisibles et montagnes attractives. Qu'il s'agisse des résidences patrimoniales du noyau villageois, des chalets rustiques ceinturant le Lac Carré, ou des propriétés contemporaines situées près de la station de ski Ski Mont Blanc, l'architecture locale est aussi variée qu'exigeante.
            </p>
            <p>
              Cependant, ce majestueux paysage boisé et montagneux impose d'immenses défis à l'enveloppe extérieure des bâtiments. Les tempêtes de neige hivernales sont abondantes, les risques de glace sur les toits sont constants en raison du dénivelé, et la proximité de la forêt augmente considérablement le taux d'humidité ambiant. C'est ici que <strong>Toiture Jonathan Délisle Inc</strong>, votre <strong>entrepreneur couvreur à Mont-Blanc</strong>, déploie son expertise. Nous mettons en œuvre des matériaux robustes et des pratiques d'installation supérieures pour bloquer toutes infiltrations et contrer l'usure prématurée causée par le microclimat forestier.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                De Notre-Dame-de-la-Merci au chemin du Lac-Blanc, en passant par La Pisciculture, nous nous déplaçons rapidement pour sécuriser votre toit. Notre approche met un point d'honneur sur l'importance de bien ventiler les entretoits des chalets quatre saisons pour éviter la détérioration de vos charpentes et empêcher l'humidité d'affaiblir votre isolation thermique.
              </p>
              <p>
                Confiez-nous l'entretien ou la réfection complète de votre toiture pour une tranquillité d'esprit absolue avec Toiture Jonathan Délisle Inc. Avec des bardeaux de première qualité, une pose irréprochable et un service de déneigement préventif sur demande, nous sommes la référence pour protéger votre domaine à Mont-Blanc tout au long de l'année.
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
                Pose et remplacement de bardeaux d'asphalte à Mont-Blanc
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le <strong>remplacement bardeaux asphalte Mont-Blanc</strong> est le service que nous effectuons le plus fréquemment pour les propriétaires de la région. L'explication est simple : ce revêtement, lorsqu'il est de haute qualité, offre le meilleur compromis entre durabilité, esthétique et coût, tout en constituant un bouclier redoutable contre les intempéries de nos hivers. Chez Toiture Jonathan Délisle Inc, nous nous spécialisons exclusivement dans la pose de bardeaux d'asphalte architecturaux de qualité supérieure. Plus lourds, texturés et profilés que les anciens bardeaux à trois pattes, ils sont spécialement fabriqués pour affronter les rafales de vent extrêmes et les brusques variations thermiques qui caractérisent si bien notre secteur montagneux.
                </p>
                <p>
                  Notre méthode de travail pour tout projet de <strong>remplacement bardeaux asphalte Mont-Blanc</strong> est extrêmement rigoureuse. Nous exigeons toujours de retirer complètement l'ancien revêtement, couche par couche, jusqu'à mettre à nu le pontage de bois. Cette étape incontournable nous permet d'inspecter l'intégrité de votre charpente. Il est primordial pour nous de ne jamais installer une toiture neuve sur du bois pourri, affaissé ou gorgé d'humidité. S'il y a des planches à changer, nous le faisons immédiatement pour garantir une base solide.
                </p>
                <p>
                  L'imperméabilisation de la toiture est l'étape suivante, et elle est cruciale. Nous fixons des larmiers d'acier aux rebords, puis nous déployons une large membrane autocollante haute performance (membrane élastomère) sur les avant-toits, dans les noues, et autour de la cheminée ou des puits de lumière. Avec les fortes précipitations neigeuses à Mont-Blanc, les barrages de glace sont fréquents, et cette membrane est l'unique façon de bloquer les infiltrations d'eau. Le reste de la surface est ensuite protégé par une sous-couche synthétique haut de gamme, respirante et hydrofuge. Finalement, les bardeaux sont fixés avec la plus grande précision, selon les clouages recommandés par les fabricants, assurant ainsi la pérennité de votre <strong>toiture Mont-Blanc</strong> et la validité de vos garanties.
                </p>
                <p>
                  Nous accordons également une importance capitale à la ventilation. Une toiture bien aérée ne surchauffe pas l'été et ne condense pas l'hiver. Nous optimisons les flux d'air en validant l'état de vos soffites et en installant des aérateurs de toit (ventilateurs) adéquats pour protéger votre investissement.
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
                Réparation de toiture à Mont-Blanc
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                La nature de notre région est belle, mais elle peut être brutale. Un fort coup de vent, des branches d'arbres cassées par le verglas ou une tempête estivale imprévue peuvent causer des dommages soudains à votre toiture. Si vous retrouvez des bardeaux sur votre pelouse, si vous constatez des infiltrations, des taches d'eau au plafond ou des solins d'acier tordus, l'action immédiate s'impose. Notre service rapide en <strong>réparation toiture Laurentides</strong> est conçu pour limiter les dégâts avant qu'une petite fuite ne se transforme en un désastre structurel coûtant des milliers de dollars.
              </p>
              <p>
                Comme entrepreneur <strong>toiture Mont-Blanc</strong> d'expérience, nous savons que l'eau trouve toujours son chemin. Une fuite visible dans le salon provient souvent d'une brèche située plusieurs mètres plus haut sur le toit. C'est pourquoi, à chaque intervention de réparation toiture Laurentides, nous menons une véritable enquête pour débusquer la source réelle du problème, et non pas seulement camoufler les symptômes avec du goudron.
              </p>
              <p>
                Qu'il s'agisse de calfeutrage asséché autour d'un collet de plomberie, de dommages causés par des rongeurs, d'un solin de cheminée fissuré ou de bardeaux prématurément vieillis, nous appliquons une solution permanente. De plus, conscients de l'importance de l'apparence de votre maison, nous prenons toujours le soin de chercher des bardeaux de remplacement dont la couleur s'harmonise parfaitement avec votre toit actuel. Une réparation par Toiture Jonathan Délisle Inc est toujours effectuée avec un souci du détail exemplaire.
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
                  Mieux vaut prévenir que guérir, surtout lorsqu'il s'agit de l'entretien d'une propriété dans un climat nordique. Une <strong>inspection de toiture Mont-Blanc</strong> effectuée de manière préventive par des maîtres couvreurs peut ajouter de nombreuses années à la vie de votre revêtement. Nous suggérons fortement à nos clients de procéder à une inspection visuelle à l'automne, pour nettoyer les gouttières des feuilles mortes et aiguilles de pin, et au printemps, pour constater l'impact de la fonte des glaces.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    En tant qu'entrepreneur <strong>toiture Mont-Blanc</strong> de grande réputation, nous vous proposons une évaluation exhaustive et entièrement transparente. C'est un service inestimable, tout particulièrement pour les propriétaires de résidences secondaires ou de chalets locatifs qui ne sont pas toujours sur place pour constater les signes de vieillissement de leur couverture.
                  </p>
                  <p className="text-sm mt-4">
                    Durant notre <strong>inspection de toiture Mont-Blanc</strong>, nous examinons chaque détail : la perte de granules sur l'asphalte, la présence de bardeaux fendillés ou ondulés, la solidité des solins métalliques et la propreté des gouttières. Si nous y avons accès, nous inspectons aussi l'entretoit pour vérifier l'état de la laine isolante et nous assurer que les soffites ne sont pas bloqués, ce qui empêcherait la toiture de respirer. Au terme de cette visite, nous vous présentons un bilan de santé clair. Si des correctifs sont nécessaires, une soumission détaillée vous sera remise, sans aucune obligation ni technique de vente agressive.
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Mont-Blanc : Pourquoi c'est essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  À Mont-Blanc, la neige fait partie de notre ADN et de nos loisirs, mais lorsqu'elle s'accumule massivement sur le toit d'une maison, elle devient une menace silencieuse. Un service professionnel de <strong>déneigement toiture Laurentides</strong> est absolument vital pour éviter que le poids écrasant de la neige mouillée ne vienne affaisser, déformer ou briser les fermes de toit de votre structure.
                </p>
                <p>
                  Au-delà de la charge physique, le danger provient des barrières de glace. Ces digues se forment en bordure de toit à cause des cycles constants de gel et de dégel. Elles empêchent l'eau de la fonte de s'écouler librement dans les gouttières. Prise au piège, l'eau s'accumule et remonte inévitablement sous vos bardeaux, causant des infiltrations d'eau majeures à l'intérieur de vos murs et ruinant votre isolation.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Nous vous déconseillons vivement de tenter de déneiger votre toit vous-même. Monter sur une pente glacée est extrêmement dangereux, et utiliser des haches ou des pelles en métal endommagera de façon irréversible vos bardeaux d'asphalte, annulant par le fait même toutes vos garanties. Confiez le déneigement toiture Laurentides à l'équipe de Toiture Jonathan Délisle Inc. Nos professionnels sont arrimés sécuritairement, formés pour le travail en hauteur, et utilisent des pelles en plastique conçues pour ce travail. Nous retirons l'excédent de neige de manière stratégique tout en laissant une mince pellicule de protection pour ne pas gratter l'asphalte, protégeant ainsi votre investissement.
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
              <span className="text-brand-red">Mont-Blanc</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              La sélection de votre <strong>couvreur Mont-Blanc</strong> ne doit pas se faire à la hâte. La toiture est l'élément fondamental qui protecteur de l'ensemble de votre foyer contre les éléments extérieurs. Chez Toiture Jonathan Délisle Inc, nous faisons toute la différence par notre approche résolument humaine, notre grande minutie et notre connaissance approfondie des défis liés à une <strong>toiture Laurentides</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Connaissance experte de la région",
                desc: "Nous connaissons les vents qui balayent les montagnes de Mont-Blanc et les conditions hivernales intenses. Nos méthodes d'installation sont adaptées pour y faire face.",
              },
              {
                title: "Qualité intransigeante",
                desc: "Nous n'installons que des bardeaux et des membranes certifiés, haut de gamme, qui ont fait leurs preuves dans notre rude climat québécois.",
              },
              {
                title: "Clarté et intégrité",
                desc: "Nos estimations sont complètes et détaillées. Avec nous, il n'y a pas de frais cachés, de petits caractères ou de mauvaises surprises au moment de payer la facture.",
              },
              {
                title: "Chantier d'une propreté impeccable",
                desc: "Nous prenons un soin jaloux de vos aménagements paysagers, de vos balcons et de votre cour. Avant de quitter, nous nettoyons tout et passons un balai magnétique de puissance industrielle pour ramasser tous les clous tombés au sol.",
              },
              {
                title: "Garanties solides",
                desc: "Notre entreprise est entièrement assurée en responsabilité civile, et nos travaux impeccables sont couverts par des garanties de main-d'œuvre rassurantes, qui bonifient celles des manufacturiers.",
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
            Zone de service — Mont-Blanc et villes des Laurentides desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Fiers de notre statut de premier <strong>entrepreneur toiture Mont-Blanc</strong>, nous déployons notre expertise et notre savoir-faire bien au-delà du cœur du village. Notre équipe mobile dessert avec la même rigueur l'ensemble de la magnifique région des Laurentides.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Mont-Blanc",
              "Saint-Faustin-Lac-Carré",
              "Lac-Supérieur",
              "Mont-Tremblant",
              "Sainte-Agathe-des-Monts",
              "Val-David"
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
            Que votre demeure se situe au pied de la station de ski de Mont-Blanc (anciennement Saint-Faustin-Lac-Carré), qu'elle borde un lac dans le secteur de Lac-Supérieur, qu'elle se trouve au centre de l'effervescence de Mont-Tremblant, ou encore dans les municipalités voisines comme Sainte-Agathe-des-Monts ou Val-David, nous sommes votre couvreur de confiance. Peu importe la localisation de votre projet dans la région, Toiture Jonathan Délisle Inc vous garantit un service de pointe, des matériaux de qualité et une exécution sans faille pour tous vos besoins de <strong>toiture Laurentides</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture à Mont-Blanc
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
            Ne laissez pas le toit de votre propriété au hasard. Votre maison est un investissement majeur, et sa protection mérite ce qu'il y a de mieux. Que ce soit pour une vérification de routine, une réparation rapide suite aux intempéries ou le remplacement complet de votre revêtement en bardeaux d'asphalte, l'équipe passionnée de <strong>Toiture Jonathan Délisle Inc</strong> est à votre écoute et prête à travailler pour vous.
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
