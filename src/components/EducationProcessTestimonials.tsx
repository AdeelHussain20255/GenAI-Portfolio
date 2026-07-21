import React from 'react';
import { Briefcase, Cpu, Sparkles, Terminal, Quote } from 'lucide-react';

export default function Qualifications() {
  return (
    <section id="about" className="relative min-h-screen bg-[#0A0A0A] text-white px-6 lg:px-16 py-20 flex flex-col justify-center">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* ================= COLUMN 1: EDUCATION & SKILLS ================= */}
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Header with Red Vertical Accent Line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-[#E50914] rounded-full" />
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                EDUCATION
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 space-y-7 border-l border-white/10 ml-2">
              
              {/* Item 1 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#E50914] bg-[#121212]" />
                <h3 className="text-base font-bold text-white leading-snug">
                  B.Sc. Computer Science
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Dawood University of Eng. & Tech. (DUET)
                </p>
                <p className="text-[11px] font-mono text-[#E50914] mt-1">
                  2025 — 2029
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#E50914] bg-[#121212]" />
                <h3 className="text-base font-bold text-white leading-snug">
                  Generative AI & Chatbots
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Saylani Mass I.T Training (S.M.I.T)
                </p>
                <p className="text-[11px] font-mono text-[#E50914] mt-1">
                  2025 — 2026
                </p>
              </div>

            </div>
          </div>

          {/* Skills Divider & Badges */}
          <div className="pt-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[1px] bg-white/10 flex-1" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                SKILLS
              </span>
              <div className="h-[1px] bg-white/10 flex-1" />
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                'PYTHON', 'FASTAPI', 'NEXT.JS', 'JAVA', 
                'DIALOGFLOW', 'N8N AGENTS', 'DATA PIPELINES', 
                'C++', 'KOMMUNICATE', 'HTML/CSS/JS'
              ].map((skill) => (
                <span 
                  key={skill}
                  className="bg-[#181818] border border-white/5 px-3 py-1.5 rounded-md text-[10px] font-bold tracking-wider text-gray-300 uppercase hover:border-[#E50914]/40 hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= COLUMN 2: EXPERIENCE (REAL DATA) ================= */}
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Header with Red Vertical Accent Line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-[#E50914] rounded-full" />
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                EXPERIENCE
              </h2>
            </div>

            {/* Experience List */}
            <div className="space-y-6">
              {[
                {
                  date: 'JUL 2026 — AUG 2026',
                  title: 'Gen AI & Prompt Eng. Intern',
                  company: 'NeuroFive Solutions',
                  desc: 'Building custom LLM workflows, multi-prompt orchestration pipelines, and agent backends.',
                  icon: Cpu
                },
                {
                  date: 'JUL 2026 — PRESENT',
                  title: 'Early Career Fellow',
                  company: 'Dream AI Academy',
                  desc: 'Selected for Batch 1 nationwide accelerator focused on production-grade AI system architecture.',
                  icon: Sparkles
                },
                {
                  date: 'MAY 2026 — JUL 2026',
                  title: 'Brand / Change-Makers Ambassador',
                  company: 'DataCrumbs',
                  desc: 'Led tech community engagement, technical operations, and cross-functional coordination.',
                  icon: Briefcase
                },
                {
                  date: 'APR 2026 — JUN 2026',
                  title: 'AI & Dialogflow Intern',
                  company: 'Internee.pk',
                  desc: 'Developed E-Commerce recommendation bots with custom Webhook fulfillment & parameter routing.',
                  icon: Terminal
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-lg bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914] shrink-0 mt-0.5 group-hover:bg-[#E50914] group-hover:text-white transition-all">
                      <IconComponent size={16} />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-mono font-bold text-[#E50914] tracking-wider">{item.date}</p>
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-[#E50914] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 font-medium">{item.company}</p>
                      <p className="text-xs text-gray-400 leading-relaxed pt-1">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= COLUMN 3: TESTIMONIALS & CTA ================= */}
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          
          <div>
            {/* Header Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#E50914] flex items-center justify-center text-white font-black text-xs">
                AH
              </div>
              <div>
                <p className="text-xs font-bold text-white">What Leads Say</p>
                <p className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">RECOMMENDATION</p>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="pt-2 space-y-4">
              <Quote size={28} className="text-[#E50914]/30 rotate-180" />
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "Adeel Hussain has been an outstanding ambassador at DataCrumbs, consistently demonstrating dedication, professionalism, and a strong commitment to excellence. His proactive mindset makes him a valuable member of any engineering team."
              </p>
            </div>
          </div>

          <div className="pt-8 space-y-6">
            {/* Signature & Author info */}
            <div className="flex items-end justify-between border-t border-white/5 pt-4">
              <div>
                <p className="font-serif italic text-lg text-white font-semibold">Falak Muhammad</p>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                  ChangeMakers Manager, DataCrumbs
                </p>
              </div>
              {/* Pagination Dots */}
              <div className="flex gap-1.5 pb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
            </div>

            {/* Bottom Accent Banner Line */}
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-3 h-[1px] bg-[#E50914]" />
                LET'S CREATE SOMETHING GREAT TOGETHER
              </span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
