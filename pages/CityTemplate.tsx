import React, { Suspense } from 'react';
import { SEO } from "../components/SEO";
import { COMPANY_INFO } from "../constants";
import { useCityData } from "../src/hooks/useCityData";
import { CityHero, CityIntro, CityPose } from "../components/CitySections";
import { CityReparation, CityInspectionDeneigement, CityFAQ } from "../components/CitySections2";

const ChampsExpertise = React.lazy(() => import('../components/ChampsExpertise').then(m => ({ default: m.ChampsExpertise })));

export const CityTemplate: React.FC<{ cityName: string; cityPath: string }> = ({ cityName, cityPath }) => {
  const customContent = useCityData(cityName);

  if (!customContent) {
    return <div className="min-h-screen flex items-center justify-center bg-white"><div className="w-16 h-16 border-4 border-brand-red border-t-transparent rounded-full animate-spin"></div></div>;
  }

  const FAQ_DATA = [
    {
      question: `Quelle est l'espérance de vie réelle d'une toiture en bardeaux d'asphalte à ${cityName} ?`,
      answer: `${customContent.introPart3 ? customContent.introPart3 + ' ' : ''}De façon générale, une toiture recouverte de bardeaux d'asphalte architecturaux de première qualité, si elle est parfaitement installée et ventilée, durera entre 20 et 30 ans. L'entretien de vos gouttières et un bon déneigement préventif l'hiver sont cruciaux pour maximiser cette longévité dans le secteur.`,
    },
    {
      question: `À quel moment précis de l'année devrais-je faire faire une inspection de toiture à ${cityName} ?`,
      answer: `${customContent.inspPart1 ? customContent.inspPart1 + ' ' : ''}Le meilleur moment pour une vérification visuelle approfondie est la fin de l'automne, une fois les feuilles tombées, ou au printemps pour diagnostiquer rapidement tout dommage potentiel causé par la glace hivernale.`,
    },
    {
      question: `Intervenez-vous pour une réparation de toiture d'urgence à ${cityName} ?`,
      answer: `Oui, absolument. ${customContent.repPart1 ? customContent.repPart1 + ' ' : 'Les vents peuvent être féroces dans notre région. '}Notre équipe d'intervention se déploiera rapidement pour sécuriser les lieux avec l'installation de toiles de protection temporaires épaisses, arrêtant ainsi les dégâts à l'intérieur, pour ensuite planifier la réfection permanente.`,
    },
    {
      question: `Comment évaluez-vous le coût moyen d'un remplacement de toiture à ${cityName} ?`,
      answer: `Chaque toiture est unique. ${customContent.posePart1 ? customContent.posePart1 + ' ' : ''}Le coût d'un remplacement complet varie en fonction de plusieurs variables d'importance : la superficie totale du toit, la pente de la toiture, la complexité architecturale, ainsi que la gamme de matériaux choisis. Nous offrons une estimation sur place, 100 % gratuite et détaillée.`,
    },
    {
      question: `Pourquoi est-il si risqué de faire le déneigement de toiture moi-même à ${cityName} ?`,
      answer: `${customContent.deneigPart1 ? customContent.deneigPart1 + ' ' : ''}Le déneigement d'un toit est une tâche hautement dangereuse. Nos professionnels locaux disposent du matériel de sécurité adéquat et de pelles en polymère aux bords arrondis pour effectuer le travail de manière sécuritaire sans endommager la couverture.`,
    },
  ];

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
      "name": `Services de toiture à ${cityName}`,
      "provider": {
        "@type": "RoofingContractor",
        "name": "Toiture Jonathan Délisle Inc",
        "image": "/images/thumb-show.jpg",
        "telephone": COMPANY_INFO.phone,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": cityName,
          "addressRegion": "QC",
          "addressCountry": "CA"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": cityName
      },
      "description": `Vous cherchez un couvreur de confiance à ${cityName}? Toiture Jonathan Délisle Inc est l'expert local pour les toitures adaptées au climat spécifique de ${cityName}. Nous offrons des services d'installation de bardeaux de qualité, de réparation rapide après tempête et de déneigement sécuritaire protégeant votre investissement immobilier à ${cityName}.`,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `Services de toiture à ${cityName}`,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `Installation de bardeaux d'asphalte à ${cityName}`,
              "description": `Installation professionnelle de bardeaux d'architecte conçus pour résister au climat de ${cityName}.`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `Réparation de toiture à ${cityName}`,
              "description": `Service de réparation de toiture résidentielle et intervention d'urgence suite aux intempéries à ${cityName}.`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `Déneigement de toiture à ${cityName}`,
              "description": `Déneigement de toiture sécuritaire par des professionnels pour prévenir les affaissements causés par la neige à ${cityName}.`
            }
          }
        ]
      }
    }
  ];

  return (
    <div className="w-full">
      <SEO
        title={`Couvreur à ${cityName} | Toiture Jonathan Délisle`}
        overrideFullTitle={`Couvreur à ${cityName} | Toiture Jonathan Délisle`}
        description={`Vous cherchez un couvreur de confiance à ${cityName}? Toiture Jonathan Délisle Inc est l'expert local en installation, réparation de toiture et déneigement. Soumission gratuite!`}
        canonicalUrl={cityPath}
      >
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </SEO>

      <CityHero cityName={cityName} />
      <CityIntro cityName={cityName} customContent={customContent} />

      <Suspense fallback={<div className="h-64 w-full bg-gray-50 animate-pulse rounded-xl my-12" aria-hidden="true" />}>
        <ChampsExpertise 
          description={
            <>
              <p>
                {customContent?.expertisePart1 ? customContent.expertisePart1 : (
                  <>Que vous résidiez dans les secteurs familiaux denses, à proximité des grands axes routiers comme l'autoroute 15 ou au cœur des terres agricoles, nous sommes à votre service pour des interventions de pointe. Nous prêtons une attention particulière à la ventilation et à l'ancrage des matériaux, contrant la pression qu'exerce le vent continu sur l'enveloppe extérieure des bâtiments de la municipalité.</>
                )}
              </p>
              <p>
                {customContent?.expertisePart2 ? customContent.expertisePart2 : (
                  <>Ayez l'esprit tranquille avec Toiture Jonathan Délisle Inc. Nous nous illustrons par un remplacement impeccable de bardeaux d'asphalte architecturaux, un service prompt en cas d'appels d'urgence et un déneigement préventif sécuritaire. Optez pour des spécialistes dévoués afin de protéger votre demeure à {cityName}.</>
                )}
              </p>
            </>
          } 
        />
      </Suspense>

      <CityPose cityName={cityName} customContent={customContent} />
      <CityReparation cityName={cityName} customContent={customContent} />
      <CityInspectionDeneigement cityName={cityName} customContent={customContent} />
      <CityFAQ cityName={cityName} FAQ_DATA={FAQ_DATA} />

    </div>
  );
};
