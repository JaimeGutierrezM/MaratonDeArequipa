// Event tracking helper for Google Analytics (GA4) and Vercel Analytics

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-DEMOAREQUIPA";

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).gtag) {
    ((window as unknown as Record<string, unknown>).gtag as Function)("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific dossier events
export type DossierEvent =
  | "search_results"
  | "filter_apply"
  | "result_view"
  | "photo_click"
  | "race_cta"
  | "group_join"
  | "route_download"
  | "newsletter_signup";

export const trackEvent = (action: DossierEvent, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).gtag) {
    ((window as unknown as Record<string, unknown>).gtag as Function)("event", action, params);
  }
  console.log(`[Analytics Event Tracked]: ${action}`, params || {});
};
