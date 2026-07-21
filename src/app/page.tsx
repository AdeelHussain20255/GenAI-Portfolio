"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import EducationProcessTestimonials from "@/components/EducationProcessTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark overflow-x-hidden">
      <Header />
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection delay={0.1}><Projects /></AnimatedSection>
      <AnimatedSection delay={0.2}><EducationProcessTestimonials /></AnimatedSection>
      <AnimatedSection delay={0.3}><Contact /></AnimatedSection>
      <Footer />
    </main>
  );
}
