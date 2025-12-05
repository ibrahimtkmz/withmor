"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ElevatorAnimation from "./components/ElevatorAnimation";

import WhyUsSection from "./components/WhyUsSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ReferencesSection from "./components/ReferencesSection";
import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";

// Modals (hepsi tek dosyada ya da ayrı ayrı olabilir, sen hangisini kullandıysan)
import {
  LoginModal,
  QuoteModal,
  ServiceDetailModal,
  EditModal,
} from "./components/Modals";

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <HeroSection />

      {/* ABOUT */}
      <AboutSection />

      {/* ELEVATOR ANIMATION */}
      <ElevatorAnimation />

      {/* WHY US */}
      <WhyUsSection />

      {/* SERVICES */}
      <ServicesSection />

      {/* PROJECTS */}
      <ProjectsSection />

      {/* REFERENCES */}
      <ReferencesSection />

      {/* CONTACT */}
      <ContactSection />

      {/* GALLERY */}
      <GallerySection />

      {/* GLOBAL MODALS */}
      <LoginModal />
      <QuoteModal />
      <ServiceDetailModal />
      <EditModal />
    </main>
  );
}
