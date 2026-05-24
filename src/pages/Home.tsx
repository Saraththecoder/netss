import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { BeforeAfter } from '../components/ui/BeforeAfter';
import { QuoteForm } from '../components/ui/QuoteForm';
import { Accordion } from '../components/ui/Accordion';

export const Home: React.FC = () => {
  const homeFaqs = [
    { question: 'What materials are used in Druva Safety Nets?', answer: 'We use 100% Virgin High-Density Polyethylene (HDPE) and UV-stabilized copolymer nylon netting, combined with SS-304/316 grade stainless steel anchors, hooks, and tensioning cords. This ensures zero rust, high tensile breaking strength (up to 400+ kg for invisible grills), and long-lasting durability.' },
    { question: 'Do you offer a warranty on safety installations?', answer: 'Yes! We provide an official 5-Year Performance Warranty card covering color degradation, tensile strength decay, and hook structural stability under harsh outdoor sunlight and heavy rain.' },
    { question: 'How much time does it take to complete the installation?', answer: 'For standard residential balconies and window overlays, our certified high-rise technicians complete the full measurement and installation process in 1.5 to 3 hours.' },
    { question: 'Can these nets be customized for odd-shaped balconies?', answer: 'Absolutely. We custom cut, align, and tension the netting to accommodate any architectural curve, ventilation duct shaft, air conditioner unit framework, or open utility space.' }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Section (Ultra-Premium Architectural Theme) */}
      <section className="relative bg-gradient-to-br from-slate-900 via-[#0d1527] to-[#040814] text-white py-20 lg:py-32 px-6 overflow-hidden">
        {/* Background visual graphics */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.08),transparent_50%)]"></div>
        <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold font-sans tracking-wide text-brand-accent">
              <Star className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" />
              <span>South India's Most Trusted Safety Installer</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
              Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400">Safety Systems</span> for Modern Living
            </h1>
            
            <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Replace bulky iron grates. Protect your children and pets with premium high-tensile safety netting and marine-grade stainless steel invisible grills. 100% natural views, zero compromises.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Book Free Site Visit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:7989612281">
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

          {/* Hero Right Media / Floating Glass Card */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="glass-card-dark rounded-3xl p-6 md:p-8 w-full border border-white/10 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-accent flex items-center justify-center font-display font-bold">⚡</div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">Instant Online Quote</h3>
                  <p className="text-[10px] text-slate-400 font-sans">Get budget calculations in 30 seconds</p>
                </div>
              </div>
              <QuoteForm />
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
              Architectural Safety Pillars
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
                UV-stabilized virgin HDPE safety nets custom-measured for balcony fall prevention, pigeon protection, pet safeguards, and utility shafts.
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
              <Link to="/services/invisible-grill-nets" className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors font-display">
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

      {/* 3. Before/After Interactive Comparison Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-extrabold font-display">Visual Proof</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-primary leading-tight">
              Breathtaking Balcony Transformation
            </h2>
            <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
              Don't compromise your luxury high-rise view with ugly iron bar cages or deal with constant unhygienic pigeon roosting. 
            </p>
            <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
              Our professional thin-mesh installations provide absolute security against bird nesting and high-floor falls while staying practically invisible from a distance.
            </p>
            
            <div className="flex flex-col gap-3 mt-2 w-full">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                <span className="text-sm font-semibold text-slate-700 font-sans">Allows 100% natural breeze and sunlight</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5" /></div>
                <span className="text-sm font-semibold text-slate-700 font-sans">Maintains home premium facade value</span>
              </div>
            </div>
            
            <Link to="/gallery" className="mt-2">
              <Button variant="outline">Browse Gallery</Button>
            </Link>
          </div>

          {/* Slider Right */}
          <div className="lg:col-span-7 w-full">
            <BeforeAfter 
              beforeImage="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop" 
              afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
              beforeLabel="Bare Balcony (Vulnerable to Birds & Falls)"
              afterLabel="Tension-Fit Safety Installation"
            />
          </div>

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
              Find transparent answers regarding materials, scheduling, pricing models, and structural rigging procedures.
            </p>
          </div>

          <Accordion items={homeFaqs} />

        </div>
      </section>

    </div>
  );
};
