import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { servicesData } from '../data/servicesData';
import { useSEO } from '../hooks/useSEO';

type CategoryType = 'all' | 'bird-safety' | 'invisible-grill' | 'sports-industrial';

export const Home: React.FC = () => {
  useSEO({
    title: 'Pigeon Nets, Balcony Safety Nets & Invisible Grills',
    description: 'South India\'s most trusted home safety provider. Professional balcony safety nets, marine-grade stainless steel invisible grills, pigeon spikes, child play safeguards, and sports netting in Bangalore. Request a free site inspection.',
    keywords: 'Balcony Safety Nets, Invisible Grills, Pigeon Safety Nets, Kids Safety Nets, Bird Spikes, Cricket Practice Nets, Sports Nets Installation, Druva Safety Nets'
  });
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchText, setSearchText] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideshowImages = [
    {
      src: '/image 1.jpg',
      title: 'High-Rise Balcony Safety Nets',
      desc: 'Heavy-gauge double-knotted monofilament safety netting custom-tensioned for absolute balcony fall protection.'
    },
    {
      src: '/image 2.jpg',
      title: 'Rustproof Invisible Grills',
      desc: 'Marine-grade 316 stainless steel cable wires wrapped in anti-abrasive DuPont Teflon. 100% skyline views.'
    },
    {
      src: '/image 3.jpg',
      title: 'Certified Child & Pet Safety Barriers',
      desc: 'Tough, bite-resistant safety networks designed to protect active toddlers, babies, and household pets.'
    },
    {
      src: '/image 4.jpg',
      title: 'Practice & Sports Net Enclosures',
      desc: 'Knotted high-impact nylon netting custom-fabricated for rooftop fields, cricket pitches, and schools.'
    },
    {
      src: '/image 5.jpg',
      title: 'Humane Pigeon Exclusion Nets',
      desc: 'Durable polymer grids and polycarbonate bird spikes that prevent roosting and keep ducts clean.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const categoriesList: { value: CategoryType; label: string }[] = [
    { value: 'all', label: 'All Services' },
    { value: 'bird-safety', label: 'Bird & Child Safety Nets' },
    { value: 'invisible-grill', label: 'Invisible Grill Systems' },
    { value: 'sports-industrial', label: 'Sports & Industrial Rigging' }
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchText.toLowerCase()) || 
                          service.tagline.toLowerCase().includes(searchText.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const homeFaqs = [
    { question: 'What materials are used in Druva Safety Nets?', answer: 'We use 100% Virgin High-Density Polyethylene (HDPE) and UV-stabilized copolymer nylon netting, combined with SS-304/316 grade stainless steel anchors, hooks, and tensioning cords. This ensures zero rust, high tensile breaking strength (up to 400+ kg for invisible grills), and long-lasting durability.' },
    { question: 'Do you offer a warranty on safety installations?', answer: 'Yes! We provide an official 5-Year Performance Warranty card covering color degradation, tensile strength decay, and hook structural stability under harsh outdoor sunlight and heavy rain.' },
    { question: 'How much time does it take to complete the installation?', answer: 'For standard residential balconies and window overlays, our certified high-rise technicians complete the full measurement and installation process in 1.5 to 3 hours.' },
    { question: 'Can these nets be customized for odd-shaped balconies?', answer: 'Absolutely. We custom cut, align, and tension the netting to accommodate any architectural curve, ventilation duct shaft, air conditioner unit framework, or open utility space.' }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Section (Ultra-Premium Architectural Theme) */}
      <section className="relative bg-gradient-to-br from-slate-900 via-[#0d1527] to-[#040814] text-white py-20 lg:py-28 px-6 overflow-hidden">
        {/* Background visual graphics */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.08),transparent_50%)]"></div>
        <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold font-sans tracking-wide text-brand-accent">
            <Star className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" />
            <span>South India's Most Trusted Safety Installer - <strong>DRUVA Safety Nets</strong></span>
          </div>

          {/* Premium SEO H1 Heading */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              South India's Premier <span className="text-brand-accent">Balcony Safety Nets</span> & Invisible Grills
            </h1>
            <p className="font-sans text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Architectural-grade child fall prevention netting, pigeon exclusions, and marine SS-316 invisible grills custom-tensioned for high-rise residences.
            </p>
          </div>
          
          {/* Main Visual Image Banner / Slideshow */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-64 sm:h-96 md:h-[450px] w-full bg-slate-950/20 max-w-3xl group">
            {/* Slides Loop (Crossfade with continuous scale animation when active) */}
            {slideshowImages.map((slide, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={slide.src} 
                  alt={slide.title} 
                  className="w-full h-full object-cover transition-transform duration-[4500ms] ease-out"
                  style={idx === currentSlide ? { transform: 'scale(1.05)', transition: 'transform 4500ms ease-out' } : undefined}
                />
              </div>
            ))}

            {/* Manual Arrows Navigation */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/35 hover:bg-brand-primary/80 text-white flex items-center justify-center backdrop-blur-xs border border-white/10 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/35 hover:bg-brand-primary/80 text-white flex items-center justify-center backdrop-blur-xs border border-white/10 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Interactive Progress dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {slideshowImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide ? 'w-6 bg-brand-accent' : 'w-1.5 bg-white/40 hover:bg-white/70'}`}
                  aria-label={`Jump to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mt-2">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Book Free Site Visit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:7989612281" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5">
                <PhoneCall className="w-5 h-5 mr-2 text-brand-accent" />
                +91 79896 12281
              </Button>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 border-t border-white/10 pt-8 mt-4 w-full">
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl md:text-3xl text-brand-accent">12,000+</span>
              <span className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Homes Protected</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl md:text-3xl text-brand-accent">5 Years</span>
              <span className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Full Warranty</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl md:text-3xl text-brand-accent">Same-Day</span>
              <span className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Fast Execution</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Pillars Segment */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-extrabold font-display">Specialized Offerings</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-primary leading-tight">
              Premium Safety Pillars
            </h2>
            <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
              We fabricate and rig custom high-strength netting and premium stainless-steel grill wire systems engineered for modern residences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Bird Safety Nets */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100/80 shadow-lg shadow-slate-100 flex flex-col items-start gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-xl text-brand-primary">🕸️</div>
              <h3 className="font-display font-bold text-xl text-brand-primary">Bird & Child Safety Nets</h3>
              <p className="text-slate-500 font-sans text-sm leading-relaxed">
                UV-stabilized virgin HDPE safety nets custom-measured for balcony fall prevention, pigeon protection, pet safeguards, and utility shafts by <strong>DRUVA Safety Nets</strong>.
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-sans mt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Balcony Safety Netting</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Kids Play Yard Safeguards</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Anti-Bird Ledge Spikes</li>
              </ul>
              <Link to="/services/balcony-safety-nets" className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors font-display">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 2: Invisible Grills */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100/80 shadow-lg shadow-slate-100 flex flex-col items-start gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-xl text-brand-primary">🛡️</div>
              <h3 className="font-display font-bold text-xl text-brand-primary">Invisible Grill Systems</h3>
              <p className="text-slate-500 font-sans text-sm leading-relaxed">
                Grade 316 Marine Stainless Steel wire cables running vertically or horizontally. High-tensile security with 100% skyline views.
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-sans mt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Balcony Invisible Grills</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> High-rise Window Grates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Bite-resistant Pet Grills</li>
              </ul>
              <Link to="/services/vertical-invisible-grills" className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors font-display">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 3: Sports Nets */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100/80 shadow-lg shadow-slate-100 flex flex-col items-start gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-xl text-brand-primary">⚽</div>
              <h3 className="font-display font-bold text-xl text-brand-primary">Sports & Industrial Rigging</h3>
              <p className="text-slate-500 font-sans text-sm leading-relaxed">
                Heavy-gauge knotted sports enclosures for cricket practice, soccer boundaries, rooftop fields, atriums, and duct industrial safety.
              </p>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-500 font-sans mt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Cricket Practice Box Cages</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Rooftop Ball Stop Netting</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> High-impact Debris Nets</li>
              </ul>
              <Link to="/services/cricket-practice-nets" className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors font-display">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2.5 Dynamic Services Category Explorer */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-extrabold font-display">Interactive Catalog</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-primary leading-tight">
              Explore Our Full Safety Range
            </h2>
            <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
              Browse our complete selection of 16 high-strength safety nets, invisible window grills, and sports/industrial netting solutions. Filter by category or search instantly.
            </p>
          </div>

          {/* Interactive Filtering Tabs & Search Bar */}
          <div className="flex flex-col xl:flex-row gap-6 justify-between items-center bg-slate-50 p-4 rounded-3xl border border-slate-100/80">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categoriesList.map((cat) => (
                <button 
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2.5 rounded-xl font-display font-bold text-xs tracking-wide transition-all ${activeCategory === cat.value ? 'bg-brand-primary text-white shadow-md' : 'text-slate-600 hover:bg-slate-200/50'}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full xl:w-80 shrink-0">
              <input 
                type="text" 
                placeholder="Search safety nets..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-5 py-2.5 pl-11 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary font-sans text-sm text-slate-700 shadow-sm"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">🔍</span>
              {searchText && (
                <button 
                  onClick={() => setSearchText('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm font-semibold font-sans"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Dynamic Grid Results */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <div 
                  key={service.slug}
                  className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-md shadow-slate-100 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Service Card Image */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-100 px-2.5 py-1 rounded-xl text-[10px] font-display font-extrabold uppercase tracking-wider text-brand-primary shadow-sm max-w-[85%] truncate">
                      {service.categoryLabel}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1 gap-3.5">
                    <h3 className="font-display font-black text-lg text-brand-primary leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {service.tagline}
                    </p>
                    <div className="mt-auto flex flex-col xs:flex-row gap-2 w-full pt-2">
                      <Link 
                        to={`/services/${service.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-50 text-brand-primary hover:bg-brand-primary hover:text-white font-display font-bold text-xs rounded-xl transition-all border border-slate-100"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a 
                        href="tel:7989612281"
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-brand-primary text-white hover:bg-slate-800 font-display font-bold text-xs rounded-xl transition-all shadow-sm"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 flex flex-col items-center gap-4 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <span className="text-4xl">🔎</span>
              <h3 className="font-display font-bold text-lg text-brand-primary">No Matching Services Found</h3>
              <p className="text-slate-500 font-sans text-sm leading-relaxed max-w-md">
                We couldn't find any safety nets or grills matching your search. Try adjusting your category filters or search keywords.
              </p>
              <button 
                onClick={() => { setActiveCategory('all'); setSearchText(''); }}
                className="mt-2 px-5 py-2 bg-brand-primary text-white rounded-xl font-display font-bold text-sm hover:bg-brand-primary/95 transition-all"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>



      {/* 4. Trust Signals & Material Standards */}
      <section className="py-20 px-6 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-brand-accent font-extrabold font-display">Uncompromising Quality</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
              Engineered Safety Standards
            </h2>
            <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
              We never use cheap recycled plastics or standard mild steels. Our safety systems undergo rigorous physical stress audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-3.5 p-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-brand-accent flex items-center justify-center text-xl">💎</div>
              <h4 className="font-display font-bold text-lg text-white">SS 316 Wire Core</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Invisible grills feature Marine Grade 316 Stainless Steel cores wrapped in anti-abrasive DuPont Teflon sleeve. Zero rust.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3.5 p-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-brand-accent flex items-center justify-center text-xl">☀️</div>
              <h4 className="font-display font-bold text-lg text-white">100% UV Protection</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Our polymer nets are treated with raw UV-stabilizing masterbatches, preventing color yellowing or sun decay for 8+ years.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3.5 p-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-brand-accent flex items-center justify-center text-xl">🧱</div>
              <h4 className="font-display font-bold text-lg text-white">Anodized Tracks</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Invisible grill anchor tracks are machined out of heavy structural-grade anodized aluminum alloys for absolute pull strength.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3.5 p-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-brand-accent flex items-center justify-center text-xl">🎖️</div>
              <h4 className="font-display font-bold text-lg text-white">Licensed Riggers</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                All high-elevation safety rope fitments are executed by technicians certified in active safety harnesses and fall arresters.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FAQs Segment */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="text-center flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-extrabold font-display">FAQ Center</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-primary leading-tight">
              Pre-Sale Customer Queries
            </h2>
            <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
              Find transparent answers regarding materials, scheduling, warranty, and structural rigging procedures.
            </p>
          </div>

          <Accordion items={homeFaqs} />

        </div>
      </section>

    </div>
  );
};
