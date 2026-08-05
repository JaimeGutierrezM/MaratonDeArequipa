"use client";

import { useState } from "react";
import Link from "next/link";
import { RUNNING_PLANS } from "@/data/maratonData";
import { Dumbbell, Clock, ChevronRight, Target } from "lucide-react";

export default function RunningPlansSection() {
  const [activeLevel, setActiveLevel] = useState("Todos");

  const filterTabs = ["Todos", "Principiantes", "5K", "10K", "21K", "Maratón"];

  const filteredPlans = RUNNING_PLANS.filter((plan) => {
    if (activeLevel === "Todos") return true;
    return (
      plan.level.toLowerCase().includes(activeLevel.toLowerCase()) ||
      plan.title.toLowerCase().includes(activeLevel.toLowerCase())
    );
  });

  return (
    <section className="w-full bg-[#F4E8D2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E6D4B5]">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header & Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#171717]">
              Planes de Running
            </h2>
            <p className="text-sm text-neutral-600 font-medium">
              Programas de entrenamiento estructurados adaptados a la altura de Arequipa (2,335m).
            </p>
          </div>

          <Link
            href="/planes-running/"
            className="text-xs font-heading font-bold uppercase tracking-wider text-[#6A1838] hover:text-[#7E1C43] flex items-center gap-1 group"
          >
            <span>Ver Todos Los Planes</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveLevel(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeLevel === tab
                  ? "bg-[#6A1838] text-white shadow-md"
                  : "bg-white/80 text-[#171717] hover:bg-[#6A1838]/10 border border-[#E6D4B5]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredPlans.map((plan) => (
            <Link
              key={plan.id}
              href="/planes-running/"
              className="bg-white rounded-2xl border border-[#E6D4B5] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-36 w-full overflow-hidden bg-neutral-900">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <span className="absolute top-2.5 left-2.5 bg-[#6A1838] text-white text-[10px] font-heading font-extrabold uppercase px-2 py-0.5 rounded-md shadow-sm">
                  {plan.level}
                </span>

                <div className="absolute bottom-2 left-2 right-2 text-white">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-white leading-tight">
                    {plan.title}
                  </h3>
                </div>
              </div>

              <div className="p-3.5 space-y-3 flex-1 flex flex-col justify-between text-xs">
                <div className="space-y-1.5 text-neutral-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#6A1838]" />
                    <span className="font-semibold text-[#171717]">{plan.durationWeeks} semanas</span>
                  </div>

                  <div className="flex items-start gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#C04A35] shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight">{plan.target}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6A1838] bg-[#F4E8D2] px-2 py-0.5 rounded-md">
                    Nivel {plan.levelNumber}
                  </span>

                  <span className="font-semibold text-xs text-[#171717] group-hover:text-[#6A1838] flex items-center">
                    Ver Plan <ChevronRight className="w-3.5 h-3.5" />
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
