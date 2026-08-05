"use client";

import Link from "next/link";
import { FEATURED_RACE } from "@/data/maratonData";
import { Calendar, Clock, MapPin, Route, ChevronRight, Award } from "lucide-react";

export default function FeaturedRaceBanner() {
  return (
    <section className="w-full bg-[#6A1838] text-white py-12 px-4 sm:px-6 lg:px-8 border-y-4 border-[#C04A35] relative overflow-hidden shadow-xl">
      {/* Background SVG Watermark Accents */}
      <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
        <Award className="w-96 h-96 text-white" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Info Header */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#F4E8D2] bg-black/30 px-3 py-1 rounded-md inline-block">
              Carrera Destacada P0
            </span>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase leading-tight text-white">
              {FEATURED_RACE.title}
            </h2>

            <p className="text-sm sm:text-base text-[#F4E8D2]/90 font-medium">
              La carrera más icónica del sur del Perú. <span className="font-bold text-white">#CorreArequipa</span>
            </p>
          </div>

          {/* Key Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-black/25 p-5 rounded-2xl border border-white/10">
            {/* Distancias */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-[#F4E8D2] font-semibold uppercase">
                <Route className="w-4 h-4 text-[#C04A35]" />
                <span>Distancias</span>
              </div>
              <p className="font-heading text-lg font-bold text-white">21K | 10K | 5K</p>
            </div>

            {/* Fecha */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-[#F4E8D2] font-semibold uppercase">
                <Calendar className="w-4 h-4 text-[#C04A35]" />
                <span>Fecha</span>
              </div>
              <p className="font-heading text-base font-bold text-white">09 AGO 2026</p>
              <p className="text-[10px] text-neutral-300">Domingo</p>
            </div>

            {/* Hora Largada */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-[#F4E8D2] font-semibold uppercase">
                <Clock className="w-4 h-4 text-[#C04A35]" />
                <span>Hora Largada</span>
              </div>
              <p className="text-xs font-bold text-white leading-snug">
                21K: 7:00 AM <br />
                10K: 7:15 AM
              </p>
            </div>

            {/* Ubicación */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-[#F4E8D2] font-semibold uppercase">
                <MapPin className="w-4 h-4 text-[#C04A35]" />
                <span>Ubicación</span>
              </div>
              <p className="text-xs font-bold text-white leading-tight">
                Plaza de Yanahuara, Arequipa
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Link
              href={FEATURED_RACE.url}
              className="px-5 py-3 bg-[#F4E8D2] hover:bg-white text-[#171717] font-heading font-bold text-sm uppercase tracking-wider rounded-xl text-center shadow-md transition-all flex items-center justify-center gap-2 group"
            >
              <span>Ver Información</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/rutas-running-arequipa/"
              className="px-4 py-2.5 bg-transparent hover:bg-white/10 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl text-center border border-white/30 transition-all flex items-center justify-center gap-2"
            >
              <Route className="w-4 h-4 text-[#F4E8D2]" />
              <span>Ver Ruta del 21K</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
