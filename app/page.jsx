"use client";

import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  Star,
  Settings,
  LogOut,
  User,
  Plus,
  Linkedin,
  Twitter
} from "lucide-react";

// Withmor Teknika Lift - KURUMSAL WEB SİTESİ (Hakkımızda Bölümü Eklendi)

function ElevatorAnimation() {
  return (
    <div className="mt-6 flex justify-center">
      <div className="relative h-44 w-24 overflow-hidden rounded-md border border-slate-300 bg-slate-100 shadow-inner">
        <div className="absolute inset-x-2 top-2 bottom-2 border-x border-slate-300" />
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="absolute left-2 right-2 border-t border-slate-300"
            style={{ top: `${(index + 1) * 16}%` }}
          />
        ))}
        <div className="absolute right-1 top-2 flex flex-col items-end gap-2 text-[9px] text-slate-400 font-mono">
          {[5, 4, 3, 2, 1].map((floor) => (
            <span key={floor}>{floor}</span>
          ))}
        </div>
        <div
          className="absolute left-2.5 right-6 h-7 rounded border border-blue-600 bg-blue-500 shadow-md"
          style={{ top: '16%', animation: "elevatorMove 8s ease-in-out infinite" }}
        >
          <div className="flex h-full items-center justify-center gap-1 text-[8px] font-bold text-white tracking-wider uppercase">
            WL
          </div>
        </div>
        <div className="absolute left-2 top-2 flex items-center gap-1 text-[9px] text-blue-600 font-bold">
          <span>▲▼</span>
        </div>

        <style>{`
          @keyframes elevatorMove {
            0%, 15% { transform: translateY(0%); }
            50%, 65% { transform: translateY(400%); }
            100% { transform: translateY(0%); }
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    projectType: "Konut Asansörü",
    floorCount: "",
    location: "",
    note: "",
  });

  const [fastContactForm, setFastContactForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [hero, setHero] = useState({
    eyebrow: "Premium Asansör Çözümleri",
    title: "Güvenli ve Estetik Dikey Ulaşım Mühendisliği",
    subtitle:
      "Konut binalarından iş merkezlerine kadar özel tasarım, montaj ve bakım hizmetlerinde yüksek mühendislik standartları.",
    cta: "Proje Teklifi Al",
    secondaryCta: "Referanslarımızı İnceleyin",
  });

  // Yeni Hakkımızda Bölümü State'i
  const [aboutContent, setAboutContent] = useState({
    title: "Kurumsal",
    slogan: "Geleceğe Güvenle Yükselin",
  });

  const [services, setServices] = useState([
    {
      id: "celik-konstruksiyonlar",
      name: "Çelik Konstrüksiyonlar",
      desc:
        "Makine dairesi, taşıyıcı konstrüksiyonlar ve çelik yapılar için projeye özel statik hesaplamalı imalat.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "hidrolik-sistemler",
      name: "Hidrolik Sistemler",
      desc:
        "Villa, yük ve makine dairesiz çözümler için sessiz, güvenli ve enerji verimli hidrolik üniteler.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "kabinler",
      name: "Kabin Tasarımları",
      desc:
        "Standart ve panoramik kabin tasarımları, paslanmaz ve cam seçenekleri ile modern iç dekorasyon.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "yuk-asansorleri-platformlar",
      name: "Yük Asansörleri & Platformlar",
      desc:
        "Sanayi tesisleri ve depolar için yüksek kapasiteli ağır yük taşıma çözümleri ve makaslı platformlar.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "makine-sasesi-mrl",
      name: "Makine Şasesi MRL / MR",
      desc:
        "MRL ve geleneksel sistemler için titreşimi minimize eden, uzun ömürlü sertifikalı makine şaseleri.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "yuk-kabinleri",
      name: "Endüstriyel Yük Kabinleri",
      desc:
        "Ağır ve hassas yükler için darbe dayanımlı, kaymaz zeminli, güçlendirilmiş çelik yük kabinleri.",
      image: "https://images.unsplash.com/photo-1535557597501-0febd41569f1?auto=format&fit=crop&q=80&w=800",
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
    facebook: "https://www.facebook.com/TEKNIKALIFT",
    instagram: "https://www.instagram.com/withmorlift/",
    whatsapp: "https://wa.me/905302805526"
  });

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

  const [editModal, setEditModal] = useState({ open: false, type: null, index: null });
  const [tempValue, setTempValue] = useState({});

  const openEdit = (type, index = null) => {
    setEditModal({ open: true, type, index });

    if (type === "hero") setTempValue(hero);
    if (type === "company") setCompanyInfo(companyInfo);
    if (type === "aboutSection") setTempValue(aboutContent); // Yeni edit handler
    if (type === "service" && index !== null) setTempValue(services[index]);
    if (type === "project" && index !== null) setTempValue(projects[index]);
    if (type === "reference" && index !== null) setTempValue(references[index]);
  };

  const openAdd = (type) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }
    setEditModal({ open: true, type, index: null });

    if (type === "service")
      setTempValue({ id: `new-${Date.now()}`, name: "", desc: "", image: "" });
    if (type === "project") setTempValue({ name: "", type: "", desc: "" });
    if (type === "reference") setTempValue({ company: "", quote: "", name: "", title: "" });
  };

  const saveEdit = () => {
    const { type, index } = editModal;

    if (type === "hero") setHero(tempValue);
    if (type === "company") setCompanyInfo(tempValue);
    if (type === "aboutSection") setAboutContent(tempValue);

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
    // KURUMSAL TEMA: Beyaz zemin, Koyu gri metinler, Klasik font
    // overflow-x-hidden eklendi: Mobilde sağa sola kaymayı engeller
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 text-sm font-bold text-white shadow-md">
              WL
            </div>
            <div className="leading-tight">
              <p className="text-base font-bold tracking-tight text-slate-900">{companyInfo.name}</p>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Elevator Solutions</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-blue-700 transition-colors">Kurumsal</a>
            <a href="#services" className="hover:text-blue-700 transition-colors">Hizmetler</a>
            <a href="#projects" className="hover:text-blue-700 transition-colors">Projeler</a>
            <a href="#references" className="hover:text-blue-700 transition-colors">Referanslar</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">İletişim</a>
          </nav>

          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <span className="hidden text-[11px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-200 sm:inline-flex items-center gap-1">
                 <CheckCircle2 size={12} /> Yönetici
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
              className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 hover:border-slate-300"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                {isLoggedIn ? <LogOut size={12}/> : <User size={12}/>}
              </span>
              {isLoggedIn ? "Çıkış" : "Giriş"}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-white h-[100dvh] flex flex-col animate-in slide-in-from-right duration-200 md:hidden">
             <div className="p-4 flex justify-between items-center border-b border-slate-100">
                <span className="font-bold text-slate-900">Menü</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                  <X size={24} />
                </button>
             </div>
             <nav className="flex flex-col p-6 gap-6 text-lg font-medium text-slate-700">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-700">Kurumsal</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-700">Hizmetler</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-700">Projeler</a>
                <a href="#references" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-700">Referanslar</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-700">İletişim</a>
                <div className="h-px bg-slate-100 my-2" />
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (isLoggedIn) handleLogout();
                    else {
                      setLoginError("");
                      setShowLogin(true);
                    }
                  }}
                  className="text-left text-blue-700 font-bold"
                >
                  {isLoggedIn ? "Çıkış Yap" : "Yönetici Girişi"}
                </button>
             </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="w-full border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:px-8 md:grid-cols-2">
          {/* Sol Kısım */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700 border border-blue-100">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              7/24 Profesyonel Teknik Servis
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem] leading-tight">
              {hero.title}
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600">
              {hero.subtitle}
            </p>
            <div className="mb-8 flex flex-wrap items-center gap-4">
              
              {/* DÖNEN IŞIK EFEKTLİ BUTON */}
              <button
                onClick={() => setShowQuoteModal(true)}
                className="relative overflow-hidden rounded-lg p-[4px] shadow-lg shadow-blue-900/20 transition hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFF00_14%,#00FF00_28%,#00FFFF_42%,#0000FF_57%,#FF00FF_71%,#FF0000_85%,#FF0000_100%)]" />
                <span className="relative flex h-full w-full items-center justify-center rounded-md bg-blue-900 px-8 py-3 text-sm font-semibold text-white transition group-hover:bg-blue-800">
                  {hero.cta}
                </span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-700 group"
              >
                {hero.secondaryCta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 mt-8 bg-blue-900 rounded-xl p-6 text-white shadow-xl shadow-blue-900/10">
              <div>
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-xs text-blue-200 font-medium">Yıllık Tecrübe</p>
              </div>
              <div className="border-l border-blue-700 pl-6">
                <p className="text-2xl font-bold text-white">250+</p>
                <p className="text-xs text-blue-200 font-medium">Tamamlanan Proje</p>
              </div>
              <div className="border-l border-blue-700 pl-6">
                <p className="text-2xl font-bold text-white">7/24</p>
                <p className="text-xs text-blue-200 font-medium">Kesintisiz Destek</p>
              </div>
            </div>

            {isLoggedIn && (
              <button
                onClick={() => openEdit("hero")}
                className="mt-6 flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:underline"
              >
                <Settings size={12} /> İçeriği Düzenle
              </button>
            )}
          </div>

          {/* Sağ Kısım - Animasyon */}
          <div className="flex flex-col items-center justify-center mt-10 md:mt-0">
             <p className="mb-6 max-w-xs text-center text-sm font-medium leading-relaxed text-slate-500">
                Yük asansörleri, Yük platformları, Hidrolik sistemler ve Villa asansörleri ile özel çözümler.
              </p>
            <div className="relative rounded-2xl bg-white p-2 shadow-2xl shadow-slate-200 border border-slate-100">
              <div className="rounded-xl bg-slate-50 px-8 py-8 border border-slate-200">
                <ElevatorAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- YENİ HAKKIMIZDA BÖLÜMÜ --- */}
      <section id="about" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
               <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Kurumsal</span>
               {isLoggedIn && <button onClick={() => openEdit("aboutSection")} className="text-[10px] text-blue-500 hover:underline flex items-center gap-1"><Settings size={10}/> Düzenle</button>}
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{aboutContent.title}</h2>
            <p className="text-xl text-blue-900 font-semibold mb-6 font-serif italic">"{aboutContent.slogan}"</p>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
              {companyInfo.about}
            </p>
            
            {/* Sosyal Medya İkonları */}
            <div className="flex items-center gap-4">
               <a href={companyInfo.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                  <Facebook size={20} />
               </a>
               <a href={companyInfo.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-sm">
                  <Instagram size={20} />
               </a>
               <a href={companyInfo.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all shadow-sm">
                  <Phone size={20} />
               </a>
            </div>
          </div>

          {/* Adres ve Mail Kartları */}
          <div className="grid gap-4">
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                   <MapPin size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 mb-1">Merkez Ofis & Fabrika</h4>
                   <p className="text-sm text-slate-600">{companyInfo.address}</p>
                </div>
             </div>
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                   <Mail size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 mb-1">E-Posta İletişim</h4>
                   <p className="text-sm text-slate-600">{companyInfo.email}</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ANA İÇERİK */}
      <main className="mx-auto max-w-6xl px-6 py-20 space-y-24">
        
        {/* Hizmetler */}
        <section id="services" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-slate-200 pb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Hizmetlerimiz</span>
                {isLoggedIn && (
                  <button onClick={() => openAdd("service")} className="flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold hover:bg-blue-100"><Plus size={10}/> Ekle</button>
                )}
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Ürün ve Hizmet Grupları</h2>
            </div>
            <p className="max-w-md text-sm text-slate-500 md:text-right">
              Endüstriyel ve konut tipi dikey taşıma sistemlerinde geniş ürün yelpazesi.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sol Liste - MOBİLDE YATAY SCROLL */}
            <div className="lg:col-span-4 flex lg:flex-col gap-3 lg:gap-1 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide snap-x w-full">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`
                    flex-none min-w-fit lg:w-full text-left px-5 py-3 lg:py-4 rounded-full lg:rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group snap-start whitespace-nowrap lg:whitespace-normal border
                    ${index === activeService
                      ? "bg-slate-900 text-white shadow-lg lg:transform lg:scale-105 border-slate-900"
                      : "bg-white text-slate-600 hover:bg-slate-50 border-slate-200 lg:border-transparent hover:border-slate-300"
                    }
                  `}
                >
                  {service.name}
                  {index === activeService && <ChevronRight className="h-4 w-4 text-blue-400 hidden lg:block" />}
                </button>
              ))}
            </div>

            {/* Sağ Detay */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-2 h-full flex flex-col">
                <div className="relative h-48 sm:h-64 w-full overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center">
                   <img
                      src={services[activeService]?.image}
                      alt={services[activeService]?.name}
                      onError={handleImageError}
                      className="max-h-full max-w-full object-contain transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 pointer-events-none border border-slate-100/50 rounded-xl" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                     <h3 className="text-xl font-bold text-slate-900 mb-2">{services[activeService]?.name}</h3>
                     <p className="text-slate-600 leading-relaxed text-sm">
                       {services[activeService]?.desc}
                     </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                     <button 
                        onClick={() => setShowQuoteModal(true)}
                        className="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 group"
                     >
                       Detaylı Bilgi Al <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                     </button>
                     {isLoggedIn && (
                        <button onClick={() => openEdit("service", activeService)} className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 underline">
                          <Settings size={12}/> Düzenle
                        </button>
                      )}
                  </div>
                </div>
                
                {/* Alt Carousel - Küçük Önizlemeler */}
                <div className="px-6 pb-6 mt-auto">
                   <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide pt-2 justify-center">
                    {services.map((service, index) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(index)}
                        className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                          index === activeService ? "border-blue-900 ring-1 ring-blue-900" : "border-transparent opacity-60 hover:opacity-100"
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
        </section>

        {/* Projeler */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-8">
             <div>
               <div className="flex items-center gap-2 mb-2">
                 <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Referans Projeler</span>
                 {isLoggedIn && <button onClick={() => openAdd("project")} className="flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold"><Plus size={10}/> Ekle</button>}
               </div>
               <h2 className="text-3xl font-bold text-slate-900">Seçilmiş Uygulamalar</h2>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors">{project.name}</h3>
                  <span className="inline-block mt-2 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit">
                    {project.type}
                  </span>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">
                    {project.desc}
                  </p>
                  {isLoggedIn && (
                    <button onClick={() => openEdit("project", index)} className="mt-4 flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 text-left underline">
                      <Settings size={12}/> Projeyi Düzenle
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Referanslar */}
        <section id="references" className="bg-blue-900 -mx-6 px-6 py-20 text-white">
           <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                 {/* Kurumsal Referanslar */}
                 <div>
                    <div className="flex items-center gap-2 mb-6">
                       <h2 className="text-2xl font-bold text-white">Kurumsal Referanslar</h2>
                       {isLoggedIn && <button onClick={() => openAdd("reference")} className="flex items-center gap-1 text-[10px] bg-blue-800 border border-blue-700 text-blue-200 px-2 py-0.5 rounded font-bold hover:bg-blue-700"><Plus size={10}/> Ekle</button>}
                    </div>
                    <div className="space-y-4">
                      {references.map((ref, index) => (
                        <div key={index} className="bg-blue-800 p-5 rounded-xl border border-blue-700 shadow-lg relative transition hover:border-blue-600">
                           <span className="text-4xl text-blue-600 absolute top-2 right-4 font-serif">"</span>
                           <p className="text-sm text-blue-50 italic mb-4 relative z-10">{ref.quote}</p>
                           <div className="flex items-center justify-between border-t border-blue-700 pt-3">
                              <div>
                                 <p className="text-sm font-bold text-white">{ref.company}</p>
                                 <p className="text-xs text-blue-300">{ref.name} - {ref.title}</p>
                              </div>
                              {isLoggedIn && <button onClick={() => openEdit("reference", index)} className="flex items-center gap-1 text-xs text-blue-300 hover:text-white"><Settings size={12}/> Düzenle</button>}
                           </div>
                        </div>
                      ))}
                    </div>
                 </div>

                 {/* Google Yorumları */}
                 <div>
                    <div className="flex items-center justify-between mb-6">
                       <h2 className="text-2xl font-bold text-white">Müşteri Deneyimi</h2>
                       <a href="https://maps.app.goo.gl/mfxnQ3ngTwYtVyAN6" target="_blank" rel="noreferrer" className="text-xs font-semibold text-blue-200 hover:text-white hover:underline">Google'da Görüntüle →</a>
                    </div>
                    <div className="bg-blue-800 rounded-2xl border border-blue-700 p-6 shadow-lg">
                       <div className="flex items-center gap-4 mb-6">
                          <div className="text-4xl font-bold text-white">4.9</div>
                          <div>
                             <div className="flex text-amber-400 text-sm"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                             <p className="text-xs text-blue-300 mt-1">120+ Google Yorumu</p>
                          </div>
                       </div>
                       <div className="space-y-4">
                          {googleReviews.map((review) => (
                             <div key={review.id} className="border-b border-blue-700 last:border-0 pb-4 last:pb-0">
                                <div className="flex items-center justify-between mb-1">
                                   <span className="text-sm font-bold text-white">{review.name}</span>
                                   <span className="text-[10px] text-blue-300">{review.date}</span>
                                </div>
                                <div className="flex text-[10px] text-amber-400 mb-1">
                                  {Array.from({length: review.rating}).map((_, i) => (
                                    <Star key={i} size={12} fill="currentColor" />
                                  ))}
                                </div>
                                <p className="text-xs text-blue-100 line-clamp-2">{review.text}</p>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* İletişim */}
        <section id="contact" className="grid lg:grid-cols-2 gap-12">
           <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2 block">Bize Ulaşın</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Projenizi Birlikte Planlayalım</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                 {companyInfo.about}
              </p>
              
              <div className="space-y-6 mb-8">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                       <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">Adres</p>
                       <p className="text-sm text-slate-600 mt-1">{companyInfo.address}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                       <Phone className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">Telefon</p>
                       <p className="text-sm text-slate-600 mt-1">{companyInfo.phone}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                       <Mail className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">E-Posta</p>
                       <p className="text-sm text-slate-600 mt-1">{companyInfo.email}</p>
                    </div>
                 </div>
              </div>

              {isLoggedIn && <button onClick={() => openEdit("company")} className="flex items-center gap-2 text-xs font-semibold text-blue-600 border border-blue-200 px-3 py-2 rounded hover:bg-blue-50"><Settings size={14}/> Firma Bilgilerini Düzenle</button>}
           </div>

           {/* Sağ: Form ve Harita - RGB Border Eklendi */}
           <div className="space-y-8">
              <div className="relative overflow-hidden rounded-2xl p-[3px] shadow-lg group">
                 <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFF00_14%,#00FF00_28%,#00FFFF_42%,#0000FF_57%,#FF00FF_71%,#FF0000_85%,#FF0000_100%)]" />
                 
                 <div className="relative h-full w-full bg-slate-50 border border-slate-200 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Hızlı İletişim</h3>
                    <form onSubmit={handleFastContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <input required type="text" placeholder="Ad Soyad" value={fastContactForm.name} onChange={(e) => setFastContactForm({...fastContactForm, name: e.target.value})} className="w-full rounded-lg border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                          <input required type="tel" placeholder="Telefon" value={fastContactForm.phone} onChange={(e) => setFastContactForm({...fastContactForm, phone: e.target.value})} className="w-full rounded-lg border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                        </div>
                        <textarea required rows={3} placeholder="Mesajınız" value={fastContactForm.message} onChange={(e) => setFastContactForm({...fastContactForm, message: e.target.value})} className="w-full rounded-lg border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" />
                        <button type="submit" className="w-full bg-blue-900 text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                          <Phone size={16} /> WhatsApp ile Gönder
                        </button>
                    </form>
                 </div>
              </div>

              <div className="h-64 w-full rounded-2xl overflow-hidden shadow-md border border-slate-200">
                 <iframe
                    title="Ofis Konumu"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?q=Withmor+Asans%C3%B6r+Market%2C+Kervanc%C4%B1+Ticaret+Merkezi%2C+Velime%C5%9Fe+OSB%2C+Tekirda%C4%9F&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="opacity-90 hover:opacity-100 transition-opacity"
                 ></iframe>
              </div>
           </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
         <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
               <div className="flex items-center gap-2 mb-4 text-white">
                  <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center font-bold text-xs">WL</div>
                  <span className="font-bold text-lg">{companyInfo.name}</span>
               </div>
               <p className="text-xs leading-relaxed text-slate-400 max-w-xs">
                  Güvenli, konforlu ve verimli dikey ulaşım çözümleri için mühendislik odaklı yaklaşım.
               </p>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm mb-4">Hızlı Erişim</h4>
               <ul className="space-y-2 text-xs">
                  <li><a href="#services" className="hover:text-white transition-colors">Hizmetler</a></li>
                  <li><a href="#projects" className="hover:text-white transition-colors">Projeler</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm mb-4">Sosyal Medya</h4>
               <div className="flex gap-2">
                  <a href={companyInfo.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                    <Facebook size={16} />
                  </a>
                  <a href={companyInfo.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-white">
                    <Instagram size={16} />
                  </a>
                  <a href={companyInfo.whatsapp} target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors text-white">
                    <Phone size={16} />
                  </a>
               </div>
            </div>
         </div>
         <div className="mx-auto max-w-6xl px-6 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
            <span>© {new Date().getFullYear()} {companyInfo.name}. Tüm hakları saklıdır.</span>
            <span>Mühendislik ve Tasarım: Withmor Teknika</span>
         </div>
      </footer>

      {/* Modallar */}
      
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            <h3 className="mb-2 text-lg font-bold text-slate-900">Yönetici Girişi</h3>
            <p className="mb-4 text-xs text-slate-500">Panel erişimi için yetkili bilgilerinizi giriniz.</p>
            {loginError && <div className="mb-3 rounded bg-red-50 p-2 text-center text-xs text-red-600">{loginError}</div>}
            <form onSubmit={handleLogin} className="space-y-3 text-xs">
              <input type="text" name="username" placeholder="Kullanıcı adı" className="w-full rounded border border-slate-200 p-2.5 outline-none focus:border-blue-600" />
              <input type="password" name="password" placeholder="Şifre" className="w-full rounded border border-slate-200 p-2.5 outline-none focus:border-blue-600" />
              <button type="submit" className="w-full rounded bg-blue-900 py-2.5 font-bold text-white hover:bg-blue-800">Giriş Yap</button>
            </form>
            <button onClick={() => setShowLogin(false)} className="mt-3 w-full text-xs text-slate-400 hover:text-slate-600">İptal</button>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
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
               <button type="submit" className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] py-2.5 text-sm font-bold text-white hover:bg-[#128C7E]">
                  <Phone size={16} /> WhatsApp ile Gönder
               </button>
            </form>
            <button onClick={() => setShowQuoteModal(false)} className="mt-4 w-full text-xs text-slate-400 hover:text-slate-600">Kapat</button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
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
                  <button onClick={saveEdit} className="rounded bg-blue-900 text-white px-6 py-2 text-xs font-bold hover:bg-blue-800">{editModal.index === null ? "Ekle" : "Kaydet"}</button>
               </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
