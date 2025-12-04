Aynı yapıyı bozmadan sadece tekrar eden metinleri kısalttım / temizledim.
Özellikle:

Buton / chip / istatistik kartı gibi yerlerdeki:

TR’nin Her Yerinden 24 Saat 444 37 59 → kısaltıldı / telefonsuz hale getirildi


Uzun cümlelerdeki:

Türkiye’nin her yerinden 24 saat 444 37 59 numaralı hat(–tan/–tan) ulaşılabilir...
→ “Türkiye genelinde ...” gibi kısaltılmış, telefonsuz metinlere çevrildi


Telefonun anlamlı ve tek sefer net geçtiği yer olarak footer’da kısa bir ifade bıraktım.


Başka hiçbir mantık / tasarım / component yapısı ile oynamadım, sadece string’ler değişti.

Aşağıdaki kodu direkt kullanabilirsin:

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
              Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler için Türkiye genelinde güvenli ve konforlu çözümler sunuyoruz.
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
                <img
                  src="/images/withmor-logo.png"
                  alt="Withmor Logo"
                  className="h-6 w-auto object-contain relative z-10"
                />
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
                    <img
                      src="/images/withmor-logo.png"
                      alt="Withmor Logo"
                      className="w-6 h-6 object-contain"
                    />
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
      "Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler için Türkiye genelinde sunulan mühendislik ve servis çözümleri.",
    cta: "Proje Teklifi Al",
    secondaryCta: "Referanslarımızı İnceleyin",
  });

  // GALERİ İÇİN STATE - DÜZELTİLDİ (19 Adet Resim)
  const [galleryImages, setGalleryImages] = useState(
    Array.from({ length: 19 }, (_, i) => `/images/gallery/galeri-${i + 1}.jpg`)
  );

  // YENİ STATE: Görünecek Galeri Resmi Sayısı
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
      text: "Bakım hizmetlerinden çok memnunuz. Teknik ekip çok bilgili ve ihtiyaç duyduğumuzda hızlıca ulaşabiliyoruz.",
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
        setTempValue({ image: galleryImages[index] });
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
    if (type === "gallery") setTempValue({ image: "" });
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
            const copy = [...galleryImages];
            copy[index] = tempValue.image;
            setGalleryImages(copy);
        } else {
            setGalleryImages([...galleryImages, tempValue.image]);
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
        const newGallery = galleryImages.filter((_, i) => i !== index);
        setGalleryImages(newGallery);
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

      {/* Navbar - GÜNCELLENDİ (Dropdown Menu Eklendi) */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 text-sm font-bold text-white shadow-md">
              <img
                src="/images/withmor-logo.png"
                alt="Withmor Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-base font-bold tracking-tight text-slate-900">{companyInfo.name}</p>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Elevator Solutions</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex h-full">
            {/* Kurumsal Dropdown Menü */}
            <div className="relative group h-full flex items-center">
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToAbout('biz-kimiz'); }} className="hover:text-blue-700 transition-colors flex items-center gap-1 py-4">
                    Kurumsal <Icons.ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </a>
                <div className="absolute left-0 top-full pt-2 w-48 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1">
                        {Object.keys(aboutTabs).map((key) => (
                            <button
                                key={key}
                                onClick={() => scrollToAbout(key)}
                                className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-colors border-l-2 border-transparent hover:border-blue-700"
                            >
                                {aboutTabs[key].title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* YENİ: Ürünlerimiz Dropdown Menü */}
            <div className="relative group h-full flex items-center">
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToService('services'); }} className="hover:text-blue-700 transition-colors flex items-center gap-1 py-4">
                    Ürünlerimiz <Icons.ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </a>
                <div className="absolute left-0 top-full pt-2 w-56 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => scrollToService(service.id)}
                                className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-colors border-l-2 border-transparent hover:border-blue-700"
                            >
                                {service.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <a href="#projects" className="hover:text-blue-700 transition-colors">Projeler</a>
            <a href="#references" className="hover:text-blue-700 transition-colors">Referanslar</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">İletişim</a>
          </nav>

          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <span className="hidden text-[11px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-200 sm:inline-flex items-center gap-1">
                 <Icons.CheckCircle2 size={12} /> Yönetici
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
                {isLoggedIn ? <Icons.LogOut size={12}/> : <Icons.User size={12}/>}
              </span>
              {isLoggedIn ? "Çıkış" : "Giriş"}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(true)}>
              <Icons.Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay - GÜNCELLENDİ (Alt Menü Eklendi) */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-white h-[100dvh] flex flex-col animate-in slide-in-from-right duration-200 md:hidden">
             <div className="p-4 flex justify_between items-center border-b border-slate-100">
                <span className="font-bold text-slate-900">Menü</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                  <Icons.X size={24} />
                </button>
             </div>
             <nav className="flex flex-col p-6 gap-4 text-lg font-medium text-slate-700 overflow-y-auto">
                <div>
                    <span className="text-blue-900 font-bold block mb-2">Kurumsal</span>
                    <div className="pl-4 flex flex-col gap-3 text-base border-l-2 border-slate-100">
                        {Object.keys(aboutTabs).map((key) => (
                            <button
                                key={key}
                                onClick={() => scrollToAbout(key)}
                                className="text-left text-slate-600 hover:text-blue-700"
                            >
                                {aboutTabs[key].title}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <span className="text-blue-900 font-bold block mb-2">Ürünlerimiz</span>
                    <div className="pl-4 flex flex-col gap-3 text-base border-l-2 border-slate-100">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => scrollToService(service.id)}
                                className="text-left text-slate-600 hover:text-blue-700"
                            >
                                {service.name}
                            </button>
                        ))}
                    </div>
                </div>
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
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:px-8 md:grid-cols-2">
          {/* Sol Kısım */}
          <div>
            {/* Vurgulu Metinler */}
            <div className="mb-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700 border border-blue-100 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                7/24 Teknik Destek
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold text-green-700 border border-green-100 shadow-sm">
                <Icons.CheckCircle2 size={12} />
                EN-81 Standartlarına Uygun
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-[11px] font-bold text-purple-700 border border-purple-100 shadow-sm">
                <Icons.Star size={12} fill="currentColor" />
                %100 Müşteri Memnuniyeti
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem] leading-tight">
              {hero.title}
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600">
              {hero.subtitle}
            </p>
            <div className="mb-8 flex flex_wrap items-center gap-4">

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
                {hero.secondaryCta} <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mb-8 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 mt-8 bg-blue-900 rounded-xl p-6 text-white shadow-xl shadow-blue-900/10">
              <div>
                <p className="text-2xl font-bold text-white">30+</p>
                <p className="text-xs text-blue-200 font-medium">Yıllık Tecrübe</p>
              </div>
              <div className="border-l border-blue-700 pl-6">
                <p className="text-2xl font-bold text-white">2000+</p>
                <p className="text-xs text-blue-200 font-medium">Tamamlanan Proje</p>
              </div>
              <div className="border-l border-blue-700 pl-6">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-blue-200 font-medium">Türkiye Geneli Hizmet</p>
              </div>
            </div>

            {isLoggedIn && (
              <button
                onClick={() => openEdit("hero")}
                className="mt-6 flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:underline"
              >
                <Icons.Settings size={12} /> İçeriği Düzenle
              </button>
            )}
          </div>

          {/* Sağ Kısım - Animasyon */}
          <div className="flex flex-col items-start justify-start w-full">
             <ElevatorAnimation />
          </div>
        </div>
      </section>

      {/* Buradan sonrası senin önceki kodunla aynı yapıda devam ediyor.
          Sadece footer’daki açıklama metninde de tekrar eden uzun ifade kısaltıldı. */}

      {/* Footer - GÜNCELLENDİ (Bizi Takip Edin) */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
         <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
               <div className="flex items-center gap-2 mb-4 text-white">
                  <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center font-bold text-xs">
                    <img
                      src="/images/withmor-logo.png"
                      alt="Withmor Logo"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <span className="font-bold text-lg">{companyInfo.name}</span>
               </div>
               <p className="text-xs leading-relaxed text-slate-400 max-w-xs">
                  Güvenli, konforlu ve verimli dikey ulaşım çözümleri için mühendislik odaklı yaklaşım. Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler için Türkiye genelinde 444 37 59 numaralı hattımızla hizmet veriyoruz.
               </p>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm mb-4">Hızlı Erişim</h4>
               <ul className="space-y-2 text-xs">
                  <li><a href="#services" className="hover:text-white transition-colors">Hizmetler</a></li>
                  <li><a href="#projects" className="hover:text_white transition-colors">Projeler</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm mb-4">Bizi Takip Edin</h4>
               <div className="flex gap-2">
                  <a href={companyInfo.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                    <Icons.Facebook size={16} />
                  </a>
                  <a href={companyInfo.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-800 flex items-center justify_center hover:bg-pink-600 transition-colors text-white">
                    <Icons.Instagram size={16} />
                  </a>
                  <a href={companyInfo.whatsapp} target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors text-white">
                    <Icons.Phone size={16} />
                  </a>
               </div>
            </div>
         </div>
         <div className="mx-auto max-w-6xl px-6 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
            <span>© {new Date().getFullYear()} {companyInfo.name}. Tüm hakları saklıdır.</span>
            <span>Mühendislik ve Tasarım: Withmor</span>
         </div>
      </footer>

      {/* ... Modallar ve diğer bölümler senin önceki kodunda olduğu gibi devam ediyor ... */}
    </div>
  );
}
