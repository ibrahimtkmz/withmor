"use client";

import { useState, useEffect } from "react";

// COMPONENTS
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

import {
  LoginModal,
  QuoteModal,
  ServiceDetailModal,
  EditModal,
} from "./components/Modals";

export default function HomePage() {
  // -----------------------------
  // ▼ STATE YAPILARI
  // -----------------------------

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [references, setReferences] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);

  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllReferences, setShowAllReferences] = useState(false);
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(8);

  const [activeServiceModal, setActiveServiceModal] = useState(null);

  const [showLogin, setShowLogin] = useState(false);

  const [loginError, setLoginError] = useState("");

  const [editModal, setEditModal] = useState({
    open: false,
    type: null,
    index: null,
  });

  const [tempValue, setTempValue] = useState({});

  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    projectType: "",
    floorCount: "",
    location: "",
    note: "",
  });

  const [mainContactForm, setMainContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Malzeme teklifi iste",
    message: "",
  });

  const [companyInfo, setCompanyInfo] = useState({
    address: "Ergene OSB Çorlu / Tekirdağ",
    phone: "4443759",
    gsm: "05558883359",
    whatsapp: "https://wa.me/905558883359",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  });

  const googleReviews = [
    {
      id: 1,
      name: "Ali Demir",
      rating: 5,
      date: "2024",
      text: "Profesyonel ekip ve kaliteli hizmet!",
    },
    {
      id: 2,
      name: "Ayşe Koç",
      rating: 5,
      date: "2024",
      text: "Hızlı dönüş ve mükemmel sonuç.",
    },
  ];

  const [visibleReviewCount, setVisibleReviewCount] = useState(3);

  // -----------------------------
  // ▼ ÖN TANIMLI İÇERİ KURULUMU
  // -----------------------------
  useEffect(() => {
    setServices([
      {
        id: "service-1",
        name: "Yük Asansörleri",
        desc: "150 kg–10.000 kg arası kapasite seçenekleri ile endüstriyel çözümler.",
        image: "/img/service1.jpg",
      },
      {
        id: "service-2",
        name: "Yük Platformları",
        desc: "Fabrika ve depo alanları için ağır yük kaldırma çözümleri.",
        image: "/img/service2.jpg",
      },
      {
        id: "service-3",
        name: "Villa Asansörleri",
        desc: "Modern, şık ve sessiz ev içi asansör çözümleri.",
        image: "/img/service3.jpg",
      },
      {
        id: "service-4",
        name: "Hidrolik Asansörler",
        desc: "Düşük maliyetli, yüksek güvenlikli kaldırma teknolojileri.",
        image: "/img/service4.jpg",
      },
    ]);

    setProjects([
      {
        name: "Endüstriyel Yük Asansörü",
        type: "Yük Asansörü",
        desc: "2 ton kapasiteli tam teşekküllü yük asansörü üretimi.",
      },
      {
        name: "Depo Yük Platformu",
        type: "Platform",
        desc: "Yoğun kullanım için ağır hizmet tipi platform.",
      },
      {
        name: "Villa Asansörü",
        type: "Villa Asansörü",
        desc: "Modern villa içi özel tasarım asansör projesi.",
      },
    ]);

    setReferences([
      {
        company: "Csm Metalurji",
        name: "Genel Müdür",
        title: "Kalite",
        quote: "Uzmanlık ve işçilik mükemmel düzeyde.",
      },
      {
        company: "Como Cotton",
        name: "Operasyon",
        title: "Yönetim",
        quote: "Zamanında teslim ve üst düzey kalite.",
      },
      {
        company: "3K Tekstil",
        name: "Yetkili",
        title: "Operasyon",
        quote: "Uzun yıllardır çözüm ortağımız.",
      },
    ]);

    setGalleryImages([
      "/img/g1.jpg",
      "/img/g2.jpg",
      "/img/g3.jpg",
      "/img/g4.jpg",
      "/img/g5.jpg",
      "/img/g6.jpg",
      "/img/g7.jpg",
      "/img/g8.jpg",
    ]);
  }, []);

  // -----------------------------
  // ▼ KULLANICI GİRİŞ
  // -----------------------------
  function handleLogin(e: any) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setShowLogin(false);
      setLoginError("");
    } else {
      setLoginError("Kullanıcı adı veya şifre hatalı.");
    }
  }

  // -----------------------------
  // ▼ EDİT / EKLE / SİL FONKSİYONLARI
  // -----------------------------
  const openAdd = (type: string) => {
    setEditModal({ open: true, type, index: null });

    const emptyMap: any = {
      service: { name: "", desc: "", image: "" },
      project: { name: "", type: "", desc: "" },
      reference: { company: "", name: "", title: "", quote: "" },
      gallery: { image: "" },
    };

    setTempValue(emptyMap[type] || {});
  };

  const openEdit = (type: string, index: number) => {
    const map: any = {
      service: services,
      project: projects,
      reference: references,
      gallery: galleryImages.map((img) => ({ image: img })),
    };

    setTempValue(map[type][index]);
    setEditModal({ open: true, type, index });
  };

  const saveEdit = () => {
    const { type, index } = editModal;

    if (type === "service") {
      const updated = [...services];
      if (index === null) updated.push(tempValue);
      else updated[index] = tempValue;
      setServices(updated);
    }

    if (type === "project") {
      const updated = [...projects];
      if (index === null) updated.push(tempValue);
      else updated[index] = tempValue;
      setProjects(updated);
    }

    if (type === "reference") {
      const updated = [...references];
      if (index === null) updated.push(tempValue);
      else updated[index] = tempValue;
      setReferences(updated);
    }

    if (type === "gallery") {
      const imgs = [...galleryImages];
      if (index === null) imgs.push(tempValue.image);
      else imgs[index] = tempValue.image;
      setGalleryImages(imgs);
    }

    setEditModal({ open: false, type: null, index: null });
  };

  const handleDelete = () => {
    const { type, index } = editModal;

    if (type === "service") {
      setServices(services.filter((_, i) => i !== index));
    }

    if (type === "project") {
      setProjects(projects.filter((_, i) => i !== index));
    }

    if (type === "reference") {
      setReferences(references.filter((_, i) => i !== index));
    }

    if (type === "gallery") {
      setGalleryImages(galleryImages.filter((_, i) => i !== index));
    }

    setEditModal({ open: false, type: null, index: null });
  };

  // -----------------------------
  // ▼ FORM GÖNDER
  // -----------------------------
  const handleMainContactSubmit = (e: any) => {
    e.preventDefault();

    const msg = `
Ad Soyad: ${mainContactForm.name}
Telefon: ${mainContactForm.phone}
E-Posta: ${mainContactForm.email}
Konu: ${mainContactForm.subject}
Mesaj: ${mainContactForm.message}
    `;

    const phone = "905558883359";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
    );
  };

  const handleQuoteSubmit = (e: any) => {
    e.preventDefault();

    const msg = `
Ad Soyad: ${quoteForm.name}
Telefon: ${quoteForm.phone}
Proje: ${quoteForm.projectType}
Durak: ${quoteForm.floorCount}
Konum: ${quoteForm.location}
Not: ${quoteForm.note}
    `;

    const phone = "905558883359";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
    );
  };

  const handleImageError = (e: any) => {
    e.target.src = "/placeholder.jpg";
  };

  // -----------------------------
  // ▼ RENDER
  // -----------------------------
  return (
    <>
      <Navbar onLoginClick={() => setShowLogin(true)} isLoggedIn={isLoggedIn} />

      <HeroSection />
      <AboutSection />
      <ElevatorAnimation />

      <WhyUsSection />

      <ServicesSection
        services={services}
        isLoggedIn={isLoggedIn}
        openAdd={openAdd}
        openEdit={openEdit}
        setActiveServiceModal={setActiveServiceModal}
        handleImageError={handleImageError}
      />

      <ProjectsSection
        projects={projects}
        isLoggedIn={isLoggedIn}
        openAdd={openAdd}
        openEdit={openEdit}
        showAllProjects={showAllProjects}
        setShowAllProjects={setShowAllProjects}
      />

      <ReferencesSection
        references={references}
        isLoggedIn={isLoggedIn}
        openAdd={openAdd}
        openEdit={openEdit}
        showAllReferences={showAllReferences}
        setShowAllReferences={setShowAllReferences}
        googleReviews={googleReviews}
        visibleReviewCount={visibleReviewCount}
        setVisibleReviewCount={setVisibleReviewCount}
      />

      <ContactSection
        companyInfo={companyInfo}
        mainContactForm={mainContactForm}
        setMainContactForm={setMainContactForm}
        handleMainContactSubmit={handleMainContactSubmit}
      />

      <GallerySection
        galleryImages={galleryImages}
        visibleGalleryCount={visibleGalleryCount}
        setVisibleGalleryCount={setVisibleGalleryCount}
        isLoggedIn={isLoggedIn}
        openAdd={openAdd}
        openEdit={openEdit}
        setEditModal={setEditModal}
        handleImageError={handleImageError}
      />

      {/* MODALS */}
      <LoginModal
        show={showLogin}
        loginError={loginError}
        onClose={() => setShowLogin(false)}
        handleLogin={handleLogin}
      />

      <QuoteModal
        show={false} // Teklif butonu eklendiğinde true yapılacak
        onClose={() => {}}
        quoteForm={quoteForm}
        setQuoteForm={setQuoteForm}
        handleQuoteSubmit={handleQuoteSubmit}
      />

      <ServiceDetailModal
        service={activeServiceModal}
        services={services}
        onClose={() => setActiveServiceModal(null)}
        handleImageError={handleImageError}
        openEdit={openEdit}
      />

      <EditModal
        editModal={editModal}
        tempValue={tempValue}
        setTempValue={setTempValue}
        handleDelete={handleDelete}
        saveEdit={saveEdit}
        onClose={() =>
          setEditModal({ open: false, type: null, index: null })
        }
      />
    </>
  );
}
