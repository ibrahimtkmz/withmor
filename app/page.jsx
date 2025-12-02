"use client";

import { useState } from "react";

// Withmor Teknika Lift için koyu temalı, modern bir asansör landing page tasarımı
// Bu dosya .jsx/.tsx içinde sorunsuz derlenecek şekilde yazıldı.

function ElevatorAnimation() {
  return (
    <div className="mt-6 flex justify-center">
      <div className="relative h-44 w-28 overflow-hidden rounded-2xl border border-cyan-400/40 bg-slate-900/90 shadow-[0_18px_45px_rgba(15,23,42,0.8)]">
        {/* Asansör kuyusu */}
        <div className="absolute inset-x-4 top-3 bottom-3 border-x border-slate-700/70" />

        {/* Kat çizgileri */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="absolute left-4 right-4 border-t border-slate-700/70"
            style={{ top: `${(index + 1) * 16}%` }}
          />
        ))}

        {/* Kat numaraları */}
        <div className="absolute right-1.5 top-3 flex flex-col items-end gap-2 text-[9px] text-slate-400">
          {[5, 4, 3, 2, 1].map((floor) => (
            <span key={floor}>#{floor}</span>
          ))}
        </div>

        {/* Kabin */}
        <div
          className="absolute left-4 right-9 h-7 rounded-xl bg-cyan-400/80 shadow-lg shadow-cyan-400/40"
          style={{ animation: "elevatorMove 6s ease-in-out infinite" }}
        >
          <div className="flex h-full items-center justify-center gap-1 text-[9px] font-semibold text-slate-950">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Kabin</span>
          </div>
        </div>

        {/* Alt zemin çizgisi (bekleme alanı) */}
        <div className="absolute bottom-3 left-2 right-2 h-[2px] bg-slate-700/80" />

        {/* Alt katta bekleyen çöp adam (asansöre binme animasyonu) */}
        <div
          className="pointer-events-none absolute bottom-3 left-1 flex items-end gap-1 text-[9px] text-slate-200"
          style={{ animation: "personBottom 6s ease-in-out infinite" }}
        >
          {/* Çöp adam gövde */}
          <div className="relative h-7 w-4">
            {/* Baş */}
            <div className="absolute left-1 top-0 h-2 w-2 rounded-full border border-slate-100" />
            {/* Gövde */}
            <div className="absolute left-[9px] top-2 h-2.5 w-[1px] bg-slate-100" />
            {/* Kollar */}
            <div className="absolute left-[9px] top-[10px] h-[1px] w-3 -translate-x-1/2 bg-slate-100" />
            {/* Bacaklar */}
            <div className="absolute left-[9px] top-[14px] h-2 w-[1px] rotate-12 bg-slate-100" />
            <div className="absolute left-[9px] top-[14px] h-2 w-[1px] -rotate-12 bg-slate-100" />
          </div>
        </div>

        {/* 5. katta inip yürüyen çöp adam */}
        <div
          className="pointer-events-none absolute left-[52%] top-[16%] flex items-end gap-1 text-[9px] text-slate-200"
          style={{ animation: "personTop 6s ease-in-out infinite" }}
        >
          <div className="relative h-7 w-4">
            <div className="absolute left-1 top-0 h-2 w-2 rounded-full border border-slate-100" />
            <div className="absolute left-[9px] top-2 h-2.5 w-[1px] bg-slate-100" />
            <div className="absolute left-[9px] top-[10px] h-[1px] w-3 -translate-x-1/2 bg-slate-100" />
            <div className="absolute left-[9px] top-[14px] h-2 w-[1px] rotate-12 bg-slate-100" />
            <div className="absolute left-[9px] top-[14px] h-2 w-[1px] -rotate-12 bg-slate-100" />
          </div>
        </div>

        {/* Yön oku */}
        <div className="absolute left-2.5 top-3 flex items-center gap-1 text-[9px] text-emerald-300">
          <span className="inline-flex h-3 w-3 items-center justify-center rounded-full border border-emerald-400/70">
            ↑
          </span>
          <span>Yukarı</span>
        </div>

        <style jsx>{`
          @keyframes elevatorMove {
            0% {
              transform: translateY(120%);
            }
            45% {
              transform: translateY(15%);
            }
            60% {
              transform: translateY(-65%);
            }
            100% {
              transform: translateY(120%);
            }
          }

          /* Alt kattaki çöp adam: bekler, kabine doğru yürür ve içeri girip kaybolur */
          @keyframes personBottom {
            0% {
              transform: translateX(0);
              opacity: 1;
            }
            15% {
              transform: translateX(4px);
              opacity: 1;
            }
            30% {
              transform: translateX(14px);
              opacity: 1;
            }
            40% {
              transform: translateX(18px);
              opacity: 0.4;
            }
            50% {
              transform: translateX(20px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 0;
            }
          }

          /* 5. katta çıkan çöp adam: kabinden çıkar, yürür ve kaybolur */
          @keyframes personTop {
            0% {
              opacity: 0;
              transform: translateX(0);
            }
            55% {
              opacity: 0;
              transform: translateX(0);
            }
            65% {
              opacity: 1;
              transform: translateX(0);
            }
            80% {
              opacity: 1;
              transform: translateX(14px);
            }
            95% {
              opacity: 0;
              transform: translateX(22px);
            }
            100% {
              opacity: 0;
              transform: translateX(22px);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default function AsansorSite() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Düzenlenebilir içerikler
  const [hero, setHero] = useState({
    eyebrow: "Premium Asansör Çözümleri",
    title: "Güvenli ve estetik dikey ulaşım mühendisliği",
    subtitle:
      "Konut binalarından iş merkezlerine kadar özel tasarım, montaj ve bakım hizmetleri sunuyoruz.",
    cta: "Proje teklifi al",
    secondaryCta: "Referansları gör",
  });

  const [services, setServices] = useState([
    {
      id: "celik-konstruksiyonlar",
      name: "Çelik Konstrüksiyonlar",
      desc:
        "Makine dairesi, taşıyıcı konstrüksiyonlar ve çelik yapılar için projeye özel imalat ve montaj.",
      image: "/services/celik-konstruksiyonlar.jpg",
    },
    {
      id: "hidrolik-sistemler",
      name: "Hidrolik Sistemler",
      desc:
        "Villa, yük ve makine dairesiz çözümler için sessiz ve güvenli hidrolik asansör sistemleri.",
      image: "/services/hidrolik-sistemler.jpg",
    },
    {
      id: "kabinler",
      name: "Kabinler",
      desc:
        "Standart ve panoramik kabin tasarımları, zemin ve aydınlatma seçenekleri ile zenginleştirilmiş iç dekorasyon.",
      image: "/services/kabinler.jpg",
    },
    {
      id: "yuk-asansorleri-platformlar",
      name: "Yük Asansörleri ve Platformlar",
      desc:
        "Sanayi tesisleri, depolar ve otoparklar için ağır yük taşıma çözümleri ve makaslı platformlar.",
      image: "/services/yuk-asansorleri-platformlar.jpg",
    },
    {
      id: "makine-sasesi-mrl",
      name: "Makine Şasesi MRL / MR",
      desc:
        "MRL ve geleneksel makine daireli asansörler için titreşimi azaltan, uzun ömürlü makine şaseleri.",
      image: "/services/makine-sasesi-mrl.jpg",
    },
    {
      id: "yuk-kabinleri",
      name: "Yük Kabinleri",
      desc:
        "Ağır ve hassas yükler için darbe dayanımlı, kaymaz zeminli ve yüksek tavanlı yük kabinleri.",
      image: "/services/yuk-kabinleri.jpg",
    },
  ]);

  const [activeService, setActiveService] = useState(0);

  const [projects, setProjects] = useState([
    {
      name: "Skyline Residence Tower",
      type: "Panoramik yolcu asansörleri",
      desc: "4 cam panoramik kabin, hedef seçimli kontrol sistemi ve akıllı trafik yönetimi.",
    },
    {
      name: "Techno Industrial Plant",
      type: "Ağır hizmet yük asansörleri",
      desc: "Gün boyu yoğun kullanıma uygun, 3.500 kg kapasiteli 3 hidrolik yük asansörü.",
    },
    {
      name: "City Hospital Complex",
      type: "Sedye ve servis asansörleri",
      desc: "Hastane standartlarında hijyen, kesintisiz çalışma ve güvenli taşıma çözümleri.",
    },
  ]);

  const [references, setReferences] = useState([
    {
      company: "ABC İnşaat Grubu",
      quote:
        "Projelendirme, montaj ve satış sonrası teknik destek süreçlerinin tamamı profesyonelce yönetildi.",
      name: "Murat Yılmaz",
      title: "Proje Yöneticisi",
    },
    {
      company: "Blue Residence Yönetimi",
      quote:
        "Modernizasyon sonrasında hem güvenlik hem de konfor anlamında ciddi bir iyileşme sağlandı.",
      name: "Selin Karaca",
      title: "Site Müdürü",
    },
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    name: "Withmor Teknika Lift",
    about:
      "Withmor Teknika Lift, ulusal ve uluslararası standartlara uygun asansör sistemleri tasarlar, üretir ve anahtar teslim kurulum gerçekleştirir. Güvenlik, dayanıklılık ve konforu bir arada sunan çözümler geliştirir.",
    phone: "+90 530 280 55 26",
    email: "info@withmor.com",
    address: "Alipaşa mah. Salih Omurtak cad no:23a, Çorlu / TEKİRDAĞ",
  });

  // Basit demo login; prod ortamda gerçek auth ile değiştirilmeli.
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLogin(false);
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
    if (type === "company") setTempValue(companyInfo);
    if (type === "service" && index !== null) setTempValue(services[index]);
    if (type === "project" && index !== null) setTempValue(projects[index]);
    if (type === "reference" && index !== null) setTempValue(references[index]);
  };

  const saveEdit = () => {
    const { type, index } = editModal;

    if (type === "hero") setHero(tempValue);
    if (type === "company") setCompanyInfo(tempValue);

    if (type === "service" && index !== null) {
      const copy = [...services];
      copy[index] = tempValue;
      setServices(copy);
    }

    if (type === "project" && index !== null) {
      const copy = [...projects];
      copy[index] = tempValue;
      setProjects(copy);
    }

    if (type === "reference" && index !== null) {
      const copy = [...references];
      copy[index] = tempValue;
      setReferences(copy);
    }

    setEditModal({ open: false, type: null, index: null });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Arka plan glow efektleri */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#22d3ee22,_transparent_55%),_radial-gradient(circle_at_bottom_left,_#4f46e522,_transparent_55%),_radial-gradient(circle_at_bottom,_#0f766e22,_transparent_55%)]"
      />

      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-400 text-sm font-bold text-slate-950 shadow-lg">
              WL
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">{companyInfo.name}</p>
              <p className="text-[11px] text-slate-400">Elevator engineering &amp; solutions</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">
              Hizmetler
            </a>
            <a href="#projects" className="hover:text-white">
              Projeler
            </a>
            <a href="#references" className="hover:text-white">
              Referanslar
            </a>
            <a href="#contact" className="hover:text-white">
              İletişim
            </a>
          </nav>

          {/* Profil / Login */}
          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <span className="hidden text-[11px] text-emerald-300/90 sm:inline">
                Admin modu aktif
              </span>
            )}
            <button
              onClick={() => {
                if (isLoggedIn) handleLogout();
                else setShowLogin(true);
              }}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-50 shadow-sm transition hover:bg-cyan-400 hover:text-slate-950"
            >
              <span className="inline-flex h-7 w-7 items
