import UpcomingRacesSection from "@/components/UpcomingRacesSection";
import FeaturedRaceBanner from "@/components/FeaturedRaceBanner";

export default function CarrerasPage() {
  return (
    <div className="w-full bg-[#F4E8D2] min-h-screen py-8 space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-extrabold uppercase text-[#6A1838]">
          Calendario Oficial de Carreras
        </h1>
        <p className="text-sm text-neutral-600 font-medium mt-1">
          Descubre y consulta todas las carreras verificadas en Arequipa y el sur del Perú.
        </p>
      </div>

      <FeaturedRaceBanner />
      <UpcomingRacesSection />
    </div>
  );
}
