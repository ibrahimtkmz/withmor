// components/sections/HeroSection.tsx
import React from "react";
import { Icons } from "../../components/Icons";
import { ElevatorAnimation } from "../../components/ElevatorAnimation";

type HeroProps = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  isLoggedIn: boolean;
  onEditHero: () => void;
  onOpenQuoteModal: () => void;
};

export function HeroSection({ hero, isLoggedIn, onEditHero, onOpenQuoteModal }: HeroProps) {
  return (
    <section className="w-full border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:px-8 md:grid-cols-2">
        <div>
          <div className="mb-6 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700 border border-blue-100 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              TR’nin Her Yerinden 24 Saat 444 37 59
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold text-green-700 border border-green-100 shadow-sm">
              <Icons.CheckCircle2 width={12} height={12} />
              EN-81 Standartlarına Uygun
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-[11px] font-bold text-purple-700 border border-purple-100 shadow-sm">
              <Icons.Star width={12} height={12} fill="currentColor" />
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
              onClick={onOpenQuoteModal}
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
              {hero.secondaryCta}
              <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

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
              onClick={onEditHero}
              className="mt-6 flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:underline"
            >
              <Icons.Settings width={12} height={12} /> İçeriği Düzenle
            </button>
          )}
        </div>

        <div className="flex flex-col items-start justify-start w-full">
          <ElevatorAnimation />
        </div>
      </div>
    </section>
  );
}
