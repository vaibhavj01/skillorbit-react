import {
  BriefcaseBusiness,
  Code2,
  FileText,
  MessageSquareText,
  UserRoundCheck,
  Target,
  ArrowUpRight,
} from "lucide-react";

import Container from "../common/Container";
import Reveal from "../common/Reveal";


const placementBenefits = [
  {
    id: 1,
    icon: Code2,
    number: "01",
    title: "Industry-Ready Skills",
    description:
      "Learn technologies and development practices that help you become confident working on real-world applications.",
  },
  {
    id: 2,
    icon: BriefcaseBusiness,
    number: "02",
    title: "Real-World Projects",
    description:
      "Work on practical projects that help you understand how technical concepts are applied in professional environments.",
  },
  {
    id: 3,
    icon: FileText,
    number: "03",
    title: "Resume & Profile Building",
    description:
      "Get guidance to present your technical skills, projects and experience effectively on your resume and professional profiles.",
  },
  {
    id: 4,
    icon: Target,
    number: "04",
    title: "Interview Preparation",
    description:
      "Prepare for technical interviews, coding discussions and role-specific questions through structured practice.",
  },
  {
    id: 5,
    icon: MessageSquareText,
    number: "05",
    title: "Communication Skills",
    description:
      "Improve your professional communication and confidence for HR discussions, interviews and workplace interactions.",
  },
  {
    id: 6,
    icon: UserRoundCheck,
    number: "06",
    title: "Career Guidance",
    description:
      "Get guidance throughout your job-search journey, from preparation and applications to interview opportunities.",
  },
];


export default function WhyPlacementSupport() {
  return (
    <section className="relative overflow-hidden bg-[#071313] py-20 md:py-28">

      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-200/25 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-lime-200/20 blur-3xl" />


      <Container>

        {/* =========================================
            SECTION HEADING
        ========================================== */}

        <Reveal className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2">

            <span className="h-px w-8 bg-[#7CFF00]/150" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#7CFF00]">
              More Than Training
            </span>

            <span className="h-px w-8 bg-[#7CFF00]/150" />

          </div>


          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            We Prepare You for the{" "}
            <span className="text-[#7CFF00]">
              Real World
            </span>
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#C5D5CE] md:text-base">
            Getting a job takes more than completing a course.
            SkillOrbit combines technical learning, practical
            experience and career preparation to help you become
            more confident and job-ready.
          </p>

        </Reveal>


        {/* =========================================
            MAIN CONTENT
        ========================================== */}

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">

          {/* =======================================
              LEFT FEATURE CARD
          ======================================== */}

          <Reveal>

            <div className="relative h-full min-h-[480px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-700 via-green-700 to-green-900 p-7 text-white shadow-[0_20px_60px_rgba(22,101,52,0.18)] md:p-9">

              {/* Decorative circles */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-lime-400/10 blur-2xl" />


              {/* Icon */}

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d1c16]/10 text-lime-300 ring-1 ring-white/10 backdrop-blur-sm">

                <BriefcaseBusiness
                  size={25}
                  strokeWidth={1.8}
                />

              </div>


              {/* Content */}

              <div className="relative mt-8">

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-200">
                  Career Support System
                </p>


                <h3 className="mt-3 max-w-sm font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Learn.
                  <br />
                  Build.
                  <br />
                  Prepare.
                  <br />
                  Grow.
                </h3>


                <p className="mt-5 max-w-sm text-sm leading-6 text-green-100/80">
                  A structured journey designed to help you move
                  from learning concepts to demonstrating your
                  skills with confidence.
                </p>

              </div>


              {/* Bottom checklist */}

              <div className="relative mt-8 space-y-3">

                <SupportPoint text="Practical technical learning" />

                <SupportPoint text="Portfolio-ready projects" />

                <SupportPoint text="Interview preparation" />

                <SupportPoint text="Career guidance" />

              </div>


              {/* Bottom label */}

              <div className="absolute bottom-7 left-7 right-7 border-t border-white/10 pt-5 md:left-9 md:right-9 md:bottom-9">

                <p className="text-xs font-medium text-green-200/70">
                  Your learning journey should lead somewhere.
                </p>

              </div>

            </div>

          </Reveal>


          {/* =======================================
              RIGHT BENEFIT GRID
          ======================================== */}

          <div className="grid gap-4 sm:grid-cols-2">

            {placementBenefits.map((item, index) => {

              const Icon = item.icon;

              return (
                <Reveal
                  key={item.id}
                  delay={index * 0.06}
                >

                  <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-[#0d1c16] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-green-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]">

                    {/* Top number */}

                    <div className="flex items-start justify-between">

                      <div className="relative">

                        {/* Glow */}

                        <div className="absolute inset-0 rounded-xl bg-green-400/20 blur-lg opacity-0 transition duration-500 group-hover:opacity-100" />

                        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#7CFF00]/15 text-[#7CFF00] transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">

                          <Icon
                            size={20}
                            strokeWidth={2}
                          />

                        </div>

                      </div>


                      <span className="text-[11px] font-extrabold tracking-wider text-slate-300 transition-colors duration-300 group-hover:text-green-500">
                        {item.number}
                      </span>

                    </div>


                    {/* Text */}

                    <div className="mt-5">

                      <h3 className="font-display text-lg font-extrabold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#B7C4BE]">
                        {item.description}
                      </p>

                    </div>


                    {/* Hover arrow */}

                    <div className="mt-5 flex items-center gap-1 text-xs font-bold text-[#7CFF00] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">

                      <span>
                        Career focused
                      </span>

                      <ArrowUpRight size={14} />

                    </div>


                    {/* Bottom hover line */}

                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#7CFF00]/150 transition-all duration-500 group-hover:w-full" />

                  </div>

                </Reveal>
              );

            })}

          </div>

        </div>


        {/* =========================================
            BOTTOM MESSAGE
        ========================================== */}

        <Reveal
          delay={0.15}
          className="mt-10"
        >

          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-green-100 bg-[#0d1c16] px-6 py-5 text-center shadow-sm sm:flex-row sm:text-left">

            <div>

              <p className="text-sm font-extrabold text-white">
                Your goal isn't just to finish a course.
              </p>

              <p className="mt-1 text-xs leading-5 text-[#B7C4BE]">
                It's to become confident enough to use what you learn.
              </p>

            </div>


            <div className="shrink-0 rounded-xl bg-[#7CFF00]/15 px-4 py-2.5 text-xs font-bold text-[#7CFF00]">
              Skills → Projects → Interviews → Career
            </div>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}


/* =========================================
   SUPPORT POINT
========================================= */

function SupportPoint({ text }) {
  return (
    <div className="flex items-center gap-3">

      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0d1c16]/10 text-lime-300">

        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5 12 4 4L19 6" />
        </svg>

      </span>

      <span className="text-sm font-medium text-green-50">
        {text}
      </span>

    </div>
  );
}