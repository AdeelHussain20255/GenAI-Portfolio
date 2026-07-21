import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[#0A0A0A] text-white flex flex-col justify-center px-6 lg:px-16 py-12 overflow-hidden">
      
      {/* 1. GIANT CONDENSED BACKDROP TEXT */}
      <div className="absolute top-6 left-0 w-full flex justify-center pointer-events-none select-none z-0">
        <h1 className="text-[16vw] xl:text-[15rem] font-black tracking-tighter text-[#E50914] leading-none uppercase opacity-90">
          PORTFOLIO
        </h1>
      </div>

      {/* 2. MAIN HERO CONTENT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end max-w-7xl mx-auto w-full pt-20">
        
        {/* LEFT COLUMN: NAME & BIO */}
        <div className="lg:col-span-5 space-y-4 z-10 mb-2">
          <p className="font-serif italic text-gray-300 text-2xl">Hello, I'm</p>
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85]">
            ADEEL<br />HUSSAIN
          </h2>
          <p className="text-[#E50914] font-bold text-xs tracking-widest uppercase pt-2">
            BSCS STUDENT & GEN AI ENGINEER
          </p>
          <p className="text-gray-300 text-sm max-w-md leading-relaxed pt-1 font-normal">
            3rd-semester BSCS student at DUET specializing in Generative AI, LLM workflows, and intelligent agent backends using Python, FastAPI, Next.js, and Java.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              OPEN TO OPPORTUNITIES
            </span>
          </div>
        </div>
    {/* RIGHT COLUMN: ZOOMED ARCH PORTRAIT + FAR-RIGHT STATS */}
    <div className="lg:col-span-7 relative flex flex-col sm:flex-row items-end justify-end gap-6 w-full">
      
      {/* Floating Red '+' Accent */}
      <span className="absolute bottom-10 left-2 lg:-left-6 text-[#E50914] font-bold text-2xl select-none z-30 animate-pulse">
        +
      </span>

      {/* CURVED ARCH PORTRAIT CONTAINER */}
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[410px]">
        
        {/* Deep Red Glow Base */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[110%] h-36 bg-[#E50914]/30 blur-3xl rounded-full pointer-events-none z-0" />

        {/* Rounded Arch Mask Container */}
        <div className="relative z-10 w-full h-[460px] lg:h-[520px] rounded-b-[180px] overflow-hidden bg-gradient-to-b from-transparent via-[#0A0A0A]/30 to-[#180303] border-b-2 border-[#E50914] shadow-[0_25px_50px_rgba(229,9,20,0.4)] flex items-end justify-center">
          <img 
            src="/profile.png" 
            alt="Adeel Hussain" 
            className="w-full h-[115%] max-w-none object-cover object-top"
          />
        </div>
      </div>

      {/* FAR-RIGHT STATS */}
      <div className="space-y-5 text-left sm:text-right z-10 min-w-[160px] mb-2">
        <p className="text-gray-300 text-xs leading-relaxed max-w-[160px]">
          Architecting intelligent AI workflows & production-grade backend systems.
        </p>
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div>
            <h3 className="text-3xl font-black text-[#E50914]">2029</h3>
            <p className="text-[9px] tracking-wider uppercase text-gray-400 font-medium">
              EXPECTED GRADUATION (DUET)
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-black text-[#E50914]">6+</h3>
            <p className="text-[9px] tracking-wider uppercase text-gray-400 font-medium">
              MONTHS GEN AI (S.M.I.T)
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-black text-[#E50914]">10+</h3>
            <p className="text-[9px] tracking-wider uppercase text-gray-400 font-medium">
              PROJECTS & AGENTS BUILT
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}
