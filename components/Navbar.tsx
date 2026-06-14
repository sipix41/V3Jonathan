import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, CITIES } from "../constants";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-brand-black text-white sticky top-0 z-50 shadow-md border-b-4 border-brand-red">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo Section */}
          <div className="flex-1 flex items-center lg:justify-start xl:justify-center">
            <NavLink
              to="/"
              className="flex items-center gap-2"
              onClick={closeMenu}
              aria-label="Accueil Toiture Jonathan Délisle inc"
            >
              <img
                src="https://i.postimg.cc/FKLjSjn2/thumb-show.jpg"
                alt="Logo Toiture Jonathan Délisle inc"
                width="282"
                height="96"
                loading="eager"
                fetchpriority="high"
                decoding="sync"
                className="h-14 md:h-24 w-auto object-contain hover:opacity-90 transition-opacity w-full h-auto"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block ml-auto mr-4 xl:mr-8">
            <div className="flex items-baseline space-x-1 xl:space-x-3">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? "bg-brand-red text-white shadow-[0_0_15px_rgba(217,35,35,0.5)]"
                        : "text-gray-300 hover:text-white hover:bg-brand-red/10 hover:shadow-[0_0_20px_rgba(217,35,35,0.8)] hover:-translate-y-0.5"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Call CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <NavLink
              to="/soumission"
              className="px-4 py-2 bg-white text-brand-black rounded font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors uppercase whitespace-nowrap hidden xl:block"
            >
              Soumission Gratuite
            </NavLink>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(217,35,35,0.5)]"
            >
              <Phone size={18} className="text-white" />
              <span className="hidden xl:inline">{COMPANY_INFO.phone}</span>
              <span className="xl:hidden">Appeler</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-red"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-zinc-900 border-l border-zinc-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-20 border-b border-zinc-800">
          <span className="text-lg font-bold text-white tracking-widest uppercase">
            Menu
          </span>
          <button
            onClick={closeMenu}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-red"
          >
            <span className="sr-only">Fermer le menu</span>
            <X size={28} />
          </button>
        </div>
        <div className="px-4 py-6 flex flex-col h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="space-y-2 flex-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-bold uppercase transition-all duration-300 ${
                    isActive
                      ? "bg-brand-red text-white"
                      : "text-gray-300 hover:text-white hover:bg-zinc-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-6 border-t border-zinc-800 mt-auto space-y-4">
            <NavLink
              to="/soumission"
              onClick={closeMenu}
              className="flex items-center justify-center gap-3 w-full bg-white text-brand-black px-4 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors uppercase tracking-wide"
            >
              Soumission Gratuite
            </NavLink>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center justify-center gap-3 w-full bg-brand-red text-white px-4 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20"
            >
              <Phone size={20} className="text-white" />
              Appeler : {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
