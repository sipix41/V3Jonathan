import React, { Suspense,  useState  } from 'react';
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
    question: "Quelle est la durée de vie moyenne d'une toiture à Val-David ?",
    answer:
      "Dans une région boisée et montagneuse comme la nôtre, soumise à des conditions hivernales extrêmes, une toiture en bardeaux d'asphalte architecturaux de qualité, bien ventilée, peut durer réalistement entre 20 et 30 ans. Le déneigement préventif et le retrait régulier des débris (feuilles, aiguilles de pin) prolongent grandement sa longévité.",
  },
  {
    question:
      "À quelle fréquence dois-je faire inspecter ma toiture à Val-David ?",
    answer:
      "Si votre maison est entourée de grands arbres, nous suggérons une inspection visuelle annuelle, particulièrement à l'automne pour nettoyer les gouttières et vérifier l'état des bardeaux. Pour une toiture standard et dégagée, une inspection professionnelle tous les 3 ans est recommandée, ou plus fréquemment si la toiture a plus de 15 ans.",
  },
  {
    question:
      "Intervenez-vous pour une réparation toiture Laurentides d'urgence ?",
    answer:
      "Oui, tout à fait. Si vous subissez une infiltration d'eau sévère lors d'une tempête ou si le vent a arraché une section de votre toiture, contactez-nous sans tarder. Nous nous déplacerons rapidement pour sécuriser les lieux avec des toiles de protection temporaires et planifier la réparation permanente afin de limiter les dommages à votre maison.",
  },
  {
    question: "Combien coûte un remplacement bardeaux asphalte Val-David ?",
    answer:
      "Le prix d'une toiture neuve dépend de plusieurs variables : la pente du toit, sa superficie totale, la complexité de l'architecture (noues, lucarnes), le nombre de vieilles couches de bardeaux à retirer et la nécessité de remplacer ou non du bois pourri. Appelez-nous pour une visite sur place ; nous vous fournirons une soumission gratuite, précise et sur mesure.",
  },
  {
    question:
      "Pourquoi est-il déconseillé de faire le déneigement toiture Laurentides soi-même ?",
    answer:
      "Monter sur un toit incliné, glacé et couvert de neige est extrêmement risqué sans équipement antichute homologué. De plus, sans les bonnes techniques, il est très facile de briser les bardeaux glacés avec une pelle de métal ou de causer des dommages aux solins, ce qui entraînerait des fuites dès le premier redoux printanier. Les professionnels possèdent le savoir-faire et l'équipement pour effectuer ce travail de façon sécuritaire et préventive.",
  },
];

export const ValDavid: React.FC = () => {
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
      "name": "Services de toiture à Val-David",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Val-David",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Val-David"
      },
      "description": "Installation, réparation, inspection et déneigement de toiture résidentielle et commerciale pour la région de Val-David."
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="Couvreur Val-David"
        overrideFullTitle="Couvreur Val-David | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        description="À la recherche d'un couvreur d'expérience à Val-David? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement. Soumission gratuite!"
        canonicalUrl="/val-david"
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
              <MapPin size={16} /> Couvreur à Val-David
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">Val-David</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour protéger votre maison au cœur des
              Laurentides.
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
              Toiture Jonathan Délisle Inc : L'expert couvreur de choix à <strong>Val-David</strong>. Protégez votre résidence ou chalet avec une expertise locale forgée dans les Laurentides.
            </p>
            <p>
              Au cœur des montagnes et des forêts majestueuses, <strong>Val-David</strong> est un lieu de résidence unique. De son centre de village pittoresque bouillonnant de créativité aux résidences paisibles longeant la rivière du Nord ou nichées aux abords du Parc régional Val-David-Val-Morin (secteur Dufresne et Condor), chaque maison possède son propre style, des toitures de chalets plus pentues aux maisons de campagne classiques.
            </p>
            <p>
              Cependant, ce mode de vie en nature comporte d'importants défis climatiques. L'altitude et l'encaissement du village entraînent une accumulation massive de neige lourde en hiver. L'humidité de la rivière et des forêts denses augmente les risques de détérioration de votre toiture à l'ombre. C'est précisément ici qu’intervient <strong>Toiture Jonathan Délisle Inc</strong>. En tant qu'<strong>entrepreneur couvreur à Val-David</strong>, nous adaptons nos méthodes et nos matériaux à l'architecture diversifiée et au microclimat val-davidois pour garantir l'étanchéité absolue de votre bâtiment.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                Que vous habitiez dans le Domaine des Bois, sur le chemin de la Rivière, près du lac Paquin ou au centre du village, nous intervenons avec réactivité. Nous comprenons les normes de Val-David pour préserver le cachet visuel de la municipalité tout en fournissant des toitures ventilées, solides contre les vents et résistantes aux redoux constants de l'hiver laurentien.
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
                Pose et remplacement de bardeaux d'asphalte à Val-David
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le <strong>remplacement bardeaux asphalte Val-David</strong>{" "}
                  est le service le plus demandé par les propriétaires de notre
                  secteur. La raison est simple : ce matériau offre le meilleur
                  rapport qualité-prix sur le marché, tout en garantissant une
                  protection maximale contre nos hivers redoutables. Chez
                  Toiture Jonathan Délisle Inc, nous sommes des spécialistes de
                  la pose de bardeaux d'asphalte architecturaux haut de gamme.
                  Plus épais et texturés que les bardeaux traditionnels, ils
                  sont conçus pour résister aux vents violents et aux écarts de
                  température extrêmes que nous connaissons dans les
                  Laurentides, tout en rehaussant l'apparence de votre demeure.
                </p>
                <p>
                  Notre méthode de travail pour tout{" "}
                  <strong>remplacement bardeaux asphalte Val-David</strong> est
                  stricte et rigoureuse. Nous débutons toujours par le retrait
                  complet de l'ancien revêtement pour mettre à nu le pontage de
                  bois. Cette étape est cruciale, car elle nous permet
                  d'inspecter la structure de votre toit. S'il y a des planches
                  pourries à cause d'une ancienne infiltration ou un
                  affaissement, nous réparons la charpente immédiatement. On ne
                  bâtit pas une bonne toiture sur des fondations faibles.
                </p>
                <p>
                  Ensuite, nous installons des larmiers métalliques et
                  appliquons une membrane imperméable autocollante (membrane
                  élastomère) de très haute performance au niveau des
                  avant-toits, dans les noues et autour des éléments saillants
                  comme les cheminées et les puits de lumière. À Val-David, avec
                  la neige abondante, les barrages de glace sont fréquents, et
                  cette membrane est votre bouclier numéro un. Nous recouvrons
                  le reste du toit d'une sous-couche synthétique respirante et
                  hydrofuge. Enfin, nous clouons les bardeaux selon les
                  standards les plus élevés de l'industrie, vous assurant ainsi
                  de bénéficier des garanties maximales offertes par les
                  fabricants pour votre <strong>toiture Val-David</strong>.
                </p>
                <p>
                  Nous veillons également à optimiser la ventilation de votre
                  entretoit. Un toit qui ne respire pas est un toit condamné à
                  vieillir prématurément. L'installation d'aérateurs performants
                  permet de prévenir la condensation hivernale et la surchauffe
                  estivale, protégeant ainsi l'intégrité de vos bardeaux neufs.
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
                    Architecturaux haut de gamme pour résister aux vents violents
                  et écarts extrêmes.
                
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="text-[34px] shrink-0">🛡️</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Membrane élastomère
                
                  </h3>
                  <p className="text-sm text-gray-600">
                    Bouclier numéro un contre les barrages de glace fréquents à
                  Val-David.
                
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
                Réparation de toiture à Val-David
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Dans un environnement aussi boisé que Val-David, les risques de
                dommages à la toiture sont multipliés. Une branche cassée lors
                d'un orage, des vents forts qui arrachent des bardeaux
                vieillissants, ou des animaux qui tentent de s'infiltrer dans
                l'entretoit peuvent causer des bris soudains. Si vous remarquez
                des signes d'infiltration d'eau, des taches au plafond ou des
                solins de cheminée endommagés, il faut agir avec diligence.
                Notre service de <strong>réparation toiture Laurentides</strong>{" "}
                est là pour stopper les dégâts avant qu'ils ne dégénèrent.
                Ignorer une infiltration, c'est risquer la pourriture de la
                charpente et l'apparition de moisissures dangereuses pour la
                santé.
              </p>
              <p>
                Notre équipe de techniciens intervient rapidement pour toute{" "}
                <strong>réparation toiture Laurentides</strong>. Nous ne faisons
                pas que boucher le trou : nous investiguons pour trouver la
                source réelle du problème, car l'eau voyage souvent de manière
                imprévisible sous les bardeaux. Que le souci provienne d'un
                évent de plomberie fissuré, d'un solin décollé ou d'un dommage
                causé par le vent, nous appliquons des solutions définitives.
              </p>
              <p>
                De plus, nous mettons un point d'honneur à préserver
                l'esthétique de votre maison. Nous cherchons toujours à utiliser
                des bardeaux de remplacement dont la couleur se marie
                parfaitement avec votre toiture existante. Avec Toiture Jonathan
                Délisle Inc, chaque réparation, petite ou grande, est effectuée
                avec la même minutie qu'une installation neuve.
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
                  La configuration même de Val-David, avec ses nombreux arbres
                  matures et ses forêts de conifères, exige une vigilance
                  accrue. Les feuilles mortes, les aiguilles de pin et les
                  branches s'accumulent sur les toits et dans les gouttières,
                  retenant l'humidité et accélérant la détérioration des
                  matériaux. C'est pourquoi une{" "}
                  <strong>inspection de toiture Val-David</strong> est la
                  meilleure prévention possible. Il est conseillé de faire
                  inspecter votre toit à l'automne, pour le préparer aux charges
                  de neige, et au printemps, pour évaluer les impacts de
                  l'hiver.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    En tant qu'<strong>entrepreneur toiture Val-David</strong>{" "}
                    de confiance, nous vous proposons une inspection exhaustive
                    et honnête. Nous passons votre toiture au peigne fin : état
                    des granules sur les bardeaux, vérification du gondolement,
                    inspection des solins métalliques, état du calfeutrage et
                    propreté des gouttières. Si l'accès le permet, nous
                    vérifions également l'entretoit pour valider l'état de
                    l'isolation et nous assurer que la circulation de l'air
                    n'est pas bloquée.
                  </p>
                  <p className="text-sm mt-4">
                    À l'issue de cette{" "}
                    <strong>inspection de toiture Val-David</strong>, nous vous
                    remettons un bilan clair de la situation. S'il n'y a rien à
                    signaler, nous vous le dirons en toute transparence. Si des
                    travaux correctifs s'imposent, nous vous fournirons une
                    soumission détaillée et sans engagement. Vous aurez ainsi
                    l'esprit tranquille, sachant exactement dans quel état se
                    trouve votre propriété.
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Val-David : Pourquoi c'est essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  Les hivers à Val-David sont magnifiques, mais ils apportent
                  leur lot de neige lourde et collante. Cette accumulation
                  représente un poids écrasant pour la structure de votre
                  résidence ou de votre chalet. Un service professionnel de{" "}
                  <strong>déneigement toiture Laurentides</strong> est
                  indispensable pour prévenir l'affaissement de la charpente.
                </p>
                <p>
                  De plus, les variations de température créent inévitablement
                  des barrières de glace (digues de glace) en bordure de toit.
                  Ce phénomène bloque l'écoulement de l'eau lors des redoux.
                  L'eau stagnante n'a alors d'autre choix que de remonter sous
                  les bardeaux et de s'infiltrer dans la maison.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Ne prenez pas de risques inutiles en grimpant vous-même sur
                    un toit glissant et en pente. Notre équipe spécialisée en{" "}
                    <strong>déneigement toiture Laurentides</strong> intervient
                    de manière sécuritaire, munie de harnais de sécurité et
                    d'équipements de pointe. Nous utilisons des pelles en
                    plastique conçues pour ne pas abîmer vos bardeaux. Nous
                    dégageons la surcharge de neige tout en laissant une mince
                    couche protectrice pour préserver l'intégrité de votre
                    revêtement. Confiez cette tâche dangereuse à des experts
                    pour protéger votre maison et votre intégrité physique.
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
              <span className="text-brand-red">Val-David</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Sélectionner un <strong>couvreur Val-David</strong> est une
              décision importante. Votre toiture est l'élément qui protège tout
              ce que vous possédez à l'intérieur de votre maison. Chez Toiture
              Jonathan Délisle Inc, nous faisons la différence par notre
              approche humaine, notre souci de la perfection et notre
              connaissance pointue des enjeux d'une{" "}
              <strong>toiture Laurentides</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Expertise locale",
                desc: "Nous connaissons les réalités climatiques de la région et adaptons nos installations pour faire face aux vents et aux fortes accumulations de neige.",
              },
              {
                title: "Matériaux de première qualité",
                desc: "Nous installons exclusivement des produits certifiés et éprouvés pour le rude climat québécois.",
              },
              {
                title: "Honnêteté et transparence",
                desc: "Pas de surprises sur la facture. Notre soumission est détaillée, et nous vous expliquons chaque étape du processus.",
              },
              {
                title: "Respect de votre propriété",
                desc: "Nous protégeons vos plates-bandes, vos balcons et votre terrain. À la fin des travaux, nous passons un rouleau magnétique sur tout le terrain pour ramasser le moindre clou égaré.",
              },
              {
                title: "Garanties rassurantes",
                desc: "Nous possédons toutes les assurances nécessaires et offrons d'excellentes garanties sur notre main-d'œuvre, en plus de celles des manufacturiers.",
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
            Zone de service — Val-David et villes des Laurentides desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Bien que nous soyons fiers d'être reconnus comme l'
            <strong>entrepreneur toiture Val-David</strong> par excellence,
            notre flotte de camions sillonne fièrement les routes avoisinantes.
            Nous desservons avec le même professionnalisme tout le secteur des
            Laurentides. Que votre maison soit située près du parc régional de
            Val-David, au cœur du charmant village de <strong>Val-Morin</strong>
            , dans les rues animées de <strong>Sainte-Agathe-des-Monts</strong>,
            ou vers les municipalités de <strong>Sainte-Adèle</strong> et{" "}
            <strong>Piedmont</strong>, notre équipe est prête à intervenir.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Val-David",
              "Val-Morin",
              "Sainte-Agathe-des-Monts",
              "Sainte-Adèle",
              "Saint-Sauveur",
              "Mont-Tremblant",
              "Saint-Faustin-Lac-Carré",
              "Piedmont",
              "Prévost",
              "Saint-Hippolyte",
              "Arundel",
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
            Où que vous soyez dans la région, nous vous garantissons un service
            courtois, rapide et d'une qualité technique irréprochable pour tous
            vos projets de <strong>toiture Laurentides</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture à Val-David
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
            Ne confiez pas la protection de votre patrimoine immobilier à
            n'importe qui. Que ce soit pour un entretien de routine, une
            réparation vitale ou le remplacement complet de votre revêtement,
            l'équipe dévouée de <strong>Toiture Jonathan Délisle Inc</strong>{" "}
            est là pour vous offrir l'excellence.
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
