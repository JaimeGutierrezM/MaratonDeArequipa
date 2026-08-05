"use client";

import { useState } from "react";
import Link from "next/link";
import { PHOTOGRAPHERS } from "@/data/maratonData";
import { Camera, Search, ChevronRight, Image as ImageIcon, CheckCircle2 } from "lucide-react";

export default function PhotographersSection() {
  const [dorsalSearch, setDorsalSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (dorsalSearch.trim()) {
      alert(`Buscando fotografías con el dorsal #${dorsalSearch} en todas las galerías asociadas...`);
    }
  };

  return (
    <section className="w-full bg-[#F4E8D2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E6D4B5]">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header & Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#171717]">
              Fotógrafos y Fotos
            </h2>
            <p className="text-sm text-neutral-600 font-medium">
              Encuentra tus fotografías oficiales por número de dorsal en galerías verificadas.
            </p>
          </div>

          <Link
            href="/fotografos-running/"
            className="text-xs font-heading font-bold uppercase tracking-wider text-[#6A1838] hover:text-[#7E1C43] flex items-center gap-1 group"
          >
            <span>Ver Todos Los Fotógrafos</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Search Bar for Photos by Dorsal */}
        <form onSubmit={handleSearch} className="bg-white p-4 rounded-2xl border border-[#E6D4B5] shadow-md max-w-2xl flex items-center gap-3">
          <Camera className="w-6 h-6 text-[#6A1838] shrink-0 ml-2" />
          <input
            type="text"
            placeholder="Busca tu número de dorsal en una foto... Ej: 1024"
            value={dorsalSearch}
            onChange={(e) => setDorsalSearch(e.target.value)}
            className="flex-1 py-2 text-sm bg-transparent border-none focus:outline-none font-medium text-[#171717]"
          />
          <button
            type="submit"
            className="px-5 py-2.5 bg-[#6A1838] hover:bg-[#7E1C43] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-1.5"
          >
            <Search className="w-4 h-4" />
            <span>Buscar</span>
          </button>
        </form>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHOTOGRAPHERS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E6D4B5] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-44 w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 bg-[#6A1838] text-white text-[10px] font-heading font-extrabold uppercase px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
                  <ImageIcon className="w-3 h-3" />
                  <span>{item.photoCount.toLocaleString()} fotos</span>
                </div>
              </div>

              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-[#171717] group-hover:text-[#6A1838] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium">Cobertura: {item.event}</p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#6A1838]">{item.price}</span>
                  
                  <Link
                    href={item.galleriesUrl}
                    className="text-xs font-semibold text-[#171717] hover:text-[#6A1838] flex items-center gap-1"
                  >
                    <span>Ver Galería</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
