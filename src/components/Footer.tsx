'use client';

import { useState, useEffect } from 'react';
import SpecialText from '@/components/ui/special-text';

export default function Footer() {
  const [triggerKey, setTriggerKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTriggerKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0A0A] text-white border-t border-white/10 py-8 px-6 lg:px-16 overflow-hidden">
      
      {/* FAR RIGHT VERTICAL ACCENT BAR */}
      <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#E50914]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pr-4">
        
        {/* LEFT: LOGO & COPYRIGHT */}
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl font-black uppercase tracking-wider text-white">
            <span className="glow-text-white text-white">ADEEL HUSSAIN</span><span className="glow-text-red text-[#E50914]">.</span>
          </h3>
          <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
            © 2026 ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* CENTER: NAV / SOCIAL LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono tracking-widest text-gray-400 uppercase">
          <a 
            href="https://github.com/AdeelHussain20255" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a 
            href="https://linkedin.com/in/adeel--dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=100068665982886" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            FACEBOOK
          </a>
          <a 
            href="mailto:adeelhussain20255@gmail.com" 
            className="hover:text-white transition-colors"
          >
            EMAIL
          </a>
        </div>

        {/* RIGHT: BACK TO TOP PILL BUTTON */}
        <div>
          <button
            onClick={scrollToTop}
            className="border border-white/20 hover:border-[#E50914] text-gray-300 hover:text-white px-5 py-2 rounded-full text-xs font-mono tracking-wide flex items-center gap-1.5 transition-all duration-300 hover:bg-[#E50914]/10"
          >
            <SpecialText key={triggerKey}>Back to Top</SpecialText>
            <span className="text-[#E50914] glow-text-red font-bold">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
