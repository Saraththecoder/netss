import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Award, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const birdSafetySlugs = [
    { name: 'Balcony Safety Nets', path: '/services/balcony-safety-nets' },
    { name: 'Kids Nets for Balcony', path: '/services/kids-net-for-balcony' },
    { name: 'Pets Safety Nets', path: '/services/pets-safety-nets' },
    { name: 'Pigeon Safety Nets', path: '/services/pigeon-safety-nets' },
    { name: 'Duct Area Nets', path: '/services/duct-area-safety-nets' },
  ];

  const grillSportsSlugs = [
    { name: 'Invisible Grill Systems', path: '/services/invisible-grill-nets' },
    { name: 'Invisible Grills for Balcony', path: '/services/invisible-grill-nets-for-balcony' },
    { name: 'Cricket Practice Nets', path: '/services/cricket-practice-nets' },
    { name: 'Rooftop Sports Nets', path: '/services/terrace-cricket-nets' },
    { name: 'Industrial Safety Nets', path: '/services/industrial-safety-nets' },
  ];

  const coverageAreas = [
    'Bangalore / Bengaluru',
    'Chennai / Madras',
    'Hyderabad / Secunderabad',
    'Mysore / Mysuru',
    'Coimbatore & Salem',
  ];

  return (
    <footer className="bg-brand-primary text-slate-300 font-sans border-t border-slate-800 pt-16 pb-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white text-brand-primary rounded-xl flex items-center justify-center font-display font-extrabold text-lg">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base leading-tight uppercase tracking-wider">
                Dhruva Safety Nets
              </span>
              <span className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">
                Architectural Safety Systems
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            South India's premier provider of high-tension balcony netting and marine-grade stainless steel invisible grills. Certified high-rise engineering safety standards.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>ISO 9001:2015 Material Certified</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>5 Years Comprehensive Warranty</span>
            </div>
          </div>
        </div>

        {/* Column 2: Bird Nets Services */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-white tracking-wider text-sm uppercase">Bird & Child Protection</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            {birdSafetySlugs.map((slug) => (
              <li key={slug.path}>
                <Link to={slug.path} className="hover:text-amber-400 transition-colors duration-150">
                  {slug.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Grills & Sports */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-white tracking-wider text-sm uppercase">Grills & Sports nets</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            {grillSportsSlugs.map((slug) => (
              <li key={slug.path}>
                <Link to={slug.path} className="hover:text-amber-400 transition-colors duration-150">
                  {slug.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Coverage & Verification */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-white tracking-wider text-sm uppercase">Regional Presence</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
            {coverageAreas.map((area) => (
              <li key={area} className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 mt-2">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">Corporate HQ</span>
            <span className="text-xs text-slate-400 leading-relaxed font-sans block">
              12, 1st Cross, HMT Layout, Vidyaranyapura, Bengaluru, Karnataka 560097
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Legal & Verification Info */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-slate-600" />
          <span>© {currentYear} Dhruva Safety Nets. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/about" className="hover:underline">About Company</Link>
          <Link to="/faq" className="hover:underline">FAQs</Link>
          <Link to="/blog" className="hover:underline">Sitemap & Guides</Link>
        </div>
      </div>
    </footer>
  );
};
