"use client";

import { useEffect, useState } from "react";

// Withmor Social Feed section
// Elfsight sosyal medya akışını Next.js (App Router) ile
// sadece client tarafında yükler. Widget div'i HER ZAMAN DOM'da durur,
// script yüklendikçe içerik kendini oluşturur.

export default function SocialFeedSection() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const scriptId = "elfsight-platform-script";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (existingScript) {
      // Script daha önce eklenmiş
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.onload = () => {
      // Küçük bir gecikme ile widget'ların DOM'u taramasına izin ver
      setTimeout(() => setScriptLoaded(true), 300);
    };
    script.onerror = () => {
      console.error("Elfsight platform.js yüklenemedi");
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="social-feed"
      className="py-20 bg-white border-t border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-slate-900">
            Sosyal Medya
          </h2>
          <p className="text-sm text-slate-500">
            Withmor&apos;dan en güncel paylaşımlar.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm min-h-[320px]">
          {/* Elfsight widget DIV'i – script bu elementi otomatik bulup doldurur */}
          <div
            className="elfsight-app-149bc35a-94cc-4c90-8aed-ce6de5295a35 h-full w-full"
            data-elfsight-app-lazy
          />

          {/* Basit bir loading overlay (script henüz tam yüklenmediyse) */}
          {!scriptLoaded && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm text-slate-400">
              Sosyal medya akışı yükleniyor...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
