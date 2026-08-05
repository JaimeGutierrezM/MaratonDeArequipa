"use client";

import { useState } from "react";
import Link from "next/link";
import { NEWS_ARTICLES } from "@/data/maratonData";
import { Clock, ChevronRight, Newspaper } from "lucide-react";

export default function NewsSection() {
  const [activeRegion, setActiveRegion] = useState("Arequipa");

  const regions = ["Arequipa", "Perú", "Latam", "Mundo"];

  const filteredNews = NEWS_ARTICLES.filter((article) => {
    if (activeRegion === "Arequipa") return true;
    return article.region === activeRegion;
  });

  return (
    <section className="w-full bg-[#F4E8D2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E6D4B5]">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header & Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#171717]">
              Noticias de Running
            </h2>
            <p className="text-sm text-neutral-600 font-medium">
              Cobertura geográfica verificada en Arequipa, Perú y el mundo.
            </p>
          </div>

          <Link
            href="/noticias/"
            className="text-xs font-heading font-bold uppercase tracking-wider text-[#6A1838] hover:text-[#7E1C43] flex items-center gap-1 group"
          >
            <span>Ver Todas Las Noticias</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Region Filter Chips */}
        <div className="flex items-center gap-2">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeRegion === region
                  ? "bg-[#6A1838] text-white shadow-md"
                  : "bg-white/80 text-[#171717] hover:bg-[#6A1838]/10 border border-[#E6D4B5]"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNews.map((article) => (
            <Link
              key={article.id}
              href={article.url}
              className="bg-white rounded-2xl border border-[#E6D4B5] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-40 w-full overflow-hidden bg-neutral-900">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 bg-[#6A1838] text-white text-[10px] font-heading font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm">
                  {article.region}
                </span>

                <span className="absolute bottom-3 right-3 text-[10px] text-neutral-300 font-semibold bg-black/60 px-2 py-0.5 rounded-md">
                  {article.date}
                </span>
              </div>

              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-heading text-base font-bold uppercase tracking-tight text-[#171717] group-hover:text-[#6A1838] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>

                  <span className="font-semibold text-[#6A1838] group-hover:translate-x-1 transition-transform flex items-center">
                    Leer <ChevronRight className="w-3.5 h-3.5" />
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
