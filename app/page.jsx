"use client";

import { useState } from "react";

// --- İKON TANIMLAMALARI (SVG) ---
const Icons = {
  MapPin: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>),
  Phone: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>),
  Mail: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>),
  Facebook: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>),
  Instagram: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>),
  ArrowRight: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>),
  CheckCircle2: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>),
  Menu: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>),
  X: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 18 12"/></svg>),
  ChevronRight: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>),
  Star: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
  Settings: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>),
  LogOut: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>),
  User: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>),
  Plus: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5v14"/></svg>),
  ChevronDown: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>),
  ChevronUp: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m18 15-6-6-6 6"/></svg>),
  MessageCircle: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>),
  Quote: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>),
  ChevronsRight: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>),
  Image: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>),
  ZoomIn: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>),
  Edit: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>),
  Trash: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>),
};

// Withmor - KURUMSAL WEB SİTESİ

function ElevatorAnimation() {
  const elevatorModels = [
    { id: 1, label: "İnsan asansörleri" },
    { id: 2, label: "Yük asansörleri" },
    { id: 3, label: "Araç asansörleri" },
    { id: 4, label: "Yamaç asansörleri" },
    { id: 5, label: "Villa asansörleri" },
  ];

  return (
    <div className="relative w-full max-w-sm">
      {/* Dış Kutu (Card Container) */}
      <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xl p-6 md:p-8">

        {/* Arkaplan Efektleri (Blur Circles) */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

        {/* İçerik */}
        <div className="relative z-10 flex flex-col items-start w-full">
          {/* Üst Metin - Sola Hizalı */}
          <div className="mb-8 text-left w-full">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Akıllı Dikey Ulaşım Sistemleri</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler için Türkiye’nin her yerinden 24 saat 444 37 59 numaralı hattan ulaşılabilir güvenli ve konforlu çözümler.
            </p>
          </div>

          {/* Animasyon Alanı */}
          <div className="flex justify-start items-center gap-6 w-full">
            {/* SOL: Asansör Kuyusu */}
            <div className="relative h-96 w-40 shrink-0 overflow-hidden rounded-md border-2 border-slate-300 bg-slate-100 shadow-inner">
              {/* Kuyu Duvarları */}
              <div className="absolute inset-x-2 top-2 bottom-2 border-x-2 border-slate-300 bg-slate-200/30" />

              {/* Raylar */}
              <div className="absolute left-1/2 top-2 bottom-2 w-1 -ml-4 bg-slate-400/50" />
              <div className="absolute left-1/2 top-2 bottom-2 w-1 ml-3 bg-slate-400/50" />

              {/* Kat Çizgileri */}
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute left-4 right-4 border-t border-slate-400/40"
                  style={{ top: `${(index + 1) * 16}%` }}
                />
              ))}

              {/* Asansör Kabini */}
              <div
                className="absolute left-6 right-6 h-16 z-10 rounded-lg border-2 border-blue-600 bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg flex items-center justify-center"
                style={{ top: '6%', animation: "elevatorMove 20s ease-in-out infinite" }}
              >
                {/* Kabin Kapısı Efekti */}
                <div className="absolute inset-y-1 left-1/2 w-0.5 bg-blue-800/30" />
                <div className="text-xs font-bold text-white tracking-widest bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
                  WL
                </div>
              </div>

              {/* Yön Okları */}
              <div className="absolute top-2 left-0 right-0 flex justify-center gap-4 px-4">
                 <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                 <div className="h-2 w-2 rounded-full bg-red-500 opacity-30" />
              </div>
            </div>

            {/* SAĞ: Asansör Modelleri Göstergeleri */}
            <div className="flex flex-col justify-between h-[18rem] py-2 w-full">
              {elevatorModels.slice().reverse().map((item) => (
                <div 
                  key={item.id} 
                  data-floor={item.id}
                  className="floor-indicator flex items-center gap-3 group w-full"
                >
                  <div className="indicator-circle w-10 h-10 shrink-0 rounded-full border-2 border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-400 transition-all duration-300 text-center px-1">
                    WL
                  </div>
                  <span className="indicator-text text-xs font-medium text-slate-400 tracking-wide whitespace-nowrap transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Asansör Hareketi – 5 kat, 1. kattan başlayıp sırayla yukarı çıkıyor */
        @keyframes elevatorMove {
          0%, 10%   { transform: translateY(400%); }  /* Kat 1 (en alt) */
          15%, 25%  { transform: translateY(300%); }  /* Kat 2 */
          30%, 40%  { transform: translateY(200%); }  /* Kat 3 */
          45%, 55%  { transform: translateY(100%); }  /* Kat 4 */
          60%, 70%  { transform: translateY(0%); }    /* Kat 5 (en üst) */
          75%, 100% { transform: translateY(400%); }  /* Geri 1. kata */
        }

        /* Kat Işığı Animasyonları (5 model için senkron) */
        @keyframes floorLight1 { 
          0%, 10%, 75%, 100% {
            background-color: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5);
          }
          11%, 74% {
            background-color: transparent;
            color: #94A3B8;
            border-color: #CBD5E1;
            transform: scale(1);
            box-shadow: none;
          }
        }

        @keyframes floorLight2 { 
          15%, 25% {
            background-color: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5);
          }
          0%, 14%, 26%, 100% {
            background-color: transparent;
            color: #94A3B8;
            border-color: #CBD5E1;
            transform: scale(1);
            box-shadow: none;
          }
        }

        @keyframes floorLight3 { 
          30%, 40% {
            background-color: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5);
          }
          0%, 29%, 41%, 100% {
            background-color: transparent;
            color: #94A3B8;
            border-color: #CBD5E1;
            transform: scale(1);
            box-shadow: none;
          }
        }

        @keyframes floorLight4 { 
          45%, 55% {
            background-color: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5);
          }
          0%, 44%, 56%, 100% {
            background-color: transparent;
            color: #94A3B8;
            border-color: #CBD5E1;
            transform: scale(1);
            box-shadow: none;
          }
        }

        @keyframes floorLight5 { 
          60%, 70% {
            background-color: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5);
          }
          0%, 59%, 71%, 100% {
            background-color: transparent;
            color: #94A3B8;
            border-color: #CBD5E1;
            transform: scale(1);
            box-shadow: none;
          }
        }
        
        div[data-floor="1"] .indicator-circle { animation: floorLight1 20s infinite; }
        div[data-floor="2"] .indicator-circle { animation: floorLight2 20s infinite; }
        div[data-floor="3"] .indicator-circle { animation: floorLight3 20s infinite; }
        div[data-floor="4"] .indicator-circle { animation: floorLight4 20s infinite; }
        div[data-floor="5"] .indicator-circle { animation: floorLight5 20s infinite; }
      `}</style>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tab State
  const [activeAboutTab, setActiveAboutTab] = useState("biz-kimiz");
  const [isExpanded, setIsExpanded] = useState(false);

  // Göster/Gizle State'leri
  const [showAllReferences, setShowAllReferences] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [visibleReviewCount, setVisibleReviewCount] = useState(3);

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    projectType: "Malzeme teklifi iste",
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
      "Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler için Türkiye’nin her yerinden 24 saat 444 37 59 numaralı hat üzerinden ulaşılabilen mühendislik ve servis çözümleri.",
    cta: "Proje Teklifi Al",
    secondaryCta: "Referanslarımızı İnceleyin",
  });

  // --- GALERİ STATE: Artık resim + video destekli ---
  const [galleryItems, setGalleryItems] = useState(
    Array.from({ length: 19 }, (_, i) => ({
      type: "image",
      url: `/images/gallery/galeri-${i + 1}.jpg`,
      title: `Galeri ${i + 1}`,
      source: "local",
    }))
  );

  // YENİ STATE: Görünecek Galeri Ögesi Sayısı
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(8);

  const [aboutTabs, setAboutTabs] = useState({
    "biz-kimiz": {
        title: "Biz Kimiz",
        heading: "Mühendislik Temelli Çözüm Ortağınız",
        subHeading: "30 Yıllık Tecrübeyle Dikey Ulaşımda Güven...",
        text1: "İstanbul'un dinamik atmosferinde, asansör sektöründe 30 yıldır mühendislik odaklı çözümler üretiyoruz. Özveriyle, tutkuyla ve teknik uzmanlıkla şekillendirdiğimiz projelerimizde, sadece bir asansör değil, güvenli bir yolculuk deneyimi sunuyoruz.",
        text2: "Montaj ve modernizasyonun ötesinde, EN-81 standartlarına tam uyumlu, enerji verimliliği yüksek sistemler tasarlıyoruz.",
        longText: "Withmor olarak, dikey ulaşım sektöründeki yolculuğumuza 30 yılı aşkın bir süre önce başladık. Kurulduğumuz günden bu yana, sadece bir asansör firması olmanın ötesine geçerek, binaların yaşam damarlarını inşa eden bir mühendislik partneri olmayı hedefledik. Globalleşen dünyada teknolojiyi yakından takip eden Ar-Ge ekibimiz, yerel üretim gücümüzü uluslararası standartlarla birleştiriyor. Müşteri memnuniyetini merkeze alan yaklaşımımızla, konutlardan gökdelenlere, hastanelerden alışveriş merkezlerine kadar geniş bir yelpazede güvenli, konforlu ve enerji verimliliği yüksek çözümler sunuyoruz. Geleceğin akıllı şehirlerine uyumlu, sürdürülebilir ve estetik asansör sistemlerimizle, Türkiye'den dünyaya açılan bir teknoloji köprüsü kurmanın gururunu yaşıyoruz."
    },
    "imalat": {
        title: "İmalat",
        heading: "Yüksek Kaliteli Üretim Standartları",
        subHeading: "Projeye Özel İmalat Çözümleri...",
        text1: "Kendi tesislerimizde, uluslararası kalite standartlarına uygun olarak kabin, karkas ve süspansiyon sistemleri imalatı gerçekleştiriyoruz.",
        text2: "Modern tezgahlarımız ve uzman üretim kadromuzla, her projenin teknik gereksinimlerine uygun, dayanıklı ve estetik imalatlar yapıyoruz.",
        longText: "Ergene OSB'de yer alan modern üretim tesisimiz, endüstri 4.0 standartlarına uygun makine parkuru ile donatılmıştır. Yüksek hassasiyetli lazer kesim makineleri, CNC abkant büküm tezgahları ve robotik kaynak sistemlerimiz sayesinde, milimetrik hassasiyette üretim gerçekleştiriyoruz. Kullandığımız her hammadde, giriş kalite kontrol testlerinden geçirilerek üretim hattına alınır. Kabin karkaslarından süspansiyon sistemlerine, ağırlık şaselerinden kapı mekanizmalarına kadar tüm bileşenler, uzun yıllar sorunsuz çalışacak dayanıklılıkta tasarlanır ve üretilir. Sadece standart ürünler değil, mimari projenize özel, sıra dışı ölçü ve formlardaki asansör bileşenlerini de kendi bünyemizde, esnek üretim kabiliyetimizle hayata geçiriyoruz."
    },
    "montaj": {
        title: "Montaj",
        heading: "Kusursuz Kurulum ve Devreye Alma",
        subHeading: "Güvenli ve Hızlı Montaj Süreçleri...",
        text1: "Sertifikalı montaj ekiplerimiz, şantiye güvenliğini ön planda tutarak asansör sistemlerinin kurulumunu titizlikle gerçekleştirir.",
        text2: "Ray montajından motor grubu yerleşimine, kumanda panosu bağlantılarından son kontrollere kadar her aşama mühendis denetiminde ilerler.",
        longText: "Montaj süreçlerimiz, sahadaki en kritik aşamadır ve sıfır hata prensibiyle yönetilir. Proje başlangıcında, şantiye şeflerimiz tarafından yapılan detaylı kuyu rölöve çalışmaları ile sürprizlere yer bırakmıyoruz. Rayların lazer hizalama ile montajından, motor grubunun titreşimsiz yerleşimine kadar her adım, EN-81-20/50 standartlarına sıkı sıkıya bağlı kalınarak yürütülür. İş güvenliği, ekiplerimiz için vazgeçilmez bir önceliktir; tüm personelimiz yüksekte çalışma ve iş güvenliği sertifikalarına sahiptir. Montaj sonrası, bağımsız kalite kontrol birimimiz tarafından yapılan kapsamlı testler ve yük denemeleri ile asansörünüzün en yoğun trafik koşullarında bile performansından ödün vermeden çalışacağını garanti altına alıyoruz."
    },
    "tasarim": {
        title: "Tasarım",
        heading: "Estetik ve Fonksiyonelliğin Uyumu",
        subHeading: "Yenilikçi Kabin ve Kuyu Tasarımları...",
        text1: "Mimari projenizle bütünleşen, modern ve şık kabin tasarımları sunuyoruz. 3D modelleme teknolojileri ile üretim öncesi görselleştirme sağlıyoruz.",
        text2: "Mühendislerimiz, kuyu optimizasyonu yaparak mevcut alandan en yüksek verimi almanızı sağlayacak teknik tasarımlar geliştirir.",
        longText: "Tasarım felsefemiz, teknolojiyi estetikle buluşturarak kullanıcı deneyimini zirveye taşımaktır. İç mimarlarımız ve endüstriyel tasarımcılarımız, binanızın karakterine uygun, paslanmaz çelik, cam, ahşap ve doğal taş gibi premium malzemeleri harmanlayarak özgün kabin iç mekanları yaratır. Fonksiyonel açıdan ise mühendislerimiz, trafik analizleri yaparak binanızın insan akışını en verimli şekilde yönetecek hız ve kapasite hesaplamalarını gerçekleştirir. 3 boyutlu simülasyonlarımız sayesinde, asansörünüzün bitmiş halini henüz üretim aşamasına geçmeden sanal ortamda deneyimlemenize olanak tanıyoruz. Panoramik cam kapsüllerden, yük asansörlerinde dayanıklılığı ön planda tutan endüstriyel tasarımlara kadar her detay, Withmor imzasını taşır."
    }
  });

  const [companyInfo, setCompanyInfo] = useState({
    name: "Withmor",
    about:
      "Withmor, ulusal ve uluslararası standartlara (EN-81) uygun asansör sistemleri tasarlar, üretir ve anahtar teslim kurulum gerçekleştirir. Güvenlik, dayanıklılık ve konforu mühendislik hassasiyetiyle birleştiriyoruz.",
    phone: "444 37 59",
    gsm: "0 555 888 33 59",
    email: "info@withmor.com.tr",
    address: "Ergene OSB, Çorlu / Tekirdağ",
    facebook: "https://www.facebook.com/TEKNIKALIFT",
    instagram: "https://www.instagram.com/withmorlift/",
    whatsapp: "https://wa.me/905558883359"
  });

  // HİZMETLER İÇİN YEREL GÖRSELLER (DÜZELTİLDİ)
  const [services, setServices] = useState([
    {
      id: "hidrolik-yuk",
      name: "Hidrolik Yük Asansörü",
      desc: "Ağır sanayi ve depolar için yüksek taşıma kapasitesine sahip, dayanıklı ve güvenli hidrolik kaldırma çözümleri.",
      image: "/images/services/hidrolik-yuk.jpg",
    },
    {
      id: "mrl-yuk",
      name: "Makine Dairesiz Yük Asansörü",
      desc: "Bina hacminden tasarruf sağlayan, dişlisiz motor teknolojisiyle enerji verimli ve sessiz çalışan yük asansörleri.",
      image: "/images/services/mrl-yuk.jpg",
    },
    {
      id: "homelift",
      name: "Homelift",
      desc: "Müstakil evler, villalar ve dubleks daireler için özel tasarlanmış, minimum kuyu dibi gerektiren konforlu ev asansörleri.",
      image: "/images/services/homelift.jpg",
    },
    {
      id: "insan-asansoru",
      name: "İnsan Asansörü",
      desc: "Konutlar, iş merkezleri ve oteller için EN-81 standartlarına uygun, konforlu ve güvenli yolcu taşıma sistemleri.",
      image: "/images/services/insan-asansoru.jpg",
    },
    {
      id: "konveyor",
      name: "Konveyör Asansörler",
      desc: "Lojistik merkezleri ve fabrikalarda sürekli malzeme akışını sağlamak için tasarlanan dikey konveyör sistemleri.",
      image: "/images/services/konveyor.jpg",
    },
    {
      id: "panoramik",
      name: "Panoramik Asansörler",
      desc: "AVM ve plazalar için mimari estetiği tamamlayan, cam kabinli ve geniş görüş açılı prestij asansörleri.",
      image: "/images/services/panoramik.jpg",
    },
    {
      id: "yatay-yamac",
      name: "Yatay Yamaç Asansörler",
      desc: "Eğimli arazilerde, sahil tesislerinde veya peyzaj projelerinde ulaşımı kolaylaştıran özel raylı sistemler.",
      image: "/images/services/yatay-yamac.jpg",
    },
    {
      id: "ozel-projeler",
      name: "Özel Projeler",
      desc: "Standart dışı kuyu ölçüleri veya özel taşıma ihtiyaçlarınız için terzi işi mühendislik ve tasarım çözümleri.",
      image: "/images/services/ozel-projeler.jpg",
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
    {
      name: "Vadi Park Plaza",
      type: "Yüksek Hızlı Asansörler",
      desc: "35 katlı iş merkezi için 4 m/s hızında, grup kumandalı 6 adet yolcu asansörü montajı.",
    },
    {
      name: "Metro Transfer Merkezi",
      type: "Yürüyen Merdiven",
      desc: "Günde 50.000 yolcu kapasiteli, ağır hizmet tipi 12 adet yürüyen merdiven sistemi.",
    },
    {
      name: "Lojistik Üssü",
      type: "Makaslı Platformlar",
      desc: "Tır yükleme ve boşaltma operasyonları için özel üretim 10 ton kapasiteli hidrolik platformlar.",
    },
  ]);

  // REFERANSLAR
  const [references, setReferences] = useState([
    {
      company: "Csm Metalurji",
      quote:
        "Ağır sanayi koşullarında çalışan tesislerimizde, yük asansörleri ve platform çözümlerinde yüksek dayanım ve süreklilik sağlandı.",
      name: "Tesis Yönetimi",
      title: "Kurumsal Müşteri",
    },
    {
      company: "Como Cotton",
      quote:
        "Tekstil üretim hattımızda yoğun sevkiyatı güvenle taşıyan sistemler kuruldu, lojistik akışımız gözle görülür şekilde hızlandı.",
      name: "Üretim Koordinatörü",
      title: "Kurumsal Müşteri",
    },
    {
      company: "3K Tekstil",
      quote:
        "Katlar arası hammadde ve mamul taşımasında yük asansörleri ile hatlarımız daha düzenli ve güvenli hale geldi.",
      name: "Fabrika Sorumlusu",
      title: "Referans Proje",
    },
    {
      company: "Özşan Lojistik",
      quote:
        "Depo ve yükleme alanlarımızda kurulan çözümler sayesinde operasyon sürelerimiz kısaldı, kapasitemiz arttı.",
      name: "Operasyon Müdürü",
      title: "Referans Proje",
    },
    {
      company: "Azgur Gıda",
      quote:
        "Gıda güvenliği ve hijyen kriterlerine uygun, güvenilir yük taşıma sistemleriyle depolama süreçlerimiz güçlendi.",
      name: "Lojistik ve Depo Yönetimi",
      title: "Kurumsal Müşteri",
    },
    {
      company: "Akkardeşler Hafriyat",
      quote:
        "Zorlu şantiye koşullarında kullanılan sistemler sağlamlığıyla öne çıkıyor, bakım ihtiyacı minimum seviyede.",
      name: "Şantiye Koordinatörü",
      title: "Referans Proje",
    },
    {
      company: "Color Metal",
      quote:
        "Metal işleme tesisimizde, ağır ve hacimli yüklerde dahi titreşimsiz ve güvenli taşıma imkânı sağlandı.",
      name: "Üretim Müdürü",
      title: "Kurumsal Müşteri",
    },
    {
      company: "Murem Tekstil",
      quote:
        "Tekstil tesisimizdeki dikey lojistik çözümleri sayesinde hem iş güvenliği arttı hem de günlük sevkiyat kapasitemiz yükseldi.",
      name: "Genel Müdürlük",
      title: "Kurumsal Müşteri",
    },
    {
      company: "Perge Tekstil Lüleburgaz",
      quote:
        "Lüleburgaz tesisimizde kurulan sistemler, yüksek hacimli üretim tempomuzla tam uyumlu çalışıyor.",
      name: "Tesis Yönetimi",
      title: "Referans Proje",
    },
    {
      company: "THY Tekstil Lüleburgaz",
      quote:
        "Lüleburgaz’daki üretim tesislerimizde, yük asansörleri ve platform çözümleri ile süreçlerimiz çok daha kontrollü ve verimli hale geldi.",
      name: "Operasyon Yönetimi",
      title: "Kurumsal Müşteri",
    },
  ]);

  const [googleReviews, setGoogleReviews] = useState([
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
      text: "Bakım hizmetlerinden çok memnunuz. Teknik ekip çok bilgili ve Türkiye’nin her yerinden 24 saat 444 37 59 numaralı telefondan ulaşılabilir durumda.",
      date: "1 ay önce",
    },
    {
      id: 3,
      name: "Ayşe Kaya",
      rating: 5,
      text: "Villa asansörü projemizde harika bir iş çıkardılar. Hem estetik hem de çok sessiz çalışıyor.",
      date: "3 ay önce",
    },
    {
      id: 4,
      name: "Canan Erkin",
      rating: 4,
      text: "Proje yönetimi gayet başarılıydı, ufak tefek aksaklıklar olsa da teknik ekip hızlı çözümler üretti.",
      date: "4 ay önce",
    },
    {
      id: 5,
      name: "Burak Yılmaz",
      rating: 5,
      text: "Fiyat performans açısından piyasadaki en iyi firma. Malzeme kalitesi beklediğimizden iyi.",
      date: "5 ay önce",
    },
    {
      id: 6,
      name: "Zeynep Çelik",
      rating: 5,
      text: "Periyodik bakım konusunda çok hassaslar. Asansörümüz hiç yarı yolda bırakmadı.",
      date: "6 ay önce",
    }
  ]);

  // --- YENİ EKLENEN STATE VE HANDLER ---
  const [mainContactForm, setMainContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Malzeme teklifi iste",
    message: ""
  });

  const handleMainContactSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, subject, message } = mainContactForm;
    // WhatsApp Mesaj Formatı
    const text = `*Web Sitesi İletişim Formu*\n\n*Ad Soyad:* ${name}\n*Telefon:* ${phone}\n*E-Posta:* ${email}\n*Konu:* ${subject}\n*Mesaj:* ${message}`;
    const url = `https://wa.me/905558883359?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  // ----------------------------------------

  // Yeni Fonksiyon: Bölüm Kaydırma ve Tab Değiştirme
  const scrollToAbout = (tabKey) => {
    setActiveAboutTab(tabKey);
    setIsExpanded(false); // Tab değiştiğinde genişletmeyi kapat
    const section = document.getElementById("about");
    if (section) {
      // Sticky header offset
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false); // Mobil menüyü kapat
  };

  // YENİ FONKSİYON: Hizmet/Ürün Kaydırma
  const scrollToService = (serviceId) => {
    setMobileMenuOpen(false);

    // Önce hizmet kartına scroll etmeyi dene
    const element = document.getElementById(serviceId);
    if (element) {
      const headerOffset = 100; // Header height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      // Eğer spesifik kart bulunamazsa genel bölüme git
      const section = document.getElementById("services");
      if (section) {
         window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
      }
    }
  };

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
    if (type === "service" && index !== null) setTempValue(services[index]);
    if (type === "project" && index !== null) setTempValue(projects[index]);
    if (type === "reference" && index !== null) setTempValue(references[index]);

    if (type === "aboutTab") {
        setTempValue({ ...aboutTabs[index] });
    }

    if (type === "gallery" && index !== null) {
        setTempValue(galleryItems[index]);
    }
  };

  const openAdd = (type) => {
    if (!isLoggedIn && type !== "reference") {
      setShowLogin(true);
      return;
    }
    setEditModal({ open: true, type, index: null });

    if (type === "service")
      setTempValue({ id: `new-${Date.now()}`, name: "", desc: "", image: "" });
    if (type === "project") setTempValue({ name: "", type: "", desc: "" });
    if (type === "reference") setTempValue({ company: "", quote: "", name: "", title: "" });
    if (type === "gallery") setTempValue({ type: "image", url: "", title: "", source: "local" });
  };

  const saveEdit = () => {
    const { type, index } = editModal;

    if (type === "hero") setHero(tempValue);
    if (type === "company") setCompanyInfo(tempValue);

    if (type === "aboutTab" && index) {
        setAboutTabs(prev => ({
            ...prev,
            [index]: tempValue
        }));
    }

    if (type === "gallery") {
        if (index !== null) {
            const copy = [...galleryItems];
            copy[index] = tempValue;
            setGalleryItems(copy);
        } else {
            setGalleryItems([...galleryItems, tempValue]);
        }
    }

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

    if (type === "gallery" && index !== null) {
        const newGallery = galleryItems.filter((_, i) => i !== index);
        setGalleryItems(newGallery);
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
    const message = `*Proje Teklifi Talebi*\n\n*Ad Soyad:* ${name}\n*Telefon:* ${phone}\n*Talep Konusu:* ${projectType}\n*Durak Sayısı:* ${floorCount}\n*Konum/Şehir:* ${location}\n*Ek Notlar:* ${note}`;
    const whatsappUrl = `https://wa.me/905558883359?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowQuoteModal(false);
  };

  const handleFastContactSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = fastContactForm;
    const whatsappMessage = `*Hızlı İletişim Formu*\n\n*Ad Soyad:* ${name}\n*Telefon:* ${phone}\n*Mesaj:* ${message}`;
    const whatsappUrl = `https://wa.me/905558883359?text=${encodeURIComponent(whatsappMessage)}`;
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

      {/* Navbar - ... (BURADAN SONRASI SENDEKİYLE AYNI, SADECE GALERİ VE MODAL KISMI DEĞİŞTİ) */}
      {/* --- NAVBAR, HERO, ABOUT, WHY US, SERVICES, PROJECTS, REFERENCES, CONTACT, FOOTER --- */}
      {/* ... TÜM ARADAKİ KISIMLARI DEĞİŞTİRMEDİM, AYNEN BIRAKABİLİRSİN ... */}

      {/* (Buraya kadar olan kod seninkiyle aynı olduğu için kısaltıyorum; galeri ve modal kısmı önemli senin için) */}


      {/* GALERİ BÖLÜMÜ */}
      <section id="gallery" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Galeri</h2>
            <p className="text-slate-500 text-sm">Üretim tesisimiz ve tamamlanan projelerimizden kareler.</p>

            {isLoggedIn && (
              <button 
                onClick={() => openAdd("gallery")} 
                className="absolute top-0 right-0 flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full font-bold hover:bg-blue-100 border border-blue-200"
              >
                <Icons.Plus size={12}/> Yeni Medya Ekle
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.slice(0, visibleGalleryCount).map((item, i) => {
              const isVideo = item.type === "video";
              const url = item.url || "";
              const isInstagram = isVideo && url.includes("instagram.com");
              const isFacebook = isVideo && url.includes("facebook.com");
              const isSocialVideo = isInstagram || isFacebook;

              return (
                <div
                  key={i}
                  className="group relative aspect-square bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-in fade-in zoom-in"
                >
                  {/* İÇERİK */}
                  {!isVideo && (
                    <>
                      {url ? (
                        <>
                          <img
                            src={url}
                            alt={item.title || `Galeri ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={handleImageError}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Icons.ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 bg-slate-50">
                          <Icons.Image className="w-10 h-10 mb-2 opacity-50" />
                          <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                            Resim Alanı {i + 1}
                          </span>
                        </div>
                      )}
                    </>
                  )}

                  {isVideo && (
                    <>
                      {isSocialVideo ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white p-4 text-center"
                        >
                          <div className="mb-2">
                            {isInstagram && <Icons.Instagram className="w-8 h-8" />}
                            {isFacebook && <Icons.Facebook className="w-8 h-8" />}
                          </div>
                          <p className="text-xs font-bold mb-1">
                            {isInstagram ? "Instagram Gönderisi" : "Facebook Gönderisi"}
                          </p>
                          <p className="text-[10px] text-slate-200 line-clamp-2">
                            Tıklayarak gönderiyi izleyin
                          </p>
                        </a>
                      ) : (
                        <>
                          {url ? (
                            <video
                              src={url}
                              controls
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400">
                              <span className="text-sm font-bold">Video</span>
                              <span className="text-[10px]">Video URL ekleyin</span>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}

                  {/* Admin Butonları */}
                  {isLoggedIn && (
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={() => openEdit("gallery", i)}
                        className="p-1.5 bg-white rounded-full text-slate-600 hover:text-blue-600 shadow-sm"
                      >
                        <Icons.Edit size={12} />
                      </button>
                      <button
                        onClick={() => {
                          setEditModal({ open: true, type: "gallery", index: i });
                        }}
                        className="p-1.5 bg-white rounded-full text-red-500 hover:text-red-700 shadow-sm"
                      >
                        <Icons.Trash size={12} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* DAHA FAZLA GÖR BUTONU */}
          {visibleGalleryCount < galleryItems.length && (
            <div className="mt-10 text-center">
              <button 
                onClick={() => setVisibleGalleryCount(prev => prev + 8)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-all shadow-sm hover:shadow-md"
              >
                Daha Fazla Gör <Icons.ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ... Footer ve Modallar ... */}

      {/* Edit Modal - GÜNCELLENDİ (Dinamik İçerik Yönetimi) */}
      {editModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            <h3 className="mb-4 text-lg font-bold text-slate-900">
              {editModal.index === null ? "Yeni Ekle" : "İçeriği Düzenle"}
            </h3>
            <div className="space-y-3">
              {Object.keys(tempValue).map((key) => {
                // Filtreleme: 'id' gibi sistem alanlarını gizle
                if (key === 'id' || key === 'title') return null;

                let label = key;
                if (key === 'desc') label = 'Açıklama';
                else if (key === 'name') label = 'Başlık';
                else if (key === 'image') label = 'Resim URL';
                else if (key === 'heading') label = 'Ana Başlık';
                else if (key === 'subHeading') label = 'Alt Başlık';
                else if (key === 'text1') label = 'Paragraf 1';
                else if (key === 'text2') label = 'Paragraf 2';
                else if (key === 'quote') label = 'Yorum';
                else if (key === 'company') label = 'Şirket';
                else if (key === 'url') label = 'Medya URL (resim / video / sosyal medya linki)';
                else if (key === 'type') label = 'Tür (image / video)';
                else if (key === 'source') label = 'Kaynak (local / facebook / instagram)';

                const isLongText =
                  key === "desc" ||
                  key === "quote" ||
                  key === "about" ||
                  key.startsWith("text") ||
                  key === "longText";

                return (
                  <div key={key}>
                    <label className="mb-1 block text-[10px] font-bold text-slate-500 uppercase">
                      {label}
                    </label>
                    {isLongText ? (
                      <textarea
                        rows={key === "longText" ? 8 : 4}
                        value={tempValue[key] ?? ""}
                        onChange={(e) =>
                          setTempValue((prev) => ({ ...prev, [key]: e.target.value }))
                        }
                        className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600"
                      />
                    ) : (
                      <input
                        type="text"
                        value={tempValue[key] ?? ""}
                        onChange={(e) =>
                          setTempValue((prev) => ({ ...prev, [key]: e.target.value }))
                        }
                        className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 flex justify-between gap-3">
              {editModal.index !== null &&
              ["service", "project", "reference", "gallery"].includes(editModal.type) ? (
                <button
                  onClick={handleDelete}
                  className="rounded border border-red-200 text-red-600 px-4 py-2 text-xs font-bold hover:bg-red-50 flex items-center gap-1"
                >
                  <Icons.Trash size={12} /> Sil
                </button>
              ) : (
                <div />
              )}
              <div className="flex gap-2">
                <button
                  onClick={() => setEditModal({ open: false, type: null, index: null })}
                  className="rounded border border-slate-200 text-slate-600 px-4 py-2 text-xs font-bold hover:bg-slate-50"
                >
                  Vazgeç
                </button>
                <button
                  onClick={saveEdit}
                  className="rounded bg-blue-900 text-white px-6 py-2 text-xs font-bold hover:bg-blue-800"
                >
                  {editModal.index === null ? "Ekle" : "Kaydet"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Diğer modallar (Login, Quote vs.) seninkiyle aynı kalabilir */}
    </div>
  );
}
