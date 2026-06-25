import React, { useState } from 'react';
import { Shield, Hammer, Snowflake, ChevronDown } from 'lucide-react';
import { Button } from './Button';

export const CityReparation: React.FC<{ cityName: string, customContent: Record<string, string> }> = ({ cityName, customContent }) => (
  <section className="py-4 lg:py-6 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-[34px] font-extrabold text-brand-black tracking-tight flex-col sm:flex-row flex items-center justify-center gap-3">
            <Hammer size={36} className="text-brand-red flex-shrink-0" />
            Réparation de toiture à {cityName}
          </h2>
        </div>
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            {customContent?.repPart1 || (
              <>Malgré la meilleure volonté du monde, un entretien régulier et des matériaux de qualité, la météo imprévisible peut causer des dommages soudains et inattendus. Après une puissante rafale automnale ou à la suite d'un orage estival de grêle fracassant, il n'est pas rare qu'une toiture subisse des bris. Si vous apercevez des morceaux de bardeaux éparpillés sur votre pelouse, des cernes bruns d'humidité sur vos plafonds intérieurs, de la peinture qui s'écaille ou des solins d'acier tordus, vous devez agir vite. Notre service d'intervention d'urgence en <strong>réparation de toiture dans les Laurentides</strong> est spécialement conçu pour colmater les brèches rapidement avant que l'eau ne compromette gravement la structure de votre maison.</>
            )}
          </p>
          <p>
            {customContent?.repPart2 || (
              <>En tant qu'entrepreneur de <strong>toiture à {cityName}</strong> de grande expérience, nous savons que l'eau est un élément extrêmement sournois. Elle peut s'infiltrer par une micro-fissure au sommet du toit, glisser lentement le long des chevrons, et goutter à un endroit complètement différent à l'intérieur. C'est pourquoi chaque intervention de réparation de toiture dans les Laurentides débute par une enquête diagnostique rigoureuse. Nous refusons de simplement appliquer du ciment plastique ou du goudron sur un symptôme de surface; nous retraçons la source exacte de la fuite pour appliquer un correctif technique permanent.</>
            )}
          </p>
          {!customContent?.repPart1 && (
            <p>
              Que la source du problème soit un joint de calfeutrage complètement asséché par les rayons UV, un évent de plomberie dont le caoutchouc est craquelé, des dommages créés par des vents extrêmes, ou des rongeurs (comme les écureuils) ayant percé la couverture pour trouver de la chaleur, nous possédons le savoir-faire pour y remédier définitivement. Soucieux de l'esthétique de votre demeure, nous faisons toujours l'effort de trouver des bardeaux de remplacement dont la couleur se fond de façon harmonieuse avec le reste de votre toiture existante.
            </p>
          )}
        </div>
      </div>
    </div>
  </section>
);

export const CityInspectionDeneigement: React.FC<{ cityName: string, customContent: Record<string, string> }> = ({ cityName, customContent }) => (
  <section className="py-4 lg:py-6 bg-brand-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
          <Shield size={40} className="text-brand-red shrink-0 mt-1" />
          <div className="flex-1 flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-4">Inspection de toiture professionnelle dans les Laurentides</h2>
            <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
              <p>
                {customContent?.inspPart1 || `On répète souvent qu'il vaut mieux prévenir que guérir, et ce vieux principe prend tout son sens en matière d'entretien immobilier résidentiel. Une inspection de toiture ${cityName} réalisée de manière préventive par nos maîtres couvreurs peut vous éviter de très mauvaises surprises, des sinistres hautement coûteux et prolonger considérablement l'espérance de vie de vos matériaux. De façon idéale, une toiture devrait être inspectée à la fin de l'automne, pour s'assurer que les gouttières sont libérées des feuilles mortes et que tout est solidement calfeutré avant les premières neiges, ainsi qu'au printemps, pour évaluer les potentiels impacts du gel et de la glace hivernale.`}
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm">
                  {customContent?.inspPart2 || `Reconnu comme un entrepreneur toiture ${cityName} honnête, intègre et transparent, nous offrons un service d'inspection visuelle et physique exhaustif. Ce service est indispensable pour les propriétaires de maisons vieillissantes, pour les acheteurs immobiliers prudents qui veulent éviter d'hériter de vices cachés, ou pour faire un bilan de santé après de forts vents dans la plaine.`}
                </p>
                <p className="text-sm mt-4">
                  {customContent?.inspPart3 || `Lors de notre inspection de toiture ${cityName}, nous passons absolument tout au peigne fin. Nous vérifions l'état général des bardeaux (perte de granules protecteurs, présence de gondolement, bardeaux fendillés, clous apparents ou soulevés). Nous inspectons avec une attention particulière l'étanchéité des solins d'acier de la cheminée et des murs d'intersection, l'état du calfeutrage et la solidité des fixations de vos gouttières. Si la configuration de la maison le permet, nous examinons l'intérieur de l'entretoit pour valider l'épaisseur de l'isolation, traquer la présence de moisissure noire et nous assurer que la circulation de l'air n'est pas bloquée. S'il n'y a rien à signaler, nous vous le dirons. Si des travaux correctifs s'imposent, nous vous soumettrons une estimation précise.`}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors flex items-start gap-4 md:gap-6">
          <Snowflake size={40} className="text-brand-red shrink-0 mt-1" />
          <div className="flex-1 flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-4">Déneigement de toiture à {cityName} : Pourquoi c'est essentiel</h2>
            <div className="text-gray-300 space-y-4 leading-relaxed flex-grow">
              <p>
                {customContent?.deneigPart1 || `Les hivers à ${cityName} apportent de fortes précipitations de neige qui s'accumulent et se compactent au fil des mois, souvent durcies par les vents froids. Cette masse représente une surcharge mécanique très dangereuse pour la charpente de votre résidence. Un service professionnel de déneigement de toiture dans les Laurentides est absolument impératif pour prévenir l'affaissement, la déformation à long terme, ou même l'effondrement pur et simple de vos fermes de toit sous l'énorme pression de la neige mouillée.`}
              </p>
              <p>
                {customContent?.deneigPart2 || `Outre le risque d'effondrement, une accumulation excessive de neige favorise la formation redoutée de barrages de glace (ice dams). Lorsque la chaleur s'échappant de votre maison fait fondre la couche inférieure de neige, l'eau s'écoule vers les avant-toits plus froids et regèle, formant une barrière. L'eau s'accumule alors derrière cette barrière, remonte sous les bardeaux et s'infiltre à l'intérieur de vos murs et plafonds.`}
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm">
                  {customContent?.deneigPart3 || `Confier cette tâche à Toiture Jonathan Délisle Inc, c'est choisir la sécurité. Déneiger un toit est extrêmement dangereux sans équipement adéquat. Nous utilisons des harnais de sécurité conformes, et nos outils (comme des pelles en plastique sans rebords tranchants) sont conçus pour déblayer la neige sans jamais abîmer les bardeaux d'asphalte en dessous. Protégez votre investissement et votre santé : laissez nos experts affronter l'hiver à votre place.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const CityFAQ: React.FC<{ cityName: string, FAQ_DATA: any[] }> = ({ cityName, FAQ_DATA }) => {
  const [indexFaqOuvert, setIndexFaqOuvert] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-brand-black text-center mb-8">
          Questions Fréquentes - {cityName}
        </h2>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 border-l-[6px] ${index % 2 === 0 ? 'border-l-brand-red' : 'border-l-brand-black'} ${indexFaqOuvert === index ? 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] -translate-y-1' : 'hover:shadow-md hover:-translate-y-0.5'}`}
            >
              <button
                className={`w-full text-left px-5 py-4 md:px-6 flex items-center justify-between focus:outline-none transition-colors ${indexFaqOuvert === index ? 'bg-gray-50/50' : 'bg-transparent'}`}
                onClick={() => setIndexFaqOuvert(indexFaqOuvert === index ? null : index)}
                aria-expanded={indexFaqOuvert === index}
              >
                <h3 className={`text-base md:text-lg font-bold pr-8 tracking-tight transition-colors ${indexFaqOuvert === index ? 'text-brand-red' : 'text-gray-900'}`}>
                  {faq.question}
                </h3>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${indexFaqOuvert === index ? 'bg-brand-red text-white shadow-sm' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${indexFaqOuvert === index ? "rotate-180" : ""}`} />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${indexFaqOuvert === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                aria-hidden={indexFaqOuvert !== index}
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
  );
};
