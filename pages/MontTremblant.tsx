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
    question:
      "Quelle est la durée de vie moyenne réelle d'une toiture à Mont-Tremblant ?",
    answer:
      "Bien que les manufacturiers annoncent parfois des durées de vie très longues, avec les rigueurs extrêmes du climat de notre région montagneuse (neige, glace, rayons UV intenses l'été), une toiture en bardeaux d'asphalte architecturaux de haute qualité, si elle est parfaitement ventilée par l'entretoit et bien installée par un couvreur d'expérience, durera réalistement entre 20 et 30 ans. L'entretien régulier, le nettoyage des gouttières et un bon déneigement préventif jouent un rôle absolument crucial dans la maximisation de cette longévité.",
  },
  {
    question:
      "À quel moment précis de l'année devrais-je faire faire une inspection de toiture Mont-Tremblant ?",
    answer:
      "Pour être proactif, nous recommandons fortement de faire réaliser une inspection professionnelle de votre toiture au moins tous les trois ans si votre maison est relativement récente, et de façon annuelle si vos bardeaux ont dépassé le cap des 15 ans. Le moment le plus stratégique et pertinent est de la faire inspecter à la fin de l'automne, pour vous assurer que tout est scellé pour affronter l'hiver, ou encore au tout début du printemps, pour constater s'il y a eu des dommages causés par la fonte des glaces ou les vents hivernaux.",
  },
  {
    question:
      "Offrez-vous réellement un service de réparation toiture Laurentides en cas d'urgence ?",
    answer:
      "Absolument, la réponse est oui. Nous savons qu'une urgence n'attend pas les heures de bureau. Si le toit de votre maison ou de votre chalet a subi des dommages importants à la suite d'une forte rafale de vent arrachant des sections de bardeaux, ou si vous constatez une infiltration d'eau très active à l'intérieur de la maison lors d'une pluie torrentielle, appelez-nous immédiatement. Notre équipe d'urgence se déplacera le plus rapidement possible pour venir installer des toiles de protection temporaires, sécuriser la toiture et arrêter les dommages, pour ensuite effectuer les réparations permanentes nécessaires dans les plus brefs délais.",
  },
  {
    question:
      "Combien coûte en moyenne un remplacement bardeaux asphalte Mont-Tremblant ?",
    answer:
      "Il est difficile de donner un prix fixe sans avoir vu la maison, car le coût total d'un remplacement complet varie considérablement en fonction de plusieurs facteurs uniques à votre propriété : la superficie totale du toit (en pieds carrés), la pente (un toit très abrupt demande plus d'équipements de sécurité), l'accessibilité du terrain, le nombre de couches d'anciens bardeaux à retirer et envoyer aux vidanges, les travaux de charpente imprévus (si le bois est pourri) et le choix des matériaux de finition. Le mieux est de nous contacter directement. Nous nous ferons un plaisir d'aller prendre des mesures exactes et de vous offrir une soumission totalement gratuite, transparente et détaillée, spécifiquement adaptée à votre résidence.",
  },
  {
    question:
      "Pourquoi est-il si important de confier le déneigement toiture Laurentides à des professionnels plutôt que de le faire moi-même ?",
    answer:
      "Déneiger un toit en pente, haut perché et recouvert de glace est une activité extrêmement dangereuse pour quiconque ne possède pas l'équipement de protection antichute adéquat et la formation pour l'utiliser. Les chutes de toits font malheureusement de nombreuses victimes chaque hiver au Québec. De plus, l'utilisation de mauvais outils par un propriétaire bien intentionné (comme des pelles métalliques coupantes, des pioches ou des haches pour briser la glace) risque très fortement de fendre et de détruire vos bardeaux d'asphalte neufs, annulant de ce fait immédiatement toutes vos garanties de manufacturier et causant des infiltrations d'eau désastreuses dès le premier redoux. Un couvreur professionnel possède l'expérience, les pelles en polymère sécuritaires et les bonnes techniques de dégagement pour effectuer ce travail de façon sécuritaire, tout en protégeant l'intégrité de votre investissement à long terme.",
  },
];

export const MontTremblant: React.FC = () => {
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
      "name": "Services de toiture à Mont-Tremblant",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mont-Tremblant",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Mont-Tremblant"
      },
      "description": "Installation, réparation, inspection et déneigement de toiture résidentielle et commerciale pour la région de Mont-Tremblant."
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="Couvreur Mont-Tremblant"
        overrideFullTitle="Couvreur Mont-Tremblant | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        description="À la recherche d'un couvreur à Mont-Tremblant? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement. Soumission gratuite!"
        canonicalUrl="/mont-tremblant"
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
              <MapPin size={16} /> Couvreur à Mont-Tremblant
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">Mont-Tremblant</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour protéger votre maison dans les
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
              Toiture Jonathan Délisle Inc : Votre artisan couvreur de confiance à <strong>Mont-Tremblant</strong>. Protégez votre résidence de prestige, chalet ou commerce face au rigoureux climat de la montagne.
            </p>
            <p>
              Reconnue internationalement, <strong>Mont-Tremblant</strong> est une destination de villégiature et un lieu de vie exceptionnel. Des somptueuses résidences s'étendant du Centre de villégiature Tremblant (Station Tremblant) et du Domaine Saint-Bernard, jusqu'aux maisons plus classiques du secteur Centre-Ville (Saint-Jovite) ou du Village, le patrimoine bâti y est vaste et diversifié. Les types de bâtiments y varient énormément : toits à fortes pentes des chalets alpins contemporains, grands toits mansardés et toitures plates commerciales.
            </p>
            <p>
              Vivre au pied de la plus haute montagne des Laurentides implique un climat implacable. Les hivers apportent des bordées de neige exceptionnelles et des accumulations de glace (barrages de glace) qui mettent une pression colossale sur votre toiture. Les vents violents en altitude et les écarts de température extrêmes d'une saison à l'autre fatiguent les matériaux prématurément. C'est ici que <strong>Toiture Jonathan Délisle Inc</strong>, votre <strong>couvreur à Mont-Tremblant</strong>, fait toute la différence. Nous maîtrisons les spécificités de la toiture en haute altitude laurentienne et adaptons nos techniques aux normes strictes d'urbanisme de la ville.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                Que votre propriété se trouve sur le bord du Lac Tremblant, aux abords des golfs Le Diable ou Le Géant, ou sur la rue de Saint-Jovite, notre équipe intervient avec rapidité, équipement de pointe et professionnalisme. Nous assurons une aération maximale de votre entretoit pour prévenir la condensation liée à l'air sec hivernal et au chauffage continu de votre chalet.
              </p>
              <p>
                Notre offre comprend le remplacement complet de bardeaux d'asphalte haut de gamme architecturaux, l'inspection préventive, les réparations ciblées et un service professionnel de déneigement de toiture. Avec Toiture Jonathan Délisle Inc, choisissez l'élégance, la durabilité et la tranquillité d'esprit pour votre investissement immobilier à Tremblant.
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
                Pose et remplacement de bardeaux d'asphalte à Mont-Tremblant
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le{" "}
                  <strong>remplacement bardeaux asphalte Mont-Tremblant</strong>{" "}
                  est de loin le service le plus fréquemment demandé dans notre
                  région par les propriétaires résidentiels, et la raison en est
                  fort simple : ce matériau éprouvé offre un rapport
                  qualité-prix tout simplement imbattable, tout en assurant une
                  protection optimale contre les pires conditions de nos hivers
                  québécois. Chez Toiture Jonathan Délisle Inc, nous sommes
                  passés maîtres dans l'art de la pose de bardeaux d'asphalte
                  architecturaux de première qualité. Contrairement aux anciens
                  modèles traditionnels à trois pattes, ces bardeaux
                  architecturaux sont beaucoup plus épais, texturés, et profilés
                  pour supporter les vents violents (souvent jusqu'à 200 km/h)
                  et les variations extrêmes de température qui caractérisent si
                  bien les Hautes-Laurentides.
                </p>
                <p>
                  Notre méthodologie de travail pour tout{" "}
                  <strong>remplacement bardeaux asphalte Mont-Tremblant</strong>{" "}
                  est extrêmement rigoureuse et ne laisse aucune place au hasard
                  ni aux raccourcis. Nous commençons toujours par arracher
                  complètement l'ancien revêtement, couche par couche, jusqu'à
                  atteindre le pontage de bois (la base de contreplaqué ou de
                  planches). Cette étape cruciale nous permet de nous assurer
                  que la structure en dessous est parfaitement saine, sans
                  aucune trace de pourriture, d'infiltration passée ou
                  d'affaissement dangereux. S'il y a du bois abîmé, nous le
                  remplaçons sur-le-champ pour garantir une fondation solide.
                </p>
                <p>
                  Une fois le pontage préparé et sécurisé, nous installons un
                  larmier métallique au périmètre, puis nous posons une membrane
                  imperméable autocollante (souvent appelée membrane élastomère)
                  de très haute performance sur les avant-toits, dans les noues
                  (les creux où deux pentes se rencontrent) et au pourtour des
                  cheminées et lucarnes. C'est dans ces zones que les risques
                  d'infiltration due aux fameux barrages de glace hivernaux sont
                  les plus critiques. Ensuite, nous couvrons le reste de la
                  surface avec une sous-couche synthétique haut de gamme, qui
                  laisse respirer la structure tout en bloquant farouchement
                  l'eau. Enfin, l'installation des bardeaux d'asphalte se fait
                  selon les normes les plus strictes de l'industrie, en clouant
                  exactement aux endroits prescrits et en respectant à la lettre
                  les recommandations des fabricants. C'est ce qui vous permet
                  de bénéficier des meilleures garanties prolongées disponibles
                  sur le marché pour votre{" "}
                  <strong>toiture Mont-Tremblant</strong>.
                </p>
                <p>
                  Il ne faut pas oublier qu'un toit performant est aussi un toit
                  qui respire. Nous accordons une attention toute particulière à
                  la ventilation de votre entretoit lors de nos travaux. L'ajout
                  d'aérateurs de toit adéquats (comme les ventilateurs Maximum)
                  et la vérification des soffites permettent d'éviter la
                  condensation étouffante en hiver et la surchauffe destructrice
                  en été, empêchant ainsi vos bardeaux neufs de se détériorer
                  prématurément.
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
                    Arrachage complet de l'ancien revêtement et remplacement du
                  bois abîmé au besoin.
                
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
                    Supportent les vents violents et les variations extrêmes de
                  température.
                
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
                    Haute performance sur les avant-toits, noues, et pourtour des
                  cheminées.
                
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
                    Évite la condensation étouffante en hiver et la surchauffe
                  destructrice en été.
                
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
                Réparation de toiture à Mont-Tremblant
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                La nature est imprévisible et les intempéries ne préviennent pas
                toujours avant de frapper. Après un violent orage estival, une
                chute de grêle inattendue ou une tempête de vent automnale, il
                n'est malheureusement pas rare de retrouver des bardeaux
                arrachés et éparpillés sur le terrain de votre propriété. Si
                vous repérez des signes inquiétants d'infiltration d'eau, comme
                des cernes bruns au plafond de votre salon, de la peinture qui
                s'écaille près des corniches ou des solins de cheminée tordus,
                il faut agir extrêmement vite. C'est exactement là que notre
                service rapide et efficace en{" "}
                <strong>réparation toiture Laurentides</strong> fait toute la
                différence entre un problème mineur et une catastrophe majeure.
                Ignorer une petite fuite aujourd'hui, c'est s'exposer à des
                dommages structurels majeurs, au développement de moisissures
                toxiques dans l'entretoit et à des coûts de rénovation
                exorbitants demain.
              </p>
              <p>
                En tant qu'<strong>entrepreneur toiture Mont-Tremblant</strong>{" "}
                réputé, nous avons mis sur pied une équipe mobile de techniciens
                hautement qualifiés qui intervient avec rapidité pour toute{" "}
                <strong>réparation toiture Laurentides</strong>. Lors de notre
                intervention, nous ne nous contentons jamais de colmater
                temporairement la fuite avec un peu de ciment plastique ou de
                goudron : nous menons une véritable enquête pour trouver la
                source exacte et profonde du problème. L'eau a cette fâcheuse
                habitude de voyager le long des chevrons, ce qui signifie que
                l'endroit où elle goutte à l'intérieur n'est pas toujours
                l'endroit où elle perce à l'extérieur.
              </p>
              <p>
                Qu'il s'agisse d'un problème d'étanchéité vicieux autour d'un
                puits de lumière mal installé, d'un évent de plomberie dont le
                collet de caoutchouc est craquelé par le soleil, ou de la
                détérioration prématurée due à un mauvais drainage des
                gouttières, nous appliquons des correctifs définitifs et
                durables. De plus, nous sommes conscients qu'une réparation
                visible depuis la rue doit rester esthétiquement harmonieuse
                avec le reste de votre maison. C'est pourquoi nous faisons
                l'effort supplémentaire de trouver, dans la mesure du possible,
                les bardeaux de remplacement qui correspondent exactement à la
                couleur et au modèle de votre toiture existante. Avec Toiture
                Jonathan Délisle Inc, soyez assurés que chaque petite
                réparation est effectuée avec la même rigueur professionnelle
                qu'une installation entièrement neuve.
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
                  On dit souvent qu'il vaut mieux prévenir que guérir, et cet
                  adage n'a jamais été aussi vrai que lorsqu'il s'agit de
                  l'entretien d'une maison au Québec. La prévention est
                  définitivement la clé pour éviter les mauvaises surprises et
                  les factures salées. Une{" "}
                  <strong>inspection de toiture Mont-Tremblant</strong> réalisée
                  dans les règles de l'art par des professionnels aguerris peut
                  littéralement sauver votre toit et prolonger de plusieurs
                  années la durée de vie utile de votre revêtement. Idéalement,
                  votre toiture devrait être inspectée à l'automne, juste avant
                  l'arrivée des premières grosses neiges, pour s'assurer qu'elle
                  est prête à affronter le poids et le froid. Une deuxième
                  inspection au printemps est aussi très pertinente pour évaluer
                  comment les matériaux ont traversé les affres de l'hiver.
                </p>
                <p>
                  En tant qu'
                  <strong>entrepreneur toiture Mont-Tremblant</strong> digne de
                  votre confiance, nous offrons un service d'inspection
                  minutieux, documenté et totalement transparent. Ce service est
                  d'ailleurs particulièrement prisé par les nouveaux acheteurs
                  immobiliers ou les propriétaires de résidences secondaires, de
                  chalets locatifs près des lacs ou de maisons isolées dans les
                  zones densément boisées, là où l'accumulation de débris (comme
                  les aiguilles de pin et les feuilles mortes) retient
                  l'humidité sur le toit.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Lors de notre rigoureuse{" "}
                    <strong>inspection de toiture Mont-Tremblant</strong>, nous
                    scrutons chaque centimètre carré de votre toit à la loupe.
                    Nous vérifions l'état général des bardeaux : y a-t-il une
                    perte excessive de granules protecteurs ? Observe-t-on du
                    fendillement, du gondolement (les coins qui rebiquent) ou
                    des clous soulevés ? Nous inspectons ensuite
                    consciencieusement l'étanchéité des solins d'acier autour
                    des cheminées de maçonnerie, des murs de jonction et des
                    vallées, ainsi que la solidité des gouttières et l'état du
                    calfeutrage. Mais notre travail d'expert ne s'arrête pas à
                    la surface visible extérieure. Si l'accès le permet, nous
                    inspectons également votre entretoit pour vérifier si
                    l'isolation (laine minérale ou cellulose) est adéquate, si
                    elle n'est pas humide, et surtout si la ventilation croisée
                    fonctionne correctement sans bloquer la circulation vitale
                    de l'air de bas en haut. Si, suite à cette évaluation
                    complète, des travaux s'avèrent nécessaires, nous vous
                    fournissons un rapport détaillé accompagné d'une soumission
                    claire, sans aucune pression de vente. L'objectif est
                    simplement que vous ayez l'heure juste sur l'état de santé
                    de votre maison.
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Mont-Tremblant : Pourquoi c'est
                essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  Le charme indéniable de nos hivers québécois vient
                  inévitablement avec des accumulations de neige qui sont
                  parfois tout simplement spectaculaires dans les Laurentides.
                  Cependant, aussi belle soit-elle, cette neige représente un
                  poids colossal et insidieux pour les structures de charpente
                  de nos maisons. Un{" "}
                  <strong>déneigement toiture Laurentides</strong> fait de
                  manière préventive et hautement sécuritaire est absolument
                  essentiel pour éviter l'affaissement des fermes de toit, voire
                  l'effondrement complet de votre toiture sous la charge.
                </p>
                <p>
                  Il ne s'agit pas seulement du poids. Les cycles de gel et de
                  dégel que nous connaissons si fréquemment en hiver (avec des
                  journées ensoleillées suivies de nuits glaciales) créent ce
                  qu'on appelle dans le jargon des barrières de glace, ou digues
                  de glace, situées au bas des pentes du toit, juste au-dessus
                  des gouttières. Ces accumulations épaisses de glace bloquent
                  littéralement la voie : elles empêchent la nouvelle eau de
                  fonte de s'écouler normalement vers le sol. Bloquée par ce
                  barrage, l'eau s'accumule et finit par trouver son chemin sous
                  les bardeaux d'asphalte, s'infiltrant directement dans
                  l'entretoit, puis ruinant l'isolation, les murs et les
                  plafonds de gypse de la maison.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Le mot d'ordre : n'attendez pas de voir vos portes
                    intérieures coincer sous la pression de la neige sur la
                    structure, ou d'entendre des craquements sinistres dans les
                    murs, pour décider d'agir. Notre service professionnel de{" "}
                    <strong>déneigement toiture Laurentides</strong> est
                    effectué de manière ultra-sécuritaire, par des techniciens
                    d'expérience dûment équipés de harnais de sécurité conformes
                    aux normes de la CNESST. Nous utilisons des pelles en
                    plastique spécialement adaptées qui n'égratigneront et
                    n'endommageront jamais vos précieux bardeaux d'asphalte.
                    Monter soi-même sur un toit glacé et enneigé est une
                    entreprise extrêmement dangereuse, voire mortelle. Confiez
                    cette tâche périlleuse, physique et glaciale à l'équipe de
                    Toiture Jonathan Délisle Inc pour protéger votre propriété
                    et, surtout, votre propre sécurité physique. Nous avons la
                    technique parfaite : nous déneigeons l'excédent de charge,
                    mais nous laissons toujours volontairement une très fine
                    couche de neige au fond pour protéger la surface granulaire
                    du revêtement contre les coups d'outils, tout en soulageant
                    efficacement la charpente de son trop lourd fardeau
                    hivernal.
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
              <span className="text-brand-red">Mont-Tremblant</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Faire le choix d'un <strong>couvreur Mont-Tremblant</strong> ne
              doit surtout pas se faire à la légère en cherchant uniquement le
              prix le plus bas. Votre toiture est la toute première ligne de
              défense de votre cocon familial contre les éléments de la nature.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Expertise locale et compréhension du climat",
                desc: "Nous connaissons les caprices de Dame Nature dans notre région montagneuse mieux que quiconque et nous adaptons nos techniques d'installation et nos choix de membranes en conséquence pour bâtir des toits qui durent.",
              },
              {
                title: "Qualité intransigeante des matériaux",
                desc: "Nous refusons de couper les coins ronds. Nous n'utilisons que des produits de toiture de marques reconnues et certifiées, ayant fait leurs preuves quant à leur résistance supérieure et leur longévité au Québec.",
              },
              {
                title: "Transparence et intégrité totales",
                desc: "Dès la remise de notre soumission détaillée jusqu'à la poignée de main à la fin des travaux, nous vous disons tout. Pas de frais cachés, pas de clauses en petits caractères, pas de mauvaises surprises sur la facture finale.",
              },
              {
                title: "Respect maniaque des lieux et de votre propriété",
                desc: "Nous traitons votre maison comme si c'était la nôtre. Nous protégeons consciencieusement votre aménagement paysager, vos fleurs et votre terrasse pendant les travaux. Avant de partir, nous nous assurons de laisser un chantier impeccable.",
              },
              {
                title: "Aimant magnétique roulant",
                desc: "Nous passons littéralement le chantier au peigne fin avec un puissant aimant magnétique roulant pour ramasser absolument tous les vieux clous égarés dans le gazon ou l'entrée d'auto.",
              },
              {
                title: "Assurances et garanties solides",
                desc: "Nous possédons toutes les assurances responsabilité civile nécessaires pour vous protéger. De plus, nos travaux impeccables sont couverts par des garanties de main-d'œuvre exceptionnelles.",
              },
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
            Zone de service — Mont-Tremblant et villes des Laurentides
            desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Bien que nous soyons fiers d'être reconnus comme le choix numéro un
            en tant qu'<strong>entrepreneur toiture Mont-Tremblant</strong>, il
            est important de savoir que notre expertise et notre réputation
            rayonnent bien au-delà des limites de la ville. Nous sommes
            extrêmement fiers de desservir l'ensemble de la magnifique et vaste
            région des Laurentides avec nos camions bien identifiés. Que votre
            propriété se trouve directement au cœur de la station touristique
            près des pistes de ski de Mont-Tremblant, au centre du grand
            dynamisme de la ville de <strong>Sainte-Agathe-Des-Monts</strong>,
            avec une vue imprenable sur le sublime{" "}
            <strong>lac des Sables</strong>, ou encore dans les pittoresques et
            charmantes municipalités de <strong>Sainte-Adèle</strong> et de{" "}
            <strong>Val-Morin</strong>, notre équipe mobile se déplace jusqu'à
            vous avec le sourire et l'équipement nécessaire.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Mont-Tremblant",
              "Sainte-Agathe-des-Monts",
              "Sainte-Adèle",
              "Val-Morin",
              "Val-David",
              "Saint-Sauveur",
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
            Peu importe la taille du projet ou l'endroit exact où vous êtes
            situés géographiquement dans notre belle région, nous garantissons à
            100% la même qualité de service exceptionnelle, la même courtoisie
            et la même rigueur technique pour chaque projet de{" "}
            <strong>toiture Laurentides</strong> que nous avons le privilège
            d'entreprendre.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture à Mont-Tremblant
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
            Ne confiez pas le toit de votre maison, la protection de votre
            famille et de vos biens au hasard. Que vous ayez besoin d'une simple
            vérification de routine avant l'hiver, d'une réparation urgente
            suite à des intempéries ou de l'installation d'une toiture en
            bardeaux d'asphalte entièrement neuve, l'équipe passionnée de{" "}
            <strong>Toiture Jonathan Délisle Inc</strong> est à votre entière
            écoute et prête à se mettre au travail pour vous.
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
