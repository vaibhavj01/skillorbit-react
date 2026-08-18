import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";

export default function PlacementCTA() {
  return (
    <Reveal className="mt-14 rounded-3xl border border-[#16A34A]/15 bg-white px-6 py-10 text-center shadow-[0_8px_28px_rgba(17,24,39,0.05)] md:px-10">
      <h3 className="font-grotesk text-xl font-bold text-[#111827] md:text-2xl">
        Ready to Turn Your Skills Into a Career?
      </h3>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/contact"
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#16A34A] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#15803D]"
        >
          Start Your Placement Journey
          <ArrowRight size={16} />
        </Link>
        <Link
          to="/courses"
          className="inline-flex h-11 items-center rounded-xl border border-[#111827] px-5 text-sm font-bold text-[#111827] transition hover:bg-[#111827] hover:text-white"
        >
          Explore Courses
        </Link>
      </div>
    </Reveal>
  );
}
