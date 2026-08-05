"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, Trophy, Camera, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function MobileNavBar() {
  const pathname = usePathname();
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const mainItems = [
    { label: "Inicio", href: "/", icon: Home },
    { label: "Carreras", href: "/carreras/", icon: Calendar },
    { label: "Resultados", href: "/resultados/", icon: Trophy },
    { label: "Fotos", href: "/fotografos-running/", icon: Camera },
  ];

  const moreItems = [
    { label: "Noticias", href: "/noticias/" },
    { label: "Rutas", href: "/rutas-running-arequipa/" },
    { label: "Grupos", href: "/grupos-running-arequipa/" },
    { label: "Planes", href: "/planes-running/" },
    { label: "Blog", href: "/blog/" },
    { label: "Marcas", href: "/marcas-servicios/" },
  ];

  return (
    <>
      {/* Mobile Drawer Menu when "Más" is clicked */}
      {showMoreMenu && (
        <div 
          className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end"
          onClick={() => setShowMoreMenu(false)}
        >
          <div 
            className="bg-[#F4E8D2] rounded-t-2xl p-6 shadow-2xl border-t border-[#E6D4B5] space-y-4 animate-in slide-in-from-bottom duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-[#6A1838]/20 rounded-full mx-auto mb-2" />
            <h3 className="font-heading text-lg font-bold text-[#6A1838] uppercase tracking-wide">
              Más Secciones
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {moreItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setShowMoreMenu(false)}
                  className="p-3 bg-white/80 rounded-xl border border-[#E6D4B5] text-sm font-semibold text-[#171717] hover:bg-[#6A1838] hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setShowMoreMenu(false)}
              className="w-full py-2.5 bg-[#6A1838] text-white font-bold rounded-xl text-center text-sm"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Fixed Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#171717] text-white border-t border-[#6A1838]/40 shadow-lg px-2 py-1">
        <div className="flex items-center justify-around h-14">
          {mainItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full px-1 text-center transition-colors ${
                  isActive ? "text-[#F4E8D2] font-bold" : "text-neutral-400 hover:text-white"
                }`}
              >
                <div className={`p-1 rounded-lg ${isActive ? "bg-[#6A1838]" : ""}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] mt-0.5 leading-none">{item.label}</span>
              </Link>
            );
          })}

          {/* Button "Más" */}
          <button
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            className={`flex flex-col items-center justify-center flex-1 h-full px-1 text-center transition-colors ${
              showMoreMenu ? "text-[#F4E8D2] font-bold" : "text-neutral-400 hover:text-white"
            }`}
          >
            <div className={`p-1 rounded-lg ${showMoreMenu ? "bg-[#6A1838]" : ""}`}>
              <MoreHorizontal className="w-5 h-5" />
            </div>
            <span className="text-[10px] mt-0.5 leading-none">Más</span>
          </button>
        </div>
      </nav>
    </>
  );
}
