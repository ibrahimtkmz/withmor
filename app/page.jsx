"use client";

import { useState } from "react";

// Withmor Teknika Lift için koyu temalı, modern bir asansör landing page tasarımı

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
      desc:
        "4 cam panoramik kabin, hedef seçimli kontrol sistemi ve akıllı trafik yönetimi.",
    },
    {
      name: "Techno Industrial Plant",
      type: "Ağır hizmet yük asansörleri",
      desc:
        "Gün boyu yoğun kullanıma uygun, 3.500 kg kapasiteli 3 hidrolik yük asansörü.",
    },
    {
      name: "City Hospital Complex",
      type: "Sedye ve servis asansörleri",
      desc:
        "Hastane standartlarında hijyen, kesintisiz çalışma ve güvenli taşıma çözümleri.",
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
  const [editModal, setEditModal] = useState({
    open: false,
    type: null,
    index: null,
  });
  const [tempValue, setTempValue] = useState({});

  const openEdit = (type, index = null) => {
    setEditModal({ open: true, type, index });

    if (type === "hero") setTempValue(hero);
    if (type === "company") setTempValue(companyInfo);
    if (type === "service" && index !== null) setTempValue(services[index]);
    if (type === "project" && index !== null) setTempValue(projects[index]);
    if (type === "reference" && index !== null) setTempValue(references[index]);
  };

  // YENİ: Ekle butonları için boş form açan fonksiyon
  const openCreate = (type) => {
    setEditModal({ open: true, type, index: null });

    if (type === "service") {
      setTempValue({
        id: "",
        name: "",
        desc: "",
        image: "",
      });
    }

    if (type === "project") {
      setTempValue({
        name: "",
        type: "",
        desc: "",
      });
    }

    if (type === "reference") {
      setTempValue({
        company: "",
        quote: "",
        name: "",
        title: "",
      });
    }
  };

  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const saveEdit = () => {
    const { type, index } = editModal;

    if (type === "hero") {
      setHero(tempValue);
    }

    if (type === "company") {
      setCompanyInfo(tempValue);
    }

    if (type === "service") {
      const copy = [...services];
      if (index === null) {
        // YENİ KAYIT
        const id = tempValue.id || slugify(tempValue.name || "yeni-hizmet");
        copy.push({ ...tempValue, id });
      } else {
        copy[index] = tempValue;
      }
      setServices(copy);
    }

    if (type === "project") {
      const copy = [...projects];
      if (index === null) {
        copy.push({ ...tempValue });
      } else {
        copy[index] = tempValue;
      }
      setProjects(copy);
    }

    if (type === "reference") {
      const copy = [...references];
      if (index === null) {
        copy.push({ ...tempValue });
      } else {
        copy[index] = tempValue;
      }
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
              <p className="text-sm font-semibold tracking-tight">
                {companyInfo.name}
              </p>
              <p className="text-[11px] text-slate-400">
                Elevator engineering &amp; solutions
              </p>
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
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[11px]">
                {isLoggedIn ? "⎋" : "⚙"}
              </span>
              <span>{isLoggedIn ? "Çıkış yap" : "Admin girişi"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        <section className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-[11px] font-medium text-cyan-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{hero.eyebrow}</span>
              {isLoggedIn && (
                <button
                  onClick={() => openEdit("hero")}
                  className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-slate-100 hover:bg-white/20"
                >
                  Düzenle
                </button>
              )}
            </div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
              {hero.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 hover:bg-cyan-300"
              >
                {hero.cta}
              </a>
              <a
                href="#references"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 hover:bg-white/10"
              >
                {hero.secondaryCta}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
              <span>EN 81 standartlarına uyumlu çözümler</span>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <span>Proje, imalat, montaj ve bakım tek elde</span>
            </div>
          </div>

          <div className="md:justify-self-end">
            <ElevatorAnimation />
          </div>
        </section>

        {/* Hizmetler */}
        <section id="services" className="mt-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-50">
                Hizmetler
              </h2>
              <p className="text-xs text-slate-400">
                Yük asansörleri, hidrolik çözümler ve özel kabin imalatları.
              </p>
            </div>

            {/* HERKESE AÇIK EKLE BUTONU */}
            <button
              onClick={() => openCreate("service")}
              className="inline-flex items-center gap-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-[11px] text-cyan-200 hover:bg-cyan-400/20"
            >
              <span>＋</span>
              <span>Hizmet ekle</span>
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <button
                key={service.id}
                onMouseEnter={() => setActiveService(index)}
                className={`group flex flex-col items-start rounded-2xl border px-4 py-3 text-left text-xs transition ${
                  activeService === index
                    ? "border-cyan-400/60 bg-cyan-400/10"
                    : "border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                }`}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <p className="text-[13px] font-semibold text-slate-50">
                    {service.name}
                  </p>
                  {isLoggedIn && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openEdit("service", index);
                      }}
                      className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-slate-100 hover:bg-white/20"
                    >
                      Düzenle
                    </button>
                  )}
                </div>
                <p className="mt-2 text-[11px] text-slate-300">
                  {service.desc}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Projeler */}
        <section id="projects" className="mt-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-50">
                Seçili Projeler
              </h2>
              <p className="text-xs text-slate-400">
                Farklı sektörlerde tamamlanan anahtar teslim uygulamalar.
              </p>
            </div>

            {/* HERKESE AÇIK EKLE BUTONU */}
            <button
              onClick={() => openCreate("project")}
              className="inline-flex items-center gap-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-[11px] text-cyan-200 hover:bg-cyan-400/20"
            >
              <span>＋</span>
              <span>Proje ekle</span>
            </button>
          </div>

          <div className="space-y-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs"
              >
                <div>
                  <p className="text-[13px] font-semibold text-slate-50">
                    {project.name}
                  </p>
                  <p className="mt-1 text-[11px] text-cyan-200">
                    {project.type}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    {project.desc}
                  </p>
                </div>
                {isLoggedIn && (
                  <button
                    onClick={() => openEdit("project", index)}
                    className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-slate-100 hover:bg-white/20"
                  >
                    Düzenle
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Referanslar */}
        <section id="references" className="mt-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-50">
                Referanslar
              </h2>
              <p className="text-xs text-slate-400">
                İş ortaklarımızın ve bina yöneticilerinin görüşleri.
              </p>
            </div>

            {/* HERKESE AÇIK EKLE BUTONU */}
            <button
              onClick={() => openCreate("reference")}
              className="inline-flex items-center gap-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-[11px] text-cyan-200 hover:bg-cyan-400/20"
            >
              <span>＋</span>
              <span>Referans ekle</span>
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {references.map((ref, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-xs"
              >
                <p className="text-[11px] leading-relaxed text-slate-200">
                  “{ref.quote}”
                </p>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[12px] font-semibold text-slate-50">
                      {ref.name}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {ref.title} · {ref.company}
                    </p>
                  </div>
                  {isLoggedIn && (
                    <button
                      onClick={() => openEdit("reference", index)}
                      className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-slate-100 hover:bg-white/20"
                    >
                      Düzenle
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* İletişim */}
        <section id="contact" className="mt-16 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              İletişim ve keşif talebi
            </h2>
            <p className="mt-2 text-xs text-slate-400">
              Projeniz hakkında temel bilgileri paylaşın, mühendislik ekibimiz
              size en kısa sürede dönüş yapsın.
            </p>

            <dl className="mt-4 space-y-2 text-xs text-slate-300">
              <div>
                <dt className="text-[11px] text-slate-400">Telefon</dt>
                <dd>{companyInfo.phone}</dd>
              </div>
              <div>
                <dt className="text-[11px] text-slate-400">E-posta</dt>
                <dd>{companyInfo.email}</dd>
              </div>
              <div>
                <dt className="text-[11px] text-slate-400">Adres</dt>
                <dd>{companyInfo.address}</dd>
              </div>
            </dl>

            {isLoggedIn && (
              <button
                onClick={() => openEdit("company")}
                className="mt-3 rounded-full bg-white/10 px-3 py-1 text-[11px] text-slate-100 hover:bg-white/20"
              >
                Firma bilgilerini düzenle
              </button>
            )}
          </div>

          <form className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs">
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-[11px] text-slate-300">
                  Ad Soyad
                </label>
                <input
                  className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-slate-50 outline-none ring-cyan-400/40 placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2"
                  placeholder="Örn. Ahmet Yılmaz"
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] text-slate-300">
                  Telefon
                </label>
                <input
                  className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-slate-50 outline-none ring-cyan-400/40 placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2"
                  placeholder="+90"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-[11px] text-slate-300">
                Proje tipi
              </label>
              <select className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-slate-50 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/40">
                <option>Yolcu asansörü</option>
                <option>Yük asansörü</option>
                <option>Hidrolik sistem</option>
                <option>Villa asansörü</option>
                <option>Modernizasyon</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-[11px] text-slate-300">
                Kısa açıklama
              </label>
              <textarea
                rows={3}
                className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-xs text-slate-50 outline-none ring-cyan-400/40 placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2"
                placeholder="Kat sayısı, kullanım yoğunluğu, özel talepleriniz..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 hover:bg-cyan-300"
            >
              Talep gönder
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-slate-500 md:flex-row">
          <span>
            © {new Date().getFullYear()} {companyInfo.name}. Tüm hakları
            saklıdır.
          </span>
          <span>Asansör tasarım, imalat, montaj ve bakım çözümleri.</span>
        </div>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-xs rounded-2xl border border-white/10 bg-slate-900 p-4 text-xs text-slate-100">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Admin girişi</h3>
              <button
                onClick={() => setShowLogin(false)}
                className="text-sm text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label className="mb-1 block text-[11px] text-slate-300">
                  Kullanıcı adı
                </label>
                <input
                  className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/40"
                  placeholder="demo"
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] text-slate-300">
                  Şifre
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/40"
                  placeholder="******"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Giriş yap (demo)
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit / Create Modal */}
      {editModal.open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-4 text-xs text-slate-100">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold">
                {editModal.index === null ? "Yeni oluştur" : "Düzenle"} –{" "}
                {editModal.type}
              </h3>
              <button
                onClick={() =>
                  setEditModal({ open: false, type: null, index: null })
                }
                className="text-sm text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            </div>

            {/* Form içeriği */}
            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {editModal.type === "hero" && (
                <>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Eyebrow
                    </label>
                    <input
                      value={tempValue.eyebrow || ""}
                      onChange={(e) =>
                        setTempValue({ ...tempValue, eyebrow: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Başlık
                    </label>
                    <input
                      value={tempValue.title || ""}
                      onChange={(e) =>
                        setTempValue({ ...tempValue, title: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Alt başlık
                    </label>
                    <textarea
                      rows={3}
                      value={tempValue.subtitle || ""}
                      onChange={(e) =>
                        setTempValue({
                          ...tempValue,
                          subtitle: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-[11px] text-slate-300">
                        Ana CTA
                      </label>
                      <input
                        value={tempValue.cta || ""}
                        onChange={(e) =>
                          setTempValue({ ...tempValue, cta: e.target.value })
                        }
                        className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] text-slate-300">
                        İkincil CTA
                      </label>
                      <input
                        value={tempValue.secondaryCta || ""}
                        onChange={(e) =>
                          setTempValue({
                            ...tempValue,
                            secondaryCta: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                      />
                    </div>
                  </div>
                </>
              )}

              {editModal.type === "company" && (
                <>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Firma adı
                    </label>
                    <input
                      value={tempValue.name || ""}
                      onChange={(e) =>
                        setTempValue({ ...tempValue, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Hakkında
                    </label>
                    <textarea
                      rows={3}
                      value={tempValue.about || ""}
                      onChange={(e) =>
                        setTempValue({ ...tempValue, about: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-[11px] text-slate-300">
                        Telefon
                      </label>
                      <input
                        value={tempValue.phone || ""}
                        onChange={(e) =>
                          setTempValue({ ...tempValue, phone: e.target.value })
                        }
                        className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] text-slate-300">
                        E-posta
                      </label>
                      <input
                        value={tempValue.email || ""}
                        onChange={(e) =>
                          setTempValue({ ...tempValue, email: e.target.value })
                        }
                        className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Adres
                    </label>
                    <textarea
                      rows={2}
                      value={tempValue.address || ""}
                      onChange={(e) =>
                        setTempValue({
                          ...tempValue,
                          address: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                </>
              )}

              {editModal.type === "service" && (
                <>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Hizmet adı
                    </label>
                    <input
                      value={tempValue.name || ""}
                      onChange={(e) =>
                        setTempValue({ ...tempValue, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Açıklama
                    </label>
                    <textarea
                      rows={3}
                      value={tempValue.desc || ""}
                      onChange={(e) =>
                        setTempValue({ ...tempValue, desc: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Görsel yolu (opsiyonel)
                    </label>
                    <input
                      value={tempValue.image || ""}
                      onChange={(e) =>
                        setTempValue({ ...tempValue, image: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                </>
              )}

              {editModal.type === "project" && (
                <>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Proje adı
                    </label>
                    <input
                      value={tempValue.name || ""}
                      onChange={(e) =>
                        setTempValue({ ...tempValue, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Proje tipi
                    </label>
                    <input
                      value={tempValue.type || ""}
                      onChange={(e) =>
                        setTempValue({ ...tempValue, type: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Açıklama
                    </label>
                    <textarea
                      rows={3}
                      value={tempValue.desc || ""}
                      onChange={(e) =>
                        setTempValue({ ...tempValue, desc: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                </>
              )}

              {editModal.type === "reference" && (
                <>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Firma / Site adı
                    </label>
                    <input
                      value={tempValue.company || ""}
                      onChange={(e) =>
                        setTempValue({
                          ...tempValue,
                          company: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] text-slate-300">
                      Referans metni
                    </label>
                    <textarea
                      rows={3}
                      value={tempValue.quote || ""}
                      onChange={(e) =>
                        setTempValue({ ...tempValue, quote: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                    />
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-[11px] text-slate-300">
                        İsim
                      </label>
                      <input
                        value={tempValue.name || ""}
                        onChange={(e) =>
                          setTempValue({ ...tempValue, name: e.target.value })
                        }
                        className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] text-slate-300">
                        Ünvan
                      </label>
                      <input
                        value={tempValue.title || ""}
                        onChange={(e) =>
                          setTempValue({ ...tempValue, title: e.target.value })
                        }
                        className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-xs text-slate-50"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() =>
                  setEditModal({ open: false, type: null, index: null })
                }
                className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
              >
                Vazgeç
              </button>
              <button
                onClick={saveEdit}
                className="rounded-full bg-cyan-400 px-4 py-1.5 text-[11px] font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
