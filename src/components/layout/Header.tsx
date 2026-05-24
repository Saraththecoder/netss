import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
      {/* Top Banner Bar */}
      <div className="bg-brand-primary text-white text-[11px] md:text-xs font-sans py-2 px-6 flex items-center justify-between tracking-wide font-medium">
        <div className="flex items-center gap-1.5 md:gap-3">
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> ISO Certified Materials</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">📞 +91 99804 93004</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:9980493004" className="hover:text-amber-400 transition-colors">Call Support</a>
          <span>|</span>
          <span className="text-amber-400">★ 4.9 rated on Google</span>
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
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-display font-extrabold text-xl shadow">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-brand-primary text-base md:text-lg leading-tight uppercase tracking-wider">
                Sanjay Safety Nets
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
              href="tel:9980493004" 
              className="flex items-center gap-2 text-sm font-display font-bold text-slate-700 hover:text-brand-accent transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <Phone className="w-4 h-4" />
              </div>
              +91 9980493004
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
        className={`fixed top-[88px] bottom-0 right-0 z-30 w-72 bg-white border-l border-slate-100 shadow-2xl p-6 flex flex-col gap-6 lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
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
            href="tel:9980493004"
            className="flex items-center gap-3 font-display font-extrabold text-brand-primary py-2.5 px-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all text-sm justify-center"
          >
            <Phone className="w-4 h-4 text-brand-accent" />
            +91 9980493004
          </a>
          <Link to="/contact" className="w-full">
            <Button className="w-full" size="sm">Get Free Estimate</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
