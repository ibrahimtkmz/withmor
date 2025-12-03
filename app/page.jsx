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
  Plus: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="M12 5v14"/></svg>),
  ChevronDown: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>),
  ChevronUp: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m18 15-6-6-6 6"/></svg>),
  MessageCircle: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>),
  Quote: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>),
  ChevronsRight: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>),
  Image: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>),
};

// Withmor Teknika Lift - KURUMSAL WEB SİTESİ

function ElevatorAnimation() {
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
            <p className="text-sm text-slate-500 leading-relaxed">Geleceğin teknolojisi ile donatılmış, güvenli ve konforlu asansör çözümleri.</p>
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
                  style={{ top: `${(index + 1) * 18}%` }}
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

            {/* SAĞ: Dışarı Alınan Kat Göstergeleri */}
            <div className="flex flex-col justify-between h-[18rem] py-2 w-full">
              {[5, 4, 3, 2, 1].map((floor) => (
                <div 
                  key={floor} 
                  data-floor={floor} // Veri etiketi eklendi
                  className="floor-indicator flex items-center gap-3 group w-full"
                >
                  {/* Yuvarlak Kat İkonu - Stiller CSS'ten gelecek */}
                  <div className="indicator-circle w-10 h-10 shrink-0 rounded-full border-2 border-slate-300 flex items-center justify-center text-sm font-bold text-slate-400 transition-all duration-300">
                    {floor}
                  </div>
                  {/* Kat Yazısı */}
                  <span className="indicator-text text-xs font-medium text-slate-400 uppercase tracking-wide whitespace-nowrap transition-colors">
                    {floor === 1 ? 'Zemin' : `${floor}. Kat`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Asansör Hareketi: 1. Kattan 5. Kata Doğru (Aşağıdan Yukarı) */
        @keyframes elevatorMove {
          0%, 15% { transform: translateY(390%); }    /* 1. Kat Bekle */
          20%, 35% { transform: translateY(292%); }   /* 2. Kat Bekle */
          40%, 55% { transform: translateY(195%); }   /* 3. Kat Bekle */
          60%, 75% { transform: translateY(98%); }    /* 4. Kat Bekle */
          80%, 95% { transform: translateY(0%); }     /* 5. Kat Bekle */
          100% { transform: translateY(390%); }       /* Başa Dön */
        }

        /* Kat Işığı Animasyonları */
        
        /* 5. Kat */
        @keyframes floorLight5 { 
          80%, 95% { background-color: #2563EB; color: white; border-color: #2563EB; transform: scale(1.1); box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5); } 
          0%, 79%, 96%, 100% { background-color: transparent; color: #94A3B8; border-color: #CBD5E1; transform: scale(1); box-shadow: none; }
        }
        
        /* 4. Kat */
        @keyframes floorLight4 { 
          60%, 75% { background-color: #2563EB; color: white; border-color: #2563EB; transform: scale(1.1); box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5); }
          0%, 59%, 76%, 100% { background-color: transparent; color: #94A3B8; border-color: #CBD5E1; transform: scale(1); }
        }
        
        /* 3. Kat */
        @keyframes floorLight3 { 
          40%, 55% { background-color: #2563EB; color: white; border-color: #2563EB; transform: scale(1.1); box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5); }
          0%, 39%, 56%, 100% { background-color: transparent; color: #94A3B8; border-color: #CBD5E1; transform: scale(1); }
        }
        
        /* 2. Kat */
        @keyframes floorLight2 { 
          20%, 35% { background-color: #2563EB; color: white; border-color: #2563EB; transform: scale(1.1); box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5); }
          0%, 19%, 36%, 100% { background-color: transparent; color: #94A3B8; border-color: #CBD5E1; transform: scale(1); }
        }
        
        /* 1. Kat */
        @keyframes floorLight1 { 
          0%, 15% { background-color: #2563EB; color: white; border-color: #2563EB; transform: scale(1.1); box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5); }
          16%, 100% { background-color: transparent; color: #94A3B8; border-color: #CBD5E1; transform: scale(1); }
        }
        
        /* Animasyonları Uygula */
        div[data-floor="5"] .indicator-circle { animation: floorLight5 20s infinite; }
        div[data-floor="4"] .indicator-circle { animation: floorLight4 20s infinite; }
        div[data-floor="3"] .indicator-circle { animation: floorLight3 20s infinite; }
        div[data-floor="2"] .indicator-circle { animation: floorLight2 20s infinite; }
        div[data-floor="1"] .indicator-circle { animation: floorLight1 20s infinite; }
        
        /* Metin Renk Değişimi için (Opsiyonel) */
        @keyframes textLight5 { 80%, 95% { color: #2563EB; } 0%, 79%, 96%, 100% { color: #94A3B8; } }
        @keyframes textLight4 { 60%, 75% { color: #2563EB; } 0%, 59%, 76%, 100% { color: #94A3B8; } }
        @keyframes textLight3 { 40%, 55% { color: #2563EB; } 0%, 39%, 56%, 100% { color: #94A3B8; } }
        @keyframes textLight2 { 20%, 35% { color: #2563EB; } 0%, 19%, 36%, 100% { color: #94A3B8; } }
        @keyframes textLight1 { 0%, 15% { color: #2563EB; } 16%, 100% { color: #94A3B8; } }
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

  // Göster/Gizle State'leri
  const [showAllReferences, setShowAllReferences] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false); // Projeler için yeni state
  const [visibleReviewCount, setVisibleReviewCount] = useState(3);

  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    projectType: "Konut Asansörü",
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
      "Konut binalarından iş merkezlerine kadar özel tasarım, montaj ve bakım hizmetlerinde yüksek mühendislik standartları.",
    cta: "Proje Teklifi Al",
    secondaryCta: "Referanslarımızı İnceleyin",
  });

  // Tab İçerik Verisi
  const aboutTabs = {
    "biz-kimiz": {
        title: "Biz Kimiz?",
        heading: "Mühendislik Temelli Çözüm Ortağınız",
        subHeading: "15 Yıllık Tecrübeyle Dikey Ulaşımda Güven...",
        text1: "İstanbul'un dinamik atmosferinde, asansör sektöründe 15 yıldır mühendislik odaklı çözümler üretiyoruz. Özveriyle, tutkuyla ve teknik uzmanlıkla şekillendirdiğimiz projelerimizde, sadece bir asansör değil, güvenli bir yolculuk deneyimi sunuyoruz.",
        text2: "Montaj ve modernizasyonun ötesinde, EN-81 standartlarına tam uyumlu, enerji verimliliği yüksek sistemler tasarlıyoruz. Sektördeki teknolojik gelişmeleri yakından takip ederek, müşterilerimize en yenilikçi dikey ulaşım çözümlerini sunmayı ilke edindik."
    },
    "yetkinliklerimiz": {
        title: "Yetkinliklerimiz",
        heading: "Teknolojik Altyapı ve Uzman Kadro",
        subHeading: "Her Projeye Özel Mühendislik Çözümleri...",
        text1: "Makine dairesiz (MRL) asansörlerden, yüksek tonajlı hidrolik yük platformlarına kadar geniş bir teknik yetkinliğe sahibiz. Projelendirme aşamasından ruhsatlandırma sürecine kadar tüm adımları kendi bünyemizdeki mühendis kadromuzla yönetiyoruz.",
        text2: "PLC tabanlı otomasyon sistemleri, akıllı trafik yönetimi ve rejeneratif enerji üniteleri gibi ileri teknolojileri projelerimize entegre ediyoruz. Withmor Teknika olarak, karmaşık mimari projelere özel şaft içi çelik konstrüksiyon çözümleri de sunmaktayız."
    },
    "prensiplerimiz": {
        title: "Çalışma Prensiplerimiz",
        heading: "Önce Güvenlik, Sonra Konfor",
        subHeading: "Sürdürülebilir ve Şeffaf Hizmet Anlayışı...",
        text1: "Çalışma felsefemizin temelinde 'Sıfır Hata' prensibi yatar. İnsan hayatını taşıdığımızın bilinciyle, güvenlikten asla taviz vermeyiz. Kullanılan her komponentin sertifikalı ve test edilmiş olmasına özen gösteriyoruz.",
        text2: "Müşterilerimizle kurduğumuz ilişki proje teslimiyle bitmez. 7/24 teknik destek ve şeffaf bakım raporlaması ile asansörlerinizin ömrünü uzatır, işletme maliyetlerinizi düşürürüz. Dürüstlük ve teknik mükemmeliyet, değişmez değerlerimizdir."
    }
  };

  const [companyInfo, setCompanyInfo] = useState({
    name: "Withmor Teknika Lift",
    about:
      "Withmor Teknika Lift, ulusal ve uluslararası standartlara (EN-81) uygun asansör sistemleri tasarlar, üretir ve anahtar teslim kurulum gerçekleştirir. Güvenlik, dayanıklılık ve konforu mühendislik hassasiyetiyle birleştiriyoruz.",
    phone: "+90 530 280 55 26",
    email: "info@withmor.com",
    address: "Kervanci ticaret merkezi, Velimeşe OSB, 59850 Çorlu/Tekirdağ",
    facebook: "https://www.facebook.com/TEKNIKALIFT",
    instagram: "https://www.instagram.com/withmorlift/",
    whatsapp: "https://wa.me/905302805526"
  });

  const [services, setServices] = useState([
    {
      id: "insan-asansorleri",
      name: "İnsan Asansörleri",
      desc:
        "Modern yaşamın ayrılmaz bir parçası olan insan asansörleri, binaların katlarını güvenli ve konforlu bir şekilde aşmanızı sağlar.",
      image: "",
    },
    {
      id: "yuk-asansorleri",
      name: "Yük Asansörleri",
      desc:
        "Endüstriyel tesislerden depolara kadar geniş bir yelpazede kullanılan, ağır yükleri kaldırmak ve taşımak için özel tasarlanmış asansörlerdir.",
      image: "",
    },
    {
      id: "hidrolik-asansorler",
      name: "Hidrolik Asansörler",
      desc:
        "Hidrolik basınç kullanarak hareket eden, bina içi ve dışında yükseklik farklılıklarını aşmak için güvenilir çözümlerdir.",
      image: "",
    },
    {
      id: "hastane-sedye",
      name: "Hastane & Sedye Asansörleri",
      desc:
        "Sağlık sektöründe hayati bir rol oynayan, hijyenik, sarsıntısız ve hızlı ulaşım sağlayan özel asansörlerdir.",
      image: "",
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

  const [references, setReferences] = useState([
    {
      company: "ABC İnşaat Grubu",
      quote:
        "Projelendirme, montaj ve satış sonrası teknik destek süreçlerinin tamamı profesyonelce yönetildi. Mühendislik kalitesi üst düzey.",
      name: "Murat Yılmaz",
      title: "Proje Yöneticisi",
    },
    {
      company: "Blue Residence Yönetimi",
      quote:
        "Modernizasyon sonrasında hem güvenlik hem de konfor anlamında ciddi bir iyileşme sağlandı. Enerji tasarrufu beklentimizin üzerinde.",
      name: "Selin Karaca",
      title: "Site Müdürü",
    },
    {
      company: "Mega AVM Yatırım A.Ş.",
      quote: "AVM içi yoğun trafiği yönetecek yürüyen merdiven ve panoramik asansör çözümlerinde Withmor'un performansı etkileyiciydi.",
      name: "Caner Erkin",
      title: "Teknik İşler Müdürü"
    },
    {
      company: "Şehir Hastanesi",
      quote: "Sedye asansörlerinde aradığımız hassasiyet ve kesintisiz çalışma garantisini fazlasıyla sağladılar.",
      name: "Dr. Kenan Işık",
      title: "Başhekim Yrd."
    },
    {
      company: "Vadi İstanbul Konutları",
      quote: "Yüksek katlı bloklarımızda yüksek hızlı asansörlerin montajı rekor sürede tamamlandı. Teşekkürler.",
      name: "Ayşe Yılmaz",
      title: "Yönetim Kurulu Bşk."
    },
    {
      company: "Trakya OSB Yönetimi",
      quote: "Sanayi tipi ağır yük asansörlerinde dayanıklılık bizim için öncelikti. 5 yıldır sorunsuz kullanıyoruz.",
      name: "Mehmet Öz",
      title: "Bölge Müdürü"
    }
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
      text: "Bakım hizmetlerinden çok memnunuz. Teknik ekip çok bilgili ve 7/24 ulaşılabilir durumda.",
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
    // if (type === "aboutSection") setTempValue(aboutContent); // About content static in object now
    if (type === "service" && index !== null) setTempValue(services[index]);
    if (type === "project" && index !== null) setTempValue(projects[index]);
    if (type === "reference" && index !== null) setTempValue(references[index]);
  };

  const openAdd = (type) => {
    // DEĞİŞİKLİK: Sadece referans eklemek için giriş zorunluluğu kaldırıldı
    if (!isLoggedIn && type !== "reference") {
      setShowLogin(true);
      return;
    }
    setEditModal({ open: true, type, index: null });

    if (type === "service")
      setTempValue({ id: `new-${Date.now()}`, name: "", desc: "", image: "" });
    if (type === "project") setTempValue({ name: "", type: "", desc: "" });
    if (type === "reference") setTempValue({ company: "", quote: "", name: "", title: "" });
  };

  const saveEdit = () => {
    const { type, index } = editModal;

    if (type === "hero") setHero(tempValue);
    if (type === "company") setCompanyInfo(tempValue);
    // if (type === "aboutSection") setAboutContent(tempValue);

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
    const message = `*Proje Teklifi Talebi*\n\n*Ad Soyad:* ${name}\n*Telefon:* ${phone}\n*Proje Tipi:* ${projectType}\n*Durak Sayısı:* ${floorCount}\n*Konum/Şehir:* ${location}\n*Ek Notlar:* ${note}`;
    const whatsappUrl = `https://wa.me/905302805526?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowQuoteModal(false);
  };

  const handleFastContactSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = fastContactForm;
    const whatsappMessage = `*Hızlı İletişim Formu*\n\n*Ad Soyad:* ${name}\n*Telefon:* ${phone}\n*Mesaj:* ${message}`;
    const whatsappUrl = `https://wa.me/905302805526?text=${encodeURIComponent(whatsappMessage)}`;
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
      
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 text-sm font-bold text-white shadow-md">
              WL
            </div>
            <div className="leading-tight">
              <p className="text-base font-bold tracking-tight text-slate-900">{companyInfo.name}</p>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Elevator Solutions</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-blue-700 transition-colors">Kurumsal</a>
            <a href="#services" className="hover:text-blue-700 transition-colors">Hizmetler</a>
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

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-white h-[100dvh] flex flex-col animate-in slide-in-from-right duration-200 md:hidden">
             <div className="p-4 flex justify-between items-center border-b border-slate-100">
                <span className="font-bold text-slate-900">Menü</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-600">
                  <Icons.X size={24} />
                </button>
             </div>
             <nav className="flex flex-col p-6 gap-6 text-lg font-medium text-slate-700">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-700">Kurumsal</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-700">Hizmetler</a>
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

      {/* HERO SECTION - KORUNDU */}
      <section className="w-full border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:px-8 md:grid-cols-2">
          {/* Sol Kısım */}
          <div>
            {/* Vurgulu Metinler */}
            <div className="mb-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700 border border-blue-100 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                7/24 Profesyonel Teknik Servis
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
            <div className="mb-8 flex flex-wrap items-center gap-4">
              
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
            
            <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 mt-8 bg-blue-900 rounded-xl p-6 text-white shadow-xl shadow-blue-900/10">
              <div>
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-xs text-blue-200 font-medium">Yıllık Tecrübe</p>
              </div>
              <div className="border-l border-blue-700 pl-6">
                <p className="text-2xl font-bold text-white">250+</p>
                <p className="text-xs text-blue-200 font-medium">Tamamlanan Proje</p>
              </div>
              <div className="border-l border-blue-700 pl-6">
                <p className="text-2xl font-bold text-white">7/24</p>
                <p className="text-xs text-blue-200 font-medium">Kesintisiz Destek</p>
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

      {/* YENİ BÖLÜM: BİZ KİMİZ (About Us - Tabbed Interface) */}
      <section id="about" className="py-20 bg-white border-b border-slate-100 scroll-mt-20">
         <div className="mx-auto max-w-6xl px-6">
           {/* Section Headers (Clickable Tabs) */}
           <div className="flex gap-4 md:gap-12 mb-12 border-b border-slate-200 pb-0 overflow-x-auto scrollbar-hide">
              {Object.keys(aboutTabs).map((key) => (
                <button
                    key={key}
                    onClick={() => setActiveAboutTab(key)}
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
           <div className="grid lg:grid-cols-12 gap-12 items-start animate-in fade-in duration-500 key={activeAboutTab}">
              {/* Sol: Bina Görseli (Dikey) */}
              <div className="lg:col-span-4">
                 <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg group">
                    <img 
                      src="https://images.unsplash.com/photo-1625233821804-432964626953?auto=format&fit=crop&q=80&w=800" 
                      alt="Asansör Görseli" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                 </div>
              </div>

              {/* Orta: Metin İçeriği (Dynamic) */}
              <div className="lg:col-span-4 flex flex-col justify-center h-full pt-4">
                 <h3 className="text-xl font-bold text-slate-800 mb-2">{aboutTabs[activeAboutTab].heading}</h3>
                 <h4 className="text-lg font-bold text-blue-700 mb-6">{aboutTabs[activeAboutTab].subHeading}</h4>
                 
                 <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {aboutTabs[activeAboutTab].text1}
                 </p>
                 <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {aboutTabs[activeAboutTab].text2}
                 </p>

                 <button className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wide group w-fit hover:text-blue-700 transition-colors">
                    <span className="w-1 h-4 bg-blue-600 block"></span>
                    Daha Fazla
                 </button>
              </div>

              {/* Sağ: Profil Kartı */}
              <div className="lg:col-span-4">
                 <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100 h-full flex flex-col justify-center items-center">
                    {/* Profil Resmi Kaldırıldı */}
                    <h3 className="text-xl font-bold text-slate-900">Berna Yılmaz</h3>
                    <p className="text-sm font-bold text-slate-500 mb-6">Proje Müdürü</p>
                    <p className="text-slate-600 text-sm italic relative px-4">
                       <span className="text-4xl text-slate-200 absolute -top-4 left-0">"</span>
                       Siz değerli müşterilerimizle başlattığımız her projeyi, istek ve talepleriniz doğrultusunda özenle planlayarak, en yüksek memnuniyet düzeyine ulaştırmayı hedefliyoruz.
                       <span className="text-4xl text-slate-200 absolute -bottom-8 right-0">"</span>
                    </p>
                    
                    {/* WhatsApp Action */}
                    <div className="mt-8 flex items-center justify-center gap-3 bg-white p-3 rounded-lg shadow-sm w-full max-w-xs border border-slate-100">
                       <div className="text-left">
                          <p className="text-[10px] text-slate-400">Yardım Edebilir Miyim?</p>
                          <p className="text-xs font-bold text-slate-700">WhatsApp'tan Yaz</p>
                       </div>
                       <button 
                          onClick={() => window.open(companyInfo.whatsapp, "_blank")}
                          className="bg-[#25D366] text-white p-2 rounded-full hover:bg-[#128C7E] transition shadow-sm"
                       >
                          <Icons.MessageCircle size={20} />
                       </button>
                    </div>
                 </div>
              </div>
           </div>
         </div>
      </section>

      {/* YENİ BÖLÜM: 5 ANA NEDEN (Why Us) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
         <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-slate-900 mb-16 uppercase tracking-tight">
               Bizimle Çalışmanız İçin 5 Ana Neden
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
               {/* Sol: Liste */}
               <div className="space-y-12">
                  <div className="flex gap-6 group">
                     <span className="text-6xl font-extralight text-slate-300 group-hover:text-blue-900 transition-colors">1</span>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Tecrübe ve Uzmanlık</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                           15 yılı aşkın süredir asansör sektöründe faaliyet gösteren firmamız, birikimli deneyimi ve uzman mühendis kadrosuyla projelerinizi en üst seviyede yönetir ve çözümler sunar.
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
                           Ürünlerimiz uluslararası normlara ve yerel yönetmeliklere uygunluğuyla öne çıkar. Yüksek kalite ve güvenlik standartlarını korurken, müşterilerimize güvenilir çözümler sunarız.
                        </p>
                     </div>
                  </div>

                  <div className="flex gap-6 group">
                     <span className="text-6xl font-extralight text-slate-300 group-hover:text-blue-900 transition-colors">4</span>
                     <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Müşteri Odaklı Hizmet</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                           Müşteri memnuniyetini en üst düzeyde tutmak için satış öncesi ve sonrası kesintisiz destek sağlıyoruz. İhtiyaçlarınıza özel çözümler üretiyoruz.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Sağ: İllüstrasyon */}
               <div className="relative h-full min-h-[500px] bg-blue-900 rounded-xl overflow-hidden flex items-center justify-center p-8 shadow-2xl">
                  {/* Basit Asansör Şematiği CSS ile */}
                  <div className="relative w-full h-full flex justify-center gap-8">
                     {/* Sol Kuyu */}
                     <div className="w-1/4 h-full bg-blue-800/50 border-r border-blue-700/50 relative">
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-16 h-20 border-2 border-white/20 flex items-center justify-center">
                           <Icons.User className="text-white/40" />
                        </div>
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 border-2 border-white rounded-lg flex items-center justify-center bg-blue-600">
                           <div className="w-8 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/10 border-dashed border-l border-white/20"></div>
                     </div>
                     {/* Orta Kuyu */}
                     <div className="w-1/4 h-full bg-blue-800/50 border-r border-blue-700/50 relative">
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-16 h-20 border-2 border-white flex items-center justify-center bg-blue-700">
                           <Icons.User className="text-white" />
                           <Icons.User className="text-white" />
                        </div>
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 border-2 border-white rounded-lg flex items-center justify-center bg-blue-600">
                           <div className="w-8 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/20"></div>
                     </div>
                     {/* Sağ Kuyu */}
                     <div className="w-1/4 h-full bg-blue-800/50 relative">
                         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-16 h-20 border-2 border-white flex items-center justify-center">
                           <Icons.User className="text-white" />
                        </div>
                        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/20"></div>
                     </div>
                     
                     <div className="absolute top-1/2 left-10 w-32 h-32 bg-blue-950 rounded-full flex items-center justify-center text-center p-4 border border-blue-800 shadow-xl z-10">
                        <span className="text-white text-xs font-bold">Yüksek Verimlilik</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ANA İÇERİK - HİZMETLER (SERVICES) - YENİ GRID YAPISI */}
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

          {/* YENİ GRID YAPISI */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
               <div key={service.id} className="group flex flex-col h-full bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
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
                           {/* Overlay */}
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
                           onClick={() => setShowQuoteModal(true)}
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

        {/* Projeler - MEVCUT KOD */}
        <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-20 bg-slate-50">
          <div className="flex items-center justify-between mb-8">
             <div>
               <div className="flex items-center gap-2 mb-2">
                 <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Referans Projeler</span>
                 {isLoggedIn && <button onClick={() => openAdd("project")} className="flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold"><Icons.Plus size={10}/> Ekle</button>}
               </div>
               <h2 className="text-3xl font-bold text-slate-900">Seçilmiş Uygulamalar</h2>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Slice mantığı ile sınırlama */}
            {projects.slice(0, showAllProjects ? projects.length : 3).map((project, index) => (
              <div key={index} className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in zoom-in duration-300">
                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors">{project.name}</h3>
                  <span className="inline-block mt-2 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit">
                    {project.type}
                  </span>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">
                    {project.desc}
                  </p>
                  {isLoggedIn && (
                    <button onClick={() => openEdit("project", index)} className="mt-4 flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 text-left underline">
                      <Icons.Settings size={12}/> Projeyi Düzenle
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Projeler için Daha Fazla Göster Butonu */}
          {projects.length > 3 && (
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowAllProjects(!showAllProjects)} 
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-all hover:border-blue-300 shadow-sm"
              >
                {showAllProjects ? (
                  <>Daha Az Göster <Icons.ChevronUp size={16}/></>
                ) : (
                  <>Daha Fazla Proje Göster ({projects.length - 3}) <Icons.ChevronDown size={16}/></>
                )}
              </button>
            </div>
          )}
        </section>

        {/* Referanslar - MEVCUT KOD */}
        <section id="references" className="bg-blue-900 w-full py-20 text-white relative overflow-hidden">
           {/* SOLUK DESEN KATMANI - TIRNAK İŞARETLERİ */}
           <div className="absolute inset-0 pointer-events-none select-none opacity-5">
             <Icons.Quote className="absolute -top-10 -left-10 w-64 h-64 text-white transform rotate-12" />
             <Icons.Quote className="absolute top-1/3 right-10 w-32 h-32 text-white transform -rotate-12" />
             <Icons.Quote className="absolute bottom-10 left-1/4 w-48 h-48 text-white transform rotate-6" />
           </div>

           <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-16">
                 {/* Kurumsal Referanslar */}
                 <div>
                    <div className="flex items-center gap-2 mb-6">
                       <h2 className="text-2xl font-bold text-white">Kurumsal Referanslar</h2>
                       {/* DEĞİŞİKLİK: Herkese Açık Ekleme */}
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

                 {/* Google Yorumları */}
                 <div>
                    <div className="flex items-center justify-between mb-6">
                       <h2 className="text-2xl font-bold text-white">Müşteri Deneyimi</h2>
                       <a href="https://maps.app.goo.gl/mfxnQ3ngTwYtVyAN6" target="_blank" rel="noreferrer" className="text-xs font-semibold text-blue-200 hover:text-white hover:underline">Google'da Görüntüle →</a>
                    </div>
                    <div className="bg-blue-800 rounded-2xl border border-blue-700 p-6 shadow-lg">
                       <div className="flex items-center gap-4 mb-6">
                          <div className="text-4xl font-bold text-white">4.9</div>
                          <div>
                             <div className="flex text-amber-400 text-sm"><Icons.Star fill="currentColor" size={16}/><Icons.Star fill="currentColor" size={16}/><Icons.Star fill="currentColor" size={16}/><Icons.Star fill="currentColor" size={16}/><Icons.Star fill="currentColor" size={16}/></div>
                             <p className="text-xs text-blue-300 mt-1">120+ Google Yorumu</p>
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
                       
                       <div className="mt-6 text-center border-t border-blue-700 pt-4">
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

        {/* İletişim - MEVCUT KOD */}
        <section id="contact" className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 py-20">
           <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2 block">Bize Ulaşın</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Projenizi Birlikte Planlayalım</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                 {companyInfo.about}
              </p>
              
              <div className="space-y-6 mb-8">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                       <Icons.MapPin className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">Adres</p>
                       <p className="text-sm text-slate-600 mt-1">{companyInfo.address}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                       <Icons.Phone className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">Telefon</p>
                       <p className="text-sm text-slate-600 mt-1">{companyInfo.phone}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                       <Icons.Mail className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-slate-900">E-Posta</p>
                       <p className="text-sm text-slate-600 mt-1">{companyInfo.email}</p>
                    </div>
                 </div>
              </div>

              {isLoggedIn && <button onClick={() => openEdit("company")} className="flex items-center gap-2 text-xs font-semibold text-blue-600 border border-blue-200 px-3 py-2 rounded hover:bg-blue-50"><Icons.Settings size={14}/> Firma Bilgilerini Düzenle</button>}
           </div>

           {/* Sağ: Form ve Harita */}
           <div className="space-y-8">
              <div className="relative overflow-hidden rounded-2xl p-[3px] shadow-lg group">
                 <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFF00_14%,#00FF00_28%,#00FFFF_42%,#0000FF_57%,#FF00FF_71%,#FF0000_85%,#FF0000_100%)]" />
                 
                 <div className="relative h-full w-full bg-slate-50 border border-slate-200 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Hızlı İletişim</h3>
                    <form onSubmit={handleFastContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <input required type="text" placeholder="Ad Soyad" value={fastContactForm.name} onChange={(e) => setFastContactForm({...fastContactForm, name: e.target.value})} className="w-full rounded-lg border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                          <input required type="tel" placeholder="Telefon" value={fastContactForm.phone} onChange={(e) => setFastContactForm({...fastContactForm, phone: e.target.value})} className="w-full rounded-lg border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                        </div>
                        <textarea required rows={3} placeholder="Mesajınız" value={fastContactForm.message} onChange={(e) => setFastContactForm({...fastContactForm, message: e.target.value})} className="w-full rounded-lg border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" />
                        <button type="submit" className="w-full bg-blue-900 text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                          <Icons.Phone size={16} /> WhatsApp ile Gönder
                        </button>
                    </form>
                 </div>
              </div>

              <div className="h-64 w-full rounded-2xl overflow-hidden shadow-md border border-slate-200">
                 <iframe
                   title="Ofis Konumu"
                   width="100%"
                   height="100%"
                   frameBorder="0"
                   scrolling="no"
                   marginHeight="0"
                   marginWidth="0"
                   src="https://maps.google.com/maps?q=Withmor+Asans%C3%B6r+Market%2C+Kervanc%C4%B1+Ticaret+Merkezi%2C+Velime%C5%9Fe+OSB%2C+Tekirda%C4%9F&t=&z=15&ie=UTF8&iwloc=&output=embed"
                   className="opacity-90 hover:opacity-100 transition-opacity"
                 ></iframe>
              </div>
           </div>
        </section>

      </main>
      
      {/* Footer - MEVCUT KOD */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
         <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
               <div className="flex items-center gap-2 mb-4 text-white">
                  <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center font-bold text-xs">WL</div>
                  <span className="font-bold text-lg">{companyInfo.name}</span>
               </div>
               <p className="text-xs leading-relaxed text-slate-400 max-w-xs">
                  Güvenli, konforlu ve verimli dikey ulaşım çözümleri için mühendislik odaklı yaklaşım.
               </p>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm mb-4">Hızlı Erişim</h4>
               <ul className="space-y-2 text-xs">
                  <li><a href="#services" className="hover:text-white transition-colors">Hizmetler</a></li>
                  <li><a href="#projects" className="hover:text-white transition-colors">Projeler</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm mb-4">Sosyal Medya</h4>
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
            <span>Mühendislik ve Tasarım: Withmor Teknika</span>
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
                  <option>Konut Asansörü</option>
                  <option>Yük Asansörü</option>
                  <option>Hidrolik Sistem</option>
                  <option>Panoramik Asansör</option>
                  <option>Araç Platformu</option>
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
      {/* Edit Modal */}
      {editModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            <h3 className="mb-4 text-lg font-bold text-slate-900">{editModal.index === null ? "Yeni Ekle" : "İçeriği Düzenle"}</h3>
            <div className="space-y-3">
               {Object.keys(tempValue).map((key) => (
                  <div key={key}>
                     <label className="mb-1 block text-[10px] font-bold text-slate-500 uppercase">{key}</label>
                     {key === "desc" || key === "quote" || key === "about" ? (
                        <textarea rows={3} value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
                     ) : (
                        <input type="text" value={tempValue[key]} onChange={(e) => setTempValue(prev => ({...prev, [key]: e.target.value}))} className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600" />
                     )}
                  </div>
               ))}
            </div>
            <div className="mt-6 flex justify-between gap-3">
               {editModal.index !== null && ["service", "project", "reference"].includes(editModal.type) ? (
                  <button onClick={handleDelete} className="rounded border border-red-200 text-red-600 px-4 py-2 text-xs font-bold hover:bg-red-50">Sil</button>
               ) : <div/>}
               <div className="flex gap-2">
                  <button onClick={() => setEditModal({open: false, type: null, index: null})} className="rounded border border-slate-200 text-slate-600 px-4 py-2 text-xs font-bold hover:bg-slate-50">Vazgeç</button>
                  <button onClick={saveEdit} className="rounded bg-blue-900 text-white px-6 py-2 text-xs font-bold hover:bg-blue-800">{editModal.index === null ? "Ekle" : "Kaydet"}</button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
