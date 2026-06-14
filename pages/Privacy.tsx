import React from 'react';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';

export const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO noindex={true} title="Politique de confidentialité" description="Politique de confidentialité" />
      <div className="bg-brand-black py-4 text-center text-white">
        <p className="inline-block bg-[#fdf2e9] text-[#b45309] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          Politique officielle
        </p>
        <h1 className="text-4xl font-extrabold uppercase">Politique de <span className="text-brand-red">confidentialité</span></h1>
        <p className="mt-4 text-xl text-gray-400">{COMPANY_INFO.name}</p>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto px-4">
          Cette politique décrit comment {COMPANY_INFO.name} collecte, utilise et protège vos renseignements personnels conformément à la Loi 25 du Québec.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">1.</span> Identification de l'entreprise
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                La présente politique de confidentialité s'applique à l'ensemble des services offerts par <strong>{COMPANY_INFO.name}</strong>, entrepreneur spécialisé en toiture de bardeaux d'asphalte, toiture résidentielle et commerciale, ainsi qu'en déneigement de toiture hivernal dans la région des Laurentides, incluant Sainte-Agathe-des-Monts, Mont-Tremblant, Saint-Jérôme et les municipalités environnantes.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-6">
                <ul className="space-y-2">
                  <li><strong>Lieu :</strong> {COMPANY_INFO.address}, {COMPANY_INFO.region}</li>
                  <li><strong>Téléphone :</strong> <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-brand-red hover:underline">{COMPANY_INFO.phone}</a></li>
                  <li><strong>Courriel :</strong> <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-red hover:underline">{COMPANY_INFO.email}</a></li>
                  <li><strong>Site web :</strong> <a href="https://www.toiturejonathandelisle.ca" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">https://www.toiturejonathandelisle.ca</a></li>
                </ul>
              </div>
              <p>
                En naviguant sur ce site web ou en nous contactant pour vos projets de toiture ou de déneigement dans les Laurentides, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">2.</span> Renseignements collectés
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Lorsque vous nous contactez pour une soumission de toiture, une inspection de toit, un service de déneigement de toiture ou tout autre service, nous pouvons collecter les informations suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red">
                <li>Nom complet et coordonnées (téléphone, courriel, adresse de la propriété)</li>
                <li>Description de votre projet (remplacement de bardeaux, réparation de toit, toiture neuve, déneigement d'urgence, etc.)</li>
                <li>Informations techniques liées à votre propriété dans les Laurentides ou au Québec</li>
                <li>Données de navigation sur notre site (adresse IP, type de navigateur, pages visitées)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">3.</span> Utilisation des renseignements
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Les renseignements transmis à {COMPANY_INFO.name} sont utilisés exclusivement pour :
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red mb-4">
                <li>Répondre à vos demandes de soumission de toiture, de déneigement de toit ou d'information sur nos services</li>
                <li>Planifier et réaliser vos travaux de toiture résidentielle ou commerciale dans les Laurentides, été comme hiver</li>
                <li>Coordonner nos interventions de déneigement de toiture lors des périodes hivernales dans les Laurentides</li>
                <li>Vous envoyer des communications pertinentes liées à l'entretien, au remplacement de votre toit ou au déneigement saisonnier</li>
                <li>Améliorer la qualité de notre site web et de nos services d'entrepreneur en toiture au Québec</li>
                <li>Respecter nos obligations légales et contractuelles</li>
              </ul>
              <p className="font-semibold text-brand-black">
                {COMPANY_INFO.name} ne vend, ne loue ni ne partage vos informations personnelles à des tiers à des fins commerciales.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">4.</span> Partage des informations
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>Vos renseignements personnels peuvent être partagés uniquement dans les cas suivants :</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red">
                <li>Avec nos sous-traitants ou fournisseurs de matériaux de toiture impliqués dans la réalisation de vos travaux, dans la mesure strictement nécessaire</li>
                <li>Lorsque la loi québécoise ou canadienne l'exige (ex. : ordonnances judiciaires, autorités gouvernementales)</li>
                <li>Avec votre consentement explicite</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">5.</span> Témoins (cookies)
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Le site web de {COMPANY_INFO.name} peut utiliser des témoins (cookies) pour améliorer votre expérience et analyser l'achalandage. Ces fichiers permettent notamment de :
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red mb-4">
                <li>Mémoriser vos préférences de navigation</li>
                <li>Analyser l'utilisation du site à des fins statistiques (ex. : Google Analytics) afin d'améliorer nos services de toiture et de déneigement dans les Laurentides</li>
              </ul>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les témoins, bien que cela puisse affecter certaines fonctionnalités du site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">6.</span> Sécurité des données
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                {COMPANY_INFO.name} met en place des mesures raisonnables afin de protéger vos renseignements personnels contre tout accès non autorisé, divulgation, altération ou destruction. Cependant, aucune transmission de données sur Internet n'est entièrement sécurisée.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">7.</span> Conservation des données
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Nous conservons vos renseignements personnels aussi longtemps que nécessaire pour atteindre les fins pour lesquelles ils ont été collectés — notamment pour assurer le suivi de vos travaux de toiture ou de vos contrats de déneigement saisonnier — ou pour nous conformer à nos obligations légales. Une fois ces fins atteintes, vos données sont supprimées ou anonymisées.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">8.</span> Vos droits (Loi 25 du Québec)
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Conformément à la <em>Loi 25</em> (Loi modernisant des dispositions législatives en matière de protection des renseignements personnels au Québec), vous avez le droit de :
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red mb-4">
                <li>Accéder à vos renseignements personnels détenus par {COMPANY_INFO.name}</li>
                <li>Demander la rectification de renseignements inexacts</li>
                <li>Retirer votre consentement à certaines utilisations de vos données</li>
                <li>Demander la suppression de vos renseignements dans les cas prévus par la loi</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous au <strong>{COMPANY_INFO.phone}</strong> ou à <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-red hover:underline">{COMPANY_INFO.email}</a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">9.</span> Liens externes
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Le site de {COMPANY_INFO.name} peut contenir des liens vers des sites web tiers (fournisseurs de matériaux, associations de l'industrie de la toiture au Québec, etc.). {COMPANY_INFO.name} n'est pas responsable des pratiques de confidentialité de ces sites et vous encourage à consulter leurs politiques respectives.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">10.</span> Modifications de la politique
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                {COMPANY_INFO.name} se réserve le droit de modifier cette politique en tout temps afin de refléter les évolutions légales ou les changements dans nos pratiques d'affaires en tant qu'entrepreneur en toiture et déneigement dans les Laurentides. Toute modification sera publiée sur cette page avec une date de mise à jour.
              </p>
            </div>
          </section>
        </div>

      </div>

      {/* Full-width Red & White Contact Footer Card */}
      <div className="w-full bg-white border-t-[6px] border-brand-red py-4 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-extrabold text-2xl mb-2 text-brand-red uppercase">{COMPANY_INFO.name}</h3>
          <p className="text-gray-600 font-medium mb-8">Toiture de bardeaux & déneigement de toiture — {COMPANY_INFO.address}, {COMPANY_INFO.region}</p>
          <div className="flex flex-col md:flex-row flex-wrap md:items-start gap-8 md:gap-12">
            <div className="flex-1 min-w-[200px]">
              <span className="text-brand-red font-semibold uppercase tracking-wider block mb-1 text-xs">Téléphone</span>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-brand-black hover:text-brand-red transition-colors text-lg md:text-xl font-bold">{COMPANY_INFO.phone}</a>
            </div>
            <div className="flex-1 min-w-[200px]">
              <span className="text-brand-red font-semibold uppercase tracking-wider block mb-1 text-xs">Courriel</span>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-black hover:text-brand-red transition-colors text-lg md:text-xl font-bold break-all">{COMPANY_INFO.email}</a>
            </div>
            <div className="flex-1 min-w-[200px]">
              <span className="text-brand-red font-semibold uppercase tracking-wider block mb-1 text-xs">Site web</span>
              <a href="https://www.toiturejonathandelisle.ca" target="_blank" rel="noopener noreferrer" className="text-brand-black hover:text-brand-red transition-colors text-lg md:text-xl font-bold break-all">www.toiturejonathandelisle.ca</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
