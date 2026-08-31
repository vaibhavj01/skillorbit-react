import { Link } from "react-router-dom";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import { CORPORATE_BENEFITS, CORPORATE_PROGRAMS, CORPORATE_STATS } from "../../data/corporate";

export default function CorporateHero() {
  return (
    <section className="so-hero-dark relative overflow-hidden so-page-hero">
      <div className="so-hero-glow" aria-hidden="true" />

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-hero font-extrabold tracking-tight text-ink-inverse">
            Corporate Training
          </h1>
          <p className="mt-4 text-lg text-ink-inverse sm:text-xl">
            Are your teams ready for tomorrow’s technology challenges?
          </p>
          <span className="corporate-divider mt-6" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-ink-dim md:text-base">
            Untrained teams slow delivery and leave gaps in Data Analytics, Java Full Stack,
            and Python Full Stack work. SkillOrbit upskills employees on real use cases so
            they ship with confidence — from Baner, Hinjawadi, and Wakad, or online.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CORPORATE_STATS.map((stat) => (
            <Reveal key={stat.label} className="rounded-2xl border border-dark-border bg-white/5 px-5 py-4 text-center">
              <p className="font-display text-2xl font-bold text-brand-lime">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-dim">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <div className="mb-6 flex flex-wrap gap-2">
              {CORPORATE_PROGRAMS.map((program) => (
                <Link
                  key={program.id}
                  to={`/courses/${program.slug}`}
                  className="rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-lime transition hover:bg-brand-lime hover:text-[var(--cta-ink)]"
                >
                  {program.label}
                </Link>
              ))}
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {CORPORATE_BENEFITS.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-surface p-5 shadow-card"
                >
                  <h3 className="mb-2 font-display text-sm font-bold text-brand-dark">{item.title}</h3>
                  <p className="text-sm leading-6 text-ink-light">{item.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="relative">
            <div className="overflow-hidden rounded-[28px] border border-brand-primary/25 shadow-[0_0_40px_rgba(102,255,0,0.12)]">
              <img
                src="/assets/images/corporate-trainer.webp"
                alt="Professional reviewing a tablet during a SkillOrbit corporate IT training session"
                className="aspect-[4/3] w-full object-cover"
                width={1280}
                height={960}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
