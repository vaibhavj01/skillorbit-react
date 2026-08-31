import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import PlacementJourneyForm from "./PlacementJourneyForm";

export default function PlacementJourneyModal({ open, onClose }) {
  const [visible, setVisible] = useState(false);
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = useId();

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

    const panel = panelRef.current;
    const viewport = window.visualViewport;
    const syncHeight = () => {
      const height = viewport?.height || window.innerHeight;
      panel?.style.setProperty("--pj-vvh", `${Math.round(height)}px`);
    };
    syncHeight();
    viewport?.addEventListener("resize", syncHeight);
    viewport?.addEventListener("scroll", syncHeight);

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      viewport?.removeEventListener("resize", syncHeight);
      viewport?.removeEventListener("scroll", syncHeight);
      window.removeEventListener("keydown", onKey);
    };
  }, [visible, onClose]);

  if (!visible || typeof document === "undefined") return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-5 ${
        open ? "pj-modal-open" : "pj-modal-closing"
      }`}
      role="presentation"
    >
      <button
        type="button"
        className="pj-modal-backdrop absolute inset-0 bg-[#071A12]/55"
        aria-label="Close placement journey form"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="
          pj-modal-panel relative z-10 flex w-full max-w-[500px] flex-col overflow-hidden
          max-h-[min(92dvh,calc(var(--pj-vvh,100dvh)-2rem))]
          rounded-[20px] border border-[#00C853]/25 bg-white
          shadow-[0_20px_60px_rgba(0,92,43,0.18)]
        "
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[#00C853]/15 px-5 py-4 sm:px-6">
          <div className="min-w-0 pr-2">
            <h2 id={titleId} className="font-display text-lg font-bold leading-snug text-[var(--color-text-dark)] sm:text-xl">
              Start Your Placement Journey
            </h2>
            <p className="mt-1 font-body text-[13px] leading-5 text-[#52605A] sm:text-sm">
              Tell us a little about yourself and our career team will help you choose the right path.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="
              flex h-11 w-11 shrink-0 items-center justify-center rounded-full
              border border-[#00C853]/25 text-[var(--color-text-dark)] transition
              hover:border-[#00C853] hover:bg-[#F3FFF6]
            "
            aria-label="Close placement journey form"
          >
            <X size={20} strokeWidth={2.4} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4 sm:px-6 sm:py-5 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <PlacementJourneyForm />
        </div>
      </div>
    </div>,
    document.body,
  );
}
