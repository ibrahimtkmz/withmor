"use client";

import { Icons } from "./Icons";

export default function GallerySection({
  galleryImages,
  visibleGalleryCount,
  setVisibleGalleryCount,
  isLoggedIn,
  openAdd,
  openEdit,
  setEditModal,
  handleImageError,
}) {
  return (
    <section
      id="gallery"
      className="py-20 bg-slate-50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Galeri</h2>
          <p className="text-slate-500 text-sm">
            Üretim tesisimiz ve tamamlanan projelerimizden kareler.
          </p>

          {isLoggedIn && (
            <button
              onClick={() => openAdd("gallery")}
              className="absolute top-0 right-0 flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full font-bold hover:bg-blue-100 border border-blue-200"
            >
              <Icons.Plus size={12} /> Yeni Resim Ekle
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.slice(0, visibleGalleryCount).map((img, i) => (
            <div
              key={i}
              className="group relative aspect-square bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 animate-in fade-in zoom-in"
            >
              {img ? (
                <>
                  <img
                    src={img}
                    alt={`Galeri ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Icons.ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 bg-slate-50">
                  <Icons.Image className="w-10 h-10 mb-2 opacity-50" />
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                    Resim Alanı {i + 1}
                  </span>
                </div>
              )}

              {isLoggedIn && (
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={() => openEdit("gallery", i)}
                    className="p-1.5 bg-white rounded-full text-slate-600 hover:text-blue-600 shadow-sm"
                  >
                    <Icons.Edit size={12} />
                  </button>
                  <button
                    onClick={() =>
                      setEditModal({
                        open: true,
                        type: "gallery",
                        index: i,
                      })
                    }
                    className="p-1.5 bg-white rounded-full text-red-500 hover:text-red-700 shadow-sm"
                  >
                    <Icons.Trash size={12} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {visibleGalleryCount < galleryImages.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleGalleryCount((prev) => prev + 8)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-all shadow-sm hover:shadow-md"
            >
              Daha Fazla Gör <Icons.ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
