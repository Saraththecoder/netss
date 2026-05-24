import React, { useState } from 'react';
import { BeforeAfter } from '../components/ui/BeforeAfter';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'nets' | 'grills' | 'sports'>('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Balcony Safety Netting Fitment',
      category: 'nets',
      img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop',
      desc: 'Translucent 1mm mesh fitted over apartment balcony parapet.'
    },
    {
      id: 2,
      title: 'Stainless Steel Invisible Grill',
      category: 'grills',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      desc: 'Vertical 316 steel wire rails spaced at 3 inches in high-rise window.'
    },
    {
      id: 3,
      title: 'Rooftop Cricket Box Cage',
      category: 'sports',
      img: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=800&auto=format&fit=crop',
      desc: 'Heavy-gauge black HDPE cricket net rigged with steel support columns.'
    },
    {
      id: 4,
      title: 'Hygienic Pigeon Exclusion Netting',
      category: 'nets',
      img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
      desc: 'Tension-fit pigeon exclusion netting over building open duct shaft.'
    },
    {
      id: 5,
      title: 'Horizontal Invisible Balcony Grill',
      category: 'grills',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
      desc: 'Sleek horizontal steel line arrays providing open views & fall safety.'
    },
    {
      id: 6,
      title: 'Galvanized Football Stop netting',
      category: 'sports',
      img: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=800&auto=format&fit=crop',
      desc: 'High boundary perimeter netting rigged over seaside academy turf.'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="flex flex-col w-full bg-slate-50/50">
      {/* 1. Header */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto flex flex-col gap-3 relative z-10">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold font-display">Completed Projects Portfolio</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Our Installation Showcase
          </h1>
          <p className="font-sans text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Inspect our real-life Before/After sliding comparisons and explore our gallery of premium residential safety rigs.
          </p>
        </div>
      </section>

      {/* 2. Before/After Showcase Segment */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col gap-3 max-w-lg mx-auto">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-extrabold font-display">Interactive Comparison</span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-brand-primary">Drag to Reveal Transformation</h2>
            <p className="text-slate-500 font-sans text-xs sm:text-sm">
              Use the sliding bar to compare a vulnerable open-air balcony space with our high-tension, professionally anchored safety net and invisible grill fittings.
            </p>
          </div>

          <BeforeAfter 
            beforeImage="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop" 
            afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
            beforeLabel="Untreated Balcony Void"
            afterLabel="DuPont Teflon Coated SS-316 Invisible Grills"
          />
        </div>
      </section>

      {/* 3. Photo Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          {/* Tab Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 ${activeTab === 'all' ? 'bg-brand-primary text-white shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              All Rigs
            </button>
            <button
              onClick={() => setActiveTab('nets')}
              className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 ${activeTab === 'nets' ? 'bg-brand-primary text-white shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              Safety/Pigeon Nets
            </button>
            <button
              onClick={() => setActiveTab('grills')}
              className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 ${activeTab === 'grills' ? 'bg-brand-primary text-white shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              Invisible Grills
            </button>
            <button
              onClick={() => setActiveTab('sports')}
              className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all duration-200 ${activeTab === 'sports' ? 'bg-brand-primary text-white shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              Sports Net Enclosures
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-display font-bold text-brand-primary shadow uppercase tracking-wider">
                    {item.category === 'nets' ? 'Safety Nets' : item.category === 'grills' ? 'Invisible Grills' : 'Sports Nets'}
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-display font-bold text-lg text-brand-primary leading-tight">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
