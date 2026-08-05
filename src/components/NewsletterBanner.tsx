"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="w-full bg-[#6A1838] text-white py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-[#C04A35]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Info */}
        <div className="space-y-2 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 text-[#F4E8D2]">
            <Mail className="w-5 h-5 text-[#C04A35]" />
            <span className="font-heading text-xs font-bold uppercase tracking-widest">Newsletter Runner</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Sé el primero en enterarte
          </h2>

          <p className="text-sm text-[#F4E8D2]/90 max-w-md font-medium">
            Recibe noticias de carreras, aperturas de inscripciones, resultados y ofertas exclusivas en Arequipa.
          </p>
        </div>

        {/* Input Form & Social Icons */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4">
          {subscribed ? (
            <div className="p-4 bg-emerald-700 text-white font-bold text-sm rounded-xl text-center">
              ¡Gracias por suscribirte al portal Maratón de Arequipa!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full sm:w-auto items-center gap-2">
              <input
                type="email"
                required
                placeholder="Tu correo electrónico..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-72 px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-sm font-medium text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#F4E8D2]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#F4E8D2] hover:bg-white text-[#171717] font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
              >
                Suscribirme
              </button>
            </form>
          )}

          {/* Social Media Links */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-white/20 sm:pl-4">
            <span className="text-[10px] uppercase font-bold text-[#F4E8D2] hidden xl:inline">Síguenos:</span>
            
            {/* Instagram SVG */}
            <a href="#" aria-label="Instagram" className="p-2 bg-black/30 hover:bg-white/20 rounded-full transition-colors">
              <svg className="w-4 h-4 fill-current text-[#F4E8D2]" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook SVG */}
            <a href="#" aria-label="Facebook" className="p-2 bg-black/30 hover:bg-white/20 rounded-full transition-colors">
              <svg className="w-4 h-4 fill-current text-[#F4E8D2]" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.714 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>

            {/* Youtube SVG */}
            <a href="#" aria-label="YouTube" className="p-2 bg-black/30 hover:bg-white/20 rounded-full transition-colors">
              <svg className="w-4 h-4 fill-current text-[#F4E8D2]" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
