"use client";

import { useState } from "react";

// Withmor Teknika Lift için YENİLENMİŞ KURUMSAL TEMA (Lacivert, Gri ve Amber detaylı)

function ElevatorAnimation() {
  return (
    <div className="mt-6 flex justify-center">
      {/* Animasyon kutusu */}
      <div className="relative h-44 w-24 overflow-hidden rounded-md border border-slate-600 bg-slate-800 shadow-xl">
        {/* Asansör kuyusu */}
        <div className="absolute inset-x-2 top-2 bottom-2 border-x border-slate-600/50" />
        {/* Kat çizgileri */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="absolute left-2 right-2 border-t border-slate-600/50"
            style={{ top: `${(index + 1) * 16}%` }}
          />
        ))}
        {/* Kat numaraları */}
        <div className="absolute right-1 top-2 flex flex-col items-end gap-2 text-[9px] text-slate-400 font-mono">
          {[5, 4, 3, 2, 1].map((floor) => (
            <span key={floor}>{floor}</span>
          ))}
        </div>
        {/* Kabin */}
        <div
          className="absolute left-2.5 right-6 h-7 rounded border border-amber-500 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.4)]"
          style={{ animation: "elevatorMove 6s ease-in-out infinite" }}
        >
          <div className="flex h-full items-center justify-center gap-1 text-[8px] font-bold text-slate-900 tracking-wider uppercase">
            WL
          </div>
        </div>
        {/* Yön oku */}
        <div className="absolute left-2 top-2 flex items-center gap-1 text-[9px] text-amber-400 font-bold">
          <span>▲</span>
        </div>

        <style>{`
          @keyframes elevatorMove {
            0% {
              transform: translateY(120%);
            }
            50% {
              transform: translateY(15%);
            }
            100% {
              transform: translateY(-80%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Teklif Modalı State'leri
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    projectType: "Konut Asansörü",
    floorCount: "",
    location: "",
    note: "",
  });

  // Hızlı İletişim Form State'i
  const [fastContactForm, setFastContactForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // Düzenlenebilir içerikler
  const [hero, setHero] = useState({
    eyebrow: "Mühendislikte Mükemmellik",
    title: "Güvenli ve Estetik Dikey Ulaşım Çözümleri",
    subtitle:
      "Konut binalarından endüstriyel tesislere kadar; projelendirme, montaj ve bakımda uluslararası standartlar.",
    cta: "Proje Teklifi Al",
    secondaryCta: "Referanslarımızı İnceleyin",
  });

  const [services, setServices] = useState([
    {
      id: "celik-konstruksiyonlar",
      name: "Çelik Konstrüksiyonlar",
      desc:
        "Makine dairesi, taşıyıcı konstrüksiyonlar ve çelik yapılar için projeye özel statik hesaplamalı imalat.",
      image: "/celik-konstruksiyonlar.webp",
    },
    {
      id: "hidrolik-sistemler",
      name: "Hidrolik Sistemler",
      desc:
        "Villa, yük ve makine dairesiz çözümler için sessiz, güvenli ve enerji verimli hidrolik üniteler.",
      image: "/hidrolik-sistemler.jpg",
    },
    {
      id: "kabinler",
      name: "Kabin Tasarımları",
      desc:
        "Standart ve panoramik kabin tasarımları, paslanmaz ve cam seçenekleri ile modern iç dekorasyon.",
      image: "/kabinler.webp",
    },
    {
      id: "yuk-asansorleri-platformlar",
      name: "Yük Asansörleri & Platformlar",
      desc:
        "Sanayi tesisleri ve depolar için yüksek kapasiteli ağır yük taşıma çözümleri ve makaslı platformlar.",
      image: "/yuk-asansorleri-platformlar.jpg",
    },
    {
      id: "makine-sasesi-mrl",
      name: "Makine Şasesi MRL / MR",
      desc:
        "MRL ve geleneksel sistemler için titreşimi minimize eden, uzun ömürlü sertifikalı makine şaseleri.",
      image: "/makine-sasesi-mrl-mr.png",
    },
    {
      id: "yuk-kabinleri",
      name: "Endüstriyel Yük Kabinleri",
      desc:
        "Ağır ve hassas yükler için darbe dayanımlı, kaymaz zeminli, güçlendirilmiş çelik yük kabinleri.",
      image: "/yuk-kabinleri.jpg",
    },
  ]);

  const [activeService, setActiveService] = useState(0);

  const [projects, setProjects] = useState([
    {
      name: "Skyline Residence Tower",
      type: "Panoramik Yolcu Asansörleri",
      desc: "4 cam panoramik kabin, hedef seçimli kontrol sistemi ve akıllı trafik yönetimi entegrasyonu.",
    },
    {
      name: "Techno Industrial Plant",
      type: "Ağır Hizmet Yük Asansörleri",
      desc: "Gün boyu yoğun kullanıma uygun, 3.500 kg kapasiteli 3 adet hidrolik yük asansörü projesi.",
    },
    {
      name: "City Hospital Complex",
      type: "Sedye ve Servis Asansörleri",
      desc: "Hastane standartlarında hijyen, kesintisiz güç kaynağı ve sarsıntısız kalkış-duruş teknolojisi.",
    },
  ]);

  const [references, setReferences] = useState([
    {
      company: "ABC İnşaat Grubu",
      quote:
        "Projelendirme, montaj ve satış sonrası teknik destek süreçlerinin tamamı profesyonelce yönetildi. Mühendislik kalitesi üst düzey.",
      name: "Murat Yılmaz",
      title: "Proje Yöneticisi",
    },
    {
      company: "Blue Residence Yönetimi",
      quote:
        "Modernizasyon sonrasında hem güvenlik hem de konfor anlamında ciddi bir iyileşme sağlandı. Enerji tasarrufu beklentimizin üzerinde.",
      name: "Selin Karaca",
      title: "Site Müdürü",
    },
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    name: "Withmor Teknika Lift",
    about:
      "Withmor Teknika Lift, ulusal ve uluslararası standartlara (EN-81) uygun asansör sistemleri tasarlar, üretir ve anahtar teslim kurulum gerçekleştirir. Güvenlik, dayanıklılık ve konforu mühendislik hassasiyetiyle birleştiriyoruz.",
    phone: "+90 530 280 55 26",
    email: "info@withmor.com",
    address: "Kervanci ticaret merkezi, Velimeşe OSB, 59850 Çorlu/Tekirdağ",
  });

  // Örnek Google Yorumları Verisi
  const googleReviews = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      rating: 5,
      text: "Asansör montaj sürecinde gösterdikleri titizlik ve profesyonellik için teşekkür ederim. Zamanında teslimat ve kaliteli işçilik.",
      date: "2 hafta önce",
    },
    {
      id: 2,
      name: "Mehmet Demir",
      rating: 5,
      text: "Bakım hizmetlerinden çok memnunuz. Teknik ekip çok bilgili ve 7/24 ulaşılabilir durumda.",
      date: "1 ay önce",
    },
    {
      id: 3,
      name: "Ayşe Kaya",
      rating: 5,
      text: "Villa asansörü projemizde harika bir iş çıkardılar. Hem estetik hem de çok sessiz çalışıyor.",
      date: "3 ay önce",
    },
  ];

  // Admin girişi kontrolü
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      setShowLogin(false);
      setLoginError("");
    } else {
      setLoginError("Kullanıcı adı veya şifre hatalı!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Genel amaçlı düzenleme modali
  const [editModal, setEditModal] = useState({ open: false, type: null, index: null });
  const [tempValue, setTempValue] = useState({});

  const openEdit = (type, index = null) => {
    setEditModal({ open: true, type, index });

    if (type === "hero") setTempValue(hero);
    if (type === "company") setCompanyInfo(companyInfo);
    if (type === "service" && index !== null) setTempValue(services[index]);
    if (type === "project" && index !== null) setTempValue(projects[index]);
    if (type === "reference" && index !== null) setTempValue(references[index]);
  };

  // Yeni ekleme fonksiyonu
  const openAdd = (type) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }
    setEditModal({ open: true, type, index: null });

    // Boş şablonlar
    if (type === "service")
      setTempValue({ id: `new-${Date.now()}`, name: "", desc: "", image: "" });
    if (type === "project") setTempValue({ name: "", type: "", desc: "" });
    if (type === "reference") setTempValue({ company: "", quote: "", name: "", title: "" });
  };

  const saveEdit = () => {
    const { type, index } = editModal;

    if (type === "hero") setHero(tempValue);
    if (type === "company") setCompanyInfo(tempValue);

    if (type === "service") {
      if (index !== null) {
        const copy = [...services];
        copy[index] = tempValue;
        setServices(copy);
      } else {
        setServices([...services, tempValue]);
        setActiveService(services.length);
      }
    }

    if (type === "project") {
      if (index !== null) {
        const copy = [...projects];
        copy[index] = tempValue;
        setProjects(copy);
      } else {
        setProjects([...projects, tempValue]);
      }
    }

    if (type === "reference") {
      if (index !== null) {
        const copy = [...references];
        copy[index] = tempValue;
        setReferences(copy);
      } else {
        setReferences([...references, tempValue]);
      }
    }

    setEditModal({ open: false, type: null, index: null });
  };

  const handleDelete = () => {
    const { type, index } = editModal;

    if (type === "service" && index !== null) {
      const newServices = services.filter((_, i) => i !== index);
      setServices(newServices);
      if (activeService >= index && activeService > 0) {
        setActiveService(activeService - 1);
      } else if (newServices.length === 0) {
        setActiveService(0);
      }
    }

    if (type === "project" && index !== null) {
      const newProjects = projects.filter((_, i) => i !== index);
      setProjects(newProjects);
    }

    if (type === "reference" && index !== null) {
      const newReferences = references.filter((_, i) => i !== index);
      setReferences(newReferences);
    }

    setEditModal({ open: false, type: null, index: null });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const { name, phone, projectType, floorCount, location, note } = quoteForm;
    const message = `*Proje Teklifi Talebi*\n\n*Ad Soyad:* ${name}\n*Telefon:* ${phone}\n*Proje Tipi:* ${projectType}\n*Durak Sayısı:* ${floorCount}\n*Konum/Şehir:* ${location}\n*Ek Notlar:* ${note}`;
    const whatsappUrl = `https://wa.me/905302805526?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowQuoteModal(false);
  };

  const handleFastContactSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = fastContactForm;
    const whatsappMessage = `*Hızlı İletişim Formu*\n\n*Ad Soyad:* ${name}\n*Telefon:* ${phone}\n*Mesaj:* ${message}`;
    const whatsappUrl = `https://wa.me/905302805526?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800";
    e.target.onerror = null;
  };

  return (
    // RENK PALETİ GÜNCELLENDİ: Slate ve Blue ağırlıklı, Amber vurgulu
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Logo: Koyu Lacivert ve Amber detay */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-amber-400 shadow-md border border-slate-700">
              WL
            </div>
            <div className="leading-tight">
              <p className="text-base font-bold tracking-tight text-slate-900">{companyInfo.name}</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Engineering</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#services" className="hover:text-blue-700 transition-colors">Hizmetler</a>
            <a href="#projects" className="hover:text-blue-700 transition-colors">Projeler</a>
            <a href="#references" className="hover:text-blue-700 transition-colors">Referanslar</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">İletişim</a>
          </nav>

          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <span className="hidden text-[11px] font-semibold text-green-700 bg-green-100 px-2 py-1 rounded border border-green-200 sm:inline">
                Yönetici Modu
              </span>
            )}
            <button
              onClick={() => {
                if (isLoggedIn) handleLogout();
                else {
                  setLoginError("");
                  setShowLogin(true);
                }
              }}
              className="flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-200 hover:text-slate-900"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-300 text-[10px] text-slate-700">
                {isLoggedIn ? "A" : "G"}
              </span>
              {isLoggedIn ? "Çıkış" : "Giriş"}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION - KOYU TEMA */}
      <section className="w-full border-b border-slate-800 bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:px-8 md:grid-cols-2 relative z-10">
          {/* Sol Kısım */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-[11px] font-bold text-amber-400 border border-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              7/24 Profesyonel Teknik Servis
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.2rem] leading-tight">
              {hero.title}
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-300">
              {hero.subtitle}
            </p>
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowQuoteModal(true)}
                className="rounded-lg bg-amber-500 px-8 py-3 text-sm font-bold text-slate-900 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 hover:shadow-xl hover:-translate-y-0.5"
              >
                {hero.cta}
              </button>
              <a
                href="#projects"
                className="flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white border-b border-transparent hover:border-white pb-0.5"
              >
                {hero.secondaryCta} <span>→</span>
              </a>
            </div>
            
            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-800 pt-8">
              <div>
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Yıllık Tecrübe</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">250+</p>
                <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Proje</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">7/24</p>
                <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Destek</p>
              </div>
            </div>

            {isLoggedIn && (
              <button
                onClick={() => openEdit("hero")}
                className="mt-6 text-[11px] font-medium text-amber-400 hover:text-amber-300 hover:underline"
              >
                İçeriği Düzenle
              </button>
            )}
          </div>

          {/* Sağ Kısım - Animasyon */}
          <div className="flex flex-col items-center justify-center">
             <p className="mb-6 max-w-xs text-center text-sm font-medium leading-relaxed text-slate-400">
                Yük asansörleri, platformlar ve hidrolik sistemlerde güvenilir çözüm ortağınız.
              </p>
            <div className="relative rounded-2xl bg-slate-800 p-2 shadow-2xl shadow-black/30 border border-slate-700">
              <div className="rounded-xl bg-slate-900 px-8 py-8 border border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none"></div>
                <ElevatorAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANA İÇERİK */}
      <main className="mx-auto max-w-full">
        
        {/* Hizmetler - Tab Yapısı - AÇIK GRİ ZEMİN */}
        <section id="services" className="scroll-mt-20 py-20 px-6 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Hizmetlerimiz</span>
                  {isLoggedIn && (
                    <button onClick={() => openAdd("service")} className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold hover:bg-blue-200">+ Ekle</button>
                  )}
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">Ürün ve Hizmet Grupları</h2>
              </div>
              <p className="max-w-md text-sm text-slate-600 md:text-right font-medium">
                Endüstriyel ve konut tipi dikey taşıma sistemlerinde geniş ürün yelpazesi.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* Sol Liste */}
              <div className="lg:col-span-4 space-y-2">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left px-5 py-4 rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-between border-l-4 ${
                      index === activeService
                        ? "bg-white text-slate-900 shadow-md border-l-amber-500 scale-[1.02]"
                        : "bg-slate-100 text-slate-500 hover:bg-white hover:text-slate-700 border-l-transparent"
                    }`}
                  >
                    {service.name}
                    {index === activeService && <span className="text-amber-500">→</span>}
                  </button>
                ))}
              </div>

              {/* Sağ Detay */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-2 h-full flex flex-col">
                  <div className="relative h-64 w-full overflow-hidden rounded-xl bg-slate-200 group">
                    <img
                        src={services[activeService]?.image}
                        alt={services[activeService]?.name}
                        onError={handleImageError}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-md">
                        {services[activeService]?.name}
                      </h3>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-slate-600 leading-relaxed text-sm font-medium">
                      {services[activeService]?.desc}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                      <button 
                          onClick={() => setShowQuoteModal(true)}
                          className="text-sm font-bold text-white bg-slate-800 px-5 py-2.5 rounded-lg hover:bg-slate-700 flex items-center gap-2 transition-colors"
                      >
                        Detaylı Bilgi Al <span aria-hidden="true" className="text-amber-400">→</span>
                      </button>
                      {isLoggedIn && (
                          <button onClick={() => openEdit("service", activeService)} className="text-xs text-slate-400 hover:text-slate-600 underline">
                            Düzenle
                          </button>
                        )}
                    </div>
                  </div>
                  
                  {/* Alt Carousel */}
                  <div className="px-6 pb-6 mt-auto">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide pt-2">
                      {services.map((service, index) => (
                        <button
                          key={service.id}
                          onClick={() => setActiveService(index)}
                          className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                            index === activeService ? "border-amber-500 ring-2 ring-amber-100" : "border-transparent opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                          }`}
                        >
                          <img src={service.image} alt="" className="w-full h-full object-cover" onError={handleImageError} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projeler - Grid Kartlar - BEYAZ ZEMİN */}
        <section id="projects" className="scroll-mt-20 py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Referans Projeler</span>
                  {isLoggedIn && <button onClick={() => openAdd("project")} className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold">+ Ekle</button>}
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">Seçilmiş Uygulamalar</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <span className="inline-block text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded border border-amber-100 uppercase tracking-wide">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors mb-2">{project.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">
                      {project.desc}
                    </p>
                    {isLoggedIn && (
                      <button onClick={() => openEdit("project", index)} className="mt-4 text-xs text-slate-400 hover:text-slate-600 text-left underline">
                        Projeyi Düzenle
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Referanslar & Yorumlar - KOYU ZEMİN VARYASYONU */}
        <section id="references" className="bg-slate-900 text-white py-20 px-6 border-y border-slate-800">
           <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                 {/* Kurumsal Referanslar */}
                 <div>
                    <div className="flex items-center gap-2 mb-8">
                       <h2 className="text-2xl font-bold">Kurumsal Referanslar</h2>
                       {isLoggedIn && <button onClick={() => openAdd("reference")} className="text-[10px] bg-slate-700 text-white px-2 py-0.5 rounded font-bold">+ Ekle</button>}
                    </div>
                    <div className="space-y-6">
                      {references.map((ref, index) => (
                        <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md relative group hover:bg-slate-750 transition-colors">
                           <span className="text-5xl text-slate-700 absolute -top-2 right-4 font-serif group-hover:text-slate-600 transition-colors">"</span>
                           <p className="text-sm text-slate-300 italic mb-4 relative z-10 font-medium leading-relaxed">{ref.quote}</p>
                           <div className="flex items-center justify-between border-t border-slate-700 pt-4">
                              <div>
                                 <p className="text-sm font-bold text-amber-400">{ref.company}</p>
                                 <p className="text-xs text-slate-400">{ref.name} - {ref.title}</p>
                              </div>
                              {isLoggedIn && <button onClick={() => openEdit("reference", index)} className="text-xs text-slate-500 hover:text-white">Düzenle</button>}
                           </div>
                        </div>
                      ))}
                    </div>
                 </div>

                 {/* Google Yorumları - Koyu zemin üzerinde açık kart */}
                 <div>
                    <div className="flex items-center justify-between mb-8">
                       <h2 className="text-2xl font-bold">Müşteri Deneyimi</h2>
                       <a href="https://maps.app.goo.gl/mfxnQ3ngTwYtVyAN6" target="_blank" rel="noreferrer" className="text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline">Google'da Görüntüle →</a>
                    </div>
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-lg">
                       <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700">
                          <div className="text-5xl font-extrabold text-white">4.9</div>
                          <div>
                             <div className="flex text-amber-400 text-lg">★★★★★</div>
                             <p className="text-xs text-slate-400 mt-1 font-medium">120+ Gerçek Kullanıcı Yorumu</p>
                          </div>
                       </div>
                       <div className="space-y-5">
                          {googleReviews.map((review) => (
                             <div key={review.id} className="pb-4 border-b border-slate-700 last:border-0 last:pb-0">
                                <div className="flex items-center justify-between mb-2">
                                   <span className="text-sm font-bold text-slate-200">{review.name}</span>
                                   <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded">{review.date}</span>
                                </div>
                                <div className="flex text-[10px] text-amber-400 mb-2">{"★".repeat(review.rating)}</div>
                                <p className="text-xs text-slate-400 line-clamp-2 italic">"{review.text}"</p>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* İletişim & Harita - BEYAZ ZEMİN */}
        <section id="contact" className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto py-20 px-6">
           <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2 block">Bize Ulaşın</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Projenizi Birlikte Planlayalım</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm font-medium">
                 {companyInfo.about}
              </p>
              
              <div className="space-y-6 mb-8">
                 <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                       <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">Merkez Ofis</p>
                       <p className="text-sm text-slate-600 mt-1">{companyInfo.address}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                       <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">Telefon</p>
                       <p className="text-sm text-slate-600 mt-1">{companyInfo.phone}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                       <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">E-Posta</p>
                       <p className="text-sm text-slate-600 mt-1">{companyInfo.email}</p>
                    </div>
                 </div>
              </div>

              {isLoggedIn && <button onClick={() => openEdit("company")} className="text-xs font-semibold text-blue-600 border border-blue-200 px-3 py-2 rounded hover:bg-blue-50">Firma Bilgilerini Düzenle</button>}
           </div>

           {/* Sağ: Form ve Harita */}
           <div className="space-y-8">
              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xl shadow-slate-200/50">
                 <h3 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-amber-500 pl-3">Hızlı İletişim Formu</h3>
                 <form onSubmit={handleFastContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                       <input required type="text" placeholder="Ad Soyad" value={fastContactForm.name} onChange={(e) => setFastContactForm({...fastContactForm, name: e.target.value})} className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all" />
                       <input required type="tel" placeholder="Telefon" value={fastContactForm.phone} onChange={(e) => setFastContactForm({...fastContactForm, phone: e.target.value})} className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all" />
                    </div>
                    <textarea required rows={3} placeholder="Proje detayları veya sorunuz..." value={fastContactForm.message} onChange={(e) => setFastContactForm({...fastContactForm, message: e.target.value})} className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all resize-none" />
                    <button type="submit" className="w-full bg-slate-900 text-white rounded-lg py-3 text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                      WhatsApp ile Gönder
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-400"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.574 2.146.877 3.298.877h.001c3.182 0 5.769-2.587 5.769-5.767 0-3.181-2.586-5.767-5.768-5.767zm0 10.39c-.98 0-1.928-.276-2.731-.8l-.195-.116-1.527.4.409-1.488-.124-.196c-.559-.893-.854-1.907-.853-2.956.001-2.548 2.073-4.62 4.625-4.621 1.237.001 2.399.482 3.272 1.356.873.874 1.353 2.036 1.353 3.272 0 2.549-2.074 4.62-4.624 4.62zm2.536-3.461c-.139-.069-.821-.405-.948-.451-.128-.047-.221-.07-.315.069-.093.139-.36.452-.442.546-.081.094-.162.106-.301.035-.14-.069-.589-.217-1.121-.692-.416-.37-.696-.827-.777-.967-.082-.139-.009-.214.061-.284.062-.061.139-.162.208-.243.07-.082.093-.139.139-.232.046-.093.023-.174-.012-.243-.035-.069-.315-.759-.431-1.039-.113-.273-.228-.236-.314-.241-.081-.004-.174-.004-.267-.004-.093 0-.244.035-.371.174-.128.139-.488.477-.488 1.164 0 .687.5 1.35.569 1.443.07.094.985 1.503 2.387 2.108.334.144.595.231.797.295.334.106.638.091.879.055.27-.04.821-.335.937-.659.116-.323.116-.601.081-.659-.035-.058-.128-.093-.267-.162z"/></svg>
                    </button>
                 </form>
              </div>

              <div className="h-64 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 ring-4 ring-slate-50">
                 <iframe
                    title="Ofis Konumu"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?q=Withmor+Asans%C3%B6r+Market%2C+Kervanc%C4%B1+Ticaret+Merkezi%2C+Velime%C5%9Fe+OSB%2C+Tekirda%C4%9F&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="opacity-100"
                 ></iframe>
              </div>
           </div>
        </section>

      </main>

      {/* Footer - Koyu Lacivert/Siyah */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t-4 border-amber-500">
         <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
               <div className="flex items-center gap-2 mb-4 text-white">
                  <div className="h-8 w-8 bg-slate-800 rounded flex items-center justify-center font-bold text-xs text-amber-500 border border-slate-700">WL</div>
                  <span className="font-bold text-lg tracking-tight">{companyInfo.name}</span>
               </div>
               <p className="text-xs leading-relaxed text-slate-500 max-w-xs">
                  Endüstriyel asansör sistemleri, mühendislik çözümleri ve 7/24 teknik destek hizmetleri.
               </p>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm mb-4 border-b border-slate-800 pb-2 inline-block">Hızlı Erişim</h4>
               <ul className="space-y-2 text-xs">
                  <li><a href="#services" className="hover:text-amber-400 transition-colors">Hizmetler</a></li>
                  <li><a href="#projects" className="hover:text-amber-400 transition-colors">Projeler</a></li>
                  <li><a href="#contact" className="hover:text-amber-400 transition-colors">İletişim</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm mb-4 border-b border-slate-800 pb-2 inline-block">Sosyal Medya</h4>
               <div className="flex gap-2">
                  <a href="https://www.facebook.com/TEKNIKALIFT" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400 border border-slate-800">f</a>
                  <a href="https://www.instagram.com/withmorlift/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all text-slate-400 border border-slate-800">in</a>
                  <a href="https://wa.me/905302805526" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all text-slate-400 border border-slate-800">w</a>
               </div>
            </div>
         </div>
         <div className="mx-auto max-w-6xl px-6 border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600">
            <span>© {new Date().getFullYear()} {companyInfo.name}. Tüm hakları saklıdır.</span>
            <span>Design & Engineering by Withmor Teknika</span>
         </div>
      </footer>

      {/* Modallar */}
      {/* ... (Login Modal - Style update) ... */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl">
            <h3 className="mb-2 text-lg font-bold text-slate-900">Yönetici Girişi</h3>
            <p className="mb-4 text-xs text-slate-500">Panel erişimi için yetkili bilgilerinizi giriniz.</p>
            {loginError && <div className="mb-3 rounded bg-red-50 p-2 text-center text-xs text-red-600">{loginError}</div>}
            <form onSubmit={handleLogin} className="space-y-3 text-xs">
              <input type="text" name="username" placeholder="Kullanıcı adı" className="w-full rounded border border-slate-200 p-2.5 outline-none focus:border-blue-600" />
              <input type="password" name="password" placeholder="Şifre" className="w-full rounded border border-slate-200 p-2.5 outline-none focus:border-blue-600" />
              <button type="submit" className="w-full rounded bg-slate-900 py-2.5 font-bold text-white hover:bg-slate-800">Giriş Yap</button>
            </form>
            <button onClick={() => setShowLogin(false)} className="mt-3 w-full text-xs text-slate-400 hover:text-slate-600">İptal</button>
          </div>
        </div>
      )}

      {/* ... (Quote Modal - Style update) ... */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto border-t-4 border-amber-500">
            <h3 className="mb-1 text-lg font-bold text-slate-900">Proje Teklifi Al</h3>
            <p className="mb-5 text-xs text-slate-500">Bilgileri doldurun, WhatsApp üzerinden uzmanlarımız size ulaşsın.</p>
            <form onSubmit={handleQuoteSubmit} className="space-y-3">
               <div className="grid grid-cols-2 gap-3">
                  <input required type="text" placeholder="Ad Soyad" value={quoteForm.name} onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
                  <input required type="tel" placeholder="Telefon" value={quoteForm.phone} onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
               </div>
               <select value={quoteForm.projectType} onChange={(e) => setQuoteForm({...quoteForm, projectType: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600 bg-white">
                  <option>Konut Asansörü</option>
                  <option>Yük Asansörü</option>
                  <option>Hidrolik Sistem</option>
                  <option>Panoramik Asansör</option>
                  <option>Araç Platformu</option>
               </select>
               <div className="grid grid-cols-2 gap-3">
                  <input type="number" placeholder="Durak Sayısı" value={quoteForm.floorCount} onChange={(e) => setQuoteForm({...quoteForm, floorCount: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
                  <input type="text" placeholder="Konum / Şehir" value={quoteForm.location} onChange={(e) => setQuoteForm({...quoteForm, location: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
               </div>
               <textarea rows={3} placeholder="Ek Notlar..." value={quoteForm.note} onChange={(e) => setQuoteForm({...quoteForm, note: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600 resize-none" />
               <button type="submit" className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] py-2.5 text-sm font-bold text-white hover:bg-[#128C7E] shadow-lg shadow-green-200">
                  WhatsApp ile Gönder
               </button>
            </form>
            <button onClick={() => setShowQuoteModal(false)} className="mt-4 w-full text-xs text-slate-400 hover:text-slate-600">Kapat</button>
          </div>
        </div>
      )}

      {/* ... (Edit Modal - Style update) ... */}
      {editModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl max-h-[80vh] overflow-y-auto">
            <h3 className="mb-4 text-lg font-bold text-slate-900">{editModal.index === null ? "Yeni Ekle" : "İçeriği Düzenle"}</h3>
            <div className="space-y-3">
               {Object.keys(tempValue).map((key) => (
                  <div key={key}>
                     <label className="mb-1 block text-[10px] font-bold text-slate-500 uppercase">{key}</label>
                     {key === "desc" || key === "quote" || key === "about" ? (
                        <textarea rows={3} value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
                     ) : (
                        <input type="text" value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
                     )}
                  </div>
               ))}
            </div>
            <div className="mt-6 flex justify-between gap-3">
               {editModal.index !== null && ["service", "project", "reference"].includes(editModal.type) ? (
                  <button onClick={handleDelete} className="rounded border border-red-200 text-red-600 px-4 py-2 text-xs font-bold hover:bg-red-50">Sil</button>
               ) : <div/>}
               <div className="flex gap-2">
                  <button onClick={() => setEditModal({open: false, type: null, index: null})} className="rounded border border-slate-200 text-slate-600 px-4 py-2 text-xs font-bold hover:bg-slate-50">Vazgeç</button>
                  <button onClick={saveEdit} className="rounded bg-slate-900 text-white px-6 py-2 text-xs font-bold hover:bg-slate-800">{editModal.index === null ? "Ekle" : "Kaydet"}</button>
               </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
