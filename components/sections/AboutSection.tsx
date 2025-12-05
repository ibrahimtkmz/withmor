// components/sections/AboutSection.tsx
import React from "react";
import { Icons } from "../../components/Icons";

type AboutTabs = Record<
  string,
  {
    title: string;
    heading: string;
    subHeading: string;
    text1: string;
    text2: string;
    longText: string;
  }
>;

type AboutProps = {
  aboutTabs: AboutTabs;
  activeAboutTab: string;
  setActiveAboutTab: (key: string) => void;
  isExpanded: boolean;
  setIsExpanded: (v: boolean) => void;
  isLoggedIn: boolean;
  onEditActiveTab: () => void;
};

export function AboutSection({
  aboutTabs,
  activeAboutTab,
  setActiveAboutTab,
  isExpanded,
  setIsExpanded,
  isLoggedIn,
  onEditActiveTab,
}: AboutProps) {
  const active = aboutTabs[activeAboutTab];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex gap-4 md:gap-12 mb-12 border-b border-slate-200 pb-0 overflow-x-auto scrollbar-hide">
          {Object.keys(aboutTabs).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveAboutTab(key);
                setIsExpanded(false);
              }}
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

        <div className="grid lg:grid-cols-12 gap-12 items-start animate-in fade-in duration-500">
          <div className="lg:col-span-4">
            <div className="relative h-[150px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-lg group bg-slate-100 flex items-center justify-center">
              <img
                src="/images/about/kurumsal-bina.jpg"
                alt="Kurumsal Bina"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.style.display = "none";
                  img.parentElement?.classList.add("flex");
                }}
              />
              <div className="text-center text-slate-400">
                <Icons.Image className="w-16 h-16 mx-auto mb-2 opacity-50" />
                <span className="text-sm font-bold uppercase tracking-wider">Görsel Alanı</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center h-full pt-4">
            {isLoggedIn && (
              <button
                onClick={onEditActiveTab}
                className="mb-4 flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold hover:bg-blue-100 w-fit"
              >
                <Icons.Edit width={12} height={12} /> Bu Sekmeyi Düzenle
              </button>
            )}
            <h3 className="text-xl font-bold text-slate-800 mb-2">{active.heading}</h3>
            <h4 className="text-lg font-bold text-blue-700 mb-6">{active.subHeading}</h4>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">{active.text1}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">{active.text2}</p>

            {isExpanded && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-500 mb-6">
                <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-blue-900 pl-4 py-1">
                  {active.longText}
                </p>
              </div>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wide group w-fit hover:text-blue-700 transition-colors"
            >
              <span
                className={`w-1 h-4 ${
                  isExpanded ? "bg-red-500" : "bg-blue-600"
                } block transition-colors`}
              ></span>
              {isExpanded ? "Daha Az Göster" : "Daha Fazla"}
            </button>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100 h-full flex flex-col justify-center items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md mx-auto bg-slate-200 flex items-center justify-center relative">
                <Icons.User className="w-16 h-16 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Withmor Kurumsal</h3>
              <p className="text-sm font-bold text-slate-500 mb-6">
                Türkiye Genelinde Mühendislik Çözümleri
              </p>
              <p className="text-slate-600 text-sm italic relative px-4">
                <span className="text-4xl text-slate-200 absolute -top-4 left-0">"</span>
                Withmor, Türkiye genelinde endüstriyel ve özel mimari projelerde 30 yılı aşkın
                deneyimiyle hizmet vermektedir. Yük asansörleri, yük platformları, villa
                asansörleri ve yatay asansörlerde güvenilir çözüm ortağınız.
                <span className="text-4xl text-slate-200 absolute -bottom-8 right-0">"</span>
              </p>

              <button
                onClick={() =>
                  window.open("https://wa.me/905558883359", "_blank", "noopener,noreferrer")
                }
                className="mt-8 w-full max-w-xs flex items-center justify-between bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 group"
              >
                <div className="text-left">
                  <p className="text-[10px] font-medium text-white/90">
                    Türkiye’nin her yerinden 24 saat 444 37 59
                  </p>
                  <p className="text-sm font-bold">WhatsApp'tan Yaz</p>
                </div>
                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                  <Icons.MessageCircle width={20} height={20} className="text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
