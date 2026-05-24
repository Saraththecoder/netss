import React from 'react';
import { Phone, MessageSquare, Mail } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
      <div className="glass-card-dark rounded-full py-3.5 px-6 flex items-center justify-between shadow-2xl border border-white/10 gap-4">
        {/* Call Now */}
        <a 
          href="tel:9980493004" 
          className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors duration-200"
          title="Call Sanjay Safety Nets"
        >
          <div className="w-8 h-8 rounded-full bg-red-500/25 text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
            <Phone className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-xs tracking-wide uppercase hidden xs:inline">Call Now</span>
        </a>

        {/* Vertical Separator */}
        <div className="h-5 w-px bg-white/10"></div>

        {/* WhatsApp Chat */}
        <a 
          href="https://api.whatsapp.com/send?phone=+919980493004&text=Hello Sanjay Safety Nets, I would like to get a quote and details for Safety Nets / Invisible Grills." 
          className="flex items-center gap-2 text-white hover:text-green-400 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Chat"
        >
          <div className="w-8 h-8 rounded-full bg-green-500/25 text-green-400 flex items-center justify-center shrink-0 border border-green-500/20 animate-pulse">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-xs tracking-wide uppercase">WhatsApp</span>
        </a>

        {/* Vertical Separator */}
        <div className="h-5 w-px bg-white/10"></div>

        {/* Email Inquiry */}
        <a 
          href="mailto:sanjaynets2025@gmail.com" 
          className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors duration-200"
          title="Email Sanjay Safety Nets"
        >
          <div className="w-8 h-8 rounded-full bg-slate-500/25 text-slate-300 flex items-center justify-center shrink-0 border border-slate-500/20">
            <Mail className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-xs tracking-wide uppercase hidden xs:inline">Email</span>
        </a>
      </div>
    </div>
  );
};
