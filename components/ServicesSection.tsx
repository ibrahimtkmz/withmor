"use client";

import { Icons } from "./Icons";

export default function ServicesSection({
  services,
  isLoggedIn,
  openAdd,
  openEdit,
  setActiveServiceModal,
  handleImageError,
}) {
  return (
    <section
      id="services"
      className="scroll-mt-24 max-w-6xl mx-auto px-6 py-20"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Hizmetlerimiz
            </span>
            {isLoggedIn && (
              <button
                onClick={() => openAdd("service")}
                className="flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold hover:bg-blue-100"
              >
                <Icons.Plus size={10} /> Ekle
              </button>
            )}
          </div>
          <h2 className="text-3xl font-bold text-slate-900">
            Ürün ve Hizmet Grupları
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="group flex flex-col h-full bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100"
          >
            {/* Görsel */}
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
                  <span className="text-xs font-bold uppercase tracking-wider opacity-60">
                    Görsel Alanı
                  </span>
                </div>
              )}
            </div>

            {/* İçerik */}
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
                  <button
                    onClick={() => openEdit("service", index)}
                    className="mt-2 text-[10px] text-slate-400 hover:text-slate-600 underline block"
                  >
                    Düzenle
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
