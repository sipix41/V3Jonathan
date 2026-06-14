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
import { CITIES } from "./constants";

// Lazy loading pages for performance
const Home = React.lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const Services = React.lazy(() => import("./pages/Services").then((module) => ({ default: module.Services })));
const About = React.lazy(() => import("./pages/About").then((module) => ({ default: module.About })));
const Portfolio = React.lazy(() => import("./pages/Portfolio").then((module) => ({ default: module.Portfolio })));
const Contact = React.lazy(() => import("./pages/Contact").then((module) => ({ default: module.Contact })));
const Faq = React.lazy(() => import("./pages/Faq").then((module) => ({ default: module.Faq })));
const Careers = React.lazy(() => import("./pages/Careers").then((module) => ({ default: module.Careers })));
const Partners = React.lazy(() => import("./pages/Partners").then((module) => ({ default: module.Partners })));
const DevenirPartenaire = React.lazy(() => import("./pages/DevenirPartenaire").then((module) => ({ default: module.DevenirPartenaire })));
const Privacy = React.lazy(() => import("./pages/Privacy").then((module) => ({ default: module.Privacy })));
const Terms = React.lazy(() => import("./pages/Terms").then((module) => ({ default: module.Terms })));
const Copyright = React.lazy(() => import("./pages/Copyright").then((module) => ({ default: module.Copyright })));
const Soumission = React.lazy(() => import("./pages/Soumission").then((module) => ({ default: module.Soumission })));
const Bardeaux = React.lazy(() => import("./pages/Bardeaux").then((module) => ({ default: module.Bardeaux })));
const Reparations = React.lazy(() => import("./pages/Reparations").then((module) => ({ default: module.Reparations })));
const Deneigement = React.lazy(() => import("./pages/Deneigement").then((module) => ({ default: module.Deneigement })));
const Iko = React.lazy(() => import("./pages/Iko").then((module) => ({ default: module.Iko })));
const BP = React.lazy(() => import("./pages/BP").then((module) => ({ default: module.BP })));
const Inspection = React.lazy(() => import("./pages/Inspection").then((module) => ({ default: module.Inspection })));
const NotFound = React.lazy(() => import("./pages/NotFound").then((module) => ({ default: module.NotFound })));
const CityTemplate = React.lazy(() => import("./pages/CityTemplate").then((module) => ({ default: module.CityTemplate })));

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
                
                {/* Dynamically render all city routes using the CityTemplate */}
                {CITIES.map(city => (
                  <Route key={city.path} path={city.path} element={<CityTemplate cityName={city.name} cityPath={city.path} />} />
                ))}

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
