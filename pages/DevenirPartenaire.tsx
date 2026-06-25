import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CheckCircle, Briefcase, Users, ShieldCheck, Mail, Phone, Globe, ArrowRight, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { useFormSubmit } from '../src/hooks/useFormSubmit';

export const DevenirPartenaire: React.FC = () => {
  const [formData, setFormData] = useState({
    entrepriseName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    activitySector: 'Construction',
    rbq: '',
    experience: '1-3',
    description: '',
    acceptTerms: false,
    _honey: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { submitStatus, submitForm } = useFormSubmit();

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.entrepriseName.trim()) tempErrors.entrepriseName = "Le nom de l'entreprise est requis.";
    if (!formData.contactName.trim()) tempErrors.contactName = "Le nom de la personne-ressource est requis.";
    
    // Email regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "L'adresse courriel est requise.";
    } else if (!emailPattern.test(formData.email)) {
      tempErrors.email = "L'adresse courriel n'est pas valide.";
    }

    // Phone regex
    const phonePattern = /^\+?([0-9\s\-()]{7,15})$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "Le numéro de téléphone est requis.";
    } else if (!phonePattern.test(formData.phone)) {
      tempErrors.phone = "Le numéro de téléphone n'est pas valide.";
    }

    if (!formData.description.trim()) {
      tempErrors.description = "Veuillez fournir une brève description de vos services.";
    }

    if (!formData.acceptTerms) {
      tempErrors.acceptTerms = "Vous devez accepter le partage des renseignements fournis.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    // Clear error on write
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._honey) return; // Spam detected
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      const subject = `Nouvelle demande de Partenaire Recommandé - ${formData.entrepriseName}`;
      const data = {
        "Nom de l'entreprise": formData.entrepriseName,
        "Nom du contact": formData.contactName,
        "Courriel": formData.email,
        "Téléphone": formData.phone,
        "Secteur d'activité": formData.activitySector,
        "Licence RBQ": formData.rbq || "Non spécifiée",
        "Site Web": formData.website || "Non spécifiée",
        "Années d'expérience": formData.experience,
        "Description": formData.description
      };
      
      const success = await submitForm(data, subject);
      
      setIsSubmitting(false);
      
      if (success) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setErrors(prev => ({ ...prev, submit: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer." }));
      }
    }
  };

  return (
    <>
      <SEO 
        title="Devenir Partenaire" 
        description="Faites une demande pour devenir partenaire et joignez notre réseau d'excellence dans les Laurentides."
      />

      {/* Hero Header */}
      <section className="relative bg-brand-black text-white py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-brand-black to-brand-black opacity-80 z-0"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 text-brand-red px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <ShieldCheck size={14} />
            Réseau de Confiance
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6"
          >
            Devenir <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">Partenaire</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Joignez notre écosystème d'entrepreneurs, fabricants et fournisseurs de services locaux partageant la même exigence de rigueur et de qualité.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-neutral-50 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Informational Column (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-24 space-y-6">
              <div className="space-y-6">
                <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="bg-neutral-50 p-3 rounded-xl text-brand-red h-12 w-12 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/5 group-hover:scale-110 transition-all duration-300">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black mb-1">Visibilité régionale</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Partagez votre expertise auprès d'une clientèle qualifiée cherchant des services complémentaires dans les Laurentides.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="bg-neutral-50 p-3 rounded-xl text-brand-red h-12 w-12 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/5 group-hover:scale-110 transition-all duration-300">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black mb-1">Recommandations réciproques</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Bénéficiez de références fiables basées sur la qualité du travail, le respect des délais et des standards professionnels.</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="bg-neutral-50 p-3 rounded-xl text-brand-red h-12 w-12 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/5 group-hover:scale-110 transition-all duration-300">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black mb-1">Partage de valeurs d'excellence</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">Associez votre marque à {COMPANY_INFO.name}, reconnue régionalement pour son intégrité technique et son professionnalisme.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-gray-300 p-6 rounded-r-2xl shadow-sm text-sm text-gray-500 leading-relaxed">
                Les partenaires recommandés par {COMPANY_INFO.name} sont des entreprises indépendantes. Chaque partenaire est seul responsable des services qu'il offre, de ses obligations contractuelles et de ses relations avec sa clientèle. {COMPANY_INFO.name} décline toute responsabilité à l'égard des différends, réclamations ou dommages pouvant résulter des services rendus par ces partenaires.
              </div>
            </div>
          </div>

          {/* Form Column (Right) */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                id="application-success" 
                className="bg-white p-10 md:p-14 rounded-3xl border border-gray-100 shadow-xl shadow-brand-black/5 text-center space-y-8"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-sm"
                >
                  <CheckCircle size={40} />
                </motion.div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black uppercase tracking-tight text-brand-black">
                    Demande reçue !
                  </h3>
                  <p className="text-gray-500 max-w-md mx-auto text-lg leading-relaxed">
                    Merci d'avoir soumis votre candidature comme partenaire recommandé chez <strong>{COMPANY_INFO.name}</strong>.
                  </p>
                </div>
                
                <div className="bg-neutral-50 px-6 py-5 rounded-2xl text-left max-w-lg mx-auto border border-neutral-100">
                  <p className="font-bold text-brand-black mb-3">Prochaines étapes :</p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex gap-3">
                      <span className="text-brand-red bg-brand-red/10 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">1</span>
                      Analyse technique de votre candidature (24h à 48h ouvrables)
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-red bg-brand-red/10 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">2</span>
                      Vérification préalable de la conformité (ex. licence RBQ si applicable)
                    </li>
                    <li className="flex gap-3">
                      <span className="text-brand-red bg-brand-red/10 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">3</span>
                      Prise de contact téléphonique pour planifier un entretien ou échange de visibilité
                    </li>
                  </ul>
                </div>
                <div className="pt-4 flex justify-center">
                  <NavLink to="/partenaires">
                    <Button variant="outline" className="min-w-[250px]">
                      Retour aux partenaires
                    </Button>
                  </NavLink>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-brand-black/5">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-brand-black uppercase tracking-tight">
                    Formulaire d'inscription
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm">Complétez le formulaire ci-dessous pour soumettre votre candidature.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <input type="text" name="_honey" value={formData._honey} onChange={handleInputChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  {/* Entreprise & Contact Group */}
                  <div className="space-y-5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">1. Informations de base</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="entrepriseName" className="block text-sm font-semibold text-brand-black mb-2">
                          Nom de l'entreprise *
                        </label>
                        <input 
                          type="text" 
                          name="entrepriseName"
                          id="entrepriseName"
                          required
                          value={formData.entrepriseName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 bg-neutral-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-sm outline-none ${errors.entrepriseName ? 'border-red-500' : 'border-gray-200'}`}
                          placeholder="Ex. Rénovations Laurentides Inc."
                        />
                        {errors.entrepriseName && <p className="text-xs text-red-500 font-medium mt-1.5">{errors.entrepriseName}</p>}
                      </div>

                      <div>
                        <label htmlFor="contactName" className="block text-sm font-semibold text-brand-black mb-2">
                          Personne-ressource *
                        </label>
                        <input 
                          type="text" 
                          name="contactName"
                          id="contactName"
                          required
                          value={formData.contactName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 bg-neutral-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-sm outline-none ${errors.contactName ? 'border-red-500' : 'border-gray-200'}`}
                          placeholder="Ex. Jean-François Tremblay"
                        />
                        {errors.contactName && <p className="text-xs text-red-500 font-medium mt-1.5">{errors.contactName}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone Group */}
                  <div className="space-y-5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">2. Coordonnées</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-brand-black mb-2">
                          Courriel professionnel *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="email" 
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-11 pr-4 py-3.5 bg-neutral-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-sm outline-none ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                            placeholder="Ex. info@entreprise.com"
                          />
                        </div>
                        {errors.email && <p className="text-xs text-red-500 font-medium mt-1.5">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-brand-black mb-2">
                          Téléphone *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="tel" 
                            name="phone"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full pl-11 pr-4 py-3.5 bg-neutral-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-sm outline-none ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                            placeholder="Ex. (450) 123-4567"
                          />
                        </div>
                        {errors.phone && <p className="text-xs text-red-500 font-medium mt-1.5">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Secteur de services & RBQ & Site Web */}
                  <div className="space-y-5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">3. Profil professionnel</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="activitySector" className="block text-sm font-semibold text-brand-black mb-2">
                          Secteur principal
                        </label>
                        <select 
                          name="activitySector" 
                          id="activitySector"
                          value={formData.activitySector}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-neutral-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-sm outline-none"
                        >
                          <option value="Construction">Construction/Rénov</option>
                          <option value="Aménagement">Paysagiste/Déneig</option>
                          <option value="Inspection">Inspection bâtiment</option>
                          <option value="Matériaux">Fournisseur matériaux</option>
                          <option value="Financement">Services bancaires</option>
                          <option value="Autre">Autre expertise</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="rbq" className="block text-sm font-semibold text-brand-black mb-2">
                          Licence RBQ <span className="text-gray-400 font-normal">(Optionnel)</span>
                        </label>
                        <input 
                          type="text" 
                          name="rbq"
                          id="rbq"
                          value={formData.rbq}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-neutral-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-sm outline-none"
                          placeholder="Ex. 1234-5678-90"
                        />
                      </div>

                      <div className="sm:col-span-2 md:col-span-1">
                        <label htmlFor="website" className="block text-sm font-semibold text-brand-black mb-2">
                          Site Web / Social
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-4 top-3.5 text-gray-400" size={18} />
                          <input 
                            type="text" 
                            name="website"
                            id="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full pl-11 pr-4 py-3.5 bg-neutral-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-sm outline-none"
                            placeholder="Ex. www.siteweb.ca"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Years in Business */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-brand-black mb-2">
                      Années d'expérience
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Moins d\'un an', '1 à 5 ans', 'Plus de 5 ans'].map((label, idx) => {
                        const val = idx === 0 ? '0-1' : idx === 1 ? '1-5' : '5+';
                        const isChecked = formData.experience === val;
                        return (
                          <label 
                            key={idx} 
                            className={`flex flex-col items-center justify-center py-3.5 px-2 border rounded-xl cursor-pointer text-center text-sm font-semibold select-none transition-all duration-200 ${isChecked ? 'border-brand-red bg-brand-red text-white shadow-md shadow-brand-red/20' : 'border-gray-200 text-gray-600 hover:bg-neutral-50 hover:border-gray-300'}`}
                          >
                            <input 
                              type="radio" 
                              name="experience" 
                              value={val}
                              checked={isChecked}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            {label}
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message/Description */}
                  <div className="space-y-3">
                    <label htmlFor="description" className="block text-sm font-semibold text-brand-black mb-2">
                      Présentation de l'entreprise *
                    </label>
                    <textarea 
                      name="description"
                      id="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 bg-neutral-50 border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-sm outline-none resize-none ${errors.description ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="Décrivez brièvement vos services, vos zones d'intervention habituelles, ainsi que les raisons pour lesquelles vous désirez joindre le réseau..."
                    ></textarea>
                    {errors.description && <p className="text-xs text-red-500 font-medium">{errors.description}</p>}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="bg-neutral-50 p-4 rounded-xl border border-gray-100">
                    <label className="relative flex items-start gap-3 select-none cursor-pointer">
                      <div className="flex items-center h-5 mt-0.5">
                        <input 
                          type="checkbox" 
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded cursor-pointer"
                        />
                      </div>
                      <span className="text-sm text-gray-600 leading-snug">
                        Je consens à ce que {COMPANY_INFO.name} analyse ces données professionnelles à des fins de vérification de conformité et de mise en relation dans le cadre du programme de partenariat. *
                      </span>
                    </label>
                    {errors.acceptTerms && <p className="text-xs text-red-500 font-medium mt-2 pl-7">{errors.acceptTerms}</p>}
                  </div>

                  {errors.submit && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-200 flex items-center gap-3">
                      <span className="flex-shrink-0">⚠️</span>
                      {errors.submit}
                    </div>
                  )}

                  {/* Submission line */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      isLoading={isSubmitting} 
                      className="w-full h-14 text-base tracking-wide flex justify-center items-center gap-3 shadow-lg shadow-brand-red/20 group"
                    >
                      <span>Soumettre ma candidature</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                      Vos informations sont traitées de manière confidentielle.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
};
