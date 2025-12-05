"use client";

import { Icons } from "./Icons";

export default function ReferencesSection({
  references,
  isLoggedIn,
  openAdd,
  openEdit,
  showAllReferences,
  setShowAllReferences,
  googleReviews,
  visibleReviewCount,
  setVisibleReviewCount,
}) {
  const visibleRefs = showAllReferences
    ? references
    : references.slice(0, 3);

  const visibleReviews = googleReviews.slice(0, visibleReviewCount);

  return (
    <section
      id="references"
      className="bg-blue-900 w-full py-20 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none select-none opacity-5">
        <Icons.Quote className="absolute -top-10 -left-10 w-64 h-64 text-white transform rotate-12" />
        <Icons.Quote className="absolute top-1/3 right-10 w-32 h-32 text-white transform -rotate-12" />
        <Icons.Quote className="absolute bottom-10 left-1/4 w-48 h-48 text-white transform rotate-6" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Sol: Referanslar */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-bold text-white">
                Kurumsal Referanslar
              </h2>
              <button
                onClick={() => openAdd("reference")}
                className="flex items-center gap-1 text-[10px] bg-blue-800 border border-blue-700 text-blue-200 px-2 py-0.5 rounded font-bold hover:bg-blue-700"
              >
                <Icons.Plus size={10} /> Ekle
              </button>
            </div>

            <div className="space-y-4">
              {visibleRefs.map((ref, index) => (
                <div
                  key={index}
                  className="bg-blue-800 p-5 rounded-xl border border-blue-700 shadow-lg relative transition hover:border-blue-600 animate-in fade-in zoom-in duration-300"
                >
                  <span className="text-4xl text-blue-600 absolute top-2 right-4 font-serif">
                    "
                  </span>
                  <p className="text-sm text-blue-50 italic mb-4 relative z-10">
                    {ref.quote}
                  </p>
                  <div className="flex items-center justify-between border-t border-blue-700 pt-3">
                    <div>
                      <p className="text-sm font-bold text-white">
                        {ref.company}
                      </p>
                      <p className="text-xs text-blue-300">
                        {ref.name} - {ref.title}
                      </p>
                    </div>
                    {isLoggedIn && (
                      <button
                        onClick={() => openEdit("reference", index)}
                        className="flex items-center gap-1 text-xs text-blue-300 hover:text-white"
                      >
                        <Icons.Settings size={12} /> Düzenle
                      </button>
                    )}
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
                    <>
                      Daha Az Göster <Icons.ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      Daha Fazla Göster ({references.length - 3}){" "}
                      <Icons.ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Sağ: Müşteri Deneyimi */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Müşteri Deneyimi
              </h2>
              <a
                href="https://maps.app.goo.gl/mfxnQ3ngTwYtVyAN6"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-blue-200 hover:text-white hover:underline"
              >
                Google'da Görüntüle →
              </a>
            </div>

            <div className="bg-blue-800 rounded-2xl border border-blue-700 p-6 shadow-lg space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-white">4.9</div>
                <div>
                  <div className="flex text-amber-400 text-sm">
                    <Icons.Star fill="currentColor" size={16} />
                    <Icons.Star fill="currentColor" size={16} />
                    <Icons.Star fill="currentColor" size={16} />
                    <Icons.Star fill="currentColor" size={16} />
                    <Icons.Star fill="currentColor" size={16} />
                  </div>
                  <p className="text-xs text-blue-300 mt-1">
                    120+ Google Yorumu
                  </p>
                </div>
              </div>

              {/* Facebook Bloğu */}
              <div className="bg-blue-900/60 rounded-xl p-4 border border-blue-600 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                  <Icons.Facebook size={18} />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white mb-1">
                    Facebook Topluluğu
                  </p>
                  <p className="text-blue-100 mb-1">
                    Facebook üzerinden{" "}
                    <span className="font-semibold">
                      4.8 / 5 müşteri memnuniyeti
                    </span>
                    .
                  </p>
                  <p className="text-blue-100 mb-1">
                    Gerçek kullanıcı yorumları ve projelere dair geri
                    bildirimler.
                  </p>
                  <p className="text-blue-200">
                    Topluluk güveni ile büyüyen bir marka: Withmor.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {visibleReviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-blue-700 last:border-0 pb-4 last:pb-0 animate-in fade-in slide-in-from-top-4 duration-300"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-white">
                        {review.name}
                      </span>
                      <span className="text-[10px] text-blue-300">
                        {review.date}
                      </span>
                    </div>
                    <div className="flex text-[10px] text-amber-400 mb-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icons.Star
                          key={i}
                          size={12}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-blue-100 line-clamp-2">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-2 text-center border-t border-blue-700 pt-4">
                <button
                  onClick={() => {
                    if (visibleReviewCount >= googleReviews.length) {
                      setVisibleReviewCount(3);
                    } else {
                      setVisibleReviewCount((prev) => prev + 3);
                    }
                  }}
                  className="text-xs font-semibold text-blue-300 hover:text-white flex items-center justify-center gap-1 mx-auto transition-colors"
                >
                  {visibleReviewCount >= googleReviews.length ? (
                    <>
                      Daha Az Göster <Icons.ChevronUp size={14} />
                    </>
                  ) : (
                    <>
                      Daha Fazla Yorum Yükle{" "}
                      <Icons.ChevronDown size={14} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
