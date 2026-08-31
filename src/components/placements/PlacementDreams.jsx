import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Rocket, Sparkles, Star, Zap } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import "../../styles/placement-dreams.css";

export default function PlacementDreams() {
  return (
    <section className="so-hero-dark relative overflow-hidden so-page-hero">
      <div className="so-hero-glow" aria-hidden="true" />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-lime/30 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-lime">
            <Rocket size={14} className="text-brand-lime" />
            Placement support
          </p>

          <h1 className="max-w-xl font-display text-hero font-extrabold leading-[1.15] tracking-tight">
            <span className="text-ink-inverse">Learn the stack</span>
            <span className="mt-2 block text-ink-inverse">build the proof</span>
            <span className="mt-3 block w-fit border-b-2 border-brand-lime pb-2 text-brand-lime">
              take the offer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-ink-dim md:text-base">
            Labs, GitHub repos, mock interviews, and resume review — then campus
            drives. Data Analytics, Java Full Stack, and Python Full Stack from
            Baner, Hinjawadi, and Wakad.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-lime px-5 text-sm font-bold text-[var(--cta-ink)] shadow-btn transition hover:-translate-y-0.5 hover:bg-[var(--color-lime-hover)] sm:w-auto"
            >
              <GraduationCap size={18} />
              Registration
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/reviews"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-brand-primary px-5 text-sm font-bold text-brand-lime transition hover:bg-[rgba(0,200,83,0.10)] sm:w-auto"
            >
              Testimonial
              <Zap size={16} className="text-brand-lime" fill="currentColor" />
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
