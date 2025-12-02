"use client";

import { useState, useEffect } from "react";

// --- ORTAK VERİ VE STATE YÖNETİMİ ---
// Bu bileşen, tüm temaların ortak verisini tutar ve seçilen temayı render eder.

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("dark"); // 'dark', 'corporate', 'premium', 'hightech'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  
  // -- Ortak Modallar İçin State --
  const [editModal, setEditModal] = useState({ open: false, type: null, index: null });
  const [tempValue, setTempValue] = useState({});
  const [quoteForm, setQuoteForm] = useState({ name: "", phone: "", projectType: "Konut Asansörü", floorCount: "", location: "", note: "" });
  const [fastContactForm, setFastContactForm] = useState({ name: "", phone: "", message: "" });

  // -- İçerik Verileri (Tüm temalar bu veriyi kullanır) --
  const [companyInfo, setCompanyInfo] = useState({
    name: "Withmor Teknika Lift",
    subname: "MÜHENDİSLİK",
    about: "Withmor Teknika Lift, ulusal ve uluslararası standartlara uygun asansör sistemleri tasarlar, üretir ve anahtar teslim kurulum gerçekleştirir. Güvenlik, dayanıklılık ve konforu bir arada sunan çözümler geliştirir.",
    phone: "+90 530 280 55 26",
    email: "info@withmor.com",
    address: "Kervanci ticaret merkezi, Velimeşe OSB, 59850 Çorlu/Tekirdağ",
  });

  const [hero, setHero] = useState({
    eyebrow: "Premium Asansör Çözümleri",
    title: "Güvenli ve estetik dikey ulaşım mühendisliği",
    subtitle: "Konut binalarından iş merkezlerine kadar özel tasarım, montaj ve bakım hizmetleri sunuyoruz.",
    cta: "Proje teklifi al",
    secondaryCta: "Referansları gör",
  });

  const [services, setServices] = useState([
    { id: "1", name: "Çelik Konstrüksiyon", desc: "Makine dairesi, taşıyıcı konstrüksiyonlar ve çelik yapılar için projeye özel imalat.", image: "/celik-konstruksiyonlar.webp" },
    { id: "2", name: "Hidrolik Sistemler", desc: "Villa, yük ve makine dairesiz çözümler için sessiz ve güvenli hidrolik asansör sistemleri.", image: "/hidrolik-sistemler.jpg" },
    { id: "3", name: "Kabinler", desc: "Standart ve panoramik kabin tasarımları, zemin ve aydınlatma seçenekleri ile zenginleştirilmiş dekorasyon.", image: "/kabinler.webp" },
    { id: "4", name: "Yük Platformları", desc: "Sanayi tesisleri, depolar ve otoparklar için ağır yük taşıma çözümleri ve makaslı platformlar.", image: "/yuk-asansorleri-platformlar.jpg" },
    { id: "5", name: "Makine Şasesi MRL", desc: "MRL ve geleneksel makine daireli asansörler için titreşimi azaltan, uzun ömürlü makine şaseleri.", image: "/makine-sasesi-mrl-mr.png" },
    { id: "6", name: "Yük Kabinleri", desc: "Ağır ve hassas yükler için darbe dayanımlı, kaymaz zeminli ve yüksek tavanlı yük kabinleri.", image: "/yuk-kabinleri.jpg" },
  ]);

  const [projects, setProjects] = useState([
    { name: "Skyline Residence Tower", type: "Panoramik", desc: "4 cam panoramik kabin, hedef seçimli kontrol sistemi." },
    { name: "Techno Industrial Plant", type: "Ağır Hizmet", desc: "Gün boyu yoğun kullanıma uygun, 3.500 kg kapasiteli yük asansörleri." },
    { name: "City Hospital Complex", type: "Sedye Asansörü", desc: "Hastane standartlarında hijyen, kesintisiz çalışma ve güvenli taşıma." },
  ]);

  const [references, setReferences] = useState([
    { company: "ABC İnşaat Grubu", quote: "Projelendirme ve montaj süreçleri profesyonelce yönetildi.", name: "Murat Yılmaz", title: "Proje Yöneticisi" },
    { company: "Blue Residence", quote: "Modernizasyon sonrası güvenlik ve konfor ciddi oranda arttı.", name: "Selin Karaca", title: "Site Müdürü" },
  ]);

  // -- Ortak Fonksiyonlar --
  const handleLogin = (e) => {
    e.preventDefault();
    if (e.target.username.value === "admin" && e.target.password.value === "password") {
      setIsLoggedIn(true); setShowLogin(false);
    } else { alert("Hatalı giriş!"); }
  };

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

  // Props paketi (Temalara aktarılacak)
  const sharedProps = {
    currentTheme, setCurrentTheme, isLoggedIn, setIsLoggedIn, showLogin, setShowLogin,
    showQuoteModal, setShowQuoteModal, editModal, setEditModal, tempValue, setTempValue,
    quoteForm, setQuoteForm, fastContactForm, setFastContactForm,
    companyInfo, setCompanyInfo, hero, setHero, services, setServices, projects, setProjects, references, setReferences,
    handleLogin, openEdit, openAdd, saveEdit, handleDelete
  };

  // Tema Seçici
  return (
    <>
      {currentTheme === "dark" && <ThemeDark {...sharedProps} />}
      {currentTheme === "corporate" && <ThemeCorporate {...sharedProps} />}
      {currentTheme === "premium" && <ThemePremium {...sharedProps} />}
      {currentTheme === "hightech" && <ThemeHighTech {...sharedProps} />}
      
      {/* Ortak Modallar (Her tema kendi içinde de render edebilir ama burada global tutmak daha temiz) */}
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-white p-8 w-full max-w-sm rounded-xl shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-slate-900">Yönetici Girişi</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="text" name="username" placeholder="Kullanıcı: admin" className="w-full border p-2 rounded text-slate-900" />
              <input type="password" name="password" placeholder="Şifre: password" className="w-full border p-2 rounded text-slate-900" />
              <button className="w-full bg-slate-900 text-white p-2 rounded font-bold">Giriş</button>
            </form>
            <button onClick={() => setShowLogin(false)} className="w-full mt-2 text-sm text-slate-500">İptal</button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModal.open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-white p-6 w-full max-w-lg rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-4 text-slate-900">{editModal.index === null ? "Yeni Ekle" : "Düzenle"}</h3>
            <div className="space-y-3">
               {Object.keys(tempValue).map((key) => (
                  <div key={key}>
                     <label className="text-xs font-bold text-slate-500 uppercase block mb-1">{key}</label>
                     {key === "desc" || key === "quote" || key === "about" ? (
                        <textarea rows={3} value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full border p-2 rounded text-sm text-slate-900" />
                     ) : (
                        <input type="text" value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full border p-2 rounded text-sm text-slate-900" />
                     )}
                  </div>
               ))}
            </div>
            <div className="mt-6 flex justify-between">
               {editModal.index !== null && ["service", "project", "reference"].includes(editModal.type) ? (
                  <button onClick={handleDelete} className="text-red-500 text-sm font-bold">Sil</button>
               ) : <div/>}
               <div className="flex gap-2">
                  <button onClick={() => setEditModal({open: false, type: null, index: null})} className="text-slate-500 text-sm font-bold px-4">Vazgeç</button>
                  <button onClick={saveEdit} className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold">Kaydet</button>
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* TEMA 1: KOYU (DARK) -> page.jsx              */
/* -------------------------------------------------------------------------- */
function ThemeDark(props) {
  const { hero, services, projects, references, companyInfo, isLoggedIn, setIsLoggedIn, setCurrentTheme, setShowLogin, openEdit, openAdd } = props;
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-900 selection:text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_#22d3ee11,_transparent_40%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500 text-slate-950 font-bold">WL</div>
            <div className="leading-tight">
              <p className="font-semibold text-sm">{companyInfo.name}</p>
              <p className="text-[10px] text-slate-400">Dark Edition</p>
            </div>
          </div>
          
          {/* THEME SWITCHER - DOSYA YOLU GÖRÜNÜMÜ */}
          <div className="hidden md:flex items-center gap-4">
             <div className="flex items-center bg-black/30 rounded border border-white/10 px-2">
                <span className="text-xs text-slate-500 mr-2">Dosya:</span>
                <select 
                  value={props.currentTheme} 
                  onChange={(e) => setCurrentTheme(e.target.value)}
                  className="bg-transparent text-xs text-cyan-400 font-mono py-1 outline-none cursor-pointer hover:text-cyan-300"
                >
                    <option value="dark">page.jsx</option>
                    <option value="corporate">page-1.jsx</option>
                    <option value="premium">page-2.jsx</option>
                    <option value="hightech">page-3.jsx</option>
                </select>
             </div>
             
             <nav className="flex gap-4 text-xs font-medium text-slate-300 ml-4">
                <a href="#services" className="hover:text-cyan-400">Hizmetler</a>
                <a href="#projects" className="hover:text-cyan-400">Projeler</a>
                <a href="#contact" className="hover:text-cyan-400">İletişim</a>
             </nav>
          </div>

          <button onClick={() => isLoggedIn ? props.handleLogin({preventDefault:()=>{}}) && setIsLoggedIn(false) : setShowLogin(true)} className="text-xs bg-white/10 px-3 py-1.5 rounded-full hover:bg-cyan-500 hover:text-slate-950 transition">
             {isLoggedIn ? "Çıkış" : "Giriş"}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 border-b border-white/5 relative overflow-hidden">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
               <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">{hero.eyebrow}</p>
               <h1 className="text-4xl md:text-5xl font-bold mb-6">{hero.title}</h1>
               <p className="text-slate-400 mb-8 max-w-lg">{hero.subtitle}</p>
               <button className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-full font-bold text-sm hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  {hero.cta}
               </button>
               {isLoggedIn && <button onClick={() => openEdit("hero")} className="ml-4 text-xs text-slate-500 underline">Düzenle</button>}
            </div>
            <div className="flex justify-center relative">
               <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full"></div>
               <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                  {/* Basit Asansör Animasyonu (Koyu Tema) */}
                  <div className="w-24 h-48 border-x border-slate-700 relative overflow-hidden mx-auto bg-slate-950">
                     <div className="absolute inset-x-2 h-8 bg-cyan-500/80 rounded shadow-[0_0_15px_cyan] top-1/2 -translate-y-1/2 animate-bounce flex items-center justify-center text-[8px] text-slate-950 font-bold">KABİN</div>
                     {[1,2,3,4,5].map(i => <div key={i} className="absolute w-full h-px bg-slate-800" style={{top: `${i*20}%`}}></div>)}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Hizmetler */}
      <section id="services" className="py-20 px-4 max-w-6xl mx-auto">
         <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl font-bold">Hizmetlerimiz</h2>
            {isLoggedIn && <button onClick={() => openAdd("service")} className="text-xs bg-slate-800 px-3 py-1 rounded">+ Ekle</button>}
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
               <div key={index} onClick={() => setActiveService(index)} className={`cursor-pointer p-4 rounded-2xl border transition-all ${activeService === index ? "border-cyan-500/50 bg-cyan-500/10" : "border-white/5 bg-slate-900/50 hover:bg-slate-900"}`}>
                  <div className="h-40 bg-slate-950 rounded-xl mb-4 overflow-hidden relative">
                     <img src={service.image} alt="" className="w-full h-full object-cover opacity-80" 
                          onError={(e) => {e.target.src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800"; e.target.onerror=null;}} />
                  </div>
                  <h3 className="font-bold text-slate-200">{service.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">{service.desc}</p>
                  {isLoggedIn && <button onClick={(e) => {e.stopPropagation(); openEdit("service", index)}} className="mt-2 text-[10px] text-cyan-500">Düzenle</button>}
               </div>
            ))}
         </div>
      </section>

      {/* Projeler & Referanslar (Basitleştirilmiş) */}
      <section className="py-20 bg-slate-900/50 border-y border-white/5">
         <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div>
               <div className="flex justify-between mb-6">
                  <h2 className="text-xl font-bold text-cyan-400">Projeler</h2>
                  {isLoggedIn && <button onClick={() => openAdd("project")} className="text-xs">+ Ekle</button>}
               </div>
               <div className="space-y-4">
                  {projects.map((p, i) => (
                     <div key={i} className="border-l-2 border-slate-700 pl-4 py-1 hover:border-cyan-500 transition-colors">
                        <h4 className="font-bold text-sm">{p.name}</h4>
                        <p className="text-xs text-slate-400">{p.desc}</p>
                        {isLoggedIn && <button onClick={() => openEdit("project", i)} className="text-[10px] text-slate-500">Düzenle</button>}
                     </div>
                  ))}
               </div>
            </div>
            <div>
               <div className="flex justify-between mb-6">
                  <h2 className="text-xl font-bold text-cyan-400">Referanslar</h2>
                  {isLoggedIn && <button onClick={() => openAdd("reference")} className="text-xs">+ Ekle</button>}
               </div>
               <div className="space-y-4">
                  {references.map((r, i) => (
                     <div key={i} className="bg-slate-950 p-4 rounded-lg border border-white/5">
                        <p className="text-xs italic text-slate-300">"{r.quote}"</p>
                        <p className="text-[10px] text-cyan-600 mt-2 font-bold">{r.company}</p>
                        {isLoggedIn && <button onClick={() => openEdit("reference", i)} className="text-[10px] text-slate-500">Düzenle</button>}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <footer className="py-8 text-center text-xs text-slate-500 border-t border-white/5">
         © {new Date().getFullYear()} {companyInfo.name} | Dark Theme
      </footer>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* TEMA 2: KURUMSAL (CORPORATE) -> page-1.jsx     */
/* -------------------------------------------------------------------------- */
function ThemeCorporate(props) {
  const { hero, services, projects, references, companyInfo, isLoggedIn, setIsLoggedIn, setCurrentTheme, setShowLogin, openEdit, openAdd } = props;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100">
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white font-bold text-sm">WL</div>
            <div>
               <p className="text-base font-bold text-slate-900 leading-none">{companyInfo.name}</p>
               <p className="text-[10px] text-blue-600 font-bold uppercase">Corporate</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
             {/* THEME SWITCHER - DOSYA YOLU */}
             <div className="flex items-center bg-slate-50 rounded border border-slate-200 px-2">
                <span className="text-xs text-slate-400 mr-2 font-medium">Dosya:</span>
                <select 
                  value={props.currentTheme} 
                  onChange={(e) => setCurrentTheme(e.target.value)}
                  className="bg-transparent text-xs text-blue-600 font-bold py-1 outline-none cursor-pointer"
                >
                    <option value="dark">page.jsx</option>
                    <option value="corporate">page-1.jsx</option>
                    <option value="premium">page-2.jsx</option>
                    <option value="hightech">page-3.jsx</option>
                </select>
             </div>

             <nav className="flex gap-6 text-sm font-medium text-slate-600 ml-4">
                <a href="#services" className="hover:text-blue-800">Hizmetler</a>
                <a href="#projects" className="hover:text-blue-800">Projeler</a>
                <a href="#contact" className="hover:text-blue-800">İletişim</a>
             </nav>
          </div>
          
          <button onClick={() => isLoggedIn ? setIsLoggedIn(false) : setShowLogin(true)} className="bg-blue-900 text-white px-5 py-2 rounded text-xs font-bold hover:bg-blue-800">
             {isLoggedIn ? "Çıkış Yap" : "Giriş Yap"}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-50 py-20 px-6 border-b border-slate-200">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
               <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">{hero.eyebrow}</span>
               <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">{hero.title}</h1>
               <p className="text-slate-600 mb-8 text-lg">{hero.subtitle}</p>
               <div className="flex gap-4">
                  <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition">{hero.cta}</button>
               </div>
               {isLoggedIn && <button onClick={() => openEdit("hero")} className="mt-4 text-xs text-blue-600 underline">Düzenle</button>}
            </div>
            <div className="flex-1 flex justify-center">
               <div className="w-64 h-80 bg-white border border-slate-200 rounded-t-full relative shadow-xl overflow-hidden flex items-end justify-center p-4">
                  <div className="w-40 h-1/2 bg-blue-900/10 rounded-t-lg relative border-x-2 border-t-2 border-blue-900/20">
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-10 bg-blue-900 rounded animate-bounce"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Services - White Cards */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
         <div className="flex justify-between items-end mb-10 border-b border-slate-100 pb-4">
            <div>
               <h2 className="text-3xl font-bold text-slate-900">Hizmetlerimiz</h2>
               <p className="text-slate-500 text-sm mt-1">Profesyonel mühendislik çözümleri</p>
            </div>
            {isLoggedIn && <button onClick={() => openAdd("service")} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded font-bold">+ Ekle</button>}
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
               <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition group">
                  <div className="h-48 bg-slate-100 rounded-lg mb-4 overflow-hidden">
                     <img src={service.image} alt="" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
                          onError={(e) => {e.target.src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800"; e.target.onerror=null;}}/>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-slate-600">{service.desc}</p>
                  {isLoggedIn && <button onClick={() => openEdit("service", index)} className="mt-4 text-xs text-blue-600 font-bold">Düzenle</button>}
               </div>
            ))}
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
            <div>
               <h4 className="font-bold text-lg mb-4">{companyInfo.name}</h4>
               <p className="text-slate-400 text-sm max-w-xs">{companyInfo.about}</p>
            </div>
            <div className="text-right">
               <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Kurumsal Tema</p>
            </div>
         </div>
      </footer>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* TEMA 3: PREMIUM (ARCHITECTURAL) -> page-2.jsx  */
/* -------------------------------------------------------------------------- */
function ThemePremium(props) {
  const { hero, services, projects, companyInfo, isLoggedIn, setIsLoggedIn, setCurrentTheme, setShowLogin, openEdit, openAdd } = props;

  return (
    <div className="min-h-screen bg-[#F5F5F4] text-stone-800 font-serif selection:bg-orange-200">
      {/* Top Bar */}
      <div className="bg-stone-900 text-stone-300 text-[10px] py-2 px-6 flex justify-between tracking-widest uppercase font-sans">
         <span>Engineering Excellence</span>
         <span>{companyInfo.address}</span>
      </div>

      <header className="sticky top-0 z-30 bg-[#F5F5F4]/95 backdrop-blur border-b border-stone-200">
         <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <div>
               <h1 className="text-2xl font-bold text-stone-900">{companyInfo.name}</h1>
               <p className="text-[9px] font-sans font-bold text-orange-600 tracking-[0.3em] uppercase">Premium</p>
            </div>
            
            <div className="hidden md:flex items-center gap-8 font-sans text-xs font-bold tracking-widest uppercase">
               {/* THEME SWITCHER - DOSYA YOLU */}
               <div className="flex items-center border-b border-stone-300 pb-1">
                  <span className="text-stone-400 mr-2 text-[10px]">FILE:</span>
                  <select 
                     value={props.currentTheme} 
                     onChange={(e) => setCurrentTheme(e.target.value)}
                     className="bg-transparent text-stone-800 outline-none cursor-pointer font-bold"
                  >
                     <option value="dark">page.jsx</option>
                     <option value="corporate">page-1.jsx</option>
                     <option value="premium">page-2.jsx</option>
                     <option value="hightech">page-3.jsx</option>
                  </select>
               </div>

               <a href="#services" className="hover:text-orange-700 ml-4">Koleksiyon</a>
               <a href="#projects" className="hover:text-orange-700">Projeler</a>
            </div>

            <button onClick={() => isLoggedIn ? setIsLoggedIn(false) : setShowLogin(true)} className="w-8 h-8 rounded-full border border-stone-400 flex items-center justify-center hover:bg-stone-900 hover:text-white transition">
               <span className="font-sans text-[10px]">{isLoggedIn ? "O" : "I"}</span>
            </button>
         </div>
      </header>

      {/* Hero - Split */}
      <div className="flex flex-col md:flex-row min-h-[80vh]">
         <div className="w-full md:w-1/2 bg-[#F5F5F4] flex flex-col justify-center px-10 py-20">
            <span className="font-sans text-orange-600 text-xs font-bold tracking-widest uppercase mb-4 block border-l-2 border-orange-600 pl-3">{hero.eyebrow}</span>
            <h2 className="text-5xl md:text-6xl text-stone-900 leading-none mb-8">{hero.title}</h2>
            <p className="font-sans text-stone-500 text-sm leading-relaxed max-w-md mb-10 border-l border-stone-300 pl-6">{hero.subtitle}</p>
            <div className="flex gap-4 font-sans">
               <button className="bg-stone-900 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-orange-700 transition">{hero.cta}</button>
            </div>
            {isLoggedIn && <button onClick={() => openEdit("hero")} className="mt-8 text-left text-[10px] font-sans text-stone-400 underline">Düzenle</button>}
         </div>
         <div className="w-full md:w-1/2 bg-stone-300 relative overflow-hidden">
            <img src="/kabinler.webp" className="w-full h-full object-cover grayscale opacity-60" onError={(e) => {e.target.src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800";}} />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-32 h-64 border border-white/50 rounded-t-full bg-white/10 backdrop-blur-sm relative">
                  <div className="absolute top-1/2 left-4 right-4 h-12 bg-orange-200/80 shadow-lg border border-orange-300 animate-pulse"></div>
               </div>
            </div>
         </div>
      </div>

      {/* Services - Masonry */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl text-stone-900">Çözüm Koleksiyonu</h2>
            {isLoggedIn && <button onClick={() => openAdd("service")} className="font-sans text-xs bg-stone-200 px-3 py-1 text-stone-600">+ Ekle</button>}
         </div>
         <div className="grid md:grid-cols-3 gap-1">
            {services.map((s, i) => (
               <div key={i} className="group relative h-96 bg-stone-200 overflow-hidden cursor-pointer">
                  <img src={s.image} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                       onError={(e) => {e.target.src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800";}}/>
                  <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/20 transition-colors p-8 flex flex-col justify-end text-white">
                     <span className="font-sans text-[10px] text-orange-400 tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition opacity-0 group-hover:opacity-100">0{i+1}</span>
                     <h3 className="text-2xl border-l-2 border-orange-500 pl-4">{s.name}</h3>
                     {isLoggedIn && <button onClick={(e) => {e.stopPropagation(); openEdit("service", i)}} className="absolute top-4 right-4 text-[10px] bg-white/20 p-2 font-sans">Düzenle</button>}
                  </div>
               </div>
            ))}
         </div>
      </section>

      <footer className="bg-stone-900 text-stone-500 py-16 text-center font-sans text-xs">
         <div className="w-8 h-8 border border-stone-700 flex items-center justify-center mx-auto mb-4 text-white font-serif">W</div>
         <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* TEMA 4: HIGH-TECH (INDUSTRIAL) -> page-3.jsx   */
/* -------------------------------------------------------------------------- */
function ThemeHighTech(props) {
  const { hero, services, projects, companyInfo, isLoggedIn, setIsLoggedIn, setCurrentTheme, setShowLogin, openEdit, openAdd } = props;

  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50 font-mono selection:bg-cyan-900 selection:text-cyan-200">
      {/* Grid BG */}
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

      {/* Top Bar */}
      <div className="bg-black border-b border-cyan-900 text-[10px] py-1 px-4 flex justify-between text-cyan-600">
         <span>SYS: ONLINE</span>
         <span>LOC: CORLU_TR</span>
         <span className="animate-pulse">STATUS: READY</span>
      </div>

      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur border-b border-cyan-900/50">
         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold bg-cyan-900/10">W</div>
               <div>
                  <p className="font-bold text-white tracking-widest">{companyInfo.name}</p>
                  <p className="text-[10px] text-cyan-600">High-Tech System</p>
               </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-xs">
               {/* THEME SWITCHER - DOSYA YOLU */}
               <div className="flex items-center bg-black border border-cyan-900 px-2 py-0.5">
                  <span className="text-cyan-800 mr-2 text-[10px]">SRC:</span>
                  <select 
                     value={props.currentTheme} 
                     onChange={(e) => setCurrentTheme(e.target.value)}
                     className="bg-transparent text-cyan-500 outline-none cursor-pointer hover:text-cyan-400"
                  >
                     <option value="dark">page.jsx</option>
                     <option value="corporate">page-1.jsx</option>
                     <option value="premium">page-2.jsx</option>
                     <option value="hightech">page-3.jsx</option>
                  </select>
               </div>

               {["Hizmetler", "Projeler", "İletişim"].map((item) => (
                  <a key={item} href={`#${item}`} className="hover:text-cyan-400 hover:bg-cyan-900/30 px-3 py-1 border border-transparent hover:border-cyan-800 transition-all">{item}</a>
               ))}
            </div>

            <button onClick={() => isLoggedIn ? setIsLoggedIn(false) : setShowLogin(true)} className="px-4 py-1 bg-cyan-900/20 border border-cyan-700 text-cyan-400 text-xs hover:bg-cyan-500 hover:text-black transition-colors">
               {isLoggedIn ? "LOGOUT" : "LOGIN"}
            </button>
         </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6 border-b border-cyan-900/30">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
               <p className="text-cyan-500 text-xs mb-4">SYSTEM_MESSAGE: {hero.eyebrow}</p>
               <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase leading-tight">{hero.title}</h1>
               <p className="text-slate-400 border-l-2 border-cyan-800 pl-4 mb-8 text-sm">{hero.subtitle}</p>
               <button className="bg-cyan-600/20 border border-cyan-500 text-cyan-400 px-8 py-4 text-xs font-bold uppercase hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {hero.cta}
               </button>
               {isLoggedIn && <button onClick={() => openEdit("hero")} className="ml-4 text-[10px] text-cyan-800 hover:text-cyan-500 underline">[EDIT]</button>}
            </div>
            <div className="flex justify-center relative">
               <div className="absolute inset-0 border border-dashed border-cyan-900/50 rounded-full animate-[spin_20s_linear_infinite]"></div>
               <div className="w-32 h-64 border border-cyan-800 bg-slate-900/80 relative overflow-hidden">
                  <div className="absolute left-0 right-0 h-1 bg-cyan-500 shadow-[0_0_10px_cyan] animate-[bounce_3s_infinite]"></div>
                  <div className="absolute bottom-4 left-2 text-[8px] text-cyan-700">ELEVATOR_ID: 404</div>
               </div>
            </div>
         </div>
      </section>

      {/* Services - Grid */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
         <div className="flex justify-between items-end mb-12 border-b border-cyan-900 pb-2">
            <h2 className="text-2xl text-white font-bold"><span className="text-cyan-600">01.</span> Modüller</h2>
            {isLoggedIn && <button onClick={() => openAdd("service")} className="text-xs bg-cyan-900/50 text-cyan-400 px-2 py-1">[+] ADD</button>}
         </div>
         <div className="grid md:grid-cols-3 gap-4">
            {services.map((s, i) => (
               <div key={i} className="bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-colors p-4 group">
                  <div className="h-40 bg-black mb-4 overflow-hidden relative border-b border-cyan-900">
                     <img src={s.image} className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-all" 
                          onError={(e) => {e.target.src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800";}}/>
                     <div className="absolute top-0 right-0 bg-cyan-900 text-cyan-400 text-[10px] px-1">ID_{i+1}</div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-cyan-400">{s.name}</h3>
                  <p className="text-xs text-slate-500 mt-2">{s.desc}</p>
                  {isLoggedIn && <button onClick={() => openEdit("service", i)} className="mt-4 text-[10px] text-cyan-800 hover:text-cyan-500">_EDIT_DATA</button>}
               </div>
            ))}
         </div>
      </section>

      <footer className="bg-black border-t border-cyan-900 py-8 text-center text-[10px] text-slate-600">
         <p>WITHMOR TEKNIKA SYSTEMS // ALL RIGHTS RESERVED {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
