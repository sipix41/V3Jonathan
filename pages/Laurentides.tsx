import React, { Suspense,  useState  } from 'react';
import {
  Shield,
  Hammer,
  Snowflake,
  CheckCircle,
  MapPin,
  Phone,
  ChevronDown,
  Star,
} from "lucide-react";
import { SEO } from "../components/SEO";
import { Button } from "../components/Button";
import { COMPANY_INFO } from "../constants";
import { Link } from "react-router-dom";
const ChampsExpertise = React.lazy(() => import('../components/ChampsExpertise').then(m => ({ default: m.ChampsExpertise })));

const FAQ_DATA = [
  {
    question:
      "Quelle est la durée de vie réelle d'une toiture en bardeaux d'asphalte dans les Laurentides ?",
    answer:
      "En tenant compte des rigueurs extrêmes de notre climat régional (neige, glace, vents, rayons UV intenses en été), une toiture en bardeaux d'asphalte architecturaux de qualité supérieure, si elle est parfaitement ventilée et installée par des maîtres couvreurs, durera réalistement entre 20 et 30 ans. Un entretien préventif régulier et un déneigement adéquat sont les clés pour maximiser cette durée de vie.",
  },
  {
    question:
      "Quel est le moment idéal de l'année pour faire inspecter ma toiture ?",
    answer:
      "La proactivité est de mise. Nous recommandons fortement de faire réaliser une inspection visuelle annuelle. Le moment le plus stratégique est la fin de l'automne, pour vous assurer que les solins sont étanches et les gouttières propres avant les grandes neiges, ou au tout début du printemps, pour constater rapidement tout dommage potentiel causé par la rigueur de l'hiver et la fonte des glaces.",
  },
  {
    question:
      "Offrez-vous un service de réparation toiture Laurentides en cas d'urgence ?",
    answer:
      "Oui, absolument. Les urgences ne préviennent pas et n'arrivent jamais à un bon moment. Si votre toit a subi des dommages sévères suite à une violente rafale de vent arrachant des bardeaux, ou si vous constatez une infiltration d'eau active dans votre maison, appelez-nous immédiatement. Notre équipe d'urgence se déplacera le plus vite possible pour sécuriser le périmètre, installer des toiles temporaires pour stopper l'eau, et procéder aux réparations permanentes dans les plus brefs délais.",
  },
  {
    question:
      "Comment calculez-vous le coût d'un remplacement bardeaux asphalte Laurentides ?",
    answer:
      "Le coût d'une réfection complète n'est jamais un prix unique. Il varie en fonction de multiples critères propres à votre résidence : la superficie totale du toit (en pieds carrés), le degré de la pente (les toits très abrupts exigent plus de mesures de sécurité et de temps), l'accessibilité au terrain pour les conteneurs, le nombre de couches de vieux bardeaux à retirer, la nécessité ou non de remplacer du pontage de bois endommagé, et le choix de la gamme de bardeaux neufs. Contactez-nous pour que nous puissions prendre des mesures exactes et vous offrir une soumission totalement gratuite et détaillée.",
  },
  {
    question:
      "Pourquoi est-il si risqué de faire le déneigement toiture Laurentides moi-même ?",
    answer:
      "Le déneigement de toiture est l'une des tâches les plus dangereuses de l'entretien domestique. Sans équipement de protection antichute certifié, une simple glissade peut être fatale. Par ailleurs, l'utilisation d'outils inadaptés (comme des pelles en aluminium, des haches ou des pics à glace) risque presque à tout coup de couper, fendre ou détruire vos bardeaux d'asphalte glacés. Cela annulerait immédiatement vos garanties et causerait des infiltrations d'eau désastreuses dans les semaines suivantes. Un couvreur professionnel possède l'expérience, le matériel sécuritaire et les pelles en polymère requises pour dégager la neige de façon hautement sécuritaire et préventive, tout en préservant l'intégrité de votre investissement.",
  },
];

export const Laurentides: React.FC = () => {
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
      "name": "Services de toiture à Les Laurentides",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": COMPANY_INFO.phone,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Les Laurentides",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Les Laurentides"
      },
      "description": "Installation, réparation, inspection et déneigement de toiture résidentielle et commerciale pour la région de Les Laurentides."
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="Couvreur Laurentides"
        overrideFullTitle="Couvreur Laurentides | Toiture Jonathan Délisle Inc – Expert en Toiture"
        description="À la recherche d'un couvreur de confiance dans les Laurentides? Toiture Jonathan Délisle Inc est l'expert régional en installation, réparation et déneigement. Soumission gratuite!"
        canonicalUrl="/laurentides"
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
              <MapPin size={16} /> Couvreur dans les Laurentides
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">les Laurentides</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour protéger votre maison face à notre
              climat.
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
          <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 md:p-12 shadow-sm max-w-5xl mx-auto">
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p className="font-medium text-2xl md:text-3xl text-gray-900 border-l-4 border-brand-red pl-6">
                Toiture Jonathan Délisle Inc : Votre partenaire de confiance pour tous vos besoins en toiture à travers <strong>les Laurentides</strong>. Une expertise globale, un service de proximité.
              </p>
              <p>
                Région de contrastes et de paysages grandioses, <strong>les Laurentides</strong> constituent un vaste territoire allant des portes de l'agglomération montréalaise jusqu'aux hauts sommets du nord. De l'architecture urbaine effervescente des grands centres aux majestueux chalets en bois rond blottis autour de nos milliers de lacs, la diversité des constructions y est inégalée. C'est ce mariage unique de villes, de villages pittoresques et de milieux sauvages qui fait la richesse de notre région.
              </p>
              <p>
                Cette immensité géographique s'accompagne d'un climat sans pitié et souvent imprévisible. Les Laurentides sont le carrefour des précipitations intenses, des charges de neige écrasantes typiques du nord et des puissants vents balayant les vallées et les lacs. Face à ces défis colossaux, <strong>Toiture Jonathan Délisle Inc</strong> s'impose comme votre <strong>entrepreneur couvreur dans les Laurentides</strong> par excellence. Nous comprenons que chaque secteur a ses propres microclimats, et nous concevons des systèmes de toiture capables de faire face aux pires scénarios météorologiques de notre région.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                Que votre projet se situe en milieu urbain fortement exposé aux îlots de chaleur, en pleine zone forestière sujette à une humidité extrême, ou aux abords d'un versant de montagne propice aux rafales, nous déployons une force d'intervention rapide et structurée. Notre priorité absolue est de garantir la parfaite aération de votre entretoit et l'étanchéité totale de votre couverture pour bloquer les ravages de notre hiver typiquement québécois.
              </p>
              <p>
                Toiture Jonathan Délisle Inc, c'est le sceau d'excellence pour la pérennité de votre investissement immobilier à grandeur de la région. Pose de bardeaux d'asphalte architecturaux de la plus haute qualité, réparations stratégiques, déneigement préventif rigoureux et inspections détaillées : nous sommes les gardiens de vos toitures dans toutes les Laurentides.
              </p>
            </>
          } 
        />
      </Suspense>

      {/* Section 1 */}
      <section className="py-4 lg:py-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight relative pb-4">
                Pose et remplacement de bardeaux d'asphalte dans les Laurentides
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Le <strong>remplacement bardeaux asphalte Laurentides</strong>{" "}
                  demeure notre service phare, et pour d'excellentes raisons. Ce
                  matériau classique a grandement évolué et offre aujourd'hui un
                  rapport qualité-prix inégalé, couplé à une protection optimale
                  contre les intempéries québécoises. Chez Toiture Jonathan
                  Délisle Inc, nous avons développé une maîtrise exceptionnelle
                  dans l'installation de bardeaux d'asphalte architecturaux de
                  la plus haute qualité. Oubliez les vieux bardeaux à trois
                  pattes qui volent au vent; les modèles architecturaux
                  d'aujourd'hui sont multidimensionnels, ultra-épais et
                  renforcés pour affronter des rafales extrêmes et des
                  variations thermiques intenses sans se fissurer ni se
                  déformer.
                </p>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <p className="mb-0">
                    Chaque projet de{" "}
                    <strong>remplacement bardeaux asphalte Laurentides</strong>{" "}
                    que nous entreprenons suit un protocole strict, sans aucun
                    compromis. Nous débutons invariablement par l'arrachage
                    complet des vieilles couches de revêtement afin d'inspecter
                    visuellement le pontage de bois (la fondation de votre toit).
                    Cette étape est non négociable : il est hors de question pour
                    nous de cacher un problème structurel, de la pourriture ou de
                    la moisissure sous des bardeaux neufs. Si le bois est
                    endommagé, nos menuisiers le remplacent immédiatement pour
                    garantir une base solide à 100 %.
                  </p>
                </div>
                <p>
                  Une fois le pontage validé et sécurisé, notre équipe déploie
                  un système de protection multicouche. Nous installons d'abord
                  des larmiers d'acier pour éloigner l'eau des fascias. Nous
                  appliquons ensuite une large bande de membrane imperméable
                  autocollante (membrane élastomère) aux endroits critiques :
                  les avant-toits, les noues, et le pourtour des cheminées et
                  des puits de lumière. Cette membrane est votre bouclier ultime
                  contre les redoutables barrages de glace qui frappent notre
                  région chaque hiver. Le reste de la surface est couvert d'une
                  sous-couche synthétique de pointe, perméable à l'air mais
                  étanche à l'eau. Finalement, les bardeaux sont posés et cloués
                  avec une précision millimétrique, respectant scrupuleusement
                  les directives des manufacturiers pour vous assurer les
                  meilleures garanties sur le marché pour votre{" "}
                  <strong>toiture Laurentides</strong>.
                </p>
                <p>
                  Parce qu'un bon toit doit pouvoir respirer, nous évaluons
                  systématiquement votre système de ventilation. Une mauvaise
                  aération de l'entretoit provoque la condensation en hiver (ce
                  qui fait pourrir le bois) et la surchauffe des bardeaux en été
                  (ce qui les fait frire et gondoler). L'ajout d'aérateurs de
                  toit performants garantit la pérennité de votre investissement.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl text-2xl mb-4 border border-gray-100">🔨</div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Préparation du pontage
                  </h3>
                  <p className="text-sm text-gray-600">
                    Arrachage complet des vieilles couches pour inspecter et
                    garantir une fondation solide à 100%.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sm:translate-y-8 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl text-2xl mb-4 border border-gray-100">🏠</div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Bardeaux architecturaux
                  </h3>
                  <p className="text-sm text-gray-600">
                    Multidimensionnels, ultra-épais et renforcés pour affronter
                    des rafales extrêmes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl text-2xl mb-4 border border-gray-100">🛡️</div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Membrane élastomère
                  </h3>
                  <p className="text-sm text-gray-600">
                    Bouclier ultime contre les redoutables barrages de glace.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sm:translate-y-8 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl text-2xl mb-4 border border-gray-100">💨</div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Ventilation intelligente
                  </h3>
                  <p className="text-sm text-gray-600">
                    Aérateurs performants garantissant la pérennité de votre
                    investissement.
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
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight mb-4 flex items-center justify-center gap-3">
                <div className="inline-flex items-center justify-center p-2 bg-brand-red/10 rounded-xl">
                  <Hammer className="w-10 h-10 text-brand-red" />
                </div>
                Réparation de toiture dans les Laurentides
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                La météo de notre vaste région est tout sauf clémente. Les
                orages estivaux soudains, les chutes de grêle dévastatrices ou
                les forts coups de vent de l'automne laissent souvent des traces
                sur les toitures. Si vous retrouvez des morceaux de bardeaux sur
                votre pelouse, si vous constatez des cernes jaunâtres sur le
                plafond de votre chambre, ou si vos solins métalliques semblent
                tordus, vous devez agir sans attendre. Notre service d'urgence
                en <strong>réparation toiture Laurentides</strong> est conçu
                pour intervenir rapidement et stopper l'hémorragie avant qu'un
                petit problème ne se transforme en un cauchemar financier
                majeur.
              </p>
              <div className="flex flex-col md:flex-row gap-6 border border-gray-100 bg-zinc-50 p-6 rounded-xl items-center">
                <div className="flex-1 space-y-3">
                  <p className="font-medium">
                    En tant qu'<strong>entrepreneur toiture Laurentides</strong>{" "}
                    d'expérience, nous savons que l'eau est un ennemi sournois. Elle
                    peut s'infiltrer à un endroit précis et voyager le long des
                    chevrons sur plusieurs mètres avant de goutter à l'intérieur de
                    la maison.
                  </p>
                </div>
                <div className="flex-1 space-y-3">
                  <p className="font-medium text-brand-red">
                    C'est pourquoi, lors de toute <strong>réparation toiture Laurentides</strong>, nous menons une
                    véritable enquête minutieuse. Nous ne mettons pas simplement un
                    pansement de ciment plastique sur la plaie; nous trouvons la
                    source exacte de la fuite pour appliquer un correctif permanent.
                  </p>
                </div>
              </div>
              <p>
                Que la détérioration provienne de joints de calfeutrage asséchés
                par le soleil, d'un évent de plomberie fissuré, de dommages
                causés par des écureuils ou de l'usure prématurée causée par
                l'accumulation de débris forestiers, nous avons la solution.
                Nous sommes également extrêmement soucieux de l'esthétique de
                votre maison : nous mettons tout en œuvre pour trouver des
                bardeaux de remplacement dont la teinte s'harmonise parfaitement
                avec le reste de votre toiture. Avec Toiture Jonathan Délisle
                Inc., la qualité d'une petite réparation est prise aussi au
                sérieux que celle d'une réfection complète.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 & 4 */}
      <section className="relative py-4 lg:py-6 bg-brand-black text-white overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl -z-10 translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex items-start flex-col md:flex-row gap-6 group">
              <div className="w-16 h-16 shrink-0 bg-brand-red/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield size={32} className="text-brand-red" />
              </div>
              <div className="flex-1 flex flex-col">
              <h2 className="text-2xl font-extrabold mb-4 text-white">
                Inspection de toiture professionnelle dans les Laurentides
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  La prévention est de loin la stratégie la plus payante pour
                  l'entretien d'une maison. Une{" "}
                  <strong>inspection de toiture Laurentides</strong> réalisée
                  dans les règles de l'art par des experts peut vous faire
                  économiser des milliers de dollars en prévenant des sinistres
                  majeurs et en allongeant la durée de vie de votre revêtement.
                  Les experts recommandent généralement deux inspections par an
                  : une à l'automne pour nettoyer les débris et préparer la
                  structure au poids de la neige, et une au printemps pour
                  vérifier qu'aucun dommage n'a été causé par la glace
                  hivernale.
                </p>
                <p>
                  En tant qu'<strong>entrepreneur toiture Laurentides</strong>{" "}
                  reconnu, nous offrons un service d'inspection rigoureux,
                  totalement transparent et documenté. Ce service est essentiel
                  pour les propriétaires de maisons unifamiliales, mais aussi
                  extrêmement prisé par les nouveaux acheteurs immobiliers
                  voulant éviter les vices cachés, ou les propriétaires de
                  chalets qui ne sont pas toujours sur place pour constater les
                  dégâts visuellement.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm/relaxed text-gray-400">
                    Lors de notre{" "}
                    <strong>inspection de toiture Laurentides</strong>, rien
                    n'échappe à notre œil averti. Nous évaluons le niveau
                    d'usure des granules sur vos bardeaux, nous traquons le
                    moindre signe de gondolement, de fissuration ou de clous
                    apparents. Nous vérifions l'intégrité absolue de tous les
                    solins (cheminées, murs, puits de lumière) et nous nous
                    assurons que vos gouttières sont dégagées et bien fixées. De
                    plus, nous inspectons les soffites et, si possible,
                    l'intérieur de l'entretoit pour valider l'état de
                    l'isolation et la qualité de la circulation d'air. Si des
                    travaux correctifs s'avèrent pertinents, nous vous
                    fournissons un rapport détaillé accompagné d'une soumission
                    claire et sans aucune pression. Vous prenez vos décisions en
                    ayant l'heure juste.
                  </p>
                </div>
              </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex items-start flex-col md:flex-row gap-6 group">
              <div className="w-16 h-16 shrink-0 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Snowflake size={32} className="text-blue-400" />
              </div>
              <div className="flex-1 flex flex-col">
              <h2 className="text-2xl font-extrabold mb-4 text-white">
                Déneigement de toiture dans les Laurentides : Pourquoi c'est
                essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  Nos hivers légendaires drapent les Laurentides d'un magnifique
                  manteau blanc, mais cette beauté naturelle représente une
                  menace lourde et silencieuse pour les charpentes de nos
                  résidences. Un service de{" "}
                  <strong>déneigement toiture Laurentides</strong> préventif et
                  exécuté par des professionnels est tout simplement
                  indispensable pour éviter l'affaissement ou, dans le pire des
                  scénarios, l'effondrement de vos fermes de toit sous des
                  tonnes de neige compactée.
                </p>
                <p>
                  Au-delà du poids écrasant, le plus grand danger réside dans la
                  formation des barrières de glace (ou digues de glace) au bas
                  des pentes du toit. En raison des cycles fréquents de gel et
                  de dégel, la neige fond sur la partie chaude du toit, puis
                  regèle instantanément en arrivant près des gouttières, créant
                  un mur de glace infranchissable. L'eau de fonte subséquente
                  est alors bloquée, s'accumule en une véritable mare sur votre
                  toit, et finit par remonter à contresens sous les bardeaux
                  pour s'infiltrer massivement dans vos murs et vos plafonds.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm/relaxed text-gray-400">
                    Ne prenez surtout pas le risque de grimper vous-même sur une
                    surface glacée et inclinée pour économiser quelques dollars.
                    Les chutes depuis un toit sont malheureusement très
                    fréquentes et souvent tragiques. Confiez le{" "}
                    <strong>déneigement toiture Laurentides</strong> à l'équipe
                    qualifiée de Toiture Jonathan Délisle Inc. Nos techniciens
                    sont formés, arrimés par des harnais de sécurité conformes,
                    et utilisent des pelles en polymère spécialement conçues
                    pour ne jamais rayer ou endommager vos précieux bardeaux.
                    Nous retirons la surcharge de neige tout en laissant une
                    couche protectrice sécuritaire, éliminant ainsi les risques
                    pour votre structure tout en préservant l'intégrité de votre
                    couverture.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 : Pourquoi choisir */}
      <section className="relative py-4 lg:py-6 bg-gray-50 border-b border-gray-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-16">
            <h2 className="text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight mb-6">
              Pourquoi choisir Toiture Jonathan Délisle Inc comme{" "}
              <span className="text-brand-red relative whitespace-nowrap">
                couvreur Laurentides
                <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-red/20"></span>
              </span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Confier le toit de sa maison à un entrepreneur est une grande
              preuve de confiance. Votre toiture est la toute première ligne de
              défense de votre foyer contre un environnement souvent hostile.
              Chez Toiture Jonathan Délisle Inc, nous nous distinguons
              largement de la compétition par notre approche profondément
              humaine, notre minutie légendaire et notre passion indéfectible
              pour les règles de l'art du métier de couvreur. Nous sommes une
              entreprise d'ici, qui saisit intimement toutes les exigences d'une
              véritable <strong>toiture Laurentides</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise régionale approfondie",
                desc: "Nous travaillons exclusivement dans les Laurentides. Nous connaissons les vents, les accumulations de neige et l'humidité de notre région. Nos méthodes de pose sont adaptées pour affronter ce climat précis.",
              },
              {
                title: "Qualité des matériaux sans compromis",
                desc: "Nous refusons d'installer des produits bas de gamme. Nous travaillons avec des marques de bardeaux d'asphalte et des membranes certifiées, reconnues pour leur longévité et leur performance en climat froid.",
              },
              {
                title: "Transparence et intégrité totales",
                desc: "De notre première estimation gratuite jusqu'à la facture finale, il n'y a aucune zone grise, aucun frais caché ni mauvaise surprise. Nous vous expliquons tout en détail.",
              },
              {
                title: "Respect scrupuleux de votre propriété",
                desc: "Nous savons que vous tenez à votre aménagement paysager. Nous protégeons vos arbustes, vos fleurs et votre asphalte durant les travaux. À la fin, nous passons le terrain entier au rouleau magnétique pour ne laisser aucun clou.",
              },
              {
                title: "Assurances et garanties béton",
                desc: "Nous sommes couverts par de solides assurances responsabilité civile, nous possédons les licences appropriées, et nos travaux sont protégés par d'excellentes garanties de main-d'œuvre, appuyées par les manufacturiers.",
              },
              {
                title: "Service client attentionné",
                desc: "Nous sommes à l'écoute de vos besoins spécifiques courtois. Notre équipe s'assure de vous offrir un accompagnement personnalisé et exceptionnel, de la première rencontre à l'inspection.",
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <h3 className="font-bold text-xl mb-3 text-gray-900 flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-[-4px]">
                    <CheckCircle className="text-brand-red w-4 h-4" />
                  </div>
                  <span>{feature.title}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
          <div className="inline-flex items-center justify-center p-4 bg-brand-red/10 rounded-full mb-6 relative">
            <div className="absolute inset-0 bg-brand-red/20 rounded-full animate-ping opacity-20"></div>
            <MapPin size={32} className="text-brand-red" />
          </div>
          <h2 className="text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight mb-6">
            Zone de service — Couverture de l'ensemble de la région des
            Laurentides
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            Notre réputation de premier plan en tant qu'
            <strong>entrepreneur toiture Laurentides</strong> dépasse largement
            les limites d'une seule municipalité. Nous sommes extrêmement fiers
            de déployer nos équipes et nos camions à travers toute la région,
            pour desservir une clientèle résidentielle et commerciale vaste et
            diversifiée. Que votre propriété se trouve au cœur de
            l'effervescence urbaine de Saint-Jérôme, dans les quartiers
            familiaux en pleine expansion de Saint-Colomban, près de la frénésie
            des pistes de ski de Saint-Sauveur et de Mont-Tremblant, ou encore
            avec une vue imprenable sur l'eau à Sainte-Agathe-des-Monts, nous
            sommes votre couvreur de proximité.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "Les Laurentides",
              "Sainte-Agathe-des-Monts",
              "Saint-Sauveur",
              "Mont-Tremblant",
              "Val-David",
              "Sainte-Adèle",
              "Saint-Jérôme",
              "Saint-Colomban",
              "Prévost",
              "Piedmont",
              "Mont-Blanc",
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
                    className={"px-6 py-2.5 bg-zinc-50 hover:bg-brand-red/5 hover:border-brand-red/30 hover:text-brand-red text-brand-black transition-colors font-bold rounded-full text-sm border border-gray-200 hover:scale-105 inline-block transition-transform cursor-pointer"}
                  >
                    📍 {ville}
                  </Link>
                );
              }
              return (
                <span
                  key={ville}
                  className={"px-6 py-2.5 bg-zinc-50 hover:bg-brand-red/5 hover:border-brand-red/30 hover:text-brand-red text-brand-black transition-colors font-bold rounded-full text-sm border border-gray-200"}
                >
                  📍 {ville}
                </span>
              );
            })}
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Nous couvrons également avec le même dévouement les secteurs de
            Sainte-Adèle, Val-David, Prévost, et toutes les charmantes
            municipalités environnantes. Peu importe la distance, nous
            garantissons à chacun de nos clients le même niveau d'excellence, de
            courtoisie et de rigueur technique pour chaque projet de{" "}
            <strong>toiture Laurentides</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture dans les Laurentides
            </h2>
          </div>

          <div className="space-y-4">
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
            Ne confiez pas le toit qui protège votre famille, vos souvenirs et
            vos biens à n'importe qui. Que vous ayez besoin d'un simple examen
            de routine avant les froids de l'hiver, d'une réparation cruciale et
            urgente ou de l'installation d'une toiture neuve construite selon
            les plus hauts standards, l'équipe passionnée et dévouée de{" "}
            <strong>Toiture Jonathan Délisle Inc</strong> est à votre entière
            disposition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <Link to="/soumission" className="w-full sm:w-auto block">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold px-8 py-4 text-lg"
              >
                Soumission gratuite
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto block">
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
