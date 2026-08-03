import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Ruler,
  ShieldAlert,
  BadgeCent,
  CheckCircle,
  Calculator,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  User,
  Briefcase,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { Button } from "../components/Button";
import { COMPANY_INFO, CITIES } from "../constants";
import { SEO } from "../components/SEO";
import { useFormSubmit } from "../src/hooks/useFormSubmit";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  roofAge: string;
  roofSize: string;
  message: string;
  _honey: string;
};

export const Soumission: React.FC = () => {
  const [isZoneOpen, setIsZoneOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const { submitStatus, submitForm } = useFormSubmit();

  const onSubmit = async (data: FormData) => {
    if (data._honey) return; // Spam detected

    const subject = `Nouvelle demande de soumission - ${data.name} - ${data.service}`;
    const formattedData = {
      Nom: data.name,
      Téléphone: data.phone,
      Courriel: data.email,
      Service: data.service,
      "Âge de la toiture": data.roofAge,
      "Superficie estimée": data.roofSize,
      Message: data.message,
    };

    await submitForm(formattedData, subject);
    if (submitStatus !== "error") {
      reset();
    }
  };

  const getInputClass = (hasError: boolean, hasIcon: boolean = false) =>
    `w-full ${hasIcon ? "pl-11" : "px-4"} pr-4 py-3.5 border rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 transition-all outline-none focus:bg-white ${
      hasError
        ? "border-brand-red focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red"
        : "border-gray-200 focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red hover:border-gray-300"
    }`;

  return (
    <div className="bg-zinc-50 min-h-screen pb-20">
      <SEO
        title="Soumission Gratuite"
        description="Demandez une soumission gratuite pour vos projets de toiture avec Toiture Jonathan Délisle inc"
        canonicalUrl="/soumission"
      />

      {/* Header */}
      <div className="bg-brand-black bg-gradient-to-br from-brand-black via-brand-black to-[#2a0808] py-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red text-xs font-black tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(217,35,35,0.2)]">
            <Calculator className="w-4 h-4" /> ESTIMATION SANS FRAIS
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
            Obtenez votre{" "}
            <span className="text-brand-red block mt-2 drop-shadow-sm">
              soumission gratuite
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
            Décrivez-nous votre projet. Nous vous fournirons une estimation
            détaillée, transparente et honnête, sans aucun engagement de votre
            part.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Information Sidebar */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold uppercase mb-6 border-b-2 border-brand-red inline-block pb-2">
                Pourquoi nous choisir ?
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-red/10 flex items-center justify-center rounded-full text-brand-red">
                    <BadgeCent size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Prix transparents
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Nos soumissions sont claires, sans frais cachés ni
                      surprises.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-red/10 flex items-center justify-center rounded-full text-brand-red">
                    <Ruler size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Expertise sur mesure
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Nous évaluons précisément l'état réel et vos besoins.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-red/10 flex items-center justify-center rounded-full text-brand-red">
                    <ShieldAlert size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Garanties solides
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Protégé par nos garanties de main-d'œuvre et matériaux.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Coordinates Section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mt-8">
              <h3 className="text-xl font-bold uppercase mb-6 border-b-2 border-brand-red inline-block pb-2">
                Nos Coordonnées
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full text-brand-black">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Téléphone</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {COMPANY_INFO.phone}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full text-brand-black">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Courriel</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full text-brand-black">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Localisation</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      <Link to="/sainte-agathe-des-monts" className="text-brand-red font-bold hover:underline">Sainte-Agathe-des-Monts</Link>,
                      <br />
                      Laurentides
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full text-brand-black">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Heures d'ouverture
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Lundi - Vendredi : 7h00 - 17h00
                      <br />
                      <span className="whitespace-nowrap">
                        Samedi - Dimanche : Urgences seulement
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center justify-center mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Suivez-nous sur
              </h3>
              <div className="flex items-center gap-6">
                <a
                  href={COMPANY_INFO.facebookUrl || "https://facebook.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={32} fill="currentColor" strokeWidth={0} />
                </a>
                <a
                  href={COMPANY_INFO.instagramUrl || "https://instagram.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                  aria-label="Instagram"
                >
                  <Instagram size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-gray-100 border-t-[8px] border-t-brand-red">
              <h2 className="text-2xl md:text-3xl font-black text-brand-black mb-10 tracking-tight">
                VOTRE DEMANDE DE SOUMISSION
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <input type="text" {...register("_honey")} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                {/* Personal Info */}
                <div className="pb-2 border-b border-gray-50 flex items-center gap-3">
                  <User className="text-brand-red w-6 h-6" />
                  <h3 className="text-xl font-black text-brand-black">
                    Informations Personnelles
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
                      Nom complet <span className="text-brand-red">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        required
                        {...register("name", {
                          required: "Le nom complet est requis",
                        })}
                        className={getInputClass(!!errors.name, true)}
                        placeholder="Votre nom"
                      />
                    </div>
                    {errors.name && (
                      <span
                        role="alert"
                        className="text-brand-red text-sm mt-1.5 ml-1 block font-medium"
                      >
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
                      Téléphone <span className="text-brand-red">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Phone size={18} />
                      </div>
                      <input
                        type="tel"
                        required
                        {...register("phone", {
                          required: "Le téléphone est requis",
                          pattern: {
                            value:
                              /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                            message: "Format invalide",
                          },
                        })}
                        className={getInputClass(!!errors.phone, true)}
                        placeholder="(819) ..."
                      />
                    </div>
                    {errors.phone && (
                      <span
                        role="alert"
                        className="text-brand-red text-sm mt-1.5 ml-1 block font-medium"
                      >
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
                    Courriel <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      required
                      {...register("email", {
                        required: "L'adresse courriel est requise",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Courriel invalide",
                        },
                      })}
                      className={getInputClass(!!errors.email, true)}
                      placeholder="email@exemple.com"
                    />
                  </div>
                  {errors.email && (
                    <span
                      role="alert"
                      className="text-brand-red text-sm mt-1.5 ml-1 block font-medium"
                    >
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="pt-6 pb-2 border-b border-gray-50 flex items-center gap-3">
                  <Briefcase className="text-brand-red w-6 h-6" />
                  <h3 className="text-xl font-black text-brand-black">
                    Détails du projet
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
                      Type de service
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Briefcase size={18} />
                      </div>
                      <select
                        {...register("service")}
                        className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red hover:border-gray-300 focus:bg-white shadow-sm transition-all outline-none appearance-none font-medium cursor-pointer"
                      >
                        <option value="Bardeaux">
                          Remplacement de toiture (Bardeaux)
                        </option>
                        <option value="Construction Neuve">
                          Construction Neuve
                        </option>
                        <option value="Réparation">Réparation / Fuite</option>
                        <option value="Déneigement">Déneigement</option>
                        <option value="Autre">Autre</option>
                      </select>
                      <ChevronDown
                        className="absolute right-4 top-4 text-gray-400 pointer-events-none"
                        size={18}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
                      Âge de la toiture actuelle
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Calendar size={18} />
                      </div>
                      <select
                        {...register("roofAge")}
                        className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:ring-4 focus:ring-brand-red/10 focus:border-brand-red hover:border-gray-300 focus:bg-white shadow-sm transition-all outline-none appearance-none font-medium cursor-pointer"
                      >
                        <option value="Je ne sais pas">Je ne sais pas</option>
                        <option value="Moins de 10 ans">Moins de 10 ans</option>
                        <option value="10 à 15 ans">10 à 15 ans</option>
                        <option value="15 à 20 ans">15 à 20 ans</option>
                        <option value="Plus de 20 ans">Plus de 20 ans</option>
                      </select>
                      <ChevronDown
                        className="absolute right-4 top-4 text-gray-400 pointer-events-none"
                        size={18}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5 ml-1">
                    Détails supplémentaires{" "}
                    <span className="text-brand-red">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 pointer-events-none text-gray-400">
                      <MessageSquare size={18} />
                    </div>
                    <textarea
                      required
                      {...register("message", {
                        required: "Veuillez décrire brièvement votre projet",
                        minLength: {
                          value: 10,
                          message: "Le message doit être plus détaillé",
                        },
                      })}
                      rows={5}
                      className={`${getInputClass(!!errors.message, true)} resize-none`}
                      placeholder="Parlez-nous de votre projet (ex: nombre d'étages, fuites apparentes, matériaux souhaités, etc.)..."
                    ></textarea>
                  </div>
                  {errors.message && (
                    <span
                      role="alert"
                      className="text-brand-red text-sm mt-1.5 ml-1 block font-medium"
                    >
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <div className="pt-6">
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                      <div>
                        <p className="font-bold text-lg">
                          Demande reçue avec succès!
                        </p>
                        <p className="text-sm mt-1">
                          Notre équipe analysera vos informations et vous
                          contactera rapidement avec votre estimation gratuite.
                        </p>
                      </div>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl">
                      <p className="font-bold">
                        Une erreur est survenue lors de l'envoi.
                      </p>
                      <p className="text-sm mt-1">
                        Veuillez réessayer ou nous contacter directement par
                        téléphone.
                      </p>
                    </div>
                  )}

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className={`w-full md:w-auto px-12 py-5 text-lg font-black tracking-wide uppercase rounded-xl shadow-[0_10px_20px_rgba(217,35,35,0.3)] hover:shadow-[0_10px_25px_rgba(217,35,35,0.4)] transition-all hover:-translate-y-1 ${isSubmitting || submitStatus === "success" ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                      {isSubmitting
                        ? "ENVOI EN COURS..."
                        : "SOUMETTRE MA DEMANDE"}
                    </Button>
                  </div>
                  <div className="text-center mt-6">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="text-green-600 w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium text-gray-600">
                        Vos informations sont sécurisées et restent
                        confidentielles.
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      En savoir plus sur notre{" "}
                      <Link
                        to="/confidentialite"
                        className="text-brand-red hover:underline decoration-brand-red underline-offset-2"
                      >
                        Politique de confidentialité
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Zones desservies */}
            <div className="bg-white rounded-2xl p-6 mt-8 shadow-sm border border-gray-100">
              <button 
                onClick={() => setIsZoneOpen(!isZoneOpen)}
                className="w-full text-left"
              >
                <h3 className="text-lg font-bold uppercase mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-red" />
                    Zone desservie
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isZoneOpen ? 'rotate-180' : ''}`} />
                </h3>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${isZoneOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
                style={{ display: 'grid' }}
              >
                <div className="overflow-hidden">
                  <ul className="columns-1 sm:columns-2 lg:columns-3 gap-x-6 border-t border-gray-100 pt-4">
                    {CITIES.map((city) => (
                      <li key={city.name} className="break-inside-avoid mb-2">
                        <Link 
                          to={city.path} 
                          className="inline-flex items-center text-gray-600 hover:text-brand-red font-medium transition-all duration-300 hover:font-bold hover:scale-110 origin-left group"
                        >
                          <ChevronRight className="w-4 h-4 mr-1 text-brand-red opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          <span className="truncate">{city.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-500 pt-4 mt-2 border-t border-gray-50 text-sm italic">
                    Et partout dans <Link to="/laurentides" className="text-brand-red hover:underline">les Laurentides</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
