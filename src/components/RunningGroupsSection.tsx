"use client";

import Link from "next/link";
import { RUNNING_GROUPS } from "@/data/maratonData";
import { Users, Clock, MapPin, Gauge, ChevronRight, MessageSquare } from "lucide-react";

export default function RunningGroupsSection() {
  return (
    <section className="w-full bg-[#F4E8D2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E6D4B5]">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#171717]">
              Grupos de Running
            </h2>
            <p className="text-sm text-neutral-600 font-medium">
              Comunidades y entrenamientos en grupo confirmados con horarios reales.
            </p>
          </div>

          <Link
            href="/grupos-running-arequipa/"
            className="text-xs font-heading font-bold uppercase tracking-wider text-[#6A1838] hover:text-[#7E1C43] flex items-center gap-1 group"
          >
            <span>Ver Todos Los Grupos</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 bg-white p-3.5 rounded-xl border border-[#E6D4B5] text-xs">
          <select className="px-3 py-1.5 bg-[#F4E8D2]/40 rounded-lg border border-[#E6D4B5] font-semibold text-[#171717]">
            <option value="">Todos los días</option>
            <option value="martes">Martes y Jueves</option>
            <option value="sabados">Sábados</option>
            <option value="domingos">Domingos</option>
          </select>

          <select className="px-3 py-1.5 bg-[#F4E8D2]/40 rounded-lg border border-[#E6D4B5] font-semibold text-[#171717]">
            <option value="">Distrito</option>
            <option value="cayma">Cayma</option>
            <option value="yanahuara">Yanahuara</option>
            <option value="cercado">Cercado</option>
            <option value="sabandia">Sabandía</option>
          </select>

          <select className="px-3 py-1.5 bg-[#F4E8D2]/40 rounded-lg border border-[#E6D4B5] font-semibold text-[#171717]">
            <option value="">Ritmo (min/km)</option>
            <option value="suave">6:00 - 7:00 min/km</option>
            <option value="medio">5:00 - 6:00 min/km</option>
          </select>

          <select className="px-3 py-1.5 bg-[#F4E8D2]/40 rounded-lg border border-[#E6D4B5] font-semibold text-[#171717]">
            <option value="">Nivel</option>
            <option value="principiante">Principiantes</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </div>

        {/* Groups Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RUNNING_GROUPS.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-2xl border border-[#E6D4B5] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Group Header Image */}
              <div className="relative h-40 w-full overflow-hidden bg-neutral-900">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <span className="absolute top-3 left-3 bg-[#6A1838] text-white text-[10px] font-heading font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm">
                  {group.district}
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white leading-tight">
                    {group.name}
                  </h3>
                  <span className="text-[11px] text-[#F4E8D2] font-medium">{group.level}</span>
                </div>
              </div>

              {/* Group Info Body */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between text-xs text-neutral-700">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#6A1838] shrink-0" />
                    <span><strong className="text-[#171717]">{group.days}</strong> • {group.time}</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#C04A35] shrink-0 mt-0.5" />
                    <span>Punto de encuentro: <strong className="text-[#171717]">{group.meetingPoint}</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-[#6A1838] shrink-0" />
                    <span>Ritmo: <strong className="text-[#6A1838] font-mono">{group.pace}</strong></span>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-[11px] text-neutral-500">
                    <Users className="w-3.5 h-3.5" />
                    <span>{group.membersCount} runners</span>
                  </div>

                  <a
                    href={group.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] rounded-lg flex items-center gap-1 shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>Unirme</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
