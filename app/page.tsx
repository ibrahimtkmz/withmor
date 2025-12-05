"use client";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";

import { ServicesSection } from "../components/ServicesSection";
import { ProjectSection } from "../components/ProjectSection";
import { ReferenceSection } from "../components/ReferenceSection";
import { WhyUsSection } from "../components/WhyUsSection";
import { GallerySection } from "../components/GallerySection";
import { ContactSection } from "../components/ContactSection";
import { ElevatorAnimation } from "../components/ElevatorAnimation";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* İÇERİK */}
      <main>
        <HeroSection />
        <AboutSection />

        <section className="py-12">
          <div className="mx-auto max-w-6xl px-6">
            <ElevatorAnimation />
          </div>
        </section>

        <WhyUsSection />
        <ServicesSection />
        <ProjectsSection />
        <ReferencesSection />
        <ContactSection />
        <GallerySection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
