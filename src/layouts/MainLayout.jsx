import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingActions from "../components/layout/FloatingActions";
import GetMeJobLead from "../components/layout/GetMeJobLead";
import DemoModal from "../components/forms/DemoModal";
import DataAnalyticsGenAIPromo from "../components/promo/DataAnalyticsGenAIPromo";
import { DemoModalProvider } from "../context/DemoModalContext";

export default function MainLayout() {
  const { pathname, hash } = useLocation();

  // Scroll to top on route change, or to the hash target if present.
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
      return;
    }

    let cancelled = false;
    const scrollToHash = (attempt = 0) => {
      if (cancelled) return;
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempt < 10) {
        window.setTimeout(() => scrollToHash(attempt + 1), 80);
      }
    };

    scrollToHash();
    return () => {
      cancelled = true;
    };
  }, [pathname, hash]);

  return (
    <DemoModalProvider>
    <div className="flex min-h-screen max-w-full flex-col overflow-x-clip bg-[#071313]">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] bg-[#7CFF00] text-[#071313] px-4 py-2 rounded-lg">
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <GetMeJobLead />
        <FloatingActions />
        <DataAnalyticsGenAIPromo />
        <DemoModal />
      </div>
    </DemoModalProvider>
  );
}
