import { BadgeCheck, Calendar, FileCheck2, ShieldCheck } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import OrbitBackdrop from "../common/OrbitBackdrop";

export const COURSE_CERTIFICATE_SRC = "/assets/images/course-certificate.png";
export const COURSE_CERTIFICATE_ALT =
  "Sample SkillOrbit Academy course certificate of completion";

const HIGHLIGHTS = [
  { icon: FileCheck2, label: "Course completion after assessments" },
  { icon: BadgeCheck, label: "Unique certificate ID on every copy" },
  { icon: Calendar, label: "Issue and completion dates recorded" },
  { icon: ShieldCheck, label: "Employer verification support" },
];

export function CertificateFrame({ className = "", imgClassName = "" }) {
  return (
    <figure className={`relative ${className}`}>
      <div
        className="absolute -inset-3 rounded-[24px] bg-[#7CFF00]/15 blur-xl sm:-inset-4 sm:blur-2xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-2xl border-[3px] border-[#7CFF00] bg-white p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-2">
        <img
          src={COURSE_CERTIFICATE_SRC}
          alt={COURSE_CERTIFICATE_ALT}
          className={`h-auto w-full rounded-xl object-contain sm:rounded-[20px] ${imgClassName}`}
        />
      </div>
    </figure>
  );
}

export default function CertificateSample() {
  return (
    <section className="relative overflow-hidden bg-[#0a1612] py-12 md:py-20">
      <OrbitBackdrop variant="night" />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Sample credential"
          title="Course Certificate of Completion"
          subtitle="Learners who finish assessments receive a SkillOrbit Academy certificate like this — with course name, dates and a unique ID."
        />

        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal>
            <CertificateFrame />
            <p className="mt-4 text-center text-xs font-medium tracking-wide text-[#B7C4BE] sm:text-sm">
              Sample certificate · issued after successful course completion
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-[#7CFF00]/20 bg-[#071313] px-4 py-3.5 text-sm font-semibold text-white sm:px-5 sm:py-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7CFF00] text-[#071313]">
                    <Icon size={16} strokeWidth={2.4} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
