// components/layout/Footer.tsx
import React from "react";
import { Icons } from "../Icons";

type FooterProps = {
  companyInfo: {
    name: string;
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
};

export function Footer({ companyInfo }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4 text-white">
            <div className="h-8 w-24 flex items-center">
              <img
                src="/images/withmor-logo.png"
                alt="Withmor Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="font-bold text-lg">{companyInfo.name}</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400 max-w-xs">
            Güvenli, konforlu ve verimli dikey ulaşım çözümleri için mühendislik odaklı yaklaşım. Yük
            asansörleri, yük platformları, villa asansörleri ve yatay asansörler için Türkiye’nin her
            yerinden 24 saat 444 37 59 numaralı hattımızla hizmet.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold text-sm mb-4">Hızlı Erişim</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Hizmetler
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors">
                Projeler
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                İletişim
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-sm mb-4">Bizi Takip Edin</h4>
          <div className="flex gap-2">
            <a
              href={companyInfo.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
            >
              <Icons.Facebook width={16} height={16} />
            </a>
            <a
              href={companyInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-white"
            >
              <Icons.Instagram width={16} height={16} />
            </a>
            <a
              href={companyInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors text-white"
            >
              <Icons.Phone width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
        <span>
          © {new Date().getFullYear()} {companyInfo.name}. Tüm hakları saklıdır.
        </span>
        <span>Mühendislik ve Tasarım: Withmor</span>
      </div>
    </footer>
  );
}
