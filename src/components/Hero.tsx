import React, { useState, useEffect } from 'react';
import SpecialText from '@/components/ui/special-text';
import TextShimmer from '@/components/ui/text-shimmer';

export default function Hero() {
  const [helloKey, setHelloKey] = useState(0);
  const [statsKey, setStatsKey] = useState(0);

  useEffect(() => {
    const helloTimer = setInterval(() => {
      setHelloKey((prev) => prev + 1);
    }, 8000);
    return () => clearInterval(helloTimer);
  }, []);

  useEffect(() => {
    const statsTimer = setInterval(() => {
      setStatsKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(statsTimer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] text-white flex flex-col justify-start sm:justify-between px-6 lg:px-16 pt-12 sm:pt-20 pb-12">

      {/* 2. MAIN HERO CONTENT */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-end max-w-7xl mx-auto w-full mt-2 sm:my-auto">

        {/* LEFT COLUMN: NAME & BIO */}
        <div className="lg:col-span-5 space-y-4 z-10 mb-2">
          <SpecialText key={`hello-${helloKey}`} className="text-neutral-400 font-serif italic text-lg" delay={0.2} inView>
            Hello, I'm
          </SpecialText>
          <h2 className="glow-text-white text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85]">
            ADEEL<br />HUSSAIN
          </h2>
          <TextShimmer
            duration={2}
            className="text-xs md:text-sm font-mono font-bold tracking-wider uppercase [--base-color:#E50914] [--base-gradient-color:#ffffff]"
          >
            BSCS STUDENT & GEN AI ENGINEER
          </TextShimmer>
          <p className="text-gray-300 text-sm max-w-md leading-relaxed pt-1 font-normal">
            3rd-semester BSCS student at DUET specializing in Generative AI, LLM workflows, and intelligent agent backends using Python, FastAPI, Next.js, and Java.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-pulse" />
            <TextShimmer
              duration={1.8}
              className="text-[10px] md:text-xs font-mono uppercase tracking-widest [--base-color:#a1a1aa] [--base-gradient-color:#E50914]"
            >
              OPEN TO OPPORTUNITIES
            </TextShimmer>
          </div>
        </div>

        {/* RIGHT COLUMN: ZOOMED ARCH PORTRAIT + FAR-RIGHT STATS */}
        <div className="lg:col-span-7 relative flex flex-col sm:flex-row items-end justify-end gap-6 w-full max-w-[320px] md:max-w-none mx-auto sm:mx-0">

          {/* Floating Red '+' Accent */}
          <span className="hidden md:block absolute bottom-10 left-2 lg:-left-6 text-[#E50914] font-bold text-2xl select-none z-30 animate-pulse">
            +
          </span>

          {/* CURVED ARCH PORTRAIT CONTAINER */}
          <div className="relative flex justify-center items-center w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[410px]">

            {/* GIANT BACKDROP TEXT anchored to photo */}
            <h1
              className="absolute -top-10 sm:-top-14 md:-top-16 left-1/2 -translate-x-1/2 text-[18vw] md:text-[14.5vw] font-black uppercase text-[#E50914] tracking-tight leading-none select-none pointer-events-none z-0 whitespace-nowrap scale-x-[1.05] scale-y-[1.12] origin-center"
              style={{
                textShadow: '0 0 15px rgba(229, 9, 20, 0.9), 0 0 35px rgba(229, 9, 20, 0.8), 0 0 75px rgba(229, 9, 20, 0.6), 0 0 120px rgba(229, 9, 20, 0.4)'
              }}
            >
              PORTFOLIO
            </h1>

            {/* Deep Red Glow Base */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[120%] h-48 bg-gradient-to-b from-[#E50914]/20 via-[#E50914]/5 to-transparent blur-3xl rounded-full pointer-events-none z-0" />

            {/* Rounded Arch Mask Container */}
            <div className="relative z-10 w-full h-[360px] md:h-[500px] lg:h-[520px] rounded-b-[180px] overflow-hidden bg-gradient-to-b from-transparent via-[#0A0A0A]/30 to-[#180303] border-b-2 border-[#E50914] shadow-[0_25px_50px_rgba(229,9,20,0.4)] flex items-end justify-center">
              <img 
                src="/profile.png" 
                alt="Adeel Hussain" 
                className="w-full h-[115%] max-w-none object-cover object-top"
              />
            </div>
          </div>

          {/* FAR-RIGHT STATS */}
          <div className="space-y-5 text-left sm:text-right z-10 min-w-[160px] mb-2">
            <TextShimmer
              duration={2.5}
              className="text-xs md:text-sm text-neutral-400 font-normal leading-relaxed [--base-color:#a1a1aa] [--base-gradient-color:#ffffff]"
            >
              Architecting intelligent AI workflows & production-grade backend systems.
            </TextShimmer>
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div>
                <h3 className="glow-text-red text-3xl md:text-5xl font-black text-[#E50914] select-none">2029</h3>
                <SpecialText key={`grad-${statsKey}`} className="text-neutral-500 text-[10px] md:text-xs font-mono uppercase tracking-wider" delay={0.6} inView>
                  EXPECTED GRADUATION (DUET)
                </SpecialText>
              </div>
              <div>
                <h3 className="glow-text-red text-3xl md:text-5xl font-black text-[#E50914] select-none">6+</h3>
                <SpecialText key={`smit-${statsKey}`} className="text-neutral-500 text-[10px] md:text-xs font-mono uppercase tracking-wider" delay={0.8} inView>
                  MONTHS GEN AI (S.M.I.T)
                </SpecialText>
              </div>
              <div>
                <h3 className="glow-text-red text-3xl md:text-5xl font-black text-[#E50914] select-none">10+</h3>
                <SpecialText key={`projects-${statsKey}`} className="text-neutral-500 text-[10px] md:text-xs font-mono uppercase tracking-wider" delay={1.0} inView>
                  PROJECTS & AGENTS BUILT
                </SpecialText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
