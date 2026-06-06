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
    question: "Quelle est l'espérance de vie réelle d'une toiture en bardeaux d'asphalte à Saint-Hippolyte ?",
    answer: "Compte tenu de notre exposition aux extrêmes climatiques, à l'ombre de la forêt et à la forte humidité des lacs, une toiture recouverte de bardeaux d'asphalte architecturaux de première qualité, si elle est parfaitement installée et adéquatement ventilée par l'entretoit, durera de façon tout à fait réaliste entre 20 et 30 ans. Le balayage des aiguilles de pin, l'entretien de vos gouttières et un bon déneigement préventif l'hiver sont absolument cruciaux pour maximiser cette longévité.",
  },
  {
    question: "À quel moment précis de l'année devrais-je faire faire une inspection de toiture Saint-Hippolyte ?",
    answer: "L'approche la plus rentable est la prévention. Nous recommandons vivement une inspection visuelle annuelle. Le meilleur moment est la fin de l'automne, une fois les feuilles des arbres environnants tombées, pour s'assurer que les gouttières sont propres et que les solins sont hermétiques avant les gels intenses. Le printemps est également un moment clé pour diagnostiquer rapidement tout dommage potentiel causé par la glace et le gel.",
  },
  {
    question: "Intervenez-vous pour une réparation toiture Laurentides d'urgence suite à la chute d'un arbre ?",
    answer: "Oui, absolument. Les arbres matures peuvent causer de graves dommages lors des tempêtes de vent. Si une puissante rafale a arraché une section complète de bardeaux de votre toit ou si une lourde branche a percé le contreplaqué, appelez-nous immédiatement. Notre équipe d'intervention se déploiera rapidement pour sécuriser les lieux avec l'installation de toiles de protection temporaires épaisses, arrêtant ainsi les dégâts à l'intérieur de la maison, pour ensuite planifier la réfection permanente.",
  },
  {
    question: "Comment évaluez-vous le coût moyen d'un remplacement bardeaux asphalte Saint-Hippolyte ?",
    answer: "Il est peu professionnel de donner un prix à l'aveugle, car chaque toiture est unique. Le coût d'un remplacement complet varie en fonction de plusieurs variables d'importance : la superficie totale du toit, la pente de la toiture (les toits très abrupts, communs sur les chalets, exigent beaucoup plus de temps d'installation et de harnais de sécurité), la complexité architecturale (noues, lucarnes), le nombre de vieilles couches de bardeaux à arracher, ainsi que la gamme de matériaux choisis. Nous offrons une estimation sur place, 100 % gratuite et détaillée.",
  },
  {
    question: "Pourquoi est-il si risqué de faire le déneigement toiture Laurentides moi-même ?",
    answer: "Le déneigement d'un toit est une tâche hautement dangereuse. Sans équipement de protection antichute certifié, une glissade sur la glace à plusieurs mètres du sol peut s'avérer fatale. De plus, les propriétaires utilisent très souvent des pelles métalliques coupantes ou des haches qui finissent par rayer, fendre et détruire complètement l'asphalte gelé des bardeaux. Ce geste annule instantanément vos garanties de manufacturier et provoque des infiltrations majeures au printemps. Nos professionnels disposent du matériel de sécurité adéquat et de pelles en polymère aux bords arrondis pour effectuer le travail en toute sécurité.",
  },
];

export const SaintHippolyte: React.FC = () => {
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
      "name": "Services de toiture à Saint-Hippolyte",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Saint-Hippolyte",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Saint-Hippolyte"
      },
      "description": "À la recherche d'un couvreur de confiance à Saint-Hippolyte? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement."
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="Couvreur Saint-Hippolyte | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        overrideFullTitle="Couvreur Saint-Hippolyte | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        description="À la recherche d'un couvreur de confiance à Saint-Hippolyte? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement. Soumission gratuite!"
        canonicalUrl="/saint-hippolyte"
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
              <MapPin size={16} /> Couvreur à Saint-Hippolyte
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">Saint-Hippolyte</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour protéger votre maison entre lacs et montagnes
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
              Toiture Jonathan Délisle Inc : Votre artisan couvreur à <strong>Saint-Hippolyte</strong>. Protégez la valeur de votre résidence au cœur de la forêt et des lacs.
            </p>
            <p>
              Reconnue pour sa nature luxuriante et son vaste réseau de plans d'eau, la municipalité de <strong>Saint-Hippolyte</strong> offre une qualité de vie incomparable. Que vous possédiez un domaine majestueux aux abords du lac de l'Achigan, un chalet accueillant près du lac Connelly ou une résidence en plein secteur boisé du lac Tracy, la diversité architecturale s'inscrit en osmose avec la forêt laurentienne. Toutefois, cette proximité constante avec une nature dense impose ses propres défis structurels.
            </p>
            <p>
              Les microclimats créés par l'étendue des lacs et des forêts de Saint-Hippolyte soumettent les toitures à des conditions hostiles : taux d'humidité ambiant élevé favorisant l'accumulation de mousses, débris de résineux (aiguilles de pin) sur les revêtements et chutes de neige abondantes pesant sur les charpentes. <strong>Toiture Jonathan Délisle Inc</strong>, en tant qu'<strong>entrepreneur couvreur de choix à Saint-Hippolyte</strong>, met en œuvre des stratégies d'installation avancées offrant une résistance optimale face au pourrissement et assurant une barrière hydrofuge infaillible.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                Que votre environnement se situe dans les zones reculées de la Route 333 ou près du cœur villageois, nous adaptons chaque projet aux réalités de votre secteur. Une attention chirurgicale est attribuée à l'aération adéquate de votre entretoit, luttant ainsi contre la rétention d'humidité, la condensation néfaste et la fonte irrégulière de la neige en hiver.
              </p>
              <p>
                Misez sur la tranquillité d'esprit avec Toiture Jonathan Délisle Inc. Notre expertise locale englobe la pose de bardeaux d'asphalte architecturaux de catégorie premium, le service d'urgence pour intempéries et le déneigement hivernal sécuritaire. Accordez votre confiance à une équipe authentique pour la protection de votre havre de paix à Saint-Hippolyte.
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
                Pose et remplacement de bardeaux d'asphalte à Saint-Hippolyte
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le <strong>remplacement bardeaux asphalte Saint-Hippolyte</strong> représente le cœur de nos interventions, tant pour les résidences principales que pour les nombreux chalets de la municipalité. Les matériaux de recouvrement ont énormément évolué au cours des dernières années, et les bardeaux architecturaux d'aujourd'hui offrent une résistance remarquable jumelée à un rapport qualité-prix tout simplement inégalé sur le marché de la construction. Chez Toiture Jonathan Délisle Inc, nous sommes de véritables spécialistes de l'installation de ces bardeaux d'asphalte de qualité supérieure. Fini le temps des vieux bardeaux plats à trois pattes qui se courbaient, s'asséchaient et s'arrachaient au moindre coup de vent. Les modèles architecturaux que nous installons sont multidimensionnels, beaucoup plus épais, lourdement texturés, et spécifiquement testés en laboratoire pour résister à des vents de force majeure, aux chocs thermiques et à l'apparition d'algues bleues, un fléau commun près des plans d'eau.
                </p>
                <p>
                  Notre méthodologie pour tout projet de <strong>remplacement bardeaux asphalte Saint-Hippolyte</strong> est d'une rigueur absolue et ne laisse aucune place au compromis. Chaque chantier débute par l'arrachage méticuleux et total des anciennes couches de revêtement afin de mettre le pontage de bois (la fondation de votre couverture) complètement à nu. Cette étape est non négociable pour nous : elle nous permet d'inspecter physiquement et visuellement la santé de la charpente de votre maison. Il est techniquement impensable de poser un toit neuf sur des planches pourries, affaiblies ou sur un contreplaqué délaminé par la condensation accumulée dans l'entretoit. Si du bois est endommagé, nos experts menuisiers le remplacent sur-le-champ pour garantir une base structurelle solide à 100 %.
                </p>
                <p>
                  Une fois la fondation approuvée et sécurisée, nous passons à l'imperméabilisation stratégique de l'enveloppe. Nous fixons d'abord des larmiers métalliques au périmètre pour guider l'eau de pluie loin de vos fascias et de vos soffites. Ensuite, nous déployons une très large membrane autocollante de haute performance (membrane élastomère) aux endroits critiques : les avant-toits, les noues (les vallées du toit), et tout autour de la cheminée ou des puits de lumière. À Saint-Hippolyte, les accumulations de neige provoquent très souvent la formation de barrages de glace ; cette membrane caoutchoutée est votre ultime bouclier contre les infiltrations sournoises. La surface restante est ensuite couverte d'une sous-couche synthétique de fine pointe, perméable à l'air mais farouchement hydrofuge. Enfin, les bardeaux sont installés selon un schéma de clouage précis, garantissant la validité des garanties des manufacturiers pour votre toiture Saint-Hippolyte.
                </p>
                <p>
                  Nous n'oublions jamais que la santé d'un toit passe obligatoirement par sa capacité à respirer. Nous évaluons et optimisons toujours votre système de ventilation (entrées d'air aux soffites et aérateurs de toit) pour prévenir la condensation hivernale et la surchauffe étouffante de l'entretoit en plein mois de juillet.
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
                Réparation de toiture à Saint-Hippolyte
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Vivre au cœur de la forêt est un privilège, mais cela expose inévitablement votre propriété à des risques accrus. Malgré la meilleure volonté du monde, un entretien régulier et des matériaux de qualité, la météo imprévisible peut causer des dommages soudains et inattendus. Après une puissante rafale automnale ou à la suite de la chute d'une lourde branche d'arbre causée par un épisode de verglas, il n'est pas rare qu'une toiture subisse des bris. Si vous apercevez des morceaux de bardeaux éparpillés sur votre pelouse, des cernes bruns d'humidité sur vos plafonds intérieurs, de la peinture qui s'écaille ou des solins d'acier tordus, vous devez agir vite. Notre service d'intervention d'urgence en <strong>réparation toiture Laurentides</strong> est spécialement conçu pour colmater les brèches rapidement avant que l'eau ne compromette gravement la structure de votre maison.
              </p>
              <p>
                En tant qu'entrepreneur <strong>toiture Saint-Hippolyte</strong> de grande expérience, nous savons que l'eau est un élément extrêmement sournois. Elle peut s'infiltrer par une micro-fissure au sommet du toit, glisser lentement le long des chevrons, et goutter à un endroit complètement différent à l'intérieur, parfois des semaines plus tard. C'est pourquoi chaque intervention de réparation toiture Laurentides débute par une enquête diagnostique rigoureuse. Nous refusons de simplement appliquer du ciment plastique ou du goudron sur un symptôme de surface; nous retraçons la source exacte de la fuite pour appliquer un correctif technique permanent.
              </p>
              <p>
                Que la source du problème soit un joint de calfeutrage complètement asséché par les rayons UV intenses de l'été, un évent de plomberie dont le caoutchouc est craquelé, des dommages créés par le frottement des arbres, ou des rongeurs (comme les écureuils ou les ratons laveurs) ayant percé la couverture pour trouver la chaleur de votre grenier, nous possédons le savoir-faire pour y remédier définitivement. Soucieux de l'esthétique de votre demeure de villégiature, nous faisons toujours l'effort de trouver des bardeaux de remplacement dont la couleur se fond de façon harmonieuse avec le reste de votre toiture existante.
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
                  On répète souvent qu'il vaut mieux prévenir que guérir, et ce vieux principe prend tout son sens en matière d'entretien immobilier résidentiel, surtout dans un milieu aussi boisé. Une <strong>inspection de toiture Saint-Hippolyte</strong> réalisée de manière préventive par nos maîtres couvreurs peut vous éviter de très mauvaises surprises, des sinistres hautement coûteux et prolonger considérablement l'espérance de vie de vos matériaux. De façon idéale, une toiture devrait être inspectée à la fin de l'automne, pour s'assurer que les gouttières sont libérées des millions de feuilles mortes et d'aiguilles de pin, et que tout est solidement calfeutré avant les premières neiges, ainsi qu'au printemps, pour évaluer les potentiels impacts du gel et de la glace hivernale.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Reconnu comme un entrepreneur <strong>toiture Saint-Hippolyte</strong> honnête, intègre et transparent, nous offrons un service d'inspection visuelle et physique exhaustif. Ce service est indispensable pour les propriétaires de maisons vieillissantes, pour les acheteurs immobiliers prudents qui veulent éviter d'hériter de vices cachés, ou simplement pour les résidents qui souhaitent faire un bilan de santé après de forts vents.
                  </p>
                  <p className="text-sm mt-4">
                    Lors de notre <strong>inspection de toiture Saint-Hippolyte</strong>, nous passons absolument tout au peigne fin. Nous vérifions l'état général des bardeaux (perte de granules protecteurs, présence de gondolement, bardeaux fendillés, clous apparents, présence de mousse ou de lichen). Nous inspectons avec une attention particulière l'étanchéité des solins d'acier de la cheminée (souvent éprouvés par les mouvements de la maison et le gel), l'état du calfeutrage et la solidité des fixations de vos gouttières. Si la configuration de la maison nous y donne accès, nous examinons également l'intérieur de l'entretoit pour valider l'épaisseur de l'isolation, traquer la présence de moisissure noire causée par une mauvaise ventilation, et nous assurer que la circulation de l'air n'est pas bloquée. Au terme de cet examen minutieux, nous vous fournissons un bilan franc et détaillé. S'il n'y a rien à signaler, nous vous le dirons. Si des travaux correctifs s'imposent, nous vous soumettrons une estimation précise, sans aucune tactique de vente à haute pression.
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Saint-Hippolyte : Pourquoi c'est essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  Les hivers à Saint-Hippolyte apportent de très fortes précipitations de neige qui s'accumulent et se compactent au fil des mois, souvent durcies par le vent froid provenant des lacs. Cette masse de neige glacée représente une surcharge mécanique très dangereuse pour la charpente de votre résidence ou de votre chalet. Un service professionnel de <strong>déneigement toiture Laurentides</strong> est absolument impératif pour prévenir l'affaissement, la déformation à long terme, ou même l'effondrement pur et simple de vos fermes de toit sous l'énorme pression de la neige mouillée.
                </p>
                <p>
                  Le poids de la neige n'est d'ailleurs qu'une partie du problème. Le plus grand danger et la première cause de réclamation aux assurances hivernales proviennent de la formation de barrières de glace (digues de glace). Celles-ci se créent en bordure des toits à cause des cycles répétés de gel et de dégel. La neige fond sur la section supérieure (réchauffée par l'intérieur de la maison), s'écoule sous forme d'eau, et regèle instantanément au contact des avant-toits glacés, bloquant ainsi l'accès vers les gouttières. L'eau s'accumule derrière ce mur de glace de plus en plus épais, remonte sous les bardeaux d'asphalte, et s'infiltre massivement à l'intérieur, détruisant la laine isolante, les boiseries et le gypse.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Il est très fortement déconseillé de tenter de déneiger votre toit vous-même avec une échelle instable. Monter sur un toit en pente recouvert de glace est la cause de nombreuses chutes tragiques et de blessures graves chaque année. Par ailleurs, l'utilisation d'outils inappropriés par les propriétaires (pelles métalliques, haches, pioches) détruit immanquablement l'asphalte de vos bardeaux, annulant sur-le-champ toutes vos garanties. Confiez cette tâche à haut risque à Toiture Jonathan Délisle Inc. Nos professionnels formés utilisent des harnais de sécurité certifiés et effectuent le déneigement toiture Laurentides avec des pelles en polymère spécialement conçues pour ne pas égratigner. Nous laissons toujours une mince pellicule de neige de protection pour ne jamais gratter le revêtement à nu, protégeant ainsi votre toiture.
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
              <span className="text-brand-red">Saint-Hippolyte</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Le choix de votre <strong>couvreur Saint-Hippolyte</strong> ne doit pas se faire à la hâte en cherchant uniquement l'entrepreneur le moins cher sur papier. La toiture est la première ligne de défense de votre foyer. Chez Toiture Jonathan Délisle Inc, nous nous démarquons très nettement de la concurrence par notre approche profondément humaine, notre minutie de tous les instants et notre grande maîtrise technique des enjeux propres à une véritable <strong>toiture Laurentides</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Connaissance experte du territoire",
                desc: "Nous connaissons intimement les réalités de Saint-Hippolyte, des secteurs très humides près du lac de l'Achigan ou du lac Connelly, aux sommets plus exposés aux vents. Nos méthodes de fixation et d'imperméabilisation sont fermement adaptées en conséquence.",
              },
              {
                title: "Des matériaux d'une qualité sans compromis",
                desc: "Nous refusons l'installation de produits de quincaillerie de bas de gamme. Nous travaillons exclusivement avec des bardeaux et des membranes certifiés par les grands manufacturiers de l'industrie.",
              },
              {
                title: "Intégrité et clarté",
                desc: "Nos soumissions écrites sont détaillées, point par point. Vous comprenez exactement chaque ligne de l'estimation. Chez nous, il n'y a pas de frais cachés, de surprises désagréables ou d'extras inattendus.",
              },
              {
                title: "Respect scrupuleux de votre terrain",
                desc: "Nous traitons votre maison comme si c'était la nôtre. Nous protégeons consciencieusement votre aménagement paysager, vos galeries et votre asphalte. Avant de partir, nous passons un puissant balai magnétique roulant pour ramasser absolument tous les clous tombés dans le gazon ou les feuilles.",
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
            Zone de service — Saint-Hippolyte et les villes des Laurentides desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Extrêmement fiers de notre excellente réputation à titre d'entrepreneur <strong>toiture Saint-Hippolyte</strong>, notre flotte de camions bien identifiés sillonne les routes sinueuses de la municipalité pour desservir avec la même passion et la même rigueur l'ensemble de notre majestueuse région.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Saint-Hippolyte",
              "Sainte-Sophie",
              "Prévost",
              "Piedmont",
              "Saint-Jérôme",
              "Sainte-Marguerite-du-Lac-Masson"
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
            Que votre propriété se trouve à Saint-Hippolyte même (près du lac de l'Achigan, du lac Connelly, ou dans les sentiers de Sainte-Marguerite-du-Lac-Masson), juste à l'est vers Sainte-Sophie, ou plus à l'ouest vers Prévost et Piedmont, notre équipe mobile se rend rapidement chez vous. Quelle que soit l'envergure de votre projet résidentiel ou de votre chalet, nous garantissons à tous nos clients le même professionnalisme, la même courtoisie et la même qualité technique supérieure pour toute installation de <strong>toiture Laurentides</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture à Saint-Hippolyte
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
            Ne confiez pas le toit qui protège votre cocon familial, vos précieux souvenirs et votre chalet à des amateurs. Que vous ayez besoin d'une évaluation de routine pour vous rassurer avant la saison froide, d'une réparation cruciale et pressante suite à des intempéries, ou de l'installation rigoureuse d'une toiture entièrement neuve, l'équipe dévouée et hautement qualifiée de <strong>Toiture Jonathan Délisle Inc</strong> est prête à se mettre à l'œuvre pour vous satisfaire.
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
            <a href="tel:8193236665" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold px-8 py-4 text-lg"
              >
                Appeler au 819-323-6665
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
