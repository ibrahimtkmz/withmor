"use client";

import { useState } from "react";

{/* Sağ taraf - ürün görseli ve açıklama */}
<div className="flex items-center justify-center">
  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-inner">
    <div className="relative flex justify-center">
      <div className="relative h-48 w-full max-w-md">
        <img
          src="/images/withmor-lift-components.png" // görseli public/images içine bu isimle koy
          alt="Asansör kabini, şase ve makine grubu"
          className="h-full w-full object-contain rounded-2xl"
        />
      </div>
      <p className="absolute right-4 top-3 text-[10px] font-bold text-slate-600">
        Withmor Teknika Lift
      </p>
    </div>
    <p className="mt-3 mx-auto max-w-xs text-center text-[11px] text-slate-600">
      Yük asansörleri, yük platformları, hidrolik asansörler, villa asansörleri ve
      sınırsız özel uygulamalar ile hizmetinizdeyiz.
    </p>
  </div>
</div>



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
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-slate-50">
                {isLoggedIn ? "AD" : "G"}
              </span>
              {isLoggedIn ? "Çıkış yap" : "Giriş / Profil"}
            </button>
          </div>
        </div>
      </header>

      {/* HERO - Tam genişlik beyaz blok */}
      <section className="border-b border-slate-200 bg-white py-14 text-slate-900 w-full px-4 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {/* Sol taraf */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              7/24 bakım ve uzaktan izleme
            </div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700">
              {hero.eyebrow}
            </p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem]">
              {hero.title}
            </h1>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-600">
              {hero.subtitle}
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-cyan-600 px-6 py-2 text-sm font-medium text-white shadow-md transition hover:bg-cyan-500">
                {hero.cta}
              </button>
              <a
                href="#projects"
                className="text-sm font-medium text-cyan-700 underline underline-offset-4 hover:text-cyan-900"
              >
                {hero.secondaryCta}
              </a>
            </div>
            <div className="grid max-w-xl grid-cols-3 gap-4 text-center text-[11px]">
              <div className="rounded-2xl bg-slate-100 px-3 py-3">
                <p className="text-lg font-bold text-sky-700">15+</p>
                <p className="mt-1 text-slate-600">yılı aşkın mühendislik deneyimi</p>
              </div>
              <div className="rounded-2xl bg-slate-100 px-3 py-3">
                <p className="text-lg font-bold text-violet-700">250+</p>
                <p className="mt-1 text-slate-600">tamamlanmış proje</p>
              </div>
              <div className="rounded-2xl bg-slate-100 px-3 py-3">
                <p className="text-lg font-bold text-amber-700">7/24</p>
                <p className="mt-1 text-slate-600">servis ve destek</p>
              </div>
            </div>
            {isLoggedIn && (
              <button
                onClick={() => openEdit("hero")}
                className="mt-4 text-[11px] text-cyan-700 underline"
              >
                Hero içeriğini düzenle
              </button>
            )}
          </div>

          {/* Sağ taraf - animasyon ve açıklama */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-inner">
                <div className="relative flex justify-center">
                  <ElevatorAnimation />
                  <p className="absolute right-0 top-0 -translate-x-2 translate-y-4 text-[10px] font-bold text-slate-600 whitespace-nowrap">
                    Withmor Teknika Lift
                  </p>
                </div>
                <p className="mt-3 max-w-xs text-center text-[11px] text-slate-600">
                  Yük asansörleri, Yük platformları, Hidrolik asansörler, Villa asansörleri ve
                  sınırsız özel uygulamalar ile hizmetinizdesiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANA İÇERİK */}
      <main className="mx-auto max-w-6xl px-4 pb-20">
        {/* Hizmetler */}
        <section
          id="services"
          className="mt-14 rounded-3xl border border-cyan-400/25 bg-slate-900/70 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.8)] backdrop-blur-sm"
        >
          <div className="flex flex-col gap-3 border-b border-white/5 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Hizmetlerimiz
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                Asansör sistemleri ürün grupları
              </h2>
              <p className="mt-1 max-w-xl text-xs text-slate-300">
                Özel uygulamalar hariç tüm ana ürün gruplarını tek ekranda inceleyebilirsiniz.
              </p>
            </div>
            {isLoggedIn && (
              <p className="text-[11px] text-slate-400">
                Kategori isimlerini ve açıklamaları admin profiliyle giriş yaptıktan sonra
                yönetebilirsiniz.
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
                        ${
                          active
                            ? "border-cyan-400/70 bg-cyan-400/15 text-cyan-100"
                            : "border-white/10 bg-slate-950/40 text-slate-200 hover:bg-slate-900"
                        }
                      `}
                    >
                      {service.name}
                    </button>
                  );
                })}
              </div>

              {/* Ana kart: görsel placeholder + açıklama */}
              <div className="flex flex-col justify-between">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
                  <div className="grid gap-4">
                    <div className="flex flex-col">
                      <div className="relative mb-3 h-40 w-full overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_top,_#22d3ee44,_transparent_60%)] text-[11px] text-slate-200">
                          <span className="rounded-full bg-black/40 px-3 py-1">
                            Görsel eklenecek
                          </span>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-slate-50">
                        {services[activeService]?.name}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {services[activeService]?.desc}
                      </p>
                      {isLoggedIn && (
                        <button
                          onClick={() => openEdit("service", activeService)}
                          className="mt-2 self-start text-[11px] text-cyan-300 underline underline-offset-2"
                        >
                          Bu hizmeti düzenle
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Thumbnail carousel */}
                <div className="mt-4">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Diğer ürün grupları
                  </p>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {services.map((service, index) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(index)}
                        className={`min-w-[130px] flex-shrink-0 rounded-xl border text-left text-[11px] transition
                          ${
                            index === activeService
                              ? "border-cyan-400/80 bg-cyan-400/15 text-cyan-50"
                              : "border-white/10 bg-slate-950/70 text-slate-200 hover:bg-slate-900"
                          }
                        `}
                      >
                        <div className="flex h-16 w-full items-center justify-center rounded-t-xl bg-gradient-to-br from-slate-800 to-slate-900 text-[10px] text-slate-300">
                          Görsel
                        </div>
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

        {/* Projeler */}
        <section
          id="projects"
          className="mt-16 rounded-3xl border border-sky-500/25 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/70 p-6"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Projeler
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                Seçilmiş referans projeler
              </h2>
              <p className="mt-1 max-w-xl text-xs text-slate-300">
                Portföyümüzden konut siteleri, hastaneler ve sanayi tesislerine ait örnek
                uygulamalardan kısa bir seçki.
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
                    Projeyi düzenle
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Referanslar */}
        <section
          id="references"
          className="mt-16 rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/70 p-6"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Referanslar
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                İş ortaklarımız ne diyor
              </h2>
              <p className="mt-1 max-w-xl text-xs text-slate-300">
                İnşaat firmaları, site yönetimleri ve sanayi kuruluşlarıyla uzun süreli iş
                birliklerinden bazı yorumlar.
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
                      Referansı düzenle
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hakkımızda / İletişim */}
        <section
          id="contact"
          className="mt-16 grid gap-8 rounded-3xl border border-violet-500/25 bg-white p-6 text-slate-900 md:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Hakkımızda</h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">{companyInfo.about}</p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
              <li>
                <span className="font-medium text-slate-900">Telefon: </span>
                {companyInfo.phone}
              </li>
              <li>
                <span className="font-medium text-slate-900">E‑posta: </span>
                {companyInfo.email}
              </li>
              <li>
                <span className="font-medium text-slate-900">Adres: </span>
                {companyInfo.address}
              </li>
            </ul>

            {/* Sosyal Medya - Hakkımızda içinde */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-700">
              <a
                href="https://www.facebook.com/TEKNIKALIFT"
                target="_blank"
                className="rounded-full bg-[#1877F2] px-3 py-1.5 text-white transition hover:brightness-110"
              >
                Facebook Page
              </a>
              <a
                href="https://wa.me/905302805526"
                target="_blank"
                className="rounded-full bg-[#25D366] px-3 py-1.5 text-white transition hover:brightness-110"
              >
                WhatsApp Contact
              </a>
              <a
                href="https://www.instagram.com/withmorlift/"
                target="_blank"
                className="rounded-full px-3 py-1.5 text-white transition hover:brightness-110"
                style={{
                  background:
                    "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
                }}
              >
                Instagram Profile
              </a>
            </div>

            {isLoggedIn && (
              <button
                onClick={() => openEdit("company")}
                className="mt-4 text-[11px] text-cyan-500 underline underline-offset-2"
              >
                Firma bilgisini düzenle
              </button>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-950/85 p-4 text-slate-50">
            <p className="mb-2 text-sm font-semibold text-slate-50">Hızlı iletişim</p>
            <p className="mb-4 text-xs text-slate-300">
              Projeniz hakkında kısa bir bilgi paylaşın, mühendislik ekibimiz en kısa sürede sizinle
              iletişime geçsin.
            </p>
            <form className="space-y-3 text-xs">
              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
              <input
                type="tel"
                placeholder="Telefon Numarası"
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
              <textarea
                rows={3}
                placeholder="Proje türü, bina detayları, beklenen zamanlama"
                className="w-full resize-none rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
              <button
                type="button"
                className="w-full rounded-xl bg-cyan-400 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                Gönder
              </button>
            </form>
          </div>
        </section>

        <footer className="mt-14 border-t border-white/5 pt-4 text-[11px] text-slate-400 sm:flex sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {companyInfo.name}. Tüm hakları saklıdır.
          </span>
          <span className="mt-1 block sm:mt-0">
            Güvenli, verimli ve estetik dikey ulaşım için tasarlanmıştır.
          </span>
        </footer>

        {/* Alt kısım sosyal medya butonları */}
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-300">
          <a
            href="https://www.facebook.com/TEKNIKALIFT"
            target="_blank"
            className="rounded-full bg-white/10 px-3 py-1.5 transition hover:bg-white/20"
          >
            Facebook Page
          </a>
          <a
            href="https://wa.me/905302805526"
            target="_blank"
            className="rounded-full bg-white/10 px-3 py-1.5 transition hover:bg-white/20"
          >
            WhatsApp Contact
          </a>
          <a
            href="https://www.instagram.com/withmorlift/"
            target="_blank"
            className="rounded-full bg-white/10 px-3 py-1.5 transition hover:bg-white/20"
          >
            Instagram Profile
          </a>
        </div>
      </main>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-950 p-5 shadow-xl">
            <h3 className="mb-2 text-sm font-semibold text-slate-50">Yönetici Girişi</h3>
            <p className="mb-4 text-[11px] text-slate-400">
              Bu giriş yalnızca demo amaçlıdır. Gerçek projede bu alanı kendi kimlik doğrulama
              sisteminizle entegre etmeniz gerekir.
            </p>
            <form onSubmit={handleLogin} className="space-y-3 text-xs">
              <input
                type="text"
                placeholder="Kullanıcı adı"
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
              <input
                type="password"
                placeholder="Şifre"
                className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-xs text-slate-50 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-400 py-2 text-xs font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                Giriş Yap
              </button>
            </form>
            <button
              onClick={() => setShowLogin(false)}
              className="mt-3 w-full text-[11px] text-slate-400 hover:text-slate-200"
            >
              İptal
            </button>
          </div>
        </div>
      )}

      {/* Genel Düzenleme Modalı */}
      {editModal.open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
          <div className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-slate-950 p-5 shadow-xl">
            <h3 className="mb-3 text-sm font-semibold text-slate-50">İçeriği Düzenle</h3>
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
                Vazgeç
              </button>
              <button
                onClick={saveEdit}
                className="rounded-xl bg-cyan-400 px-3 py-1.5 font-medium text-slate-950 hover:bg-cyan-300"
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
