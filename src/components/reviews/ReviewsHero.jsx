import { useCallback, useEffect, useState } from "react";
import { Award, ChevronRight, Play, Star, TrendingUp, Trophy, Users } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import ReviewStars from "./ReviewStars";
import { featuredTestimonials, REVIEW_STATS } from "../../data/testimonials";

const STAT_ICONS = {
  learners: Users,
  rating: Trophy,
  support: Award,
  campuses: TrendingUp,
};

export default function ReviewsHero() {
  const [idx, setIdx] = useState(0);
  const total = featuredTestimonials.length;
  const active = featuredTestimonials[idx];

  const go = useCallback(
    (dir) => {
      setIdx((value) => (value + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (total < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const timer = window.setInterval(() => go(1), 4200);
    return () => window.clearInterval(timer);
  }, [go, total]);

  if (!active) return null;

  return (
    <section className="so-hero-dark relative overflow-hidden so-page-hero">
      <div className="so-hero-glow" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-lime/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-lime">
              <Star size={13} className="text-brand-lime" fill="currentColor" />
              Trusted by 10,000+ learners
            </p>
            <h1 className="max-w-xl font-display text-hero font-extrabold leading-tight text-ink-inverse">
              Hear from our{" "}
              <span className="text-brand-lime">successful learners</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-ink-dim md:text-base">
              Short, technical notes from Data Analytics, Java Full Stack, and Python Full
              Stack batches in Baner, Hinjawadi, Wakad, and online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#latest-reviews"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand-lime px-5 text-sm font-bold text-[var(--cta-ink)] shadow-btn transition hover:-translate-y-0.5 hover:bg-[var(--color-lime-hover)]"
              >
                <Play size={16} fill="currentColor" />
                Watch success stories
              </a>
              <a
                href="#latest-reviews"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-brand-primary px-5 text-sm font-bold text-brand-lime transition hover:bg-[rgba(0,200,83,0.10)]"
              >
                Read all reviews
                <ChevronRight size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="reviews-quote-glow rounded-3xl border border-white/10 bg-surface p-7 sm:p-8">
              {active.quote ? (
                <>
                  <p className="font-roboto text-5xl font-black leading-none text-brand-primary">“</p>
                  <p className="mt-3 text-sm leading-7 text-ink/90 md:text-base">
                    {active.quote}
                  </p>
                </>
              ) : (
                <img
                  src={active.avatar}
                  alt={`${active.name}, ${active.role}`}
                  className="mx-auto h-28 w-28 rounded-full object-cover object-[center_18%] ring-[3px] ring-brand-green/40"
                />
              )}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-roboto text-sm font-black text-ink">{active.name}</p>
                  <p className="text-xs text-ink-muted">{active.role}</p>
                </div>
                {active.package ? (
                  <p className="font-display text-lg font-bold text-brand-primary">{active.package}</p>
                ) : (
                  <ReviewStars rating={active.rating} />
                )}
              </div>
              <div className="mt-6 flex items-center justify-center gap-2">
                {featuredTestimonials.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIdx(index)}
                    className="h-2 rounded-full bg-brand-primary transition-all"
                    style={{
                      width: index === idx ? 22 : 8,
                      opacity: index === idx ? 1 : 0.28,
                    }}
                    aria-label={`Show review ${index + 1}`}
                  />
                ))}
              </div>
            </article>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEW_STATS.map((stat) => {
            const Icon = STAT_ICONS[stat.id] || Users;
            return (
              <Reveal key={stat.id} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
                <Icon size={18} className="text-brand-primary" />
                <p className="mt-3 font-roboto text-2xl font-black text-ink">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  {stat.label}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
