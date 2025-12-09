// components/ElevatorAnimation.tsx
import React from "react";

export function ElevatorAnimation() {
  const elevatorModels = [
    { id: 1, label: "İnsan asansörleri" },
    { id: 2, label: "Yük asansörleri" },
    { id: 3, label: "Araç asansörleri" },
    { id: 4, label: "Yamaç asansörleri" },
    { id: 5, label: "Villa asansörleri" },
  ];

  return (
    <div className="relative w-full max-w-sm">
      <div className="relative overflow-hidden rounded-2xl bg-blue-900 border border-blue-800 shadow-xl shadow-blue-900/30 p-6 md:p-8">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-700/40 rounded-full blur-2xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-blue-800/40 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-start w-full">
          <div className="mb-8 text-left w-full">
            <h3 className="text-lg font-bold text-white mb-2">
              Akıllı Dikey Ulaşım Sistemleri
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Yük asansörleri, yük platformları, villa asansörleri ve yatay asansörler için
              Türkiye’nin her yerinden 24 saat 444 37 59 numaralı hattan ulaşılabilir güvenli ve
              konforlu çözümler.
            </p>
          </div>

          <div className="flex justify-start items-center gap-6 w-full">
            {/* SOL */}
            <div className="relative h-96 w-40 shrink-0 overflow-hidden rounded-md border-2 border-blue-300/40 bg-blue-50/10 shadow-inner">
              <div className="absolute inset-x-2 top-2 bottom-2 border-x-2 border-blue-200/40 bg-blue-200/20" />
              <div className="absolute left-1/2 top-2 bottom-2 w-1 -ml-4 bg-blue-300/40" />
              <div className="absolute left-1/2 top-2 bottom-2 w-1 ml-3 bg-blue-300/40" />

              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute left-4 right-4 border-t border-blue-300/30"
                  style={{ top: `${(index + 1) * 16}%` }}
                />
              ))}

              <div
                className="absolute left-6 right-6 h-16 z-10 rounded-lg border-2 border-blue-600 bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg flex items-center justify-center overflow-hidden"
                style={{ top: "6%", animation: "elevatorMove 20s ease-in-out infinite" }}
              >
                <div className="absolute inset-y-1 left-1/2 w-0.5 bg-blue-800/30" />
                <div className="relative w-full h-full flex items-center justify-center px-2">
                  <img
                    src="/images/withmor-logo.png"
                    alt="Withmor Logo"
                    className="w-full h-full object-contain opacity-95"
                  />
                </div>
              </div>

              <div className="absolute top-2 left-0 right-0 flex justify-center gap-4 px-4">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <div className="h-2 w-2 rounded-full bg-red-500 opacity-30" />
              </div>
            </div>

            {/* SAĞ */}
            <div className="flex flex-col justify-between h-[18rem] py-2 w-full">
              {elevatorModels
                .slice()
                .reverse()
                .map((item) => (
                  <div
                    key={item.id}
                    data-floor={item.id}
                    className="floor-indicator flex items-center gap-3 group w-full"
                  >
                    <div className="indicator-circle w-10 h-10 shrink-0 rounded-full border-2 border-blue-200/50 flex items-center justify-center transition-all duration-300 bg-white/90 overflow-hidden">
                      <img
                        src="/images/withmor-logo.png"
                        alt="Withmor Logo"
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <span className="indicator-text text-xs font-semibold text-blue-100 tracking-wide whitespace-nowrap transition-colors">
                      {item.label}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes elevatorMove {
          0%, 10%   { transform: translateY(400%); }
          15%, 25%  { transform: translateY(300%); }
          30%, 40%  { transform: translateY(200%); }
          45%, 55%  { transform: translateY(100%); }
          60%, 70%  { transform: translateY(0%); }
          75%, 100% { transform: translateY(400%); }
        }
        @keyframes floorLight1 { 
          0%, 10%, 75%, 100% {
            background-color: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5);
          }
          11%, 74% {
            background-color: transparent;
            color: #94A3B8;
            border-color: #CBD5E1;
            transform: scale(1);
            box-shadow: none;
          }
        }
        @keyframes floorLight2 { 
          15%, 25% {
            background-color: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5);
          }
          0%, 14%, 26%, 100% {
            background-color: transparent;
            color: #94A3B8;
            border-color: #CBD5E1;
            transform: scale(1);
            box-shadow: none;
          }
        }
        @keyframes floorLight3 { 
          30%, 40% {
            background-color: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5);
          }
          0%, 29%, 41%, 100% {
            background-color: transparent;
            color: #94A3B8;
            border-color: #CBD5E1;
            transform: scale(1);
            box-shadow: none;
          }
        }
        @keyframes floorLight4 { 
          45%, 55% {
            background-color: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5);
          }
          0%, 44%, 56%, 100% {
            background-color: transparent;
            color: #94A3B8;
            border-color: #CBD5E1;
            transform: scale(1);
            box-shadow: none;
          }
        }
        @keyframes floorLight5 { 
          60%, 70% {
            background-color: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
            transform: scale(1.1);
            box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.5);
          }
          0%, 59%, 71%, 100% {
            background-color: transparent;
            color: #94A3B8;
            border-color: #CBD5E1;
            transform: scale(1);
            box-shadow: none;
          }
        }
        div[data-floor="1"] .indicator-circle { animation: floorLight1 20s infinite; }
        div[data-floor="2"] .indicator-circle { animation: floorLight2 20s infinite; }
        div[data-floor="3"] .indicator-circle { animation: floorLight3 20s infinite; }
        div[data-floor="4"] .indicator-circle { animation: floorLight4 20s infinite; }
        div[data-floor="5"] .indicator-circle { animation: floorLight5 20s infinite; }
      `}</style>
    </div>
  );
}
