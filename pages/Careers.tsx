import React from 'react';
import { useForm } from 'react-hook-form';
import { HardHat, Users, TrendingUp, DollarSign, CheckCircle, ChevronRight, ChevronDown, Briefcase, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { SEO } from '../components/SEO';

type JobFormData = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  position: string;
  message: string;
  ccq: boolean;
  cv?: FileList;
};

export const Careers: React.FC = () => {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, reset } = useForm<JobFormData>();

  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: JobFormData) => {
    try {
      setSubmitStatus('idle');
      
      const formData = new FormData();
      formData.append('_subject', `Nouvelle candidature - ${data.position} - ${data.name}`);
      formData.append('_template', "table");
      formData.append('Nom', data.name);
      formData.append('Courriel', data.email);
      formData.append('Téléphone', data.phone);
      formData.append('Poste convoité', data.position);
      formData.append("Années d'expérience", data.experience || "0");
      formData.append("Cartes CCQ", data.ccq as unknown as string);
      formData.append("Message/Lettre de motivation", data.message);
      
      if (data.cv && data.cv.length > 0) {
        formData.append('attachment', data.cv[0]);
      }

      const reponse = await fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
        method: "POST",
        headers: { 
          'Accept': 'application/json'
        },
        body: formData
      });

      if (reponse.ok) {
         setSubmitStatus('success');
         reset();
      } else {
         setSubmitStatus('error');
      }
    } catch (erreur) {
      console.error("Problème de connexion", erreur);
      setSubmitStatus('error');
    }
  };

  const jobs = [
    {
      title: "Couvreur Compagnon",
      type: "Temps plein / Temps partiel",
      location: COMPANY_INFO.region,
      desc: "Vous avez de l'expérience et maîtrisez la pose de bardeaux d'asphalte ? Joignez notre équipe d'experts.",
      formValue: "Couvreur"
    },
    {
      title: "Apprenti Couvreur",
      type: "Temps plein / Temps partiel",
      location: COMPANY_INFO.region,
      desc: "Vous avez vos cartes mais désirez parfaire vos techniques entouré de professionnels chevronnés.",
      formValue: "Apprenti"
    },
    {
      title: "Manœuvre / Journalier",
      type: "Temps plein / Temps partiel",
      location: COMPANY_INFO.region,
      desc: "Vous êtes débrouillard, en bonne forme physique et n'avez pas le vertige ? On a besoin de vous.",
      formValue: "Manoeuvre"
    },
    {
      title: "Menuisier",
      type: "Temps plein / Temps partiel",
      location: COMPANY_INFO.region,
      desc: "Vous êtes passionné par le travail du bois et cherchez l'excellence ? Joignez notre équipe pour des projets de qualité.",
      formValue: "Menuisier"
    },
    {
      title: "Estimateur",
      type: "Temps plein / Temps partiel",
      location: COMPANY_INFO.region,
      desc: "Vous possédez une excellente capacité d'analyse et maîtrisez l'évaluation de projets de toiture ? Entrez dans notre équipe.",
      formValue: "Estimateur"
    }
  ];

  const getInputClass = (hasError: boolean) =>
    `w-full px-4 py-3 border rounded-md bg-white text-gray-900 placeholder-gray-400 transition-all outline-none ${
      hasError 
        ? "border-brand-red focus:ring-2 focus:ring-brand-red" 
        : "border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-brand-red"
    }`;

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Emplois et Carrières en Toiture | Toiture Jonathan Délisle Inc" 
        description="Joignez l'équipe de Toiture Jonathan Délisle Inc dans les Laurentides. Nous recrutons des couvreurs, apprentis et manœuvres. Découvrez nos avantages et postulez aujourd'hui !" 
        canonicalUrl="/carriere" 
      />
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-6 lg:py-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img loading="lazy" src="https://i.postimg.cc/SskS64fS/telecharge-(4).jpg" className="w-full h-full object-cover object-top" alt="Arrière-plan Toiture" decoding="async" />
           <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Briefcase className="w-4 h-4" /> Emplois Disponibles
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 uppercase">
            Emplois de <span className="text-brand-red">Couvreur</span> dans les {COMPANY_INFO.region}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-6xl mx-auto leading-relaxed font-light">
            Rejoignez l'équipe de Toiture Jonathan Délisle Inc.<br className="hidden lg:block" /> Une entreprise bâtie sur la rigueur et le respect.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 text-white font-bold py-4 px-8 rounded-xl text-lg backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.15)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Recrutement Ouvert
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('avantages-grid')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg backdrop-blur-sm border border-white/10"
            >
              Voir les avantages
            </button>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-red transition-colors">Accueil</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-900 font-medium">Emplois & Carrières</span>
          </div>
        </div>
      </div>

      {/* SEO & Geo Content */}
      <section className="py-8 lg:py-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-bold mb-6">
                <Users className="w-4 h-4" /> Notre Vision
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-brand-black mb-6 leading-tight">Faites carrière en toiture avec les <span className="text-brand-red">meilleurs</span></h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>Chez Toiture Jonathan Délisle, nous ne recrutons pas simplement des employés, nous bâtissons une équipe solide de professionnels fiers de leur métier.</p>
                <p>Chaque toiture installée, chaque réparation effectuée et chaque intervention de déneigement représente notre réputation. C’est pourquoi nous recherchons des personnes fiables, travaillantes et engagées, qui veulent évoluer dans une entreprise sérieuse où leur travail est réellement reconnu.</p>
                <p>Basés à Sainte-Agathe-des-Monts et présents partout dans les Laurentides, nous offrons bien plus qu’un emploi : nous offrons une carrière stable.</p>
                <p className="font-medium text-brand-black border-l-4 border-brand-red pl-4 py-2 mt-6 bg-gray-50 rounded-r-lg">Votre sécurité, votre stabilité financière et votre qualité de vie sont au cœur de notre façon de travailler.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-red/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img loading="lazy" src="https://i.postimg.cc/fLc5gJgd/att-r-Ow-IF8i2FMh-J9-xwj-FSsdp-Wun3x7K-WUmoj-Ymea-ZXh-E.jpg" alt="Toiture de bardeaux résidentiel" className="relative rounded-3xl w-full h-auto shadow-xl" decoding="async" width="800" height="600" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="avantages" className="py-8 lg:py-4 bg-zinc-50 border-y border-zinc-200 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">Pourquoi choisir Toiture Jonathan Délisle inc. ?</h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Reviens à la maison fier de ce que tu accomplis. Rejoins une équipe où l'on construit bien plus que des toits : une vraie carrière, avec du respect et les moyens de tes ambitions.</p>
          </div>
          
          <div id="avantages-grid" className="scroll-mt-32 grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Colonne de gauche : Les 4 cartes */}
            <div className="xl:col-span-7 bg-white rounded-[2rem] shadow-xl border border-zinc-200 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10 border-b md:border-r border-zinc-100 hover:bg-zinc-50 transition-colors group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-zinc-50 border border-gray-200 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform group-hover:bg-brand-red/10 group-hover:border-brand-red/20">
                      <CheckCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black">Respect et Sérieux</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red mt-0.5">✔️</span>
                      <span><strong>Management accessible.</strong> Une direction présente sur le terrain, accessible et impliquée, garantissant une prise de décision rapide et un encadrement de qualité.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red mt-0.5">✔️</span>
                      <span><strong>Développement des compétences.</strong> Nous investissons dans notre équipe. Grâce à un encadrement structuré, chaque membre développe son expertise pour progresser au sein de l'entreprise.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 md:p-10 border-b border-zinc-100 hover:bg-zinc-50 transition-colors group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-zinc-50 border border-gray-200 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform group-hover:bg-brand-red/10 group-hover:border-brand-red/20">
                      <DollarSign size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black">Payé à ta juste valeur</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red mt-0.5">✔️</span>
                      <span><strong>Reconnaissance de l'expérience.</strong> Une rémunération juste et compétitive, basée sur vos connaissances et vos années sur le terrain. Un suivi clair, transparent et sans surprise.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red mt-0.5">✔️</span>
                      <span><strong>Performance récompensée.</strong> Ponctualité, compétence et implication se reflètent directement sur ta paie.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-zinc-100 hover:bg-zinc-50 transition-colors group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-zinc-50 border border-gray-200 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform group-hover:bg-brand-red/10 group-hover:border-brand-red/20">
                      <HardHat size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black">Sécurité absolue</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red mt-0.5">✔️</span>
                      <span><strong>Zéro improvisation.</strong> Camions récents, outils performants et protocoles de prévention stricts.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red mt-0.5">✔️</span>
                      <span><strong>Rentre chez toi en santé.</strong> Ton intégrité physique est notre toute première priorité incontestable.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 md:p-10 hover:bg-zinc-50 transition-colors group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-zinc-50 border border-gray-200 text-brand-red rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform group-hover:bg-brand-red/10 group-hover:border-brand-red/20">
                      <TrendingUp size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-black">Évolution et Relève</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red mt-0.5">✔️</span>
                      <span><strong>On forme les meilleurs.</strong> Apprenti ou compagnon, nous investissons du temps pour transmettre nos hauts standards.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red mt-0.5">✔️</span>
                      <span><strong>Objectif maître-couvreur.</strong> L'idée n'est pas juste de t'embaucher, c'est de faire de toi un pro autonome.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-8 md:p-10 border-t border-zinc-100 bg-zinc-50 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('postuler')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg text-center"
                >
                  Postulez dès maintenant
                </button>
                <Link to="/a-propos" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-brand-black border border-gray-200 font-bold py-3 px-8 rounded-xl transition-all shadow-sm hover:shadow-md text-center">
                  En savoir plus sur nous
                </Link>
              </div>
            </div>

            {/* Colonne de droite : Culture Block */}
            <div className="xl:col-span-5 bg-brand-black text-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-zinc-800 relative overflow-hidden xl:sticky xl:top-24">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-brand-red relative z-10 leading-tight">Travailler ici, c’est faire partie de quelque chose de solide</h3>
              <div className="space-y-4 text-gray-300 text-lg relative z-10 leading-relaxed font-light">
                <p>Nous ne voulons pas être “une autre compagnie de toiture”.</p>
                <p>Nous voulons être l’entreprise où les bons travailleurs choisissent de rester.</p>
                <p>Une entreprise fiable. Une équipe respectée. Une réputation bâtie sur le terrain. Chaque membre de l’équipe contribue directement à cette mission.</p>
                <div className="pt-6 flex flex-col gap-4 font-semibold text-white text-lg">
                  <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0"><CheckCircle size={18} /></span> Votre implication a un impact.</span>
                  <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0"><CheckCircle size={18} /></span> Votre travail compte.</span>
                  <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0"><CheckCircle size={18} /></span> Vos efforts sont reconnus.</span>
                  <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0"><CheckCircle size={18} /></span> Votre sécurité est une priorité.</span>
                  <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0"><CheckCircle size={18} /></span> Votre expertise fait la différence.</span>
                  <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center shrink-0"><CheckCircle size={18} /></span> Votre loyauté est récompensée.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Opportunités et Formulaire */}
      <section id="carrieres-opportunites" className="py-8 lg:py-4 bg-zinc-50 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-start mt-4">
            
            {/* Left Column: Postes Ouverts */}
            <div className="space-y-12">
              
              {/* Jobs List Block */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">Postes Ouverts</h2>
                  <div className="w-20 h-1.5 bg-brand-red"></div>
                </div>

                <div className="flex flex-col gap-5">
                  {jobs.map((job, idx) => (
                    <div 
                      key={idx} 
                      onClick={(e) => {
                        e.preventDefault();
                        setValue("position", job.formValue);
                        document.getElementById('postuler')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-white border border-gray-200 rounded-[1.5rem] p-6 hover:border-brand-red hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 group relative overflow-hidden cursor-pointer"
                    >
                      <div className="absolute right-0 top-0 w-32 h-32 bg-brand-red opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-bl-full pointer-events-none"></div>
                      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between relative z-10">
                        <div className="flex-1 pr-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-red transition-colors">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3 font-medium">
                            <span className="flex items-center gap-1"><Clock size={16} className="text-brand-red" /> {job.type}</span>
                            <span className="flex items-center gap-1"><MapPin size={16} className="text-brand-red" /> {job.location}</span>
                          </div>
                          <p className="text-gray-600 leading-relaxed text-sm md:text-base border-l-2 border-brand-red/20 pl-3">{job.desc}</p>
                        </div>
                        <div className="shrink-0 mt-4 md:mt-0 self-end md:self-center">
                           <div className="w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                             <ChevronRight size={24} />
                           </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form Block */}
            <div id="postuler" className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.08)] border border-gray-100 xl:sticky xl:top-8 border-t-[8px] border-t-brand-red scroll-mt-8">
               <div className="mb-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-sm font-bold mb-6">
                    <Briefcase className="w-4 h-4" /> Formulaire de Candidature Rapide
                 </div>
                 <h2 className="text-4xl md:text-4xl font-extrabold text-brand-black mb-6 leading-tight tracking-tight">Postulez dès <span className="text-brand-red">maintenant</span></h2>
                 <p className="text-gray-600 text-lg leading-relaxed mb-4">
                   Si vous cherchez plus qu’un simple emploi, votre place est peut-être ici. 
                 </p>
                 <p className="text-gray-600 text-lg leading-relaxed">
                   Remplissez le formulaire ci-dessous. Nous traitons toutes les candidatures <strong className="text-brand-black">rapidement</strong> et en <strong className="text-brand-black">toute confidentialité</strong>.
                 </p>
               </div>
               
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" encType="multipart/form-data">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Nom complet <span className="text-brand-red">*</span></label>
                     <input 
                       type="text" 
                       {...register("name", { required: "Ce champ est requis" })}
                       className={getInputClass(!!errors.name)}
                       placeholder="Votre nom"
                     />
                     {errors.name && <span className="text-brand-red text-sm mt-1 font-medium">{errors.name.message}</span>}
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Adresse e-mail <span className="text-brand-red">*</span></label>
                     <input 
                       type="email" 
                       {...register("email", { 
                         required: "Ce champ est requis",
                         pattern: {
                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           message: "Adresse e-mail invalide"
                         }
                       })}
                       className={getInputClass(!!errors.email)}
                       placeholder="votre.nom@exemple.com"
                     />
                     {errors.email && <span className="text-brand-red text-sm mt-1 font-medium">{errors.email.message}</span>}
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Téléphone <span className="text-brand-red">*</span></label>
                     <input 
                       type="tel" 
                       {...register("phone", { required: "Ce champ est requis" })}
                       className={getInputClass(!!errors.phone)}
                       placeholder="(819) ..."
                     />
                     {errors.phone && <span className="text-brand-red text-sm mt-1 font-medium">{errors.phone.message}</span>}
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Poste convoité</label>
                     <div className="relative">
                       <select 
                         {...register("position")}
                         className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-brand-red focus:border-brand-red shadow-sm transition-shadow outline-none appearance-none font-medium"
                       >
                         <option value="Couvreur">Couvreur (Compagnon)</option>
                          <option value="Menuisier">Menuisier</option>
                         <option value="Apprenti">Apprenti Couvreur</option>
                         <option value="Manoeuvre">Manœuvre / Journalier</option>
                         <option value="Estimateur">Estimateur</option>
                          <option value="Autre">Autre</option>
                       </select>
                       <ChevronRight className="absolute right-4 top-4 text-gray-400 rotate-90 pointer-events-none" size={20} />
                     </div>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="md:col-start-1">
                     <label className="block text-sm font-bold text-gray-700 mb-1">Années d'expérience en toiture</label>
                     <input 
                       type="number" 
                       {...register("experience")}
                       className={getInputClass(false)}
                       placeholder="Ex: 5"
                       min="0"
                     />
                   </div>
                 </div>

                 <div className="bg-zinc-50 p-6 rounded-xl border border-gray-200">
                   <label className="block text-sm font-bold text-gray-900 mb-4">Détenez-vous vos cartes CCQ ?</label>
                   <div className="flex flex-wrap gap-6">
                     <label className="inline-flex items-center cursor-pointer group">
                       <input type="radio" {...register("ccq")} value="oui" className="w-5 h-5 text-brand-red border-gray-300 focus:ring-brand-red transition-all cursor-pointer" />
                       <span className="ml-2 font-semibold text-gray-700 group-hover:text-brand-red transition-colors">Oui</span>
                     </label>
                     <label className="inline-flex items-center cursor-pointer group">
                       <input type="radio" {...register("ccq")} value="non" className="w-5 h-5 text-brand-red border-gray-300 focus:ring-brand-red transition-all cursor-pointer" />
                       <span className="ml-2 font-semibold text-gray-700 group-hover:text-brand-red transition-colors">Non</span>
                     </label>
                     <label className="inline-flex items-center cursor-pointer group">
                       <input type="radio" {...register("ccq")} value="encours" className="w-5 h-5 text-brand-red border-gray-300 focus:ring-brand-red transition-all cursor-pointer" />
                       <span className="ml-2 font-semibold text-gray-700 group-hover:text-brand-red transition-colors">En cours</span>
                     </label>
                   </div>
                 </div>

                 <div>
                                     <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Curriculum Vitae (CV)</label>
                    <input type="file" accept=".pdf,.doc,.docx" {...register("cv")} className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-brand-red focus:border-brand-red shadow-sm transition-shadow outline-none font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-red/10 file:text-brand-red hover:file:bg-brand-red/20" />
                    <p className="text-gray-500 text-sm mt-2">Formats acceptés : .pdf, .doc, .docx - Si vous n'avez pas de CV, pas de problème!</p>
                  </div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Détails ou petit message pour nous</label>
                   <textarea 
                     {...register("message")}
                     rows={4}
                     className={getInputClass(false)}
                     placeholder="Parlez-nous de vos atouts, de vos disponibilités ou de vos objectifs..."
                   ></textarea>
                 </div>

                 <div className="pt-2">
                   {submitStatus === 'success' && (
                     <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3">
                       <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                       <p className="font-medium">Candidature envoyée avec succès! Nous analyserons votre profil sous peu.</p>
                     </div>
                   )}
                   {submitStatus === 'error' && (
                     <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
                       <p className="font-medium">Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone.</p>
                     </div>
                   )}
                   <Button 
                     type="submit" 
                     size="lg"
                     disabled={isSubmitting || submitStatus === 'success'}
                     className={`w-full text-lg py-5 rounded-xl shadow-lg hover:shadow-brand-red/30 transition-all hover:-translate-y-1 ${(isSubmitting || submitStatus === 'success') ? 'opacity-70 cursor-not-allowed' : ''}`}
                   >
                     {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
                   </Button>
                   <div className="flex items-center justify-center gap-2 mt-6">
                     <CheckCircle className="text-green-600 w-4 h-4" />
                     <p className="text-sm font-medium text-gray-600">
                       Vos informations sont sécurisées et restent confidentielles.
                     </p>
                   </div>
                 </div>
               </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-4 lg:py-6 bg-white border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4">Questions Fréquentes sur nos <span className="text-brand-red">Métiers</span></h2>
            <div className="w-20 h-1.5 bg-brand-red mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">Vous vous posez des questions sur l'industrie de la toiture dans les {COMPANY_INFO.region} ? On vous éclaire.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "En quoi consiste le métier de couvreur professionnel ?",
                a: "Le couvreur est le spécialiste de l'enveloppe supérieure et de l'étanchéité du bâtiment. Son métier consiste à installer, réparer et entretenir les toits résidentiels ou commerciaux. Chez Toiture Jonathan Délisle, cela implique de travailler principalement avec des toitures en bardeaux d'asphalte (toits en pente), de remplacer le pontage au besoin, de poser des membranes imperméables, d'installer la ventilation adéquate (solins, soffite, fascia). C'est un métier physique passionnant qui requiert d'être à l'aise en hauteur, rigoureux et d'avoir le sens du détail."
              },
              {
                q: "Qu'est-ce que ça implique d'être Apprenti Couvreur ?",
                a: "Être apprenti couvreur, c'est apprendre le métier sur le terrain en étant encadré. Muni de vos cartes de compétence, vous assistez les couvreurs compagnons d'expérience dans leurs tâches quotidiennes. Chez nous, c'est l'opportunité de parfaire vos techniques de clouage, d'alignement et de préparation de toiture au sein d'une équipe qui aime transmettre son savoir. L'objectif est de vous faire progresser pour que vous deveniez un maître-couvreur autonome et fier de son art."
              },
              {
                q: "Quel est le rôle exact d'un Manœuvre ou Journalier en toiture ?",
                a: "Le manœuvre (aussi appelé journalier de toiture) est littéralement le moteur du chantier. C'est un rôle exigeant, très physique, qui demande de la force et de l'endurance. Ses tâches incluent la préparation et la sécurisation des lieux, le levage et le transport des matériaux (bardeaux, outils), l'arrachage méticuleux de l'ancienne toiture, et le nettoyage du chantier pour garantir aux clients un terrain impeccable. C'est une excellente porte d'entrée dans le domaine de la construction."
              },
              {
                q: "Quelle est la différence entre un couvreur de bardeaux d'asphalte et un couvreur de toit plat ou de tôle ?",
                a: "La distinction réside dans la technique et l'expertise. Un couvreur de bardeaux d'asphalte (comme l'équipe de Toiture Jonathan Délisle inc.) se spécialise dans les toits en pente. Cela demande une expertise aiguë sur la façon dont l'eau s'écoule naturellement par gravité, et sur la gestion complexe de la condensation complexe (ventilation, isolation de l'entretoit). À l'inverse, un couvreur de toit plat travaille souvent avec des chalumeaux et des membranes élastomères ou EPDM pour créer de véritables bassins étanches à pente nulle. Le couvreur en tôle ou métal, lui, utilise des techniques de sertissage et de pliage de ferblanterie. La spécialisation garantit des installations haut de gamme d'une longévité accrue."
              }
            ].map((faq, idx) => (
              <details key={idx} className={`group bg-white rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] mb-6 border border-gray-100 border-l-[6px] ${idx % 2 === 0 ? 'border-l-brand-red' : 'border-l-brand-black'}`}>
                <summary className="flex items-center justify-between p-6 md:px-8 md:py-6 font-bold text-lg md:text-xl text-brand-black outline-none group-open:text-brand-red list-none [&::-webkit-details-marker]:hidden">
                  <span className="pr-6">{faq.q}</span>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-black group-open:bg-brand-red group-open:text-white transition-colors duration-300">
                    <ChevronDown size={20} className="group-open:rotate-180 transition-transform duration-300" />
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-8 pt-2 text-gray-600 leading-relaxed bg-white border-t border-gray-50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
