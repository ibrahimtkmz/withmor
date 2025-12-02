"use client";

import { useState } from "react";

// Withmor tarzına yakın, koyu arka planlı, modern bir asansör sitesi tasarımı
// Tüm içerik yine profille giriş yaptıktan sonra düzenlenebilir.

function ElevatorAnimation() {
  return (
    <div className="mt-6 flex justify-center">
      <div className="relative h-44 w-24 overflow-hidden rounded-2xl border border-cyan-400/40 bg-slate-900/90 shadow-[0_18px_45px_rgba(15,23,42,0.8)]">
        {/* Asansör kuyusu */}
        <div className="absolute inset-x-2 top-2 bottom-2 border-x border-slate-700/70" />
        {/* Kat çizgileri */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="absolute left-2 right-2 border-t border-slate-700/70"
            style={{ top: `${(index + 1) * 16}%` }}
          />
        ))}
        {/* Kat numaraları */}
        <div className="absolute right-1 top-2 flex flex-col items-end gap-2 text-[9px] text-slate-400">
          {[5, 4, 3, 2, 1].map((floor) => (
            <span key={floor}>#{floor}</span>
          ))}
        </div>
        {/* Kabin */}
        <div
          className="absolute left-2.5 right-6 h-7 rounded-xl bg-cyan-400/80 shadow-lg shadow-cyan-400/40"
          style={{ animation: "elevatorMove 6s ease-in-out infinite" }}
        >
          <div className="flex h-full items-center justify-center gap-1 text-[9px] font-semibold text-slate-950">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Kabin</span>
          </div>
        </div>
        {/* Yön oku */}
        <div className="absolute left-2 top-2 flex items-center gap-1 text-[9px] text-emerald-300">
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

export default function AsansorSite() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Editable content state
  const [hero, setHero] = useState({
    eyebrow: "Premium Elevator Solutions",
    title: "Engineering safe and elegant vertical journeys",
    subtitle:
      "From residential buildings to high-rise business centers, we design, install and maintain tailor‑made elevator systems.",
    cta: "Request a project offer",
    secondaryCta: "See references",
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
      name: "Yük Asansör ve Platformlarımız",
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
      type: "Panoramic passenger elevators",
      desc: "4 glass panoramic cabins, destination control system, smart traffic management.",
    },
    {
      name: "Techno Industrial Plant",
      type: "Heavy‑duty freight elevators",
      desc: "3 hydraulic freight elevators with 3.500 kg capacity for intensive daily use.",
    },
    {
      name: "City Hospital Complex",
      type: "Bed & service elevators",
      desc: "Hospital‑grade elevators with high hygiene standards and uninterrupted operation.",
    },
  ]);

  const [references, setReferences] = useState([
    {
      company: "ABC Construction Group",
      quote:
        "Project planning, execution and after‑sales technical support were all handled very professionally.",
      name: "Murat Yılmaz",
      title: "Project Manager",
    },
    {
      company: "Blue Residence Management",
      quote:
        "Our residents feel much safer and more comfortable after the modernisation works.",
      name: "Selin Karaca",
      title: "Site Manager",
    },
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    name: "Example Elevator Systems",
    about:
      "We deliver tailor‑made elevator solutions designed according to international standards, focusing on safety, durability and passenger comfort.",
    phone: "+90 532 000 00 00",
    email: "info@exampleelevator.com",
    address: "Istanbul / Türkiye",
  });

  // Simple login (sadece demo). Gerçek projede backend ile entegre edin.
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Generic edit modal state
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
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#22d3ee22,_transparent_55%),_radial-gradient(circle_at_bottom_left,_#4f46e522,_transparent_55%),_radial-gradient(circle_at_bottom,_#0f766e22,_transparent_55%)]"
      />

      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-400 text-sm font-bold text-slate-950 shadow-lg">
              AE
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">{companyInfo.name}</p>
              <p className="text-[11px] text-slate-400">Elevator engineering & solutions</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#references" className="hover:text-white">
              References
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          {/* Profil / Login */}
          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <span className="hidden text-[11px] text-emerald-300/90 sm:inline">
                Admin mode active
              </span>
            )}
            <button
              onClick={() => {
                if (isLoggedIn) handleLogout();
                else setShowLogin(true);
              }}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-50 shadow-sm transition hover:bg-cyan-400 hover:text-slate-950"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-slate-50">
                {isLoggedIn ? "AD" : "G"}
              </span>
              {isLoggedIn ? "Log out" : "Login / Profile"}
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 pb-20">
        {/* Hero */}
        <section className="grid gap-10 border-b border-white/5 pb-16 pt-10 md:grid-cols-[1.2fr_1fr] md:pt-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              24/7 maintenance & remote monitoring
            </div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {hero.eyebrow}
            </p>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]">
              {hero.title}
            </h1>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-300">
              {hero.subtitle}
            </p>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 px-6 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-400/40 transition hover:brightness-110">
                {hero.cta}
              </button>
              <a
                href="#projects"
                className="text-xs font-medium text-slate-200 underline underline-offset-4 hover:text-white"
              >
                {hero.secondaryCta}
              </a>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-4 text-center text-[11px] text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-lg font-semibold text-sky-300">15+</p>
                <p>years of engineering experience</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-lg font-semibold text-violet-300">250+</p>
                <p>completed elevator projects</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                <p className="text-lg font-semibold text-amber-300">7/24</p>
                <p>service & remote support</p>
              </div>
            </div>

            {isLoggedIn && (
              <button
                onClick={() => openEdit("hero")}
                className="mt-4 text-[11px] text-slate-300 underline underline-offset-2"
              >
                Edit hero content
              </button>
            )}
          </div>

          {/* Hero visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-72 w-full max-w-sm">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400 via-emerald-400 to-slate-900 opacity-80" />
              <div className="absolute inset-4 rounded-[1.5rem] border border-white/20 bg-slate-950/60 backdrop-blur">
                <div className="flex h-full flex-col justify-between p-4">
                  <div className="flex items-center justify-between text-[11px] text-slate-200">
                    <span>Machine room‑less</span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-200">
                      EN 81 compatible
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-200">
                    <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                      <span>Travel height</span>
                      <span className="font-semibold">18 floors</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                      <span>Cabin capacity</span>
                      <span className="font-semibold">1000 kg</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                      <span>Energy class</span>
                      <span className="font-semibold">A</span>
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Example indicative configuration. Final design is tailored for each project.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="mt-14 rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.8)]"
        >
          <div className="flex flex-col gap-3 border-b border-white/5 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Our Services
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                Product groups for elevator systems
              </h2>
              <p className="mt-1 max-w-xl text-xs text-slate-300">
                Except for special applications, you can review all main product groups from steel constructions to heavy-duty cabins in a single view.
              </p>
            </div>
            {isLoggedIn && (
              <p className="text-[11px] text-slate-400">
                You can manage categories and descriptions after logging in to the admin profile.
              </p>
            )}
          </div>

          {services.length > 0 && (
            <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.4fr]">
              {/* Kategori listesi */}
              <div className="space-y-2">
                {services.map((service, index) => {
                  const active = index === activeService;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(index)}
                      className={`w-full rounded-xl border px-3 py-2 text-left text-xs font-medium transition
                        ${active
                          ? "border-cyan-400/70 bg-cyan-400/15 text-cyan-100"
                          : "border-white/10 bg-slate-950/40 text-slate-200 hover:bg-slate-900"}
                      `}
                    >
                      {service.name}
                    </button>
                  );
                })}
              </div>

              {/* Ana kart + asansör animasyonu */}
              <div className="flex flex-col justify-between">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
                  <div className="grid gap-4 md:grid-cols-[1.4fr_0.9fr]">
                    {/* Büyük görsel alanı */}
                    <div className="flex flex-col">
                      <div className="relative mb-3 h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee44,_transparent_60%)]" />
                        <div className="absolute inset-0 flex items-center justify-center text-[11px] text-slate-200">
                          <span className="rounded-full bg-black/40 px-3 py-1">
                            {services[activeService]?.name} image placeholder
                          </span>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-slate-50">
                        {services[activeService]?.name}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {services[activeService]?.desc}
                      </p>
                    </div>

                    {/* Asansör animasyonu */}
                    <div className="flex flex-col items-center justify-center">
                      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-300">
                        Sistem akışı
                      </p>
                      <ElevatorAnimation />
                      <p className="mt-2 text-center text-[10px] text-slate-400">
                        The multi-floor elevator animation is a demo visual representing the travel movement of your system.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Thumbnail carousel */}
                <div className="mt-4">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Other product groups
                  </p>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {services.map((service, index) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(index)}
                        className={`min-w-[130px] flex-shrink-0 rounded-xl border text-left text-[11px] transition
                          ${index === activeService
                            ? "border-cyan-400/80 bg-cyan-400/15 text-cyan-50"
                            : "border-white/10 bg-slate-950/70 text-slate-200 hover:bg-slate-900"}
                        `}
                      >
                        <div className="h-16 w-full rounded-t-xl bg-gradient-to-br from-slate-800 to-slate-900" />
                        <div className="px-2 py-2">
                          <p className="line-clamp-2 font-medium">{service.name}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Projects
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                Selected reference projects
              </h2>
              <p className="mt-1 max-w-xl text-xs text-slate-300">
                A snapshot from our portfolio, ranging from residential complexes to hospitals
                and industrial facilities.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-4"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-50">{project.name}</p>
                  <p className="mt-0.5 text-[11px] font-medium text-emerald-300">
                    {project.type}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{project.desc}</p>
                </div>
                {isLoggedIn && (
                  <button
                    onClick={() => openEdit("project", index)}
                    className="mt-4 self-start text-[11px] text-cyan-300 underline underline-offset-2"
                  >
                    Edit project
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* References */}
        <section id="references" className="mt-16 rounded-3xl border border-white/5 bg-slate-900/70 p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                References
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                What our partners say
              </h2>
              <p className="mt-1 max-w-xl text-xs text-slate-300">
                Long‑term cooperation with construction companies, site managements and
                industrial facilities.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {references.map((ref, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-4"
              >
                <p className="mb-3 text-xs leading-relaxed text-slate-200">“{ref.quote}”</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-50">{ref.company}</p>
                    <p className="text-[11px] text-slate-400">
                      {ref.name} • {ref.title}
                    </p>
                  </div>
                  {isLoggedIn && (
                    <button
                      onClick={() => openEdit("reference", index)}
                      className="text-[11px] text-cyan-300 underline underline-offset-2"
                    >
                      Edit reference
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company / Contact */}
        <section
          id="contact"
          className="mt-16 grid gap-8 rounded-3xl border border-white/5 bg-slate-900/70 p-6 md:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">About us</h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">{companyInfo.about}</p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-200">
              <li>
                <span className="font-medium text-slate-50">Phone: </span>
                {companyInfo.phone}
              </li>
              <li>
                <span className="font-medium text-slate-50">E‑mail: </span>
                {companyInfo.email}
              </li>
              <li>
                <span className="font-medium text-slate-50">Address: </span>
                {companyInfo.address}
              </li>
            </ul>
            {isLoggedIn && (
              <button
                onClick={() => openEdit("company")}
                className="mt-4 text-[11px] text-cyan-300 underline underline-offset-2"
              >
                Edit company info
              </button>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <p className="mb-2 text-sm font-semibold text-slate-50">Quick contact</p>
            <p className="mb-4 text-xs text-slate-300">
              Share a short summary of your project and our engineering team will get back to
              you as soon as possible.
            </p>
            <form className="space-y-3 text-xs">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
              <textarea
                rows={3}
                placeholder="Project type, building details, expected timeline"
                className="w-full resize-none rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
              <button
                type="button"
                className="w-full rounded-xl bg-cyan-400 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                Send request
              </button>
            </form>
          </div>
        </section>

        <footer className="mt-14 border-t border-white/5 pt-4 text-[11px] text-slate-400 sm:flex sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </span>
          <span className="mt-1 block sm:mt-0">
            Designed for safe, efficient and aesthetic vertical transportation.
          </span>
        </footer>
      </main>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-950 p-5 shadow-xl">
            <h3 className="mb-2 text-sm font-semibold text-slate-50">Admin login</h3>
            <p className="mb-4 text-[11px] text-slate-400">
              This login is for demo purposes only. In production you should connect this
              area to your own authentication system.
            </p>
            <form onSubmit={handleLogin} className="space-y-3 text-xs">
              <input
                type="text"
                placeholder="Username"
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-400 py-2 text-xs font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                Login
              </button>
            </form>
            <button
              onClick={() => setShowLogin(false)}
              className="mt-3 w-full text-[11px] text-slate-400 hover:text-slate-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Generic Edit Modal */}
      {editModal.open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
          <div className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-slate-950 p-5 shadow-xl">
            <h3 className="mb-3 text-sm font-semibold text-slate-50">Edit content</h3>
            <div className="space-y-3 text-xs">
              {Object.keys(tempValue).map((key) => (
                <div key={key}>
                  <label className="mb-1 block text-[11px] text-slate-400">{key}</label>
                  {key === "desc" || key === "quote" || key === "about" ? (
                    <textarea
                      rows={3}
                      value={tempValue[key]}
                      onChange={(e) =>
                        setTempValue((prev) => ({ ...prev, [key]: e.target.value }))
                      }
                      className="w-full resize-none rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none focus:border-cyan-400"
                    />
                  ) : (
                    <input
                      type="text"
                      value={tempValue[key]}
                      onChange={(e) =>
                        setTempValue((prev) => ({ ...prev, [key]: e.target.value }))
                      }
                      className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none focus:border-cyan-400"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-2 text-xs">
              <button
                onClick={() => setEditModal({ open: false, type: null, index: null })}
                className="rounded-xl border border-white/10 px-3 py-1.5 text-slate-300 hover:bg-slate-900"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                className="rounded-xl bg-cyan-400 px-3 py-1.5 font-medium text-slate-950 hover:bg-cyan-300"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
