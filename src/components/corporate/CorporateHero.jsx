import { Link } from "react-router-dom";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import { CORPORATE_BENEFITS, CORPORATE_PROGRAMS, CORPORATE_STATS } from "../../data/corporate";

export default function CorporateHero() {
  return (
    <section className="relative overflow-hidden bg-surface-bg so-page-hero">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, rgba(0,184,61,0.22), transparent 38%), radial-gradient(circle at 88% 78%, rgba(0,214,57,0.08), transparent 34%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h1 className="font-roboto text-hero font-black tracking-tight text-ink">
            Corporate Training
          </h1>
          <p className="mt-4 text-lg text-ink sm:text-xl">
            Are your teams ready for tomorrow’s technology challenges?
          </p>
          <span className="corporate-divider mt-6" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-ink-light md:text-base">
            Untrained teams slow delivery and leave gaps in Data Analytics, Java Full Stack,
            and Python Full Stack work. SkillOrbit upskills employees on real use cases so
            they ship with confidence — from Baner, Hinjawadi, and Wakad, or online.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CORPORATE_STATS.map((stat) => (
            <Reveal key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
              <p className="font-roboto text-2xl font-black text-brand-primary">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
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
                  className="rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-primary transition hover:bg-brand-green hover:text-[var(--cta-ink)]"
                >
                  {program.label}
                </Link>
              ))}
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {CORPORATE_BENEFITS.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-surface p-5 shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
                >
                  <h3 className="mb-2 font-roboto text-sm font-black text-brand-primary">{item.title}</h3>
                  <p className="text-sm leading-6 text-ink-light">{item.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="relative">
            <div className="overflow-hidden rounded-[28px] border border-brand-primary/25 shadow-[0_0_40px_rgba(0,214,57,0.12)]">
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
