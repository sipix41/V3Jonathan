import React from 'react';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';

export const Copyright: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO noindex={true} title="Droits d'auteur" description="Droits d'auteur" />
       <div className="bg-brand-black py-4 text-center text-white">
        <p className="inline-block bg-[#fdf2e9] text-[#b45309] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          Avis légal
        </p>
        <h1 className="text-4xl font-extrabold uppercase">Droits d'auteur et propriété intellectuelle</h1>
        <p className="mt-4 text-xl text-gray-400">{COMPANY_INFO.name}</p>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto px-4">
          Cette page décrit les droits d'auteur et les conditions d'utilisation du contenu publié sur https://www.toiturejonathandelisle.ca
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">


        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">1.</span> Titulaire des droits
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                L'ensemble du contenu présent sur le site https://www.toiturejonathandelisle.ca est la propriété exclusive de <strong>{COMPANY_INFO.name}</strong>, entrepreneur en toiture de bardeaux et déneigement de toiture basé à Sainte-Agathe-des-Monts, dans les Laurentides au Québec.
              </p>
              <p>
                {COMPANY_INFO.name} est le seul titulaire de tous les droits d'auteur relatifs à ce site, sauf mention contraire explicite.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">2.</span> Contenu protégé
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Sont protégés par les droits d'auteur, conformément à la <em>Loi sur le droit d'auteur</em> du Canada (L.R.C. 1985, ch. C-42) et aux lois applicables au Québec :
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                <li>Les textes, descriptions de services et contenus rédactionnels publiés sur le site</li>
                <li>Les photos de réalisations de toiture de bardeaux et de déneigement de toiture effectuées par {COMPANY_INFO.name}</li>
                <li>Le logo, la marque et l'identité visuelle de {COMPANY_INFO.name}</li>
                <li>La structure, la mise en page et le design du site https://www.toiturejonathandelisle.ca</li>
                <li>Les formulaires de demande de soumission et tout document téléchargeable disponible sur le site</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">3.</span> Utilisations interdites
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>Sans l'autorisation écrite préalable de {COMPANY_INFO.name}, il est strictement interdit de :</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                <li>Reproduire, copier ou distribuer tout ou partie du contenu de ce site, quel que soit le support (numérique, imprimé, etc.)</li>
                <li>Utiliser les photos de réalisations de toiture ou de déneigement de toiture à des fins commerciales ou promotionnelles</li>
                <li>Republier ou partager le contenu du site sans mention claire de la source et sans lien vers https://www.toiturejonathandelisle.ca</li>
                <li>Utiliser le logo ou la marque {COMPANY_INFO.name} de quelque façon que ce soit</li>
                <li>Extraire ou scraper le contenu du site de manière automatisée</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">4.</span> Utilisations autorisées
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>Les utilisations suivantes sont permises sans autorisation préalable :</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                <li>Partager un lien vers le site https://www.toiturejonathandelisle.ca sur les réseaux sociaux ou tout autre média</li>
                <li>Citer brièvement un extrait du site à des fins d'information, à condition de mentionner clairement {COMPANY_INFO.name} comme source et d'inclure un lien vers le site</li>
                <li>Imprimer des pages du site à titre personnel et non commercial</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">5.</span> Marques de commerce
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Le nom <strong>{COMPANY_INFO.name}</strong>, son logo et toute autre dénomination distinctive associée à ses services de toiture de bardeaux et de déneigement de toiture dans les Laurentides constituent des marques appartenant à l'entreprise. Toute utilisation non autorisée de ces marques est formellement interdite et pourrait faire l'objet de poursuites.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">6.</span> Contenu tiers
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Certains éléments présents sur ce site (polices de caractères, icônes, outils de cartographie, etc.) peuvent être soumis aux droits d'auteur de leurs propriétaires respectifs. Ces éléments sont utilisés conformément aux licences applicables. {COMPANY_INFO.name} ne revendique aucun droit sur ces contenus tiers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">7.</span> Signalement d'une violation
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Si vous constatez une utilisation non autorisée du contenu de {COMPANY_INFO.name} ou si vous estimez que votre propre contenu a été utilisé sans permission sur ce site, veuillez nous en informer immédiatement aux coordonnées ci-dessous. Nous traiterons toute réclamation sérieuse avec diligence.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">8.</span> Droit applicable
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Les présents droits d'auteur et avis légaux sont régis par la <em>Loi sur le droit d'auteur</em> du Canada ainsi que par les lois de la province de Québec. Tout litige sera soumis à la juridiction des tribunaux compétents du Québec.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red hidden">9.</span> Demande d'autorisation ou question légale
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Pour toute demande d'autorisation d'utilisation de contenu, signalement de violation ou question relative aux droits d'auteur, contactez <strong>{COMPANY_INFO.name}</strong> :
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
