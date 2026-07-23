"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import EducationProcessTestimonials from "@/components/EducationProcessTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import BouncingBalls from "@/components/ui/bouncing-balls";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(229,9,20,0.12),rgba(10,10,10,1))]">
      <Navbar />
      <Header />
      <main>
        <AnimatedSection><Hero /></AnimatedSection>
        <div className="relative w-full overflow-hidden">
          <div
            className="absolute -top-32 inset-x-0 bottom-0 pointer-events-none z-0"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%)",
            }}
          >
            <BouncingBalls backgroundColor="transparent" />
          </div>
          <div className="relative z-10">
            <AnimatedSection delay={0.1}><Projects /></AnimatedSection>
            <AnimatedSection delay={0.2}><EducationProcessTestimonials /></AnimatedSection>
          </div>
        </div>
        <AnimatedSection delay={0.3}><Contact /></AnimatedSection>
        <Footer />
      </main>
    </div>
  );
}
