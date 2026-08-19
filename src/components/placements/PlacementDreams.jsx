import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Rocket, Sparkles, Star, Zap } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import "../../styles/placement-dreams.css";

export default function PlacementDreams() {
  return (
    <section className="relative overflow-hidden bg-[#071313] pb-12 pt-20 sm:pb-16 sm:pt-28 md:pb-20 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 14% 20%, rgba(35,159,74,0.22), transparent 38%), radial-gradient(circle at 86% 70%, rgba(124,255,0,0.08), transparent 32%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7CFF00]/50 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
            <Rocket size={14} className="text-[#7CFF00]" />
            Placement support
          </p>

          <h1 className="max-w-xl font-roboto text-[1.65rem] font-black uppercase leading-[1.15] tracking-tight sm:text-5xl md:text-[56px]">
            <span className="text-[#7CFF00]">Learn the stack</span>
            <span className="mt-2 block text-white">build the proof</span>
            <span className="mt-3 block w-fit border-b-2 border-[#7CFF00] pb-2 text-[#7CFF00]">
              take the offer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#C5D5CE] md:text-base">
            Labs, GitHub repos, mock interviews, and resume review — then campus
            drives. Data Analytics, Java Full Stack, and Python Full Stack from
            Baner, Hinjawadi, and Wakad.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#7CFF00] px-5 text-sm font-black text-[#071313] transition hover:-translate-y-0.5 hover:bg-[#E7FF00] sm:w-auto"
            >
              <GraduationCap size={18} />
              Registration
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/reviews"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-5 text-sm font-bold text-white transition hover:border-[#7CFF00] hover:text-[#7CFF00] sm:w-auto"
            >
              Testimonial
              <Zap size={16} className="text-[#7CFF00]" fill="currentColor" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-[440px]">
          <div className="placement-portrait">
            <span className="placement-float placement-float--tr" aria-hidden="true">
              <Sparkles size={20} />
            </span>
            <span className="placement-float placement-float--bl" aria-hidden="true">
              <Star size={20} />
            </span>
            <div className="placement-portrait__ring">
              <img
                src="/assets/images/placement-graduate.png"
                alt="SkillOrbit learner after completing a job-oriented IT program"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
