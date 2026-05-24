import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

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

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Safety FAQs', path: '/faq' },
    { name: 'Guides', path: '/blog' },
    { name: 'Get Free Estimate', path: '/contact' },
  ];

  return (
    <>
      <div className="bg-brand-primary text-white text-[11px] md:text-xs font-sans py-2 px-6 flex items-center justify-between tracking-wide font-medium">
        <div className="flex items-center gap-1.5 md:gap-3">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-slate-300" /> ISO Certified Materials</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">📞 +91 79896 12281</span>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="https://www.instagram.com/druva_safety_nets?igsh=MTM3dHhhbXVveHhxdg==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-300 transition-colors flex items-center gap-1.5"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Instagram</span>
          </a>
          <span>|</span>
          <a href="tel:7989612281" className="hover:text-slate-300 transition-colors">Call Support</a>
          <span>|</span>
          <span className="text-slate-300">★ 4.9 rated on Google</span>
        </div>
      </div>

      {/* Sticky Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav py-3 shadow-md' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.jpeg" alt="Druva Safety Nets" className="w-10 h-10 rounded-xl object-cover shadow border border-slate-100" />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-brand-primary text-base md:text-lg leading-tight uppercase tracking-wider">
                Druva Safety Nets
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold font-sans">
                Architectural Safety Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-sm font-semibold tracking-wide hover:text-brand-accent transition-colors duration-200 ${
                  location.pathname === link.path 
                    ? 'text-brand-accent' 
                    : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call Trigger CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:7989612281" 
              className="flex items-center gap-2 text-sm font-display font-bold text-slate-700 hover:text-brand-accent transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <Phone className="w-4 h-4" />
              </div>
              +91 79896 12281
            </a>
            <Link to="/contact">
              <Button size="sm">Get Free Inspection</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-slate-50 transition-colors text-brand-primary focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-brand-primary/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed ${isScrolled ? 'top-[65px]' : 'top-[105px]'} bottom-0 right-0 z-30 w-72 bg-white border-l border-slate-100 shadow-2xl p-6 flex flex-col gap-6 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-display text-base font-bold py-2 border-b border-slate-50 hover:text-brand-accent transition-colors ${
                location.pathname === link.path 
                  ? 'text-brand-accent' 
                  : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-slate-100">
          <a
            href="tel:7989612281"
            className="flex items-center gap-3 font-display font-extrabold text-brand-primary py-2.5 px-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all text-sm justify-center"
          >
            <Phone className="w-4 h-4 text-brand-accent" />
            +91 79896 12281
          </a>
          <Link to="/contact" className="w-full" onClick={() => setIsOpen(false)}>
            <Button className="w-full" size="sm">Get Free Estimate</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
