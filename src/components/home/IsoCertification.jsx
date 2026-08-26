import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import OrbitBackdrop from "../common/OrbitBackdrop";
import { CertificateFrame } from "../certificates/CertificateSample";

const POINTS = [
  "Documented training delivery and assessment process",
  "Consistent learner support across classroom and online modes",
  "Employer-ready certificates with verification support",
];

export default function IsoCertification() {
  return (
    <section
      id="iso"
      className="relative overflow-hidden bg-surface-bg so-section"
    >
      <OrbitBackdrop variant="mint" />
      <Container className="relative z-10">
        <div className="grid items-center gap-8 rounded-2xl border border-brand-primary/20 bg-surface-bg px-4 py-6 sm:gap-10 sm:rounded-3xl sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-12 lg:py-12">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/40 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-primary">
              <ShieldCheck size={14} />
              Quality certification
            </p>
            <h2 className="mb-3 font-display text-h2 font-bold leading-snug text-ink sm:mb-4">
              ISO-aligned quality for every SkillOrbit program
            </h2>
            <p className="mb-6 max-w-xl text-sm leading-7 text-ink-light sm:text-base">
              Our training, assessment and learner-support process follows ISO-aligned
              quality management principles — so every batch is delivered with the same
              professional standard.
            </p>
            <ul className="space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink-light">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="flex justify-center lg:justify-end">
            <figure className="relative w-full max-w-[520px]">
              <CertificateFrame
                src="/assets/images/skillorbit-certificate.jpg"
                alt="SkillOrbit Academy course certificate of completion"
              />
              <figcaption className="relative mt-4 flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                <Award size={14} className="text-brand-primary" />
                Quality-first training delivery
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
