import { useCallback, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import PlacementJourneyModal from "./PlacementJourneyModal";

export default function PlacementCTA() {
  const [open, setOpen] = useState(false);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <>
      <Reveal className="mt-[clamp(1.15rem,2.4svh,1.65rem)] rounded-3xl border border-[#00C853]/20 bg-white px-5 py-6 text-center sm:px-8 sm:py-7">
        <h3 className="font-display text-lg font-bold text-[var(--color-text-dark)] md:text-xl">
          Ready to Turn Your Skills Into a Career?
        </h3>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-lime px-5 text-sm font-bold text-[var(--cta-ink)] shadow-btn transition hover:-translate-y-0.5 hover:bg-[var(--color-lime-hover)] sm:w-auto"
          >
            Start Your Placement Journey
            <ArrowRight size={16} />
          </button>
          <Link
            to="/courses"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-brand-primary/40 px-5 text-sm font-bold text-brand-primary transition hover:bg-brand-green hover:text-[var(--cta-ink)] sm:w-auto"
          >
            Explore Courses
          </Link>
        </div>
      </Reveal>
      <PlacementJourneyModal open={open} onClose={closeModal} />
    </>
  );
}
