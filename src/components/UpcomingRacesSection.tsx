"use client";

import { useState } from "react";
import Link from "next/link";
import { UPCOMING_RACES } from "@/data/maratonData";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

export default function UpcomingRacesSection() {
  const [activeTab, setActiveTab] = useState("Todas");

  const filterTabs = ["Todas", "5K", "10K", "21K", "Trail", "Montaña", "Infantiles"];

  const filteredRaces = UPCOMING_RACES.filter((race) => {
    if (activeTab === "Todas") return true;
    return race.distances.some((d) => d.toLowerCase().includes(activeTab.toLowerCase()));
  });

  return (
    <section className="w-full bg-[#F4E8D2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E6D4B5]">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header & Right Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#171717]">
              Próximas Carreras
            </h2>
            <p className="text-sm text-neutral-600 font-medium">
              Calendario oficial de eventos verificados en Arequipa y la región.
            </p>
          </div>

          <Link
            href="/carreras/"
            className="text-xs font-heading font-bold uppercase tracking-wider text-[#6A1838] hover:text-[#7E1C43] flex items-center gap-1 group"
          >
            <span>Ver Calendario Completo</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-[#6A1838] text-white shadow-md"
                  : "bg-white/80 text-[#171717] hover:bg-[#6A1838]/10 border border-[#E6D4B5]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid of Race Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRaces.map((race) => (
            <Link
              key={race.id}
              href={race.url}
              className="group bg-white rounded-2xl border border-[#E6D4B5] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Date Badge Header */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                <img
                  src={race.image}
                  alt={race.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Left Date Badge */}
                <div className="absolute top-3 left-3 bg-[#171717]/95 border border-[#6A1838] text-white p-2.5 rounded-xl text-center shadow-lg backdrop-blur-xs min-w-[56px]">
                  <span className="block font-heading text-lg font-extrabold leading-none text-[#F4E8D2]">
                    {race.date.split(" ")[0]}
                  </span>
                  <span className="block text-[10px] font-bold uppercase text-[#C04A35]">
                    {race.date.split(" ")[1]}
                  </span>
                  <span className="block text-[9px] text-neutral-400">
                    {race.date.split(" ")[2]}
                  </span>
                </div>

                {race.isFeatured && (
                  <span className="absolute top-3 right-3 bg-[#6A1838] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow-sm">
                    Destacada
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-[#171717] group-hover:text-[#6A1838] transition-colors leading-snug">
                    {race.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#C04A35]" />
                    <span>{race.location}</span>
                  </div>
                </div>

                {/* Distance Pills Footer */}
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
                    Ver <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
