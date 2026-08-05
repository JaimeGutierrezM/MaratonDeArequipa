"use client";

import Link from "next/link";
import { BRANDS } from "@/data/maratonData";
import { ShieldCheck, ChevronRight, Award } from "lucide-react";

export default function SponsorsSection() {
  return (
    <section className="w-full bg-[#F4E8D2] py-10 px-4 sm:px-6 lg:px-8 border-b border-[#E6D4B5]">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header & Link */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#6A1838]" />
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#171717]">
              Marcas y Servicios
            </h2>
          </div>

          <Link
            href="/marcas-servicios/"
            className="text-xs font-heading font-bold uppercase tracking-wider text-[#6A1838] hover:text-[#7E1C43] flex items-center gap-1 group"
          >
            <span>Ver Todos</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Brands Logo Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="bg-white p-4 rounded-xl border border-[#E6D4B5] shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-center text-center space-y-1.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#6A1838]/10 flex items-center justify-center text-[#6A1838] group-hover:bg-[#6A1838] group-hover:text-white transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <span className="font-heading text-base font-bold text-[#171717] uppercase group-hover:text-[#6A1838] transition-colors">
                {brand.name}
              </span>

              <span className="text-[10px] text-neutral-500 font-medium">
                {brand.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
