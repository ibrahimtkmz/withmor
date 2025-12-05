"use client";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ElevatorAnimation } from "../components/sections/ElevatorAnimation";
import { WhyUsSection } from "../components/sections/WhyUsSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ReferencesSection } from "../components/sections/ReferencesSection";
import { ContactSection } from "../components/sections/ContactSection";
import { GallerySection } from "../components/sections/GallerySection";

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
