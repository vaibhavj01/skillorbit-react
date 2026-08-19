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
      className="relative overflow-hidden bg-[#0a1612] py-12 sm:py-16 md:py-24"
    >
      <OrbitBackdrop variant="night" />
      <Container className="relative z-10">
        <div className="grid items-center gap-8 rounded-2xl border border-[#7CFF00]/20 bg-[#071313] px-4 py-6 sm:gap-10 sm:rounded-3xl sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-12 lg:py-12">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7CFF00]/40 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7CFF00]">
              <ShieldCheck size={14} />
              Quality certification
            </p>
            <h2 className="mb-3 font-display text-[1.45rem] font-bold leading-snug text-white sm:mb-4 sm:text-4xl">
              ISO-aligned quality for every SkillOrbit program
            </h2>
            <p className="mb-6 max-w-xl text-sm leading-7 text-[#C5D5CE] sm:text-base">
              Our training, assessment and learner-support process follows ISO-aligned
              quality management principles — so every batch is delivered with the same
              professional standard.
            </p>
            <ul className="space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#C5D5CE]">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#7CFF00]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="flex justify-center lg:justify-end">
            <figure className="relative w-full max-w-[520px]">
              <CertificateFrame />
              <figcaption className="relative mt-4 flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#B7C4BE]">
                <Award size={14} className="text-[#7CFF00]" />
                Quality-first training delivery
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
