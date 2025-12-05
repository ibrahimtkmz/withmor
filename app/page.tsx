"use client";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ElevatorAnimation from "../components/ElevatorAnimation";

import WhyUsSection from "../components/WhyUsSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ReferencesSection from "../components/ReferencesSection";
import ContactSection from "../components/ContactSection";
import GallerySection from "../components/GallerySection";

import Footer from "../components/Footer";
// Modallar ayrı bir dosyadaysa açabilirsin:
// import Modals from "../components/Modals";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
      {/* Üst Menü */}
      <Navbar />

      {/* İçerik */}
      <main>
        <HeroSection />
        <AboutSection />

        {/* Asansör animasyonu ayrı component ise */}
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

      {/* Alt Bilgi */}
      <Footer />

      {/* Eğer modalları ayrı component olarak böldüysek: */}
      {/* <Modals /> */}
    </div>
  );
}
