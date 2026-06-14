import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { COMPANY_INFO } from '../constants';

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText?: ReactNode;
  primaryButtonLink?: string;
  secondaryButtonText?: ReactNode;
  className?: string;
}

export const CTA: React.FC<CTAProps> = ({ 
  title, 
  description, 
  primaryButtonText = "Demandez votre estimation",
  primaryButtonLink = "/contact",
  secondaryButtonText = `Appelez le ${COMPANY_INFO.phone}`,
  className = "py-16"
}) => {
  return (
    <section className={`bg-white text-center border-t-8 border-brand-red ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-black mb-6 uppercase tracking-wider">
          {title}
        </h2>
        <p className="text-gray-600 text-lg lg:text-xl font-medium mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={primaryButtonLink}>
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg hover:shadow-brand-red/40 bg-brand-red text-white hover:bg-red-700">
              {primaryButtonText}
            </Button>
          </Link>
          <a href={`tel:${COMPANY_INFO.phoneClean}`}>
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg hover:shadow-brand-red/40 bg-brand-red text-white hover:bg-red-700">
              {secondaryButtonText}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
