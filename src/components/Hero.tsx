"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Camera, Trophy, Calendar, MapPin } from "lucide-react";

export default function Hero() {
  // Target race date: August 9, 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 152,
    hours: 8,
    minutes: 34,
    seconds: 51,
  });

  useEffect(() => {
    const raceDate = new Date("2026-08-09T06:00:00-05:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = raceDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[660px] bg-[#171717] text-white overflow-hidden flex items-center">
      {/* Background Runner & Volcano Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105 transition-transform duration-10000 hover:scale-100"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />

      {/* Subtle Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/95 via-[#171717]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />

      {/* SVG Micro Details / Background Icons Accent */}
      <div className="absolute top-6 left-6 text-neutral-400 font-mono text-xs tracking-widest flex items-center gap-2 border border-neutral-700/50 px-3 py-1 rounded-full bg-black/40 backdrop-blur-xs">
        <MapPin className="w-3.5 h-3.5 text-[#C04A35]" />
        <span>2,335 M ALTU.</span>
        <span className="text-neutral-600">|</span>
        <span>AREQUIPA, PERÚ</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[1.05] text-white">
              Corre Arequipa. <br />
              <span className="text-[#F4E8D2] underline decoration-[#6A1838] decoration-4 underline-offset-8">
                Encuentra tu próxima meta.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 font-normal max-w-xl leading-relaxed">
              Altitud. Pasión. Comunidad. <br />
              Somos running. <span className="text-[#F4E8D2] font-semibold">Somos Arequipa.</span>
            </p>

            {/* CTAs Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/carreras/"
                className="px-6 py-3.5 bg-[#6A1838] hover:bg-[#7E1C43] text-white font-heading font-bold text-base uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
              >
                <Calendar className="w-5 h-5" />
                <span>Ver Carreras</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/resultados/"
                className="px-6 py-3.5 bg-[#F4E8D2] hover:bg-white text-[#171717] font-heading font-bold text-base uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2"
              >
                <Trophy className="w-5 h-5 text-[#6A1838]" />
                <span>Ver Resultados</span>
              </Link>

              <Link
                href="/fotografos-running/"
                className="px-5 py-3.5 bg-transparent hover:bg-white/10 text-neutral-200 border border-neutral-600 hover:border-neutral-400 font-heading font-bold text-sm uppercase tracking-wider rounded-lg transition-all flex items-center gap-2"
              >
                <Camera className="w-4 h-4 text-[#C04A35]" />
                <span>Encontrar Mis Fotos</span>
              </Link>
            </div>
          </div>

          {/* Right Floating Countdown Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#171717]/90 border border-[#6A1838]/60 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6A1838]/20 rounded-full blur-2xl group-hover:bg-[#6A1838]/30 transition-all" />
              
              <div className="relative space-y-6 text-center">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#F4E8D2] bg-[#6A1838] px-3.5 py-1 rounded-full">
                  Próxima Carrera Destacada
                </span>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
                  Media Maratón Ciudad de Arequipa 2026
                </h2>

                {/* Countdown Numbers Grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3 py-2">
                  <div className="bg-black/60 border border-neutral-800 rounded-xl p-3 flex flex-col items-center">
                    <span className="font-heading text-2xl sm:text-4xl font-extrabold text-[#F4E8D2]">
                      {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs text-neutral-400 font-semibold uppercase">Días</span>
                  </div>

                  <div className="bg-black/60 border border-neutral-800 rounded-xl p-3 flex flex-col items-center">
                    <span className="font-heading text-2xl sm:text-4xl font-extrabold text-[#F4E8D2]">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs text-neutral-400 font-semibold uppercase">Horas</span>
                  </div>

                  <div className="bg-black/60 border border-neutral-800 rounded-xl p-3 flex flex-col items-center">
                    <span className="font-heading text-2xl sm:text-4xl font-extrabold text-[#F4E8D2]">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs text-neutral-400 font-semibold uppercase">Min</span>
                  </div>

                  <div className="bg-black/60 border border-neutral-800 rounded-xl p-3 flex flex-col items-center border-[#C04A35]/40">
                    <span className="font-heading text-2xl sm:text-4xl font-extrabold text-[#C04A35]">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs text-neutral-400 font-semibold uppercase">Seg</span>
                  </div>
                </div>

                <div className="text-sm font-semibold text-neutral-300 flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-[#6A1838]" />
                  <span>09 DE AGOSTO, 2026</span>
                </div>

                <Link
                  href="/carreras/media-maraton-ciudad-de-arequipa-2026/"
                  className="block w-full py-3 bg-[#6A1838] hover:bg-[#7E1C43] text-white font-heading font-bold uppercase tracking-wider text-sm rounded-xl transition-all shadow-md"
                >
                  Ver Detalles de la Carrera
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
