import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { GlobalSchema } from "./components/GlobalSchema";
import { CookieBanner } from "./components/CookieBanner";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Lazy loading pages for performance
const Home = React.lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home })),
);
const Services = React.lazy(() =>
  import("./pages/Services").then((module) => ({ default: module.Services })),
);
const About = React.lazy(() =>
  import("./pages/About").then((module) => ({ default: module.About })),
);
const Portfolio = React.lazy(() =>
  import("./pages/Portfolio").then((module) => ({ default: module.Portfolio })),
);
const Contact = React.lazy(() =>
  import("./pages/Contact").then((module) => ({ default: module.Contact })),
);
const Faq = React.lazy(() =>
  import("./pages/Faq").then((module) => ({ default: module.Faq })),
);
const Careers = React.lazy(() =>
  import("./pages/Careers").then((module) => ({ default: module.Careers })),
);
const Partners = React.lazy(() =>
  import("./pages/Partners").then((module) => ({ default: module.Partners })),
);
const DevenirPartenaire = React.lazy(() =>
  import("./pages/DevenirPartenaire").then((module) => ({ default: module.DevenirPartenaire })),
);
const Privacy = React.lazy(() =>
  import("./pages/Privacy").then((module) => ({ default: module.Privacy })),
);
const Terms = React.lazy(() =>
  import("./pages/Terms").then((module) => ({ default: module.Terms })),
);
const Copyright = React.lazy(() =>
  import("./pages/Copyright").then((module) => ({ default: module.Copyright })),
);
const SainteAgatheDesMonts = React.lazy(() =>
  import("./pages/SainteAgatheDesMonts").then((module) => ({ default: module.SainteAgatheDesMonts })),
);
const SaintSauveur = React.lazy(() =>
  import("./pages/SaintSauveur").then((module) => ({ default: module.SaintSauveur })),
);
const MontTremblant = React.lazy(() =>
  import("./pages/MontTremblant").then((module) => ({ default: module.MontTremblant })),
);
const ValDavid = React.lazy(() =>
  import("./pages/ValDavid").then((module) => ({ default: module.ValDavid })),
);
const SaintJerome = React.lazy(() =>
  import("./pages/SaintJerome").then((module) => ({ default: module.SaintJerome })),
);
const MontBlanc = React.lazy(() =>
  import("./pages/MontBlanc").then((module) => ({ default: module.MontBlanc })),
);
const Piedmont = React.lazy(() =>
  import("./pages/Piedmont").then((module) => ({ default: module.Piedmont })),
);
const ValMorin = React.lazy(() =>
  import("./pages/ValMorin").then((module) => ({ default: module.ValMorin })),
);
const SainteAdele = React.lazy(() =>
  import("./pages/SainteAdele").then((module) => ({ default: module.SainteAdele })),
);
const SainteAnneDesLacs = React.lazy(() =>
  import("./pages/SainteAnneDesLacs").then((module) => ({ default: module.SainteAnneDesLacs })),
);
const Prevost = React.lazy(() =>
  import("./pages/Prevost").then((module) => ({ default: module.Prevost })),
);
const Mirabel = React.lazy(() =>
  import("./pages/Mirabel").then((module) => ({ default: module.Mirabel })),
);
const SaintHippolyte = React.lazy(() =>
  import("./pages/SaintHippolyte").then((module) => ({ default: module.SaintHippolyte })),
);
const MorinHeights = React.lazy(() =>
  import("./pages/MorinHeights").then((module) => ({ default: module.MorinHeights })),
);
const LacSuperieur = React.lazy(() =>
  import("./pages/LacSuperieur").then((module) => ({ default: module.LacSuperieur })),
);
const SainteLucieDesLaurentides = React.lazy(() =>
  import("./pages/SainteLucieDesLaurentides").then((module) => ({ default: module.SainteLucieDesLaurentides })),
);
const Laurentides = React.lazy(() =>
  import("./pages/Laurentides").then((module) => ({ default: module.Laurentides })),
);

const Arundel = React.lazy(() => import("./pages/Arundel").then((m) => ({ default: m.Arundel })));
const Bellefeuille = React.lazy(() => import("./pages/Bellefeuille").then((m) => ({ default: m.Bellefeuille })));
const Lantier = React.lazy(() => import("./pages/Lantier").then((m) => ({ default: m.Lantier })));
const MontOlympia = React.lazy(() => import("./pages/MontOlympia").then((m) => ({ default: m.MontOlympia })));
const SaintAdolpheDHoward = React.lazy(() => import("./pages/SaintAdolpheDHoward").then((m) => ({ default: m.SaintAdolpheDHoward })));
const SaintColomban = React.lazy(() => import("./pages/SaintColomban").then((m) => ({ default: m.SaintColomban })));
const SaintFaustinLacCarre = React.lazy(() => import("./pages/SaintFaustinLacCarre").then((m) => ({ default: m.SaintFaustinLacCarre })));
const SainteMargueriteDuLacMasson = React.lazy(() => import("./pages/SainteMargueriteDuLacMasson").then((m) => ({ default: m.SainteMargueriteDuLacMasson })));
const SainteSophie = React.lazy(() => import("./pages/SainteSophie").then((m) => ({ default: m.SainteSophie })));
const ValDesLacs = React.lazy(() => import("./pages/ValDesLacs").then((m) => ({ default: m.ValDesLacs })));
const WentworthNord = React.lazy(() => import("./pages/WentworthNord").then((m) => ({ default: m.WentworthNord })));

const Amherst = React.lazy(() => import("./pages/Amherst").then((module) => ({ default: module.Amherst })));
const Esterel = React.lazy(() => import("./pages/Esterel").then((module) => ({ default: module.Esterel })));
const MilleIsles = React.lazy(() => import("./pages/MilleIsles").then((module) => ({ default: module.MilleIsles })));
const Soumission = React.lazy(() =>
  import("./pages/Soumission").then((module) => ({
    default: module.Soumission,
  })),
);
const Bardeaux = React.lazy(() =>
  import("./pages/Bardeaux").then((module) => ({ default: module.Bardeaux })),
);
const Reparations = React.lazy(() =>
  import("./pages/Reparations").then((module) => ({
    default: module.Reparations,
  })),
);
const Deneigement = React.lazy(() =>
  import("./pages/Deneigement").then((module) => ({
    default: module.Deneigement,
  })),
);
const Iko = React.lazy(() =>
  import("./pages/Iko").then((module) => ({ default: module.Iko })),
);
const BP = React.lazy(() =>
  import("./pages/BP").then((module) => ({ default: module.BP })),
);
const Inspection = React.lazy(() =>
  import("./pages/Inspection").then((module) => ({
    default: module.Inspection,
  })),
);

const NotFound = React.lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound })),
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <GlobalSchema />
      <Router>
        <ScrollToTop />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-brand-red focus:text-white focus:font-bold focus:top-0 focus:left-0">
          Aller au contenu principal
        </a>
        <div className="flex flex-col min-h-screen font-sans text-brand-black">
          <Navbar />
          <Breadcrumbs />
          <main id="main-content" className="flex-grow">
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="min-h-screen flex items-center justify-center bg-white" aria-busy="true" aria-label="Chargement">
                    <div className="w-16 h-16 border-4 border-brand-red border-t-transparent rounded-full animate-spin"></div>
                  </div>
                }
              >
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/bardeaux" element={<Bardeaux />} />
                <Route path="/services/bardeaux/iko" element={<Iko />} />
                <Route path="/services/bardeaux/bp" element={<BP />} />
                <Route path="/services/reparations" element={<Reparations />} />
                <Route path="/services/inspection" element={<Inspection />} />
                <Route path="/services/deneigement" element={<Deneigement />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/sainte-agathe-des-monts" element={<SainteAgatheDesMonts />} />
                <Route path="/saint-sauveur" element={<SaintSauveur />} />
                <Route path="/mont-tremblant" element={<MontTremblant />} />
                <Route path="/mont-blanc" element={<MontBlanc />} />
                <Route path="/piedmont" element={<Piedmont />} />
                <Route path="/val-david" element={<ValDavid />} />
                <Route path="/val-morin" element={<ValMorin />} />
                <Route path="/sainte-adele" element={<SainteAdele />} />
                <Route path="/sainte-anne-des-lacs" element={<SainteAnneDesLacs />} />
                <Route path="/prevost" element={<Prevost />} />
                <Route path="/mirabel" element={<Mirabel />} />
                <Route path="/saint-jerome" element={<SaintJerome />} />
                <Route path="/saint-hippolyte" element={<SaintHippolyte />} />
                <Route path="/morin-heights" element={<MorinHeights />} />
                <Route path="/lac-superieur" element={<LacSuperieur />} />
                <Route path="/sainte-lucie-des-laurentides" element={<SainteLucieDesLaurentides />} />
                <Route path="/laurentides" element={<Laurentides />} />
                <Route path="/arundel" element={<Arundel />} />
                <Route path="/bellefeuille" element={<Bellefeuille />} />
                <Route path="/lantier" element={<Lantier />} />
                <Route path="/mont-olympia" element={<MontOlympia />} />
                <Route path="/saint-adolphe-dhoward" element={<SaintAdolpheDHoward />} />
                <Route path="/saint-colomban" element={<SaintColomban />} />
                <Route path="/saint-faustin-lac-carre" element={<SaintFaustinLacCarre />} />
                <Route path="/sainte-marguerite-du-lac-masson" element={<SainteMargueriteDuLacMasson />} />
                <Route path="/sainte-sophie" element={<SainteSophie />} />
                <Route path="/val-des-lacs" element={<ValDesLacs />} />
                <Route path="/wentworth-nord" element={<WentworthNord />} />
                <Route path="/amherst" element={<Amherst />} />
                <Route path="/esterel" element={<Esterel />} />
                <Route path="/mille-isles" element={<MilleIsles />} />
                <Route path="/realisations" element={<Portfolio />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/soumission" element={<Soumission />} />
                <Route path="/carriere" element={<Careers />} />
                <Route path="/partenaires" element={<Partners />} />
                <Route path="/devenir-partenaire" element={<DevenirPartenaire />} />
                <Route path="/confidentialite" element={<Privacy />} />
                <Route path="/termes" element={<Terms />} />
                <Route path="/droits-auteur" element={<Copyright />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
