"use client";

import { Icons } from "./Icons";

/** Yönetici Login Modal */
export function LoginModal({ show, loginError, onClose, handleLogin }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
        <h3 className="mb-2 text-lg font-bold text-slate-900">
          Yönetici Girişi
        </h3>
        <p className="mb-4 text-xs text-slate-500">
          Panel erişimi için yetkili bilgilerinizi giriniz.
        </p>
        {loginError && (
          <div className="mb-3 rounded bg-red-50 p-2 text-center text-xs text-red-600">
            {loginError}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-3 text-xs">
          <input
            type="text"
            name="username"
            placeholder="Kullanıcı adı"
            className="w-full rounded border border-slate-200 p-2.5 outline-none focus:border-blue-600"
          />
          <input
            type="password"
            name="password"
            placeholder="Şifre"
            className="w-full rounded border border-slate-200 p-2.5 outline-none focus:border-blue-600"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-900 py-2.5 font-bold text-white hover:bg-blue-800"
          >
            Giriş Yap
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-3 w-full text-xs text-slate-400 hover:text-slate-600"
        >
          İptal
        </button>
      </div>
    </div>
  );
}

/** Proje Teklifi Modal */
export function QuoteModal({
  show,
  onClose,
  quoteForm,
  setQuoteForm,
  handleQuoteSubmit,
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        <h3 className="mb-1 text-lg font-bold text-slate-900">
          Proje Teklifi Al
        </h3>
        <p className="mb-5 text-xs text-slate-500">
          Bilgileri doldurun, WhatsApp üzerinden uzmanlarımız size ulaşsın.
        </p>
        <form onSubmit={handleQuoteSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              required
              type="text"
              placeholder="Ad Soyad"
              value={quoteForm.name}
              onChange={(e) =>
                setQuoteForm({ ...quoteForm, name: e.target.value })
              }
              className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600"
            />
            <input
              required
              type="tel"
              placeholder="Telefon"
              value={quoteForm.phone}
              onChange={(e) =>
                setQuoteForm({ ...quoteForm, phone: e.target.value })
              }
              className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600"
            />
          </div>
          <select
            value={quoteForm.projectType}
            onChange={(e) =>
              setQuoteForm({ ...quoteForm, projectType: e.target.value })
            }
            className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600 bg-white"
          >
            <option value="Malzeme teklifi iste">Malzeme teklifi iste</option>
            <option value="İnsan asansörleri">İnsan asansörleri</option>
            <option value="Yük asansörleri">Yük asansörleri</option>
            <option value="Araç asansörleri">Araç asansörleri</option>
            <option value="Yamaç asansörleri">Yamaç asansörleri</option>
            <option value="Villa & engelli asansörü">
              Villa & engelli asansörü
            </option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Durak Sayısı"
              value={quoteForm.floorCount}
              onChange={(e) =>
                setQuoteForm({ ...quoteForm, floorCount: e.target.value })
              }
              className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600"
            />
            <input
              type="text"
              placeholder="Konum / Şehir"
              value={quoteForm.location}
              onChange={(e) =>
                setQuoteForm({ ...quoteForm, location: e.target.value })
              }
              className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600"
            />
          </div>
          <textarea
            rows={3}
            placeholder="Ek Notlar..."
            value={quoteForm.note}
            onChange={(e) =>
              setQuoteForm({ ...quoteForm, note: e.target.value })
            }
            className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600 resize-none"
          />
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] py-2.5 text-sm font-bold text-white hover:bg-[#128C7E]"
          >
            <Icons.Phone size={16} /> WhatsApp ile Gönder
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full text-xs text-slate-400 hover:text-slate-600"
        >
          Kapat
        </button>
      </div>
    </div>
  );
}

/** Hizmet Detay Modal */
export function ServiceDetailModal({
  service,
  services,
  onClose,
  handleImageError,
  openEdit,
}) {
  if (!service) return null;

  const serviceIndex = services.findIndex((s) => s.id === service.id);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-bold text-slate-900">
            {service.name} – Detaylı Hizmet Bilgisi
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
          >
            <Icons.X size={18} />
          </button>
        </div>

        <div className="relative w-full aspect-[16/6] bg-slate-100 overflow-hidden">
          {service.image ? (
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              <Icons.Image className="w-10 h-10 mr-2" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Hizmet Görseli
              </span>
            </div>
          )}
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            {service.longDesc || service.desc}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
            <div className="text-xs text-slate-500">
              Bu içerik SEO uyumlu olarak hazırlanmış olup, yönetici girişi
              ile panel üzerinden düzenlenebilir.
            </div>
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                Kapat
              </button>
              {serviceIndex !== -1 && (
                <button
                  onClick={() => openEdit("service", serviceIndex)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-blue-900 text-white hover:bg-blue-800 flex items-center gap-1"
                >
                  <Icons.Edit size={12} /> İçeriği Düzenle
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Genel Edit Modal (hero, company, aboutTab, service, project, reference, gallery) */
export function EditModal({
  editModal,
  tempValue,
  setTempValue,
  handleDelete,
  saveEdit,
  onClose,
}) {
  if (!editModal.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        <h3 className="mb-4 text-lg font-bold text-slate-900">
          {editModal.index === null ? "Yeni Ekle" : "İçeriği Düzenle"}
        </h3>
        <div className="space-y-3">
          {Object.keys(tempValue).map((key) => {
            if (key === "id" || key === "title") return null;

            const label =
              key === "desc"
                ? "Açıklama"
                : key === "name"
                ? "Başlık"
                : key === "image"
                ? "Resim URL"
                : key === "heading"
                ? "Ana Başlık"
                : key === "subHeading"
                ? "Alt Başlık"
                : key === "text1"
                ? "Paragraf 1"
                : key === "text2"
                ? "Paragraf 2"
                : key === "quote"
                ? "Yorum"
                : key === "company"
                ? "Şirket"
                : key === "longDesc"
                ? "Uzun Açıklama (SEO)"
                : key;

            const isTextarea =
              key === "desc" ||
              key === "quote" ||
              key === "about" ||
              key.startsWith("text") ||
              key === "longText" ||
              key === "longDesc";

            return (
              <div key={key}>
                <label className="mb-1 block text-[10px] font-bold text-slate-500 uppercase">
                  {label}
                </label>
                {isTextarea ? (
                  <textarea
                    rows={
                      key === "longText" || key === "longDesc" ? 8 : 4
                    }
                    value={tempValue[key] ?? ""}
                    onChange={(e) =>
                      setTempValue((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }))
                    }
                    className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600"
                  />
                ) : (
                  <input
                    type="text"
                    value={tempValue[key] ?? ""}
                    onChange={(e) =>
                      setTempValue((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }))
                    }
                    className="w-full rounded border border-slate-200 p-2 text-xs outline-none focus:border-blue-600"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex justify-between gap-3">
          {editModal.index !== null &&
          ["service", "project", "reference", "gallery"].includes(
            editModal.type
          ) ? (
            <button
              onClick={handleDelete}
              className="rounded border border-red-200 text-red-600 px-4 py-2 text-xs font-bold hover:bg-red-50 flex items-center gap-1"
            >
              <Icons.Trash size={12} /> Sil
            </button>
          ) : (
            <div />
          )}
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="rounded border border-slate-200 text-slate-600 px-4 py-2 text-xs font-bold hover:bg-slate-50"
            >
              Vazgeç
            </button>
            <button
              onClick={saveEdit}
              className="rounded bg-blue-900 text-white px-6 py-2 text-xs font-bold hover:bg-blue-800"
            >
              {editModal.index === null ? "Ekle" : "Kaydet"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
