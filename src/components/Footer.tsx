import Link from "next/link";
import { Flame, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#171717] text-white border-t border-[#6A1838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#6A1838] flex items-center justify-center text-white">
                <Flame className="w-6 h-6 text-[#F4E8D2]" />
              </div>
              <span className="font-heading text-2xl font-bold uppercase tracking-tight text-white">
                MARATÓN DE <span className="text-[#F4E8D2]">AREQUIPA</span>
              </span>
            </Link>

            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              La comunidad y portal de referencia del running en Arequipa y el sur del Perú. Información verificada, resultados oficiales y rutas en la Ciudad Blanca.
            </p>

            <div className="text-[11px] text-[#F4E8D2] font-mono">
              ALTITUD OFICIAL: 2,335 M S. N. M.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#F4E8D2]">
              Navegación
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/carreras/" className="hover:text-white transition-colors">Carreras</Link></li>
              <li><Link href="/resultados/" className="hover:text-white transition-colors">Resultados por Dorsal</Link></li>
              <li><Link href="/rutas-running-arequipa/" className="hover:text-white transition-colors">Rutas de Running</Link></li>
              <li><Link href="/grupos-running-arequipa/" className="hover:text-white transition-colors">Grupos de Entrenamiento</Link></li>
              <li><Link href="/fotografos-running/" className="hover:text-white transition-colors">Fotógrafos y Galerías</Link></li>
              <li><Link href="/planes-running/" className="hover:text-white transition-colors">Planes de Running</Link></li>
              <li><Link href="/blog/" className="hover:text-white transition-colors">Blog Evergreen SEO</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#F4E8D2]">
              Ayuda
            </h3>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cómo buscar resultados</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Formulario de Validación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto Organizadores</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3 text-xs text-neutral-300">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#F4E8D2]">
              Contacto
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C04A35]" />
                <span>hola@maratondearequipa.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C04A35]" />
                <span>+51 987 654 321</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C04A35]" />
                <span>Yanahuara / Cercado, Arequipa, Perú</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© 2026 Maratón de Arequipa. Todos los derechos reservados.</p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-300 transition-colors">Términos y Condiciones</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">Política de Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
