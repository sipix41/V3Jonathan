import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ChevronRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';
import { useFormSubmit } from '../src/hooks/useFormSubmit';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  _honey: string;
};

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    mode: "onBlur"
  });

  const { submitStatus, submitForm } = useFormSubmit();

  const onSubmit = async (data: FormData) => {
    if (data._honey) return; // Spam detected

    const subject = `Nouvelle demande de soumission - ${data.service} - ${data.name}`;
    const formattedData = {
      Nom: data.name,
      Téléphone: data.phone,
      Courriel: data.email,
      Service: data.service,
      Message: data.message
    };

    await submitForm(formattedData, subject);
    if (submitStatus !== 'error') {
      reset();
    }
  };

  // Helper for input classes based on error state
  const getInputClass = (hasError: boolean) =>
    `w-full px-4 py-3 border rounded-md bg-white text-gray-900 placeholder-gray-400 transition-all outline-none ${
      hasError 
        ? "border-brand-red focus:ring-2 focus:ring-brand-red" 
        : "border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-brand-red"
    }`;

  return (
    <div className="bg-white">
      <SEO 
        title="Contactez Nous | Toiture Jonathan Délisle Inc | Soumission Gratuite" 
        description="Besoin d'un expert pour votre toiture dans les Laurentides? Contactez Toiture Jonathan Délisle Inc. Remplissez notre formulaire pour une soumission gratuite." 
        canonicalUrl="/contact" 
      />
      <div className="bg-brand-black py-4 flex flex-col items-center text-center text-white">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase mb-4">
          <Phone className="w-4 h-4" /> NOUS JOINDRE
        </div>
        <h1 className="text-4xl font-extrabold uppercase">Contactez-<span className="text-brand-red">nous</span></h1>
        <p className="mt-4 text-xl text-gray-400">Une question? <span className="text-brand-red">Une urgence?</span> Une soumission? Nous sommes là.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase border-b-2 border-brand-red inline-block pb-2">Nos Coordonnées</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Phone className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Téléphone</h3>
                  <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-xl font-bold text-brand-black hover:text-brand-red">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Mail className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Courriel</h3>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg text-brand-black hover:text-brand-red">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <MapPin className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Localisation</h3>
                  <p className="text-gray-600">
                    <Link to="/sainte-agathe-des-monts" className="text-brand-red font-bold hover:underline">Sainte-Agathe-des-Monts</Link>,<br/>
                    Laurentides
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Clock className="text-brand-red w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Heures d'ouverture</h3>
                  <p className="text-gray-600">Lundi - Vendredi : 7h00 - 17h00</p>
                  <p className="text-gray-600">Samedi - Dimanche : Urgences seulement</p>
                </div>
              </div>

              <div className="pt-8 ml-16">
                <h3 className="font-bold text-lg mb-4">Suivez-nous sur</h3>
                <div className="flex flex-row gap-4">
                  <a 
                    href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-14 h-14 bg-[#1877F2] text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(24,119,242,0.8)]"
                  aria-label="Facebook"
                >
                  <Facebook size={28} />
                </a>
                <a 
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(225,48,108,0.7)]"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-gray-100 border-t-[8px] border-t-brand-red">
            <h2 className="text-3xl font-extrabold text-brand-black mb-6 uppercase tracking-tight">Nous contacter</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <input type="text" {...register("_honey")} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nom complet <span className="text-brand-red">*</span></label>
                <input 
                  type="text" 
                  {...register("name", { 
                    required: "Le nom complet est requis",
                    minLength: { value: 2, message: "Le nom doit contenir au moins 2 caractères" }
                  })}
                  className={getInputClass(!!errors.name)}
                  placeholder="Votre nom"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span role="alert" className="text-brand-red text-sm mt-1 block font-medium">{errors.name.message}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Téléphone <span className="text-brand-red">*</span></label>
                  <input 
                    type="tel" 
                    {...register("phone", { 
                      required: "Le numéro de téléphone est requis",
                      pattern: {
                        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                        message: "Format invalide (ex: 819-123-4567)"
                      }
                    })}
                    className={getInputClass(!!errors.phone)}
                    placeholder="(819) ..."
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <span role="alert" className="text-brand-red text-sm mt-1 block font-medium">{errors.phone.message}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Courriel <span className="text-brand-red">*</span></label>
                  <input 
                    type="email" 
                    {...register("email", { 
                      required: "L'adresse courriel est requise",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Adresse courriel invalide"
                      }
                    })}
                    className={getInputClass(!!errors.email)}
                    placeholder="email@exemple.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span role="alert" className="text-brand-red text-sm mt-1 block font-medium">{errors.email.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Type de service</label>
                <div className="relative">
                  <select 
                    {...register("service")}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-brand-red focus:border-brand-red shadow-sm transition-shadow outline-none appearance-none font-medium"
                  >
                    <option value="Bardeaux">Toiture Bardeaux</option>
                    <option value="Réparation">Réparation / Fuite</option>
                    <option value="Déneigement">Déneigement</option>
                    <option value="Rénovation">Rénovation</option>
                    <option value="Soffite / Fascia">Soffite / Fascia</option>
                    <option value="Autre">Autre</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-4 text-gray-400 rotate-90 pointer-events-none" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Message <span className="text-brand-red">*</span></label>
                <textarea 
                  {...register("message", { 
                    required: "Veuillez décrire votre projet",
                    minLength: { value: 10, message: "Le message doit être plus détaillé (min. 10 caractères)" }
                  })}
                  rows={4}
                  className={getInputClass(!!errors.message)}
                  placeholder="Décrivez votre projet..."
                  aria-invalid={!!errors.message}
                ></textarea>
                {errors.message && <span role="alert" className="text-brand-red text-sm mt-1 block font-medium">{errors.message.message}</span>}
              </div>

              <div className="pt-2">
                {submitStatus === 'success' && (
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    <p className="font-medium">Message envoyé avec succès! Nous vous contacterons sous peu.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
                    <p className="font-medium">Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ou nous contacter par téléphone.</p>
                  </div>
                )}
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className={`w-full text-lg py-5 rounded-xl shadow-lg hover:shadow-brand-red/30 transition-all hover:-translate-y-1 ${(isSubmitting || submitStatus === 'success') ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </Button>
                <div className="text-center mt-6">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="text-green-600 w-4 h-4" />
                    <p className="text-sm font-medium text-gray-600">
                      Vos informations sont sécurisées et restent confidentielles.
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    En savoir plus sur notre <Link to="/confidentialite" className="text-brand-red hover:underline decoration-brand-red underline-offset-2">Politique de confidentialité</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};