import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Quand doit-on remplacer sa toiture d'asphalte dans les Laurentides?",
      answer: "La durée de vie d'une toiture en bardeaux d'asphalte varie généralement entre 15 et 25 ans. Dans la région des Laurentides, le climat rigoureux, avec le gel, le dégel et la neige, peut accélérer l'usure. Il est conseillé de remplacer votre toiture si vous observez des bardeaux gondolés, craquelés, manquants, ou une perte importante de granules."
    },
    {
      question: "Pourquoi la ventilation de l'entretoit est-elle si importante?",
      answer: "Une ventilation adéquate permet l'évacuation de l'humidité et de la chaleur excédentaire. En hiver, cela évite la formation de condensation et de barrages de glace (ice dams). En été, cela prolonge la durée de vie de vos bardeaux en évitant qu'ils ne cuisent de l'intérieur, favorisant ainsi une meilleure efficacité énergétique."
    },
    {
      question: "Quelle est la durée moyenne des travaux pour refaire une toiture?",
      answer: `Dans la majorité des cas, notre équipe chez ${COMPANY_INFO.name} peut finaliser le remplacement d'une toiture résidentielle standard en une seule journée. Pour des toits plus grands ou complexes (pentes abruptes, lucarnes, réparations structurelles), cela peut prendre de 2 à 3 jours. Nous veillons toujours à sécuriser la toiture en fin de journée.`
    },
    {
      question: "Est-il possible d'installer de nouveaux bardeaux par-dessus l'ancienne toiture?",
      answer: "Bien que le code du bâtiment l'autorise dans certaines circonstances (maximum deux couches), nous le déconseillons fortement et ne le pratiquons pas. Installer la nouvelle couverture sur l'ancienne dissimule l'état réel du pontage (contreplaqué), réduit la durée de vie des nouveaux bardeaux par accumulation de chaleur, et annule souvent la garantie du fabricant."
    },
    {
      question: "Offrez-vous des réparations de toiture d'urgence par temps froid?",
      answer: "Oui, notre équipe est formée pour intervenir de manière sécuritaire tout au long de l'année, même en plein hiver dans les Laurentides. Nous réalisons des réparations temporaires ou permanentes pour stopper les infiltrations causées par le gel ou des vents violents, et nous offrons également un service de déneigement préventif."
    },
    {
      question: "Faites-vous la réfection de toitures commerciales?",
      answer: "Tout à fait! Nous mettons notre expertise à la disposition des commerces et des industries locales. Que vous ayez un toit plat ou à pente avec bardeaux d'asphalte, notre équipe maîtrise les techniques appropriées pour les projets commerciaux à Sainte-Agathe-des-Monts et les environs."
    },
    {
      question: "Quels sont les signes d'une infiltration d'eau par le toit?",
      answer: "Cernez rapidement le problème en repérant les anomalies : cernes de séchage (tâches rembrunies) sur le plafond ou les murs intérieurs, moisissures aux coins supérieurs, peinture qui s'écaille au plafond, odeur d'humidité persistante dans la maison ou traces de pourriture dans l'entretoit."
    },
    {
      question: "Quelle garantie offrez-vous sur l'installation de toiture?",
      answer: "Nos installations de toiture neuve incluent généralement une solide garantie du fabricant des bardeaux (pouvant aller jusqu'à 50 ans ou à vie) couvrant les matériaux, et Toiture Jonathan Délisle inc ajoute également une garantie de qualité sur la main-d'œuvre. Demandez de plus amples détails sur de nos soumissions."
    },
    {
      question: "Faut-il déneiger son toit dans notre région (Sainte-Agathe-des-Monts)?",
      answer: "Absolument. Les fortes accumulations de neige typiques des Laurentides peuvent peser jusqu'à plusieurs tonnes (charge structurale). Si vous dépassez 40 à 60 cm de neige ou si vous observez l'apparition de glace près des gouttières ou des craquements inhabituels, un déneigement par des professionnels certifiés est impératif afin de prévenir un effondrement."
    },
    {
      question: "Réparez-vous les problèmes de barrages de glace (ice dams)?",
      answer: "Oui, les barrages de glace sur le rebord du toit sont fréquents et causent des infiltrations majeures dont l'eau recule sous les bardeaux. Nous pouvons retirer les barrages de façon sécuritaire (sans endommager vos bardeaux) avec les bons outils. Pour une solution permanente, nous évaluons d'abord votre isolation et ventilation."
    },
    {
      question: "Comment choisir la bonne couleur de bardeaux pour ma maison?",
      answer: "La couleur des bardeaux doit s'harmoniser aux matériaux inchangeables (briques, pierres) pour rehausser l'esthétisme architectural de votre bâtisse. Notez que des teintes foncées absorberont davantage la chaleur, alors que des couleurs pâles la réfléchiront. Nous offrons des échantillons pour faciliter votre choix au cours des consultations."
    },
    {
      question: "Comment préparer les lieux avant l'arrivée de l'équipe de couvreurs?",
      answer: "Nous conseillons de déplacer les véhicules de l'entrée afin de libérer l'espace à l'installation des conteneurs à rebus. Rentrez ou protégez le mobilier de patio, les pots de fleurs fragiles et retirez du mur intérieur les objets précieux tels que miroirs ou les cadres susceptibles de tomber par les inévitables vibrations causées par les coups de marteau."
    },
    {
      question: "Mon assurance habitation couvre-t-elle le remplacement de la toiture?",
      answer: "L’assurance couvre globalement les dommages soudains ou dus aux aléas métriques imprévisibles, comme une rafale qui arrache des bardeaux, ou la chute de branches. Le remplacement ou la réparation pour « l'usure prévisible » de la toiture vous incombent. Renseignez-vous toujours à votre agent par précaution en cas de dommages causés par une intempérie!"
    },
    {
      question: "Nettoyez-vous le terrain une fois les travaux terminés?",
      answer: "C'est une priorité absolue pour nous. Chez Toiture Jonathan Délisle inc, à la fin des travaux, nous nettoyons minutieusement le périmètre de la maison pour nous assurer de ramasser les vieux matériaux, ainsi que tous les rebuts et, de façon méticuleuse, en utilisant des aimants puissants, nous collectons les clous."
    },
    {
      question: `Pourquoi confier mon projet à ${COMPANY_INFO.name}?`,
      answer: `Fondée et dirigée par Jonathan Délisle, l'entreprise bénéficie d'une réputation sans tache depuis plus de 16 ans en région couverte. Avec nos accréditations RBQ (${COMPANY_INFO.rbq}), des spécialistes consciencieux, l'emphase en sécurité sur les chantiers et la qualité incontestable de nos finitions, votre toiture mérite l'excellence. Joignez les gens qui veulent un toit qui dure.`
    },
    {
      question: "Qu'est-ce qu'un solin et pourquoi ça coule souvent à cet endroit?",
      answer: "Un solin est une pièce métallique essentielle (souvent en aluminium ou en acier galvanisé) installée aux jonctions vulnérables de votre toiture, comme autour des cheminées, des lucarnes ou dans les noues. C'est véritablement l'armure de votre toit. Si l'eau s'infiltre souvent à ces endroits, c'est généralement car les solins subissent une énorme pression provenant de la glace et de la neige des Laurentides, ou par un calfeutrage asséché. Une inspection et réparation chirurgicale de ces zones évite bien des dégâts."
    },
    {
      question: "Comment savoir si la ventilation de mon entretoit est suffisante?",
      answer: "Les signes d'une ventilation déficiente peuvent inclure une usure prématurée de vos bardeaux (qui deviennent secs, gondolés ou cassants sous l'effet de chaleur emprisonnée l'été), une formation importante de barrages de glace l'hiver, ainsi que la présence de moisissure ou de givre directement dans l'entretoit. Nous recommandons un ratio de ventilation équilibré entre l'entrée d'air (soffites) et la sortie (aérateurs Maximum) pour que votre toiture \"respire\" de façon saine."
    },
    {
      question: "Quelle est l'utilité des aérateurs de toit (de type Maximum) par rapport aux autres modèles?",
      answer: "Les ventilateurs statiques à haut rendement (comme la gamme reconnue Maximum) ont une forme unique conçue pour utiliser la force éolienne, créant un puissant effet d'aspiration qui expulse l'air chaud et l'humidité de votre entretoit. Leur hauteur et leur conception intelligente empêchent également les accumulations de neige intenses de les boucher. C'est l'un des meilleurs investissements pour prévenir la pourriture de vos bois de charpente et prolonger la vie des bardeaux."
    },
    {
      question: "Est-ce qu'un mauvais scellement des solins nécessite un changement complet de la toiture?",
      answer: "Pas systématiquement! Souvent, une simple infiltration provient d'un calfeutrage craquelé autour d'une cheminée ou d'un solin de plomberie. Dans ces cas, notre expertise en réparation de toiture nous permet d'intervenir localement : nous remplaçons le produit défectueux par un scellant industriel durable et ajustons les solins abîmés, ce qui arrête la fuite sans obliger une réfection complète du toit, pourvu qu'elle soit détectée à temps."
    }
  ];

  return (
    <div className="bg-white">
      <SEO title="Faq" description="Découvrez nos services d'expert couvreur pour Faq. Toiture Jonathan Délisle inc dans les Laurentides." canonicalUrl="/faq">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </SEO>
      {/* Hero Section */}
      <section className="bg-brand-black text-white py-4 px-4 md:py-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold mb-6 border border-brand-red/20">
            <HelpCircle className="w-4 h-4" />
            Foire aux questions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Vos questions fréquentes
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Trouvez rapidement les réponses à vos interrogations sur la réfection de toiture, la ventilation, le déneigement et nos processus de travail. Une information transparente pour un choix éclairé.
          </p>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-4 md:py-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO context paragraph */}
        <div className="mb-8 border-b border-gray-100 pb-10">
           <div className="flex items-center gap-3 mb-4">
             <MessageCircleQuestion className="text-brand-red w-8 h-8" />
             <h2 className="text-3xl font-bold text-gray-900">Expertise de toiture dans les Laurentides</h2>
           </div>
           <p className="text-lg text-gray-600 leading-relaxed">
             Depuis plus de {COMPANY_INFO.yearsExperience} ans, l'équipe de <strong>{COMPANY_INFO.name}</strong> accompagne les propriétaires de Sainte-Agathe-des-Monts et de l'ensemble des Laurentides. Les conditions hivernales exigent des matériaux de première qualité et des techniques de pose irréprochables. Voici les 15 questions les plus courantes que nos clients nous posent à propos de leur toiture.
           </p>
        </div>

        {/* Questions Accordion */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 border-l-[6px] ${index % 2 === 0 ? 'border-l-brand-red' : 'border-l-brand-black'} ${openIndex === index ? 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] -translate-y-1' : 'hover:shadow-md hover:-translate-y-0.5'}`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={`w-full text-left px-5 py-4 md:px-6 flex items-center justify-between focus:outline-none transition-colors ${openIndex === index ? 'bg-gray-50/50' : 'bg-transparent'}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className={`text-base md:text-lg font-bold pr-8 tracking-tight transition-colors ${openIndex === index ? 'text-brand-red' : 'text-gray-900'}`}>
                  {item.question}
                </h3>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-brand-red text-white shadow-sm' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                aria-hidden={openIndex !== index}
              >
                <div className="p-5 md:px-6 pt-0 pb-5 text-gray-600 leading-relaxed text-sm md:text-base font-normal">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8 md:p-12 text-center border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Vous ne trouvez pas votre réponse?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Chaque maison est unique et certaines situations nécessitent l'avis d'un expert. N'hésitez pas à nous contacter pour une évaluation personnalisée de votre toiture dans la région des Laurentides.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Link to="/contact">
               <Button size="lg" className="px-8 py-4 text-lg">Parlez à nos experts</Button>
             </Link>
             <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-brand-red font-bold hover:underline text-lg">
                Appelez-nous au {COMPANY_INFO.phone}
             </a>
          </div>
        </div>

      </section>
    </div>
  );
};
