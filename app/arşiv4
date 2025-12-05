"use client";

import { useState } from "react";

// Withmor Teknika Lift için PREMIUM MIMARI KONSEPT (Stone, Antrasit ve Bronz)

function ElevatorAnimation() {
  return (
    <div className="mt-8 flex justify-center">
      {/* Animasyon kutusu - Şeffaf Cam Kuyu Görünümü */}
      <div className="relative h-64 w-32 overflow-hidden rounded-t-full border-x border-t border-stone-300 bg-gradient-to-b from-stone-100/50 to-white/20 backdrop-blur-sm shadow-2xl">
        {/* Arka Raylar */}
        <div className="absolute inset-x-8 top-0 bottom-0 border-x-2 border-stone-300/30" />
        
        {/* Kat çizgileri - Minimal */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="absolute left-4 right-4 border-t border-stone-200"
            style={{ top: `${(index + 1) * 16}%` }}
          />
        ))}
        
        {/* Kabin - Lüks Bronz/Altın Görünüm */}
        <div
          className="absolute left-4 right-4 h-10 rounded-sm border border-orange-300 bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 shadow-lg shadow-orange-500/10"
          style={{ animation: "elevatorMove 8s ease-in-out infinite" }}
        >
          {/* Kabin İçi Işık */}
          <div className="absolute inset-2 bg-orange-50/50 blur-[1px]"></div>
          
          <div className="relative flex h-full items-center justify-center gap-1">
             <span className="text-[8px] font-serif tracking-widest text-orange-900/60 font-bold">WITHMOR</span>
          </div>
        </div>

        <style>{`
          @keyframes elevatorMove {
            0% { transform: translateY(120%); }
            40% { transform: translateY(10%); }
            50% { transform: translateY(10%); }
            90% { transform: translateY(-110%); }
            100% { transform: translateY(-110%); }
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

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "", phone: "", projectType: "Konut Asansörü", floorCount: "", location: "", note: "",
  });

  const [fastContactForm, setFastContactForm] = useState({
    name: "", phone: "", message: "",
  });

  // Düzenlenebilir içerikler
  const [hero, setHero] = useState({
    eyebrow: "Architecture in Motion",
    title: "Dikey Ulaşımda Estetik ve Teknoloji",
    subtitle: "Yapılarınızın değerini artıran, sessiz, güvenli ve tasarım odaklı asansör mühendisliği.",
    cta: "Projeyi Başlat",
    secondaryCta: "Koleksiyonu Keşfet",
  });

  const [services, setServices] = useState([
    {
      id: "celik-konstruksiyonlar",
      name: "Çelik Konstrüksiyon",
      desc: "Mimari bütünlüğü bozmayan, estetik ve statik dayanımı yüksek özel kuyu çözümleri.",
      image: "/celik-konstruksiyonlar.webp",
    },
    {
      id: "hidrolik-sistemler",
      name: "Hidrolik Teknoloji",
      desc: "Makine dairesine ihtiyaç duymayan, ultra sessiz ve konforlu villa tipi çözümler.",
      image: "/hidrolik-sistemler.jpg",
    },
    {
      id: "kabinler",
      name: "Premium Kabinler",
      desc: "Doğal taş, cam, ahşap ve paslanmaz çeliğin mükemmel uyumuyla tasarlanan iç mekanlar.",
      image: "/kabinler.webp",
    },
    {
      id: "yuk-asansorleri-platformlar",
      name: "Endüstriyel Güç",
      desc: "Fabrika ve depolar için yüksek tonaj kapasiteli, dayanıklı yük taşıma sistemleri.",
      image: "/yuk-asansorleri-platformlar.jpg",
    },
    {
      id: "makine-sasesi-mrl",
      name: "MRL Sistemler",
      desc: "Minimum alan kaybı, maksimum verimlilik sağlayan dişlisiz motor teknolojileri.",
      image: "/makine-sasesi-mrl-mr.png",
    },
    {
      id: "yuk-kabinleri",
      name: "Heavy Duty Kabin",
      desc: "Zorlu çalışma koşullarına dayanıklı, güçlendirilmiş çelik konstrüksiyon yük kabinleri.",
      image: "/yuk-kabinleri.jpg",
    },
  ]);

  const [activeService, setActiveService] = useState(0);

  const [projects, setProjects] = useState([
    {
      name: "Skyline Tower",
      type: "Panoramik",
      desc: "Şehrin manzarasına hakim, cam cepheli lüks ulaşım.",
    },
    {
      name: "Techno Plant",
      type: "Endüstriyel",
      desc: "3.5 Ton kapasiteli, 7/24 çalışan lojistik omurga.",
    },
    {
      name: "City Hospital",
      type: "Medikal",
      desc: "Sedye boyu, anti-bakteriyel ve sarsıntısız teknoloji.",
    },
  ]);

  const [references, setReferences] = useState([
    {
      company: "ABC İnşaat",
      quote: "Estetik kaygılarımızı teknik mükemmellikle birleştirdiler.",
      name: "Murat Yılmaz",
      title: "Mimar",
    },
    {
      company: "Blue Residence",
      quote: "Sessizliği ve konforu ile bina sakinlerimizin beğenisini kazandı.",
      name: "Selin Karaca",
      title: "Yönetici",
    },
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    name: "WITHMOR",
    subname: "TEKNIKA LIFT",
    about: "Withmor Teknika, asansör sistemlerini sadece bir ulaşım aracı olarak değil, yapının mimari bir parçası olarak görür. Uluslararası standartlarda (EN-81) üretim ve mühendislik hizmeti sunar.",
    phone: "+90 530 280 55 26",
    email: "info@withmor.com",
    address: "Kervanci ticaret merkezi, Velimeşe OSB, 59850 Çorlu/Tekirdağ",
  });

  // --- Fonksiyonlar (Aynı mantık korunmuştur) ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (e.target.username.value === "admin" && e.target.password.value === "password") {
      setIsLoggedIn(true); setShowLogin(false); setLoginError("");
    } else { setLoginError("Hatalı giriş."); }
  };
  const handleLogout = () => setIsLoggedIn(false);
  
  const [editModal, setEditModal] = useState({ open: false, type: null, index: null });
  const [tempValue, setTempValue] = useState({});

  const openEdit = (type, index = null) => {
    setEditModal({ open: true, type, index });
    if (type === "hero") setTempValue(hero);
    if (type === "company") setCompanyInfo(companyInfo);
    if (type === "service") setTempValue(services[index || 0]);
    if (type === "project") setTempValue(projects[index || 0]);
    if (type === "reference") setTempValue(references[index || 0]);
  };

  const openAdd = (type) => {
    if (!isLoggedIn) return setShowLogin(true);
    setEditModal({ open: true, type, index: null });
    if (type === "service") setTempValue({ id: Date.now(), name: "", desc: "", image: "" });
    if (type === "project") setTempValue({ name: "", type: "", desc: "" });
    if (type === "reference") setTempValue({ company: "", quote: "", name: "", title: "" });
  };

  const saveEdit = () => {
    const { type, index } = editModal;
    if (type === "hero") setHero(tempValue);
    if (type === "company") setCompanyInfo(tempValue);
    if (type === "service") {
      const copy = [...services]; index !== null ? copy[index] = tempValue : copy.push(tempValue); setServices(copy);
    }
    if (type === "project") {
      const copy = [...projects]; index !== null ? copy[index] = tempValue : copy.push(tempValue); setProjects(copy);
    }
    if (type === "reference") {
      const copy = [...references]; index !== null ? copy[index] = tempValue : copy.push(tempValue); setReferences(copy);
    }
    setEditModal({ open: false, type: null, index: null });
  };

  const handleDelete = () => {
    const { type, index } = editModal;
    if (type === "service") setServices(services.filter((_, i) => i !== index));
    if (type === "project") setProjects(projects.filter((_, i) => i !== index));
    if (type === "reference") setReferences(references.filter((_, i) => i !== index));
    setEditModal({ open: false, type: null, index: null });
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const { name, phone, projectType, floorCount, location, note } = quoteForm;
    window.open(`https://wa.me/905302805526?text=${encodeURIComponent(`*Teklif:* ${name}, ${phone}, ${projectType}, ${floorCount} Durak, ${location}, Not: ${note}`)}`, "_blank");
    setShowQuoteModal(false);
  };

  const handleFastContactSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = fastContactForm;
    window.open(`https://wa.me/905302805526?text=${encodeURIComponent(`*İletişim:* ${name}, ${phone}, ${message}`)}`, "_blank");
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800";
    e.target.onerror = null;
  };

  return (
    // TEMA: Stone (Taş Rengi), Antrasit ve Bronz Vurgular
    <div className="min-h-screen bg-[#F5F5F4] text-stone-800 font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* Üst Bar - Minimal */}
      <div className="bg-stone-900 text-stone-300 text-[10px] py-2 px-6 flex justify-between tracking-widest uppercase">
        <span>Engineering Excellence since 2008</span>
        <span>{companyInfo.address}</span>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-[#F5F5F4]/90 backdrop-blur border-b border-stone-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex flex-col leading-none select-none cursor-pointer">
            <span className="text-2xl font-serif font-bold text-stone-900 tracking-tight">{companyInfo.name}</span>
            <span className="text-[9px] font-bold text-orange-600 tracking-[0.3em] uppercase">{companyInfo.subname}</span>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-xs font-bold text-stone-600 uppercase tracking-widest">
            {["Hizmetler", "Projeler", "Referanslar", "İletişim"].map((item) => (
              <a key={item} href={`#${item === "İletişim" ? "contact" : item.toLowerCase()}`} className="hover:text-orange-700 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {isLoggedIn && <span className="text-[9px] font-bold bg-green-100 text-green-800 px-2 py-1 rounded">ADMIN</span>}
            <button 
              onClick={() => isLoggedIn ? handleLogout() : setShowLogin(true)}
              className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Split Layout */}
      <section className="relative w-full h-auto min-h-[90vh] flex flex-col md:flex-row">
        {/* Sol Metin Alanı */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-20 bg-[#F5F5F4]">
          <span className="text-orange-600 font-bold text-xs tracking-[0.2em] uppercase mb-6 block border-l-2 border-orange-600 pl-3">
            {hero.eyebrow}
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif text-stone-900 leading-[1.1] mb-8">
            {hero.title.split(" ").map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          <p className="text-stone-500 max-w-md text-sm leading-relaxed mb-10 border-l border-stone-300 pl-6">
            {hero.subtitle}
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => setShowQuoteModal(true)}
              className="bg-stone-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors"
            >
              {hero.cta}
            </button>
            <a href="#projects" className="border border-stone-300 text-stone-900 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-stone-900 transition-colors">
              {hero.secondaryCta}
            </a>
          </div>
          
          {isLoggedIn && <button onClick={() => openEdit("hero")} className="mt-8 text-[10px] text-stone-400 text-left underline">Düzenle</button>}
        </div>

        {/* Sağ Görsel/Animasyon Alanı */}
        <div className="w-full md:w-1/2 bg-stone-200 relative overflow-hidden flex items-center justify-center min-h-[500px]">
          {/* Arka plan resmi - hafif karartılmış */}
          <div className="absolute inset-0 z-0">
             <img src="/kabinler.webp" alt="Background" className="w-full h-full object-cover grayscale opacity-30" onError={handleImageError} />
             <div className="absolute inset-0 bg-stone-900/10"></div>
          </div>
          
          {/* Animasyon Container */}
          <div className="relative z-10 scale-150">
            <ElevatorAnimation />
          </div>
        </div>
      </section>

      {/* Hizmetler - Masonry Grid Tarzı */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-stone-200 pb-6">
          <div>
            <h2 className="text-3xl font-serif text-stone-900 mb-2">Çözüm Koleksiyonu</h2>
            <p className="text-stone-500 text-xs tracking-wide uppercase">Mühendislik ve Tasarımın Buluştuğu Nokta</p>
          </div>
          {isLoggedIn && <button onClick={() => openAdd("service")} className="text-xs bg-stone-900 text-white px-4 py-2 hover:bg-orange-700">+ Hizmet Ekle</button>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative h-[400px] bg-stone-100 overflow-hidden cursor-pointer border border-stone-100 hover:z-10"
              onClick={() => setActiveService(index)}
            >
              {/* Görsel */}
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                onError={handleImageError}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-stone-900/60 group-hover:bg-stone-900/40 transition-colors" />

              {/* İçerik */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <h3 className="text-2xl font-serif mb-2 border-l-2 border-orange-500 pl-4 transition-all duration-300 group-hover:border-white">
                  {service.name}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden pl-4 border-l-2 border-transparent">
                  {service.desc}
                </p>
                {isLoggedIn && <button onClick={(e) => {e.stopPropagation(); openEdit("service", index)}} className="absolute top-4 right-4 text-[10px] bg-white/20 p-2 hover:bg-white text-stone-900">Düzenle</button>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projeler - Dark Section */}
      <section id="projects" className="py-24 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-stone-700 flex-1"></div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Seçilmiş Referanslar</h2>
            <div className="h-px bg-stone-700 flex-1 flex justify-end">
               {isLoggedIn && <button onClick={() => openAdd("project")} className="text-[10px] text-stone-400 hover:text-white">+ Ekle</button>}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="space-y-4 group">
                <div className="text-5xl font-serif text-stone-800 group-hover:text-stone-700 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-white border-b border-stone-800 pb-4 group-hover:border-orange-600 transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">{project.type}</span>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed">{project.desc}</p>
                {isLoggedIn && <button onClick={() => openEdit("project", index)} className="text-[10px] text-stone-600 underline hover:text-white">Düzenle</button>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar - Minimal Alıntılar */}
      <section id="references" className="py-24 px-6 bg-[#E7E5E4]">
        <div className="max-w-4xl mx-auto text-center">
          {isLoggedIn && <button onClick={() => openAdd("reference")} className="mb-8 text-[10px] bg-stone-300 px-3 py-1 text-stone-700">+ Referans Ekle</button>}
          
          <div className="grid md:grid-cols-2 gap-12">
            {references.map((ref, index) => (
              <div key={index} className="relative p-10 bg-white shadow-xl shadow-stone-200/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-600 flex items-center justify-center text-white font-serif text-xl">"</div>
                <p className="text-stone-600 italic font-medium mb-6 text-sm leading-7">
                  {ref.quote}
                </p>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">{ref.company}</h4>
                  <span className="text-xs text-stone-400 block mt-1">{ref.name} — {ref.title}</span>
                </div>
                {isLoggedIn && <button onClick={() => openEdit("reference", index)} className="mt-4 text-[10px] text-stone-300 hover:text-stone-500">Düzenle</button>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim - Clean Layout */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-serif text-stone-900 mb-8">İletişime Geçin</h2>
            <p className="text-stone-500 mb-12 max-w-md leading-relaxed text-sm">
              {companyInfo.about}
            </p>
            
            <div className="grid grid-cols-1 gap-8 mb-12">
              <div className="border-l-2 border-orange-200 pl-6">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">Merkez Ofis</span>
                <p className="text-stone-800 font-medium">{companyInfo.address}</p>
              </div>
              <div className="border-l-2 border-orange-200 pl-6">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">Doğrudan İletişim</span>
                <p className="text-stone-800 font-medium">{companyInfo.phone}</p>
                <p className="text-stone-500 text-sm mt-1">{companyInfo.email}</p>
              </div>
            </div>

            {isLoggedIn && <button onClick={() => openEdit("company")} className="text-xs border border-stone-300 px-4 py-2 hover:bg-stone-100">Firma Bilgilerini Düzenle</button>}
          </div>

          <div className="bg-white p-10 shadow-2xl shadow-stone-200 border-t-4 border-stone-900">
            <h3 className="text-xl font-bold text-stone-900 mb-6">Hızlı Teklif Formu</h3>
            <form onSubmit={handleFastContactSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Ad Soyad</label>
                <input required type="text" value={fastContactForm.name} onChange={(e) => setFastContactForm({...fastContactForm, name: e.target.value})} className="w-full border-b border-stone-300 py-2 outline-none focus:border-orange-500 bg-transparent transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Telefon</label>
                <input required type="tel" value={fastContactForm.phone} onChange={(e) => setFastContactForm({...fastContactForm, phone: e.target.value})} className="w-full border-b border-stone-300 py-2 outline-none focus:border-orange-500 bg-transparent transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Mesajınız</label>
                <textarea required rows={2} value={fastContactForm.message} onChange={(e) => setFastContactForm({...fastContactForm, message: e.target.value})} className="w-full border-b border-stone-300 py-2 outline-none focus:border-orange-500 bg-transparent transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-stone-900 text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors mt-4">
                WhatsApp ile İlet
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Harita - Full Width, Grayscale */}
      <section className="w-full h-96 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          title="Ofis Konumu"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=Withmor+Asans%C3%B6r+Market%2C+Kervanc%C4%B1+Ticaret+Merkezi%2C+Velime%C5%9Fe+OSB%2C+Tekirda%C4%9F&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </section>

      {/* Footer - Minimal */}
      <footer className="bg-stone-950 text-stone-500 py-16 px-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-8">
           <div className="w-8 h-8 border border-stone-700 flex items-center justify-center text-xs font-serif text-white">W</div>
           <span className="text-white font-bold tracking-widest text-sm">{companyInfo.name}</span>
        </div>
        <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest mb-10">
          <a href="#services" className="hover:text-white transition-colors">Hizmetler</a>
          <a href="#projects" className="hover:text-white transition-colors">Projeler</a>
          <a href="https://wa.me/905302805526" target="_blank" className="hover:text-white transition-colors">WhatsApp</a>
        </div>
        <p className="text-[10px] text-stone-700">
          © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. <br/>
          Designed for Excellence.
        </p>
      </footer>

      {/* --- MODALS (Login, Quote, Edit) --- */}
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm">
          <div className="bg-white p-8 w-full max-w-sm shadow-2xl">
            <h3 className="text-xl font-serif mb-6 text-center">Yönetici Girişi</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="text" name="username" placeholder="Kullanıcı" className="w-full bg-stone-50 border border-stone-200 p-3 text-sm outline-none focus:border-stone-900" />
              <input type="password" name="password" placeholder="Şifre" className="w-full bg-stone-50 border border-stone-200 p-3 text-sm outline-none focus:border-stone-900" />
              <button className="w-full bg-stone-900 text-white p-3 text-xs font-bold uppercase hover:bg-orange-700">Giriş</button>
            </form>
            <button onClick={() => setShowLogin(false)} className="w-full text-center mt-4 text-xs text-stone-400 hover:text-stone-900">Vazgeç</button>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm p-4">
          <div className="bg-white p-8 w-full max-w-md shadow-2xl border-t-4 border-orange-500">
            <h3 className="text-xl font-serif mb-2">Proje Teklifi</h3>
            <p className="text-xs text-stone-500 mb-6">Detayları iletin, mühendislerimiz incelesin.</p>
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="Ad Soyad" value={quoteForm.name} onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})} className="border-b border-stone-300 py-2 text-sm outline-none focus:border-orange-500" />
                <input required placeholder="Telefon" value={quoteForm.phone} onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})} className="border-b border-stone-300 py-2 text-sm outline-none focus:border-orange-500" />
              </div>
              <select value={quoteForm.projectType} onChange={(e) => setQuoteForm({...quoteForm, projectType: e.target.value})} className="w-full border-b border-stone-300 py-2 text-sm outline-none bg-white">
                <option>Konut Asansörü</option>
                <option>Yük Asansörü</option>
                <option>Hidrolik Sistem</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Durak Sayısı" value={quoteForm.floorCount} onChange={(e) => setQuoteForm({...quoteForm, floorCount: e.target.value})} className="border-b border-stone-300 py-2 text-sm outline-none focus:border-orange-500" />
                <input placeholder="Konum" value={quoteForm.location} onChange={(e) => setQuoteForm({...quoteForm, location: e.target.value})} className="border-b border-stone-300 py-2 text-sm outline-none focus:border-orange-500" />
              </div>
              <textarea placeholder="Notlar..." rows={2} value={quoteForm.note} onChange={(e) => setQuoteForm({...quoteForm, note: e.target.value})} className="w-full border-b border-stone-300 py-2 text-sm outline-none focus:border-orange-500 resize-none" />
              <button className="w-full bg-stone-900 text-white p-3 text-xs font-bold uppercase hover:bg-orange-700">WhatsApp Gönder</button>
            </form>
            <button onClick={() => setShowQuoteModal(false)} className="w-full text-center mt-4 text-xs text-stone-400 hover:text-stone-900">Kapat</button>
          </div>
        </div>
      )}

      {/* Edit Modal - Minimal */}
      {editModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/80 backdrop-blur-sm">
          <div className="bg-white p-8 w-full max-w-lg shadow-2xl max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-serif mb-6">{editModal.index === null ? "Yeni Kayıt" : "Düzenle"}</h3>
            <div className="space-y-4">
               {Object.keys(tempValue).map((key) => (
                  <div key={key}>
                     <label className="text-[10px] font-bold text-stone-400 uppercase block mb-1">{key}</label>
                     {key === "desc" || key === "quote" || key === "about" ? (
                        <textarea rows={3} value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full border border-stone-200 p-2 text-sm outline-none focus:border-stone-900 bg-stone-50" />
                     ) : (
                        <input type="text" value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full border border-stone-200 p-2 text-sm outline-none focus:border-stone-900 bg-stone-50" />
                     )}
                  </div>
               ))}
            </div>
            <div className="mt-8 flex justify-between gap-4">
               {editModal.index !== null && ["service", "project", "reference"].includes(editModal.type) && (
                  <button onClick={handleDelete} className="text-red-500 text-xs font-bold hover:text-red-700">SİL</button>
               )}
               <div className="flex gap-4 ml-auto">
                  <button onClick={() => setEditModal({open: false, type: null, index: null})} className="text-stone-500 text-xs font-bold hover:text-stone-900">VAZGEÇ</button>
                  <button onClick={saveEdit} className="bg-stone-900 text-white px-6 py-2 text-xs font-bold hover:bg-orange-700">KAYDET</button>
               </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
