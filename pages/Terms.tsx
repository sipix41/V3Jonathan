import React from 'react';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';

export const Terms: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <SEO title="Terms" description="Découvrez nos services d'expert couvreur pour Terms. Toiture Jonathan Délisle inc dans les Laurentides." canonicalUrl="/terms" />
      <div className="bg-brand-black py-4 text-center text-white">
        <p className="inline-block bg-[#fdf2e9] text-[#b45309] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          Document officiel
        </p>
        <h1 className="text-4xl font-extrabold uppercase">Termes et conditions</h1>
        <p className="mt-4 text-xl text-gray-400">{COMPANY_INFO.name}</p>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto px-4">
          Ces termes et conditions régissent l'utilisation du site https://www.toiturejonathandelisle.ca ainsi que toute demande de soumission soumise à {COMPANY_INFO.name}.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">1.</span> Acceptation des termes
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                En accédant au site https://www.toiturejonathandelisle.ca ou en soumettant une demande de soumission pour des travaux de toiture ou de déneigement de toiture, vous reconnaissez avoir lu, compris et accepté l'intégralité des présents termes et conditions.
              </p>
              <p>
                Ces termes s'appliquent à toute personne ou entreprise qui visite le site, soumet une demande de soumission, ou fait appel aux services de <strong>{COMPANY_INFO.name}</strong> dans les Laurentides ou au Québec.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">2.</span> Services offerts
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                {COMPANY_INFO.name} offre les services suivants dans la région des Laurentides, incluant Sainte-Agathe-des-Monts, Mont-Tremblant, Saint-Jérôme et les environs :
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red">
                <li>Installation et remplacement de toiture de bardeaux d'asphalte résidentielle et commerciale</li>
                <li>Réparation de toiture et inspection de toit</li>
                <li>Pose de bardeaux architecturaux et bardeaux de luxe</li>
                <li>Ventilation et sous-couche de toiture</li>
                <li>Déneigement de toiture résidentielle et commerciale <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded ml-2">Service hivernal</span></li>
                <li>Déneigement d'urgence en cas de surcharge de neige sur le toit</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">3.</span> Demande de soumission
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Toute demande de soumission soumise via le formulaire en ligne sur https://www.toiturejonathandelisle.ca est régie par les conditions suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red mb-6">
                <li>La soumission est <strong>gratuite et sans engagement</strong> de votre part</li>
                <li>Les informations fournies lors de la demande doivent être exactes et complètes afin d'obtenir une évaluation juste</li>
                <li>Une soumission envoyée par {COMPANY_INFO.name} est valide pour une période de <strong>30 jours</strong> à compter de la date d'émission, sauf indication contraire</li>
                <li>Les prix indiqués dans la soumission sont basés sur les informations fournies et peuvent être révisés lors de l'inspection sur place</li>
                <li>La soumission ne constitue pas un contrat. Les travaux ne débuteront qu'après signature d'une entente écrite entre les deux parties</li>
              </ul>
              <div className="bg-brand-black text-white p-4 rounded-xl font-medium">
                Un représentant de {COMPANY_INFO.name} vous contactera dans les 24 à 48 heures ouvrables suivant la réception de votre demande de soumission.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">4.</span> Conditions de réalisation des travaux
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                La réalisation des travaux de toiture par {COMPANY_INFO.name} est soumise aux conditions suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red">
                <li>Les travaux débutent uniquement après la signature du contrat et, le cas échéant, le versement d'un acompte convenu</li>
                <li>Les délais d'exécution sont fournis à titre indicatif et peuvent varier selon les conditions météorologiques, la disponibilité des matériaux ou des contraintes imprévues sur le chantier</li>
                <li>Le client est responsable de dégager l'accès à la propriété et aux zones de travail avant le début des travaux</li>
                <li>{COMPANY_INFO.name} se réserve le droit de suspendre les travaux en cas de conditions météorologiques dangereuses ou inadaptées</li>
                <li>Toute modification au contrat original doit être approuvée par écrit par les deux parties avant d'être mise en œuvre</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">5.</span> Conditions spécifiques — Déneigement de toiture <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded ml-2 font-normal">Hivernal</span>
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Le service de déneigement de toiture offert par {COMPANY_INFO.name} dans les Laurentides est soumis aux conditions particulières suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red">
                <li>Les interventions de déneigement sont effectuées selon les disponibilités et les conditions météorologiques</li>
                <li>En cas de demande urgente, {COMPANY_INFO.name} fera tout son possible pour intervenir dans les meilleurs délais, sans garantie de disponibilité immédiate</li>
                <li>Le client doit s'assurer que l'accès à la propriété est dégagé (entrée, stationnement) pour permettre l'intervention de l'équipe</li>
                <li>{COMPANY_INFO.name} ne peut être tenu responsable des dommages préexistants sur la toiture découverts lors d'une intervention de déneigement</li>
                <li>Les tarifs de déneigement peuvent varier selon la superficie du toit, la quantité de neige accumulée et l'accessibilité du toit</li>
                <li>Un contrat saisonnier de déneigement peut être établi avec des conditions tarifaires avantageuses — contactez-nous pour plus d'informations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">6.</span> Modalités de paiement
            </h2>
            <div className="text-gray-600 space-y-4">
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red">
                <li>Les modalités de paiement sont précisées dans chaque contrat ou soumission émise par {COMPANY_INFO.name}</li>
                <li>Un acompte peut être requis avant le début des travaux, selon la nature et l'envergure du projet</li>
                <li>Le solde est exigible à la completion des travaux, sauf entente contraire stipulée dans le contrat</li>
                <li>Tout retard de paiement peut entraîner des frais d'intérêts conformément aux dispositions légales en vigueur au Québec</li>
                <li>Les taxes applicables (TPS et TVQ) sont en sus des montants indiqués, sauf mention contraire</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">7.</span> Garanties
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                {COMPANY_INFO.name} s'engage à offrir des travaux de qualité dans les Laurentides. Les garanties applicables sont les suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red">
                <li>Les garanties sur la main-d'œuvre et les matériaux sont précisées dans chaque contrat signé</li>
                <li>Les garanties fabricants sur les bardeaux d'asphalte s'appliquent selon les termes du fabricant concerné</li>
                <li>Les garanties ne couvrent pas les dommages causés par des événements climatiques exceptionnels, un usage inapproprié ou des modifications effectuées par des tiers</li>
                <li>Pour toute réclamation sous garantie, le client doit contacter {COMPANY_INFO.name} par téléphone au {COMPANY_INFO.phone} ou par courriel à {COMPANY_INFO.email}</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">8.</span> Limitation de responsabilité
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                {COMPANY_INFO.name} ne peut être tenu responsable :
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red">
                <li>Des dommages indirects, accessoires ou consécutifs découlant de l'utilisation de ses services</li>
                <li>Des délais causés par des circonstances hors de son contrôle (conditions météorologiques, pénurie de matériaux, force majeure)</li>
                <li>Des dommages préexistants à la structure du bâtiment découverts lors des travaux de toiture ou de déneigement</li>
                <li>Des informations inexactes fournies par le client lors de la demande de soumission</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">9.</span> Propriété intellectuelle
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                L'ensemble du contenu présent sur https://www.toiturejonathandelisle.ca — incluant les textes, images, logos, photos de réalisations de toiture et déneigement — est la propriété exclusive de {COMPANY_INFO.name}. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">10.</span> Utilisation du site web
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>En utilisant le site https://www.toiturejonathandelisle.ca, vous vous engagez à :</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-brand-red">
                <li>Ne pas utiliser le site à des fins illégales ou frauduleuses</li>
                <li>Ne pas tenter de perturber le fonctionnement du site ou de ses serveurs</li>
                <li>Fournir des informations véridiques lors de toute demande de soumission ou de contact</li>
                <li>Ne pas reproduire ou distribuer le contenu du site sans autorisation écrite de {COMPANY_INFO.name}.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red">11.</span> Droit applicable et juridiction
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Les présents termes et conditions sont régis par les lois en vigueur dans la province de Québec et les lois fédérales du Canada applicables. Tout litige découlant de l'utilisation du site ou des services de {COMPANY_INFO.name} sera soumis à la juridiction exclusive des tribunaux compétents du Québec.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-black mb-4 flex items-center gap-3">
              <span className="text-brand-red hidden">12.</span>
            </h2>
            <div className="text-gray-600 space-y-4">
              <p>
                {COMPANY_INFO.name} se réserve le droit de modifier les présents termes et conditions en tout temps. Les modifications entrent en vigueur dès leur publication sur https://www.toiturejonathandelisle.ca. Il est de votre responsabilité de consulter régulièrement cette page. L'utilisation continue du site après modification vaut acceptation des nouveaux termes.
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
