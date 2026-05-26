import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Award, CheckCircle } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Split the 16 services dynamically and balance them (8 in Column 1, 8 in Column 2)
  const birdSafetySlugs = servicesData
    .filter(s => s.category === 'bird-safety')
    .slice(0, 8)
    .map(s => ({ name: s.title, path: `/services/${s.slug}` }));

  const grillSportsSlugs = [
    ...servicesData.filter(s => s.category === 'bird-safety').slice(8).map(s => ({ name: s.title, path: `/services/${s.slug}` })),
    ...servicesData.filter(s => s.category === 'invisible-grill' || s.category === 'sports-industrial').map(s => ({ name: s.title, path: `/services/${s.slug}` }))
  ];

  const coverageAreas = [
    'Electronic City',
    'Bannerughatta',
    'Varthur',
    'Sarjapur',
    'Marthahalli',
    'East Bangalore (Whitefield, Bellandur, HSR)',
    'South Bangalore (Jayanagar, JP Nagar, E-City)',
    'North Bangalore (Hebbal, Yelahanka, Vidyaranyapura)',
    'West Bangalore (RR Nagar, Rajajinagar, Kengeri)',
    'Central Bangalore (Indiranagar, Malleshwaram)',
  ];

  return (
    <footer className="bg-brand-primary text-slate-300 font-sans border-t border-slate-800 pt-16 pb-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <img src="/logo.jpeg" alt="Druva Safety Nets" className="w-9 h-9 rounded-xl object-cover shadow border border-slate-700 bg-white animate-mover" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base leading-tight uppercase tracking-wider">
                Druva Safety Nets
              </span>
              <span className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">
                Pigeon Nets & Invisible Grills
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400 font-sans leading-relaxed">
            South India's premier provider of high-tension balcony netting and marine-grade stainless steel invisible grills. Certified high-rise engineering safety standards.
          </p>
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/druva_safety_nets?igsh=MTM3dHhhbXVveHhxdg==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:border-slate-700"
              title="Follow Druva Safety Nets on Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
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
          <h4 className="font-display font-bold text-white tracking-wider text-sm uppercase">Bird & Child Safety</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            {birdSafetySlugs.map((slug) => (
              <li key={slug.path}>
                <Link to={slug.path} className="hover:text-white transition-colors duration-150">
                  {slug.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Grills & Sports */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-white tracking-wider text-sm uppercase">Grills, Sports & Utilities</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            {grillSportsSlugs.map((slug) => (
              <li key={slug.path}>
                <Link to={slug.path} className="hover:text-white transition-colors duration-150">
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
                <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 mt-2 flex flex-col gap-2.5">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">Corporate HQ</span>
              <span className="text-xs text-slate-400 leading-relaxed font-sans block">
                12, 1st Cross, HMT Layout, Vidyaranyapura, Bengaluru, Karnataka 560097
              </span>
            </div>
            <div className="border-t border-slate-800/80 pt-2 flex flex-col gap-0.5 text-xs">
              <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider block">Direct Email</span>
              <a href="mailto:Druvasafetynets@gmail.com" className="text-slate-300 hover:text-white transition-colors break-all">
                Druvasafetynets@gmail.com
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal & Verification Info */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-slate-600" />
          <span>© {currentYear} Druva Safety Nets. All rights reserved.</span>
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
