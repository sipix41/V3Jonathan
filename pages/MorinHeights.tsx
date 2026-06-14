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
    question: "Quelle est l'espérance de vie réelle d'une toiture en bardeaux d'asphalte à Morin-Heights ?",
    answer: "Compte tenu de notre exposition aux extrêmes climatiques, à la forte humidité de la forêt boréale et aux charges de neige records, une toiture recouverte de bardeaux d'asphalte architecturaux de première qualité, parfaitement installée et adéquatement ventilée, durera de façon réaliste entre 20 et 30 ans. Le retrait constant des débris (feuilles, branches, mousse) et un bon déneigement préventif l'hiver sont absolument cruciaux pour maximiser cette longévité.",
  },
  {
    question: "À quel moment précis de l'année devrais-je faire faire une inspection de toiture Morin-Heights ?",
    answer: "L'approche la plus rentable est la prévention proactive. Nous recommandons vivement une inspection visuelle annuelle. Le meilleur moment est la fin de l'automne, une fois les feuilles des érables et des chênes tombées, pour s'assurer que les gouttières sont parfaitement propres et que les solins sont hermétiques avant les gels intenses. Le printemps est également un moment clé pour diagnostiquer rapidement tout dommage potentiel causé par le poids de la glace.",
  },
  {
    question: "Intervenez-vous pour une réparation toiture Laurentides d'urgence suite à la chute d'un arbre ?",
    answer: "Oui, absolument. Avec autant d'arbres matures, les tempêtes de vent causent souvent de graves dommages. Si une puissante rafale a arraché une section de bardeaux ou si une lourde branche a défoncé le contreplaqué de votre toit, appelez-nous immédiatement. Notre équipe d'intervention se déploiera rapidement pour sécuriser les lieux avec l'installation de toiles de protection temporaires étanches, arrêtant ainsi les dégâts à l'intérieur, pour ensuite planifier la réfection permanente.",
  },
  {
    question: "Comment évaluez-vous le coût moyen d'un remplacement bardeaux asphalte Morin-Heights ?",
    answer: "Il est très peu professionnel de donner un prix à l'aveugle, car chaque chalet et chaque toiture est unique. Le coût d'un remplacement complet varie en fonction de plusieurs variables d'importance : la superficie totale du toit (en pieds carrés), la pente de la toiture (les toits très abrupts, fréquents ici, exigent beaucoup plus de temps d'installation et de sécurité), la complexité architecturale (noues multiples, lucarnes, cheminées massives), le nombre de vieilles couches de bardeaux à arracher, ainsi que la gamme de matériaux choisis. Nous offrons une estimation sur place, 100 % gratuite et détaillée.",
  },
  {
    question: "Pourquoi est-il si risqué de faire le déneigement toiture Laurentides moi-même ?",
    answer: "Le déneigement d'un toit est une tâche d'entretien hautement dangereuse. Sans équipement de protection antichute (harnais, cordage d'assurance), une glissade sur la glace peut s'avérer fatale, surtout sur les toits hauts perchés des chalets. De plus, les propriétaires utilisent très souvent des pelles métalliques qui finissent par rayer, fendre et détruire complètement l'asphalte gelé des bardeaux de finition. Ce geste annule instantanément vos garanties de manufacturier et provoque des infiltrations majeures. Nos professionnels disposent du matériel de sécurité adéquat et de pelles en polymère aux bords lisses pour effectuer le travail en toute sécurité.",
  },
];

export const MorinHeights: React.FC = () => {
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
      "name": "Services de toiture à Morin-Heights",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Morin-Heights",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Morin-Heights"
      },
      "description": "À la recherche d'un couvreur de confiance à Morin-Heights? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de toiture à Morin-Heights",
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
        title="Couvreur Morin-Heights | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        overrideFullTitle="Couvreur Morin-Heights | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        description="À la recherche d'un couvreur de confiance à Morin-Heights? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement. Soumission gratuite!"
        canonicalUrl="/morin-heights"
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
              <MapPin size={16} /> Couvreur à Morin-Heights
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">Morin-Heights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour protéger votre maison ou votre chalet en pleine nature
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
              Toiture Jonathan Délisle Inc : L'entrepreneur couvreur de référence à <strong>Morin-Heights</strong>. Préservez la beauté et la solidité de votre patrimoine bâti en montagne.
            </p>
            <p>
              Reconnue pour son cachet pittoresque et son vaste Corridor aérobique, la municipalité de <strong>Morin-Heights</strong> propose une harmonie parfaite entre architecture et forêt. Des chalets suisses traditionnels près du Sommet Morin Heights aux prestigieuses constructions modernes le long de la route 364 ou dans les domaines boisés du secteur de Balmoral, les bâtiments d'ici exigent une toiture adaptée à leur singularité architecturale.
            </p>
            <p>
              Le climat montagnard très prononcé de Morin-Heights dicte sa loi : neige exceptionnellement abondante, grands vents en altitude et couverture végétale dense qui retient l'humidité sur les toitures, accélérant ainsi la dégradation des bardeaux. À titre d'<strong>entrepreneur couvreur à Morin-Heights</strong>, <strong>Toiture Jonathan Délisle Inc</strong> comprend intimement ces défis locaux. Nous installons des systèmes de toiture d'une résilience supérieure, conçus précisément pour endurer les pires conditions hivernales de la région des Pays-d'en-Haut.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                De l'entrée du village jusqu'aux secteurs les plus isolés en forêt, notre équipe agit avec une précision d'orfèvre. Face aux abondantes chutes de neige locales, l'isolation et la ventilation de votre entretoit sont nos priorités afin de prévenir l'accumulation périlleuse de glace et les pertes thermiques.
              </p>
              <p>
                Sécurisez votre tranquillité d'esprit avec Toiture Jonathan Délisle Inc. Nos artisans excellent dans le remplacement de bardeaux d'asphalte architecturaux de première qualité, les travaux de réfection d'urgence et le déneigement de toiture spécialisé. Fiez-vous à notre solide réputation dans les Laurentides pour tous vos besoins de couverture à Morin-Heights.
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
                Pose et remplacement de bardeaux d'asphalte à Morin-Heights
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le <strong>remplacement bardeaux asphalte Morin-Heights</strong> représente le cœur de nos interventions dans la municipalité, tant pour les résidences principales que pour les résidences secondaires. Les matériaux de recouvrement ont énormément évolué au cours des dernières décennies, et les bardeaux architecturaux d'aujourd'hui offrent une résistance remarquable jumelée à un rapport qualité-prix inégalé. Chez Toiture Jonathan Délisle Inc, nous sommes de véritables spécialistes de l'installation de ces bardeaux d'asphalte de qualité supérieure. Fini le temps des vieux bardeaux plats à trois pattes qui s'arrachaient au moindre coup de vent. Les modèles architecturaux que nous installons sont multidimensionnels, beaucoup plus épais, lourdement texturés pour retenir la neige de manière sécuritaire, et spécifiquement testés pour résister à des vents de force majeure.
                </p>
                <p>
                  Notre méthodologie pour tout projet de <strong>remplacement bardeaux asphalte Morin-Heights</strong> est d'une rigueur absolue et ne tolère aucun compromis. Chaque chantier débute par l'arrachage méticuleux et complet des anciennes couches de revêtement afin de mettre à nu le pontage de bois (la fondation de votre toit). Cette étape est non négociable : elle nous permet d'inspecter physiquement la santé de votre charpente. Il est impensable de poser un toit neuf sur des planches pourries ou un contreplaqué délaminé par l'humidité constante de la forêt. Si du bois est endommagé, nos experts le remplacent sur-le-champ pour garantir une base solide à 100 %.
                </p>
                <p>
                  Une fois la fondation approuvée et sécurisée, nous passons à l'imperméabilisation stratégique. Nous fixons d'abord des larmiers métalliques au périmètre pour guider l'eau de pluie loin de vos fascias. Ensuite, nous déployons une large membrane autocollante de haute performance (membrane élastomère) aux endroits critiques : les avant-toits, les noues, et tout autour de la cheminée ou des puits de lumière. À Morin-Heights, les barrages de glace sont omniprésents l'hiver en raison des fortes accumulations; cette membrane est votre ultime bouclier contre les infiltrations. La surface restante est couverte d'une sous-couche synthétique perméable à l'air mais farouchement hydrofuge. Enfin, les bardeaux sont installés selon un schéma de clouage précis, garantissant la validité des garanties pour votre toiture Morin-Heights.
                </p>
                <p>
                  Nous n'oublions jamais que la santé d'un toit passe obligatoirement par sa capacité à respirer. Nous évaluons et optimisons toujours votre système de ventilation pour prévenir la condensation hivernale et la surchauffe estivale de l'entretoit.
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
                    Épais, multidimensionnels et testés pour résister aux vents de force majeure.
                
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
                    Membrane élastomère et sous-couche synthétique pour une protection optimale.
                
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
                    Prévention de la condensation hivernale et la surchauffe estivale de l'entretoit.
                
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
                Réparation de toiture à Morin-Heights
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Malgré la meilleure volonté du monde, un entretien régulier et des matériaux de qualité, la météo imprévisible et la nature sauvage peuvent causer des dommages soudains. Après une puissante rafale automnale ou à la suite de la chute d'une lourde branche causée par le verglas, il n'est pas rare qu'une toiture subisse des bris. Si vous apercevez des bardeaux arrachés sur votre terrain, des cernes bruns d'humidité sur vos plafonds, de la peinture qui s'écaille près des corniches ou des solins d'acier tordus, vous devez agir vite. Notre service d'intervention en <strong>réparation toiture Laurentides</strong> est spécialement conçu pour colmater les brèches avant que l'eau ne compromette la structure de votre maison de façon irrémédiable.
              </p>
              <p>
                En tant qu'entrepreneur <strong>toiture Morin-Heights</strong> de grande expérience, nous savons que l'eau est un élément extrêmement vicieux. Elle peut s'infiltrer par une micro-fissure au sommet du toit, glisser lentement le long des chevrons, et goutter à un endroit complètement différent à l'intérieur de la maison. C'est pourquoi chaque intervention de réparation toiture Laurentides débute par une enquête diagnostique rigoureuse. Nous refusons de simplement appliquer du ciment plastique ou du goudron sur un symptôme de surface; nous retraçons la source exacte de la fuite pour appliquer un correctif technique permanent.
              </p>
              <p>
                Que la source du problème soit un joint de calfeutrage asséché, un évent de plomberie dont le caoutchouc est fissuré, des dommages créés par le frottement des arbres, ou des rongeurs ayant percé la couverture, nous possédons le savoir-faire pour y remédier définitivement. Soucieux du cachet de votre demeure, nous faisons toujours l'effort de trouver des bardeaux de remplacement dont la couleur se fond de façon harmonieuse avec le reste de votre toiture existante.
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
                  On répète souvent qu'il vaut mieux prévenir que guérir, et ce principe prend tout son sens en matière d'entretien immobilier dans un secteur boisé. Une <strong>inspection de toiture Morin-Heights</strong> réalisée de manière préventive par nos maîtres couvreurs peut vous éviter de très mauvaises surprises et des factures salées. De façon idéale, une toiture devrait être inspectée à la fin de l'automne, pour s'assurer que les gouttières sont libérées des dizaines de kilos de feuilles mortes et d'aiguilles de pin, et que tout est calfeutré avant la neige, ainsi qu'au printemps, pour évaluer les impacts de la glace hivernale.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Reconnu comme un entrepreneur <strong>toiture Morin-Heights</strong> honnête, intègre et transparent, nous offrons un service d'inspection visuelle et physique exhaustif. Ce service est indispensable pour les propriétaires de chalets vieillissants, pour les acheteurs immobiliers prudents qui veulent éviter d'hériter de vices cachés, ou pour les résidences secondaires inoccupées une partie de l'année.
                  </p>
                  <p className="text-sm mt-4">
                    Lors de notre <strong>inspection de toiture Morin-Heights</strong>, nous passons absolument tout au peigne fin. Nous vérifions l'état général des bardeaux (perte de granules protecteurs, présence de gondolement, bardeaux fendillés, clous apparents, apparition de mousse). Nous inspectons avec une attention particulière l'étanchéité des solins d'acier de la grande cheminée de votre foyer, l'état du calfeutrage et la solidité des fixations de vos gouttières. Si la configuration de la maison nous le permet, nous examinons également l'intérieur de l'entretoit pour valider l'épaisseur de l'isolation, traquer la présence de moisissure et nous assurer que la circulation de l'air n'est pas bloquée. Au terme de cet examen minutieux, nous vous fournissons un bilan franc et détaillé. S'il n'y a rien à signaler, nous vous le dirons. Si des travaux correctifs s'imposent, nous vous soumettrons une estimation précise, sans aucune tactique de vente à haute pression.
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Morin-Heights : Pourquoi c'est essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  Les hivers à Morin-Heights sont légendaires pour leurs précipitations de neige extrêmement abondantes. Bien que cette neige fasse la joie de la station de ski locale et des fondeurs, elle représente une surcharge mécanique très dangereuse pour la charpente de votre résidence. Un service professionnel de <strong>déneigement toiture Laurentides</strong> est absolument impératif pour prévenir l'affaissement, la déformation, ou même l'effondrement pur et simple de vos fermes de toit sous l'énorme pression de la neige compactée.
                </p>
                <p>
                  Le poids de la neige n'est d'ailleurs qu'une partie du danger. Le plus grand risque provient de la formation de barrières de glace (digues de glace). Celles-ci se créent en bordure des toits à cause des cycles répétés de gel et de dégel caractéristiques du printemps laurentien. La neige fond sur la section supérieure de la maison, s'écoule, et regèle instantanément au contact des avant-toits glacials, bloquant ainsi l'accès vers les gouttières. L'eau s'accumule derrière ce mur de glace, remonte inévitablement sous les bardeaux d'asphalte, et s'infiltre massivement à l'intérieur, détruisant la laine isolante, les murs de bois et le gypse.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Il est très fortement déconseillé de tenter de déneiger votre toit vous-même avec une échelle instable, d'autant plus que de nombreux chalets ici possèdent des toits cathédrales très pentus. Monter sur un toit recouvert de glace est la cause de nombreuses chutes tragiques. Par ailleurs, l'utilisation d'outils inappropriés (pelles métalliques, haches, pioches) détruit immanquablement l'asphalte de vos bardeaux, annulant sur-le-champ toutes vos garanties. Confiez cette tâche à haut risque à Toiture Jonathan Délisle Inc. Nos professionnels formés utilisent des harnais de sécurité certifiés et effectuent le déneigement toiture Laurentides avec des pelles en polymère spécialement conçues pour ne pas égratigner. Nous laissons toujours une mince pellicule de neige de protection pour assurer la sécurité totale de votre investissement.
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
              <span className="text-brand-red">Morin-Heights</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Le choix de votre <strong>couvreur Morin-Heights</strong> ne doit pas se faire à la hâte en cherchant uniquement l'entrepreneur le moins cher sur Kijiji ou Facebook. La toiture est la première ligne de défense de votre foyer contre un environnement nordique impitoyable. Chez Toiture Jonathan Délisle Inc, nous nous démarquons très nettement de la concurrence par notre approche profondément humaine, notre minutie de tous les instants et notre grande maîtrise technique des enjeux propres à une véritable <strong>toiture Laurentides</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Connaissance experte de la municipalité",
                desc: "Nous connaissons les réalités de Morin-Heights, de l'humidité du sous-bois aux incroyables charges de neige annuelles. Nos méthodes de fixation et nos membranes d'étanchéité sont fermement adaptées en conséquence.",
              },
              {
                title: "Des matériaux d'une qualité sans compromis",
                desc: "Nous refusons l'installation de produits de bas de gamme. Nous travaillons exclusivement avec des bardeaux et des membranes certifiés par les grands manufacturiers, reconnus pour leur très grande longévité.",
              },
              {
                title: "Intégrité et clarté absolues",
                desc: "Nos soumissions écrites sont détaillées, point par point. Vous comprenez exactement chaque ligne de l'estimation. Chez nous, il n'y a pas de frais cachés, de surprises désagréables ou d'extras inattendus au moment de la facturation.",
              },
              {
                title: "Respect scrupuleux de votre terrain",
                desc: "Nous traitons votre propriété boisée avec un immense respect. Nous protégeons consciencieusement votre aménagement paysager, vos balcons et votre cour. Avant de partir, nous passons un puissant balai magnétique pour ramasser absolument tous les clous tombés dans le gazon ou la terre.",
              },
              {
                title: "Assurances et garanties blindées",
                desc: "Notre entreprise détient une assurance responsabilité civile complète pour vous protéger, et nous offrons d'exceptionnelles garanties sur la qualité de notre main-d'œuvre.",
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
            Zone de service — Morin-Heights et les villes des Laurentides desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Extrêmement fiers de notre excellente réputation à titre d'entrepreneur <strong>toiture Morin-Heights</strong>, notre flotte de camions bien identifiés sillonne les routes montagneuses (comme la 364) pour desservir avec la même passion et la même rigueur l'ensemble de notre majestueuse région.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Morin-Heights",
              "Saint-Sauveur",
              "Piedmont",
              "Wentworth-Nord",
              "Saint-Adolphe-d'Howard",
              "Sainte-Adèle"
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
            Que votre propriété se trouve à Morin-Heights même (au cœur du village, près des pistes de ski ou le long du Corridor aérobique), juste à l'ouest vers Wentworth-Nord, au nord vers Saint-Adolphe-d'Howard, ou à l'est vers le pôle bouillonnant de Saint-Sauveur et Piedmont, notre équipe mobile se rend rapidement chez vous. Quelle que soit l'envergure de votre projet résidentiel ou la taille de votre chalet, nous garantissons à tous nos clients le même professionnalisme, la même courtoisie et la même qualité technique supérieure pour toute installation de <strong>toiture Laurentides</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture à Morin-Heights
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
            Prêt à protéger votre havre de paix et votre tranquillité d'esprit pour les années à venir ?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4 font-medium">
            Ne confiez pas le toit qui protège votre famille, vos précieux souvenirs de chalet et vos investissements à des amateurs. Que vous ayez besoin d'une évaluation de routine pour vous rassurer avant la saison de ski, d'une réparation cruciale et pressante suite à des intempéries, ou de l'installation rigoureuse d'une toiture entièrement neuve, l'équipe dévouée et hautement qualifiée de <strong>Toiture Jonathan Délisle Inc</strong> est prête à se mettre à l'œuvre pour vous satisfaire.
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
