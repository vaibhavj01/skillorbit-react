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
    <section className="relative overflow-hidden bg-[#F7FAF8] pt-20 pb-16 md:pt-28 md:pb-24">
      
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-lime-200/30 blur-3xl" />

      <div className="pointer-events-none absolute right-[25%] bottom-0 h-56 w-56 rounded-full bg-green-100/40 blur-3xl" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <Reveal>
            <div className="max-w-2xl">

              {/* Eyebrow */}

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 shadow-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Sparkles size={14} />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                  Career & Placement Support
                </span>
              </div>

              {/* Heading */}

              <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Turn Your Skills Into a{" "}
                <span className="relative inline-block text-green-600">
                  Career
                  
                  {/* underline */}
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-lime-400/70 md:-bottom-2" />
                </span>
              </h1>

              {/* Description */}

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
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
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Book Free Demo
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>

                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-7 text-sm font-bold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-300 hover:text-green-700 hover:shadow-lg"
                >
                  <Phone size={18} />
                  Talk to a Counsellor
                </a>

              </div>

              {/* =========================
                  TRUST LINE
              ========================== */}

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">

                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={15}
                    className="text-green-600"
                  />
                  Live Training
                </span>

                <span className="hidden h-4 w-px bg-slate-300 sm:block" />

                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={15}
                    className="text-green-600"
                  />
                  Practical Learning
                </span>

                <span className="hidden h-4 w-px bg-slate-300 sm:block" />

                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={15}
                    className="text-green-600"
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

              <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:p-7">

                {/* Top gradient */}

                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-green-500 via-lime-400 to-green-600" />

                {/* Header */}

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-600">
                      Your Career Journey
                    </p>

                    <h2 className="mt-1 text-xl font-extrabold text-slate-900 sm:text-2xl">
                      From Learning to Placement
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
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
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-600 transition-transform duration-300 hover:scale-105"
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

              <div className="absolute -left-4 top-12 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block lg:-left-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Sparkles size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-slate-900">
                      Career Focused
                    </p>

                    <p className="text-[11px] font-medium text-slate-500">
                      Learn • Build • Grow
                    </p>
                  </div>

                </div>

              </div>

              {/* =========================
                  FLOATING SUPPORT CARD
              ========================== */}

              <div className="absolute -bottom-5 -right-3 rounded-2xl border border-green-100 bg-white p-4 shadow-xl sm:-right-7">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
                    <CheckCircle2 size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-slate-900">
                      Placement Support
                    </p>

                    <p className="text-[11px] font-medium text-slate-500">
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
    <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
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
            : "bg-green-50 text-green-700"
        }`}
      >
        {number}
      </div>

      {/* Content */}

      <div className="pt-0.5">

        <h3 className="text-sm font-extrabold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 max-w-[350px] text-xs leading-5 text-slate-500">
          {text}
        </p>

      </div>

    </div>
  );
}