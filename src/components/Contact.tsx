import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen text-white px-6 lg:px-16 py-20 flex flex-col justify-center overflow-hidden">
      
      {/* BACKDROP STENCIL TEXT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.03] w-full text-center">
        <h1 className="text-[22vw] font-black tracking-tighter text-white uppercase leading-none">
          CONTACT
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: HEADLINE & CONTACT DETAILS */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-white/10 text-xs text-gray-300 font-mono uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
            CONTACT
          </div>

          {/* Title */}
          <div className="space-y-3 mb-6">
            <h2 className="glow-text-white text-white font-black uppercase text-4xl md:text-6xl tracking-tight leading-none select-none">
              GET IN<br />
              TOUCH
            </h2>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4 pt-2">
            
            {/* Email Card */}
            <a 
              href="mailto:adeelhussain20255@gmail.com"
              className="group flex items-center justify-between p-4 rounded-xl bg-[#121212] border border-white/5 hover:border-[#E50914]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">EMAIL US</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#E50914] transition-colors break-all">adeelhussain20255@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-gray-500 group-hover:text-[#E50914] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+923174730741"
              className="group flex items-center justify-between p-4 rounded-xl bg-[#121212] border border-white/5 hover:border-[#E50914]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">CALL US</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#E50914] transition-colors">+92 317 4730741</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-gray-500 group-hover:text-[#E50914] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Location Card */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#121212] border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">OUR LOCATION</p>
                  <p className="text-sm font-semibold text-white">Karachi, Pakistan / Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM CONTAINER CARD */}
        <div className="lg:col-span-7">
          <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-6">
            
            <h3 className="glow-text-white text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Input */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  YOUR NAME
                </label>
                <input 
                  type="text" 
                  placeholder="Adeel Hussain" 
                  className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#E50914] transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  YOUR EMAIL
                </label>
                <input 
                  type="email" 
                  placeholder="adeelhussain20255@gmail.com" 
                  className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#E50914] transition-colors"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  MESSAGE
                </label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project or opportunity..." 
                  className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#E50914] transition-colors resize-none"
                />
              </div>

              {/* High-Contrast White Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-white hover:bg-gray-200 text-black font-bold text-sm tracking-wide py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
              >
                <span>Send Message</span>
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
