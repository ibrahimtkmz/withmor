"use client";

import { Icons } from "./Icons";

export default function ProjectsSection({
  projects,
  isLoggedIn,
  openAdd,
  openEdit,
  showAllProjects,
  setShowAllProjects,
}) {
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="scroll-mt-24 max-w-6xl mx-auto px-6 py-20 bg-slate-50"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Referans Projeler
            </span>
            {isLoggedIn && (
              <button
                onClick={() => openAdd("project")}
                className="flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-bold"
              >
                <Icons.Plus size={10} /> Ekle
              </button>
            )}
          </div>
          <h2 className="text-3xl font-bold text-slate-900">
            Seçilmiş Uygulamalar
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in zoom-in duration-300"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                {project.name}
              </h3>
              <span className="inline-block mt-2 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit">
                {project.type}
              </span>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">
                {project.desc}
              </p>
              {isLoggedIn && (
                <button
                  onClick={() => openEdit("project", index)}
                  className="mt-4 flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 text-left underline"
                >
                  <Icons.Settings size={12} /> Projeyi Düzenle
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-all hover:border-blue-300 shadow-sm"
          >
            {showAllProjects ? (
              <>
                Daha Az Göster <Icons.ChevronUp size={16} />
              </>
            ) : (
              <>
                Daha Fazla Proje Göster ({projects.length - 3}){" "}
                <Icons.ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
