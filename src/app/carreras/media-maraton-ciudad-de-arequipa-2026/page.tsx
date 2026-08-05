"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FEATURED_RACE, MOCK_RESULTS } from "@/data/maratonData";
import { Calendar, Clock, MapPin, Award, CheckCircle2, ShieldAlert, ArrowLeft, Trophy, Search, Download } from "lucide-react";

export default function MediaMaratonPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 152, hours: 8, minutes: 34, seconds: 51 });
  const [dorsalSearch, setDorsalSearch] = useState("");

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

  const resultsForThisRace = MOCK_RESULTS.filter(
    (r) => dorsalSearch === "" || r.dorsal.includes(dorsalSearch) || r.nombre.toLowerCase().includes(dorsalSearch.toLowerCase())
  );

  return (
    <div className="w-full bg-[#F4E8D2] min-h-screen pb-12">
      {/* Top Banner */}
      <div className="bg-[#6A1838] text-white py-4 px-4 sm:px-6 lg:px-8 border-b border-[#C04A35]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-xs font-heading font-bold uppercase tracking-wider text-[#F4E8D2] hover:underline flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a Inicio</span>
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-widest bg-emerald-700 px-3 py-1 rounded-full text-white">
            Evento Verificado Oficial
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-[#171717] text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=1600&auto=format&fit=crop')` }}
        />
        <div className="relative max-w-7xl mx-auto space-y-6">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#F4E8D2] bg-[#6A1838] px-3 py-1 rounded-md">
            Cuarta Edición • 2026
          </span>

          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Media Maratón Ciudad de Arequipa
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C04A35]" />
              <span>Domingo 9 de agosto de 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C04A35]" />
              <span>Plaza de Yanahuara, Arequipa</span>
            </div>
            <div className="flex items-center gap-2 font-heading font-bold text-[#F4E8D2]">
              <Award className="w-4 h-4 text-[#6A1838]" />
              <span>21K | 10K | 5K</span>
            </div>
          </div>

          {/* Countdown timer */}
          <div className="pt-4 flex items-center gap-3">
            <div className="bg-black/60 border border-neutral-700 px-4 py-2 rounded-xl text-center">
              <span className="font-heading text-2xl font-bold text-[#F4E8D2]">{String(timeLeft.days).padStart(2, "0")}</span>
              <span className="block text-[9px] uppercase text-neutral-400">Días</span>
            </div>
            <div className="bg-black/60 border border-neutral-700 px-4 py-2 rounded-xl text-center">
              <span className="font-heading text-2xl font-bold text-[#F4E8D2]">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="block text-[9px] uppercase text-neutral-400">Horas</span>
            </div>
            <div className="bg-black/60 border border-neutral-700 px-4 py-2 rounded-xl text-center">
              <span className="font-heading text-2xl font-bold text-[#F4E8D2]">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="block text-[9px] uppercase text-neutral-400">Min</span>
            </div>
            <div className="bg-black/60 border border-neutral-700 px-4 py-2 rounded-xl text-center border-[#C04A35]">
              <span className="font-heading text-2xl font-bold text-[#C04A35]">{String(timeLeft.seconds).padStart(2, "0")}</span>
              <span className="block text-[9px] uppercase text-neutral-400">Seg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Consistency Alert Box as required by page 5 of OCR */}
        <div className="bg-[#C04A35]/10 border-l-4 border-[#C04A35] p-4 rounded-r-xl space-y-1">
          <div className="flex items-center gap-2 font-heading font-bold text-[#C04A35] text-sm uppercase">
            <ShieldAlert className="w-5 h-5" />
            <span>Alerta de Consistencia e Integridad de Datos</span>
          </div>
          <p className="text-xs text-neutral-700 leading-relaxed">
            Existe otro evento denominado &quot;Carrera Clásica Arequipa 2026&quot;. Esta ficha corresponde exclusivamente a la Cuarta Edición de la Media Maratón organizada por Event Sports Perú S.R.L. los datos son verificados directamente.
          </p>
        </div>

        {/* Operational Grid */}
        <div className="bg-white rounded-2xl border border-[#E6D4B5] p-6 shadow-md space-y-6">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-[#6A1838] border-b border-neutral-200 pb-3">
            Programa y Datos Operativos Confirmados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="space-y-1.5 p-4 bg-[#F4E8D2]/40 rounded-xl">
              <span className="text-xs font-bold uppercase text-[#6A1838] block">Organizador</span>
              <p className="font-semibold text-[#171717]">Event Sports Perú S.R.L.</p>
              <span className="text-[11px] text-emerald-700 font-bold">✓ Confirmado</span>
            </div>

            <div className="space-y-1.5 p-4 bg-[#F4E8D2]/40 rounded-xl">
              <span className="text-xs font-bold uppercase text-[#6A1838] block">Horarios de Largada</span>
              <p className="font-semibold text-[#171717]">Concentración: 6:00 a.m. | Calentamiento: 6:15 a.m.</p>
              <p className="text-xs text-neutral-600">Partidas desde 6:30 a.m. (21K, 10K y 5K)</p>
            </div>

            <div className="space-y-1.5 p-4 bg-[#F4E8D2]/40 rounded-xl">
              <span className="text-xs font-bold uppercase text-[#6A1838] block">Entrega de Kits</span>
              <p className="font-semibold text-[#171717]">7 y 8 de agosto de 2026</p>
              <p className="text-xs text-neutral-600">Lugar: Yanahuara (Lugar exacto por confirmar)</p>
            </div>

            <div className="space-y-1.5 p-4 bg-[#F4E8D2]/40 rounded-xl">
              <span className="text-xs font-bold uppercase text-[#6A1838] block">Cronometraje</span>
              <p className="font-semibold text-[#171717]">Chip electrónico y jueces certificados</p>
              <span className="text-[11px] text-emerald-700 font-bold">✓ Confirmado</span>
            </div>

            <div className="space-y-1.5 p-4 bg-[#F4E8D2]/40 rounded-xl">
              <span className="text-xs font-bold uppercase text-[#6A1838] block">Llegada y Meta</span>
              <p className="font-semibold text-[#171717]">Plaza de Yanahuara (2,335 m.s.n.m.)</p>
              <span className="text-[11px] text-emerald-700 font-bold">✓ Confirmado</span>
            </div>

            <div className="space-y-1.5 p-4 bg-[#F4E8D2]/40 rounded-xl">
              <span className="text-xs font-bold uppercase text-[#6A1838] block">Reglamento & Archivos</span>
              <button 
                onClick={() => alert("Descargando bases y reglamento oficial PDF...")}
                className="text-xs font-bold text-[#6A1838] hover:underline flex items-center gap-1 mt-1"
              >
                <Download className="w-4 h-4" />
                Descargar Reglamento PDF
              </button>
            </div>
          </div>
        </div>

        {/* Results module prepared for Sunday 9 August */}
        <div className="bg-white rounded-2xl border border-[#E6D4B5] p-6 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
            <div>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-[#171717] flex items-center gap-2">
                <Trophy className="w-6 h-6 text-[#6A1838]" />
                Módulo de Resultados Oficiales
              </h2>
              <p className="text-xs text-neutral-500">
                Estado del módulo: <span className="font-bold text-emerald-700">Oficial (Ediciones previas)</span> / Listo para carga el 9 de agosto.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Buscar por dorsal o nombre..."
                value={dorsalSearch}
                onChange={(e) => setDorsalSearch(e.target.value)}
                className="px-3 py-2 text-xs bg-[#F4E8D2]/40 border border-[#E6D4B5] rounded-lg font-medium"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#F4E8D2]/60 text-[#6A1838] font-heading font-bold uppercase border-b border-[#E6D4B5]">
                  <th className="py-2.5 px-3">Pos</th>
                  <th className="py-2.5 px-3">Dorsal</th>
                  <th className="py-2.5 px-3">Nombre</th>
                  <th className="py-2.5 px-3">Distancia</th>
                  <th className="py-2.5 px-3">Tiempo</th>
                  <th className="py-2.5 px-3">Ritmo</th>
                  <th className="py-2.5 px-3">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 font-medium">
                {resultsForThisRace.map((item) => (
                  <tr key={item.dorsal + item.carrera} className="hover:bg-[#F4E8D2]/20">
                    <td className="py-2.5 px-3 font-bold">#{item.pos}</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#6A1838]">{item.dorsal}</td>
                    <td className="py-2.5 px-3 font-bold">{item.nombre}</td>
                    <td className="py-2.5 px-3 font-heading font-bold">{item.distancia}</td>
                    <td className="py-2.5 px-3 font-mono">{item.tiempo}</td>
                    <td className="py-2.5 px-3 font-mono text-[#C04A35]">{item.ritmo} /km</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        {item.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
