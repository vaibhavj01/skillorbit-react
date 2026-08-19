import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";

export default function PlacementCTA() {
  return (
    <Reveal className="mt-14 rounded-3xl border border-[#7CFF00]/20 bg-[#0d1c16] px-6 py-10 text-center shadow-card md:px-10">
      <h3 className="font-grotesk text-xl font-bold text-white md:text-2xl">
        Ready to Turn Your Skills Into a Career?
      </h3>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
        <Link
          to="/contact"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#7CFF00] px-5 text-sm font-bold text-[#071313] transition hover:-translate-y-0.5 hover:bg-[#E7FF00] sm:w-auto"
        >
          Start Your Placement Journey
          <ArrowRight size={16} />
        </Link>
        <Link
          to="/courses"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-[#7CFF00]/40 px-5 text-sm font-bold text-[#7CFF00] transition hover:bg-[#7CFF00] hover:text-[#071313] sm:w-auto"
        >
          Explore Courses
        </Link>
      </div>
    </Reveal>
  );
}
