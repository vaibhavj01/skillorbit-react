import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Check, Flame, Timer, X } from "lucide-react";
import { CONTACT } from "../../data/siteConfig";
import {
  GENAI_PROMO,
  GENAI_PROMO_BENEFITS,
  GENAI_PROMO_DEADLINE_MS,
} from "../../data/genaiPromo";
import { getCourseBySlug, getCourseCover } from "../../data/courses";
import { useDemoModal } from "../../context/DemoModalContext";
import useCountdown from "../../hooks/useCountdown";
import Button from "../common/Button";
import "../../styles/genai-promo.css";

const WHATSAPP_TEXT = encodeURIComponent(
  `Hi SkillOrbit, I want to book a free demo for Data Analytics + GenAI on Sunday, 23 August 2026.`,
);

function pad(value) {
  return String(value).padStart(2, "0");
}

function sessionDone() {
  try {
    return sessionStorage.getItem(GENAI_PROMO.sessionKey) === "1";
  } catch {
    return false;
  }
}

export default function DataAnalyticsGenAIPromo() {
  const { pathname } = useLocation();
  const { isOpen: demoOpen, openDemo } = useDemoModal();
  const { expired, days, hours, minutes, seconds } = useCountdown(GENAI_PROMO_DEADLINE_MS);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeRef = useRef(null);
  const panelRef = useRef(null);
  const lastFocusRef = useRef(null);
  const shownRef = useRef(false);
  const dismissedRef = useRef(false);
  const titleId = useId();
  const course = getCourseBySlug(GENAI_PROMO.courseId);
  const cover = course ? getCourseCover(course) : "/assets/images/courses/data-analytics.png";

  const closePromo = useCallback(() => {
    dismissedRef.current = true;
    setOpen(false);
    const prev = lastFocusRef.current;
    if (prev && typeof prev.focus === "function") {
      window.setTimeout(() => prev.focus(), 50);
    }
  }, []);

  useEffect(() => {
    shownRef.current = false;
    dismissedRef.current = false;
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const started = Date.now();

    const onScroll = () => {
      if (open || demoOpen || shownRef.current || dismissedRef.current || sessionDone()) return;
      if (Date.now() - started < GENAI_PROMO.minEngageMs) return;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max < 240) return;
      if (window.scrollY / max < GENAI_PROMO.scrollTrigger) return;

      shownRef.current = true;
      lastFocusRef.current = document.activeElement;
      setOpen(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, open, demoOpen]);

  useEffect(() => {
    if (open) {
      setVisible(true);
      return undefined;
    }
    const timer = window.setTimeout(() => setVisible(false), 220);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!visible) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const viewport = window.visualViewport;
    const syncHeight = () => {
      const height = viewport?.height || window.innerHeight;
      panelRef.current?.style.setProperty("--vvh", `${Math.round(height * 0.88)}px`);
    };
    syncHeight();
    viewport?.addEventListener("resize", syncHeight);
    viewport?.addEventListener("scroll", syncHeight);

    const onKey = (event) => {
      if (event.key === "Escape") closePromo();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      viewport?.removeEventListener("resize", syncHeight);
      viewport?.removeEventListener("scroll", syncHeight);
      window.removeEventListener("keydown", onKey);
    };
  }, [visible, closePromo]);

  const bookDemo = () => {
    closePromo();
    window.setTimeout(() => {
      openDemo(GENAI_PROMO.courseId, { campaign: "genai-promo" });
    }, 80);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[105] flex items-end justify-center sm:items-center sm:p-5 ${
        open ? "genai-promo-open" : "genai-promo-closing"
      }`}
      role="presentation"
    >
      <button
        type="button"
        className="genai-promo-backdrop absolute inset-0 bg-black/70"
        aria-label="Close special offer"
        onClick={closePromo}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="
          genai-promo-panel relative z-10 flex w-full max-w-[920px] flex-col overflow-hidden
          max-h-[min(88dvh,var(--vvh,88dvh))]
          rounded-t-3xl border border-[#7CFF00]/25 bg-[#071313]
          shadow-[0_24px_70px_rgba(0,0,0,0.55)]
          sm:max-h-[min(86vh,680px)] sm:rounded-3xl
          md:grid md:grid-cols-[0.9fr_1.1fr]
        "
      >
        <div className="relative hidden overflow-hidden md:block">
          <img
            src={cover}
            alt=""
            className="h-full min-h-[420px] w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071313] via-[#071313]/35 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7CFF00]">
              SkillOrbit Academy
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-white">
              Data Analytics + GenAI
            </p>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 sm:py-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7CFF00]/40 bg-[#7CFF00]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7CFF00]">
              <Flame size={12} />
              Special offer
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={closePromo}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white hover:border-[#7CFF00] hover:bg-[#7CFF00] hover:text-[#071313]"
              aria-label="Close special offer"
            >
              <X size={18} strokeWidth={2.4} />
            </button>
          </div>

          <h2 id={titleId} className="font-display text-[1.45rem] font-extrabold leading-[1.15] text-white sm:text-3xl">
            Master Data Analytics{" "}
            <span className="text-[#7CFF00]">+ GenAI</span>
          </h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-[#C5D5CE]">
            Build job-ready skills in Data Analytics, AI-powered tools and real-world projects.
          </p>

          {expired ? (
            <div className="mt-4 rounded-2xl border border-white/10 bg-[#0d1c16] px-4 py-3">
              <p className="text-sm font-bold text-white">This offer has ended</p>
              <p className="mt-1 text-xs leading-5 text-[#B7C4BE]">
                The ₹10,000 special offer closed on {GENAI_PROMO.deadlineLabel}. You can still book a demo for this course.
              </p>
            </div>
          ) : (
            <div className="mt-4 rounded-2xl border border-[#7CFF00]/25 bg-[#0d1c16] px-4 py-3.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7CFF00]">
                Special course offer
              </p>
              <p className="mt-1 font-display text-3xl font-extrabold text-white">₹10,000</p>
              <p className="mt-1 text-sm font-semibold text-[#7CFF00]">
                Book your demo on {GENAI_PROMO.deadlineLabel}
              </p>
            </div>
          )}

          <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {GENAI_PROMO_BENEFITS.map((item, index) => (
              <li
                key={item}
                className={`items-center gap-2 text-[13px] text-[#C5D5CE] ${index >= 4 ? "hidden sm:flex" : "flex"}`}
              >
                <Check size={14} className="shrink-0 text-[#7CFF00]" strokeWidth={2.6} />
                {item}
              </li>
            ))}
          </ul>

          {!expired && (
            <div className="mt-4">
              <p className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7CFF00]">
                <Timer size={13} />
                Offer ends in
              </p>
              <div className="grid grid-cols-4 gap-2" aria-hidden="true">
                {[
                  { label: "Days", value: pad(days) },
                  { label: "Hrs", value: pad(hours) },
                  { label: "Min", value: pad(minutes) },
                  { label: "Sec", value: pad(seconds) },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="rounded-xl border border-[#7CFF00]/20 bg-[#0d1c16] px-1 py-2 text-center"
                  >
                    <p className="font-display text-lg font-bold tabular-nums text-white sm:text-xl">
                      {unit.value}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[#8AA0A8]">
                      {unit.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="sr-only">
                Offer valid until Sunday, 23 August 2026, 11:59 PM IST.
                {days} days, {hours} hours, {minutes} minutes remaining.
              </p>
              <p className="mt-2 text-xs text-[#B7C4BE]">
                Offer valid until Sunday, 23 August 2026 · 11:59 PM IST
              </p>
            </div>
          )}

          <p className="mt-4 text-[13px] leading-5 text-[#B7C4BE]">
            <span className="font-semibold text-white">Why start now? </span>
            Data Analytics is increasingly paired with AI-powered workflows. Learn both together and build projects that strengthen your job profile.
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            <Button variant="primary" size="md" className="w-full hover:translate-y-0" onClick={bookDemo}>
              Book Your Free Demo
            </Button>
            <a
              href={`${CONTACT.whatsappHref}?text=${WHATSAPP_TEXT}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-[#7CFF00]/40 text-sm font-semibold text-[#7CFF00] hover:bg-[#7CFF00]/10"
            >
              Talk to an Expert
            </a>
            <p className="text-center text-[11px] text-[#8AA0A8]">
              {expired ? "Enquire about Data Analytics + GenAI" : "Limited-time course offer"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
