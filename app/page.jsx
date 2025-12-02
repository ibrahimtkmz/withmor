"use client";

import { useState } from "react";

// Withmor Teknika Lift için HIGH-TECH ENDÜSTRİYEL KONSEPT (Cyber-Blue, Grid, Monospace)

function ElevatorAnimation() {
  return (
    <div className="mt-8 flex justify-center">
      {/* Kuyu - Tech Grid Arka Plan */}
      <div className="relative h-64 w-32 overflow-hidden border border-cyan-900/50 bg-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        {/* Arka plan ızgarası */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Raylar */}
        <div className="absolute left-2 top-0 bottom-0 w-1 bg-cyan-900/30" />
        <div className="absolute right-2 top-0 bottom-0 w-1 bg-cyan-900/30" />

        {/* Kat Göstergeleri */}
        <div className="absolute right-1 top-4 flex flex-col gap-8 text-[8px] font-mono text-cyan-500/50">
          <span>LVL.05</span>
          <span>LVL.04</span>
          <span>LVL.03</span>
          <span>LVL.02</span>
          <span>LVL.01</span>
        </div>

        {/* Kabin - Neon Çerçeve */}
        <div
          className="absolute left-4 right-4 h-12 border border-cyan-400 bg-cyan-950/80 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center justify-center group"
          style={{ animation: "techMove 6s ease-in-out infinite" }}
        >
          {/* Tarayıcı Işık Efekti */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse"></div>
          
          <div className="flex flex-col items-center">
             <span className="text-[8px] font-mono text-cyan-300">SYS.ACTIVE</span>
             <div className="flex gap-0.5 mt-1">
                <span className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce delay-75"></span>
                <span className="w-1 h-1 bg-cyan-500 rounded-full animate-bounce delay-150"></span>
             </div>
          </div>
        </div>

        <style>{`
          @keyframes techMove {
            0% { transform: translateY(350%); border-color: #22d3ee; }
            45% { transform: translateY(50%); border-color: #3b82f6; }
            55% { transform: translateY(50%); border-color: #3b82f6; }
            100% { transform: translateY(-150%); border-color: #22d3ee; }
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
  const [quoteForm, setQuoteForm] = useState({ name: "", phone: "", projectType: "Konut Asansörü", floorCount: "", location: "", note: "" });
  const [fastContactForm, setFastContactForm] = useState({ name: "", phone: "", message: "" });

  const [hero, setHero] = useState({
    eyebrow: "SYSTEM STATUS: OPERATIONAL",
    title: "İleri Teknoloji Dikey Ulaşım Sistemleri",
    subtitle: "Yüksek hassasiyetli mühendislik, akıllı kontrol sistemleri ve endüstriyel dayanıklılık.",
    cta: "Sistemi Başlat",
    secondaryCta: "Verileri İncele",
  });

  const [services, setServices] = useState([
    { id: "1", name: "Çelik Konstrüksiyon", desc: "Modüler montaj, yüksek statik dayanım.", image: "/celik-konstruksiyonlar.webp" },
    { id: "2", name: "Hidrolik Sistemler", desc: "Sessiz operasyon, düşük enerji tüketimi.", image: "/hidrolik-sistemler.jpg" },
    { id: "3", name: "Kabin Tasarımları", desc: "Fütüristik iç dizayn, LED entegrasyonu.", image: "/kabinler.webp" },
    { id: "4", name: "Yük Platformları", desc: "Ağır sanayi tipi, 5000kg+ kapasite.", image: "/yuk-asansorleri-platformlar.jpg" },
    { id: "5", name: "MRL / MR Şaseler", desc: "Titreşim sönümleyici özel alaşım şaseler.", image: "/makine-sasesi-mrl-mr.png" },
    { id: "6", name: "Yük Kabinleri", desc: "Darbe emici paneller, endüstriyel zemin.", image: "/yuk-kabinleri.jpg" },
  ]);

  const [activeService, setActiveService] = useState(0);

  const [projects, setProjects] = useState([
    { name: "Skyline Tower", type: "PANORAMIC", desc: "Akıllı trafik yönetim sistemi entegrasyonu." },
    { name: "Techno Plant", type: "HEAVY DUTY", desc: "7/24 kesintisiz lojistik akış desteği." },
    { name: "City Hospital", type: "MEDICAL", desc: "Hassas duruş kalkış, anti-bakteriyel yüzeyler." },
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    name: "WITHMOR",
    subname: "TEKNIKA",
    about: "Geleceğin asansör teknolojilerini bugünden inşa ediyoruz. Entegre güvenlik protokolleri ve akıllı mühendislik çözümleri.",
    phone: "+90 530 280 55 26",
    email: "info@withmor.com",
    address: "Kervanci Ticaret Merkezi, Velimeşe OSB, 59850 Çorlu/Tekirdağ",
  });

  // --- Fonksiyonlar ---
  const handleLogin = (e) => { e.preventDefault(); e.target.username.value === "admin" && e.target.password.value === "password" ? (setIsLoggedIn(true), setShowLogin(false), setLoginError("")) : setLoginError("Erişim Reddedildi."); };
  const handleLogout = () => setIsLoggedIn(false);
  const openEdit = (type, index = null) => { /* Edit logic would go here, simplified for display */ };
  const openAdd = (type) => { if(!isLoggedIn) setShowLogin(true); /* Add logic */ };
  const saveEdit = () => { /* Save logic */ }; 
  const handleDelete = () => { /* Delete logic */ };
  const handleQuoteSubmit = (e) => { e.preventDefault(); window.open(`https://wa.me/905302805526?text=${encodeURIComponent(`Teklif Talebi: ${quoteForm.name}`)}`, "_blank"); setShowQuoteModal(false); };
  const handleFastContactSubmit = (e) => { e.preventDefault(); window.open(`https://wa.me/905302805526?text=${encodeURIComponent(`İletişim: ${fastContactForm.name}`)}`, "_blank"); };
  const handleImageError = (e) => { e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"; e.target.onerror = null; };

  return (
    // TEMA: Slate-950 zemin, Cyan/Blue neon vurgular, Monospace fontlar
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Arka Plan Grid Efekti */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Top Bar - Data Stream */}
      <div className="bg-black/80 border-b border-slate-800 text-[10px] font-mono py-1 px-4 flex justify-between items-center text-cyan-600 overflow-hidden whitespace-nowrap">
        <div className="flex gap-8 animate-marquee">
           <span>SYS: ONLINE</span>
           <span>LOC: CORLU_TEKIRDAG</span>
           <span>TEL: +90 530 280 55 26</span>
           <span>EN-81 COMPLIANT</span>
           <span>LOAD_CAPACITY: MAX</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="relative flex h-10 w-10 items-center justify-center bg-slate-900 border border-cyan-500/30 rounded-sm overflow-hidden group">
               <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors"></div>
               <span className="font-bold text-cyan-400 z-10 text-lg">W</span>
               <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500"></span>
               <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500"></span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-widest text-white">{companyInfo.name}</p>
              <p className="text-[9px] font-mono text-cyan-500 tracking-[0.2em]">{companyInfo.subname}</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1 font-mono text-xs text-slate-400">
            {["Hizmetler", "Projeler", "Referanslar", "İletişim"].map((item, i) => (
              <a key={item} href={`#${item === "İletişim" ? "contact" : item.toLowerCase()}`} className="px-4 py-2 hover:text-cyan-400 hover:bg-cyan-950/30 border border-transparent hover:border-cyan-900/50 rounded transition-all flex items-center gap-2 group">
                <span className="text-[8px] text-slate-600 group-hover:text-cyan-700">0{i+1}</span>
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {isLoggedIn && <span className="text-[9px] font-mono text-green-500 blink">ADMIN_ACCESS</span>}
            <button onClick={() => isLoggedIn ? handleLogout() : setShowLogin(true)} className="relative group overflow-hidden px-5 py-2 bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 hover:text-white transition-colors">
               <span className="relative z-10">{isLoggedIn ? "LOGOUT" : "LOGIN"}</span>
               <div className="absolute inset-0 bg-cyan-600/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full py-20 px-6 lg:px-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
             <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-cyan-950/30 border border-cyan-900/50 rounded text-[10px] font-mono text-cyan-400">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                {hero.eyebrow}
             </div>
             <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {hero.title.split(' ').map((w,i) => <span key={i} className={i===1 ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600" : ""}>{w} </span>)}
             </h1>
             <p className="text-slate-400 max-w-lg mb-8 text-sm leading-relaxed border-l-2 border-cyan-900 pl-4">
                {hero.subtitle}
             </p>
             <div className="flex gap-4">
                <button onClick={() => setShowQuoteModal(true)} className="bg-cyan-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-cyan-500 transition-all clip-path-polygon shadow-[0_0_20px_rgba(8,145,178,0.4)]">
                   {hero.cta}
                </button>
                <a href="#projects" className="border border-slate-700 text-slate-300 px-6 py-3 text-xs font-bold uppercase tracking-wider hover:border-cyan-500 hover:text-cyan-400 transition-all">
                   {hero.secondaryCta}
                </a>
             </div>
          </div>

          <div className="relative flex justify-center">
             {/* Tech Circle Background */}
             <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-64 h-64 border border-dashed border-cyan-800 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute w-80 h-80 border border-slate-800 rounded-full"></div>
             </div>
             <ElevatorAnimation />
          </div>
        </div>
      </section>

      {/* Services - Cyber Grid */}
      <section id="services" className="py-24 relative z-10">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12 border-b border-slate-800 pb-4">
               <div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                     <span className="text-cyan-500 font-mono text-sm">01.</span> Ürün Grupları
                  </h2>
               </div>
               <div className="hidden md:flex gap-2">
                  <span className="w-2 h-2 bg-slate-800"></span>
                  <span className="w-2 h-2 bg-cyan-900"></span>
                  <span className="w-2 h-2 bg-cyan-500"></span>
               </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {services.map((service, index) => (
                  <div key={index} className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors overflow-hidden">
                     {/* Image Header */}
                     <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                        <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" onError={handleImageError} />
                        {/* Tech Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                     </div>
                     
                     {/* Content */}
                     <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                           <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{service.name}</h3>
                           <span className="text-[10px] font-mono text-slate-600">ID_0{index+1}</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-4">{service.desc}</p>
                        <button onClick={() => { setActiveService(index); setShowQuoteModal(true); }} className="text-xs font-mono text-cyan-600 flex items-center gap-2 group-hover:gap-4 transition-all">
                           INSPECT_DETAILS <span>→</span>
                        </button>
                     </div>

                     {/* Decorative Corners */}
                     <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/0 group-hover:border-cyan-500 transition-colors"></div>
                     <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/0 group-hover:border-cyan-500 transition-colors"></div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Projects - Data List Style */}
      <section id="projects" className="py-24 bg-slate-900/50 border-y border-slate-800">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
               <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-cyan-500 font-mono text-sm">02.</span> Sistem Logları / Projeler
               </h2>
            </div>

            <div className="space-y-1">
               {/* Table Header */}
               <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-2 text-[10px] font-mono text-slate-500 uppercase tracking-wider border-b border-slate-800">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-4">Project Name</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-4">Description</div>
                  <div className="col-span-1 text-right">Status</div>
               </div>

               {/* Rows */}
               {projects.map((project, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-4 md:py-3 bg-slate-900/0 hover:bg-cyan-900/10 border-l-2 border-transparent hover:border-cyan-500 transition-all items-center group">
                     <div className="col-span-1 font-mono text-cyan-600 text-xs">P-{202400 + index}</div>
                     <div className="col-span-4 font-bold text-slate-200 group-hover:text-white">{project.name}</div>
                     <div className="col-span-2">
                        <span className="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded font-mono border border-slate-700">{project.type}</span>
                     </div>
                     <div className="col-span-4 text-sm text-slate-400">{project.desc}</div>
                     <div className="col-span-1 text-right">
                        <span className="w-2 h-2 bg-green-500 rounded-full inline-block shadow-[0_0_5px_#22c55e]"></span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* References - Terminal Style */}
      <section id="references" className="py-24 px-6">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-12">
               <span className="text-cyan-500 font-mono text-sm">03.</span> Kullanıcı Geri Bildirimleri
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
               {references.map((ref, index) => (
                  <div key={index} className="bg-black border border-slate-800 p-6 font-mono text-sm relative">
                     <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 flex gap-1 px-2 items-center">
                        <div className="w-1 h-1 rounded-full bg-red-500"></div>
                        <div className="w-1 h-1 rounded-full bg-yellow-500"></div>
                        <div className="w-1 h-1 rounded-full bg-green-500"></div>
                     </div>
                     <div className="mt-4 text-slate-400">
                        <span className="text-green-500">user@withmor:~$</span> cat review_{index}.txt<br/>
                        <span className="text-slate-300">"{ref.quote}"</span><br/><br/>
                        <span className="text-cyan-600">-- {ref.company}</span><br/>
                        <span className="text-slate-600">-- {ref.name} [{ref.title}]</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Contact & Map */}
      <section id="contact" className="border-t border-slate-800 bg-slate-900/30">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
            {/* Form */}
            <div className="p-8 lg:p-20 border-r border-slate-800">
               <div className="mb-8">
                  <span className="text-cyan-500 font-mono text-xs">INITIATE_COMMUNICATION</span>
                  <h2 className="text-3xl font-bold text-white mt-2">Bize Ulaşın</h2>
               </div>
               <form onSubmit={handleFastContactSubmit} className="space-y-6">
                  <div className="space-y-1">
                     <label className="text-[10px] font-mono text-slate-500 uppercase">Input: Ad Soyad</label>
                     <input required type="text" value={fastContactForm.name} onChange={(e) => setFastContactForm({...fastContactForm, name: e.target.value})} className="w-full bg-slate-950 border border-slate-700 p-3 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] font-mono text-slate-500 uppercase">Input: İletişim No</label>
                     <input required type="tel" value={fastContactForm.phone} onChange={(e) => setFastContactForm({...fastContactForm, phone: e.target.value})} className="w-full bg-slate-950 border border-slate-700 p-3 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all" placeholder="+90 ..." />
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] font-mono text-slate-500 uppercase">Input: Mesaj</label>
                     <textarea required rows={4} value={fastContactForm.message} onChange={(e) => setFastContactForm({...fastContactForm, message: e.target.value})} className="w-full bg-slate-950 border border-slate-700 p-3 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all resize-none" placeholder="Sistem talebi..." />
                  </div>
                  <button type="submit" className="group w-full bg-cyan-900/20 border border-cyan-500/50 text-cyan-400 py-4 text-xs font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-slate-900 transition-all flex items-center justify-center gap-2">
                     <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-slate-900"></span>
                     Veriyi Gönder
                  </button>
               </form>
            </div>

            {/* Info & Map */}
            <div className="relative">
               {/* Map overlay */}
               <div className="absolute inset-0 bg-slate-900/20 z-10 pointer-events-none border-b border-slate-800 lg:border-b-0 lg:border-l border-slate-800"></div>
               <iframe
                  title="Ofis Konumu"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full min-h-[400px] lg:min-h-full grayscale invert-[0.9] contrast-125 opacity-60 hover:opacity-100 transition-opacity"
                  src="https://maps.google.com/maps?q=Withmor+Asans%C3%B6r+Market%2C+Kervanc%C4%B1+Ticaret+Merkezi%2C+Velime%C5%9Fe+OSB%2C+Tekirda%C4%9F&t=&z=15&ie=UTF8&iwloc=&output=embed"
               ></iframe>
               
               {/* Info Card Float */}
               <div className="absolute bottom-8 left-8 right-8 bg-slate-950/90 backdrop-blur border border-slate-700 p-6 z-20">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                     <div>
                        <span className="text-[10px] font-mono text-slate-500 block">ADRES</span>
                        <span className="text-slate-300">{companyInfo.address}</span>
                     </div>
                     <div>
                        <span className="text-[10px] font-mono text-slate-500 block">ILETISIM</span>
                        <span className="text-slate-300 block">{companyInfo.phone}</span>
                        <span className="text-slate-300 block">{companyInfo.email}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-slate-800 py-12 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="w-4 h-4 bg-cyan-600"></div>
               <span className="font-bold text-white tracking-widest">WITHMOR TEKNIKA</span>
            </div>
            <div className="text-[10px] font-mono text-slate-600 text-center md:text-right">
               <p>COPYRIGHT © {new Date().getFullYear()} // ALL SYSTEMS SECURE</p>
               <p>ENGINEERED FOR EXCELLENCE</p>
            </div>
         </div>
      </footer>

      {/* --- MODALS (Style Update: Cyber) --- */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-cyan-500/30 p-8 w-full max-w-sm shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <h3 className="text-xl font-bold text-white mb-6 text-center tracking-widest">ACCESS CONTROL</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="text" name="username" placeholder="USER_ID" className="w-full bg-black border border-slate-700 p-3 text-sm text-cyan-500 outline-none focus:border-cyan-500 placeholder:text-slate-700 font-mono" />
              <input type="password" name="password" placeholder="PASSCODE" className="w-full bg-black border border-slate-700 p-3 text-sm text-cyan-500 outline-none focus:border-cyan-500 placeholder:text-slate-700 font-mono" />
              <button className="w-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 p-3 text-xs font-bold hover:bg-cyan-500 hover:text-black transition-colors">AUTHENTICATE</button>
            </form>
            <button onClick={() => setShowLogin(false)} className="w-full text-center mt-4 text-[10px] text-slate-500 hover:text-white font-mono">[ ABORT ]</button>
          </div>
        </div>
      )}

      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-950 border border-slate-700 p-8 w-full max-w-md shadow-2xl relative">
            <button onClick={() => setShowQuoteModal(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white">✕</button>
            <h3 className="text-xl font-bold text-white mb-2">Proje Teklifi Başlat</h3>
            <div className="h-px w-20 bg-cyan-500 mb-6"></div>
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="Ad Soyad" value={quoteForm.name} onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})} className="bg-slate-900 border border-slate-700 p-2 text-sm text-white outline-none focus:border-cyan-500" />
                <input required placeholder="Telefon" value={quoteForm.phone} onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})} className="bg-slate-900 border border-slate-700 p-2 text-sm text-white outline-none focus:border-cyan-500" />
              </div>
              <select value={quoteForm.projectType} onChange={(e) => setQuoteForm({...quoteForm, projectType: e.target.value})} className="w-full bg-slate-900 border border-slate-700 p-2 text-sm text-white outline-none focus:border-cyan-500">
                <option>Konut Asansörü</option>
                <option>Yük Asansörü</option>
                <option>Hidrolik Sistem</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Durak Sayısı" value={quoteForm.floorCount} onChange={(e) => setQuoteForm({...quoteForm, floorCount: e.target.value})} className="bg-slate-900 border border-slate-700 p-2 text-sm text-white outline-none focus:border-cyan-500" />
                <input placeholder="Konum" value={quoteForm.location} onChange={(e) => setQuoteForm({...quoteForm, location: e.target.value})} className="bg-slate-900 border border-slate-700 p-2 text-sm text-white outline-none focus:border-cyan-500" />
              </div>
              <textarea placeholder="Notlar..." rows={2} value={quoteForm.note} onChange={(e) => setQuoteForm({...quoteForm, note: e.target.value})} className="w-full bg-slate-900 border border-slate-700 p-2 text-sm text-white outline-none focus:border-cyan-500 resize-none" />
              <button className="w-full bg-green-900/20 border border-green-500/50 text-green-400 p-3 text-xs font-bold hover:bg-green-500 hover:text-black transition-colors uppercase">
                WhatsApp İletimi
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
