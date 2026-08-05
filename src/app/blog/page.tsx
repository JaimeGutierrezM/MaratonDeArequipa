import NewsSection from "@/components/NewsSection";

export default function BlogPage() {
  return (
    <div className="w-full bg-[#F4E8D2] min-h-screen py-8 space-y-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-extrabold uppercase text-[#6A1838]">
          Blog Evergreen SEO & Guías Runner
        </h1>
        <p className="text-sm text-neutral-600 font-medium mt-1">
          Artículos especializados sobre entrenamiento en altura, rutas verificadas y preparación física en Arequipa.
        </p>
      </div>

      <NewsSection />
    </div>
  );
}
