import { Award, Check, ShieldCheck } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import "../../styles/certificate-hero.css";

const CREDENTIALS = [
  "Industry-recognized credentials",
  "Verified skill validation",
  "Enhanced employability",
  "Career advancement",
];

export default function CertificateHero() {
  return (
    <section className="so-hero-dark relative overflow-hidden so-page-hero">
      <div className="so-hero-glow" aria-hidden="true" />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-brand-lime/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-lime">
            <Award size={14} className="text-brand-lime" />
            Industry-Recognized Credentials
          </p>

          <h1 className="mb-4 max-w-xl font-display text-hero font-extrabold leading-[1.15] tracking-tight text-ink-inverse sm:mb-5">
            Go confidently toward your dreams
          </h1>

          <p className="mb-4 inline-block border-b-2 border-brand-lime pb-1 text-lg font-bold text-ink-inverse">
            At SkillOrbit, we believe:
          </p>

          <p className="mb-8 max-w-xl text-sm leading-7 text-ink-dim md:text-base">
            A SkillOrbit certificate is more than a document — it is verified proof of the
            skills you built, the projects you completed, and the career you are ready for.
            We stand with you from training through employer verification.
          </p>

          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {CREDENTIALS.map((label) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-ink-inverse">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-lime text-[var(--cta-ink)]">
                  <Check size={12} strokeWidth={3} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="cert-stage relative mx-auto w-full max-w-[520px]">
          <div className="cert-glow" aria-hidden="true" />
          <span className="cert-orb cert-orb--a" aria-hidden="true" />
          <span className="cert-orb cert-orb--b" aria-hidden="true" />
          <span className="cert-ring" aria-hidden="true" />
          <span className="cert-ring cert-ring--inner" aria-hidden="true" />
          <span className="cert-spark cert-spark--1" aria-hidden="true" />
          <span className="cert-spark cert-spark--2" aria-hidden="true" />
          <span className="cert-spark cert-spark--3" aria-hidden="true" />
          <span className="cert-spark cert-spark--4" aria-hidden="true" />

          <div
            className="cert-shape pointer-events-none absolute -right-6 top-8 hidden h-[78%] w-[58%] sm:block"
            style={{
              clipPath: "polygon(18% 0, 100% 18%, 100% 100%, 0 82%)",
              background: "linear-gradient(160deg, rgba(102,255,0,0.18), rgba(0,200,83,0.16))",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 overflow-hidden rounded-[22px] border-[3px] border-brand-primary bg-white p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-2">
            <img
              src="/assets/images/course-certificate.webp"
              alt="Sample SkillOrbit Academy course certificate of completion"
              className="h-auto w-full rounded-[16px] object-contain sm:rounded-[22px]"
            />
          </div>

          <span className="absolute -bottom-4 -right-2 z-20 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[var(--color-bg-dark)] bg-brand-lime text-[var(--cta-ink)] shadow-lg sm:h-16 sm:w-16">
            <ShieldCheck size={28} strokeWidth={2.2} />
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
