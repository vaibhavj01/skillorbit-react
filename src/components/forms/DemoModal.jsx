import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { useDemoModal } from "../../context/DemoModalContext";
import DemoForm from "./DemoForm";

export default function DemoModal() {
  const { isOpen, closeDemo, courseId, campaign } = useDemoModal();
  const [visible, setVisible] = useState(false);
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      return undefined;
    }
    const timer = window.setTimeout(() => setVisible(false), 220);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!visible) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const panel = panelRef.current;
    const viewport = window.visualViewport;
    const syncHeight = () => {
      const height = viewport?.height || window.innerHeight;
      panel?.style.setProperty("--demo-vvh", `${Math.round(height)}px`);
    };
    syncHeight();
    viewport?.addEventListener("resize", syncHeight);
    viewport?.addEventListener("scroll", syncHeight);

    const onKey = (event) => {
      if (event.key === "Escape") closeDemo();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      viewport?.removeEventListener("resize", syncHeight);
      viewport?.removeEventListener("scroll", syncHeight);
      window.removeEventListener("keydown", onKey);
    };
  }, [visible, closeDemo]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[110] flex items-stretch justify-center sm:items-center sm:p-5 ${
        isOpen ? "demo-modal-open" : "demo-modal-closing"
      }`}
      role="presentation"
    >
      <button
        type="button"
        className="demo-modal-backdrop absolute inset-0 bg-black/75"
        aria-label="Close demo form"
        onClick={closeDemo}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="
          demo-modal-panel relative z-10 flex w-full max-w-[520px] flex-col
          h-[var(--demo-vvh,100dvh)] max-h-[var(--demo-vvh,100dvh)]
          overflow-hidden border-0 border-[#7CFF00]/25 bg-[#0d1c16]
          sm:h-auto sm:max-h-[min(92vh,720px)] sm:rounded-3xl sm:border
          sm:shadow-[0_30px_80px_rgba(0,0,0,0.55)]
        "
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[#7CFF00]/15 px-4 py-3.5 sm:px-6 sm:py-4">
          <div className="min-w-0 pr-2">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7CFF00] sm:text-[11px]">
              Free demo class
            </p>
            <h2 id={titleId} className="font-display text-base font-bold leading-snug text-white sm:text-xl">
              Book your free demo
            </h2>
            <p className="mt-1 text-[13px] leading-5 text-[#B7C4BE] sm:text-sm">
              Share your details and a counsellor will help you choose the right program.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeDemo}
            className="
              flex h-11 w-11 shrink-0 items-center justify-center rounded-full
              border border-white/15 text-white transition
              hover:border-[#7CFF00] hover:bg-[#7CFF00] hover:text-[#071313]
            "
            aria-label="Close demo form"
          >
            <X size={20} strokeWidth={2.4} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6 sm:py-6 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <DemoForm key={`${courseId || "any"}-${campaign || "std"}`} defaultCourseId={courseId} campaign={campaign} />
        </div>
      </div>
    </div>
  );
}
