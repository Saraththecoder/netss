import React, { useState } from 'react';
import { AccordionItem } from '../components/ui/Accordion';
import { Search, HelpCircle, PhoneCall } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Faq: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'materials' | 'install' | 'pricing'>('all');

  const faqItems = [
    {
      category: 'materials',
      question: 'What materials are used in Sanjay Safety Nets?',
      answer: 'We use 100% Virgin High-Density Polyethylene (HDPE) and UV-stabilized copolymer nylon netting, combined with SS-304/316 grade stainless steel anchors, hooks, and tensioning cords. This ensures zero rust, high tensile breaking strength (up to 400+ kg for invisible grills), and long-lasting durability.'
    },
    {
      category: 'materials',
      question: 'Do your invisible grills rust in humid or coastal climates?',
      answer: 'No. Our invisible grills are fabricated using Marine Grade 316 Stainless Steel cores fully encased in high-performance DuPont Nylon or Teflon coatings. They are completely rust-proof, salt-water proof, and acid-rain proof.'
    },
    {
      category: 'install',
      question: 'How much time does it take to complete the installation?',
      answer: 'For standard residential balconies and window overlays, our certified high-rise technicians complete the full measurement and installation process in 1.5 to 3 hours.'
    },
    {
      category: 'install',
      question: 'Do you charge for site inspection or measurement quotes?',
      answer: 'No. We provide 100% Free Site Inspection and Measurement audits. Our technical advisor visits your site, demonstrates material samples, measures the area, and provides a transparent quote without any commitment.'
    },
    {
      category: 'pricing',
      question: 'How is the pricing of safety nets calculated?',
      answer: 'Our pricing is calculated per square foot of the covered area. Bird safety nets start around ₹12/sq.ft. including materials and installation. Invisible grills start from ₹110/sq.ft. depending on wire diameter (2mm to 3mm) and mounting track specifications.'
    },
    {
      category: 'pricing',
      question: 'Do you provide a warranty on safety installations?',
      answer: 'Yes! We provide an official 5-Year Performance Warranty card covering color degradation, tensile strength decay, and hook structural stability under harsh outdoor sunlight and heavy rain.'
    },
    {
      category: 'materials',
      question: 'Can monkeys or squirrels tear through these nets?',
      answer: 'Standard bird netting can be bitten through by aggressive monkeys or squirrels. For such environments, we install specialized 3.0mm thick steel-reinforced Monkey Nets (HDPE braided with internal stainless steel core cords) which are completely chew-proof.'
    }
  ];

  const filteredFaqs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col w-full bg-slate-50/50">
      {/* 1. Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto flex flex-col gap-3 relative z-10">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-extrabold font-display">Got Questions?</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Safety FAQs Directory
          </h1>
          <p className="font-sans text-slate-400 text-sm sm:text-base max-w-md mx-auto">
            Find transparent answers regarding materials, scheduling, pricing models, and structural rigging procedures.
          </p>
        </div>
      </section>

      {/* 2. Search & Filters */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          
          {/* Interactive Search Bar */}
          <div className="relative w-full max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search questions (e.g. rust, warranty, price)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl font-sans text-brand-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500/20 focus:border-slate-800 transition-all shadow-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all ${activeCategory === 'all' ? 'bg-brand-primary text-white shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              All FAQs
            </button>
            <button
              onClick={() => setActiveCategory('materials')}
              className={`px-4 py-2 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all ${activeCategory === 'materials' ? 'bg-brand-primary text-white shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              Materials & Specs
            </button>
            <button
              onClick={() => setActiveCategory('install')}
              className={`px-4 py-2 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all ${activeCategory === 'install' ? 'bg-brand-primary text-white shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              Installation Fits
            </button>
            <button
              onClick={() => setActiveCategory('pricing')}
              className={`px-4 py-2 rounded-xl font-display font-bold text-xs tracking-wider uppercase transition-all ${activeCategory === 'pricing' ? 'bg-brand-primary text-white shadow' : 'bg-white text-slate-600 border border-slate-200/60 hover:bg-slate-100/50'}`}
            >
              Pricing & Warranty
            </button>
          </div>

          {/* Collapsible List */}
          <div className="flex flex-col gap-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
                <HelpCircle className="w-10 h-10 text-slate-300 mb-3" />
                <span className="font-display font-bold text-slate-700 text-lg mb-1">No matches found</span>
                <span className="text-xs text-slate-400 font-sans">Try searching with other safety terms.</span>
              </div>
            )}
          </div>

          {/* Quick Support Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-slate-900/10 mt-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-bold text-xl">Still have custom questions?</h3>
              <p className="text-xs text-slate-400 font-sans max-w-sm">
                Connect with our local customer relations lead for immediate support or customized building estimates.
              </p>
            </div>
            <a href="tel:9980493004">
              <Button variant="whatsapp" className="whitespace-nowrap">
                <PhoneCall className="w-4 h-4 mr-2" />
                Call +91 9980493004
              </Button>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};
