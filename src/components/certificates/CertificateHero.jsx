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
    <section className="relative overflow-hidden bg-[#071313] pb-16 pt-28 md:pb-20 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 20%, rgba(35,159,74,0.22), transparent 36%), radial-gradient(circle at 88% 70%, rgba(124,255,0,0.10), transparent 32%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-[#7CFF00] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
            <Award size={14} className="text-[#7CFF00]" />
            Industry-Recognized Credentials
          </p>

          <h1 className="mb-5 max-w-xl font-roboto text-[34px] font-black uppercase leading-[1.05] tracking-tight text-[#7CFF00] sm:text-5xl md:text-[56px]">
            Go confidently toward your dreams
          </h1>

          <p className="mb-4 inline-block border-b-2 border-[#7CFF00] pb-1 text-lg font-bold text-white">
            At SkillOrbit, we believe:
          </p>

          <p className="mb-8 max-w-xl text-sm leading-7 text-[#C5D5CE] md:text-base">
            A SkillOrbit certificate is more than a document — it is verified proof of the
            skills you built, the projects you completed, and the career you are ready for.
            We stand with you from training through employer verification.
          </p>

          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {CREDENTIALS.map((label) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-white">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7CFF00] text-[#071313]">
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
              background: "linear-gradient(160deg, rgba(124,255,0,0.28), rgba(35,159,74,0.18))",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 overflow-hidden rounded-[28px] border-[3px] border-[#7CFF00] p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <div className="overflow-hidden rounded-[22px] border border-[#7CFF00]/50">
              <img
                src="/assets/images/certificate-graduate.png"
                alt="SkillOrbit graduate holding a certificate of achievement"
                className="h-[380px] w-full object-cover object-[center_20%] sm:h-[440px]"
              />
            </div>
          </div>

          <span className="absolute -bottom-4 -right-2 z-20 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#071313] bg-[#7CFF00] text-[#071313] shadow-lg sm:h-16 sm:w-16">
            <ShieldCheck size={28} strokeWidth={2.2} />
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
