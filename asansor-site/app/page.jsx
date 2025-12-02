"use client";

import { useState } from "react";

// Simple, single-file React page for an elevator (asansör) company
// TailwindCSS compatible. You can drop this into a Next.js `app/page.tsx` or `pages/index.tsx`.

export default function AsansorSite() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Editable content state
  const [hero, setHero] = useState({
    title: "Güvenli ve Modern Asansör Çözümleri",
    subtitle:
      "Yeni montaj, bakım ve modernizasyon hizmetlerimizle binalarınıza değer katıyoruz.",
    cta: "Teklif Al",
  });

  const [services, setServices] = useState([
    {
      title: "Yeni Asansör Montajı",
      desc: "Konut, işyeri ve alışveriş merkezleri için projeye özel asansör çözümleri.",
    },
    {
      title: "Bakım ve Onarım",
      desc: "Periyodik bakım, arıza tespiti ve 7/24 hızlı müdahale hizmeti.",
    },
    {
      title: "Modernizasyon",
      desc: "Eski asansörlerinizi yönetmeliklere uygun, konforlu sistemlere dönüştürüyoruz.",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      name: "Beyaz Park Rezidans",
      type: "Panoramik Yolcu Asansörü",
      desc: "3 blok, 9 duraklı tam otomatik asansör sistemi kurulumu.",
    },
    {
      name: "Kule İş Merkezi",
      type: "Yük Asansörü",
      desc: "Fabrika ve depo alanları için ağır yük taşıma sistemleri.",
    },
  ]);

  const [references, setReferences] = useState([
    {
      company: "ABC İnşaat",
      quote:
        "Teslim süresi ve teknik destekten çok memnun kaldık. Tüm projelerimizde birlikte çalışıyoruz.",
      name: "Murat Yılmaz",
      title: "Proje Müdürü",
    },
    {
      company: "Mavi Rezidans Sitesi",
      quote:
        "Bakım ekibi her aramamızda hızlı dönüş yapıyor. Sakinlerimiz çok daha güvende hissediyor.",
      name: "Selin Karaca",
      title: "Site Yöneticisi",
    },
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    name: "Örnek Asansör Sistemleri",
    about:
      "Yılların tecrübesiyle, ulusal standartlara uygun, güvenli ve konforlu asansör çözümleri sunuyoruz.",
    phone: "+90 532 000 00 00",
    email: "info@ornekasansor.com",
    address: "İstanbul / Türkiye",
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div>
              <p className="font-semibold tracking-tight">{companyInfo.name}</p>
              <p className="text-xs text-slate-500">Asansör Sistemleri</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#hizmetler" className="hover:text-slate-900 text-slate-600">
              Hizmetler
            </a>
            <a href="#projeler" className="hover:text-slate-900 text-slate-600">
              Yapılan İşler
            </a>
            <a href="#referanslar" className="hover:text-slate-900 text-slate-600">
              Referanslar
            </a>
            <a href="#iletisim" className="hover:text-slate-900 text-slate-600">
              İletişim
            </a>
          </nav>

          {/* Profil / Login */}
          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <span className="hidden sm:inline text-xs text-slate-500">
                Yönetici olarak giriş yaptınız
              </span>
            )}
            <button
              onClick={() => {
                if (isLoggedIn) handleLogout();
                else setShowLogin(true);
              }}
              className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs sm:text-sm hover:bg-slate-900 hover:text-white transition"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold">
                {isLoggedIn ? "AD" : "G"}
              </span>
              {isLoggedIn ? "Çıkış Yap" : "Giriş / Profil"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <section className="grid md:grid-cols-2 gap-10 items-center pt-10 md:pt-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              7/24 Asansör Bakım ve Servis
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              {hero.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-2xl bg-slate-900 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:shadow-md">
                {hero.cta}
              </button>
              <p className="text-xs sm:text-sm text-slate-500">
                Ücretsiz keşif ve fiyatlandırma için hemen bizimle iletişime geçin.
              </p>
            </div>

            {isLoggedIn && (
              <button
                onClick={() => openEdit("hero")}
                className="mt-4 text-xs text-slate-500 underline underline-offset-2"
              >
                Bu alanı düzenle
              </button>
            )}
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl">
              <p className="text-sm font-medium mb-4">Neden Biz?</p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-100">
                <li>• TSE ve EN 81 standartlarına uygun projelendirme</li>
                <li>• Deneyimli montaj ve bakım ekibi</li>
                <li>• Yedek parça ve servis sürekliliği garantisi</li>
                <li>• Konut, işyeri, hastane ve AVM'lere özel çözümler</li>
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs border-t border-slate-700 pt-4">
                <div>
                  <p className="text-lg font-semibold">15+</p>
                  <p className="text-slate-300">Yıllık Deneyim</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">250+</p>
                  <p className="text-slate-300">Tamamlanan Proje</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">7/24</p>
                  <p className="text-slate-300">Servis Hizmeti</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="hizmetler" className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                Hizmetlerimiz
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Projenize özel asansör çözümlerimizi keşfedin.
              </p>
            </div>
            {isLoggedIn && (
              <p className="text-[11px] text-slate-400">Her kartın altından düzenleyebilirsiniz.</p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <p className="text-sm font-semibold mb-2">{service.title}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                {isLoggedIn && (
                  <button
                    onClick={() => openEdit("service", index)}
                    className="mt-4 text-[11px] text-slate-500 underline underline-offset-2 self-start"
                  >
                    Kartı düzenle
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projeler" className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                Seçili Projelerimiz
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tamamlanan bazı asansör projelerimizi inceleyin.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <p className="text-sm font-semibold">{project.name}</p>
                  <p className="text-xs text-emerald-700 mt-0.5">{project.type}</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                {isLoggedIn && (
                  <button
                    onClick={() => openEdit("project", index)}
                    className="text-[11px] text-slate-500 underline underline-offset-2 self-start sm:self-end"
                  >
                    Projeyi düzenle
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* References */}
        <section id="referanslar" className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                Referanslar
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Çalıştığımız firma ve sitelerden bazı yorumlar.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {references.map((ref, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-4 sm:p-5 shadow-sm border border-slate-100 flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  “{ref.quote}”
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{ref.company}</p>
                    <p className="text-[11px] text-slate-500">
                      {ref.name} • {ref.title}
                    </p>
                  </div>
                  {isLoggedIn && (
                    <button
                      onClick={() => openEdit("reference", index)}
                      className="text-[11px] text-slate-500 underline underline-offset-2"
                    >
                      Referansı düzenle
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company / Contact */}
        <section id="iletisim" className="mt-16 grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
          <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-slate-100">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
              Hakkımızda
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              {companyInfo.about}
            </p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
              <li>
                <span className="font-medium">Telefon: </span>
                {companyInfo.phone}
              </li>
              <li>
                <span className="font-medium">E-posta: </span>
                {companyInfo.email}
              </li>
              <li>
                <span className="font-medium">Adres: </span>
                {companyInfo.address}
              </li>
            </ul>
            {isLoggedIn && (
              <button
                onClick={() => openEdit("company")}
                className="mt-4 text-[11px] text-slate-500 underline underline-offset-2"
              >
                Firma bilgilerini düzenle
              </button>
            )}
          </div>

          <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 shadow-sm">
            <p className="text-sm font-semibold mb-2">Hızlı İletişim</p>
            <p className="text-xs sm:text-sm text-slate-200 mb-4">
              Projenizi birkaç cümleyle anlatın, en kısa sürede sizi arayalım.
            </p>
            <form className="space-y-3 text-xs sm:text-sm">
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/40 px-3 py-2 text-xs sm:text-sm outline-none focus:border-emerald-400"
              />
              <input
                type="tel"
                placeholder="Telefon Numaranız"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/40 px-3 py-2 text-xs sm:text-sm outline-none focus:border-emerald-400"
              />
              <textarea
                rows={3}
                placeholder="Konut / işyeri / proje tipiniz hakkında kısaca bilgi verin"
                className="w-full rounded-xl border border-slate-700 bg-slate-900/40 px-3 py-2 text-xs sm:text-sm outline-none focus:border-emerald-400 resize-none"
              />
              <button
                type="button"
                className="w-full rounded-xl bg-emerald-400 text-slate-900 font-medium py-2 text-sm hover:bg-emerald-300"
              >
                Talebimi Gönder
              </button>
            </form>
          </div>
        </section>

        <footer className="mt-16 pb-6 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-slate-200 pt-4">
          <span>© {new Date().getFullYear()} {companyInfo.name}. Tüm hakları saklıdır.</span>
          <span>Asansör yönetmeliklerine uygun projelendirme ve montaj.</span>
        </footer>
      </main>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl">
            <h3 className="text-sm font-semibold mb-2">Yönetici Girişi</h3>
            <p className="text-xs text-slate-500 mb-4">
              Demo amaçlıdır. Gerçek projede burayı kendi kullanıcı sisteminizle
              entegre edin.
            </p>
            <form onSubmit={handleLogin} className="space-y-3 text-xs">
              <input
                type="text"
                placeholder="Kullanıcı Adı"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs outline-none focus:border-slate-900"
              />
              <input
                type="password"
                placeholder="Şifre"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs outline-none focus:border-slate-900"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 text-white font-medium py-2 text-xs hover:bg-slate-800"
              >
                Giriş Yap
              </button>
            </form>
            <button
              onClick={() => setShowLogin(false)}
              className="mt-3 w-full text-[11px] text-slate-500 hover:text-slate-700"
            >
              Vazgeç
            </button>
          </div>
        </div>
      )}

      {/* Generic Edit Modal */}
      {editModal.open && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl max-h-[80vh] overflow-y-auto">
            <h3 className="text-sm font-semibold mb-3">İçerik Düzenleme</h3>
            <div className="space-y-3 text-xs">
              {Object.keys(tempValue).map((key) => (
                <div key={key}>
                  <label className="block text-[11px] text-slate-500 mb-1">
                    {key}
                  </label>
                  {key === "desc" || key === "quote" || key === "about" ? (
                    <textarea
                      rows={3}
                      value={tempValue[key]}
                      onChange={(e) =>
                        setTempValue((prev) => ({ ...prev, [key]: e.target.value }))
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs outline-none focus:border-slate-900 resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={tempValue[key]}
                      onChange={(e) =>
                        setTempValue((prev) => ({ ...prev, [key]: e.target.value }))
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs outline-none focus:border-slate-900"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2 mt-4 text-xs">
              <button
                onClick={() => setEditModal({ open: false, type: null, index: null })}
                className="rounded-xl border border-slate-200 px-3 py-1.5 text-slate-600"
              >
                İptal
              </button>
              <button
                onClick={saveEdit}
                className="rounded-xl bg-slate-900 text-white px-3 py-1.5"
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
