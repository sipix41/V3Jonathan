import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { COMPANY_INFO } from '../constants';
import { CheckCircle2, ArrowRight, X, Calendar, MapPin, Hammer, ChevronLeft, ChevronRight, Search, Star } from 'lucide-react';
import { SEO } from '../components/SEO';
import { CTA } from '../components/CTA';

const CATEGORIES = ['Toutes', 'Bardeaux', 'Rénovation', 'Déneigement'];

const PROJECTS = [
  { 
    id: 1, 
    title: 'Résidence Lac-des-Sables', 
    category: 'Bardeaux', 
    images: [
      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000'
    ],
    city: 'Sainte-Agathe-des-Monts',
    year: '2023',
    materials: 'Bardeaux IKO Cambridge',
    description: 'Remplacement complet de la toiture en bardeaux d\'asphalte. Amélioration de la ventilation de l\'entretoit et installation de nouveaux solins.'
  },
  { 
    id: 2, 
    title: 'Chalet Val-David', 
    category: 'Rénovation', 
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1000'
    ],
    city: 'Val-David',
    year: '2022',
    materials: 'Bardeaux IKO Dynasty',
    description: 'Rénovation majeure d\'un toit de chalet avec ajout d\'isolation par l\'extérieur et pose de bardeaux haute performance.'
  },
  { 
    id: 3, 
    title: 'Toiture Sainte-Agathe', 
    category: 'Bardeaux', 
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1000'
    ],
    city: 'Sainte-Agathe-des-Monts',
    year: '2023',
    materials: 'Bardeaux BP Mystique',
    description: 'Intervention rapide pour refaire la toiture vieillissante avant l\'hiver. Travail de précision avec alignement parfait.'
  },
  { 
    id: 4, 
    title: 'Déneigement de toiture', 
    category: 'Déneigement', 
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&q=80&w=1000'
    ],
    city: 'Mont-Tremblant',
    year: '2024',
    materials: 'Pelles spécialisées, harnais',
    description: 'Intervention d\'urgence pour déneiger une toiture accumulant une charge dangereuse de neige et de glace.'
  },
  { 
    id: 5, 
    title: 'Maison de plain-pied', 
    category: 'Bardeaux', 
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
    ],
    city: 'Saint-Sauveur',
    year: '2021',
    materials: 'Bardeaux IKO Cambridge',
    description: 'Installation d\'une toiture neuve sur une construction récente avec une excellente pente pour l\'écoulement des eaux.'
  },
  { 
    id: 6, 
    title: 'Toiture complexe', 
    category: 'Rénovation', 
    images: [
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1000'
    ],
    city: 'Piedmont',
    year: '2023',
    materials: 'Bardeaux architecturaux IKO',
    description: 'Projet complexe impliquant de multiples noues et arêtiers. Une expertise technique poussée a été nécessaire.'
  },
  { 
    id: 7, 
    title: 'Chalet traditionnel', 
    category: 'Bardeaux', 
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000'
    ],
    city: 'Val-Morin',
    year: '2022',
    materials: 'Bardeaux fibre de verre',
    description: 'Réfection de toiture préservant le cachet architectural d\'un chalet en bois rond. Pose de membrane d\'étanchéité complète.'
  },
  { 
    id: 8, 
    title: 'Reprofilage complet', 
    category: 'Rénovation', 
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000'
    ],
    city: 'Sainte-Adèle',
    year: '2024',
    materials: 'Contreplaqué et Bardeaux IKO',
    description: 'Correction de la structure du pontage affaissée avant de procéder à l\'installation d\'un revêtement tout neuf.'
  },
  { 
    id: 9, 
    title: 'Déneigement préventif', 
    category: 'Déneigement', 
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000'
    ],
    city: 'Saint-Jérôme',
    year: '2023',
    materials: 'Équipement de sécurité complet',
    description: 'Déneigement préventif pour libérer la toiture et prévenir, lors de la fonte, les infiltrations d\'eau et de glace.'
  },
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Toutes');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = React.useMemo(() => {
    return activeCategory === 'Toutes' 
      ? PROJECTS 
      : PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  // Pre-load images for smoother UX
  useEffect(() => {
    if (selectedProject) {
      selectedProject.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [selectedProject]);

  return (
    <div className="bg-white min-h-screen">
      <SEO title="Portfolio" description="Découvrez nos services d'expert couvreur pour Portfolio. Toiture Jonathan Délisle inc dans les Laurentides." canonicalUrl="/portfolio" />
      {/* Hero Section */}
      <section className="relative bg-brand-black py-8 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy" 
            src="https://images.unsplash.com/photo-1681232851496-e6bf98db2571?auto=format&fit=crop&q=80&w=2000" 
            alt="Nos réalisations en toiture" 
            className="w-full h-full object-cover opacity-30"
          decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold tracking-widest uppercase mb-6">
              <Star className="w-4 h-4" /> Notre Expertise en Action
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 uppercase">
              Nos <span className="text-brand-red">Réalisations</span>
            </h1>
            <p className="text-xl text-gray-300 md:text-2xl leading-relaxed max-w-2xl font-light mb-8">
              Découvrez la qualité remarquable de notre travail à travers ces projets récents menés à bien dans les <strong>{COMPANY_INFO.region}</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-brand-red/40 text-lg">
                    Parlez-nous de votre projet
                  </Button>
               </Link>
               <Link to="/a-propos">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg border-white text-white hover:bg-white hover:text-brand-black bg-transparent">
                    Apprenez à nous connaître
                  </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Quality Guaranty Insert */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center border border-gray-100 shadow-sm gap-6 justify-between hide-on-mobile">
           <div className="flex-1">
             <h2 className="text-2xl font-bold text-brand-black mb-2 flex items-center gap-2">
               L'engagement Toiture Jonathan Délisle <CheckCircle2 className="text-green-600 w-6 h-6" />
             </h2>
             <p className="text-gray-600">
               Notre souci du détail fait notre renommée et chaque projet est signé avec fierté. Nous garantissons une exécution impeccable, des lignes parfaites, des coupes précises et des chantiers rigoureusement propres pour vous offrir une tranquillité d'esprit totale, sans le moindre tracas.
             </p>
           </div>
           
           <div className="flex gap-4">
               <div className="bg-white px-4 py-3 rounded shadow-sm text-center border-l-4 border-brand-red">
                  <p className="text-2xl font-extrabold text-brand-black">17+</p>
                  <p className="text-xs uppercase text-gray-500 font-bold">Ans d'expérience</p>
               </div>
               <div className="bg-white px-4 py-3 rounded shadow-sm text-center border-l-4 border-brand-red">
                  <p className="text-2xl font-extrabold text-brand-black">500+</p>
                  <p className="text-xs uppercase text-gray-500 font-bold">Toitures posées</p>
               </div>
           </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === category 
                  ? 'bg-brand-red text-white shadow-lg scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-brand-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:shadow-brand-red/20 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-brand-red flex flex-col h-full"
            >
              <div className="overflow-hidden aspect-[4/3] relative">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  loading="lazy"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                decoding="async" />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
                
                {/* Search Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-brand-red text-white p-4 rounded-full shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <Search className="w-6 h-6" />
                  </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-brand-red text-white px-4 py-1.5 rounded-full shadow-md text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 relative z-10 bg-white border-t-4 border-transparent group-hover:bg-brand-red transition-colors duration-300 flex-1 flex flex-col justify-center">
                <h3 className="text-brand-black group-hover:text-white text-xl font-extrabold mb-1 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-500 group-hover:text-red-100 font-medium text-sm transition-colors duration-300">Voir les détails <ArrowRight className="inline-block w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform border-none" /></p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if needed, though we have categories for all items here) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-6 bg-gray-50 rounded-xl border border-gray-100">
             <p className="text-gray-500 text-lg">Aucune réalisation dans cette catégorie pour le moment.</p>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex p-4 sm:p-6 bg-brand-black/90 backdrop-blur-sm overflow-y-auto" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full flex flex-col animate-in fade-in zoom-in duration-300 m-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Top Right of Modal */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 text-brand-black rounded-full shadow flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>

            {/* Image Carousel Section */}
            <div className="relative w-full h-[40vh] min-h-[300px] bg-gray-100 rounded-t-2xl overflow-hidden">
              
              {/* Main Image */}
              <img loading="lazy" 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover transition-opacity duration-500"
              decoding="async" />
              
              {/* Carousel Controls */}
              {selectedProject.images.length > 1 && (
                <>
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm text-brand-black rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm text-brand-black rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-lg"
                    aria-label="Image suivante"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all shadow-sm ${currentImageIndex === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
                        aria-label={`Aller à l'image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
              
              <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded shadow text-sm font-bold uppercase z-10">
                {selectedProject.category}
              </div>

              {/* Gradient & Overlay Info at Bottom of Image */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-black/90 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-4 sm:gap-6 z-10 pointer-events-none">
                <div className="flex flex-col text-white">
                  <span className="text-xs uppercase font-bold tracking-wider text-white/80 flex items-center gap-1.5"><MapPin size={12} /> Lieu</span>
                  <span className="font-semibold text-lg">{selectedProject.city}</span>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-xs uppercase font-bold tracking-wider text-white/80 flex items-center gap-1.5"><Calendar size={12} /> Année</span>
                  <span className="font-semibold text-lg">{selectedProject.year}</span>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-xs uppercase font-bold tracking-wider text-white/80 flex items-center gap-1.5"><Hammer size={12} /> Matériaux</span>
                  <span className="font-semibold text-lg">{selectedProject.materials}</span>
                </div>
              </div>
            </div>
            
            {/* Project Info Section */}
            <div className="w-full p-6 sm:p-8 flex flex-col">
              <div className="flex-grow">
                <h4 className="text-lg font-bold text-brand-black flex items-center gap-2 mb-3">
                  <CheckCircle2 size={20} className="text-green-600" />
                  Détails de l'intervention
                </h4>
                <p className="text-gray-600 text-base leading-relaxed bg-brand-black/5 p-4 rounded-xl border-l-4 border-brand-red">
                  {selectedProject.description}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-wider text-center md:text-left">
                  Ce projet vous inspire ?
                </p>
                <Link to="/contact" className="block" onClick={() => setSelectedProject(null)}>
                  <Button className="w-full py-4 text-lg shadow-md hover:shadow-lg">Demander une estimation pour un projet similaire</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTA 
        title="Inspiré par notre travail ?"
        description="Joignez-vous à nos nombreux clients satisfaits. Planifiez la rénovation de votre toiture dès maintenant en contactant notre équipe pour un devis précis."
      />

    </div>
  );
};