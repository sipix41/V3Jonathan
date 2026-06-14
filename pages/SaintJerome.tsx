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
    question: "Quelle est l'espérance de vie d'une toiture en bardeaux d'asphalte à Saint-Jérôme ?",
    answer: "Avec les conditions climatiques exigeantes de notre secteur géographique (grandes chaleurs, gels profonds, verglas), une toiture recouverte de bardeaux architecturaux de qualité, installée par des experts et dotée d'une excellente ventilation d'entretoit, durera en moyenne de 20 à 30 ans. Le maintien de cette longévité passe inévitablement par un entretien régulier des gouttières et un déneigement approprié.",
  },
  {
    question: "Quand est-il préférable de faire faire une inspection de toiture Saint-Jérôme ?",
    answer: "Nous suggérons fortement d'adopter une approche proactive. Une inspection professionnelle est recommandée tous les deux ou trois ans pour une toiture à mi-vie, et annuellement pour une toiture de plus de 15 ans. Le meilleur moment reste la fin de l'automne, pour s'assurer que l'étanchéité est parfaite avant les premières neiges, ou au printemps pour faire le bilan post-hivernal.",
  },
  {
    question: "Prenez-vous en charge la réparation toiture Laurentides lors d'urgences météorologiques ?",
    answer: "Absolument. Nous comprenons qu'une infiltration d'eau sévère est extrêmement stressante. Si des vents violents ont arraché une partie de votre revêtement ou si la pluie s'infiltre dans vos plafonds, appelez-nous sans hésiter. Notre équipe se mobilisera rapidement pour sécuriser le toit (pose de bâches étanches si nécessaire) afin de limiter les dégâts intérieurs, puis planifiera les réparations permanentes.",
  },
  {
    question: "Combien coûte un remplacement bardeaux asphalte Saint-Jérôme ?",
    answer: "Chaque toiture est unique, il est donc impossible de donner un tarif fixe sans évaluation. Le prix total varie selon la superficie en pieds carrés, le degré d'inclinaison (les toits très pentus nécessitent des équipements de sécurité spéciaux), la complexité architecturale, le nombre d'anciennes couches à arracher et les matériaux de finition choisis. Nous vous invitons à nous contacter pour une visite d'évaluation gratuite et détaillée sur place.",
  },
  {
    question: "Pourquoi est-il déconseillé de faire le déneigement toiture Laurentides moi-même ?",
    answer: "Le déneigement en hauteur est la cause de très nombreux accidents domestiques chaque hiver au Québec. Sans un harnais de sécurité homologué, une glissade sur la glace ne pardonne pas. En outre, sans la technique et les pelles appropriées, il est très facile de briser l'asphalte gelé de vos bardeaux, ce qui détruirait l'étanchéité de la toiture et annulerait immédiatement vos garanties. Il est toujours préférable et plus rentable à long terme de confier cette tâche à des experts outillés.",
  },
];

export const SaintJerome: React.FC = () => {
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
      "name": "Services de toiture à Saint-Jérôme",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Saint-Jérôme",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Saint-Jérôme"
      },
      "description": "Installation, réparation, inspection et déneigement de toiture résidentielle et commerciale pour la région de Saint-Jérôme.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de toiture à Saint-Jérôme",
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
        title="Couvreur Saint-Jérôme"
        overrideFullTitle="Couvreur Saint-Jérôme | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        description="À la recherche d'un couvreur fiable à Saint-Jérôme? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement de toiture. Soumission gratuite!"
        canonicalUrl="/saint-jerome"
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
              <MapPin size={16} /> Couvreur à Saint-Jérôme
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">Saint-Jérôme</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour protéger votre maison dans la capitale des Laurentides
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
              Toiture Jonathan Délisle Inc : L'expert couvreur de choix à <strong>Saint-Jérôme</strong>. Sécurisez votre investissement immobilier dans la capitale des Laurentides.
            </p>
            <p>
              Reconnue comme le cœur économique régional et la véritable porte d'entrée du Nord, <strong>Saint-Jérôme</strong> arbore un profil architectural remarquablement diversifié. Qu'il s'agisse des résidences patrimoniales situées aux abords du centre-ville historique, des nombreux plex de Saint-Antoine, ou des propriétés unifamiliales plus récentes des secteurs boisés de Bellefeuille et Lafontaine, chaque typologie de bâtiment nécessite une approche de toiture personnalisée et rigoureuse.
            </p>
            <p>
              La densité urbaine de Saint-Jérôme, conjuguée à sa situation au pied des montagnes, crée des conditions climatiques exigeantes : îlots de chaleur estivaux, corridors de vents marqués et importantes accumulations de neige. Pour faire face à ces défis urbains et météorologiques, <strong>Toiture Jonathan Délisle Inc</strong>, en tant qu'<strong>entrepreneur couvreur à Saint-Jérôme</strong>, déploie des solutions de recouvrement optimales, utilisant des matériaux de très haute durabilité pour fortifier votre propriété face aux aléas de Mère Nature.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                De l'effervescence du boulevard de Grand-Héron à la quiétude des banlieues environnantes, nous intervenons avec un professionnalisme exemplaire. Une attention stricte est portée par nos experts à la ventilation de l'entretoit, un élément crucial pour éviter la surchauffe estivale et la formation dommageable de condensation durant l'hiver québécois.
              </p>
              <p>
                Garantissez l'avenir de votre toiture avec l'équipe de Toiture Jonathan Délisle Inc. Profitez de notre savoir-faire pour la pose de bardeaux d'asphalte architecturaux de la plus haute qualité, d'un service de réparation d'urgence fiable et d'un déneigement préventif. Confiez votre demeure jérômienne à de véritables spécialistes de l'enveloppe du bâtiment.
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
                Pose et remplacement de bardeaux d'asphalte à Saint-Jérôme
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le <strong>remplacement bardeaux asphalte Saint-Jérôme</strong> représente la grande majorité des travaux que nous effectuons dans la région, et pour cause : ce matériau a énormément évolué et offre aujourd'hui le meilleur rapport qualité-prix sur le marché. Chez Toiture Jonathan Délisle Inc, nous sommes de véritables spécialistes de l'installation de bardeaux d'asphalte architecturaux de qualité supérieure. Fini le temps des vieux bardeaux minces à trois pattes qui s'envolaient au moindre coup de vent. Les bardeaux architecturaux modernes que nous utilisons sont multidimensionnels, beaucoup plus lourds, et conçus expressément pour supporter des vents extrêmes et les variations de température brutales typiques de notre secteur.
                </p>
                <p>
                  Notre méthodologie pour chaque projet de <strong>remplacement bardeaux asphalte Saint-Jérôme</strong> est stricte et ne tolère aucun raccourci. Nous entamons toujours le travail par l'arrachage complet des anciennes couches de revêtement afin d'atteindre et d'inspecter visuellement le pontage de bois (les planches ou le contreplaqué qui forment la base du toit). C'est une étape cruciale : il est impensable de poser un revêtement neuf sur une structure affaiblie par la pourriture ou l'humidité. Si nous trouvons du bois endommagé, nous le remplaçons sur-le-champ pour garantir une fondation saine et solide à 100 %.
                </p>
                <p>
                  Ensuite, nous procédons à l'imperméabilisation stratégique. Nous posons des larmiers métalliques au périmètre pour éloigner l'eau des fascias, puis nous installons une large membrane autocollante de haute performance (membrane élastomère) aux endroits les plus vulnérables : les avant-toits, les noues (où les pentes se croisent), et autour de la cheminée. Cette précaution est la seule façon de bloquer les infiltrations causées par les fameux barrages de glace hivernaux. Le reste du toit est couvert d'une sous-couche synthétique haut de gamme, qui protège de l'eau tout en laissant respirer la maison. Enfin, la pose de votre <strong>toiture Saint-Jérôme</strong> s'effectue avec un clouage précis, respectant à la lettre les normes strictes des manufacturiers, ce qui vous garantit un toit performant pour des décennies.
                </p>
                <p>
                  Bien sûr, un toit durable doit pouvoir respirer correctement. Nous optimisons toujours la ventilation de votre entretoit lors de nos travaux (ajout de ventilateurs, vérification des soffites) pour éviter la condensation qui fait pourrir le bois en hiver et la surchauffe qui détruit les bardeaux en été.
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
                Réparation de toiture à Saint-Jérôme
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                La météo québécoise est souvent imprévisible. Après un orage violent en plein mois de juillet ou une forte tempête d'automne, il arrive fréquemment que des toitures subissent des dommages soudains. Si vous trouvez des morceaux de bardeaux arrachés sur votre terrain, si vous apercevez des cernes bruns sur le plafond de votre salon ou si vos solins d'acier semblent soulevés, le temps presse. C'est ici que notre équipe spécialisée en <strong>réparation toiture Laurentides</strong> entre en jeu pour stopper l'hémorragie avant que les dommages structurels ne deviennent catastrophiques et hors de prix.
              </p>
              <p>
                En tant qu'entrepreneur <strong>toiture Saint-Jérôme</strong> de grande expérience, nous savons à quel point l'eau peut être vicieuse. Elle s'infiltre par une micro-fissure et peut couler le long des chevrons de l'entretoit sur une longue distance avant de se manifester à l'intérieur de la maison. Lors de chaque appel pour une réparation toiture Laurentides, nous ne nous limitons jamais à beurrer du ciment plastique sur le problème apparent. Nous investiguons pour trouver la source réelle de la fuite et nous appliquons une solution permanente.
              </p>
              <p>
                Que le problème provienne d'un joint de calfeutrage asséché, d'un collet d'évent de plomberie fissuré par le soleil ou de bardeaux prématurément vieillis, nous avons l'expertise pour corriger la situation. De plus, nous mettons un point d'honneur à soigner l'esthétique : nous nous efforçons de trouver des bardeaux de remplacement dont la couleur se fondra parfaitement avec le reste de votre toit existant.
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
                  Dans le domaine de l'habitation, la prévention est le meilleur des investissements. Une <strong>inspection de toiture Saint-Jérôme</strong> effectuée de manière préventive par des professionnels qualifiés peut vous éviter bien des maux de tête et prolonger considérablement l'espérance de vie de vos matériaux. Les experts de l'industrie recommandent généralement de faire vérifier son toit à l'automne (pour préparer la maison aux charges de neige) et au printemps (pour constater s'il y a eu des bris liés à la glace hivernale).
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Comme entrepreneur <strong>toiture Saint-Jérôme</strong> digne de votre confiance, nous offrons un service d'inspection visuelle et physique extrêmement rigoureux et transparent. Ce service est particulièrement apprécié lors de l'achat d'une nouvelle propriété pour éviter les vices cachés, ou pour les propriétaires dont le toit approche de sa fin de vie utile.
                  </p>
                  <p className="text-sm mt-4">
                    Lors d'une <strong>inspection de toiture Saint-Jérôme</strong>, nous analysons votre couverture sous toutes ses coutures. Nous examinons l'état des bardeaux (perte de granules, fissures, bords gondolets), nous vérifions l'étanchéité des solins de métal autour des éléments saillants, nous inspectons le calfeutrage et nous nous assurons que vos gouttières sont solidement fixées. Si cela est accessible, nous évaluons également votre entretoit pour vérifier l'état de l'isolation (laine minérale ou cellulose) et confirmer que la circulation d'air n'est pas obstruée dans les soffites. À la fin de cette inspection, nous vous remettons l'heure juste. Si des réparations sont conseillées, nous vous fournissons une soumission sans aucune pression.
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Saint-Jérôme : Pourquoi c'est essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  Les hivers à Saint-Jérôme sont synonymes de fortes précipitations de neige. Bien que cela fasse le bonheur des amateurs de plein air, c'est une toute autre histoire pour la charpente de votre maison. Un <strong>déneigement toiture Laurentides</strong> réalisé de manière préventive et sécuritaire est tout simplement incontournable pour prévenir l'affaissement ou la déformation de vos fermes de toit sous le poids combiné de la neige et de la glace.
                </p>
                <p>
                  Le danger principal ne vient pas que du poids, mais aussi des redoutables barrières de glace (digues de glace). En raison des cycles répétés de gel et dégel, la neige fond sur la partie supérieure du toit, coule, et regèle instantanément au bas de la pente, bloquant les gouttières. L'eau s'accumule derrière ce barrage de glace et finit inévitablement par remonter sous vos bardeaux d'asphalte pour s'infiltrer dans les murs et les plafonds de la maison, ruinant votre isolation et votre gypse.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Il est fortement déconseillé de grimper vous-même sur votre toit pour effectuer cette tâche. Les chutes sont fréquentes et les blessures souvent graves. De plus, l'utilisation de mauvaises pelles ou de pics pour briser la glace va inévitablement déchirer vos bardeaux. L'équipe de Toiture Jonathan Délisle Inc maîtrise l'art du <strong>déneigement toiture Laurentides</strong>. Nos employés sont formés, sécurisés par des harnais conformes aux normes de la CNESST, et utilisent des outils en polymère conçus spécifiquement pour ne pas endommager les revêtements. Nous retirons l'excédent de neige tout en laissant une fine couche protectrice, assurant ainsi la sécurité de votre propriété à 100 %.
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
              <span className="text-brand-red">Saint-Jérôme</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Le choix de votre <strong>couvreur Saint-Jérôme</strong> est une décision majeure. Votre toiture est l'élément clé qui protège votre confort, votre famille et tous vos biens. Chez Toiture Jonathan Délisle Inc, nous sortons du lot grâce à notre approche personnalisée, notre souci obsessif du détail et notre passion pour le travail bien fait. En tant qu'entreprise solidement implantée dans la région, nous saisissons toutes les complexités techniques exigées par une véritable <strong>toiture Laurentides</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Connaissance intime du territoire",
                desc: "Nous travaillons à Saint-Jérôme et dans les environs tous les jours. Nous adaptons nos techniques pour contrer les vents dominants et les grands froids de la région.",
              },
              {
                title: "Sélection de matériaux premium",
                desc: "Nous refusons d'utiliser des bardeaux ou des membranes de bas de gamme. Nous installons uniquement des produits certifiés, éprouvés pour leur durabilité au Québec.",
              },
              {
                title: "Clarté et honnêteté",
                desc: "Nos soumissions sont détaillées point par point. Vous savez exactement ce que vous payez, sans frais cachés ni surprises de dernière minute.",
              },
              {
                title: "Propreté exemplaire du chantier",
                desc: "Nous respectons votre propriété comme si c'était la nôtre. Nous protégeons votre terrasse et vos plates-bandes. Avant de quitter, nous passons un rouleau magnétique puissant sur l'ensemble de votre terrain pour ramasser le moindre clou égaré dans le gazon.",
              },
              {
                title: "Tranquillité d'esprit garantie",
                desc: "Nous disposons d'assurances responsabilité civile complètes et nous offrons des garanties de main-d'œuvre exceptionnelles qui s'additionnent à celles des fabricants.",
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
            Zone de service — Saint-Jérôme et villes des Laurentides desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Même si nous sommes très fiers de notre réputation enviable en tant qu'<strong>entrepreneur toiture Saint-Jérôme</strong>, nos camions se déplacent bien au-delà des limites de la ville. Nous desservons de très nombreux clients dans l'ensemble de la région avec le même souci d'excellence. Que votre maison soit située au cœur des grands quartiers de Saint-Jérôme (comme Bellefeuille, Saint-Antoine ou Lafontaine), ou que vous résidiez dans les municipalités voisines en pleine croissance telles que Saint-Colomban, Prévost, Mirabel, Sainte-Sophie ou Saint-Hippolyte, notre équipe de maîtres couvreurs est à votre disposition.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Saint-Jérôme",
              "Bellefeuille",
              
              
              "Saint-Colomban",
              "Prévost",
              "Mirabel",
              "Sainte-Sophie",
              "Saint-Hippolyte",
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
            Quelle que soit la taille de votre projet résidentiel, nous garantissons à tous nos clients un service ponctuel, courtois et d'une qualité technique sans compromis pour toutes les réalisations de <strong>toiture Laurentides</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture à Saint-Jérôme
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
            Ne confiez pas la protection de votre patrimoine et le confort de votre famille à n'importe qui. Que ce soit pour un entretien préventif, une réparation ciblée et urgente ou la construction complète d'une toiture neuve, l'équipe d'experts de <strong>Toiture Jonathan Délisle Inc</strong> est prête à relever le défi.
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
