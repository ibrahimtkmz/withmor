"use client";

import { Icons } from "./Icons";

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-slate-900 mb-16 uppercase tracking-tight">
          Bizimle Çalışmanız İçin 4 Ana Neden
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol: Liste */}
          <div className="space-y-12">
            <div className="flex gap-6 group">
              <span className="text-6xl font-extralight text-slate-300 group-hover:text-blue-900 transition-colors">
                1
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Tecrübe ve Uzmanlık
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  30 yılı aşkın süredir asansör sektöründe faaliyet gösteren
                  firmamız, birikimli deneyimi ve uzman mühendis kadrosuyla
                  projelerinizi en üst seviyede yönetir ve çözümler sunar.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <span className="text-6xl font-extralight text-slate-300 group-hover:text-blue-900 transition-colors">
                2
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Teknoloji Odaklı Yaklaşım
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Şirketimiz, sektördeki en son teknolojileri takip ederek,
                  yenilikçi ve ileri teknolojiye dayalı asansör çözümleri sunar.
                  Teknolojinin sunduğu avantajları projelerinize entegre ederek
                  verimliliği artırır.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <span className="text-6xl font-extralight text-slate-300 group-hover:text-blue-900 transition-colors">
                3
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Kalite ve Güvenlik Standartları
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ürünlerimiz uluslararası normlara ve yerel yönetmeliklere
                  uygunluğuyla öne çıkar. Yük asansörleri, yük platformları,
                  villa asansörleri ve yatay asansörler için yüksek kalite ve
                  güvenlik standartlarını korurken, müşterilerimize güvenilir
                  çözümler sunarız.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <span className="text-6xl font-extralight text-slate-300 group-hover:text-blue-900 transition-colors">
                4
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Müşteri Odaklı Hizmet
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Müşteri memnuniyetini en üst düzeyde tutmak için satış öncesi
                  ve sonrası kesintisiz destek sağlıyoruz. Türkiye’nin her
                  yerinden 24 saat 444 37 59 numaralı telefondan ulaşabileceğiniz
                  teknik servisimizle ihtiyaçlarınıza özel çözümler üretiyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* Sağ: Video Alanı */}
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
  );
}
