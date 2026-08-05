import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavBar from "@/components/MobileNavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maratón de Arequipa | Portal de Running en Arequipa y Sur del Perú",
  description:
    "El portal de referencia del running en Arequipa y el sur del Perú. Carreras, resultados oficiales por dorsal, rutas, grupos de entrenamiento, fotos y noticias.",
  keywords: [
    "maratón de arequipa",
    "media maraton arequipa 2026",
    "resultados maraton arequipa",
    "running arequipa",
    "rutas running arequipa",
    "grupos running arequipa"
  ],
  openGraph: {
    title: "Maratón de Arequipa | Portal de Running",
    description: "Resultados oficiales, carreras, rutas y grupos de running a 2,335 m de altitud.",
    siteName: "Maratón de Arequipa",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F4E8D2] text-[#171717] selection:bg-[#6A1838] selection:text-white pb-16 md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileNavBar />
      </body>
    </html>
  );
}
