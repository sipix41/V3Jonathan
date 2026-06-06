import React, { Suspense, useState  } from 'react';
import {
  Shield,
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
    question: "Quelle est l'espérance de vie réelle d'une toiture en bardeaux d'asphalte à Lantier ?",
    answer: "Compte tenu de notre exposition aux grands vents et aux extrêmes climatiques, une toiture recouverte de bardeaux d'asphalte architecturaux de première qualité, si elle est parfaitement installée et adéquatement ventilée par l'entretoit, durera de façon tout à fait réaliste entre 20 et 30 ans. L'entretien de vos gouttières et un bon déneigement préventif l'hiver sont cruciaux pour maximiser cette longévité.",
  },
  {
    question: "À quel moment précis de l'année devrais-je faire faire une inspection de toiture Lantier ?",
    answer: "L'approche la plus rentable est la prévention. Nous recommandons vivement une inspection visuelle annuelle. Le meilleur moment est la fin de l'automne, une fois les feuilles des arbres environnants tombées, pour s'assurer que les gouttières sont propres et que les solins sont hermétiques avant les gels intenses. Le printemps est également un moment clé pour diagnostiquer rapidement tout dommage potentiel causé par la glace.",
  },
  {
    question: "Intervenez-vous pour une réparation toiture Laurentides d'urgence suite à de grands vents ?",
    answer: "Oui, absolument. Les vents de la plaine lantierloise peuvent être féroces. Si une puissante rafale a arraché une section complète de bardeaux de votre toit, appelez-nous immédiatement. Notre équipe d'intervention se déploiera rapidement pour sécuriser les lieux avec l'installation de toiles de protection temporaires épaisses, arrêtant ainsi les dégâts à l'intérieur, pour ensuite planifier la réfection permanente.",
  },
  {
    question: "Comment évaluez-vous le coût moyen d'un remplacement bardeaux asphalte Lantier ?",
    answer: "Il est peu professionnel de donner un prix à l'aveugle, car chaque toiture est unique. Le coût d'un remplacement complet varie en fonction de plusieurs variables d'importance : la superficie totale du toit, la pente de la toiture (les toits très abrupts exigent beaucoup plus de temps d'installation et de sécurité), la complexité architecturale (noues, lucarnes), le number de vieilles couches de bardeaux à arracher, ainsi que la gamme de matériaux choisis. Nous offrons une estimation sur place, 100 % gratuite et détaillée.",
  },
  {
    question: "Pourquoi est-il si risqué de faire le déneigement toiture Laurentides moi-même ?",
    answer: "Le déneigement d'un toit est une tâche hautement dangereuse. Sans équipement de protection antichute certifié, une glissade sur la glace peut s'avérer fatale. De plus, les propriétaires utilisent très souvent des pelles métalliques coupantes qui finissent par rayer, fendre et détruire complètement l'asphalte gelé des bardeaux. Ce geste annule instantanément vos garanties de manufacturier et provoque des infiltrations majeures au printemps. Nos professionnels disposent du matériel de sécurité adéquat et de pelles en polymère aux bords arrondis pour effectuer le travail en toute sécurité.",
  },
];

export const antier: React.FC = () => {
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
      "name": "Services de toiture à Lantier",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lantier",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Lantier"
      },
      "description": "Vous cherchez un couvreur de confiance à Lantier? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement."
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="Couvreur Lantier | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        overrideFullTitle="Couvreur Lantier | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        description="Vous cherchez un couvreur de confiance à Lantier? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement. Soumission gratuite!"
        canonicalUrl="/lantier"
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
              <MapPin size={16} /> Couvreur à Lantier
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">Lantier</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour protéger votre maison face aux intempéries
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
            <div className="mt-12 flex flex-wrap gap-4 text-sm font-semibold text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle className="text-brand-red w-4 h-4" /> Réputation 5
                étoiles
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="text-brand-red w-4 h-4" /> Expertise
                climat Laurentides
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="text-brand-red w-4 h-4" /> Travaux
                garantis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-6 lg:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
            <p className="font-medium text-2xl md:text-3xl text-gray-900 border-l-4 border-brand-red pl-6">
              Toiture Jonathan Délisle Inc : Votre partenaire couvreur expert à <strong>Lantier</strong>. Sécurisez votre propriété face aux vents des plaines et aux rigueurs climatiques.
            </p>
            <p>
              En pleine expansion, la vaste ville de <strong>Lantier</strong> combine de vastes territoires agricoles et des zones résidentielles en effervescence. Des nouvelles constructions contemporaines dans les quartiers comme le Domaine-Vert (Nord et Sud) aux bungalows confortables de Saint-Janvier, Saint-Canut ou Saint-Augustin, le paysage immobilier est hétéroclite. Ces différents secteurs partagent toutefois des vulnérabilités communes face aux éléments.
            </p>
            <p>
              La topographie plane et dégagée de Lantier expose particulièrement les toitures aux vents dominants puissants, souvent sans l'obstacle protecteur de grandes forêts ou de montagnes, augmentant le risque d'arrachement de bardeaux. De plus, les accumulations de neige lors des tempêtes hivernales frappant la plaine exigent des toitures infaillibles. En tant qu'<strong>entrepreneur couvreur à Lantier</strong>, <strong>Toiture Jonathan Délisle Inc</strong> installe des revêtements d'une solidité éprouvée, capables de résister aux rafales les plus intenses pour assurer l'étanchéité absolue de votre foyer.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                Que vous résidiez dans les secteurs familiaux denses, à proximité des grands axes routiers comme l'autoroute 15 ou au cœur des terres agricoles, nous sommes à votre service pour des interventions de pointe. Nous prêtons une attention particulière à la ventilation et à l'ancrage des matériaux, contrant la pression qu'exerce le vent continu sur l'enveloppe extérieure des bâtiments lantierlois.
              </p>
              <p>
                Ayez l'esprit tranquille avec Toiture Jonathan Délisle Inc. Nous nous illustrons par un remplacement impeccable de bardeaux d'asphalte architecturaux, un service prompt en cas d'appels d'urgence et un déneigement préventif sécuritaire. Optez pour des spécialistes dévoués afin de protéger votre demeure à Lantier.
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
                Pose et remplacement de bardeaux d'asphalte à Lantier
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le <strong>remplacement bardeaux asphalte Lantier</strong> représente le cœur de nos interventions, particulièrement avec le vieillissement des premières phases de développements résidentiels de la ville. Les matériaux de recouvrement ont énormément évolué au cours des dernières années, et les bardeaux architecturaux d'aujourd'hui offrent une résistance remarquable jumelée à un rapport qualité-prix inégalé sur le marché. Chez Toiture Jonathan Délisle Inc, nous sommes de véritables spécialistes de l'installation de ces bardeaux d'asphalte de qualité supérieure. Fini le temps des vieux bardeaux plats à trois pattes qui s'arrachaient au moindre coup de vent. Les modèles architecturaux que nous installons sont multidimensionnels, beaucoup plus épais, lourdement texturés, et spécifiquement testés pour résister à des vents de force majeure.
                </p>
                <p>
                  Notre méthodologie pour tout projet de <strong>remplacement bardeaux asphalte Lantier</strong> est d'une rigueur absolue. Chaque chantier débute par l'arrachage méticuleux et total des anciennes couches de revêtement afin de mettre à nu le pontage de bois. Cette étape est non négociable : elle nous permet d'inspecter physiquement la santé de votre charpente. Il est techniquement impensable de poser un toit neuf sur des planches pourries ou un contreplaqué délaminé par l'humidité. Si du bois est endommagé ou affaibli, nos experts le remplacent sur-le-champ pour garantir une base solide à 100 %.
                </p>
                <p>
                  Une fois la fondation approuvée, nous passons à l'imperméabilisation stratégique de l'enveloppe. Nous fixons d'abord des larmiers métalliques au périmètre pour guider l'eau de pluie loin de vos fascias et soffites. Ensuite, nous déployons une large membrane autocollante de haute performance (membrane élastomère) aux endroits critiques : les avant-toits, les noues (les vallées où l'eau s'écoule), et tout autour de la cheminée ou des puits de lumière. À Lantier, où l'exposition au vent refroidit rapidement les toits, la formation de barrages de glace est fréquente ; cette membrane caoutchoutée est votre ultime bouclier contre les infiltrations. La surface restante est ensuite couverte d'une sous-couche synthétique de fine pointe. Enfin, les bardeaux sont installés selon un schéma de clouage précis, garantissant la validité des garanties des manufacturiers pour votre toiture Lantier.
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
                Réparation de toiture à Lantier
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Malgré la meilleure volonté du monde, un entretien régulier et des matériaux de qualité, la météo imprévisible peut causer des dommages soudains et inattendus. Après une puissante rafale automnale ou à la suite d'un orage estival de grêle fracassant, il n'est pas rare qu'une toiture subisse des bris. Si vous apercevez des morceaux de bardeaux éparpillés sur votre pelouse, des cernes bruns d'humidité sur vos plafonds intérieurs, de la peinture qui s'écaille ou des solins d'acier tordus, vous devez agir vite. Notre service d'intervention d'urgence en <strong>réparation toiture Laurentides</strong> est spécialement conçu pour colmater les brèches rapidement avant que l'eau ne compromette gravement la structure de votre maison.
              </p>
              <p>
                En tant qu'entrepreneur <strong>toiture Lantier</strong> de grande expérience, nous savons que l'eau est un élément extrêmement sournois. Elle peut s'infiltrer par une micro-fissure au sommet du toit, glisser lentement le long des chevrons, et goutter à un endroit complètement différent à l'intérieur. C'est pourquoi chaque intervention de réparation toiture Laurentides débute par une enquête diagnostique rigoureuse. Nous refusons de simplement appliquer du ciment plastique ou du goudron sur un symptôme de surface; nous retraçons la source exacte de la fuite pour appliquer un correctif technique permanent.
              </p>
              <p>
                Que la source du problème soit un joint de calfeutrage complètement asséché par les rayons UV, un évent de plomberie dont le caoutchouc est craquelé, des dommages créés par des vents extrêmes, ou des rongeurs (comme les écureuils) ayant percé la couverture pour trouver de la chaleur, nous possédons le savoir-faire pour y remédier définitivement. Soucieux de l'esthétique de votre demeure, nous faisons toujours l'effort de trouver des bardeaux de remplacement dont la couleur se fond de façon harmonieuse avec le reste de votre toiture existante.
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
                  On répète souvent qu'il vaut mieux prévenir que guérir, et ce vieux principe prend tout son sens en matière d'entretien immobilier résidentiel. Une <strong>inspection de toiture Lantier</strong> réalisée de manière préventive par nos maîtres couvreurs peut vous éviter de très mauvaises surprises, des sinistres hautement coûteux et prolonger considérablement l'espérance de vie de vos matériaux. De façon idéale, une toiture devrait être inspectée à la fin de l'automne, pour s'assurer que les gouttières sont libérées des feuilles mortes et que tout est solidement calfeutré avant les premières neiges, ainsi qu'au printemps, pour évaluer les potentiels impacts du gel et de la glace hivernale.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Reconnu comme un entrepreneur <strong>toiture Lantier</strong> honnête, intègre et transparent, nous offrons un service d'inspection visuelle et physique exhaustif. Ce service est indispensable pour les propriétaires de maisons vieillissantes, pour les acheteurs immobiliers prudents qui veulent éviter d'hériter de vices cachés, ou pour faire un bilan de santé après de forts vents dans la plaine.
                  </p>
                  <p className="text-sm mt-4">
                    Lors de notre <strong>inspection de toiture Lantier</strong>, nous passons absolument tout au peigne fin. Nous vérifions l'état général des bardeaux (perte de granules protecteurs, présence de gondolement, bardeaux fendillés, clous apparents ou soulevés). Nous inspectons avec une attention particulière l'étanchéité des solins d'acier de la cheminée et des murs d'intersection, l'état du calfeutrage et la solidité des fixations de vos gouttières. Si la configuration de la maison le permet, nous examinons également l'intérieur de l'entretoit pour valider l'épaisseur de l'isolation, traquer la présence de moisissure noire et nous assurer que la circulation de l'air n'est pas bloquée. Au terme de cet examen minutieux, nous vous fournissons un bilan franc et détaillé. S'il n'y a rien à signaler, nous vous le dirons. Si des travaux correctifs s'imposent, nous vous soumettrons une estimation précise, sans aucune tactique de vente à haute pression.
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Lantier : Pourquoi c'est essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  Les hivers à Lantier apportent de fortes précipitations de neige qui s'accumulent et se compactent au fil des mois, souvent durcies par les vents froids. Cette masse représente une surcharge mécanique très dangereuse pour la charpente de votre résidence. Un service professionnel de <strong>déneigement toiture Laurentides</strong> est absolument impératif pour prévenir l'affaissement, la déformation à long terme, ou même l'effondrement pur et simple de vos fermes de toit sous l'énorme pression de la neige mouillée.
                </p>
                <p>
                  Le poids de la neige n'est d'ailleurs qu'une partie du problème. Le plus grand danger et la première cause de réclamation aux assurances hivernales proviennent de la formation de barrières de glace (digues de glace). Celles-ci se créent en bordure des toits à cause des cycles répétés de gel et de dégel. La neige fond sur la section supérieure, s'écoule sous forme d'eau, et regèle instantanément au contact des avant-toits glacés, bloquant ainsi l'accès vers les gouttières. L'eau s'accumule derrière ce mur de glace de plus en plus épais, remonte sous les bardeaux d'asphalte, et s'infiltre massivement à l'intérieur, détruisant la laine isolante et le gypse.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Il est très fortement déconseillé de tenter de déneiger votre toit vous-même avec une échelle instable. Monter sur un toit en pente recouvert de glace est la cause de nombreuses chutes tragiques et de blessures graves. Par ailleurs, l'utilisation d'outils inappropriés par les propriétaires (pelles métalliques, haches, pioches) détruit immanquablement l'asphalte de vos bardeaux, annulant sur-le-champ toutes vos garanties. Confiez cette tâche à haut risque à Toiture Jonathan Délisle Inc. Nos professionnels formés utilisent des harnais de sécurité certifiés et effectuent le déneigement toiture Laurentides avec des pelles en polymère spécialement conçues pour ne pas égratigner. Nous laissons toujours une mince pellicule de neige de protection pour ne jamais gratter le revêtement à nu.
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
              <span className="text-brand-red">Lantier</span> ?
            </h2>
            <p className="text-xl text-gray-600">
              Le choix de votre <strong>couvreur Lantier</strong> ne doit pas se faire à la hâte en cherchant uniquement l'entrepreneur le moins cher sur papier. La toiture est la première ligne de défense de votre foyer. Chez Toiture Jonathan Délisle Inc, nous nous démarquons très nettement de la concurrence par notre approche profondément humaine, notre minutie de tous les instants et notre grande maîtrise technique des enjeux propres à une véritable <strong>toiture Laurentides</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Connaissance experte de la ville",
                desc: "Nous connaissons les réalités de Lantier, des grands corridors de vents des secteurs ruraux (Saint-Benoît, Sainte-Scholastique) aux densités urbaines (Domaine-Vert, Saint-Janvier). Nos méthodes de fixation sont fermement adaptées en conséquence.",
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
                desc: "Nous traitons votre maison comme si c'était la nôtre. Nous protégeons consciencieusement votre aménagement paysager, vos véhicules et votre asphalte. Avant de partir, nous passons un puissant balai magnétique roulant pour ramasser absolument tous les clous tombés dans le gazon.",
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
          <h2 className="text-3xl font-extrabold text-brand-black tracking-tight mb-4">
            Zone de service — Lantier et les villes des Laurentides desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Extrêmement fiers de notre excellente réputation à titre d'entrepreneur <strong>toiture Lantier</strong>, notre flotte de camions bien identifiés sillonne les routes et autoroutes (15 et 50) pour desservir avec la même passion et la même rigueur l'ensemble de notre majestueuse région.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Lantier",
              "Prévost",
              "Saint-Sauveur",
              "Saint-Jérôme",
              "Sainte-Adèle",
              "Morin-Heights",
              "Sainte-Anne-des-Lacs"
            ].map((ville) => {
              const getSlug = (name) => name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/'/g, '').replace('les-laurentides', 'laurentides').replace('st-', 'saint-');
              const slug = getSlug(ville);
              const validRoutes = ['sainte-agathe-des-monts', 'saint-sauveur', 'mont-tremblant', 'mont-blanc', 'piedmont', 'val-david', 'val-morin', 'sainte-adele', 'sainte-anne-des-lacs', 'prevost', 'mirabel', 'saint-jerome', 'saint-hippolyte', 'morin-heights', 'lac-superieur', 'sainte-lucie-des-laurentides', 'laurentides', 'arundel', 'bellefeuille', 'lantier', 'mont-olympia', 'saint-adolphe-dhoward', 'saint-colomban', 'saint-faustin-lac-carre', 'sainte-marguerite-du-lac-masson', 'sainte-sophie', 'val-des-lacs', 'wentworth-nord'];
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
            Que votre propriété se trouve à Lantier même (dans les secteurs de Saint-Janvier, Saint-Canut, le Domaine-Vert Nord et Sud, Sainte-Scholastique ou Saint-Augustin), plus au nord vers Prévost et Saint-Sauveur, ou juste à côté dans le grand pôle de Saint-Jérôme, notre équipe mobile se rend rapidement chez vous. Quelle que soit l'envergure de votre projet résidentiel, nous garantissons à tous nos clients le même professionnalisme, la même courtoisie et la même qualité technique supérieure pour toute installation de <strong>toiture Laurentides</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture à Lantier
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
                  className={`w-full text-left px-6 py-6 md:px-8 flex items-center justify-between focus:outline-none transition-colors ${openFaqIndex === index ? 'bg-gray-50/50' : 'bg-transparent'}`}
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className={`text-xl md:text-2xl font-bold pr-8 tracking-tight transition-colors ${openFaqIndex === index ? 'text-brand-red' : 'text-gray-900'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openFaqIndex === index ? 'bg-brand-red text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <div 
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={openFaqIndex !== index}
                >
                  <div className="p-6 md:px-8 pt-0 pb-8 text-gray-600 leading-relaxed text-lg font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-6 lg:py-8 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549487964-67253b708d7d?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[34px] md:text-4xl font-black text-white mb-6 tracking-tight">
            Prêt à protéger votre maison et votre tranquillité d'esprit pour les années à venir ?
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto font-medium">
            Ne confiez pas le toit qui protège votre cocon familial, vos précieux souvenirs et vos investissements à des amateurs. Que vous ayez besoin d'une évaluation de routine pour vous rassurer avant la saison froide, d'une réparation cruciale et pressante suite à des intempéries, ou de l'installation rigoureuse d'une toiture entièrement neuve, l'équipe dévouée et hautement qualifiée de <strong>Toiture Jonathan Délisle Inc</strong> est prête à se mettre à l'œuvre pour vous satisfaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
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
