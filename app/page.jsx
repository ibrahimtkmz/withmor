"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import SocialFeedSection from "../components/SocialFeedSection";

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
              Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler için 24 saat 444 37 59 numaralı hattan ulaşılabilir.
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
                className="absolute left-6 right-6 h-16 z-10 rounded-lg border-2 border-blue-600 bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg flex items-center justify-center overflow-hidden"
                style={{ top: '6%', animation: "elevatorMove 20s ease-in-out infinite" }}
              >
                {/* Kabin Kapısı Efekti */}
                <div className="absolute inset-y-1 left-1/2 w-0.5 bg-blue-800/30" />
                <div className="relative w-full h-full flex items-center justify-center px-2">
                  <img
  src="/images/withmor-logo-beyaz-dolu.png"
  alt="Withmor Logo"
  className="w-full h-full object-contain opacity-95"
/>


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
                  <div className="indicator-circle w-10 h-10 shrink-0 rounded-full border-2 border-slate-300 flex items-center justify-center transition-all duration-300 bg-black overflow-hidden">
  <img
    src="/images/withmor-logo-beyaz.png"
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
            background-color: var(--brand-blue-500);
            color: #FFFFFF;
            border-color: var(--brand-blue-500);
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(var(--brand-blue-500-rgb), 0.5);
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
            background-color: var(--brand-blue-500);
            color: #FFFFFF;
            border-color: var(--brand-blue-500);
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(var(--brand-blue-500-rgb), 0.5);
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
            background-color: var(--brand-blue-500);
            color: #FFFFFF;
            border-color: var(--brand-blue-500);
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(var(--brand-blue-500-rgb), 0.5);
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
            background-color: var(--brand-blue-500);
            color: #FFFFFF;
            border-color: var(--brand-blue-500);
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(var(--brand-blue-500-rgb), 0.5);
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
            background-color: var(--brand-blue-500);
            color: #FFFFFF;
            border-color: var(--brand-blue-500);
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(var(--brand-blue-500-rgb), 0.5);
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

export function WithmorPage({ initialLanguage = "tr" }) {
  const [language, setLanguage] = useState(initialLanguage);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);
  const [translatorReady, setTranslatorReady] = useState(false);
  const translatorInitRef = useRef(false);
  const translations = useMemo(
    () => ({
      tr: {
        dir: "ltr",
        nav: {
          corporate: "Kurumsal",
          products: "Ürünlerimiz",
          projects: "Projeler",
          references: "Referanslar",
          contact: "İletişim",
          menu: "Menü",
          admin: "Yönetici Girişi",
          logout: "Çıkış Yap",
        },
        hero: {
          eyebrow: "Premium Asansör Çözümleri",
          title: "Sizin için Dünyanın Yükünü Kaldırıyoruz",
          subtitle:
            "Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler, mühendislik ve servis çözümleri.",
          manufacturingNote: "İmalatımız haricinde başka firmalara ait ürün yoktur.",
          cta: "Proje Teklifi Al",
          secondaryCta: "Referanslarımızı İnceleyin",
        },
        badges: {
          performance: "Yüksek Performans, Yüksek Güven",
          en81: "EN-81 Standartlarına Uygun",
          satisfaction: "%100 Müşteri Memnuniyeti",
          inHouse: "Sadece Kendi Üretimimizi Kullanıyoruz",
        },
      },
      en: {
        dir: "ltr",
        nav: {
          corporate: "Corporate",
          products: "Products",
          projects: "Projects",
          references: "References",
          contact: "Contact",
          menu: "Menu",
          admin: "Admin Login",
          logout: "Log Out",
        },
        hero: {
          eyebrow: "Premium Elevator Solutions",
          title: "We Lift the World's Weight for You",
          subtitle:
            "Cargo lifts, platforms, villa elevators and horizontal elevators with engineering and service excellence.",
          manufacturingNote: "We do not offer products from other brands—only our own manufacturing.",
          cta: "Get a Project Quote",
          secondaryCta: "View Our References",
        },
        badges: {
          performance: "High Performance, High Safety",
          en81: "Compliant with EN-81 Standards",
          satisfaction: "100% Customer Satisfaction",
          inHouse: "We Use Only Our Own Production",
        },
      },
      ar: {
        dir: "rtl",
        nav: {
          corporate: "الشركة",
          products: "منتجاتنا",
          projects: "المشاريع",
          references: "المراجع",
          contact: "اتصل بنا",
          menu: "القائمة",
          admin: "دخول الإدارة",
          logout: "تسجيل الخروج",
        },
        hero: {
          eyebrow: "حلول مصاعد متميزة",
          title: "نرفع عنك عبء العالم",
          subtitle:
            "مصاعد البضائع، المنصات، مصاعد الفيلات والمصاعد الأفقية مع خدمات هندسية متكاملة.",
          manufacturingNote: "نقدم فقط منتجات تصنيعنا ولا نعرض منتجات شركات أخرى.",
          cta: "احصل على عرض مشروع",
          secondaryCta: "استعرض مراجعنا",
        },
        badges: {
          performance: "أداء عالٍ وسلامة عالية",
          en81: "متوافق مع معايير EN-81",
          satisfaction: "%100 رضا العملاء",
          inHouse: "نستخدم فقط إنتاجنا الخاص",
        },
      },
      ru: {
        dir: "ltr",
        nav: {
          corporate: "О компании",
          products: "Продукция",
          projects: "Проекты",
          references: "Референсы",
          contact: "Контакты",
          menu: "Меню",
          admin: "Вход для админа",
          logout: "Выход",
        },
        hero: {
          eyebrow: "Премиальные лифтовые решения",
          title: "Мы поднимаем мир для вас",
          subtitle:
            "Грузовые лифты, платформы, лифты для вилл и горизонтальные лифты с инженерной поддержкой и сервисом.",
          manufacturingNote: "Мы предлагаем только собственное производство, без сторонних брендов.",
          cta: "Получить предложение",
          secondaryCta: "Посмотреть наши референсы",
        },
        badges: {
          performance: "Высокая производительность и безопасность",
          en81: "Соответствует стандарту EN-81",
          satisfaction: "100% удовлетворенность клиентов",
          inHouse: "Используем только собственное производство",
        },
      },
      fr: {
        dir: "ltr",
        nav: {
          corporate: "Société",
          products: "Produits",
          projects: "Projets",
          references: "Références",
          contact: "Contact",
          menu: "Menu",
          admin: "Connexion admin",
          logout: "Déconnexion",
        },
        hero: {
          eyebrow: "Solutions d'ascenseurs premium",
          title: "Nous soulevons le poids du monde pour vous",
          subtitle:
            "Ascenseurs de charge, plateformes, ascenseurs de villa et ascenseurs horizontaux avec ingénierie et service.",
          manufacturingNote: "Nous proposons uniquement notre propre production, aucun autre fabricant.",
          cta: "Obtenir un devis",
          secondaryCta: "Voir nos références",
        },
        badges: {
          performance: "Haute performance, sécurité élevée",
          en81: "Conforme aux normes EN-81",
          satisfaction: "100% satisfaction client",
          inHouse: "Nous utilisons uniquement notre production",
        },
      },
    }),
    []
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Yönetici işlemleri için herkesin görebileceği canlı kayıt listesi
  const [activityLog, setActivityLog] = useState([]);

  // Tab State
  const [activeAboutTab, setActiveAboutTab] = useState("biz-kimiz");
  const [isExpanded, setIsExpanded] = useState(false);

  // Göster/Gizle State'leri
  const [showAllReferences, setShowAllReferences] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [visibleReviewCount, setVisibleReviewCount] = useState(3);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
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

  const badgeAnimationStyles = `
    .badge-stack { perspective: 1100px; }

    @keyframes badgeSlide {
      0% {
        transform: translate(-140%, -50%) scale(0.9) rotateY(-12deg);
        opacity: 0;
        filter: brightness(0.85) blur(1px);
      }
      8% {
        transform: translate(-80%, -50%) scale(0.97) rotateY(-7deg);
        opacity: 1;
        filter: brightness(0.95);
      }
      22% {
        transform: translate(0%, -50%) scale(1.02) rotateY(0deg);
        opacity: 1;
        filter: brightness(1);
      }
      32% {
        transform: translate(70%, -50%) scale(0.98) rotateY(6deg);
        opacity: 0.9;
        filter: brightness(0.95);
      }
      40% {
        transform: translate(140%, -50%) scale(0.93) rotateY(10deg);
        opacity: 0;
        filter: brightness(0.88) blur(1px);
      }
      100% {
        transform: translate(-140%, -50%) scale(0.9) rotateY(-12deg);
        opacity: 0;
        filter: brightness(0.85) blur(1px);
      }
    }

    .badge-carousel-item {
      animation: badgeSlide 20s ease-in-out infinite;
      animation-fill-mode: both;
      opacity: 0;
    }

    .badge-carousel-item:nth-child(1) { animation-delay: 0s; }
    .badge-carousel-item:nth-child(2) { animation-delay: 5s; }
    .badge-carousel-item:nth-child(3) { animation-delay: 10s; }
    .badge-carousel-item:nth-child(4) { animation-delay: 15s; }

    @media (max-width: 768px) {
      .badge-carousel-item {
        animation-duration: 24s;
      }
      .badge-carousel-item:nth-child(2) { animation-delay: 6s; }
      .badge-carousel-item:nth-child(3) { animation-delay: 12s; }
      .badge-carousel-item:nth-child(4) { animation-delay: 18s; }
    }
  `;

  const languageOptions = useMemo(
    () => [
      { code: "tr", label: "Türkçe", icon: "🇹🇷" },
      { code: "en", label: "English", icon: "🇬🇧" },
      { code: "ar", label: "العربية", icon: "🇸🇦" },
      { code: "ru", label: "Русский", icon: "🇷🇺" },
      { code: "fr", label: "Français", icon: "🇫🇷" },
    ],
    []
  );

  const [hero, setHero] = useState({
    eyebrow: "Premium Asansör Çözümleri",
    title: "Sizin için Dünyanın Yükünü Kaldırıyoruz",
    subtitle:
      "Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler, mühendislik ve servis çözümleri.",
    manufacturingNote: "İmalatımız haricinde başka firmalara ait ürün yoktur.",
    cta: "Proje Teklifi Al",
    secondaryCta: "Referanslarımızı İnceleyin",
  });

  const t = translations[language] || translations.tr;
  const localizedHero = useMemo(
    () => ({ ...hero, ...(t?.hero || {}) }),
    [hero, t]
  );
  const localizedBadges = useMemo(() => t?.badges || translations.tr.badges, [t, translations]);
  const currentLanguage = useMemo(
    () => languageOptions.find((option) => option.code === language) || languageOptions[0],
    [language, languageOptions]
  );

  const [galleryItems, setGalleryItems] = useState([]);
  const [galleryError, setGalleryError] = useState("");
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(8);
  const galleryGroups = useMemo(() => {
    const unique = new Set();
    galleryItems.forEach((item) => unique.add(item.group || "Genel"));
    return Array.from(unique);
  }, [galleryItems]);

  const filteredGalleryItems = useMemo(() => {
    if (activeTab === "all") return galleryItems;
    return galleryItems.filter((item) => (item.group || "Genel") === activeTab);
  }, [activeTab, galleryItems]);

  useEffect(() => {
    setVisibleGalleryCount(8);
  }, [activeTab, galleryItems]);

  useEffect(() => {
    loadActivityLog();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || translatorInitRef.current) return;

    translatorInitRef.current = true;

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "tr",
          includedLanguages: "tr,en,ar,ru,fr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
      setTranslatorReady(true);
    };

    const existingScript = document.getElementById("google-translate-script");
    if (existingScript) {
      if (window.google?.translate) {
        window.googleTranslateElementInit();
      }
      return;
    }

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!translatorReady) return;
    const combo = document.querySelector(".goog-te-combo");
    if (!combo) return;
    if (combo.value === language) return;
    combo.value = language;
    combo.dispatchEvent(new Event("change"));
  }, [language, translatorReady]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
      document.documentElement.dir = t?.dir || "ltr";
    }
  }, [language, t]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("/api/gallery", { cache: "no-store" });
        if (!res.ok) throw new Error("Galeri yüklenemedi");
        const data = await res.json();
        if (Array.isArray(data?.items)) {
          setGalleryItems(
            data.items.map((item) => ({
              type: item.type === "video" ? "video" : "image",
              caption: item.caption || "İçerik",
              group: item.group || "Genel",
              image: item.image || "",
              embedCode: item.embedCode || "",
            }))
          );
        }
      } catch (error) {
        console.error("Galeri alınamadı", error);
        setGalleryError("Galeri verisi yüklenemedi");
      }
    };

    fetchGallery();
  }, []);

  const persistGalleryItems = async (items) => {
    try {
      await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
        cache: "no-store",
      });
    } catch (err) {
      console.error("Galeri verisi kaydedilemedi:", err);
      setGalleryError("Galeri verisi kaydedilemedi");
    }
  };

  const loadActivityLog = async () => {
    try {
      const res = await fetch("/api/activity", { cache: "no-store" });
      if (!res.ok) throw new Error("Kayıtlar alınamadı");
      const data = await res.json();
      if (Array.isArray(data?.items)) setActivityLog(data.items);
    } catch (error) {
      console.error("Kayıtlar yüklenemedi", error);
    }
  };

  const persistActivityEntry = async (entry) => {
    try {
      const res = await fetch("/api/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entry }),
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data?.items)) {
          setActivityLog(data.items);
        }
      }
    } catch (error) {
      console.error("Kayıt kaydedilemedi", error);
    }
  };

  const recordActivity = (action, detail) => {
    const entry = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      action,
      detail,
      timestamp: new Date().toISOString(),
    };
    setActivityLog((prev) => [entry, ...prev].slice(0, 50));
    persistActivityEntry(entry);
  };

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

  // HİZMETLER İÇİN YEREL GÖRSELLER + UZUN SEO METİNLERİ
  const [services, setServices] = useState([
    {
      id: "hidrolik-yuk",
      name: "Hidrolik Yük Asansörü",
      desc: "Ağır sanayi ve depolar için yüksek taşıma kapasitesine sahip, dayanıklı ve güvenli hidrolik kaldırma çözümleri.",
      image: "/images/services/hidrolik-yuk.jpg",
      longDesc:
        "Hidrolik yük asansörleri, özellikle sanayi tesisleri, lojistik depoları ve üretim hatları gibi ağır hizmet gerektiren alanlarda maksimum güvenlik ve dayanıklılık sunmak için tercih edilir. Withmor hidrolik yük asansörleri, yüksek taşıma kapasiteleri, sessiz çalışma karakteristikleri ve titreşimsiz kalkış-duruş kabiliyeti ile operatörlerin işini kolaylaştırırken, ürünlerinizin hasarsız ve kontrollü bir şekilde taşınmasını sağlar. Güçlü hidrolik üniteler, aşırı yük koruma sistemleri ve EN-81 standartlarına uygun emniyet bileşenleri sayesinde, en yoğun çalışma koşullarında dahi güvenilir performans elde edilir. Mevcut bina altyapısına uyumlu, projeye özel kuyu ve platform tasarımlarıyla hem yeni yatırımlarda hem de modernizasyon projelerinde ideal çözümler sunuyoruz. Hidrolik yük asansörlerimiz, uzun ömürlü kullanım ve düşük bakım maliyeti hedeflenerek tasarlanmakta, ağır sanayi ortamlarının zorlu koşullarına dayanacak şekilde üretilmektedir. Ayrıca projelendirme aşamasında sahada yaptığımız keşifler, statik analizler ve taşıma senaryosu planlamaları ile her tesisin gerçek çalışma ihtiyacına göre kapasite ve hız optimizasyonu sağlıyoruz. Periyodik bakım ve servis süreçlerinde ise yağ kalitesinden silindir ve hortum kontrollerine, güvenlik valflerinden kumanda organlarına kadar tüm kritik bileşenler detaylı olarak incelenerek sistemin ömrü uzatılır ve plansız duruş riskleri minimuma indirilir."
    },
    {
      id: "mrl-yuk",
      name: "Makine Dairesiz Yük Asansörü",
      desc: "Bina hacminden tasarruf sağlayan, dişlisiz motor teknolojisiyle enerji verimli ve sessiz çalışan yük asansörleri.",
      image: "/images/services/mrl-yuk.jpg",
      longDesc:
        "Makine dairesiz yük asansörleri, modern mimarinin gerektirdiği alan verimliliğini sağlarken, işletmeler için enerji tasarrufu ve düşük işletme maliyeti avantajı sunar. Withmor MRL yük asansörleri, dişlisiz motor teknolojisi sayesinde daha az enerji tüketir, sessiz çalışma karakteri ile kullanıcı konforunu artırır ve bina içinde ekstra makine dairesi ihtiyacını ortadan kaldırır. Bu sayede hem yeni projelerde tasarım esnekliği kazanılır hem de mevcut binalarda yapılacak iyileştirme çalışmalarında minimum inşaat müdahalesiyle maksimum verim elde edilir. Gelişmiş kumanda sistemleri, hassas seviyeleme özelliği ve frekans kontrollü sürücüler ile yükleriniz her katta güvenle ve yumuşak bir şekilde taşınır. Yüksek yoğunluklu kullanım senaryoları için tasarlanan bu sistemler, lojistik merkezleri, otopark blokları, AVM servis alanları ve üretim tesisleri için ideal çözümdür. Makine dairesiz yük asansörü seçimi, hem mimari hem de işletme tarafında uzun vadede önemli avantajlar sağlar. Bununla birlikte, uzaktan izleme ve arıza teşhis sistemleri sayesinde asansörlerinizin anlık durumunu takip edebilir, proaktif bakım planlaması yaparak beklenmeyen duruşların önüne geçebilirsiniz. Enerji geri kazanım modülleri ve akıllı uyku modları gibi ilave özelliklerle, sürdürülebilirlik hedeflerinize katkıda bulunan çevreci çözümler sunuyoruz."
    },
    {
      id: "homelift",
      name: "Homelift",
      desc: "Müstakil evler, villalar ve dubleks daireler için özel tasarlanmış, minimum kuyu dibi gerektiren konforlu ev asansörleri.",
      image: "/images/services/homelift.jpg",
      longDesc:
        "Homelift çözümlerimiz, müstakil evler, villalar, dubleks ve triplex konutlar için hem konfor hem de prestij sağlayan özel asansör sistemleridir. Geleneksel asansörlere kıyasla daha az kuyu dibi ve tepe boşluğu ihtiyacı duyan homelift sistemleri, mevcut yapınıza minimum müdahale ile entegre edilebilir. Şık kabin tasarımları, cam şaft seçenekleri ve farklı renk-malzeme kombinasyonları sayesinde iç mimari ile uyumlu, estetik bir görünüm sunar. Özellikle yaşlı bireyler veya hareket kısıtlılığı olan kullanıcılar için ev içi hareket özgürlüğünü artırır, katlar arasında güvenli ve zahmetsiz ulaşım sağlar. Düşük enerji tüketimi, sessiz çalışma karakteri ve kolay bakım avantajları ile homelift sistemleri, yaşam alanlarınızı bir üst seviyeye taşırken aynı zamanda mülk değerini de artırır. Withmor olarak, her projede kullanıcı ihtiyaçlarını dinliyor, evinizin mimarisine en uygun çözümü anahtar teslim olarak hayata geçiriyoruz. Ayrıca engelli erişimi, çocuk güvenliği, acil durum senaryoları ve jeneratör/UPS entegrasyonu gibi detayları da proje aşamasında değerlendirerek, sadece konforlu değil aynı zamanda tam anlamıyla güvenli bir ev içi dikey ulaşım deneyimi tasarlıyoruz."
    },
    {
      id: "insan-asansoru",
      name: "İnsan Asansörü",
      desc: "Konutlar, iş merkezleri ve oteller için EN-81 standartlarına uygun, konforlu ve güvenli yolcu taşıma sistemleri.",
      image: "/images/services/insan-asansoru.jpg",
      longDesc:
        "İnsan asansörleri, konut blokları, iş merkezleri, oteller ve karma kullanımlı yapılarda kullanıcıların günlük hayatındaki en kritik dikey ulaşım elemanıdır. Withmor yolcu asansörleri, EN-81 standartlarına uygun güvenlik donanımları, konfor odaklı kabin tasarımları ve enerji verimli tahrik sistemleriyle öne çıkar. Kabin içi aydınlatmadan buton dizaynına, kapı geçiş hızından sürüş konforuna kadar her detay, kullanıcı memnuniyeti ve güvenliği göz önünde bulundurularak tasarlanır. Farklı hız ve taşıma kapasitesi seçenekleriyle binanın trafik yoğunluğuna uygun çözümler sunulur, grup kontrol sistemleriyle yoğun saatlerde bekleme süreleri minimuma indirilir. Sessiz ve titreşimsiz çalışma sağlayan teknolojilerimiz, özellikle konut ve otel uygulamalarında konforu üst seviyeye taşır. Düzenli bakım ve uzaktan izleme opsiyonlarıyla insan asansörleriniz, yapı ömrü boyunca güvenle hizmet vermeye devam eder. Projelendirme aşamasında yaptığımız trafik analizleri, simülasyonlar ve kullanıcı yoğunluğu senaryoları sayesinde, sabah-akşam pik saatlerde dahi akıcı bir yolcu akışı elde etmenize yardımcı oluyor; mimari ekiplerle koordineli çalışarak hem estetik hem de fonksiyonel açıdan kusursuz bir çözüm ortaya koyuyoruz."
    },
    {
      id: "konveyor",
      name: "Konveyör Asansörler",
      desc: "Lojistik merkezleri ve fabrikalarda sürekli malzeme akışını sağlamak için tasarlanan dikey konveyör sistemleri.",
      image: "/images/services/konveyor.jpg",
      longDesc:
        "Konveyör asansörler, özellikle lojistik merkezleri, e-ticaret depoları ve üretim tesislerinde kutu, koli, kaset veya palet gibi malzemelerin katlar arasında kesintisiz ve otomatik olarak taşınması için tasarlanır. Withmor konveyör asansör çözümleri, hat içi otomasyon sistemleri ile entegre çalışarak malzeme akışını hızlandırır, insan gücüne bağımlılığı azaltır ve operasyonel verimliliği önemli ölçüde artırır. Sürekli döngüsel çalışmaya uygun mekanik tasarım, yüksek performanslı motor ve sürücü grupları, sensör destekli güvenlik sistemleri ile hem işletme güvenliği hem de proses sürekliliği güvence altına alınır. Farklı ürün boyutlarına ve depo düzenine göre projeye özel taşıyıcı platform ve konveyör kombinasyonları geliştirilebilir. Bu sayede, hat tasarımınız bozulmadan dikey taşımayı sistemin doğal bir parçası haline getirir, depo içi lojistikte rekabet avantajı sağlayan esnek ve ölçeklenebilir çözümler sunarız. Ayrıca WMS ve ERP gibi üst seviye yazılımlar ile entegre edilen akıllı taşıma senaryoları sayesinde, malzeme akışını gerçek zamanlı izleyebilir, sipariş toplama hızınızı artırabilir ve hatalı sevkiyat riskini azaltabilirsiniz. Güvenlik bariyerleri, acil durdurma devreleri ve sensörlü ürün algılama teknolojileriyle hem personelinizin güvenliğini hem de ürünlerinizin bütünlüğünü koruyoruz."
    },
    {
      id: "panoramik",
      name: "Panoramik Asansörler",
      desc: "AVM ve plazalar için mimari estetiği tamamlayan, cam kabinli ve geniş görüş açılı prestij asansörleri.",
      image: "/images/services/panoramik.jpg",
      longDesc:
        "Panoramik asansörler, binaların mimari karakterini öne çıkaran, kullanıcıya sadece bir ulaşım aracı değil aynı zamanda deneyim sunan prestij çözümleridir. Cam kabinler, geniş görüş açıları ve özel aydınlatma senaryoları ile AVM’ler, oteller, iş merkezleri ve rezidans projeleri için önemli bir tasarım unsuru haline gelir. Withmor panoramik asansörleri, taşıyıcı konstrüksiyondan cam seçimlerine kadar tüm bileşenleriyle hem estetik hem de güvenlik kriterleri dikkate alınarak tasarlanır. Dairesel, yarım daire veya köşeli kabin formlarıyla mimarın tasarım diline uyum sağlanır; paslanmaz çelik, cam ve özel kaplama seçenekleriyle benzersiz görünümler elde edilir. Yüksek konforlu sürüş karakteri, sessiz motor teknolojisi ve hassas seviyeleme sistemi ile kullanıcılar katlar arası geçişi konforlu bir seyahat deneyimi olarak algılar. Gece ve gündüz farklı ambiyanslar oluşturmak için LED tabanlı kabin içi ve şaft aydınlatmaları da opsiyonel olarak projeye dahil edilebilir. Proje geliştirme sürecinde, mimari ekiplerle ortak çalışarak cephe düzeni, taşıyıcı çelik konstrüksiyon ve cam kombinasyonlarını simülasyon ortamında değerlendiriyor; gerekirse mock-up uygulamalarıyla nihai tasarımın kullanıcı deneyimini önceden test ediyoruz. Böylece hem marka algısını güçlendiren hem de yapınıza uzun yıllar değer katacak panoramik asansör çözümleri sunuyoruz."
    },
    {
      id: "yatay-yamac",
      name: "Yatay Yamaç Asansörler",
      desc: "Eğimli arazilerde, sahil tesislerinde veya peyzaj projelerinde ulaşımı kolaylaştıran özel raylı sistemler.",
      image: "/images/services/yatay-yamac.jpg",
      longDesc:
        "Yatay ve yamaç asansörleri, eğimli arazilerde konforlu ve güvenli ulaşım ihtiyacını karşılamak üzere geliştirilen özel raylı sistem çözümleridir. Sahil tesisleri, teraslı yerleşimler, peyzajı güçlü oteller ve topoğrafyası zor alanlarda, kullanıcıların merdivenle kat etmek zorunda kaldığı uzun ve yorucu güzergâhlar bu sistemlerle konforlu bir yolculuğa dönüşür. Withmor yatay-yamaç asansörleri, dış mekân koşullarına dayanıklı malzemeler, korozyon önleyici yüzey kaplamaları ve iklim koşullarına özel tasarım prensipleriyle üretilir. Kabin tasarımları, açık veya kapalı formda, proje konseptine uygun olarak şekillendirilebilir. Güçlü çekiş sistemi, gelişmiş frenleme mekanizmaları ve emniyet sensörleri ile hat boyunca güvenli hareket sağlanır. Hem kullanıcı deneyimini iyileştiren hem de proje alanlarının erişilebilirliğini artıran bu sistemler, özellikle turizm ve üst segmente hitap eden konut projelerinde önemli bir katma değer oluşturur. Projeye başlamadan önce yaptığımız arazi etüdü, eğim analizi ve güzergâh planlaması sayesinde, hem güvenli hem de manzara açısından en keyifli hattı belirliyoruz. Böylece kullanıcılarınız, günlük erişim ihtiyaçlarını karşılarken aynı zamanda peyzajın ve doğal çevrenin tadını çıkarabilecekleri benzersiz bir ulaşım deneyimi yaşamış oluyor."
    },
    {
      id: "ozel-projeler",
      name: "Özel Projeler",
      desc: "Standart dışı kuyu ölçüleri veya özel taşıma ihtiyaçlarınız için terzi işi mühendislik ve tasarım çözümleri.",
      image: "/images/services/ozel-projeler.jpg",
      longDesc:
        "Özel projeler, standart katalog çözümlerinin yeterli olmadığı durumlarda, binanın mimari ve yapısal koşullarına tam uyum sağlayan, tamamen projeye özgü olarak geliştirilen asansör ve platform sistemlerini kapsar. Withmor mühendislik ekibi, sıra dışı kuyu ölçüleri, özel kabin ebatları, farklı taşıma senaryoları veya estetik beklentiler için kapsamlı bir fizibilite ve tasarım süreci yürütür. Bu süreçte, mimar, statik proje ekibi ve işveren temsilcileriyle birlikte çalışılarak hem teknik hem görsel gereksinimler aynı potada eritilir. Örneğin tarihi yapılar, sınırlı kuyu alanına sahip binalar veya çok amaçlı kullanım senaryoları için kompakt, hafif ve modüler çözümler geliştirilir. Proje bazlı üretilen bu sistemlerde güvenlik standartlarından taviz verilmez; tüm hesaplamalar ve komponent seçimleri ulusal ve uluslararası normlara uygun şekilde yapılır. Özel projeler için sunduğumuz terzi işi çözümler, binanıza özgü benzersiz ve yüksek katma değerli bir dikey ulaşım deneyimi oluşturur. İmalat ve montaj aşamalarında esnek planlama, prototip testleri ve sahada yapılan detaylı kontrollerle, ilk andan itibaren hedeflenen performansa ulaşılmasını sağlıyor; uzun vadede de modernizasyon ve kapasite artırımı gibi ihtiyaçlarınızda aynı proje hafızasıyla yanınızda olmaya devam ediyoruz."
    },
  ]);

  const [activeService, setActiveService] = useState(0);
  const [activeServiceModal, setActiveServiceModal] = useState(null);

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

  // REFERANSLAR: Eski referanslar silindi, sadece belirtilen firmalar uygun metinlerle eklendi
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

  // Admin login kalıcılığı (sayfa yenileyince çıkış yapmaması için)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("withmor_admin");
      if (stored === "true") {
        setIsLoggedIn(true);
      }
    }
  }, []);

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
      if (typeof window !== "undefined") {
        window.localStorage.setItem("withmor_admin", "true");
      }
    } else {
      setLoginError("Kullanıcı adı veya şifre hatalı!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("withmor_admin");
    }
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
        setTempValue({ ...galleryItems[index] });
    }

  };

  const openAdd = (type) => {
    if (!isLoggedIn && type !== "reference") {
      setShowLogin(true);
      return;
    }
    setEditModal({ open: true, type, index: null });

    if (type === "service")
      setTempValue({ id: `new-${Date.now()}`, name: "", desc: "", image: "", longDesc: "" });
    if (type === "project") setTempValue({ name: "", type: "", desc: "" });
    if (type === "reference") setTempValue({ company: "", quote: "", name: "", title: "" });
        if (type === "gallery")
      setTempValue({ type: "image", caption: "", group: "", image: "", embedCode: "" });

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
          persistGalleryItems(copy);
          recordActivity("Galeri Güncellendi", `${tempValue.caption || "İsimsiz"} içeriği düzenlendi.`);
        } else {
          const updatedItems = [...galleryItems, tempValue];
          setGalleryItems(updatedItems);
          persistGalleryItems(updatedItems);
          recordActivity("Galeriye Yeni İçerik", `${tempValue.caption || "Yeni içerik"} ${tempValue.type === "video" ? "video" : "görsel"} olarak eklendi.`);
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
        recordActivity("Referans Güncellendi", `${tempValue.company} referansı düzenlendi.`);
      } else {
        setReferences([...references, tempValue]);
        recordActivity("Yeni Referans", `${tempValue.company} referansı eklendi.`);
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
           persistGalleryItems(newGallery);
          recordActivity("Galeri Silindi", `${galleryItems[index]?.caption || "İçerik"} kaldırıldı.`);
    }


    if (type === "project" && index !== null) {
      const newProjects = projects.filter((_, i) => i !== index);
      setProjects(newProjects);
    }

    if (type === "reference" && index !== null) {
      const newReferences = references.filter((_, i) => i !== index);
      setReferences(newReferences);
      recordActivity("Referans Silindi", `${references[index]?.company || "Referans"} kaldırıldı.`);
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

  const handleOpenVideo = (item) => {
    const embed = (item.embedCode || "").trim();
    const content = embed || item.image;
    if (!content) return;

    setActiveVideo({
      type: embed.includes("<iframe") ? "embed" : "file",
      content,
      caption: item.caption || "Video",
    });
  };

   return (
    // KURUMSAL TEMA: Beyaz zemin, Koyu gri metinler, Klasik font
    // overflow-x-hidden eklendi: Mobilde sağa sola kaymayı engeller
    <div
      dir={t?.dir || "ltr"}
      className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 overflow-x-hidden"
    >

      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Navbar - GÜNCELLENDİ (Dropdown Menu Eklendi) */}
      <header
        className={`sticky top-0 z-40 border-b border-slate-200 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 transition-all duration-300 ${
          isScrolled ? "bg-white/95 shadow-md" : "bg-white/80"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-blue-900 px-3 py-1 rounded-md shadow-sm shadow-blue-900/30">
              <img
                src="/images/withmor-logo-beyaz.png"
                alt="Withmor Logo"
                className="h-14 w-auto object-contain"
              />
            </div>

            <div className="leading-tight flex flex-col gap-1">
              <p className="text-[11px] font-semibold text-slate-900 uppercase tracking-[0.2em]">Asansör</p>
              <p className="text-[12px] font-semibold text-blue-700 uppercase tracking-[0.25em]">Teknoloji Merkezi</p>
              <a
                href="tel:4443759"
                className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-blue-800"
              >
                <Icons.Phone className="h-3.5 w-3.5" />
                444 37 59
              </a>
            </div>
          </div>


          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex h-full">
            {/* Kurumsal Dropdown Menü */}
            <div className="relative group h-full flex items-center">
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToAbout('biz-kimiz'); }} className="hover:text-blue-700 transition-colors flex items-center gap-1 py-4">
                    {t.nav.corporate} <Icons.ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
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
                    {t.nav.products} <Icons.ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
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

            <a href="#projects" className="hover:text-blue-700 transition-colors">{t.nav.projects}</a>
            <a href="#references" className="hover:text-blue-700 transition-colors">{t.nav.references}</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="flex flex-col items-end gap-2 md:flex-row md:items-center md:gap-3">
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setLanguageMenuOpen((prev) => !prev)}
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md text-slate-700"
              >
                <span className="text-lg" aria-hidden>
                  {currentLanguage?.icon}
                </span>
                <span>{currentLanguage?.label}</span>
                <Icons.ChevronDown size={16} className={`transition-transform ${languageMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <button
                onClick={() => setLanguageMenuOpen((prev) => !prev)}
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                aria-label="Dil Değiştir"
              >
                <span className="text-xl" aria-hidden>
                  {currentLanguage?.icon}
                </span>
              </button>

              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white/95 p-2 shadow-lg backdrop-blur-sm z-50">
                  <div className="flex flex-col gap-1">
                    {languageOptions.map((option) => (
                      <button
                        key={option.code}
                        onClick={() => {
                          setLanguage(option.code);
                          setLanguageMenuOpen(false);
                        }}
                        className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-blue-50 ${
                          language === option.code ? "bg-blue-100 text-blue-800" : "text-slate-700"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-lg" aria-hidden>
                            {option.icon}
                          </span>
                          {option.label}
                        </span>
                        {language === option.code && <Icons.CheckCircle2 size={16} className="text-blue-600" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
              {isLoggedIn ? t.nav.logout : t.nav.admin}
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
             <div className="p-4 flex justify-between items-center border-b border-slate-100">
                <span className="font-bold text-slate-900">{t.nav.menu}</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                  <Icons.X size={24} />
                </button>
             </div>
             <nav className="flex flex-col p-6 gap-4 text-lg font-medium text-slate-700 overflow-y-auto">
                <div>
                    <span className="text-blue-900 font-bold block mb-2">{t.nav.corporate}</span>
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
                    <span className="text-blue-900 font-bold block mb-2">{t.nav.products}</span>
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
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-700">{t.nav.projects}</a>
                <a href="#references" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-700">{t.nav.references}</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-700">{t.nav.contact}</a>

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
                  {isLoggedIn ? t.nav.logout : t.nav.admin}
                </button>
             </nav>
          </div>
        )}
      </header>

      <style>{badgeAnimationStyles}</style>

      {/* HERO SECTION - KORUNDU */}
      <section className="w-full border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Sol Kısım */}
          <div>
            {/* Vurgulu Metinler */}
            <div className="mb-6 w-full max-w-2xl">
              <div className="relative h-16 sm:h-12 overflow-hidden badge-stack px-2">
                {[
                  {
                    key: "performance",
                    bg: "from-blue-500/70 via-blue-600/70 to-blue-700/70",
                    content: (
                      <>
                        <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                        {localizedBadges.performance}
                      </>
                    ),
                  },
                  {
                    key: "en81",
                    bg: "from-green-500/70 via-green-600/70 to-emerald-700/70",
                    content: (
                      <>
                        <Icons.CheckCircle2 size={12} />
                        {localizedBadges.en81}
                      </>
                    ),
                  },
                  {
                    key: "satisfaction",
                    bg: "from-purple-500/70 via-fuchsia-600/70 to-indigo-700/70",
                    content: (
                      <>
                        <Icons.Star size={12} fill="currentColor" />
                        {localizedBadges.satisfaction}
                      </>
                    ),
                  },
                  {
                    key: "inHouse",
                    bg: "from-amber-400/70 via-orange-500/70 to-red-600/70",
                    content: (
                      <>
                        <Icons.Settings size={12} />
                        {localizedBadges.inHouse}
                      </>
                    ),
                  },
                ].map((badge) => (
                  <div
                    key={badge.key}
                    className="badge-carousel-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative inline-flex">
                      <span
                        className={`absolute inset-[-1px] rounded-full bg-gradient-to-r ${badge.bg} opacity-90 animate-border-flow blur-[1px]`}
                      />
                      <span className="relative inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] sm:text-[11px] font-bold text-slate-800 border border-white/60 shadow-sm backdrop-blur-sm">
                        {badge.content}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem] leading-tight">
              {localizedHero.title}
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600">
              {localizedHero.subtitle}
            </p>
            <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-2 text-[12px] font-semibold text-green-700 border border-green-100 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
              {localizedHero.manufacturingNote}
            </div>
            <div className="mb-8 flex flex-wrap items-center gap-4">

              <button
                onClick={() => setShowQuoteModal(true)}
                className="relative overflow-hidden rounded-lg p-[4px] shadow-lg shadow-blue-900/20 transition hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFF00_14%,#00FF00_28%,#00FFFF_42%,#3569A8_57%,#FF00FF_71%,#FF0000_85%,#FF0000_100%)]" />
                <span className="relative flex h-full w-full items-center justify-center rounded-md bg-blue-900 px-8 py-3 text-sm font-semibold text-white transition group-hover:bg-blue-800">
                  {localizedHero.cta}
                </span>
              </button>

            <a
                href="#references"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-700 group"
              >
                {localizedHero.secondaryCta} <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            {/* Dış sarmalayıcı: hem üstten ayır, hem genişliği sınırla */}
            <div className="mb-8 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 mt-8 bg-blue-900 rounded-xl p-6 mr-3 text-white shadow-xl shadow-blue-900/10">
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
    <p className="text-xs text-blue-200 font-medium">444 37 59</p>
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
        </div>
      </section>

      {/* BİZ KİMİZ (About Us) - TAB'LI YAPI */}
      <section id="about" className="py-20 bg-white border-b border-slate-100 scroll-mt-20">
         <div className="mx-auto max-w-6xl px-6">
           {/* Section Headers (Clickable Tabs) */}
           <div className="flex gap-4 md:gap-12 mb-12 border-b border-slate-200 pb-0 overflow-x-auto scrollbar-hide">
              {Object.keys(aboutTabs).map((key) => (
                <button
                    key={key}
                    onClick={() => { setActiveAboutTab(key); setIsExpanded(false); }}
                    className={`pb-4 text-sm md:text-lg font-bold transition-all duration-300 relative whitespace-nowrap ${
                        activeAboutTab === key 
                        ? "text-blue-900 border-b-2 border-blue-900" 
                        : "text-slate-400 hover:text-slate-600 hover:border-slate-300 border-b-2 border-transparent"
                    }`}
                >
                    {aboutTabs[key].title}
                </button>
              ))}
           </div>

           {/* Tab Content Area */}
           <div key={activeAboutTab} className="grid lg:grid-cols-12 gap-12 items-start animate-in fade-in duration-500">
             {/* Sol: Bina Görseli (Dikey) - GÜNCELLENDİ */}
              <div className="lg:col-span-4">
                 {/* AŞAĞIDAKİ SATIR GÜNCELLENDİ: h-[500px] yerine h-[150px] lg:h-[500px] yapıldı */}
                 <div className="relative h-[150px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-lg group bg-slate-100 flex items-center justify-center">
                    <img 
                        src="/images/about/kurumsal-bina.jpg" 
                        alt="Kurumsal Bina" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                            e.target.style.display = 'none'; 
                            e.target.parentElement.classList.add('flex');
                        }}
                    />
                    <div className="text-center text-slate-400">
                        <Icons.Image className="w-16 h-16 mx-auto mb-2 opacity-50" />
                        <span className="text-sm font-bold uppercase tracking-wider">Görsel Alanı</span>
                    </div>
                 </div>
              </div>

              {/* Orta: Metin İçeriği (Dynamic with Expand) */}
              <div className="lg:col-span-4 flex flex-col justify-center h-full pt-4">
                 {isLoggedIn && (
                    <button 
                        onClick={() => openEdit("aboutTab", activeAboutTab)} 
                        className="mb-4 flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold hover:bg-blue-100 w-fit"
                    >
                        <Icons.Edit size={12}/> Bu Sekmeyi Düzenle
                    </button>
                 )}
                 <h3 className="text-xl font-bold text-slate-800 mb-2">{aboutTabs[activeAboutTab].heading}</h3>
                 <h4 className="text-lg font-bold text-blue-700 mb-6">{aboutTabs[activeAboutTab].subHeading}</h4>

                 <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {aboutTabs[activeAboutTab].text1}
                 </p>
                 <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {aboutTabs[activeAboutTab].text2}
                 </p>

                 {/* Genişletilmiş İçerik */}
                 {isExpanded && (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-500 mb-6">
                        <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-blue-900 pl-4 py-1">
                            {aboutTabs[activeAboutTab].longText}
                        </p>
                    </div>
                 )}

                 <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wide group w-fit hover:text-blue-700 transition-colors"
                 >
                    <span className={`w-1 h-4 ${isExpanded ? "bg-red-500" : "bg-blue-600"} block transition-colors`}></span>
                    {isExpanded ? "Daha Az Göster" : "Daha Fazla"}
                 </button>
              </div>

              {/* Sağ: Kurumsal Kart - Aygün Yılmaz KALDIRILDI */}
              <div className="lg:col-span-4">
                 <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100 h-full flex flex-col justify-center items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md mx-auto bg-slate-200 flex items-center justify-center relative">
                        <Icons.User className="w-16 h-16 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Withmor Kurumsal</h3>
                    <p className="text-sm font-bold text-slate-500 mb-6">Türkiye Genelinde Mühendislik Çözümleri</p>
                    <p className="text-slate-600 text-sm italic relative px-4">
                       <span className="text-4xl text-slate-200 absolute -top-4 left-0">"</span>
                       Withmor, Türkiye genelinde endüstriyel ve özel mimari projelerde 30 yılı aşkın deneyimiyle hizmet vermektedir. Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörlerde güvenilir çözüm ortağınız.
                       <span className="text-4xl text-slate-200 absolute -bottom-8 right-0">"</span>
                    </p>

                    {/* WhatsApp Action Button */}
<button 
  onClick={() => window.open(companyInfo.whatsapp, "_blank")}
  className="mt-8 w-full max-w-xs flex items-center justify-between bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 group"
>
  <div className="text-left">
    <p className="text-[10px] font-medium text-white/90"></p>
    <p className="text-sm font-bold">WhatsApp'tan Yaz</p>
  </div>

  <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
    <Icons.MessageCircle size={20} className="text-white" />
  </div>
</button>

                 </div>
              </div>
           </div>
         </div>
      </section>

      {/* 4 ANA NEDEN (Why Us) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
         <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-slate-900 mb-16 uppercase tracking-tight">
               Bizimle Çalışmanız İçin 4 Ana Neden
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
               {/* Sol: Liste */}
               <div className="space-y-12">
                  <div className="flex gap-6 group">
                     <span className="text-6xl font-extralight text-slate-300 group-hover:text-blue-900 transition-colors">1</span>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Tecrübe ve Uzmanlık</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                           30 yılı aşkın süredir asansör sektöründe faaliyet gösteren firmamız, birikimli deneyimi ve uzman mühendis kadrosuyla projelerinizi en üst seviyede yönetir ve çözümler sunar.
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-6 group">
                     <span className="text-6xl font-extralight text-slate-300 group-hover:text-blue-900 transition-colors">2</span>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Teknoloji Odaklı Yaklaşım</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                           Şirketimiz, sektördeki en son teknolojileri takip ederek, yenilikçi ve ileri teknolojiye dayalı asansör çözümleri sunar. Teknolojinin sunduğu avantajları projelerinize entegre ederek verimliliği artırır.
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-6 group">
                     <span className="text-6xl font-extralight text-slate-300 group-hover:text-blue-900 transition-colors">3</span>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Kalite ve Güvenlik Standartları</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                           Ürünlerimiz uluslararası normlara ve yerel yönetmeliklere uygunluğuyla öne çıkar. Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler için yüksek kalite ve güvenlik standartlarını korurken, müşterilerimize güvenilir çözümler sunarız.
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-6 group">
                     <span className="text-6xl font-extralight text-slate-300 group-hover:text-blue-900 transition-colors">4</span>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Müşteri Odaklı Hizmet</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                           Müşteri memnuniyetini en üst düzeyde tutmak için satış öncesi ve sonrası kesintisiz destek sağlıyoruz. Türkiye’nin her yerinden 24 saat 444 37 59 numaralı telefondan ulaşabileceğiniz teknik servisimizle ihtiyaçlarınıza özel çözümler üretiyoruz.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Sağ: Video Alanı (NEDEN BİZ VİDEOSU) */}
               <div className="relative h-80 lg:h-96 w-full lg:w-4/5 mx-auto rounded-xl overflow-hidden shadow-xl group bg-black border border-slate-100 flex items-center justify-center">
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/videos/neden-biz.mp4"
                    controls
                    muted
                    playsInline
                  />
               </div>
            </div>
         </div>
      </section>

      {/* HİZMETLER (SERVICES) - GRID YAPISI */}
      <main className="w-full bg-white">

        <section id="services" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Hizmetlerimiz</span>
                {isLoggedIn && (
                  <button onClick={() => openAdd("service")} className="flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold hover:bg-blue-100"><Icons.Plus size={10}/> Ekle</button>
                )}
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Ürün ve Hizmet Grupları</h2>
            </div>
          </div>

          {/* YENİ GRID YAPISI - ID Eklendi */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
               <div key={service.id} id={service.id} className="group flex flex-col h-full bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                  {/* Görsel Alanı */}
                  <div className="relative aspect-square overflow-hidden bg-slate-100 flex items-center justify-center text-slate-300">
                     {service.image ? (
                        <>
                           <img 
                              src={service.image} 
                              alt={service.name} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              onError={handleImageError}
                           />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
                        </>
                     ) : (
                        <div className="flex flex-col items-center gap-2">
                           <Icons.Image className="w-12 h-12 opacity-50" />
                           <span className="text-xs font-bold uppercase tracking-wider opacity-60">Görsel Alanı</span>
                        </div>
                     )}
                  </div>

                  {/* İçerik Alanı */}
                  <div className="p-6 flex flex-col flex-1">
                     <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {service.name}
                     </h3>
                     <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-4">
                        {service.desc}
                     </p>

                     <div className="mt-auto pt-4 border-t border-slate-100">
                        <button 
                           onClick={() => setActiveServiceModal(service)}
                           className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-blue-700 transition-colors group/btn"
                        >
                           <span className="w-1 h-3 bg-blue-600 block group-hover/btn:h-5 transition-all"></span>
                           Daha Fazla
                           <Icons.ChevronRight className="w-4 h-4 text-slate-400 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        {isLoggedIn && (
                           <button onClick={() => openEdit("service", index)} className="mt-2 text-[10px] text-slate-400 hover:text-slate-600 underline block">
                              Düzenle
                           </button>
                        )}
                     </div>
                  </div>
               </div>
            ))}
          </div>
        </section>

        {/* Referanslar - MEVCUT YAPI, GÜNCEL İÇERİK */}
        <section id="references" className="bg-blue-900 w-full py-20 text-white relative overflow-hidden">
           <div className="absolute inset-0 pointer-events-none select-none opacity-5">
             <Icons.Quote className="absolute -top-10 -left-10 w-64 h-64 text-white transform rotate-12" />
             <Icons.Quote className="absolute top-1/3 right-10 w-32 h-32 text-white transform -rotate-12" />
             <Icons.Quote className="absolute bottom-10 left-1/4 w-48 h-48 text-white transform rotate-6" />
           </div>

           <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-16">
                 <div>
                    <div className="flex items-center gap-2 mb-6">
                       <h2 className="text-2xl font-bold text-white">Kurumsal Referanslar</h2>
                       <button onClick={() => openAdd("reference")} className="flex items-center gap-1 text-[10px] bg-blue-800 border border-blue-700 text-blue-200 px-2 py-0.5 rounded font-bold hover:bg-blue-700"><Icons.Plus size={10}/> Ekle</button>
                    </div>

                    <div className="space-y-4">
                      {references.slice(0, showAllReferences ? references.length : 3).map((ref, index) => (
                        <div key={index} className="bg-blue-800 p-5 rounded-xl border border-blue-700 shadow-lg relative transition hover:border-blue-600 animate-in fade-in zoom-in duration-300">
                           <span className="text-4xl text-blue-600 absolute top-2 right-4 font-serif">"</span>
                           <p className="text-sm text-blue-50 italic mb-4 relative z-10">{ref.quote}</p>
                           <div className="flex items-center justify-between border-t border-blue-700 pt-3">
                             <div>
                                <p className="text-sm font-bold text-white">{ref.company}</p>
                                <p className="text-xs text-blue-300">{ref.name} - {ref.title}</p>
                             </div>
                             {isLoggedIn && <button onClick={() => openEdit("reference", index)} className="flex items-center gap-1 text-xs text-blue-300 hover:text-white"><Icons.Settings size={12}/> Düzenle</button>}
                           </div>
                        </div>
                      ))}
                    </div>

                    {references.length > 3 && (
                      <div className="mt-6 text-center">
                        <button 
                          onClick={() => setShowAllReferences(!showAllReferences)} 
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500 bg-blue-800/50 text-sm font-semibold text-blue-100 hover:bg-blue-800 hover:text-white transition-all hover:border-blue-400"
                        >
                          {showAllReferences ? (
                            <>Daha Az Göster <Icons.ChevronUp size={16}/></>
                          ) : (
                            <>Daha Fazla Göster ({references.length - 3}) <Icons.ChevronDown size={16}/></>
                          )}
                        </button>
                      </div>
                    )}
                 </div>

                 <div>
                    <div className="flex items-center justify-between mb-6">
                       <h2 className="text-2xl font-bold text-white">Müşteri Deneyimi</h2>
                       <a href="https://maps.app.goo.gl/mfxnQ3ngTwYtVyAN6" target="_blank" rel="noreferrer" className="text-xs font-semibold text-blue-200 hover:text-white hover:underline">Google'da Görüntüle →</a>
                    </div>
                    <div className="bg-blue-800 rounded-2xl border border-blue-700 p-6 shadow-lg space-y-6">
                       <div className="flex items-center gap-4">
                          <div className="text-4xl font-bold text-white">4.9</div>
                          <div>
                             <div className="flex text-amber-400 text-sm"><Icons.Star fill="currentColor" size={16}/><Icons.Star fill="currentColor" size={16}/><Icons.Star fill="currentColor" size={16}/><Icons.Star fill="currentColor" size={16}/><Icons.Star fill="currentColor" size={16}/></div>
                             <p className="text-xs text-blue-300 mt-1">120+ Google Yorumu</p>
                          </div>
                       </div>

                       {/* Facebook Odaklı Müşteri Deneyimi Bloğu */}
                       <div className="bg-blue-900/60 rounded-xl p-4 border border-blue-600 flex items-start gap-3">
                         <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                           <Icons.Facebook size={18} />
                         </div>
                         <div className="text-xs">
                           <p className="font-bold text-white mb-1">Facebook Topluluğu</p>
                           <p className="text-blue-100 mb-1">Facebook üzerinden <span className="font-semibold">4.8 / 5 müşteri memnuniyeti</span>.</p>
                           <p className="text-blue-100 mb-1">Gerçek kullanıcı yorumları ve projelere dair geri bildirimler.</p>
                           <p className="text-blue-200">Topluluk güveni ile büyüyen bir marka: Withmor.</p>
                         </div>
                       </div>

                       <div className="space-y-4">
                          {googleReviews.slice(0, visibleReviewCount).map((review) => (
                             <div key={review.id} className="border-b border-blue-700 last:border-0 pb-4 last:pb-0 animate-in fade-in slide-in-from-top-4 duration-300">
                                <div className="flex items-center justify-between mb-1">
                                   <span className="text-sm font-bold text-white">{review.name}</span>
                                   <span className="text-[10px] text-blue-300">{review.date}</span>
                                </div>
                                <div className="flex text-[10px] text-amber-400 mb-1">
                                  {Array.from({length: review.rating}).map((_, i) => (
                                    <Icons.Star key={i} size={12} fill="currentColor" />
                                  ))}
                                </div>
                                <p className="text-xs text-blue-100 line-clamp-2">{review.text}</p>
                             </div>
                          ))}
                       </div>

                       <div className="mt-2 text-center border-t border-blue-700 pt-4">
                          <button 
                            onClick={() => {
                              if (visibleReviewCount >= googleReviews.length) {
                                setVisibleReviewCount(3);
                              } else {
                                setVisibleReviewCount(prev => prev + 3);
                              }
                            }}
                            className="text-xs font-semibold text-blue-300 hover:text-white flex items-center justify-center gap-1 mx-auto transition-colors"
                          >
                            {visibleReviewCount >= googleReviews.length ? (
                              <>Daha Az Göster <Icons.ChevronUp size={14}/></>
                            ) : (
                              <>Daha Fazla Yorum Yükle <Icons.ChevronDown size={14}/></>
                            )}
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* YENİ İLETİŞİM VE FORM BÖLÜMÜ (GÜNCELLENDİ) */}
        <section id="contact" className="py-20 bg-white scroll-mt-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* SOL TARAF: İletişim Bilgileri ve Sosyal Medya */}
              <div className="space-y-8 sticky top-24">
                <div>
                  <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Bize Ulaşın</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                    Projelerinizi Birlikte <br/> Hayata Geçirelim
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Sorularınız, proje talepleriniz veya teknik destek ihtiyaçlarınız için Türkiye’nin her yerinden 24 saat 444 37 59 numaralı telefondan bize ulaşabilirsiniz.
                  </p>
                </div>

                {/* İletişim Listesi */}
                <div className="space-y-6">
                  
                  {/* 1. Adres Alanı (YENİ EKLENDİ) */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                      <Icons.MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase">Adres</p>
                      <p className="text-base font-medium text-slate-900 leading-snug">
                        {companyInfo.address}
                      </p>
                      <a href="#map-view" onClick={(e) => {e.preventDefault(); document.getElementById('google-map')?.scrollIntoView({behavior: 'smooth'})}} className="text-xs text-blue-600 font-bold hover:underline mt-1 block">
                        Haritada Göster ↓
                      </a>
                    </div>
                  </div>

                  {/* 2. Telefon */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                      <Icons.Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase">Telefon & WhatsApp</p>
                      <div className="flex flex-col gap-1">
                        <div>
                          <span className="text-[11px] font-semibold text-slate-400 uppercase mr-2">Sabit Hat</span>
                          <a href={`tel:${companyInfo.phone}`} className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
                            {companyInfo.phone}
                          </a>
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold text-slate-400 uppercase mr-2">GSM / WhatsApp</span>
                          <a href={`tel:${companyInfo.gsm}`} className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
                            {companyInfo.gsm}
                          </a>
                        </div>
                      </div>
                      <p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Türkiye’nin her yerinden 24 saat 444 37 59 numaralı telefondan ulaşılabilir.
                      </p>
                    </div>
                  </div>

                  {/* 3. E-Posta */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                      <Icons.Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase">E-Posta</p>
                      <div className="flex flex-col gap-1">
                        <a href="mailto:teknik@withmor.com.tr" className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
                          teknik@withmor.com.tr
                        </a>
                        <a href="mailto:muhasebe@withmor.com.tr" className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
                          muhasebe@withmor.com.tr
                        </a>
                        <a href="mailto:info@withmor.com.tr" className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors">
                          info@withmor.com.tr
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sosyal Medya Butonları */}
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-4">Sosyal Medyada Biz</p>
                  <div className="flex flex-wrap gap-3">
                    {/* WhatsApp */}
                    <a href={companyInfo.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-white hover:bg-[#128C7E] transition-all transform hover:-translate-y-1 shadow-md shadow-green-100">
                      <Icons.MessageCircle size={20} /> <span className="font-bold text-sm">WhatsApp</span>
                    </a>
                    {/* Facebook */}
                    <a href={companyInfo.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-all transform hover:-translate-y-1 shadow-md shadow-blue-100">
                      <Icons.Facebook size={20} /> <span className="font-bold text-sm">Facebook</span>
                    </a>
                    {/* Instagram */}
                    <a href={companyInfo.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-md shadow-pink-100">
                      <Icons.Instagram size={20} /> <span className="font-bold text-sm">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* SAĞ TARAF: Form ve Harita */}
              <div className="flex flex-col gap-8">
                
                {/* 1. RGB Animasyonlu İletişim Formu */}
                <div className="relative group z-10">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-600 via-blue-600 to-green-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative overflow-hidden rounded-2xl p-[3px]">
                      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFF00_14%,#00FF00_28%,#00FFFF_42%,#3569A8_57%,#FF00FF_71%,#FF0000_85%,#FF0000_100%)]" />
                      <div className="relative bg-white h-full rounded-xl p-6 md:p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Hızlı İletişim Formu</h3>
                        <form onSubmit={handleMainContactSubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-500 uppercase">Ad Soyad</label>
                              <input required type="text" placeholder="Adınız Soyadınız" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors" value={mainContactForm.name} onChange={(e) => setMainContactForm({...mainContactForm, name: e.target.value})} />
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-500 uppercase">Telefon</label>
                              <input required type="tel" placeholder="05XX..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors" value={mainContactForm.phone} onChange={(e) => setMainContactForm({...mainContactForm, phone: e.target.value})} />
                            </div>
                          </div>
                          <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-500 uppercase">E-Posta</label>
                              <input type="email" placeholder="ornek@mail.com" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors" value={mainContactForm.email} onChange={(e) => setMainContactForm({...mainContactForm, email: e.target.value})} />
                          </div>
                          <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-500 uppercase">Konu</label>
                              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors" value={mainContactForm.subject} onChange={(e) => setMainContactForm({...mainContactForm, subject: e.target.value})}>
                                <option value="Malzeme teklifi iste">Malzeme teklifi iste</option>
                                <option value="İnsan asansörleri">İnsan asansörleri</option>
                                <option value="Yük asansörleri">Yük asansörleri</option>
                                <option value="Araç asansörleri">Araç asansörleri</option>
                                <option value="Yamaç asansörleri">Yamaç asansörleri</option>
                                <option value="Villa & engelli asansörü">Villa & engelli asansörü</option>
                              </select>
                          </div>
                          <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-500 uppercase">Mesajınız</label>
                              <textarea required rows={3} placeholder="Mesajınızı buraya yazınız..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors resize-none" value={mainContactForm.message} onChange={(e) => setMainContactForm({...mainContactForm, message: e.target.value})}></textarea>
                          </div>
                          <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 mt-2 shadow-lg shadow-slate-300/50">
                            <Icons.ArrowRight className="w-5 h-5" /> WhatsApp ile Gönder
                          </button>
                        </form>
                      </div>
                    </div>
                </div>


              </div>
            </div>
          </div>
        </section>


      {/* GALERİ BÖLÜMÜ */}
      <section id="gallery" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 space-y-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left relative">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Galeri</h2>
              <p className="text-slate-500 text-sm">
                Ürün, üretim ve referans projelerinden görseller ve videolar.
              </p>
              {galleryError && (
                <p className="text-xs text-red-600 mt-2">{galleryError}</p>
              )}
            </div>
            {isLoggedIn && (
              <button
                onClick={() => openAdd("gallery")}
                className="inline-flex items-center gap-2 self-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100"
              >
                <Icons.Plus size={12} /> Yeni içerik ekle
              </button>
            )}
          </div>

          <section className="space-y-6">
            <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition whitespace-nowrap ${
                  activeTab === "all"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Tümü
              </button>
              {galleryGroups.map((group) => (
                <button
                  key={group}
                  type="button"
                  onClick={() => setActiveTab(group)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition whitespace-nowrap ${
                    activeTab === group
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>

            {filteredGalleryItems.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-200 bg-white p-8 text-center text-slate-500">
                Henüz galeri içeriği eklenmedi.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredGalleryItems.slice(0, visibleGalleryCount).map((item, index) => {
                  const poster = item.image;
                  const isVideo = item.type === "video";
                  return (
                    <div
                      key={`${item.caption}-${index}`}
                      className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative aspect-square bg-slate-50">
                        {isVideo ? (
                          <button
                            onClick={() => handleOpenVideo(item)}
                            className="absolute inset-0 w-full h-full"
                          >
                            {poster ? (
                              <img
                                src={poster}
                                alt={item.caption}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={handleImageError}
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                <Icons.Image className="w-10 h-10" />
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-100 group-hover:bg-black/40 transition-colors">
                              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg">
                                ▶
                              </span>
                            </div>
                          </button>
                        ) : (
                          <img
                            src={poster}
                            alt={item.caption}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={handleImageError}
                          />
                        )}
                      </div>

                      <div className="absolute left-2 top-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase text-slate-700 shadow-sm">
                        {isVideo ? "Video" : "Görsel"}
                      </div>

                      {isLoggedIn && (
                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <button
                            onClick={() => openEdit("gallery", galleryItems.indexOf(item))}
                            className="p-1.5 bg-white rounded-full text-slate-600 hover:text-blue-600 shadow-sm"
                          >
                            <Icons.Edit size={12} />
                          </button>
                          <button
                            onClick={() =>
                              setEditModal({
                                open: true,
                                type: "gallery",
                                index: galleryItems.indexOf(item),
                              })
                            }
                            className="p-1.5 bg-white rounded-full text-red-500 hover:text-red-700 shadow-sm"
                          >
                            <Icons.Trash size={12} />
                          </button>
                        </div>
                      )}

                      <div className="p-3 flex items-center justify-between border-t border-slate-100 bg-white/80">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 truncate">
                            {item.caption}
                          </p>
                          <p className="text-[11px] text-slate-500 truncate">{item.group}</p>
                        </div>
                        {isVideo && (
                          <button
                            onClick={() => handleOpenVideo(item)}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-inner hover:bg-blue-100"
                          >
                            ▶
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {filteredGalleryItems.length > visibleGalleryCount && (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleGalleryCount((prev) =>
                      Math.min(prev + 8, filteredGalleryItems.length)
                    )
                  }
                  className="mt-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100"
                >
                  Daha fazlasını gör
                </button>
              </div>
            )}
          </section>
        </div>
      </section>
      <SocialFeedSection />
      {/* Video Büyütme Modalı */}
{activeVideo && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    <div className="relative w-full max-w-3xl px-4">
      {/* Kapat butonu */}
      <button
        onClick={() => setActiveVideo(null)}
        className="absolute -top-10 right-4 text-sm font-semibold text-slate-200 hover:text-white"
      >
        Kapat ✕
      </button>

      <div className="w-full rounded-2xl bg-black overflow-hidden shadow-2xl">
        <div className="aspect-video w-full bg-black flex items-center justify-center">
          {activeVideo.type === "embed" ? (
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: activeVideo.content }}
            />
          ) : (
            <video
              src={activeVideo.content}
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
            />
          )}
        </div>
      </div>
    </div>
  </div>
)}
      </main>

      {/* Footer - GÜNCELLENDİ (Bizi Takip Edin) */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
         <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
               <div className="flex items-center gap-2 mb-4 text-white">
                  <div className="h-8 w-24 flex items-center">
                    <img
                      src="/images/withmor-logo-beyaz.png"
                      alt="Withmor Logo"
                      className="h-15 w-auto object-contain"
                    />
                  </div>
                  <span className="font-bold text-lg">{companyInfo.name}</span>
               </div>
               <p className="text-xs leading-relaxed text-slate-400 max-w-xs">
                  Güvenli, konforlu ve verimli dikey ulaşım çözümleri için mühendislik odaklı yaklaşım. Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler için Türkiye’nin her yerinden 24 saat 444 37 59 numaralı hattımızla hizmet.
               </p>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm mb-4">{t.nav.menu}</h4>
               <ul className="space-y-2 text-xs">
                  <li><a href="#services" className="hover:text-white transition-colors">{t.nav.products}</a></li>
                  <li><a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
               </ul>
            </div>
            <div>
               {/* BAŞLIK DEĞİŞTİRİLDİ */}
               <h4 className="text-white font-bold text-sm mb-4">Bizi Takip Edin</h4>
               <div className="flex gap-2">
                  <a href={companyInfo.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                    <Icons.Facebook size={16} />
                  </a>
                  <a href={companyInfo.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-white">
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

      {/* Modallar */}
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            <h3 className="mb-2 text-lg font-bold text-slate-900">Yönetici Girişi</h3>
            <p className="mb-4 text-xs text-slate-500">Panel erişimi için yetkili bilgilerinizi giriniz.</p>
            {loginError && <div className="mb-3 rounded bg-red-50 p-2 text-center text-xs text-red-600">{loginError}</div>}
            <form onSubmit={handleLogin} className="space-y-3 text-xs">
              <input type="text" name="username" placeholder="Kullanıcı adı" className="w-full rounded border border-slate-200 p-2.5 outline-none focus:border-blue-600" />
              <input type="password" name="password" placeholder="Şifre" className="w-full rounded border border-slate-200 p-2.5 outline-none focus:border-blue-600" />
              <button type="submit" className="w-full rounded bg-blue-900 py-2.5 font-bold text-white hover:bg-blue-800">Giriş Yap</button>
            </form>
            <button onClick={() => setShowLogin(false)} className="mt-3 w-full text-xs text-slate-400 hover:text-slate-600">İptal</button>
          </div>
        </div>
      )}
      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            <h3 className="mb-1 text-lg font-bold text-slate-900">Proje Teklifi Al</h3>
            <p className="mb-5 text-xs text-slate-500">Bilgileri doldurun, WhatsApp üzerinden uzmanlarımız size ulaşsın.</p>
            <form onSubmit={handleQuoteSubmit} className="space-y-3">
               <div className="grid grid-cols-2 gap-3">
                  <input required type="text" placeholder="Ad Soyad" value={quoteForm.name} onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
                  <input required type="tel" placeholder="Telefon" value={quoteForm.phone} onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
               </div>
               <select value={quoteForm.projectType} onChange={(e) => setQuoteForm({...quoteForm, projectType: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600 bg-white">
                  <option value="Malzeme teklifi iste">Malzeme teklifi iste</option>
                  <option value="İnsan asansörleri">İnsan asansörleri</option>
                  <option value="Yük asansörleri">Yük asansörleri</option>
                  <option value="Araç asansörleri">Araç asansörleri</option>
                  <option value="Yamaç asansörleri">Yamaç asansörleri</option>
                  <option value="Villa & engelli asansörü">Villa & engelli asansörü</option>
               </select>
               <div className="grid grid-cols-2 gap-3">
                  <input type="number" placeholder="Durak Sayısı" value={quoteForm.floorCount} onChange={(e) => setQuoteForm({...quoteForm, floorCount: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
                  <input type="text" placeholder="Konum / Şehir" value={quoteForm.location} onChange={(e) => setQuoteForm({...quoteForm, location: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
               </div>
               <textarea rows={3} placeholder="Ek Notlar..." value={quoteForm.note} onChange={(e) => setQuoteForm({...quoteForm, note: e.target.value})} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600 resize-none" />
               <button type="submit" className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] py-2.5 text-sm font-bold text-white hover:bg-[#128C7E]">
                  <Icons.Phone size={16} /> WhatsApp ile Gönder
               </button>
            </form>
            <button onClick={() => setShowQuoteModal(false)} className="mt-4 w-full text-xs text-slate-400 hover:text-slate-600">Kapat</button>
          </div>
        </div>
      )}

      {/* Hizmet Detay Popup (SEO için uzun metin + görsel) */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <h3 className="text-lg font-bold text-slate-900">
                {activeServiceModal.name} – Detaylı Hizmet Bilgisi
              </h3>
              <button
                onClick={() => setActiveServiceModal(null)}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                <Icons.X size={18} />
              </button>
            </div>

            {/* Görsel */}
            <div className="relative w-full bg-slate-100 overflow-hidden">
              {activeServiceModal.image ? (
                <img
                  src={activeServiceModal.image}
                  alt={activeServiceModal.name}
                  className="w-full h-full object-contain"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 py-6">
                  <Icons.Image className="w-10 h-10 mr-2" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Hizmet Görseli</span>
                </div>
              )}
            </div>

            {/* Metin */}
            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeServiceModal.longDesc || activeServiceModal.desc}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveServiceModal(null)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    Kapat
                  </button>
                  {isLoggedIn && (
                    <button
                      onClick={() => {
                        const index = services.findIndex(s => s.id === activeServiceModal.id);
                        if (index !== -1) {
                          openEdit("service", index);
                        }
                      }}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-900 text-white hover:bg-blue-800 flex items-center gap-1"
                    >
                      <Icons.Edit size={12} /> İçeriği Düzenle
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal - GÜNCELLENDİ (Dinamik İçerik Yönetimi) */}
      {editModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            <h3 className="mb-4 text-lg font-bold text-slate-900">{editModal.index === null ? "Yeni Ekle" : "İçeriği Düzenle"}</h3>
            <div className="space-y-3">
               {Object.keys(tempValue).map((key) => {
                  // Filtreleme: 'id' gibi sistem alanlarını gizle
                  if (key === 'id' || key === 'title') return null;

                  return (
                    <div key={key}>
                       <label className="mb-1 block text-[10px] font-bold text-slate-500 uppercase">
                          {key === 'desc' ? 'Açıklama' : 
                           key === 'name' ? 'Başlık' : 
                           key === 'image' ? 'Resim URL' : 
                           key === 'heading' ? 'Ana Başlık' :
                           key === 'subHeading' ? 'Alt Başlık' :
                           key === 'text1' ? 'Paragraf 1' :
                           key === 'text2' ? 'Paragraf 2' :
                           key === 'quote' ? 'Yorum' :
                           key === 'company' ? 'Şirket' :
                           key === 'longDesc' ? 'Uzun Açıklama (SEO)' :
                           key}
                       </label>
                       {key === "desc" || key === "quote" || key === "about" || key.startsWith("text") || key === "longText" || key === "longDesc" ? (
                          <textarea rows={key === "longText" || key === "longDesc" ? 8 : 4} value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
                       ) : (
                          <input type="text" value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
                       )}
                    </div>
                  );
               })}
            </div>
            <div className="mt-6 flex justify-between gap-3">
               {editModal.index !== null && ["service", "project", "reference", "gallery"].includes(editModal.type) ? (
                  <button onClick={handleDelete} className="rounded border border-red-200 text-red-600 px-4 py-2 text-xs font-bold hover:bg-red-50 flex items-center gap-1"><Icons.Trash size={12}/> Sil</button>
               ) : <div/>}
               <div className="flex gap-2">
                  <button onClick={() => setEditModal({open: false, type: null, index: null})} className="rounded border border-slate-200 text-slate-600 px-4 py-2 text-xs font-bold hover:bg-slate-50">Vazgeç</button>
                  <button onClick={saveEdit} className="rounded bg-blue-900 text-white px-6 py-2 text-xs font-bold hover:bg-blue-800">{editModal.index === null ? "Ekle" : "Kaydet"}</button>
               </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-border-flow {
          animation: border-flow 6s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}

export default function Page() {
  return <WithmorPage initialLanguage="tr" />;
}
