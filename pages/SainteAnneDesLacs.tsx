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
    question: "Quelle est l'espérance de vie réelle d'une toiture en bardeaux d'asphalte à Sainte-Anne-des-Lacs ?",
    answer: "En tenant compte du climat humide, de l'ombre de la forêt et des rigueurs hivernales, une toiture recouverte de bardeaux d'asphalte architecturaux de première qualité, si elle est parfaitement installée et, surtout, très bien ventilée, durera de façon réaliste entre 20 et 30 ans. Le nettoyage régulier des débris et des aiguilles de pin est indispensable pour atteindre cette longévité maximale.",
  },
  {
    question: "À quel moment devrais-je faire faire une inspection de toiture Sainte-Anne-des-Lacs ?",
    answer: "Dans un milieu très boisé, la prévention est essentielle. Nous recommandons vivement une inspection visuelle annuelle. Le meilleur moment demeure la fin de l'automne, une fois que les arbres ont perdu leurs feuilles, pour vous assurer que les gouttières sont dégagées et que la toiture est prête pour la neige. Le printemps est également un bon moment pour déceler rapidement tout dommage potentiel causé par les rongeurs ou la glace hivernale.",
  },
  {
    question: "Intervenez-vous pour une réparation toiture Laurentides d'urgence suite à la chute d'un arbre ?",
    answer: "Absolument. Nous savons qu'une branche qui défonce la toiture lors d'une tempête génère une anxiété immense. Si le revêtement est compromis, appelez-nous immédiatement. Notre équipe se déploiera pour sécuriser les lieux rapidement avec l'installation de toiles de protection étanches, stoppant ainsi les dommages à l'intérieur, pour ensuite planifier la réfection permanente.",
  },
  {
    question: "Comment évaluez-vous le coût moyen d'un remplacement bardeaux asphalte Sainte-Anne-des-Lacs ?",
    answer: "Parce que chaque maison et chaque chalet possède sa propre architecture, il est impossible de donner un prix fixe sans visite. Le coût d'un remplacement complet varie selon plusieurs éléments : la superficie totale du toit (en pieds carrés), la pente (un chalet avec un toit cathédrale très abrupt exige plus de temps et d'équipements de sécurité), la complexité (présence de lucarnes, puits de lumière), le retrait des vieilles couches et les matériaux de finition choisis. Nous vous offrons une estimation sur place, 100 % gratuite et détaillée.",
  },
  {
    question: "Pourquoi est-il si risqué de faire le déneigement toiture Laurentides moi-même ?",
    answer: "Le déneigement d'un toit est très dangereux. Sans un équipement de protection antichute certifié (harnais, câbles) et sans formation, les risques de chute grave sont très élevés, surtout sur un toit glacé. De plus, les propriétaires qui utilisent des pelles métalliques pour briser la glace finissent toujours par rayer, fendre et détruire l'asphalte gelé de leurs propres bardeaux. Cela détruit l'étanchéité, annule instantanément vos garanties et provoque de l'infiltration d'eau dès le premier redoux. Nos professionnels possèdent le matériel de sécurité et de pelles douces en polymère pour le faire sans abîmer votre toiture.",
  },
];

export const SainteAnneDesLacs: React.FC = () => {
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
      "name": "Services de toiture à Sainte-Anne-des-Lacs",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sainte-Anne-des-Lacs",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Sainte-Anne-des-Lacs"
      },
      "description": "À la recherche d'un couvreur de confiance à Sainte-Anne-des-Lacs? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement."
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="Couvreur Sainte-Anne-des-Lacs | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        overrideFullTitle="Couvreur Sainte-Anne-des-Lacs | Toiture Jonathan Délisle Inc – Toiture Laurentides"
        description="À la recherche d'un couvreur de confiance à Sainte-Anne-des-Lacs? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation et déneigement. Soumission gratuite!"
        canonicalUrl="/sainte-anne-des-lacs"
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
              <MapPin size={16} /> Couvreur à Sainte-Anne-des-Lacs
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">Sainte-Anne-des-Lacs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              L'expert de confiance pour protéger votre propriété au bord de l'eau
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
              Toiture Jonathan Délisle Inc : L'expert couvreur de proximité à <strong>Sainte-Anne-des-Lacs</strong>. Protégez la pérennité de votre oasis boisée contre les rigueurs des Laurentides.
            </p>
            <p>
              Reconnue comme la municipalité des lacs par excellence, <strong>Sainte-Anne-des-Lacs</strong> offre un cadre forestier et aquatique exceptionnel. Des historiques chalets longeant les rives sinueuses du lac Marois ou du lac Guindon, aux vastes résidences unifamiliales intégrées discrètement dans la forêt mature du domaine des Lacs, chaque propriété s'inscrit dans un environnement naturel dense. Les toits, souvent ornés de fortes pentes ou de lucarnes pittoresques, font face à des défis architecturaux uniques à la région.
            </p>
            <p>
              Ce milieu de vie idyllique dicte ses propres lois climatiques. Le couvert forestier omniprésent accroît drastiquement le taux d'humidité ambiant, favorisant l'apparition de mousses et d'algues qui grugent les revêtements de toiture. De plus, la chute incessante d'aiguilles de pin et la présence écrasante de neige en hiver pèsent lourd sur la structure. À titre d'<strong>entrepreneur couvreur à Sainte-Anne-des-Lacs</strong>, <strong>Toiture Jonathan Délisle Inc</strong> déploie un savoir-faire pointu pour munir votre bâtiment d'une couverture à toute épreuve, spécialement formulée pour contrecarrer les méfaits de l'humidité et de l'ombre constante.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                Que votre sanctuaire soit situé chemin des Lacs, aux abords du lac Ouimet ou dans une rue boisée de ce havre de paix, nous intervenons avec diligence et discrétion. Nous accordons une importance capitale à la gestion mécanique de la ventilation d'entretoit pour assécher la condensation, prévenir tout pourrissement de votre charpente et freiner les barrages de glace hivernaux meurtriers.
              </p>
              <p>
                Pour une fiabilité à long terme, faites confiance à Toiture Jonathan Délisle Inc. Spécialistes en remplacement de bardeaux d'asphalte architecturaux de la plus haute qualité, réparations d'urgence et déneigement de toiture. Confiez la toiture de votre résidence de Sainte-Anne-des-Lacs à une équipe de couvreurs laurentiens chevronnés et passionnés par leur métier.
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
                Pose et remplacement de bardeaux d'asphalte à Sainte-Anne-des-Lacs
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le <strong>remplacement bardeaux asphalte Sainte-Anne-des-Lacs</strong> est incontestablement le service pour lequel nous sommes le plus souvent sollicités par les riverains et les résidents de la municipalité. Face à l'humidité des lacs et aux hivers rigoureux, les bardeaux d'asphalte architecturaux de qualité supérieure offrent une résistance remarquable jumelée à un rapport qualité-prix inégalé. Fini le temps des vieux bardeaux plats à trois pattes qui s'abîmaient rapidement sous le couvert forestier. Chez Toiture Jonathan Délisle Inc, nous installons exclusivement des bardeaux architecturaux multidimensionnels, lourdement texturés et traités pour résister aux algues et à la mousse (un problème fréquent près des plans d'eau), ainsi qu'aux vents extrêmes.
                </p>
                <p>
                  Notre méthode de travail pour tout projet de <strong>remplacement bardeaux asphalte Sainte-Anne-des-Lacs</strong> est d'une rigueur absolue. Chaque chantier débute par l'arrachage méticuleux et complet des anciennes couches de revêtement afin de mettre à nu le pontage de bois (la fondation de contreplaqué ou de planches de votre toit). Cette étape est non négociable : elle nous permet d'inspecter physiquement la santé de votre charpente. Dans un secteur boisé et humide, il n'est pas rare de découvrir du bois affaibli ou délaminé par la condensation. Si du bois est endommagé, nos experts le remplacent sur-le-champ pour garantir une base solide.
                </p>
                <p>
                  Une fois la fondation approuvée, nous passons à l'imperméabilisation stratégique. Nous fixons d'abord des larmiers métalliques au périmètre pour guider l'eau de pluie loin de vos fascias et de vos murs. Ensuite, nous déployons une large membrane autocollante de haute performance (membrane élastomère) aux endroits critiques : les avant-toits, les noues, et tout autour de la cheminée. Dans une zone où la neige s'accumule massivement, les barrages de glace sont très fréquents; cette membrane est votre ultime ligne de défense contre les infiltrations. La surface restante est couverte d'une sous-couche synthétique perméable à l'air mais farouchement hydrofuge. Enfin, les bardeaux sont installés selon un schéma de clouage précis, garantissant la longévité de votre <strong>toiture Sainte-Anne-des-Lacs</strong>.
                </p>
                <p>
                  L'ombre et l'humidité exigent une respiration parfaite du bâtiment. Nous évaluons et optimisons toujours votre système de ventilation (soffites et aérateurs de toit) pour prévenir la condensation hivernale destructrice et la prolifération de moisissures dans l'entretoit.
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
                    Architecturaux haut de gamme pour résister aux vents extrêmes, aux algues et à la mousse.
                
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
                    Prévention de la condensation hivernale et la prolifération de moisissures.
                
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
                Réparation de toiture à Sainte-Anne-des-Lacs
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Vivre au milieu des arbres matures est un bonheur, mais cela expose votre toit à des risques constants. Après un orage estival fracassant, un puissant coup de vent ou un épisode de verglas lourd, il n'est pas rare que des branches cassent et viennent endommager la toiture de votre chalet. Si vous apercevez des bardeaux arrachés, des cernes d'eau sur vos plafonds ou des traces d'infiltration près de la cheminée, vous devez agir rapidement. Notre service d'intervention en <strong>réparation toiture Laurentides</strong> est spécialement conçu pour colmater les brèches avant que l'eau ne compromette la structure de votre maison et n'entraîne des dommages collatéraux désastreux.
              </p>
              <p>
                En tant qu'entrepreneur <strong>toiture Sainte-Anne-des-Lacs</strong> de grande expérience, nous savons que l'eau trouve toujours le chemin de la moindre résistance. Une goutte qui apparaît dans votre salon a souvent voyagé le long des chevrons de l'entretoit depuis une micro-fissure située beaucoup plus haut. C'est pourquoi chaque intervention de réparation toiture Laurentides débute par une véritable enquête diagnostique approfondie. Nous refusons les solutions de fortune ; nous trouvons la source exacte de la fuite pour appliquer un correctif technique permanent.
              </p>
              <p>
                Que la source du problème soit un joint de calfeutrage asséché, un évent de plomberie dont le collet est usé, des dommages créés par des écureuils ou des ratons laveurs, ou des bardeaux transpercés par la chute de débris forestiers, nous possédons l'expertise pour y remédier. Soucieux de l'esthétique de votre demeure de villégiature, nous prenons soin de trouver des bardeaux de remplacement dont la couleur se marie harmonieusement avec le reste de votre toiture.
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
                  Dans un environnement naturel aussi dense que celui de Sainte-Anne-des-Lacs, l'entretien préventif est la clé pour éviter les factures salées. Une <strong>inspection de toiture Sainte-Anne-des-Lacs</strong> réalisée de manière proactive par nos maîtres couvreurs peut vous éviter de très mauvaises surprises. La présence massive d'arbres conifères et feuillus signifie que des feuilles, des aiguilles de pin et des branches s'accumulent constamment sur votre toit et dans vos gouttières, retenant l'humidité et accélérant la pourriture des matériaux. Nous recommandons vivement une inspection annuelle, idéalement à la fin de l'automne, pour s'assurer que les gouttières sont libérées et que tout est scellé avant les neiges.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Reconnu comme un entrepreneur <strong>toiture Sainte-Anne-des-Lacs</strong> honnête, méticuleux et transparent, nous offrons un service d'inspection visuelle et physique rigoureux. Ce service est particulièrement pertinent pour les chalets locatifs ou les résidences secondaires, où les propriétaires ne sont pas toujours présents pour surveiller l'état des lieux.
                  </p>
                  <p className="text-sm mt-4">
                    Lors de notre <strong>inspection de toiture Sainte-Anne-des-Lacs</strong>, nous scrutons tout à la loupe. Nous vérifions la présence de mousse ou de lichen sur les bardeaux, l'usure prématurée causée par l'ombre, et la présence de clous soulevés. Nous inspectons avec une grande attention l'étanchéité des solins d'acier de la cheminée (souvent éprouvés par le gel), l'état du calfeutrage et la fluidité des gouttières. Si la configuration nous le permet, nous examinons l'intérieur de l'entretoit pour valider la qualité de l'isolation et détecter tout problème de condensation. S'il n'y a rien à signaler, nous vous rassurerons. Si des travaux correctifs s'imposent, nous vous remettrons une estimation claire, précise et sans aucune pression.
                  </p>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Sainte-Anne-des-Lacs : Pourquoi c'est essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  À cause de sa géographie et de son couvert forestier, Sainte-Anne-des-Lacs reçoit des précipitations de neige qui s'accumulent lourdement au fil des mois. Bien que ce manteau blanc donne un air féérique à la municipalité, il représente une surcharge mécanique très dangereuse pour la charpente de votre chalet ou de votre maison. Un service professionnel de <strong>déneigement toiture Laurentides</strong> est absolument impératif pour prévenir l'affaissement, le fléchissement des chevrons ou même l'effondrement pur et simple de votre toiture sous la pression.
                </p>
                <p>
                  Le poids de la neige n'est qu'une facette du danger hivernal. Le risque le plus insidieux provient de la formation de barrières de glace (digues de glace). Celles-ci se créent en bordure des toits à la suite des cycles répétés de gel et de dégel. La neige fond sur la partie haute du toit (réchauffée par l'air de la maison), coule vers le bas, et regèle instantanément au contact de la corniche glaciale, bloquant ainsi le chemin vers les gouttières. L'eau s'accumule derrière ce barrage, remonte sous les bardeaux d'asphalte, et s'infiltre massivement dans vos murs et plafonds.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm">
                    Il est extrêmement déconseillé de tenter de déneiger votre toit vous-même. Monter sur un toit en pente, souvent très haut pour les chalets à flanc de montagne, est une cause majeure d'accidents graves. De plus, l'utilisation de pelles en métal ou de haches détruit inévitablement l'asphalte de vos bardeaux, annulant sur-le-champ vos garanties. Confiez cette tâche à Toiture Jonathan Délisle Inc. Nos professionnels utilisent des harnais de sécurité certifiés et effectuent le déneigement toiture Laurentides avec des pelles en polymère spécialisées. Nous retirons la charge dangereuse tout en laissant une mince pellicule de neige protectrice pour ne jamais égratigner votre revêtement, assurant la sécurité totale de votre investissement.
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
              <span className="text-brand-red">Sainte-Anne-des-Lacs</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Le choix de votre <strong>couvreur Sainte-Anne-des-Lacs</strong> est une décision cruciale. Votre toiture est la première et la plus importante ligne de défense de votre cocon familial contre un environnement humide et capricieux. Chez Toiture Jonathan Délisle Inc, nous nous démarquons très nettement par notre approche profondément humaine, notre minutie légendaire et notre maîtrise absolue des défis propres à une véritable <strong>toiture Laurentides</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Connaissance experte de l'environnement local",
                desc: "Nous connaissons les problématiques d'humidité liées à la proximité des lacs (Marois, Guindon, etc.) et de la forêt. Nos méthodes de ventilation et nos choix de bardeaux (résistants aux algues) sont adaptés en conséquence.",
              },
              {
                title: "Matériaux d'une qualité sans compromis",
                desc: "Nous refusons l'installation de produits bas de gamme. Nous travaillons exclusivement avec des matériaux certifiés, reconnus pour leur exceptionnelle longévité face aux hivers québécois.",
              },
              {
                title: "Intégrité, clarté et aucune surprise",
                desc: "Nos soumissions sont détaillées, limpides et complètes. Pas de frais cachés, pas de clauses illisibles ou de surcharges inattendues au moment de la facturation.",
              },
              {
                title: "Respect scrupuleux de votre terrain naturel",
                desc: "Nous protégeons consciencieusement vos arbustes, votre végétation et votre cour pendant les travaux. Avant de partir, nous passons un balai magnétique de puissance industrielle pour ramasser absolument tous les vieux clous égarés.",
              },
              {
                title: "Assurances et garanties blindées",
                desc: "Notre entreprise détient une assurance responsabilité civile complète et nous offrons d'exceptionnelles garanties sur notre main-d'œuvre, qui s'additionnent à celles offertes par les fabricants.",
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
            Zone de service — Sainte-Anne-des-Lacs et les villes des Laurentides desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Extrêmement fiers de la confiance que nous accordent nos clients à titre d'entrepreneur <strong>toiture Sainte-Anne-des-Lacs</strong>, notre flotte de camions sillonne les routes boisées pour desservir avec passion l'ensemble de notre majestueuse région.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Sainte-Anne-des-Lacs",
              "Saint-Sauveur",
              "Piedmont",
              "Prévost",
              "Saint-Jérôme",
              "Sainte-Adèle",
              "Morin-Heights"
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
            Que votre propriété soit située à Sainte-Anne-des-Lacs (près du cœur du village ou isolée en forêt), dans les municipalités environnantes comme Saint-Sauveur, Piedmont, Prévost, ou plus bas vers le grand centre urbain de Saint-Jérôme, notre équipe se déplace jusqu'à vous. Quelle que soit l'envergure de votre projet résidentiel, nous garantissons à tous nos clients un professionnalisme exemplaire, une courtoisie irréprochable et une qualité technique supérieure pour toute <strong>toiture Laurentides</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ) sur la toiture à Sainte-Anne-des-Lacs
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
            Ne confiez pas le toit qui protège votre cocon familial, votre chalet et vos investissements à des amateurs. Que vous ayez besoin d'une évaluation préventive de routine pour vous rassurer avant l'hiver, d'une réparation cruciale suite à des intempéries, ou de l'installation rigoureuse d'une toiture entièrement neuve, l'équipe dévouée de <strong>Toiture Jonathan Délisle Inc</strong> est prête à se mettre à l'œuvre pour vous.
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
