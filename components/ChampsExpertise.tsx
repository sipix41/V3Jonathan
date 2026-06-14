import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Hammer, Search, Snowflake } from 'lucide-react';
import { SERVICES_SUMMARY } from '../constants';

const IconMap: Record<string, React.ElementType> = {
  Layers,
  Hammer,
  Search,
  Snowflake
};

export const ChampsExpertise: React.FC<{ description?: React.ReactNode }> = ({ description }) => {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-brand-black uppercase mb-4 tracking-tight">Nos Champs <span className="text-brand-red">d'Expertise</span></h2>
          <div className="w-20 h-1 bg-brand-red mx-auto"></div>
          {description ? (
            <div className="mt-8 text-lg md:text-xl text-gray-700 font-medium space-y-4 text-left w-full">
              {description}
            </div>
          ) : (
            <p className="mt-4 text-lg md:text-xl text-gray-600 font-medium">Solutions complètes pour toitures résidentielles et commerciales.</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_SUMMARY.map((service, index) => (
            <div key={service.id} className={`group bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-[6px] ${index % 2 === 0 ? 'border-brand-red' : 'border-brand-black'} relative overflow-hidden flex flex-col h-full border-t border-r border-b border-gray-100`}>
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-all duration-500 group-hover:bg-brand-red/5 group-hover:scale-110"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 border border-brand-red/10">
                    {/* Render standard icon from mapping */}
                    {React.createElement(IconMap[service.iconName] || Search, { 
                      className: "w-6 h-6 text-brand-red transition-colors duration-300" 
                    })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight leading-snug">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow">{service.description}</p>
                
                <Link to={service.id === 'bardeaux' ? "/services/bardeaux" : service.id === 'reparation' ? "/services/reparations" : service.id === 'deneigement' ? '/services/deneigement' : "/services"} className="inline-flex items-center text-brand-black font-bold uppercase text-xs tracking-wider group-hover:text-brand-red transition-colors mt-auto w-fit">
                  <span>En savoir plus</span>
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform text-brand-red" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
