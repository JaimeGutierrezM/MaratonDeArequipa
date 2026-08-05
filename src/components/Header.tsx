"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell, User, Flame } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Carreras", href: "/carreras/" },
    { name: "Resultados", href: "/resultados/" },
    { name: "Noticias", href: "/noticias/" },
    { name: "Rutas", href: "/rutas-running-arequipa/" },
    { name: "Grupos", href: "/grupos-running-arequipa/" },
    { name: "Fotos", href: "/fotografos-running/" },
    { name: "Planes", href: "/planes-running/" },
    { name: "Blog", href: "/blog/" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F4E8D2] border-b border-[#E6D4B5] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#6A1838] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
              <Flame className="w-6 h-6 text-[#F4E8D2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#171717] leading-none">
                MARATÓN DE <span className="text-[#6A1838]">AREQUIPA</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#6A1838]">
                SUR DEL PERÚ • 2,335 M
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-150 rounded-md ${
                    isActive
                      ? "text-[#6A1838] bg-[#E6D4B5]/50 font-bold"
                      : "text-[#171717] hover:text-[#6A1838] hover:bg-[#E6D4B5]/30"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#6A1838] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center space-x-3">
            <button
              aria-label="Buscar"
              className="p-2 rounded-full text-[#171717] hover:text-[#6A1838] hover:bg-[#E6D4B5]/60 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              aria-label="Notificaciones"
              className="relative p-2 rounded-full text-[#171717] hover:text-[#6A1838] hover:bg-[#E6D4B5]/60 transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C04A35] rounded-full ring-2 ring-[#F4E8D2]" />
            </button>

            <button
              aria-label="Perfil"
              className="p-2 rounded-full text-[#171717] hover:text-[#6A1838] hover:bg-[#E6D4B5]/60 transition-colors border border-[#6A1838]/20"
            >
              <User className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
