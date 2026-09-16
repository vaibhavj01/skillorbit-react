import { Play } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import { CORPORATE_POVS } from "../../data/corporate";

export default function CorporatePOV() {
  return (
    <section className="relative overflow-hidden bg-surface-bg so-section">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 12% 40%, rgba(0,184,61,0.16), transparent 42%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <Reveal className="relative">
          <a
            href="#corporate-demo"
            className="group relative block overflow-hidden rounded-[24px] border border-brand-primary/25"
          >
            <img
              src="/assets/images/corporate-classroom.webp"
              alt="SkillOrbit learners in a Pune corporate training classroom"
              className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />
            <span className="absolute inset-0 bg-surface-bg/35" />
            <span className="absolute left-4 top-4 rounded-md bg-surface-bg/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
              SkillOrbit Academy
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-[var(--cta-ink)] shadow-[0_0_28px_rgba(102,255,0,0.18)] transition group-hover:scale-110">
                <Play size={26} fill="currentColor" className="ml-0.5" />
              </span>
            </span>
            <span className="absolute bottom-4 left-4 right-4 rounded-lg bg-[var(--bg-card)]/95 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.08em] text-brand-lime">
              Book a free demo for your team
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
            A SkillOrbit point of view
          </p>
          <h2 className="mb-6 font-display text-2xl font-bold text-ink md:text-3xl">
            What changes when your people train on real work
          </h2>
          <ul className="space-y-5">
            {CORPORATE_POVS.map((item) => (
              <li key={item.title}>
                <h3 className="font-roboto text-sm font-black text-brand-primary">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-ink-light">{item.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
