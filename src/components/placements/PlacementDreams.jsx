import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Rocket, Sparkles, Star, Zap } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import "../../styles/placement-dreams.css";

export default function PlacementDreams() {
  return (
    <section className="relative overflow-hidden bg-surface-bg so-page-hero">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 14% 20%, rgba(0,184,61,0.22), transparent 38%), radial-gradient(circle at 86% 70%, rgba(0,214,57,0.08), transparent 32%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-primary/50 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
            <Rocket size={14} className="text-brand-primary" />
            Placement support
          </p>

          <h1 className="max-w-xl font-roboto text-hero font-black uppercase leading-[1.15] tracking-tight">
            <span className="text-brand-primary">Learn the stack</span>
            <span className="mt-2 block text-ink">build the proof</span>
            <span className="mt-3 block w-fit border-b-2 border-brand-primary pb-2 text-brand-primary">
              take the offer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-ink-light md:text-base">
            Labs, GitHub repos, mock interviews, and resume review — then campus
            drives. Data Analytics, Java Full Stack, and Python Full Stack from
            Baner, Hinjawadi, and Wakad.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 text-sm font-black text-[var(--cta-ink)] transition hover:-translate-y-0.5 hover:bg-brand-green sm:w-auto"
            >
              <GraduationCap size={18} />
              Registration
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/reviews"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-5 text-sm font-bold text-ink transition hover:border-brand-green hover:text-brand-green sm:w-auto"
            >
              Testimonial
              <Zap size={16} className="text-brand-primary" fill="currentColor" />
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
                src="/assets/images/placement-graduate.webp"
                alt="SkillOrbit learner after completing a job-oriented IT program"
                width={1024}
                height={1024}
                decoding="async"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
