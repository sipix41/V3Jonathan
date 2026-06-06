import React, { Suspense,  useState  } from 'react';
import {
  Shield,
  Star,
  Wrench, Hammer,
  Droplets,
  Snowflake,
  CheckCircle,
  MapPin,
  Phone,
  Home,
  ArrowRight,
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
      "Combien coûte un remplacement de toiture en bardeaux d'asphalte à Sainte-Agathe-des-Monts ?",
    answer:
      "Le coût moyen d'un remplacement de toiture varie selon l'aire de la surface, l'inclinaison (pente), l'accessibilité du toit et la qualité des bardeaux sélectionnés. À Sainte-Agathe-des-Monts, nous adaptons toujours notre évaluation en fonction des besoins spécifiques de chaque maison. Nous vous recommandons de demander notre estimation gratuite sur mesure pour avoir l'heure juste. Nos prix sont transparents, garantissant ainsi l'investissement le plus solide possible avec des matériaux premium faits pour durer.",
  },
  {
    question:
      "Effectuez-vous la réparation de toiture en urgence dans les Laurentides ?",
    answer:
      "Oui, tout à fait. Une infiltration d'eau ou des bardeaux arrachés par de forts vents nécessitent une attention immédiate. Nous proposons un service rapide de réparation de toiture dans les Laurentides. Nos techniciens couvrent le territoire de Sainte-Agathe, Val-David, Mont-Tremblant et autres municipalités environnantes pour identifier et colmater toute fuite potentielle rapidement.",
  },
  {
    question:
      "Quand devrais-je faire inspecter ma toiture pour prévenir les dommages ?",
    answer:
      "Dans notre beau secteur des Laurentides, une inspection de toiture professionnelle est conseillée à chaque automne ou au printemps. Elle est également très recommandée à la suite de bourrasques violentes ou d'orages importants. À Sainte-Agathe-des-Monts, les écarts de température intenses éprouvent l'étanchéité des toits. Une inspection préventive décèle des problèmes invisibles depuis le sol et vous fait sauver à long terme des milliers de dollars en rénovations imprévues.",
  },
  {
    question:
      "Pourquoi est-il si essentiel de confier le déneigement de toiture à des pros ?",
    answer:
      "Le déneigement de toiture n'est pas qu'une question de poids ; c'est aussi un enjeu de sécurité. Lors de nos rudes hivers laurentiens, la glace accumulée en bas de pente forme des barrages de glace qui font refouler l'eau sous le bardeau jusque dans votre comble. Les professionnels spécialisés savent comment retirer la neige et la glace sans gratter et percer l'asphalte protecteur, avec l'équipement adéquat et harnais de sécurité.",
  },
  {
    question:
      "Pourquoi engager un entrepreneur en toiture local des Laurentides ?",
    answer:
      "Choisir un couvreur à Sainte-Agathe-des-Monts reconnu et solidement implanté vous assure d'un service après-vente exceptionnel et d'une compagnie qui comprend parfaitement comment l'environnement local affecte les toitures. Nous sommes à proximité. En cas de tempête, nous pourrons intervenir rapidement. Faire affaire localement offre une tranquillité d'esprit inestimable quant aux garanties offertes.",
  },
];

export const SainteAgatheDesMonts: React.FC = () => {
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
      "name": "Services de toiture à Sainte-Agathe-des-Monts",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sainte-Agathe-des-Monts",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Sainte-Agathe-des-Monts"
      },
      "description": "Installation, réparation, inspection et déneigement de toiture résidentielle et commerciale pour la région de Sainte-Agathe-des-Monts."
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="Couvreur Sainte-Agathe-des-Monts"
        overrideFullTitle="Couvreur Sainte-Agathe-des-Monts | Toiture Jonathan Delisle Inc. – Toiture Laurentides"
        description="Besoin d'un couvreur à Sainte-Agathe-des-Monts? Spécialistes en toiture Laurentides: pose de bardeaux d'asphalte, réparation, déneigement, inspection. Soumission gratuite!"
        canonicalUrl="/couvreur-sainte-agathe-des-monts"
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
              <MapPin size={16} /> Couvreur à Sainte-Agathe-des-Monts
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Couvreur{" "}
              <span className="text-brand-red block mt-2">
                Sainte-Agathe-des-Monts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              Votre entrepreneur de confiance pour l'installation, la
              réparation, l'inspection et le déneigement de toiture en bardeaux
              d'asphalte dans les Laurentides.
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
              Toiture Jonathan Délisle Inc : L'entrepreneur couvreur de référence à <strong>Sainte-Agathe-des-Monts</strong>. Protégez la valeur de votre propriété au cœur de la capitale des Laurentides.
            </p>
            <p>
              Reconnue comme le centre névralgique de la région, la ville de <strong>Sainte-Agathe-des-Monts</strong> se distingue par un panorama immobilier riche et diversifié. De l'architecture patrimoniale qui borde le majestueux lac des Sables aux chalets laurentiens plus rustiques, sans oublier les développements résidentiels modernes et le dynamisme de la rue Principale, chaque type de bâtiment requiert un savoir-faire spécifique en matière de couverture.
            </p>
            <p>
              La région de Sainte-Agathe-des-Monts compose quotidiennement avec le climat laurentien à son plus intense. Les accumulations massives de neige, les corridors de vent qui se forment autour de nos lacs et les cycles de gel-dégel radicaux exercent une contrainte implacable sur les toitures. C'est précisément ici que <strong>Toiture Jonathan Délisle Inc</strong>, votre <strong>couvreur à Sainte-Agathe-des-Monts</strong>, fait la différence. Notre équipe déploie des techniques de pose de qualité supérieure pour vous protéger durablement contre les intempéries exceptionnelles de notre secteur.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                Que votre maison ou votre commerce soit situé près de l'Hôpital Laurentien, aux abords de la magnifique plage Major, sur le mont Saint-Castin ou dans les secteurs boisés environnants, nous sommes hautement disponibles. Nos installations de toiture misent sur une aération de l'entretoit optimisée pour empêcher la condensation hivernale et neutraliser les redoutables barrages de glace.
              </p>
              <p>
                Faites un investissement durable avec Toiture Jonathan Délisle Inc : installation de bardeaux d'asphalte architecturaux de première classe, réparations sécuritaires, déneigement hivernal et inspections minutieuses. Protégez avec fierté et sérénité votre patrimoine immobilier agathois en faisant équipe avec de véritables professionnels des Laurentides.
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
                Pose et remplacement de bardeaux d'asphalte à
                Sainte-Agathe-des-Monts
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Votre couverture subit un vieillissement normal et naturel
                  avec le temps. Qu’il s’agisse de tuiles friables, de petits
                  morceaux qui s’arrachent après une tempête ou d'une perte
                  d'adhésion flagrante de votre couverture, notre équipe
                  intervient de façon rigoureuse pour un remplacement complet de
                  bardeaux d'asphalte.
                </p>
                <p>
                  Dans les Laurentides, le bardeau d’asphalte moderne et de
                  première qualité demeure le choix de prédilection des
                  propriétaires. À la fois économique et incroyablement
                  résistant aux variations de température pour le remplacement
                  bardeaux asphalte Sainte-Agathe, il s'harmonise esthétiquement
                  très bien au paysage naturel environnant.
                </p>
                <p>
                  Notre statut d'entrepreneur toiture Sainte-Agathe vous offre
                  la certitude d'une pose respectant strictement les devis des
                  grands fabricants, vous garantissant une longévité maximale
                  face aux caprices de la météo laurentienne. Nous utilisons des
                  sous-couches protectrices, inspectons le fascia, les soffites
                  et la ventilation existante et posons soigneusement chaque
                  bardeau. Une toiture Laurentides conçue par nous, c’est une
                  protection maximale validée!
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
                Réparation de toiture à Sainte-Agathe-des-Monts
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Une infiltration d’eau peut causer des dégâts incommensurables
                si elle n’est pas gérée promptement (moisissures derrière vos
                murs, dommages au gypse, intégrité structurelle endommagée).
                C'est pourquoi notre unité de{" "}
                <strong>réparation toiture Laurentides</strong> s'engage à vous
                répondre dans les plus brefs délais lorsque vous êtes confronté
                à une véritable crise de toiture.
              </p>
              <p>
                Parfois, un remplacement intégral de la couverture n'est
                heureusement pas nécessaire. Les forts vents qui balaient
                souvent nos montagnes aux alentours de Sainte-Adèle ou Val-Morin
                peuvent simplement retourner ou arracher la partie supérieure
                d'un bardeau.
              </p>
              <p>
                Si la ventilation de votre entretoit n’est pas adéquate, un
                expert couvreur Sainte-Agathe-des-Monts évaluera avec attention
                l’installation d’aérateurs. Nous procédons aussi aux
                remplacements de solins, de colmatages de cheminées, ainsi qu’à
                la fixation sécuritaire de zones affaiblies du toit de votre
                maison ou de votre chalet.
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
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Mieux vaut prévenir que guérir. Confiez-nous votre{" "}
                  <strong>inspection de toiture Sainte-Agathe-des-Monts</strong>{" "}
                  pour une tranquillité d'esprit sans limites. Un toit qui
                  semble sain à vos yeux, vu d'en bas, peut malheureusement
                  cacher de nombreuses failles microscopiques ou encore des
                  clous apparents potentiellement rouillés.
                </p>
                <p>
                  En choisissant d'être accompagné d’un couvreur
                  Sainte-Agathe-des-Monts d'expérience pour faire cet examen
                  préventif, vous prolongez grandement l’espérance de vie de
                  votre investissement immobilier. Nos spécialistes examineront
                  sérieusement la structure de bardeau, de la charpente,
                  l'étanchéité de tous les dispositifs de toiture laurentides et
                  évalueront s'il vaut mieux réparer ou commencer à réfléchir au
                  remplacement.
                </p>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Sainte-Agathe-des-Monts — Pourquoi
                c'est essentiel
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Quand les mois froids s'abattent sur les Laurentides, nos
                  toitures croulent sous un poids immense. Entre la neige
                  mouillée très lourde et les barrages de glaces (digues) très
                  courants sous nos latitudes nordiques, votre intégrité
                  résidentielle est en péril.
                </p>
                <p>
                  Notre service spécialisé en{" "}
                  <strong>déneigement toiture Laurentides</strong> retire cette
                  pression dangereuse qui peut littéralement faire s’affaisser
                  la structure. C'est une tâche difficile qui impose des risques
                  importants (chutes) lorsqu'on est mal équipé.
                </p>
                <p>
                  Il ne faut jamais utiliser une simple pelle de métal pour
                  dégarnir un toit en bardeaux d'asphalte (au risque de rayer et
                  d’abîmer les granules du bardeaux). Nos professionnels savent
                  comment s'en occuper méthodiquement et de manière hautement
                  sécuritaire !
                </p>
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
              Pourquoi choisir{" "}
              <span className="text-brand-red">
                Toiture Jonathan Delisle Inc.
              </span>{" "}
              à Sainte-Agathe-des-Monts ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Travailler avec nous, c'est choisir un entrepreneur toiture
              Sainte-Agathe profondément humain et hautement expérimenté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise locale avérée",
                desc: "Nous connaissons les climats des Laurentides. Les chocs thermiques fréquents et le poids de l'hiver québécois guident nos recommandations et nos techniques d'installation expertes. Vous obtenez donc ce qu'il y a de plus résistant.",
              },
              {
                title: "Transparence absolue",
                desc: "Pas de frais cachés, pas de mauvaises surprises. La toiture Sainte-Agathe-des-Monts que vous commandez sera réalisée avec exactitude, telle que détaillée et expliquée sur notre soumission gratuite en tout départ.",
              },
              {
                title: "Réactivité et rapidité",
                desc: "Parce qu'un sinistre ne prévient pas. Nous répondons présent rapidement pour votre urgence réparation toiture Laurentides. Les fuites ne doivent pas attendre pour ne pas occasionner de dégâts de moisissure structurelle.",
              },
              {
                title: "Propreté impeccable",
                desc: "Nous protégeons vos arbustes et passons un balai magnétique à la fin du chantier pour ne laisser aucun clou.",
              },
              {
                title: "Matériaux certifiés",
                desc: "Nous installons des marques de bardeaux d'asphalte réputées pour leur grande longévité face au climat hivernal.",
              },
              {
                title: "Service client attentionné",
                desc: "Nous vous offrons un accompagnement personnalisé et chaleureux de l'estimation jusqu'à l'inspection finale de votre couverture.",
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
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
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
            Zone de service — Sainte-Agathe et villes des Laurentides desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Bien ancrés régionalement, nos professionnels se déplacent
            quotidiennement dans toute la grande région pour prendre en charge
            vos requêtes. Nous couvrons sans aucun problème :{" "}
            <strong>Sainte-Agathe-des-Monts</strong>, <strong>Val-David</strong>
            , <strong>Mont-Tremblant</strong>, <strong>Piedmont</strong>,{" "}
            <strong>Sainte-Adèle</strong>, <strong>Val-Morin</strong>,{" "}
            <strong>Saint-Sauveur</strong> et toutes les localités environnantes
            pour l'ensemble de nos services : toiture, dépannage de fuites,
            déneigement et inspection rigoureuse.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Sainte-Agathe-des-Monts",
              "Mont-Tremblant",
              "Val-David",
              "Saint-Sauveur",
              "Sainte-Adèle",
              "Val-Morin",
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Foire aux questions (FAQ)
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Vos questions fréquentes à propos de nos services de toiture dans
              les Laurentides
            </p>
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
            Prêt à entamer votre projet avec le meilleur couvreur
            Sainte-Agathe-des-Monts ?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4 font-medium">
            Que ce soit pour un grand remplacement, une petite réparation
            complexe, de l'inspection ou du déneigement de vos gouttières,
            Toiture Jonathan Delisle Inc. est l'équipe dont vous avez besoin
            dans les Laurentides.
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
