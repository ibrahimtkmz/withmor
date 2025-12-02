"use client";

import { useState, useEffect } from "react";

// --- ORTAK VERİ VE STATE YÖNETİMİ ---
// Bu bileşen, tüm temaların ortak verisini tutar ve seçilen temayı render eder.

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("corporate"); // Varsayılan olarak Corporate (page-1) başlasın
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
      
      {/* Ortak Modallar */}
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-white p-8 w-full max-w-sm rounded-xl shadow-2xl border border-slate-200">
            <h3 className="text-xl font-bold mb-4 text-slate-900">Yönetici Girişi</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="text" name="username" placeholder="Kullanıcı: admin" className="w-full border p-3 rounded text-slate-900 outline-none focus:border-blue-500" />
              <input type="password" name="password" placeholder="Şifre: password" className="w-full border p-3 rounded text-slate-900 outline-none focus:border-blue-500" />
              <button className="w-full bg-slate-900 text-white p-3 rounded font-bold hover:bg-slate-800 transition">Giriş</button>
            </form>
            <button onClick={() => setShowLogin(false)} className="w-full mt-2 text-sm text-slate-500 hover:text-slate-800">İptal</button>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModal.open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-white p-6 w-full max-w-lg rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto border border-slate-200">
            <h3 className="text-lg font-bold mb-4 text-slate-900">{editModal.index === null ? "Yeni Ekle" : "Düzenle"}</h3>
            <div className="space-y-4">
               {Object.keys(tempValue).map((key) => (
                  <div key={key}>
                     <label className="text-xs font-bold text-slate-500 uppercase block mb-1">{key}</label>
                     {key === "desc" || key === "quote" || key === "about" ? (
                        <textarea rows={3} value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full border border-slate-300 p-2 rounded text-sm text-slate-900 outline-none focus:border-blue-500 bg-slate-50" />
                     ) : (
                        <input type="text" value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full border border-slate-300 p-2 rounded text-sm text-slate-900 outline-none focus:border-blue-500 bg-slate-50" />
                     )}
                  </div>
               ))}
            </div>
            <div className="mt-6 flex justify-between">
               {editModal.index !== null && ["service", "project", "reference"].includes(editModal.type) ? (
                  <button onClick={handleDelete} className="text-red-500 text-sm font-bold hover:text-red-700 bg-red-50 px-3 py-1 rounded">Sil</button>
               ) : <div/>}
               <div className="flex gap-2">
                  <button onClick={() => setEditModal({open: false, type: null, index: null})} className="text-slate-500 text-sm font-bold px-4 py-2 hover:bg-slate-100 rounded">Vazgeç</button>
                  <button onClick={saveEdit} className="bg-blue-600 text-white px-6 py-2 rounded text-sm font-bold hover:bg-blue-700 shadow-md">Kaydet</button>
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
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-blue-100 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Logo: Mavi-Lacivert */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-900 to-blue-700 text-white font-bold text-sm shadow-md">WL</div>
            <div>
               <p className="text-base font-bold text-slate-900 leading-none">{companyInfo.name}</p>
               <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wide">Corporate</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
             {/* THEME SWITCHER - DOSYA YOLU */}
             <div className="flex items-center bg-slate-100 rounded border border-slate-200 px-3 py-1">
                <span className="text-xs text-slate-500 mr-2 font-semibold">Dosya:</span>
                <select 
                  value={props.currentTheme} 
                  onChange={(e) => setCurrentTheme(e.target.value)}
                  className="bg-transparent text-xs text-blue-700 font-bold outline-none cursor-pointer"
                >
                    <option value="dark">page.jsx</option>
                    <option value="corporate">page-1.jsx</option>
                    <option value="premium">page-2.jsx</option>
                    <option value="hightech">page-3.jsx</option>
                </select>
             </div>

             <nav className="flex gap-6 text-sm font-semibold text-slate-600 ml-4">
                <a href="#services" className="hover:text-blue-800 transition-colors">Hizmetler</a>
                <a href="#projects" className="hover:text-blue-800 transition-colors">Projeler</a>
                <a href="#contact" className="hover:text-blue-800 transition-colors">İletişim</a>
             </nav>
          </div>
          
          <button onClick={() => isLoggedIn ? setIsLoggedIn(false) : setShowLogin(true)} className="bg-blue-800 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-blue-900 transition shadow-lg shadow-blue-200">
             {isLoggedIn ? "Çıkış Yap" : "Giriş Yap"}
          </button>
        </div>
      </header>

      {/* Hero - KOYU LACİVERT İLE DEĞİŞTİRİLDİ (Beyazlığı Kırmak İçin) */}
      <section className="bg-slate-900 py-24 px-6 border-b border-slate-800 relative overflow-hidden">
         {/* Arka plan efekti */}
         <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-950 opacity-100"></div>
         <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-600/10 skew-x-12 blur-3xl"></div>

         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="flex-1">
               <span className="bg-blue-600/20 border border-blue-500/30 text-blue-200 px-4 py-1.5 rounded-full text-xs font-bold mb-6 inline-block tracking-wide uppercase">{hero.eyebrow}</span>
               <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">{hero.title}</h1>
               <p className="text-slate-300 mb-8 text-lg font-light leading-relaxed">{hero.subtitle}</p>
               <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold shadow-lg shadow-blue-900/50 hover:bg-blue-500 transition transform hover:-translate-y-0.5">{hero.cta}</button>
                  <a href="#projects" className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition">{hero.secondaryCta}</a>
               </div>
               {isLoggedIn && <button onClick={() => openEdit("hero")} className="mt-6 text-xs text-blue-400 font-semibold hover:text-white transition">İçeriği Düzenle →</button>}
            </div>
            
            {/* Animasyon Alanı */}
            <div className="flex-1 flex justify-center">
               <div className="w-72 h-96 bg-slate-800 border border-slate-700 rounded-2xl relative shadow-2xl overflow-hidden flex items-end justify-center p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_transparent_70%)] opacity-50"></div>
                  {/* Kabin Yolu */}
                  <div className="w-40 h-[90%] border-x-2 border-slate-600/50 relative">
                     <div className="absolute top-0 left-0 right-0 h-px bg-slate-600/30"></div>
                     <div className="absolute top-1/4 left-0 right-0 h-px bg-slate-600/30"></div>
                     <div className="absolute top-2/4 left-0 right-0 h-px bg-slate-600/30"></div>
                     <div className="absolute top-3/4 left-0 right-0 h-px bg-slate-600/30"></div>
                     
                     {/* Hareketli Kabin */}
                     <div className="absolute bottom-0 left-2 right-2 h-20 bg-blue-600 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center animate-[bounce_3s_infinite]">
                        <span className="text-white text-xs font-bold">WL</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Services - White Cards on Light Grey BG */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
         <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-6">
            <div>
               <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Hizmetlerimiz</h2>
               <p className="text-slate-500 text-sm mt-2 font-medium">Profesyonel mühendislik çözümleri ve ürün grupları</p>
            </div>
            {isLoggedIn && <button onClick={() => openAdd("service")} className="text-xs bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold hover:bg-blue-200">+ Yeni Ekle</button>}
         </div>
         
         <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
               <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group hover:-translate-y-1">
                  <div className="h-48 bg-slate-100 rounded-xl mb-6 overflow-hidden relative">
                     <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors z-10"></div>
                     <img src={service.image} alt="" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                          onError={(e) => {e.target.src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800"; e.target.onerror=null;}}/>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{service.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.desc}</p>
                  <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                     <span className="text-xs font-bold text-blue-600 cursor-pointer hover:underline">Detaylar →</span>
                     {isLoggedIn && <button onClick={() => openEdit("service", index)} className="text-xs text-slate-400 font-bold hover:text-slate-600">Düzenle</button>}
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Projeler - KOYU RENKLİ ZEMİN (Zebra Etkisi İçin Değiştirildi) */}
      <section id="projects" className="py-24 px-6 bg-blue-950 border-t border-blue-900 text-white relative">
         {/* Hafif desen */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1e3a8a_0%,_transparent_40%)] opacity-30 pointer-events-none"></div>
         
         <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex justify-between items-center mb-12">
               <div>
                  <span className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 block">Referanslar</span>
                  <h2 className="text-3xl font-bold text-white">Seçilmiş Projeler</h2>
               </div>
               {isLoggedIn && <button onClick={() => openAdd("project")} className="text-xs bg-blue-900 border border-blue-700 text-blue-100 px-4 py-2 rounded-lg font-bold hover:bg-blue-800">+ Proje Ekle</button>}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {projects.map((project, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 shadow-xl shadow-black/20">
                     <span className="inline-block text-[10px] font-bold text-blue-800 bg-blue-50 px-2 py-1 rounded border border-blue-100 uppercase tracking-wide mb-3">
                        {project.type}
                     </span>
                     <h3 className="font-bold text-lg text-slate-900 mb-3">{project.name}</h3>
                     <p className="text-sm text-slate-600 leading-relaxed mb-4">{project.desc}</p>
                     <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
                     {isLoggedIn && <button onClick={() => openEdit("project", index)} className="mt-4 text-xs text-blue-600 font-semibold hover:underline">Düzenle</button>}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* İletişim ve Harita - AÇIK RENKLİ ZEMİN (Mavi Tonlu) */}
      <section id="contact" className="py-24 px-6 bg-blue-50/50 border-t border-blue-100">
         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6">İletişime Geçin</h2>
               <p className="text-slate-600 mb-8 leading-relaxed">{companyInfo.about}</p>
               
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-700 shrink-0 font-bold border border-blue-100">📍</div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm">Adres</h4>
                        <p className="text-sm text-slate-600">{companyInfo.address}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-700 shrink-0 font-bold border border-blue-100">📞</div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm">Telefon</h4>
                        <p className="text-sm text-slate-600">{companyInfo.phone}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-700 shrink-0 font-bold border border-blue-100">✉️</div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm">E-Posta</h4>
                        <p className="text-sm text-slate-600">{companyInfo.email}</p>
                     </div>
                  </div>
               </div>
               
               {isLoggedIn && <button onClick={() => openEdit("company")} className="mt-8 text-xs border border-slate-300 px-4 py-2 rounded text-slate-500 hover:bg-white hover:text-slate-900 bg-white">Firma Bilgilerini Düzenle</button>}
            </div>

            <div className="h-80 bg-white p-2 rounded-2xl shadow-lg border border-slate-200">
               <iframe
                  title="Ofis Konumu"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-xl"
                  src="https://maps.google.com/maps?q=Withmor+Asans%C3%B6r+Market%2C+Kervanc%C4%B1+Ticaret+Merkezi%2C+Velime%C5%9Fe+OSB%2C+Tekirda%C4%9F&t=&z=15&ie=UTF8&iwloc=&output=embed"
               ></iframe>
            </div>
         </div>
      </section>

      {/* Footer - Koyu */}
      <footer className="bg-slate-900 text-white py-16 px-6 border-t-4 border-blue-600">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
            <div>
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-sm">W</div>
                  <h4 className="font-bold text-xl">{companyInfo.name}</h4>
               </div>
               <p className="text-slate-400 text-sm max-w-xs leading-relaxed">{companyInfo.about}</p>
            </div>
            
            <div className="flex gap-16">
               <div>
                  <h5 className="font-bold mb-4 text-sm text-blue-400 uppercase tracking-wider">Hızlı Erişim</h5>
                  <ul className="space-y-2 text-sm text-slate-400">
                     <li><a href="#services" className="hover:text-white transition">Hizmetler</a></li>
                     <li><a href="#projects" className="hover:text-white transition">Projeler</a></li>
                     <li><a href="#contact" className="hover:text-white transition">İletişim</a></li>
                  </ul>
               </div>
               <div>
                  <h5 className="font-bold mb-4 text-sm text-blue-400 uppercase tracking-wider">Sosyal</h5>
                  <ul className="space-y-2 text-sm text-slate-400">
                     <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                     <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                     <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} {companyInfo.name}. Tüm hakları saklıdır.</p>
            <p>Corporate Theme Design v2.0</p>
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
