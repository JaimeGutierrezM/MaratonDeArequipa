"use client";

import Link from "next/link";
import { RUNNING_ROUTES } from "@/data/maratonData";
import { Route, Star, Download, ChevronRight, Mountain, Layers } from "lucide-react";

export default function RunningRoutesSection() {
  return (
    <section className="w-full bg-[#F4E8D2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E6D4B5]">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header & Right Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#171717]">
              Rutas para Correr
            </h2>
            <p className="text-sm text-neutral-600 font-medium">
              Rutas validadas con altitud, desnivel acumulado y archivos GPX para descargar.
            </p>
          </div>

          <Link
            href="/rutas-running-arequipa/"
            className="text-xs font-heading font-bold uppercase tracking-wider text-[#6A1838] hover:text-[#7E1C43] flex items-center gap-1 group"
          >
            <span>Ver Todas Las Rutas</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 bg-white p-3.5 rounded-xl border border-[#E6D4B5] text-xs">
          <select className="px-3 py-1.5 bg-[#F4E8D2]/40 rounded-lg border border-[#E6D4B5] font-semibold text-[#171717]">
            <option value="">Distrito</option>
            <option value="cercado">Cercado</option>
            <option value="sachaca">Sachaca</option>
            <option value="cayma">Cayma</option>
          </select>

          <select className="px-3 py-1.5 bg-[#F4E8D2]/40 rounded-lg border border-[#E6D4B5] font-semibold text-[#171717]">
            <option value="">Distancia</option>
            <option value="corta">&lt; 5 km</option>
            <option value="media">5 - 12 km</option>
            <option value="larga">&gt; 12 km</option>
          </select>

          <select className="px-3 py-1.5 bg-[#F4E8D2]/40 rounded-lg border border-[#E6D4B5] font-semibold text-[#171717]">
            <option value="">Nivel</option>
            <option value="facil">Fácil</option>
            <option value="dificil">Difícil</option>
          </select>

          <select className="px-3 py-1.5 bg-[#F4E8D2]/40 rounded-lg border border-[#E6D4B5] font-semibold text-[#171717]">
            <option value="">Superficie</option>
            <option value="asfalto">Asfalto</option>
            <option value="tierra">Tierra</option>
            <option value="mixto">Mixto</option>
          </select>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RUNNING_ROUTES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E6D4B5] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Map Preview Thumbnail */}
              <div className="relative h-36 w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 bg-[#171717]/90 text-[#F4E8D2] text-[10px] font-heading font-extrabold uppercase px-2.5 py-1 rounded-md border border-[#6A1838]/40">
                  {item.distanceKm} KM
                </span>

                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-md text-[10px] text-amber-400 font-bold">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>{item.rating}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="font-heading text-lg font-bold text-[#171717] group-hover:text-[#6A1838] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium">{item.district}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-2 bg-[#F4E8D2]/30 p-2 rounded-xl">
                  <div className="flex items-center gap-1.5 text-neutral-700">
                    <Mountain className="w-3.5 h-3.5 text-[#C04A35]" />
                    <span>+{item.elevationM}m desnivel</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-700">
                    <Layers className="w-3.5 h-3.5 text-[#6A1838]" />
                    <span>{item.surface}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                    item.difficulty === 'Fácil'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {item.difficulty}
                  </span>

                  <button
                    onClick={() => alert(`Descargando track GPX para ${item.title}`)}
                    className="text-xs font-semibold text-[#6A1838] hover:underline flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>GPX</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
