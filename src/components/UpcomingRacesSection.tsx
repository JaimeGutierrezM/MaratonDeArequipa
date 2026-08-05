"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ALL_RACES_DATABASE, RaceItem } from "@/data/maratonData";
import { Calendar, MapPin, ChevronRight, LayoutGrid, CalendarDays, History, Award, CheckCircle2 } from "lucide-react";

export default function UpcomingRacesSection() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [activeTab, setActiveTab] = useState<"proximas" | "pasadas">("proximas");
  const [viewMode, setViewMode] = useState<"cards" | "calendar">("cards");

  // System current date
  const nowIso = useMemo(() => new Date().toISOString(), []);

  // Process races dynamically by date
  const { upcomingRaces, pastRaces, nextClosestRace } = useMemo(() => {
    const upcoming = ALL_RACES_DATABASE.filter((r) => r.isoDate >= nowIso).sort(
      (a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime()
    );

    const past = ALL_RACES_DATABASE.filter((r) => r.isoDate < nowIso).sort(
      (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
    );

    const closest = upcoming.length > 0 ? upcoming[0] : ALL_RACES_DATABASE[0];

    return { upcomingRaces: upcoming, pastRaces: past, nextClosestRace: closest };
  }, [nowIso]);

  const categoryTabs = ["Todas", "5K", "10K", "21K", "42K", "Trail"];

  const currentList = activeTab === "proximas" ? upcomingRaces : pastRaces;

  const filteredRaces = currentList.filter((race) => {
    if (activeCategory === "Todas") return true;
    return race.distances.some((d) => d.toLowerCase().includes(activeCategory.toLowerCase()));
  });

  return (
    <section className="w-full bg-[#F4E8D2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E6D4B5]" id="calendario-section">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Calendar className="w-7 h-7 text-[#6A1838]" />
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#171717]">
                Calendario de Carreras
              </h2>
            </div>
            <p className="text-sm text-neutral-600 font-medium">
              Eventos actualizados automaticamente por fecha con vista de calendario e historico.
            </p>
          </div>

          {/* View Mode Toggle (Cards / Calendar) */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-[#E6D4B5] shadow-xs">
            <button
              onClick={() => setViewMode("cards")}
              className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === "cards" ? "bg-[#6A1838] text-white shadow-xs" : "text-[#171717] hover:bg-neutral-100"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Vista Tarjetas</span>
            </button>

            <button
              onClick={() => setViewMode("calendar")}
              className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === "calendar" ? "bg-[#6A1838] text-white shadow-xs" : "text-[#171717] hover:bg-neutral-100"
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5 text-[#F4E8D2]" />
              <span>Vista Calendario</span>
            </button>
          </div>
        </div>

        {/* Highlighted Closest Upcoming Race Banner */}
        {nextClosestRace && (
          <div className="bg-[#171717] text-white rounded-2xl p-6 border-2 border-[#6A1838] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6A1838]/30 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Left Info */}
              <div className="space-y-3 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="bg-[#6A1838] text-white text-[10px] font-heading font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                    Carrera Mas Proxima (Destacada Automatica)
                  </span>
                  <span className="bg-emerald-700 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {nextClosestRace.status}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
                  {nextClosestRace.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 font-medium flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C04A35]" />
                  <span>{nextClosestRace.location} • Organizador: {nextClosestRace.organizer}</span>
                </p>
              </div>

              {/* Prominent High-Contrast Date Badge */}
              <div className="bg-[#6A1838] text-white p-4 rounded-2xl text-center border-2 border-[#F4E8D2] shadow-2xl min-w-[150px] shrink-0 transform hover:scale-105 transition-transform">
                <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#F4E8D2]">
                  FECHA MAS NOTORIA
                </span>
                <span className="block font-heading text-4xl font-black text-white leading-none my-1">
                  {nextClosestRace.date.split(" ")[0]}
                </span>
                <span className="block font-heading text-base font-bold uppercase tracking-wider text-[#F4E8D2]">
                  {nextClosestRace.date.split(" ")[1]} {nextClosestRace.date.split(" ")[2]}
                </span>
              </div>

            </div>
          </div>
        )}

        {/* Tab Filters: Proximas vs Pasadas */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#E6D4B5] pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("proximas")}
              className={`px-5 py-2 rounded-xl text-xs font-heading font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "proximas"
                  ? "bg-[#6A1838] text-white shadow-md"
                  : "bg-white text-[#171717] hover:bg-neutral-100 border border-[#E6D4B5]"
              }`}
            >
              Proximas Carreras ({upcomingRaces.length})
            </button>

            <button
              onClick={() => setActiveTab("pasadas")}
              className={`px-5 py-2 rounded-xl text-xs font-heading font-extrabold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === "pasadas"
                  ? "bg-[#171717] text-[#F4E8D2] shadow-md"
                  : "bg-white text-[#171717] hover:bg-neutral-100 border border-[#E6D4B5]"
              }`}
            >
              <History className="w-3.5 h-3.5 text-[#C04A35]" />
              <span>Carreras Pasadas / Historico ({pastRaces.length})</span>
            </button>
          </div>

          {/* Distance Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categoryTabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-[11px] font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#171717] text-white"
                    : "bg-white/80 text-neutral-700 hover:bg-neutral-200 border border-[#E6D4B5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* View Mode 1: Cards View */}
        {viewMode === "cards" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRaces.map((race) => (
              <Link
                key={race.id}
                href={race.url}
                className="group bg-white rounded-2xl border border-[#E6D4B5] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={race.image}
                    alt={race.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Prominent High Contrast Date Badge */}
                  <div className="absolute top-3 left-3 bg-[#6A1838] border-2 border-[#F4E8D2] text-white p-2.5 rounded-xl text-center shadow-2xl backdrop-blur-xs min-w-[64px]">
                    <span className="block font-heading text-2xl font-black leading-none text-white">
                      {race.date.split(" ")[0]}
                    </span>
                    <span className="block text-[10px] font-extrabold uppercase text-[#F4E8D2] tracking-wider">
                      {race.date.split(" ")[1]}
                    </span>
                    <span className="block text-[9px] text-neutral-300">
                      {race.date.split(" ")[2]}
                    </span>
                  </div>

                  {race.status === "Finalizado" ? (
                    <span className="absolute top-3 right-3 bg-[#171717] text-[#F4E8D2] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border border-[#F4E8D2]/40 shadow-sm">
                      Finalizado
                    </span>
                  ) : (
                    <span className="absolute top-3 right-3 bg-[#C04A35] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm">
                      {race.status}
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-[#171717] group-hover:text-[#6A1838] transition-colors leading-snug">
                      {race.title}
                    </h3>

                    <p className="text-xs text-neutral-600 font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C04A35]" />
                      <span>{race.location}</span>
                    </p>

                    <p className="text-[11px] text-neutral-500 font-semibold">
                      {race.fullDate}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {race.distances.map((dist) => (
                        <span
                          key={dist}
                          className="px-2.5 py-0.5 bg-[#F4E8D2] text-[#6A1838] text-[11px] font-heading font-extrabold rounded-md border border-[#6A1838]/20"
                        >
                          {dist}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-semibold text-[#6A1838] group-hover:translate-x-1 transition-transform flex items-center">
                      {race.status === "Finalizado" ? "Ver Tiempos" : "Ver Detalle"} <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* View Mode 2: Interactive Calendar Matrix */
          <div className="bg-white rounded-2xl border border-[#E6D4B5] p-6 shadow-md space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
              <h3 className="font-heading text-xl font-bold uppercase text-[#6A1838] flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-[#C04A35]" />
                Calendario de Eventos Atleticos Arequipa 2026
              </h3>
              <span className="text-xs text-neutral-500 font-semibold">
                Mostrando {filteredRaces.length} carreras destacadas
              </span>
            </div>

            {/* Interactive Timeline Calendar */}
            <div className="space-y-4">
              {filteredRaces.map((race) => (
                <div
                  key={race.id}
                  className="p-4 bg-[#F4E8D2]/30 border border-[#E6D4B5] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 hover:bg-[#F4E8D2]/60 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#6A1838] text-white p-3 rounded-xl text-center min-w-[70px] shrink-0">
                      <span className="block font-heading text-2xl font-black leading-none">{race.date.split(" ")[0]}</span>
                      <span className="block text-[10px] font-bold text-[#F4E8D2] uppercase">{race.date.split(" ")[1]}</span>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg font-bold text-[#171717] uppercase">{race.title}</h4>
                      <p className="text-xs text-neutral-600">{race.fullDate} • {race.location}</p>
                      <p className="text-[11px] text-neutral-500 font-medium">Organiza: {race.organizer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      {race.distances.map((d) => (
                        <span key={d} className="px-2 py-0.5 bg-white text-[#6A1838] text-[10px] font-bold rounded border border-[#6A1838]/20">
                          {d}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={race.url}
                      className="px-4 py-2 bg-[#6A1838] text-white font-heading font-bold text-xs uppercase rounded-lg shadow-xs"
                    >
                      {race.status === "Finalizado" ? "Resultados" : "Ficha"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
