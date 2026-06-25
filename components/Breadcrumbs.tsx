import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CITIES, BASE_URL } from '../constants';

const routeNameMap: Record<string, string> = {
  'services': 'Services',
  'bardeaux': 'Bardeaux d\'asphalte',
  'iko': 'IKO',
  'bp': 'BP',
  'reparations': 'Réparations & Rénovations',
  'inspection': 'Inspection',
  'deneigement': 'Déneigement',
  'a-propos': 'À propos',
  'realisations': 'Réalisations',
  'faq': 'FAQ',
  'contact': 'Contact',
  'soumission': 'Soumission',
  'carriere': 'Carrière',
  'partenaires': 'Partenaires',
  'confidentialite': 'Confidentialité',
  'termes': 'Termes et conditions',
  'droits-auteur': 'Droits d\'auteur',
  'laurentides': 'Les Laurentides',
};

// Add cities to mapping
CITIES.forEach(city => {
  routeNameMap[city.path.replace('/', '')] = city.name;
});

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null; // Don't show breadcrumbs on home page
  }

  // Build breadcrumbs path
  const breadcrumbsList = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    const name = routeNameMap[value] || value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

    return { name, to };
  });

  // Prepare Schema.org JSON-LD for breadcrumbs SEO
  const schemaListElements = breadcrumbsList.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 2, // Home is 1
    "name": crumb.name,
    "item": `${BASE_URL}${crumb.to}`
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": `${BASE_URL}/`
      },
      ...schemaListElements
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <nav aria-label="Fil d'ariane" className="bg-slate-50 py-3 border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm md:text-base text-blue-700/80 font-medium tracking-wide">
            <li className="flex items-center gap-1.5 hover:text-brand-red transition-colors">
              <Home className="w-4 h-4 flex-shrink-0" />
              <Link to="/">Accueil</Link>
            </li>
            
            {breadcrumbsList.map((crumb, index) => {
              const isLast = index === breadcrumbsList.length - 1;

              return (
                <li key={crumb.to} className="flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  {isLast ? (
                    <span className="text-slate-600" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link to={crumb.to} className="hover:text-brand-red transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};
