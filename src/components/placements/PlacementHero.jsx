import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

import Container from "../common/Container";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import { CONTACT } from "../../data/siteConfig";

export default function PlacementHero() {
  return (
    <section className="relative overflow-hidden bg-[#071313] pt-20 pb-16 md:pt-28 md:pb-24">
      
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div className="pointer-events-none absolute -left-32 top-20 hidden h-72 w-72 rounded-full bg-green-200/30 blur-3xl md:block" />

      <div className="pointer-events-none absolute -right-32 top-10 hidden h-96 w-96 rounded-full bg-lime-200/30 blur-3xl md:block" />

      <div className="pointer-events-none absolute right-[25%] bottom-0 hidden h-56 w-56 rounded-full bg-green-100/40 blur-3xl md:block" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <Reveal>
            <div className="max-w-2xl">

              {/* Eyebrow */}

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-[#0d1c16] px-4 py-2 shadow-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-[#7CFF00]">
                  <Sparkles size={14} />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#7CFF00]">
                  Career & Placement Support
                </span>
              </div>

              {/* Heading */}

              <h1 className="font-display text-[1.65rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl">
                Turn Your Skills Into a{" "}
                <span className="relative inline-block text-[#7CFF00]">
                  Career
                  
                  {/* underline */}
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-lime-400/70 md:-bottom-2" />
                </span>
              </h1>

              {/* Description */}

              <p className="mt-6 max-w-xl text-base leading-7 text-[#C5D5CE] md:text-lg md:leading-8">
                Build industry-ready skills, work on real-world projects,
                prepare for interviews and get dedicated career support from
                SkillOrbit.
              </p>

              {/* =========================
                  BENEFITS
              ========================== */}

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <HeroBenefit text="Industry-focused training" />

                <HeroBenefit text="Real-world projects" />

                <HeroBenefit text="Interview preparation" />

                <HeroBenefit text="Placement assistance" />

              </div>

              {/* =========================
                  BUTTONS
              ========================== */}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Button
                  opensDemo
                  variant="primary"
                  size="lg"
                  className="group w-full sm:w-auto"
                >
                  Book Free Demo
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>

                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-[#0d1c16] px-5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7CFF00] hover:text-[#7CFF00] sm:h-14 sm:px-7"
                >
                  <Phone size={18} />
                  Talk to a Counsellor
                </a>

              </div>

              {/* =========================
                  TRUST LINE
              ========================== */}

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-[#B7C4BE]">

                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={15}
                    className="text-[#7CFF00]"
                  />
                  Live Training
                </span>

                <span className="hidden h-4 w-px bg-slate-300 sm:block" />

                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={15}
                    className="text-[#7CFF00]"
                  />
                  Practical Learning
                </span>

                <span className="hidden h-4 w-px bg-slate-300 sm:block" />

                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={15}
                    className="text-[#7CFF00]"
                  />
                  Career Guidance
                </span>

              </div>

            </div>
          </Reveal>

          {/* =========================
              RIGHT VISUAL
          ========================== */}

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-[540px]">

              {/* Main Card */}

              <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-[#0d1c16] p-5 shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:p-7">

                {/* Top gradient */}

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-green-500 via-lime-400 to-green-600" />

                {/* Header */}

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7CFF00]">
                      Your Career Journey
                    </p>

                    <h2 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                      From Learning to Placement
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7CFF00]/15 text-[#7CFF00]">
                    <BriefcaseBusiness size={21} />
                  </div>

                </div>

                {/* Journey */}

                <div className="relative mt-8">

                  {/* Vertical Line */}

                  <div className="absolute left-[20px] top-5 bottom-5 w-px bg-green-100" />

                  <div className="space-y-6">

                    <JourneyItem
                      number="01"
                      title="Learn"
                      text="Master job-relevant technologies with structured training."
                      active
                    />

                    <JourneyItem
                      number="02"
                      title="Practice"
                      text="Strengthen your skills through assignments and hands-on practice."
                    />

                    <JourneyItem
                      number="03"
                      title="Build"
                      text="Create real-world projects that strengthen your portfolio."
                    />

                    <JourneyItem
                      number="04"
                      title="Prepare"
                      text="Get interview, resume and communication preparation."
                    />

                    <JourneyItem
                      number="05"
                      title="Grow"
                      text="Receive career guidance and placement assistance."
                    />

                  </div>
                </div>

                {/* Bottom CTA */}

                <div className="mt-8 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-4 text-white">

                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <p className="text-xs font-semibold text-green-100">
                        Ready to start?
                      </p>

                      <p className="mt-0.5 text-sm font-extrabold">
                        Take the first step today.
                      </p>
                    </div>

                    <a
                      href={CONTACT.phoneHref}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d1c16] text-[#7CFF00] transition-transform duration-300 hover:scale-105"
                      aria-label="Call SkillOrbit"
                    >
                      <Phone size={18} />
                    </a>

                  </div>

                </div>

              </div>

              {/* =========================
                  FLOATING RATING CARD
              ========================== */}

              <div className="absolute -left-4 top-12 hidden rounded-2xl border border-slate-100 bg-[#0d1c16] p-4 shadow-xl sm:block lg:-left-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7CFF00]/15 text-[#7CFF00]">
                    <Sparkles size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-white">
                      Career Focused
                    </p>

                    <p className="text-[11px] font-medium text-[#B7C4BE]">
                      Learn • Build • Grow
                    </p>
                  </div>

                </div>

              </div>

              {/* =========================
                  FLOATING SUPPORT CARD
              ========================== */}

              <div className="absolute -bottom-5 -right-3 rounded-2xl border border-green-100 bg-[#0d1c16] p-4 shadow-xl sm:-right-7">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                    <CheckCircle2 size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-white">
                      Placement Support
                    </p>

                    <p className="text-[11px] font-medium text-[#B7C4BE]">
                      Career guidance included
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}


/* =========================================
   HERO BENEFIT
========================================= */

function HeroBenefit({ text }) {
  return (
    <div className="flex items-center gap-2.5 text-sm font-semibold text-[#C5D5CE]">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-[#7CFF00]">
        <CheckCircle2 size={13} strokeWidth={2.5} />
      </span>

      {text}
    </div>
  );
}


/* =========================================
   JOURNEY ITEM
========================================= */

function JourneyItem({
  number,
  title,
  text,
  active = false,
}) {
  return (
    <div className="relative flex gap-4">

      {/* Number */}

      <div
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white text-xs font-extrabold shadow-sm ${
          active
            ? "bg-green-600 text-white"
            : "bg-[#7CFF00]/15 text-[#7CFF00]"
        }`}
      >
        {number}
      </div>

      {/* Content */}

      <div className="pt-0.5">

        <h3 className="text-sm font-extrabold text-white">
          {title}
        </h3>

        <p className="mt-1 max-w-[350px] text-xs leading-5 text-[#B7C4BE]">
          {text}
        </p>

      </div>

    </div>
  );
}