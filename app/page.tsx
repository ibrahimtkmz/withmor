"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ElevatorAnimation from "../components/ElevatorAnimation";
import WhyUsSection from "../components/WhyUsSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ReferencesSection from "../components/ReferencesSection";
import ContactSection from "../components/ContactSection";
import GallerySection from "../components/GallerySection";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">

      {/* TOP NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
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
