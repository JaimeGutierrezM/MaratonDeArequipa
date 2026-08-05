import Hero from "@/components/Hero";
import FeaturedRaceBanner from "@/components/FeaturedRaceBanner";
import ResultsSearchSection from "@/components/ResultsSearchSection";
import UpcomingRacesSection from "@/components/UpcomingRacesSection";
import RunningGroupsSection from "@/components/RunningGroupsSection";
import RunningRoutesSection from "@/components/RunningRoutesSection";
import PhotographersSection from "@/components/PhotographersSection";
import NewsSection from "@/components/NewsSection";
import RunningPlansSection from "@/components/RunningPlansSection";
import SponsorsSection from "@/components/SponsorsSection";
import NewsletterBanner from "@/components/NewsletterBanner";

export default function Home() {
  return (
    <div className="w-full space-y-0">
      {/* 1. Hero with Live Countdown & Image Background */}
      <Hero />

      {/* 2. Featured Race Banner (Media Maratón Arequipa 2026 P0) */}
      <FeaturedRaceBanner />

      {/* 3. Results Search Engine (Buscador por dorsal/nombre) */}
      <ResultsSearchSection />

      {/* 4. Upcoming Races Grid */}
      <UpcomingRacesSection />

      {/* 5. Running Groups Grid */}
      <RunningGroupsSection />

      {/* 6. Running Routes Grid */}
      <RunningRoutesSection />

      {/* 7. Photographers & Gallery Search */}
      <PhotographersSection />

      {/* 8. Running News Editorial */}
      <NewsSection />

      {/* 9. Training Plans Grid */}
      <RunningPlansSection />

      {/* 10. Sponsors & Brands Directory */}
      <SponsorsSection />

      {/* 11. Newsletter Subscription */}
      <NewsletterBanner />
    </div>
  );
}
