"use client";

import { Icons } from "./Icons";

export default function ContactSection({
  companyInfo,
  mainContactForm,
  setMainContactForm,
  handleMainContactSubmit,
}) {
  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* SOL */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <div>
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                Bize Ulaşın
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Projelerinizi Birlikte <br /> Hayata Geçirelim
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Sorularınız, proje talepleriniz veya teknik destek
                ihtiyaçlarınız için Türkiye’nin her yerinden 24 saat 444 37
                59 numaralı telefondan bize ulaşabilirsiniz.
              </p>
            </div>

            <div className="space-y-6">
              {/* Adres */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                  <Icons.MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase">
                    Adres
                  </p>
                  <p className="text-base font-medium text-slate-900 leading-snug">
                    {companyInfo.address}
                  </p>
                  {/* Harita linkini istersen kendin ekleyebilirsin */}
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                  <Icons.Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase">
                    Telefon & WhatsApp
                  </p>
                  <div className="flex flex-col gap-1">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase mr-2">
                        Sabit Hat
                      </span>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase mr-2">
                        GSM / WhatsApp
                      </span>
                      <a
                        href={`tel:${companyInfo.gsm}`}
                        className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors"
                      >
                        {companyInfo.gsm}
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Türkiye’nin her yerinden 24 saat 444 37 59 numaralı
                    telefondan ulaşılabilir.
                  </p>
                </div>
              </div>

              {/* E-posta */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
                  <Icons.Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase">
                    E-Posta
                  </p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="mailto:teknik@withmor.com.tr"
                      className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors"
                    >
                      teknik@withmor.com.tr
                    </a>
                    <a
                      href="mailto:muhasebe@withmor.com.tr"
                      className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors"
                    >
                      muhasebe@withmor.com.tr
                    </a>
                    <a
                      href="mailto:info@withmor.com.tr"
                      className="text-base font-bold text-slate-900 hover:text-blue-700 transition-colors"
                    >
                      info@withmor.com.tr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sosyal medya */}
            <div>
              <p className="text-sm font-bold text-slate-900 mb-4">
                Sosyal Medyada Biz
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={companyInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-white hover:bg-[#128C7E] transition-all transform hover:-translate-y-1 shadow-md shadow-green-100"
                >
                  <Icons.MessageCircle size={20} />{" "}
                  <span className="font-bold text-sm">WhatsApp</span>
                </a>
                <a
                  href={companyInfo.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1877F2] text-white hover:bg-[#166FE5] transition-all transform hover:-translate-y-1 shadow-md shadow-blue-100"
                >
                  <Icons.Facebook size={20} />{" "}
                  <span className="font-bold text-sm">Facebook</span>
                </a>
                <a
                  href={companyInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-md shadow-pink-100"
                >
                  <Icons.Instagram size={20} />{" "}
                  <span className="font-bold text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* SAĞ: Form */}
          <div className="flex flex-col gap-8">
            <div className="relative group z-10">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-600 via-blue-600 to-green-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-tilt"></div>
              <div className="relative overflow-hidden rounded-2xl p-[3px]">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#FFFF00_14%,#00FF00_28%,#00FFFF_42%,#0000FF_57%,#FF00FF_71%,#FF0000_85%,#FF0000_100%)]" />
                <div className="relative bg-white h-full rounded-xl p-6 md:p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Hızlı İletişim Formu
                  </h3>
                  <form
                    onSubmit={handleMainContactSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">
                          Ad Soyad
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Adınız Soyadınız"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors"
                          value={mainContactForm.name}
                          onChange={(e) =>
                            setMainContactForm({
                              ...mainContactForm,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">
                          Telefon
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="05XX..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors"
                          value={mainContactForm.phone}
                          onChange={(e) =>
                            setMainContactForm({
                              ...mainContactForm,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">
                        E-Posta
                      </label>
                      <input
                        type="email"
                        placeholder="ornek@mail.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors"
                        value={mainContactForm.email}
                        onChange={(e) =>
                          setMainContactForm({
                            ...mainContactForm,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">
                        Konu
                      </label>
                      <select
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors"
                        value={mainContactForm.subject}
                        onChange={(e) =>
                          setMainContactForm({
                            ...mainContactForm,
                            subject: e.target.value,
                          })
                        }
                      >
                        <option value="Malzeme teklifi iste">
                          Malzeme teklifi iste
                        </option>
                        <option value="İnsan asansörleri">
                          İnsan asansörleri
                        </option>
                        <option value="Yük asansörleri">
                          Yük asansörleri
                        </option>
                        <option value="Araç asansörleri">
                          Araç asansörleri
                        </option>
                        <option value="Yamaç asansörleri">
                          Yamaç asansörleri
                        </option>
                        <option value="Villa & engelli asansörü">
                          Villa & engelli asansörü
                        </option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-500 uppercase">
                        Mesajınız
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Mesajınızı buraya yazınız..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors resize-none"
                        value={mainContactForm.message}
                        onChange={(e) =>
                          setMainContactForm({
                            ...mainContactForm,
                            message: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 mt-2 shadow-lg shadow-slate-300/50"
                    >
                      <Icons.ArrowRight className="w-5 h-5" /> WhatsApp ile
                      Gönder
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
