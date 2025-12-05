// components/layout/Navbar.tsx
import React from "react";
import { Icons } from "../Icons";

type NavbarProps = {
  companyInfo: {
    name: string;
  };
  aboutTabs: Record<
    string,
    { title: string; heading: string; subHeading: string; text1: string; text2: string; longText: string }
  >;
  services: { id: string; name: string }[];
  isLoggedIn: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  scrollToAbout: (key: string) => void;
  scrollToService: (id: string) => void;
};

export function Navbar({
  companyInfo,
  aboutTabs,
  services,
  isLoggedIn,
  mobileMenuOpen,
  setMobileMenuOpen,
  onLoginClick,
  onLogoutClick,
  scrollToAbout,
  scrollToService,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-28 items-center justify-center">
            <img
              src="/images/withmor-logo.png"
              alt="Withmor Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="text-base font-bold tracking-tight text-slate-900">{companyInfo.name}</p>
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Elevator Solutions
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex h-full">
          {/* Kurumsal */}
          <div className="relative group h-full flex items-center">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout("biz-kimiz");
              }}
              className="hover:text-blue-700 transition-colors flex items-center gap-1 py-4"
            >
              Kurumsal{" "}
              <Icons.ChevronDown
                width={14}
                height={14}
                className="group-hover:rotate-180 transition-transform duration-200"
              />
            </a>
            <div className="absolute left-0 top-full pt-2 w-48 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1">
                {Object.keys(aboutTabs).map((key) => (
                  <button
                    key={key}
                    onClick={() => scrollToAbout(key)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-colors border-l-2 border-transparent hover:border-blue-700"
                  >
                    {aboutTabs[key].title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Ürünlerimiz */}
          <div className="relative group h-full flex items-center">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToService("services");
              }}
              className="hover:text-blue-700 transition-colors flex items-center gap-1 py-4"
            >
              Ürünlerimiz{" "}
              <Icons.ChevronDown
                width={14}
                height={14}
                className="group-hover:rotate-180 transition-transform duration-200"
              />
            </a>
            <div className="absolute left-0 top-full pt-2 w-56 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(service.id)}
                    className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-colors border-l-2 border-transparent hover:border-blue-700"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <a href="#projects" className="hover:text-blue-700 transition-colors">
            Projeler
          </a>
          <a href="#references" className="hover:text-blue-700 transition-colors">
            Referanslar
          </a>
          <a href="#contact" className="hover:text-blue-700 transition-colors">
            İletişim
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {isLoggedIn && (
            <span className="hidden text-[11px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-200 sm:inline-flex items-center gap-1">
              <Icons.CheckCircle2 width={12} height={12} /> Yönetici
            </span>
          )}
          <button
            onClick={isLoggedIn ? onLogoutClick : onLoginClick}
            className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 hover:border-slate-300"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-600">
              {isLoggedIn ? (
                <Icons.LogOut width={12} height={12} />
              ) : (
                <Icons.User width={12} height={12} />
              )}
            </span>
            {isLoggedIn ? "Çıkış" : "Giriş"}
          </button>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Icons.Menu width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white h-[100dvh] flex flex-col animate-in slide-in-from-right duration-200 md:hidden">
          <div className="p-4 flex justify-between items-center border-b border-slate-100">
            <span className="font-bold text-slate-900">Menü</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-slate-100 rounded-full text-slate-600"
            >
              <Icons.X width={24} height={24} />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-4 text-lg font-medium text-slate-700 overflow-y-auto">
            <div>
              <span className="text-blue-900 font-bold block mb-2">Kurumsal</span>
              <div className="pl-4 flex flex-col gap-3 text-base border-l-2 border-slate-100">
                {Object.keys(aboutTabs).map((key) => (
                  <button
                    key={key}
                    onClick={() => scrollToAbout(key)}
                    className="text-left text-slate-600 hover:text-blue-700"
                  >
                    {aboutTabs[key].title}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-blue-900 font-bold block mb-2">Ürünlerimiz</span>
              <div className="pl-4 flex flex-col gap-3 text-base border-l-2 border-slate-100">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(service.id)}
                    className="text-left text-slate-600 hover:text-blue-700"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Projeler
            </a>
            <a
              href="#references"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Referanslar
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-blue-700"
            >
              İletişim
            </a>

            <div className="h-px bg-slate-100 my-2" />
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                isLoggedIn ? onLogoutClick() : onLoginClick();
              }}
              className="text-left text-blue-700 font-bold"
            >
              {isLoggedIn ? "Çıkış Yap" : "Yönetici Girişi"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
