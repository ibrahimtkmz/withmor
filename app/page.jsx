"use client";

import { useState, useEffect } from "react";

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
  Globe: (props) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>),
};

// --- ÇEVİRİ VERİLERİ ---
const TRANSLATIONS = {
  tr: {
    menu: { about: "Kurumsal", services: "Hizmetler", projects: "Projeler", references: "Referanslar", contact: "İletişim" },
    hero: {
      eyebrow: "Premium Asansör Çözümleri",
      title: "Güvenli ve Estetik Dikey Ulaşım Mühendisliği",
      subtitle: "Konut binalarından iş merkezlerine kadar özel tasarım, montaj ve bakım hizmetlerinde yüksek mühendislik standartları.",
      cta: "Proje Teklifi Al",
      secondaryCta: "Referanslarımızı İnceleyin",
      badges: ["7/24 Profesyonel Teknik Servis", "EN-81 Standartlarına Uygun", "%100 Müşteri Memnuniyeti"],
      stats: { years: "Yıllık Tecrübe", projects: "Tamamlanan Proje", support: "Kesintisiz Destek" },
      animTitle: "Akıllı Dikey Ulaşım Sistemleri",
      animDesc: "Geleceğin teknolojisi ile donatılmış, güvenli ve konforlu asansör çözümleri.",
      floor: "Kat",
      ground: "Zemin"
    },
    about: {
      title: "Kurumsal",
      slogan: "İstiyorsan herşey gerçek olur",
      desc: "Withmor Teknika Lift, ulusal ve uluslararası standartlara (EN-81) uygun asansör sistemleri tasarlar, üretir ve anahtar teslim kurulum gerçekleştirir. Güvenlik, dayanıklılık ve konforu mühendislik hassasiyetiyle birleştiriyoruz.",
      office: "Merkez Ofis & Fabrika",
      email: "E-Posta İletişim",
      phone: "Telefon"
    },
    services: {
      title: "Ürün ve Hizmet Grupları",
      subtitle: "Endüstriyel ve konut tipi dikey taşıma sistemlerinde geniş ürün yelpazesi.",
      items: [
        { name: "Çelik Konstrüksiyonlar", desc: "Makine dairesi, taşıyıcı konstrüksiyonlar ve çelik yapılar için projeye özel statik hesaplamalı imalat.", image: "celik-konstruksiyonlar.webp" },
        { name: "Hidrolik Sistemler", desc: "Villa, yük ve makine dairesiz çözümler için sessiz, güvenli ve enerji verimli hidrolik üniteler.", image: "hidrolik-sistemler.jpg" },
        { name: "Kabin Tasarımları", desc: "Standart ve panoramik kabin tasarımları, paslanmaz ve cam seçenekleri ile modern iç dekorasyon.", image: "kabinler.webp" },
        { name: "Yük Asansörleri", desc: "Sanayi tesisleri ve depolar için yüksek kapasiteli ağır yük taşıma çözümleri.", image: "yuk-asansorleri-platformlar.jpg" },
        { name: "Makine Şasesi MRL/MR", desc: "MRL ve geleneksel sistemler için titreşimi minimize eden, uzun ömürlü sertifikalı makine şaseleri.", image: "makine-sasesi-mrl-mr.png" },
        { name: "Endüstriyel Yük Kabinleri", desc: "Ağır ve hassas yükler için darbe dayanımlı, kaymaz zeminli, güçlendirilmiş çelik yük kabinleri.", image: "yuk-kabinleri.jpg" }
      ],
      btnDetail: "Detaylı Bilgi Al"
    },
    projects: {
      title: "Seçilmiş Uygulamalar",
      items: [
        { name: "Skyline Residence Tower", type: "Panoramik Yolcu", desc: "4 cam panoramik kabin, hedef seçimli kontrol sistemi." },
        { name: "Techno Industrial Plant", type: "Ağır Hizmet Yük", desc: "Gün boyu yoğun kullanıma uygun, 3.500 kg kapasiteli hidrolik asansör." },
        { name: "City Hospital Complex", type: "Sedye Asansörleri", desc: "Hastane standartlarında hijyen ve sarsıntısız kalkış-duruş." },
        { name: "Vadi Park Plaza", type: "Yüksek Hızlı", desc: "35 katlı iş merkezi için 4 m/s hızında 6 adet yolcu asansörü." },
        { name: "Metro Transfer", type: "Yürüyen Merdiven", desc: "Ağır hizmet tipi 12 adet yürüyen merdiven sistemi." },
        { name: "Lojistik Üssü", type: "Makaslı Platform", desc: "Tır yükleme için 10 ton kapasiteli hidrolik platformlar." }
      ],
      more: "Daha Fazla Proje Göster",
      less: "Daha Az Göster"
    },
    references: {
      title: "Kurumsal Referanslar",
      items: [
        { company: "ABC İnşaat Grubu", quote: "Mühendislik kalitesi üst düzey.", name: "Murat Yılmaz", title: "Proje Yöneticisi" },
        { company: "Blue Residence", quote: "Güvenlik ve konfor anlamında ciddi bir iyileşme sağlandı.", name: "Selin Karaca", title: "Site Müdürü" },
        { company: "Mega AVM", quote: "AVM içi trafik yönetiminde Withmor performansı etkileyiciydi.", name: "Caner Erkin", title: "Teknik Müdür" },
        { company: "Şehir Hastanesi", quote: "Sedye asansörlerinde aradığımız hassasiyeti sağladılar.", name: "Dr. Kenan Işık", title: "Başhekim Yrd." },
        { company: "Vadi İstanbul", quote: "Yüksek hızlı asansörlerin montajı rekor sürede tamamlandı.", name: "Ayşe Yılmaz", title: "YKB" },
        { company: "Trakya OSB", quote: "Sanayi tipi asansörlerde dayanıklılık öncelikti, memnunuz.", name: "Mehmet Öz", title: "Bölge Müdürü" }
      ],
      more: "Daha Fazla Göster",
      less: "Daha Az Göster"
    },
    reviews: {
      title: "Müşteri Deneyimi",
      linkText: "Google'da Görüntüle",
      items: [
        { name: "Ahmet Yılmaz", text: "Zamanında teslimat ve kaliteli işçilik." },
        { name: "Mehmet Demir", text: "Teknik ekip çok bilgili ve 7/24 ulaşılabilir." },
        { name: "Ayşe Kaya", text: "Villa asansörümüz harika ve sessiz." },
        { name: "Canan Erkin", text: "Proje yönetimi gayet başarılıydı." },
        { name: "Burak Yılmaz", text: "Fiyat performans açısından en iyi firma." },
        { name: "Zeynep Çelik", text: "Bakım konusunda çok hassaslar." }
      ],
      more: "Daha Fazla Yorum",
      less: "Daha Az Göster"
    },
    contact: {
      title: "Bize Ulaşın",
      sub: "Projenizi Birlikte Planlayalım",
      formTitle: "Hızlı İletişim",
      phName: "Ad Soyad",
      phPhone: "Telefon",
      phMsg: "Mesajınız",
      btnSend: "WhatsApp ile Gönder",
      btnEdit: "Firma Bilgilerini Düzenle"
    },
    admin: {
      btn: "Yönetici",
      login: "Giriş",
      logout: "Çıkış",
      add: "Ekle",
      edit: "Düzenle",
      save: "Kaydet",
      cancel: "Vazgeç",
      delete: "Sil",
      modalTitleNew: "Yeni Ekle",
      modalTitleEdit: "İçeriği Düzenle",
      loginTitle: "Yönetici Girişi",
      loginSub: "Panel erişimi sağlayın",
      userPh: "Kullanıcı adı",
      passPh: "Şifre"
    }
  },
  en: {
    menu: { about: "About Us", services: "Services", projects: "Projects", references: "References", contact: "Contact" },
    hero: {
      eyebrow: "Premium Elevator Solutions",
      title: "Safe and Aesthetic Vertical Transportation Engineering",
      subtitle: "High engineering standards in design, installation, and maintenance from residential buildings to business centers.",
      cta: "Get a Quote",
      secondaryCta: "View References",
      badges: ["24/7 Professional Tech Support", "Compliant with EN-81", "100% Customer Satisfaction"],
      stats: { years: "Years Experience", projects: "Projects Completed", support: "Uninterrupted Support" },
      animTitle: "Smart Vertical Transport",
      animDesc: "Future-proof, safe and comfortable elevator solutions.",
      floor: "Floor",
      ground: "Ground"
    },
    about: {
      title: "Corporate",
      slogan: "Rise confidently to the future",
      desc: "Withmor Teknika Lift designs, manufactures, and installs turnkey elevator systems compliant with national and international standards (EN-81). We combine safety, durability, and comfort with engineering precision.",
      office: "HQ & Factory",
      email: "Email Contact",
      phone: "Phone"
    },
    services: {
      title: "Products & Services",
      subtitle: "Wide range of products in industrial and residential vertical transport systems.",
      items: [
        { name: "Steel Constructions", desc: "Project-specific static calculation manufacturing for machine rooms and shafts.", image: "celik-konstruksiyonlar.webp" },
        { name: "Hydraulic Systems", desc: "Quiet, safe and energy-efficient hydraulic units for villas and freight.", image: "hidrolik-sistemler.jpg" },
        { name: "Cabin Designs", desc: "Standard and panoramic cabin designs with stainless steel and glass options.", image: "kabinler.webp" },
        { name: "Freight Elevators", desc: "High capacity heavy load transport solutions for factories and warehouses.", image: "yuk-asansorleri-platformlar.jpg" },
        { name: "Machine Chassis MRL/MR", desc: "Long-life certified machine chassis minimizing vibration.", image: "makine-sasesi-mrl-mr.png" },
        { name: "Industrial Cabins", desc: "Reinforced steel cabins for heavy and sensitive loads.", image: "yuk-kabinleri.jpg" }
      ],
      btnDetail: "Get Details"
    },
    projects: {
      title: "Selected Projects",
      items: [
        { name: "Skyline Residence Tower", type: "Panoramic Passenger", desc: "4 glass panoramic cabins, destination control system." },
        { name: "Techno Industrial Plant", type: "Heavy Duty Freight", desc: "3,500 kg capacity hydraulic elevator for intensive use." },
        { name: "City Hospital Complex", type: "Stretcher Elevators", desc: "Hygiene standards and smooth start-stop technology." },
        { name: "Vadi Park Plaza", type: "High Speed", desc: "6 passenger elevators at 4 m/s for 35-floor center." },
        { name: "Metro Transfer", type: "Escalators", desc: "12 heavy-duty escalators for high traffic." },
        { name: "Logistics Base", type: "Scissor Platforms", desc: "10-ton hydraulic platforms for truck loading." }
      ],
      more: "Show More Projects",
      less: "Show Less"
    },
    references: {
      title: "Corporate References",
      items: [
        { company: "ABC Construction", quote: "Top-level engineering quality.", name: "Murat Yılmaz", title: "Project Manager" },
        { company: "Blue Residence", quote: "Significant improvement in safety and comfort.", name: "Selin Karaca", title: "Site Manager" },
        { company: "Mega Mall", quote: "Impressive performance in mall traffic management.", name: "Caner Erkin", title: "Technical Manager" },
        { company: "City Hospital", quote: "Provided the precision we sought in stretcher lifts.", name: "Dr. Kenan Işık", title: "Chief Physician Assist." },
        { company: "Vadi Istanbul", quote: "Installation completed in record time.", name: "Ayşe Yılmaz", title: "Chairwoman" },
        { company: "Trakya OIZ", quote: "Durability was priority for industrial lifts, very satisfied.", name: "Mehmet Öz", title: "Regional Manager" }
      ],
      more: "Show More",
      less: "Show Less"
    },
    reviews: {
      title: "Customer Experience",
      linkText: "View on Google",
      items: [
        { name: "Ahmet Yılmaz", text: "Timely delivery and quality workmanship." },
        { name: "Mehmet Demir", text: "Technical team is very knowledgeable and accessible 24/7." },
        { name: "Ayşe Kaya", text: "Our villa elevator is wonderful and quiet." },
        { name: "Canan Erkin", text: "Project management was successful." },
        { name: "Burak Yılmaz", text: "Best price/performance in the market." },
        { name: "Zeynep Çelik", text: "Very precise about periodic maintenance." }
      ],
      more: "More Reviews",
      less: "Show Less"
    },
    contact: {
      title: "Contact Us",
      sub: "Let's Plan Your Project",
      formTitle: "Quick Contact",
      phName: "Full Name",
      phPhone: "Phone",
      phMsg: "Your Message",
      btnSend: "Send via WhatsApp",
      btnEdit: "Edit Company Info"
    },
    admin: {
      btn: "Admin",
      login: "Login",
      logout: "Logout",
      add: "Add",
      edit: "Edit",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      modalTitleNew: "Add New",
      modalTitleEdit: "Edit Content",
      loginTitle: "Admin Login",
      loginSub: "Access the panel",
      userPh: "Username",
      passPh: "Password"
    }
  },
  ru: {
    menu: { about: "О нас", services: "Услуги", projects: "Проекты", references: "Референсы", contact: "Контакты" },
    hero: {
      eyebrow: "Премиальные лифтовые решения",
      title: "Безопасная и эстетичная инженерия вертикального транспорта",
      subtitle: "Высокие стандарты инженерии в проектировании, монтаже и обслуживании от жилых зданий до бизнес-центров.",
      cta: "Получить предложение",
      secondaryCta: "Наши работы",
      badges: ["24/7 Проф. техподдержка", "Стандарты EN-81", "100% Довольных клиентов"],
      stats: { years: "Лет опыта", projects: "Завершено проектов", support: "Поддержка" },
      animTitle: "Умные лифтовые системы",
      animDesc: "Безопасные и комфортные решения будущего.",
      floor: "Этаж",
      ground: "Земля"
    },
    about: {
      title: "Корпоративный",
      slogan: "Уверенно поднимайтесь в будущее",
      desc: "Withmor Teknika Lift проектирует, производит и устанавливает лифтовые системы 'под ключ' в соответствии с EN-81. Мы сочетаем безопасность и комфорт с инженерной точностью.",
      office: "Офис и Фабрика",
      email: "Эл. почта",
      phone: "Телефон"
    },
    services: {
      title: "Продукты и Услуги",
      subtitle: "Широкий спектр продуктов для промышленных и жилых систем.",
      items: [
        { name: "Стальные конструкции", desc: "Производство стальных конструкций для шахт и машинных отделений.", image: "celik-konstruksiyonlar.webp" },
        { name: "Гидравлические системы", desc: "Тихие и безопасные гидравлические агрегаты для вилл и грузов.", image: "hidrolik-sistemler.jpg" },
        { name: "Дизайн кабин", desc: "Панорамные и стандартные кабины с отделкой из стекла и нержавеющей стали.", image: "kabinler.webp" },
        { name: "Грузовые лифты", desc: "Решения высокой грузоподъемности для фабрик и складов.", image: "yuk-asansorleri-platformlar.jpg" },
        { name: "Рамы MRL/MR", desc: "Сертифицированные рамы, минимизирующие вибрацию.", image: "makine-sasesi-mrl-mr.png" },
        { name: "Промышленные кабины", desc: "Усиленные стальные кабины для тяжелых грузов.", image: "yuk-kabinleri.jpg" }
      ],
      btnDetail: "Подробнее"
    },
    projects: {
      title: "Избранные Проекты",
      items: [
        { name: "Skyline Residence", type: "Панорамный", desc: "4 панорамные кабины, система управления целевым этажом." },
        { name: "Techno Plant", type: "Грузовой", desc: "Гидравлический лифт грузоподъемностью 3500 кг." },
        { name: "City Hospital", type: "Больничный", desc: "Гигиенические стандарты и плавный ход." },
        { name: "Vadi Park Plaza", type: "Скоростной", desc: "6 лифтов со скоростью 4 м/с для 35 этажей." },
        { name: "Metro Transfer", type: "Эскалатор", desc: "12 эскалаторов для интенсивного потока." },
        { name: "Logistics Base", type: "Платформа", desc: "Гидравлические платформы 10 тонн." }
      ],
      more: "Показать больше",
      less: "Свернуть"
    },
    references: {
      title: "Корпоративные Референсы",
      items: [
        { company: "ABC Construction", quote: "Высокое качество инженерии.", name: "Murat Yılmaz", title: "Менеджер проекта" },
        { company: "Blue Residence", quote: "Значительное улучшение безопасности.", name: "Selin Karaca", title: "Управляющий" },
        { company: "Mega AVM", quote: "Впечатляющая производительность в ТЦ.", name: "Caner Erkin", title: "Тех. директор" },
        { company: "City Hospital", quote: "Обеспечили точность для медицинских лифтов.", name: "Dr. Kenan Işık", title: "Главврач" },
        { company: "Vadi Istanbul", quote: "Монтаж завершен в рекордные сроки.", name: "Ayşe Yılmaz", title: "Директор" },
        { company: "Trakya OSB", quote: "Прочность была приоритетом, мы довольны.", name: "Mehmet Öz", title: "Региональный менеджер" }
      ],
      more: "Показать больше",
      less: "Свернуть"
    },
    reviews: {
      title: "Отзывы Клиентов",
      linkText: "Смотреть в Google",
      items: [
        { name: "Ahmet Yılmaz", text: "Своевременная доставка и качественная работа." },
        { name: "Mehmet Demir", text: "Техническая команда очень грамотная." },
        { name: "Ayşe Kaya", text: "Наш лифт для виллы отличный и тихий." },
        { name: "Canan Erkin", text: "Управление проектом было успешным." },
        { name: "Burak Yılmaz", text: "Лучшее соотношение цены и качества." },
        { name: "Zeynep Çelik", text: "Очень внимательны к обслуживанию." }
      ],
      more: "Больше отзывов",
      less: "Свернуть"
    },
    contact: {
      title: "Контакты",
      sub: "Давайте спланируем ваш проект",
      formTitle: "Быстрая связь",
      phName: "Имя Фамилия",
      phPhone: "Телефон",
      phMsg: "Ваше сообщение",
      btnSend: "Отправить в WhatsApp",
      btnEdit: "Ред. инфо"
    },
    admin: {
      btn: "Админ",
      login: "Вход",
      logout: "Выход",
      add: "Добавить",
      edit: "Ред.",
      save: "Сохранить",
      cancel: "Отмена",
      delete: "Удалить",
      modalTitleNew: "Добавить",
      modalTitleEdit: "Редактировать",
      loginTitle: "Вход Админа",
      loginSub: "Доступ к панели",
      userPh: "Имя пользователя",
      passPh: "Пароль"
    }
  },
  ar: {
    menu: { about: "من نحن", services: "خدماتنا", projects: "المشاريع", references: "المراجع", contact: "اتصل بنا" },
    hero: {
      eyebrow: "حلول المصاعد المميزة",
      title: "هندسة النقل العمودي الآمنة والجمالية",
      subtitle: "معايير هندسية عالية في التصميم والتركيب والصيانة من المباني السكنية إلى المراكز التجارية.",
      cta: "احصل على عرض",
      secondaryCta: "مراجعة أعمالنا",
      badges: ["دعم فني احترافي 24/7", "متوافق مع معايير EN-81", "100% رضا العملاء"],
      stats: { years: "سنوات خبرة", projects: "مشاريع مكتملة", support: "دعم متواصل" },
      animTitle: "أنظمة النقل العمودي الذكية",
      animDesc: "حلول مصاعد آمنة ومريحة مجهزة بتكنولوجيا المستقبل.",
      floor: "طابق",
      ground: "أرضي"
    },
    about: {
      title: "الشركات",
      slogan: "ارتقِ بثقة نحو المستقبل",
      desc: "تقوم Withmor Teknika Lift بتصميم وتصنيع وتركيب أنظمة المصاعد الجاهزة وفقًا للمعايير (EN-81). نجمع بين الأمان والمتانة والراحة بدقة هندسية.",
      office: "المكتب الرئيسي والمصنع",
      email: "البريد الإلكتروني",
      phone: "الهاتف"
    },
    services: {
      title: "مجموعات المنتجات والخدمات",
      subtitle: "مجموعة واسعة من المنتجات في أنظمة النقل العمودي الصناعية والسكنية.",
      items: [
        { name: "الهياكل الفولاذية", desc: "تصنيع خاص للمشاريع لغرف المحركات والهياكل الحاملة.", image: "celik-konstruksiyonlar.webp" },
        { name: "الأنظمة الهيدروليكية", desc: "وحدات هيدروليكية هادئة وآمنة وموفرة للطاقة للفلل والحمولات.", image: "hidrolik-sistemler.jpg" },
        { name: "تصاميم الكابينة", desc: "تصاميم كابينة قياسية وبانورامية مع خيارات الزجاج والفولاذ المقاوم للصدأ.", image: "kabinler.webp" },
        { name: "مصاعد الشحن", desc: "حلول نقل الحمولات الثقيلة للمصانع والمستودعات.", image: "yuk-asansorleri-platformlar.jpg" },
        { name: "هيكل الآلة MRL/MR", desc: "هياكل آلات معتمدة طويلة العمر تقلل الاهتزاز.", image: "makine-sasesi-mrl-mr.png" },
        { name: "كبائن صناعية", desc: "كبائن فولاذية معززة للأحمال الثقيلة والحساسة.", image: "yuk-kabinleri.jpg" }
      ],
      btnDetail: "تفاصيل"
    },
    projects: {
      title: "مشاريع مختارة",
      items: [
        { name: "Skyline Residence Tower", type: "ركاب بانورامي", desc: "4 كبائن بانورامية زجاجية، نظام تحكم بالوجهة." },
        { name: "Techno Industrial Plant", type: "شحن ثقيل", desc: "مصعد هيدروليكي بسعة 3500 كجم للاستخدام المكثف." },
        { name: "City Hospital Complex", type: "مصاعد نقالة", desc: "معايير النظافة وتكنولوجيا التوقف والانطلاق السلس." },
        { name: "Vadi Park Plaza", type: "سرعة عالية", desc: "6 مصاعد ركاب بسرعة 4 م/ث لمركز أعمال من 35 طابقًا." },
        { name: "Metro Transfer", type: "سلالم متحركة", desc: "12 سلمًا متحركًا للخدمة الشاقة." },
        { name: "Logistics Base", type: "منصات مقصية", desc: "منصات هيدروليكية بسعة 10 أطنان لتحميل الشاحنات." }
      ],
      more: "عرض المزيد",
      less: "عرض أقل"
    },
    references: {
      title: "مراجع الشركات",
      items: [
        { company: "ABC Construction", quote: "جودة هندسية عالية المستوى.", name: "Murat Yılmaz", title: "مدير المشروع" },
        { company: "Blue Residence", quote: "تحسن كبير في الأمان والراحة.", name: "Selin Karaca", title: "مدير الموقع" },
        { company: "Mega Mall", quote: "أداء مثير للإعجاب في إدارة حركة المول.", name: "Caner Erkin", title: "المدير الفني" },
        { company: "City Hospital", quote: "وفروا الدقة التي كنا نبحث عنها في مصاعد النقالات.", name: "Dr. Kenan Işık", title: "مساعد رئيس الأطباء" },
        { company: "Vadi Istanbul", quote: "تم الانتهاء من التركيب في وقت قياسي.", name: "Ayşe Yılmaz", title: "رئيس مجلس الإدارة" },
        { company: "Trakya OIZ", quote: "المتانة كانت الأولوية، ونحن راضون جدًا.", name: "Mehmet Öz", title: "المدير الإقليمي" }
      ],
      more: "عرض المزيد",
      less: "عرض أقل"
    },
    reviews: {
      title: "تجربة العملاء",
      linkText: "عرض على Google",
      items: [
        { name: "Ahmet Yılmaz", text: "تسليم في الوقت المحدد وصناعة عالية الجودة." },
        { name: "Mehmet Demir", text: "الفريق الفني خبير جدًا ويمكن الوصول إليهم 24/7." },
        { name: "Ayşe Kaya", text: "مصعد الفيلا الخاص بنا رائع وهادئ." },
        { name: "Canan Erkin", text: "إدارة المشروع كانت ناجحة." },
        { name: "Burak Yılmaz", text: "أفضل أداء مقابل السعر في السوق." },
        { name: "Zeynep Çelik", text: "دقيقون جدًا في الصيانة الدورية." }
      ],
      more: "المزيد من التعليقات",
      less: "عرض أقل"
    },
    contact: {
      title: "اتصل بنا",
      sub: "لنخطط لمشروعك معًا",
      formTitle: "تواصل سريع",
      phName: "الاسم واللقب",
      phPhone: "الهاتف",
      phMsg: "رسالتك",
      btnSend: "إرسال عبر WhatsApp",
      btnEdit: "تعديل المعلومات"
    },
    admin: {
      btn: "مسؤول",
      login: "دخول",
      logout: "خروج",
      add: "إضافة",
      edit: "تعديل",
      save: "حفظ",
      cancel: "إلغاء",
      delete: "حذف",
      modalTitleNew: "إضافة جديد",
      modalTitleEdit: "تعديل المحتوى",
      loginTitle: "دخول المسؤول",
      loginSub: "الوصول إلى اللوحة",
      userPh: "اسم المستخدم",
      passPh: "كلمة المرور"
    }
  }
};

function ElevatorAnimation({ floorText, groundText }) {
  return (
    <div className="relative w-full max-w-sm ltr:ml-0 rtl:mr-0">
      <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xl p-6 md:p-8">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-start w-full">
          <div className="flex justify-start items-center gap-6 w-full ltr:flex-row rtl:flex-row-reverse">
            {/* Asansör Kuyusu */}
            <div className="relative h-96 w-40 shrink-0 overflow-hidden rounded-md border-2 border-slate-300 bg-slate-100 shadow-inner">
              <div className="absolute inset-x-2 top-2 bottom-2 border-x-2 border-slate-300 bg-slate-200/30" />
              <div className="absolute left-1/2 top-2 bottom-2 w-1 -ml-4 bg-slate-400/50" />
              <div className="absolute left-1/2 top-2 bottom-2 w-1 ml-3 bg-slate-400/50" />
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="absolute left-4 right-4 border-t border-slate-400/40" style={{ top: `${(index + 1) * 18}%` }} />
              ))}
              <div className="absolute left-6 right-6 h-16 z-10 rounded-lg border-2 border-blue-600 bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg flex items-center justify-center" style={{ top: '6%', animation: "elevatorMove 20s ease-in-out infinite" }}>
                <div className="absolute inset-y-1 left-1/2 w-0.5 bg-blue-800/30" />
                <div className="text-xs font-bold text-white tracking-widest bg-black/20 px-2 py-1 rounded backdrop-blur-sm">WL</div>
              </div>
              <div className="absolute top-2 left-0 right-0 flex justify-center gap-4 px-4">
                 <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                 <div className="h-2 w-2 rounded-full bg-red-500 opacity-30" />
              </div>
            </div>

            {/* Kat Göstergeleri */}
            <div className="flex flex-col justify-between h-[18rem] py-2 w-full">
              {[5, 4, 3, 2, 1].map((floor) => (
                <div key={floor} data-floor={floor} className="floor-indicator flex items-center gap-3 group w-full ltr:flex-row rtl:flex-row-reverse">
                  <div className="indicator-circle w-10 h-10 shrink-0 rounded-full border-2 border-slate-300 flex items-center justify-center text-sm font-bold text-slate-400 transition-all duration-300">
                    {floor}
                  </div>
                  <span className="indicator-text text-xs font-medium text-slate-400 uppercase tracking-wide whitespace-nowrap transition-colors">
                    {floor === 1 ? groundText : `${floor}. ${floorText}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes elevatorMove {
          0%, 15% { transform: translateY(390%); }
          20%, 35% { transform: translateY(292%); }
          40%, 55% { transform: translateY(195%); }
          60%, 75% { transform: translateY(98%); }
          80%, 95% { transform: translateY(0%); }
          100% { transform: translateY(390%); }
        }
        .group > div { transition: all 0.3s; }
        @keyframes highlightFloor5-bg { 80%, 95% { background-color: #2563EB; color: white; border-color: #2563EB; transform: scale(1.1); box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5); } 0%, 79%, 96%, 100% { background-color: transparent; color: #94A3B8; border-color: #CBD5E1; transform: scale(1); box-shadow: none; } }
        @keyframes highlightFloor4-bg { 60%, 75% { background-color: #2563EB; color: white; border-color: #2563EB; transform: scale(1.1); box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5); } 0%, 59%, 76%, 100% { background-color: transparent; color: #94A3B8; border-color: #CBD5E1; transform: scale(1); } }
        @keyframes highlightFloor3-bg { 40%, 55% { background-color: #2563EB; color: white; border-color: #2563EB; transform: scale(1.1); box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5); } 0%, 39%, 56%, 100% { background-color: transparent; color: #94A3B8; border-color: #CBD5E1; transform: scale(1); } }
        @keyframes highlightFloor2-bg { 20%, 35% { background-color: #2563EB; color: white; border-color: #2563EB; transform: scale(1.1); box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5); } 0%, 19%, 36%, 100% { background-color: transparent; color: #94A3B8; border-color: #CBD5E1; transform: scale(1); } }
        @keyframes highlightFloor1-bg { 0%, 15% { background-color: #2563EB; color: white; border-color: #2563EB; transform: scale(1.1); box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5); } 16%, 100% { background-color: transparent; color: #94A3B8; border-color: #CBD5E1; transform: scale(1); } }
        
        .flex:nth-child(1) .group > div { animation: highlightFloor5-bg 20s infinite; }
        .flex:nth-child(2) .group > div { animation: highlightFloor4-bg 20s infinite; }
        .flex:nth-child(3) .group > div { animation: highlightFloor3-bg 20s infinite; }
        .flex:nth-child(4) .group > div { animation: highlightFloor2-bg 20s infinite; }
        .flex:nth-child(5) .group > div { animation: highlightFloor1-bg 20s infinite; }
      `}</style>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("tr"); // Default Language
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showAllReferences, setShowAllReferences] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [visibleReviewCount, setVisibleReviewCount] = useState(3);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const [quoteForm, setQuoteForm] = useState({ name: "", phone: "", projectType: "Konut Asansörü", floorCount: "", location: "", note: "" });
  const [fastContactForm, setFastContactForm] = useState({ name: "", phone: "", message: "" });

  // Mevcut dilin içeriğini al
  const t = TRANSLATIONS[lang];
  const isRTL = lang === 'ar';

  // İçerikler (Data) - Dil değiştikçe güncellenir (Statik Veri İçin)
  const services = t.services.items.map((item, i) => ({ id: `service-${i}`, ...item }));
  const projects = t.projects.items;
  const references = t.references.items;
  const googleReviews = t.reviews.items;

  // Admin Edit Modal State (Sadece basit düzenleme için)
  const [editModal, setEditModal] = useState({ open: false, type: null, index: null });
  const [tempValue, setTempValue] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    if (e.target.username.value === "admin" && e.target.password.value === "password") {
      setIsLoggedIn(true); setShowLogin(false); setLoginError("");
    } else { setLoginError("Hatalı giriş!"); }
  };
  const handleLogout = () => setIsLoggedIn(false);

  const openEdit = (type, index = null) => {
    setEditModal({ open: true, type, index });
    // Not: Gerçek uygulamada burada dil bazlı veri çekilmeli, bu demo için boş
  };
  const openAdd = (type) => {
    if (!isLoggedIn && type !== "reference") { setShowLogin(true); return; }
    setEditModal({ open: true, type, index: null });
    setTempValue({});
  };
  const saveEdit = () => setEditModal({ open: false, type: null, index: null });
  const handleDelete = () => setEditModal({ open: false, type: null, index: null });

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const message = `*${t.hero.cta}*\n\n*Name:* ${quoteForm.name}\n*Phone:* ${quoteForm.phone}`;
    window.open(`https://wa.me/905302805526?text=${encodeURIComponent(message)}`, "_blank");
    setShowQuoteModal(false);
  };
  const handleFastContactSubmit = (e) => {
    e.preventDefault();
    const message = `*${t.contact.formTitle}*\n\n*Name:* ${fastContactForm.name}\n*Phone:* ${fastContactForm.phone}\n*Msg:* ${fastContactForm.message}`;
    window.open(`https://wa.me/905302805526?text=${encodeURIComponent(message)}`, "_blank");
  };
  const handleImageError = (e) => { e.target.src = "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800"; e.target.onerror = null; };

  return (
    <div className={`min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 overflow-x-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 text-sm font-bold text-white shadow-md">WL</div>
            <div className="leading-tight text-left rtl:text-right">
              <p className="text-base font-bold tracking-tight text-slate-900">Withmor Teknika Lift</p>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Elevator Solutions</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="hover:text-blue-700 transition-colors">{t.menu.about}</a>
            <a href="#services" className="hover:text-blue-700 transition-colors">{t.menu.services}</a>
            <a href="#projects" className="hover:text-blue-700 transition-colors">{t.menu.projects}</a>
            <a href="#references" className="hover:text-blue-700 transition-colors">{t.menu.references}</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">{t.menu.contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language Switcher - 4 Icons */}
            <div className="flex items-center gap-1.5 mr-2 rtl:ml-2 rtl:mr-0">
              {['tr', 'en', 'ru', 'ar'].map((l) => (
                <button 
                  key={l} 
                  onClick={() => setLang(l)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all ${lang === l ? 'bg-blue-900 text-white border-blue-900' : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {isLoggedIn && (
              <span className="hidden text-[11px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-200 sm:inline-flex items-center gap-1">
                 <Icons.CheckCircle2 size={12} /> {t.admin.btn}
              </span>
            )}
            <button onClick={() => { if (isLoggedIn) handleLogout(); else setShowLogin(true); }} className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 hover:border-slate-300">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                {isLoggedIn ? <Icons.LogOut size={12}/> : <Icons.User size={12}/>}
              </span>
              {isLoggedIn ? t.admin.logout : t.admin.login}
            </button>
            <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(true)}><Icons.Menu size={24} /></button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] bg-white h-[100dvh] flex flex-col animate-in slide-in-from-right duration-200 md:hidden">
             <div className="p-4 flex justify-between items-center border-b border-slate-100">
                <span className="font-bold text-slate-900">{t.menu.menu}</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-600"><Icons.X size={24} /></button>
             </div>
             <nav className="flex flex-col p-6 gap-6 text-lg font-medium text-slate-700">
                <div className="flex gap-2 justify-center pb-4 border-b border-slate-50">
                   {['tr', 'en', 'ru', 'ar'].map((l) => (
                    <button key={l} onClick={() => { setLang(l); setMobileMenuOpen(false); }} className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border ${lang === l ? 'bg-blue-900 text-white' : 'bg-slate-50'}`}>{l.toUpperCase()}</button>
                  ))}
                </div>
                <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.menu.about}</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.menu.services}</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t.menu.projects}</a>
                <a href="#references" onClick={() => setMobileMenuOpen(false)}>{t.menu.references}</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.menu.contact}</a>
                <button onClick={() => { setMobileMenuOpen(false); if (isLoggedIn) handleLogout(); else setShowLogin(true); }} className="text-left rtl:text-right text-blue-700 font-bold">
                  {isLoggedIn ? t.admin.logout : t.admin.login}
                </button>
             </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="w-full border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:px-8 md:grid-cols-2">
          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700 border border-blue-100 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" /> {t.hero.badges[0]}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold text-green-700 border border-green-100 shadow-sm">
                <Icons.CheckCircle2 size={12} /> {t.hero.badges[1]}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-[11px] font-bold text-purple-700 border border-purple-100 shadow-sm">
                <Icons.Star size={12} fill="currentColor" /> {t.hero.badges[2]}
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem] leading-tight">
              {t.hero.title}
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600">
              {t.hero.subtitle}
            </p>
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <button onClick={() => setShowQuoteModal(true)} className="relative overflow-hidden rounded-lg p-[4px] shadow-lg shadow-blue-900/20 transition hover:shadow-xl hover:-translate-y-0.5 group">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFF00_14%,#00FF00_28%,#00FFFF_42%,#0000FF_57%,#FF00FF_71%,#FF0000_85%,#FF0000_100%)]" />
                <span className="relative flex h-full w-full items-center justify-center rounded-md bg-blue-900 px-8 py-3 text-sm font-semibold text-white transition group-hover:bg-blue-800">{t.hero.cta}</span>
              </button>
              <a href="#projects" className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-700 group">
                {t.hero.secondaryCta} <Icons.ArrowRight className={`h-4 w-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 mt-8 bg-blue-900 rounded-xl p-6 text-white shadow-xl shadow-blue-900/10">
              <div><p className="text-2xl font-bold text-white">15+</p><p className="text-xs text-blue-200 font-medium">{t.hero.stats.years}</p></div>
              <div className="border-l border-blue-700 pl-6 rtl:pl-0 rtl:pr-6 rtl:border-l-0 rtl:border-r"><p className="text-2xl font-bold text-white">250+</p><p className="text-xs text-blue-200 font-medium">{t.hero.stats.projects}</p></div>
              <div className="border-l border-blue-700 pl-6 rtl:pl-0 rtl:pr-6 rtl:border-l-0 rtl:border-r"><p className="text-2xl font-bold text-white">7/24</p><p className="text-xs text-blue-200 font-medium">{t.hero.stats.support}</p></div>
            </div>

            {isLoggedIn && <button onClick={() => openEdit("hero")} className="mt-6 flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:underline"><Icons.Settings size={12} /> {t.admin.edit}</button>}
          </div>

          <div className="flex flex-col items-start justify-start w-full">
             {/* Animasyon Metni de dile göre güncelleniyor */}
             <div className="mb-8 text-left w-full rtl:text-right">
                <h3 className="text-lg font-bold text-slate-800 mb-2">{t.hero.animTitle}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t.hero.animDesc}</p>
              </div>
             <ElevatorAnimation floorText={t.hero.floor} groundText={t.hero.ground} />
          </div>
        </div>
      </section>

      {/* KURUMSAL */}
      <section id="about" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20 relative bg-[url('https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
               <span className="text-xs font-bold uppercase tracking-wider text-blue-200">{t.about.title}</span>
               {isLoggedIn && <button onClick={() => openEdit("aboutSection")} className="text-[10px] text-blue-100 hover:underline flex items-center gap-1"><Icons.Settings size={10}/> {t.admin.edit}</button>}
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{t.about.title}</h2>
            <p className="text-xl text-blue-200 font-semibold mb-6 font-serif italic">"{t.about.slogan}"</p>
            <p className="text-slate-200 leading-relaxed mb-8 text-sm md:text-base">{t.about.desc}</p>
            
            <div className="flex items-center gap-4">
               <a href="https://www.facebook.com/TEKNIKALIFT" target="_blank" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 transition-all shadow-sm"><Icons.Facebook size={20} /></a>
               <a href="https://www.instagram.com/withmorlift/" target="_blank" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white hover:bg-pink-600 transition-all shadow-sm"><Icons.Instagram size={20} /></a>
               <a href="https://wa.me/905302805526" target="_blank" className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-white hover:bg-green-600 transition-all shadow-sm"><Icons.Phone size={20} /></a>
            </div>
          </div>

          <div className="grid gap-4">
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-slate-200/20 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-200/20 text-blue-200 flex items-center justify-center flex-shrink-0"><Icons.MapPin size={20} /></div>
                <div><h4 className="font-bold text-white mb-1">{t.about.office}</h4><p className="text-sm text-slate-300">Kervanci ticaret merkezi, Velimeşe OSB, Çorlu</p></div>
             </div>
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-slate-200/20 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-200/20 text-blue-200 flex items-center justify-center flex-shrink-0"><Icons.Mail size={20} /></div>
                <div><h4 className="font-bold text-white mb-1">{t.about.email}</h4><p className="text-sm text-slate-300">info@withmor.com</p></div>
             </div>
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-slate-200/20 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow relative">
                <div className="w-10 h-10 rounded-full bg-blue-200/20 text-blue-200 flex items-center justify-center flex-shrink-0"><Icons.Phone size={20} /></div>
                <div><h4 className="font-bold text-white mb-1">{t.about.phone}</h4><a href="tel:+905302805526" className="text-sm text-slate-300 hover:text-white transition-colors block">+90 530 280 55 26</a></div>
                <a href="https://wa.me/905302805526" target="_blank" className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 bg-green-500/20 text-green-400 p-2 rounded-full hover:bg-green-500 hover:text-white transition-all shadow-lg border border-green-500/30`}><Icons.MessageCircle size={20} /></a>
             </div>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <main className="w-full bg-white">
        <section id="services" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-slate-200 pb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">{t.menu.services}</span>
                {isLoggedIn && <button onClick={() => openAdd("service")} className="flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold hover:bg-blue-100"><Icons.Plus size={10}/> {t.admin.add}</button>}
              </div>
              <h2 className="text-3xl font-bold text-slate-900">{t.services.title}</h2>
            </div>
            <p className="max-w-md text-sm text-slate-500 md:text-right rtl:text-left">{t.services.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 w-full">
              <div className="grid grid-cols-1 lg:flex lg:flex-col gap-3 lg:gap-1 w-full">
                {services.map((service, index) => (
                  <button key={service.id} onClick={() => setActiveService(index)} className={`w-full text-left rtl:text-right px-4 py-3 lg:px-5 lg:py-4 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group border h-full ${index === activeService ? "bg-slate-900 text-white shadow-lg lg:transform lg:scale-105 border-slate-900" : "bg-white text-slate-600 hover:bg-slate-50 border-slate-200 lg:border-transparent hover:border-slate-300"}`}>
                    <span className="line-clamp-2">{service.name}</span>
                    {index === activeService && <Icons.ChevronRight className={`h-4 w-4 text-blue-400 hidden lg:block ${isRTL ? 'rotate-180' : ''}`} />}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-2 h-full flex flex-col">
                <div className="relative h-48 sm:h-64 w-full overflow-hidden rounded-xl bg-slate-50 flex items-center justify-start lg:justify-center">
                   <img src={services[activeService]?.image} alt={services[activeService]?.name} onError={handleImageError} className="max-h-full max-w-full object-contain transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                     <h3 className="text-xl font-bold text-slate-900 mb-2">{services[activeService]?.name}</h3>
                     <p className="text-slate-600 leading-relaxed text-sm">{services[activeService]?.desc}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                     <button onClick={() => setShowQuoteModal(true)} className="text-sm font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 group">
                       {t.services.btnDetail} <Icons.ArrowRight className={`h-4 w-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                     </button>
                     {isLoggedIn && <button onClick={() => openEdit("service", activeService)} className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 underline"><Icons.Settings size={12}/> {t.admin.edit}</button>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-8">
             <div>
               <div className="flex items-center gap-2 mb-2">
                 <span className="text-xs font-bold uppercase tracking-wider text-blue-700">{t.menu.projects}</span>
                 {isLoggedIn && <button onClick={() => openAdd("project")} className="flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold"><Icons.Plus size={10}/> {t.admin.add}</button>}
               </div>
               <h2 className="text-3xl font-bold text-slate-900">{t.projects.title}</h2>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, showAllProjects ? projects.length : 3).map((project, index) => (
              <div key={index} className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in zoom-in duration-300">
                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors">{project.name}</h3>
                  <span className="inline-block mt-2 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit">{project.type}</span>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">{project.desc}</p>
                  {isLoggedIn && <button onClick={() => openEdit("project", index)} className="mt-4 flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 text-left underline"><Icons.Settings size={12}/> {t.admin.edit}</button>}
                </div>
              </div>
            ))}
          </div>

          {projects.length > 3 && (
            <div className="mt-8 text-center">
              <button onClick={() => setShowAllProjects(!showAllProjects)} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-all hover:border-blue-300 shadow-sm">
                {showAllProjects ? <>{t.projects.less} <Icons.ChevronUp size={16}/></> : <>{t.projects.more} ({projects.length - 3}) <Icons.ChevronDown size={16}/></>}
              </button>
            </div>
          )}
        </section>

        {/* Referanslar */}
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
                       <h2 className="text-2xl font-bold text-white">{t.references.title}</h2>
                       <button onClick={() => openAdd("reference")} className="flex items-center gap-1 text-[10px] bg-blue-800 border border-blue-700 text-blue-200 px-2 py-0.5 rounded font-bold hover:bg-blue-700"><Icons.Plus size={10}/> {t.admin.add}</button>
                    </div>
                    <div className="space-y-4">
                      {references.slice(0, showAllReferences ? references.length : 3).map((ref, index) => (
                        <div key={index} className="bg-blue-800 p-5 rounded-xl border border-blue-700 shadow-lg relative transition hover:border-blue-600 animate-in fade-in zoom-in duration-300">
                           <span className={`text-4xl text-blue-600 absolute top-2 font-serif ${isRTL ? 'left-4' : 'right-4'}`}>"</span>
                           <p className="text-sm text-blue-50 italic mb-4 relative z-10">{ref.quote}</p>
                           <div className="flex items-center justify-between border-t border-blue-700 pt-3">
                              <div><p className="text-sm font-bold text-white">{ref.company}</p><p className="text-xs text-blue-300">{ref.name} - {ref.title}</p></div>
                              {isLoggedIn && <button onClick={() => openEdit("reference", index)} className="flex items-center gap-1 text-xs text-blue-300 hover:text-white"><Icons.Settings size={12}/> {t.admin.edit}</button>}
                           </div>
                        </div>
                      ))}
                    </div>
                    {references.length > 3 && (
                      <div className="mt-6 text-center">
                        <button onClick={() => setShowAllReferences(!showAllReferences)} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500 bg-blue-800/50 text-sm font-semibold text-blue-100 hover:bg-blue-800 hover:text-white transition-all hover:border-blue-400">
                          {showAllReferences ? <>{t.references.less} <Icons.ChevronUp size={16}/></> : <>{t.references.more} ({references.length - 3}) <Icons.ChevronDown size={16}/></>}
                        </button>
                      </div>
                    )}
                 </div>

                 <div>
                    <div className="flex items-center justify-between mb-6">
                       <h2 className="text-2xl font-bold text-white">{t.reviews.title}</h2>
                       <a href="https://maps.app.goo.gl/mfxnQ3ngTwYtVyAN6" target="_blank" rel="noreferrer" className="text-xs font-semibold text-blue-200 hover:text-white hover:underline flex items-center gap-1">{t.reviews.linkText} {isRTL ? '←' : '→'}</a>
                    </div>
                    <div className="bg-blue-800 rounded-2xl border border-blue-700 p-6 shadow-lg">
                       <div className="flex items-center gap-4 mb-6">
                          <div className="text-4xl font-bold text-white">4.9</div>
                          <div>
                             <div className="flex text-amber-400 text-sm">{Array(5).fill(0).map((_,i)=><Icons.Star key={i} fill="currentColor" size={16}/>)}</div>
                             <p className="text-xs text-blue-300 mt-1">120+ Google</p>
                          </div>
                       </div>
                       <div className="space-y-4">
                          {googleReviews.slice(0, visibleReviewCount).map((review) => (
                             <div key={review.id} className="border-b border-blue-700 last:border-0 pb-4 last:pb-0 animate-in fade-in slide-in-from-top-4 duration-300">
                                <div className="flex items-center justify-between mb-1">
                                   <span className="text-sm font-bold text-white">{review.name}</span>
                                </div>
                                <div className="flex text-[10px] text-amber-400 mb-1">{Array(5).fill(0).map((_,i)=><Icons.Star key={i} size={12} fill="currentColor"/>)}</div>
                                <p className="text-xs text-blue-100 line-clamp-2">{review.text}</p>
                             </div>
                          ))}
                       </div>
                       <div className="mt-6 text-center border-t border-blue-700 pt-4">
                          <button onClick={() => { if (visibleReviewCount >= googleReviews.length) { setVisibleReviewCount(3); } else { setVisibleReviewCount(prev => prev + 3); } }} className="text-xs font-semibold text-blue-300 hover:text-white flex items-center justify-center gap-1 mx-auto transition-colors">
                            {visibleReviewCount >= googleReviews.length ? <>{t.reviews.less} <Icons.ChevronUp size={14}/></> : <>{t.reviews.more} <Icons.ChevronDown size={14}/></>}
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* İletişim */}
        <section id="contact" className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 py-20">
           <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2 block">{t.menu.contact}</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.contact.sub}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm">{companyInfo.about}</p>
              
              <div className="space-y-6 mb-8">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0"><Icons.MapPin className="w-5 h-5" /></div>
                    <div><p className="text-sm font-bold text-slate-900">{t.about.office}</p><p className="text-sm text-slate-600 mt-1">{companyInfo.address}</p></div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0"><Icons.Phone className="w-5 h-5" /></div>
                    <div><p className="text-sm font-bold text-slate-900">{t.about.phone}</p><p className="text-sm text-slate-600 mt-1">{companyInfo.phone}</p></div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0"><Icons.Mail className="w-5 h-5" /></div>
                    <div><p className="text-sm font-bold text-slate-900">{t.about.email}</p><p className="text-sm text-slate-600 mt-1">{companyInfo.email}</p></div>
                 </div>
              </div>
              {isLoggedIn && <button onClick={() => openEdit("company")} className="flex items-center gap-2 text-xs font-semibold text-blue-600 border border-blue-200 px-3 py-2 rounded hover:bg-blue-50"><Icons.Settings size={14}/> {t.contact.btnEdit}</button>}
           </div>

           <div className="space-y-8">
              <div className="relative overflow-hidden rounded-2xl p-[3px] shadow-lg group">
                 <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFF00_14%,#00FF00_28%,#00FFFF_42%,#0000FF_57%,#FF00FF_71%,#FF0000_85%,#FF0000_100%)]" />
                 <div className="relative h-full w-full bg-slate-50 border border-slate-200 p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{t.contact.formTitle}</h3>
                    <form onSubmit={handleFastContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <input required type="text" placeholder={t.contact.phName} value={fastContactForm.name} onChange={(e) => setFastContactForm({...fastContactForm, name: e.target.value})} className="w-full rounded-lg border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                          <input required type="tel" placeholder={t.contact.phPhone} value={fastContactForm.phone} onChange={(e) => setFastContactForm({...fastContactForm, phone: e.target.value})} className="w-full rounded-lg border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                        </div>
                        <textarea required rows={3} placeholder={t.contact.phMsg} value={fastContactForm.message} onChange={(e) => setFastContactForm({...fastContactForm, message: e.target.value})} className="w-full rounded-lg border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" />
                        <button type="submit" className="w-full bg-blue-900 text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                          <Icons.Phone size={16} /> {t.contact.btnSend}
                        </button>
                    </form>
                 </div>
              </div>
              <div className="h-64 w-full rounded-2xl overflow-hidden shadow-md border border-slate-200">
                 <iframe title="Office Map" width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=Withmor+Asans%C3%B6r+Market%2C+Kervanc%C4%B1+Ticaret+Merkezi%2C+Velime%C5%9Fe+OSB%2C+Tekirda%C4%9F&t=&z=15&ie=UTF8&iwloc=&output=embed" className="opacity-90 hover:opacity-100 transition-opacity"></iframe>
              </div>
           </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
         <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
               <div className="flex items-center gap-2 mb-4 text-white">
                  <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center font-bold text-xs">WL</div>
                  <span className="font-bold text-lg">{companyInfo.name}</span>
               </div>
               <p className="text-xs leading-relaxed text-slate-400 max-w-xs">{companyInfo.about}</p>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm mb-4">{t.menu.services}</h4>
               <ul className="space-y-2 text-xs">
                  <li><a href="#services" className="hover:text-white transition-colors">{t.menu.services}</a></li>
                  <li><a href="#projects" className="hover:text-white transition-colors">{t.menu.projects}</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">{t.menu.contact}</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold text-sm mb-4">Sosyal Medya</h4>
               <div className="flex gap-2">
                  <a href={companyInfo.facebook} target="_blank" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white"><Icons.Facebook size={16} /></a>
                  <a href={companyInfo.instagram} target="_blank" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-white"><Icons.Instagram size={16} /></a>
                  <a href={companyInfo.whatsapp} target="_blank" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors text-white"><Icons.Phone size={16} /></a>
               </div>
            </div>
         </div>
         <div className="mx-auto max-w-6xl px-6 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
            <span>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</span>
            <span>Engineering & Design: Withmor Teknika</span>
         </div>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            <h3 className="mb-2 text-lg font-bold text-slate-900">{t.admin.loginTitle}</h3>
            <p className="mb-4 text-xs text-slate-500">{t.admin.loginSub}</p>
            {loginError && <div className="mb-3 rounded bg-red-50 p-2 text-center text-xs text-red-600">{loginError}</div>}
            <form onSubmit={handleLogin} className="space-y-3 text-xs">
              <input type="text" name="username" placeholder={t.admin.userPh} className="w-full rounded border border-slate-200 p-2.5 outline-none focus:border-blue-600" />
              <input type="password" name="password" placeholder={t.admin.passPh} className="w-full rounded border border-slate-200 p-2.5 outline-none focus:border-blue-600" />
              <button type="submit" className="w-full rounded bg-blue-900 py-2.5 font-bold text-white hover:bg-blue-800">{t.admin.login}</button>
            </form>
            <button onClick={() => setShowLogin(false)} className="mt-3 w-full text-xs text-slate-400 hover:text-slate-600">{t.admin.cancel}</button>
          </div>
        </div>
      )}

      {/* Simple Edit Modal (Placeholder logic for brevity) */}
      {editModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl max-h-[80vh] overflow-y-auto">
            <h3 className="mb-4 text-lg font-bold text-slate-900">{editModal.index === null ? t.admin.modalTitleNew : t.admin.modalTitleEdit}</h3>
            <div className="p-4 bg-slate-50 rounded border border-slate-200 text-sm text-slate-500">Edit functionality is simplified for this demo. In a real app, this would update the <strong>{lang.toUpperCase()}</strong> content.</div>
            <div className="mt-6 flex justify-between gap-3">
               <div className="flex gap-2 w-full justify-end">
                  <button onClick={() => setEditModal({open: false, type: null, index: null})} className="rounded border border-slate-200 text-slate-600 px-4 py-2 text-xs font-bold hover:bg-slate-50">{t.admin.cancel}</button>
                  <button onClick={saveEdit} className="rounded bg-blue-900 text-white px-6 py-2 text-xs font-bold hover:bg-blue-800">{t.admin.save}</button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
