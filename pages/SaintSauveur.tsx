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
      "Quels types de toiture Toiture Jonathan Delisle installe-t-il à Saint-Sauveur ?",
    answer:
      "Toiture Jonathan Delisle Inc. se spécialise principalement dans la pose et le remplacement de bardeaux d'asphalte, le type de toiture le plus répandu au Québec. Nous offrons également des services de réparation, de rénovation complète, d'inspection professionnelle et de déneigement de toiture pour tous les propriétaires de Saint-Sauveur et des environs.",
  },
  {
    question:
      "Combien coûte une nouvelle toiture en bardeaux d'asphalte à Saint-Sauveur ?",
    answer:
      "Le coût d'une toiture en bardeaux d'asphalte varie selon la superficie du toit, la pente, le type de bardeaux choisi et l'état de la structure existante. Nous offrons des soumissions gratuites et sans engagement. Contactez-nous pour obtenir une évaluation précise adaptée à votre propriété.",
  },
  {
    question:
      "Pourquoi faire inspecter sa toiture avant l'hiver dans les Laurentides ?",
    answer:
      "La région de Saint-Sauveur reçoit entre 300 et 400 cm de neige par saison. Une toiture en mauvais état risque de laisser entrer l'humidité, de former des dommages de glace sous les bardeaux ou de s'affaisser sous le poids de la neige. Une inspection avant l'hiver permet de corriger les problèmes avant qu'ils deviennent coûteux.",
  },
  {
    question:
      "Offrez-vous le déneigement de toiture d'urgence à Saint-Sauveur ?",
    answer:
      "Oui. En cas d'accumulation de neige importante après une tempête, notre équipe intervient rapidement pour soulager votre structure et prévenir les infiltrations d'eau. Appelez-nous dès que possible pour planifier un déneigement sécuritaire.",
  },
  {
    question: "Quelles villes des Laurentides desservez-vous ?",
    answer:
      "En plus de Saint-Sauveur, nous desservons Mont-Tremblant, Sainte-Adèle, Val-Morin, Val-David, Saint-Faustin-Lac-Carré, Piedmont, Prévost, Saint-Hippolyte et les municipalités avoisinantes. Contactez-nous pour confirmer la couverture de votre secteur.",
  },
  {
    question:
      "Combien de temps dure une toiture en bardeaux d'asphalte au Québec ?",
    answer:
      "Dans les conditions climatiques québécoises, une toiture en bardeaux d'asphalte standard dure en moyenne entre 20 et 25 ans. Les bardeaux architecturaux de haute gamme peuvent dépasser 30 ans. Le climat des Laurentides, avec ses cycles de gel-dégel, peut accélérer l'usure si la toiture n'est pas entretenue régulièrement.",
  },
];

export const SaintSauveur: React.FC = () => {
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
      "name": "Services de toiture à Saint-Sauveur",
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle inc",
        "image": "https://i.postimg.cc/FKLjSjn2/thumb-show.jpg",
        "telephone": "819-323-8888",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Saint-Sauveur",
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Saint-Sauveur"
      },
      "description": "Installation, réparation, inspection et déneigement de toiture résidentielle et commerciale pour la région de Saint-Sauveur."
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title="Couvreur Saint-Sauveur"
        overrideFullTitle="Couvreur Saint-Sauveur | Toiture Jonathan Delisle Inc. – Toiture Laurentides"
        description="Couvreur expert à Saint-Sauveur. Bardeaux d'asphalte, réparation, inspection et déneigement de toiture. Demandez une soumission gratuite!"
        canonicalUrl="/saint-sauveur"
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
              <MapPin size={16} /> Couvreur à Saint-Sauveur
            </div>
            <h1 className="text-[34px] md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              Toiture à{" "}
              <span className="text-brand-red block mt-2">Saint-Sauveur</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              Votre couvreur de confiance dans les Laurentides. Spécialiste en
              bardeaux d'asphalte, réparation, inspection et déneigement de
              toiture.
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
              Toiture Jonathan Délisle Inc : Votre artisan couvreur de premier plan à <strong>Saint-Sauveur</strong>. Protégez votre maison, condo ou chalet contre les rigueurs de notre vallée laurentienne.
            </p>
            <p>
              Joyau touristique et résidentiel, <strong>Saint-Sauveur</strong> se distingue par son dynamisme exceptionnel et son cadre naturel majestueux. De sa rue Principale toujours animée aux développements résidentiels en montagne (comme le Sommet Saint-Sauveur, le Mont-Habitant, ou le Mont-Gabriel), le parc immobilier y est riche et varié. Qu'il s'agisse de pittoresques chalets suisses, de condominiums, ou de vastes résidences unifamiliales, chaque bâtiment fait face à des réalités géographiques distinctes.
            </p>
            <p>
              Blottie au fond de la vallée entourée de montagnes de ski, Saint-Sauveur est particulièrement exposée à des accumulations de neige massives, des épisodes de verglas fréquents et des cycles de gel et dégel intenses au printemps. Ces conditions imposent une charge et un stress considérables à votre toiture. En tant qu'<strong>entrepreneur couvreur à Saint-Sauveur</strong>, <strong>Toiture Jonathan Délisle Inc</strong> possède une compréhension pointue du microclimat local. Nous installons des toitures conçues pour offrir une barrière impénétrable tout en assurant une ventilation d'entretoit optimale adaptée aux grands froids comme aux chaleurs estivales.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                Que votre demeure se situe près du Lac des Becs-Scies, dans les domaines boisés ou à deux pas du parc Georges-Filion, nous répondons présent avec efficacité et courtoisie. Nous respectons l'architecture locale et les normes de la municipalité pour que votre toit rehausse l'esthétique unique de votre propriété tout la sécurisant.
              </p>
              <p>
                Faire appel à Toiture Jonathan Délisle Inc, c'est opter pour la tranquillité d'esprit d'un travail rigoureux et garanti par des couvreurs passionnés de la région. Remplacement de bardeaux d'asphalte de qualité supérieure, déneigement préventif de toiture et inspections détaillées : nous sommes le partenaire de confiance de votre maison à Saint-Sauveur.
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
                Pose et remplacement de bardeaux d'asphalte à Saint-Sauveur
                <span className="absolute bottom-0 left-0 w-20 h-1.5 bg-brand-red rounded-full"></span>
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le bardeau d'asphalte est le revêtement de toiture de loin le
                  plus populaire au Québec, et pour de bonnes raisons : il offre
                  un excellent rapport qualité-prix, une durabilité éprouvée
                  dans nos conditions climatiques, et une vaste gamme de styles
                  et de couleurs pour s'harmoniser à tous les types de maisons.
                  À <strong>Saint-Sauveur</strong>, les maisons de villégiature,
                  les chalets et les résidences permanentes ont des
                  configurations de toits très variées. Chez{" "}
                  <strong>Toiture Jonathan Delisle Inc.</strong>, nous
                  maîtrisons chaque type de pente et chaque configuration
                  architecturale.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Notre processus de remplacement de toiture
                </h3>
                <p>
                  Lors d'un remplacement complet de toiture en bardeaux
                  d'asphalte à Saint-Sauveur, nous commençons par une inspection
                  rigoureuse de la charpente pour déceler tout signe de
                  pourriture ou d'affaissement. Nous retirons ensuite tous les
                  vieux matériaux jusqu'au bois de structure. Nous installons
                  une membrane d'étanchéité de qualité supérieure,
                  particulièrement importante dans notre région où les chutes de
                  neige sont abondantes, suivie d'un papier de soubassement et
                  des nouveaux bardeaux d'asphalte sélectionnés avec vous.
                  Chaque étape est réalisée dans le respect des normes du
                  fabricant pour que votre garantie reste entièrement valide.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Bardeaux architecturaux ou bardeaux standards ?
                </h3>
                <p>
                  Pour les propriétaires de Saint-Sauveur qui souhaitent
                  valoriser leur propriété, nous recommandons souvent les
                  bardeaux architecturaux. Plus épais, plus résistants aux vents
                  violents et d'une apparence beaucoup plus riche, ils sont
                  particulièrement bien adaptés aux chalets et maisons de
                  villégiature de la région. Leur durée de vie peut dépasser 30
                  ans dans les conditions des Laurentides lorsqu'ils sont bien
                  posés et entretenus.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="text-[34px] shrink-0">🔨</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Installation complète
                
                  </h3>
                  <p className="text-sm text-gray-600">
                    Remplacement total de la toiture, du décapage à la finition.
                
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
                    Esthétique supérieure et durabilité accrue pour votre
                  propriété.
                
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="text-[34px] shrink-0">🛡️</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Membrane d'étanchéité
                
                  </h3>
                  <p className="text-sm text-gray-600">
                    Protection maximale contre l'infiltration d'eau et les
                  dommages de glace.
                
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8 flex items-start gap-4">
                <div className="text-[34px] shrink-0">✅</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Travaux garantis
                
                  </h3>
                  <p className="text-sm text-gray-600">
                    Garantie de main-d'œuvre sur chaque projet réalisé par notre
                  équipe.
                
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
                Réparation de toiture à Saint-Sauveur — Intervention rapide
              </h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Pas besoin de remplacer toute votre toiture pour un problème
                localisé. Chez <strong>Toiture Jonathan Delisle Inc.</strong>,
                nous sommes spécialisés dans la{" "}
                <strong>réparation de toiture à Saint-Sauveur</strong> et dans
                toute la région des <strong>Laurentides</strong>. Qu'il s'agisse
                d'un bardeau arraché par le vent, d'une fuite autour d'une
                cheminée ou d'un solin abîmé, nous diagnostiquons le problème et
                nous intervenons avec efficacité pour protéger votre maison.
              </p>
              <p>
                Les <strong>réparations de toiture dans les Laurentides</strong>{" "}
                ne peuvent pas attendre. Une petite fuite non traitée peut, en
                quelques semaines, causer des dommages considérables à
                l'isolant, aux murs et aux structures intérieures. Notre équipe
                peut souvent vous accueillir en priorité pour les situations
                urgentes, surtout avant et après les grandes tempêtes hivernales
                qui frappent régulièrement <strong>Saint-Sauveur</strong>.
              </p>
              <div className="bg-brand-red/5 p-6 md:p-8 rounded-2xl border border-brand-red/10 mt-8">
                <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="text-brand-red w-5 h-5" /> Problèmes
                  les plus fréquents qu'on règle
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 flex-shrink-0" />{" "}
                    Bardeaux manquants, décollés ou fissurés après une tempête
                    de vent
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 flex-shrink-0" />{" "}
                    Fuites autour des cheminées, des puits de lumière et des
                    évents
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 flex-shrink-0" />{" "}
                    Solin de rive décollé ou rouillé laissant entrer l'eau
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 flex-shrink-0" />{" "}
                    Dommages causés par les glaces de barrage (ice dams) en
                    hiver
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 flex-shrink-0" />{" "}
                    Pourriture des solives ou du bois de support suite à une
                    infiltration prolongée
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 flex-shrink-0" />{" "}
                    Toiture bombée ou affaissée causée par un excès de poids ou
                    un vice structurel
                  </li>
                </ul>
              </div>
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
                Inspection de toiture professionnelle à Saint-Sauveur
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  La plupart des propriétaires de <strong>Saint-Sauveur</strong>{" "}
                  n'inspectent leur toiture que lorsqu'une fuite apparaît à
                  l'intérieur de la maison — et c'est souvent trop tard. Une
                  inspection de toiture professionnelle dans les Laurentides
                  deux fois par année, idéalement au printemps et à l'automne,
                  permet de repérer les problèmes avant qu'ils ne s'aggravent.
                </p>
                <p>
                  Nos inspecteurs qualifiés examinent méthodiquement chaque
                  composante de votre toiture : l'état général des bardeaux, les
                  membranes, les solins, les évents, les joints, la cheminée et
                  la structure visible depuis les combles. Vous obtenez un
                  rapport clair avec photos et recommandations prioritaires,
                  sans jargon technique inutile.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="font-bold text-white mb-3">
                    Quand faut-il faire inspecter votre toiture ?
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 flex-shrink-0" />{" "}
                      Avant l'achat d'une propriété à Saint-Sauveur ou dans les
                      Laurentides
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 flex-shrink-0" />{" "}
                      Après une grosse tempête de neige, de pluie ou de grêle
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 flex-shrink-0" />{" "}
                      Si votre toiture a plus de 15 ans et n'a jamais été
                      évaluée
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 flex-shrink-0" />{" "}
                      Si vous remarquez des granules de bardeau dans vos
                      gouttières
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 flex-shrink-0" />{" "}
                      Si vous avez des taches d'humidité au plafond ou dans le
                      grenier
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 flex-shrink-0" />{" "}
                      Si vos voisins changent leur toiture et que la vôtre est
                      du même âge
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
              <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
              <div className="flex-1 flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-4">
                Déneigement de toiture à Saint-Sauveur — Pourquoi c'est
                essentiel dans les Laurentides
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
                <p>
                  Saint-Sauveur est l'une des villes des Laurentides qui reçoit
                  le plus de neige au Québec. Avec des accumulations pouvant
                  dépasser 400 centimètres par saison, le poids de la neige sur
                  votre toiture peut représenter une menace réelle pour
                  l'intégrité de votre structure. Le{" "}
                  <strong>déneigement de toiture à Saint-Sauveur</strong> n'est
                  pas un luxe — c'est une mesure de prévention indispensable.
                </p>
                <p>
                  En plus du poids, l'accumulation de neige et de glace favorise
                  la formation de <strong>barrages de glace</strong>, ces
                  bourrelets qui se forment en bordure de toit et empêchent
                  l'eau de fonte de s'écouler correctement. L'eau retenue finit
                  par s'infiltrer sous les bardeaux et causer des dommages
                  importants à l'intérieur de la maison. Le déneigement de
                  toiture dans les Laurentides réalisé par des professionnels
                  équipés adéquatement est la solution la plus sûre pour
                  protéger votre investissement immobilier.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="font-bold text-white mb-3">
                    Notre service de déneigement : sécuritaire et efficace
                  </h3>
                  <p className="text-sm">
                    Chez Toiture Jonathan Delisle Inc., notre équipe utilise des
                    outils adaptés pour retirer la neige sans endommager vos
                    bardeaux. Nous respectons une couche protectrice de neige
                    sur votre toiture pour éviter tout contact direct avec les
                    matériaux. La sécurité de nos travailleurs est également une
                    priorité absolue — nous disposons de tout l'équipement
                    nécessaire pour travailler en hauteur en toute sécurité.
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
              Pourquoi nous choisir à{" "}
              <span className="text-brand-red">Saint-Sauveur</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Des centaines de propriétaires des Laurentides nous font déjà
              confiance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Expertise locale du climat",
                desc: "On connaît les hivers des Laurentides et comment les toitures réagissent ici.",
              },
              {
                title: "Réactivité optimale",
                desc: "En cas d'urgence, nous sommes disponibles rapidement pour sécuriser votre propriété.",
              },
              {
                title: "Transparence totale",
                desc: "Des soumissions gratuites, détaillées et sans aucune mauvaise surprise cachée.",
              },
              {
                title: "Matériaux certifiés",
                desc: "Bardeaux et membranes de fabricants reconnus avec d'excellentes garanties.",
              },
              {
                title: "Travail respectueux",
                desc: "Nous nettoyons méticuleusement le chantier : votre terrain retrouve son état d'origine.",
              },
              {
                title: "Garantie main-d'œuvre",
                desc: "Chaque projet installé par notre équipe est rigoureusement garanti pour votre sérénité.",
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
            Zone de service — Saint-Sauveur et villes des Laurentides desservies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            <strong>Toiture Jonathan Delisle Inc.</strong> est basée à{" "}
            <strong>Saint-Sauveur</strong> et dessert l'ensemble des
            municipalités de la MRC des Laurentides et des secteurs avoisinants.
            Notre connaissance du territoire nous permet d'intervenir
            efficacement partout dans la région, que vous soyez au bord du
            village de Saint-Sauveur, en montagne vers Mont-Tremblant, ou dans
            les vallées vers Sainte-Adèle.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Saint-Sauveur",
              "Mont-Tremblant",
              "Sainte-Adèle",
              "Val-Morin",
              "Val-David",
              "Saint-Faustin-Lac-Carré",
              "Piedmont",
              "Prévost",
              "Saint-Hippolyte",
              "Arundel",
              "Lantier",
              
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
            Vous n'êtes pas certain que nous desservons votre secteur ?
            Appelez-nous au{" "}
            <strong>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="text-brand-red hover:underline"
              >
                {COMPANY_INFO.phone}
              </a>
            </strong>{" "}
            — nous vous confirmerons notre disponibilité dans les minutes qui
            suivent.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-black tracking-tight">
              Questions fréquentes — Toiture Saint-Sauveur
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
            Prêt à protéger votre toiture à Saint-Sauveur ?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4 font-medium">
            Contactez Toiture Jonathan Delisle Inc. dès aujourd'hui pour une
            soumission gratuite et sans engagement. Notre équipe intervient
            partout dans les Laurentides.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/soumission">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-white bg-brand-red hover:bg-red-700 font-bold tracking-wide px-10 py-5 text-lg shadow-lg hover:-translate-y-1 transition-transform"
              >
                Soumission gratuite
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phoneClean}`} className="w-full sm:w-auto block">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-brand-black hover:bg-black text-white font-black uppercase tracking-wide px-10 py-5 text-lg shadow-xl hover:-translate-y-1 transition-transform border border-transparent"
              >
                Appeler au {COMPANY_INFO.phone}
              </Button>
            </a>
          </div>
          <p className="mt-8 text-white/80 font-medium">
            🕐 Lundi au vendredi 7h–18h | Samedi 8h–14h | Urgences disponibles
          </p>
        </div>
      </section>
    </div>
  );
};
