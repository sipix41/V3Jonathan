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
    question: "Quelle est l'espérance de vie réelle d'une toiture en bardeaux d'asphalte à Sainte-Adèle ?",
    answer: "Compte tenu des extrêmes climatiques de notre région montagneuse (neige abondante, grands froids, chaleur estivale et rayons UV intenses), une toiture recouverte de bardeaux d'asphalte architecturaux de première qualité, si elle est parfaitement installée et adéquatement ventilée, durera de façon très réaliste entre 20 et 30 ans. L'entretien de vos gouttières et un bon déneigement préventif sont cruciaux pour maximiser cette longévité.",
  },
  {
    question: "À quel moment précis devrais-je faire faire une inspection de toiture Sainte-Adèle ?",
    answer: "L'approche la plus rentable est la prévention. Nous recommandons vivement une inspection visuelle annuelle. Le meilleur moment est la fin de l'automne, pour vous assurer que les gouttières sont propres et que les solins sont hermétiques avant les gels, ou au printemps pour diagnostiquer rapidement tout dommage potentiel qui aurait pu être causé par la glace et le poids de la neige durant l'hiver.",
  },
  {
    question: "Intervenez-vous pour une réparation toiture Laurentides d'urgence suite à de grands vents ?",
    answer: "Oui, absolument. Nous comprenons qu'une infiltration d'eau active génère un stress énorme. Si une puissante rafale a arraché une section de bardeaux de votre toit ou si une chute de branche a percé le contreplaqué, appelez-nous immédiatement. Notre équipe se déploiera rapidement pour sécuriser les lieux avec l'installation de toiles de protection temporaires, stoppant ainsi les dégâts intérieurs, pour ensuite planifier la réfection permanente.",
  },
  {
    question: "Comment évaluez-vous le coût moyen d'un remplacement bardeaux asphalte Sainte-Adèle ?",
    answer: "Il est impossible de donner un prix juste sans voir la maison, car chaque toiture est unique. Le coût d'un remplacement complet varie en fonction de plusieurs variables : la superficie totale du toit (en pieds carrés), la pente de la toiture (les toits très abrupts exigent plus de temps et d'équipements de sécurité de type harnais), la complexité architecturale (présence de noues, lucarnes, puits de lumière), le nombre de vieilles couches de bardeaux à arracher et les matériaux de finition choisis. Nous vous offrons une estimation sur place, 100 % gratuite et détaillée.",
  },
  {
    question: "Pourquoi est-il si risqué de faire le déneigement toiture Laurentides moi-même ?",
    answer: "Le déneigement d'un toit est l'une des tâches extérieures les plus dangereuses. Sans équipement de protection antichute (harnais, câble d'assurance) et sans formation, une glissade sur la glace peut être fatale. De plus, les propriétaires utilisent souvent des pelles de déneigement ordinaires en aluminium ou en métal qui finissent toujours par rayer, couper et détruire l'asphalte gelé des bardeaux. Cela bousille l'étanchéité, annule instantanément vos garanties et provoque des infiltrations sévères. Nos professionnels disposent du matériel de sécurité et de pelles en polymère douces pour le revêtement afin d'effectuer le travail en toute sécurité.",
  },
];

export const SainteAdele: React.FC = () => {
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
      "name": "Services de toiture à Sainte-Adèle",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sainte-Adèle",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Sainte-Adèle"
      },
      "description": "À la recherche d'un couvreur de confiance à Sainte-Adèle? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement."
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="Couvreur Sainte-Adèle | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        overrideFullTitle="Couvreur Sainte-Adèle | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        description="À la recherche d'un couvreur de confiance à Sainte-Adèle? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement. Soumission gratuite!"
        canonicalUrl="/sainte-adele"
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
              <MapPin size={16} /> Couvreur à Sainte-Adèle
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">Sainte-Adèle</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour protéger votre maison au cœur des Pays-d'en-Haut
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
              Toiture Jonathan Délisle Inc : L'expert couvreur de prestige à <strong>Sainte-Adèle</strong>. Préservez la valeur et l'intégrité de votre propriété au cœur de la vallée adéloise.
            </p>
            <p>
              Reconnue pour son relief vallonné et son dynamisme culturel, la ville de <strong>Sainte-Adèle</strong> possède un parc immobilier d'une grande diversité. Des vastes domaines ceinturant le Lac Rond aux demeures pittoresques du secteur de Mont-Gabriel ou des secteurs plus forestiers (comme le domaine Chantecler), l'architecture s'adapte sans cesse à la topographie montagneuse. Qu'il s'agisse de toitures aux pentes vertigineuses, de chalets suisses traditionnels ou de constructions récentes, la solidité de votre toit est primordiale.
            </p>
            <p>
              Le secteur accidenté de Sainte-Adèle génère son propre microclimat : épisodes fréquents de pluie verglaçante, importantes chutes de neige lourde en altitude et puissants vents rabattants. Ces aléas de la météo exercent une pression intense sur les bardeaux et la structure. <strong>Toiture Jonathan Délisle Inc</strong>, en tant qu'<strong>entrepreneur couvreur à Sainte-Adèle</strong>, vous apporte son savoir-faire de pointe pour déployer une barrière protectrice ultra résistante, garantissant votre sérénité totale lors des pires tempêtes laurentiennes.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                Que votre maison soit située le long du boulevard de Sainte-Adèle, aux abords de la rivière du Nord, ou nichée en hauteur sur les monts boisés, nous répondons présent avec une expertise technique inégalée. Nous concevons notamment des systèmes de ventilation d'entretoit sur mesure pour combattre les effets pernicieux de la condensation intra-murale, particulièrement fréquente ici durant l'hiver.
              </p>
              <p>
                La tranquillité d'esprit est à votre portée avec Toiture Jonathan Délisle Inc. Faites confiance à des artisans d'ici pour le remplacement complet de bardeaux d'asphalte architecturaux, le déneigement sécuritaire de votre toiture et les inspections ciblées à Sainte-Adèle.
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
                Pose et remplacement de bardeaux d'asphalte à Sainte-Adèle
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le <strong>remplacement bardeaux asphalte Sainte-Adèle</strong> est incontestablement le service pour lequel nous sommes le plus souvent sollicités dans la région. Les matériaux de recouvrement ont énormément évolué, et les bardeaux d'aujourd'hui offrent une résistance remarquable jumelée à un rapport qualité-prix inégalé pour affronter notre rude climat québécois. Chez Toiture Jonathan Délisle Inc, nous sommes de véritables spécialistes de la pose de bardeaux d'asphalte architecturaux de qualité supérieure. Fini le temps des vieux bardeaux plats à trois pattes qui se soulevaient et s'arrachaient au moindre coup de vent. Les bardeaux architecturaux que nous installons sont plus épais, multidimensionnels, lourdement texturés et spécifiquement testés pour résister à des vents extrêmes et aux chocs thermiques brutaux si fréquents dans les Laurentides.
                </p>
                <p>
                  Notre méthode de travail pour tout projet de <strong>remplacement bardeaux asphalte Sainte-Adèle</strong> est d'une rigueur absolue et ne tolère aucun raccourci. Chaque chantier débute par l'arrachage méticuleux et complet des anciennes couches de revêtement afin de mettre à nu le pontage de bois (les planches ou le contreplaqué qui forment la fondation de votre toit). Cette étape est non négociable : elle nous permet d'inspecter physiquement la santé de votre charpente. Il est impensable de poser un toit neuf sur des planches pourries, affaiblies ou délaminées par la condensation. Si du bois est endommagé, nos menuisiers le remplacent sur-le-champ pour garantir une base solide.
                </p>
                <p>
                  Une fois la fondation approuvée, nous passons à l'imperméabilisation stratégique. Nous fixons d'abord des larmiers métalliques au périmètre pour guider l'eau de pluie loin de vos fascias. Ensuite, nous déployons une large membrane autocollante de haute performance (membrane élastomère) aux endroits critiques : les avant-toits, les noues (les creux où deux pentes se rencontrent), et tout autour des éléments de maçonnerie comme la cheminée. Dans une ville montagneuse comme Sainte-Adèle, les barrages de glace sont très fréquents; cette membrane est votre ultime bouclier contre les infiltrations. La surface restante est couverte d'une sous-couche synthétique perméable à l'air mais hydrofuge. Enfin, les bardeaux sont installés selon un schéma de clouage précis, garantissant la validité des garanties prolongées pour votre <strong>toiture Sainte-Adèle</strong>.
                </p>
                <p>
                  Nous n'oublions jamais que la santé d'un toit passe par sa capacité à respirer. Nous évaluons et optimisons toujours votre système de ventilation (soffites et aérateurs de toit) pour prévenir la condensation hivernale destructrice et la surchauffe estivale.
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
                Réparation de toiture à Sainte-Adèle
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Malgré la qualité des matériaux, la météo imprévisible et parfois violente de notre région peut causer des dommages inattendus. Après une puissante tempête automnale qui balaie les hauteurs de la ville ou à la suite d'un orage estival fracassant, il n'est pas rare qu'une toiture subisse des bris. Si vous apercevez des bardeaux éparpillés sur votre pelouse, des cernes bruns d'humidité sur le gypse de vos plafonds, ou des solins d'acier arrachés, vous devez agir rapidement. Notre service d'intervention d'urgence en <strong>réparation toiture Laurentides</strong> est spécialement conçu pour colmater les brèches avant que l'eau ne compromette la structure de votre maison et n'entraîne des coûts de rénovation astronomiques.
              </p>
              <p>
                En tant qu'entrepreneur <strong>toiture Sainte-Adèle</strong> de grande expérience, nous savons que l'eau est un élément furtif et capricieux. Une goutte qui apparaît dans votre cuisine a souvent voyagé le long des chevrons de l'entretoit depuis une micro-fissure située beaucoup plus haut. C'est pourquoi chaque intervention de réparation toiture Laurentides débute par une véritable enquête diagnostique. Nous refusons de simplement appliquer du ciment plastique sur un symptôme; nous trouvons la source exacte de la fuite pour appliquer un correctif technique permanent.
              </p>
              <p>
                Que la source du problème soit un joint de calfeutrage asséché et craquelé par le soleil, un évent de plomberie dont le collet est usé, des dommages créés par le frottement de branches d'arbres matures, ou des bardeaux défectueux, nous possédons le savoir-faire pour y remédier. Soucieux de l'esthétique de votre demeure, nous faisons toujours l'effort supplémentaire de trouver des bardeaux de remplacement dont la couleur se fond de façon transparente avec le reste de votre toiture.
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
                  On répète souvent qu'il vaut mieux prévenir que guérir, et ce principe prend tout son sens quand on parle d'immobilier. Une <strong>inspection de toiture Sainte-Adèle</strong> réalisée de manière préventive par nos maîtres couvreurs peut vous éviter de mauvaises surprises et prolonger considérablement l'espérance de vie de vos matériaux. De façon idéale, une toiture de nos régions devrait être inspectée à la fin de l'automne, pour s'assurer que les gouttières sont libérées des feuilles mortes et que tout est calfeutré avant la neige, ainsi qu'au printemps, pour évaluer les impacts de la glace hivernale.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Reconnu comme un entrepreneur <strong>toiture Sainte-Adèle</strong> honnête et méticuleux, nous offrons un service d'inspection visuelle et physique rigoureux. Ce service est indispensable pour les propriétaires de maisons vieillissantes, pour les acheteurs immobiliers prudents qui veulent éviter les vices cachés, ou pour les résidences situées dans des environnements très boisés où l'humidité stagne plus longtemps.
                  </p>
                  <p className="text-sm mt-4">
                    Lors de notre <strong>inspection de toiture Sainte-Adèle</strong>, nous passons tout au peigne fin. Nous vérifions l'état général des bardeaux d'asphalte (perte de granules protecteurs, présence de gondolement, clous apparents). Nous inspectons avec une attention particulière l'étanchéité des solins d'acier de la cheminée et des murs, l'état du calfeutrage et la solidité des gouttières. Si la configuration nous le permet, nous examinons l'intérieur de l'entretoit pour valider l'épaisseur et la condition de l'isolation, et pour nous assurer que la circulation de l'air n'est pas bloquée. Au terme de cet examen, nous vous fournissons un bilan franc et détaillé. S'il n'y a rien à faire, nous vous le dirons. Si des travaux correctifs s'imposent, nous vous soumettrons une estimation précise, sans aucune pression.
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Sainte-Adèle : Pourquoi c'est essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  À cause de son altitude et de son relief, Sainte-Adèle reçoit des précipitations de neige souvent plus abondantes que les municipalités situées plus au sud. Bien que cette neige fasse le charme de la ville en hiver, elle représente une surcharge mécanique très dangereuse pour la charpente de votre résidence. Un service professionnel de <strong>déneigement toiture Laurentides</strong> est impératif pour prévenir l'affaissement, la déformation à long terme, ou même l'effondrement pur et simple de vos fermes de toit sous la pression.
                </p>
                <p>
                  Le poids de la neige n'est d'ailleurs qu'une partie du problème. Le plus grand danger provient de la formation de barrières de glace (digues de glace). Celles-ci se créent en bordure des toits à cause des cycles répétés de gel et de dégel. La neige fond sur la section supérieure (réchauffée par l'intérieur de la maison), s'écoule, et regèle instantanément au contact des avant-toits glacials, bloquant ainsi l'accès aux gouttières. L'eau s'accumule derrière ce mur de glace, remonte sous les bardeaux d'asphalte, et s'infiltre massivement à l'intérieur, abîmant la laine minérale, le gypse et les planchers.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Il est très fortement déconseillé de tenter de déneiger votre toit vous-même. Monter sur un toit en pente recouvert de glace est une cause fréquente de chutes tragiques au Québec. Par ailleurs, l'utilisation d'outils inappropriés (comme des pelles métalliques, des pioches ou des haches) détruit immanquablement l'asphalte de vos bardeaux, annulant sur-le-champ toutes vos garanties. Confiez cette tâche à haut risque à Toiture Jonathan Délisle Inc. Nos professionnels formés utilisent des harnais de sécurité certifiés et effectuent le déneigement toiture Laurentides avec des pelles en polymère spécialisées. Nous laissons toujours une mince pellicule de protection sur le toit afin de ne jamais gratter le revêtement, assurant ainsi la sécurité totale de votre investissement.
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
              <span className="text-brand-red">Sainte-Adèle</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Le choix de votre <strong>couvreur Sainte-Adèle</strong> ne doit pas se faire à la légère. La toiture est la toute première ligne de défense de votre foyer et de votre famille contre un environnement capricieux. Chez Toiture Jonathan Délisle Inc, nous nous démarquons très nettement par notre approche profondément humaine, notre minutie de tous les instants et notre maîtrise technique des enjeux propres à une véritable <strong>toiture Laurentides</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Connaissance experte du relief local",
                desc: "Nous connaissons les corridors de vent des Pays-d'en-Haut et les défis posés par l'accumulation de neige dans la région. Nos méthodes de fixation et d'imperméabilisation sont fermement adaptées en conséquence.",
              },
              {
                title: "Des matériaux d'une qualité sans compromis",
                desc: "Nous refusons l'installation de produits bas de gamme. Nous travaillons exclusivement avec des bardeaux, des sous-couches et des membranes de marques certifiées, reconnues pour leur très grande longévité sous notre climat.",
              },
              {
                title: "Intégrité et clarté",
                desc: "Nos soumissions sont détaillées, limpides et complètes. Vous comprenez exactement chaque ligne de l'estimation. Pas de frais cachés ou d'extras inattendus au moment de la facturation.",
              },
              {
                title: "Respect scrupuleux de votre terrain",
                desc: "Nous protégeons consciencieusement vos arbustes, votre terrasse et votre asphalte pendant toute la durée des travaux. Avant de partir, nous nettoyons le chantier de fond en comble et passons un balai magnétique puissant pour ramasser tous les clous tombés au sol.",
              },
              {
                title: "Assurances et garanties blindées",
                desc: "Notre entreprise détient une assurance responsabilité civile complète et nous offrons d'exceptionnelles garanties sur notre main-d'œuvre, qui s'ajoutent à celles offertes par les fabricants de matériaux.",
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
            Zone de service — Sainte-Adèle et les villes des Laurentides desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Extrêmement fiers de notre renommée grandissante à titre d'entrepreneur <strong>toiture Sainte-Adèle</strong>, notre flotte de camions sillonne les routes pour desservir avec la même passion l'ensemble de notre majestueuse région.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Sainte-Adèle",
              "Piedmont",
              "Saint-Sauveur",
              "Saint-Jérôme",
              "Val-Morin",
              "Sainte-Agathe-Des-Monts",
              "Mont-Tremblant"
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
            Que votre propriété se trouve à Sainte-Adèle (près du lac Rond ou du secteur de Mont-Rolland), au sud vers Piedmont et Saint-Sauveur, au cœur du grand pôle urbain de Saint-Jérôme, ou plus au nord en direction de Val-Morin, Sainte-Agathe-Des-Monts avec une vue sur le lac des Sables, jusqu'à Mont-Tremblant, notre équipe mobile se rend chez vous. Quelle que soit l'envergure de votre projet résidentiel, nous garantissons à tous nos clients le même professionnalisme, la même courtoisie et la même qualité technique supérieure pour toute <strong>toiture Laurentides</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture à Sainte-Adèle
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
            Ne confiez pas le toit qui protège votre cocon familial, vos souvenirs et vos investissements à n'importe qui. Que vous ayez besoin d'une évaluation de routine pour vous rassurer avant l'hiver, d'une réparation cruciale et pressante suite à des intempéries, ou de l'installation rigoureuse d'une toiture entièrement neuve, l'équipe dévouée de <strong>Toiture Jonathan Délisle Inc</strong> est prête à se mettre à l'œuvre pour vous.
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
