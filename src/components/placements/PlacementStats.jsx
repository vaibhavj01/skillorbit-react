import { useEffect, useRef, useState } from "react";
import {
  Users,
  BriefcaseBusiness,
  GraduationCap,
  Star,
} from "lucide-react";

import Container from "../common/Container";
import Reveal from "../common/Reveal";


const placementStats = [
  {
    value: 10000,
    suffix: "+",
    label: "Students Trained",
    description: "Learners building career-ready skills",
    icon: Users,
  },
  {
    value: 500,
    suffix: "+",
    label: "Hiring Connections",
    description: "Career opportunities across industries",
    icon: BriefcaseBusiness,
  },
  {
    value: 50,
    suffix: "+",
    label: "Career-Focused Courses",
    description: "Programs designed for industry skills",
    icon: GraduationCap,
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "Learner Experience",
    description: "Focused on quality learning & support",
    icon: Star,
    decimal: true,
  },
];


/* =========================================
   ANIMATED COUNTER
========================================= */

function Counter({
  value,
  decimal = false,
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    if (!started) return;

    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easeOut =
        1 - Math.pow(1 - progress, 3);

      const currentValue = value * easeOut;

      if (decimal) {
        setCount(Number(currentValue.toFixed(1)));
      } else {
        setCount(Math.floor(currentValue));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value, decimal]);


  return (
    <span ref={ref}>
      {decimal
        ? count.toFixed(1)
        : count.toLocaleString("en-IN")}
    </span>
  );
}


/* =========================================
   MAIN COMPONENT
========================================= */

export default function PlacementStats() {
  return (
    <section className="relative bg-white py-12 md:py-16">

      <Container>

        {/* =================================
            INTRO
        ================================= */}

        <Reveal className="mx-auto mb-9 max-w-2xl text-center">

          <div className="mb-3 inline-flex items-center gap-2">

            <span className="h-px w-7 bg-green-500" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-green-600">
              SkillOrbit By The Numbers
            </span>

            <span className="h-px w-7 bg-green-500" />

          </div>

          <h2 className="font-display text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
            Built Around Your Career Goals
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 md:text-base">
            A learning ecosystem focused on practical skills,
            career preparation and continuous learner support.
          </p>

        </Reveal>


        {/* =================================
            STATS CONTAINER
        ================================= */}

        <Reveal>

          <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.07)]">

            {/* Top Accent */}

            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-lime-400 to-green-600" />


            {/* Stats Grid */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

              {placementStats.map((stat, index) => {

                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`
                      group relative
                      px-6 py-7
                      text-center
                      transition-all
                      duration-300
                      hover:bg-green-50/50
                      ${
                        index !== placementStats.length - 1
                          ? "border-b border-slate-100 sm:border-r lg:border-b-0"
                          : ""
                      }
                    `}
                  >

                    {/* Icon */}

                    <div className="mx-auto mb-4 relative w-fit">

                      {/* Glow */}

                      <div className="absolute inset-0 rounded-2xl bg-green-400/20 blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-green-600 group-hover:text-white">

                        <Icon
                          size={21}
                          strokeWidth={2}
                        />

                      </div>

                    </div>


                    {/* Number */}

                    <div className="flex items-baseline justify-center">

                      <span className="font-display text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">

                        <Counter
                          value={stat.value}
                          decimal={stat.decimal}
                        />

                      </span>

                      <span className="ml-1 text-xl font-extrabold text-green-600 md:text-2xl">
                        {stat.suffix}
                      </span>

                    </div>


                    {/* Label */}

                    <h3 className="mt-2 text-sm font-bold text-slate-900">
                      {stat.label}
                    </h3>


                    {/* Description */}

                    <p className="mx-auto mt-1.5 max-w-[210px] text-xs leading-5 text-slate-500">
                      {stat.description}
                    </p>


                    {/* Hover Line */}

                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-green-500 transition-all duration-300 group-hover:w-14" />

                  </div>
                );

              })}

            </div>

          </div>

        </Reveal>


        {/* =================================
            TRUST MESSAGE
        ================================= */}

        <Reveal delay={0.1} className="mt-7">

          <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row">

            <div className="flex items-center gap-1">

              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={15}
                  fill="currentColor"
                  className="text-lime-500"
                />
              ))}

            </div>

            <span className="hidden h-4 w-px bg-slate-300 sm:block" />

            <p className="text-xs font-semibold text-slate-500">
              Practical learning • Career guidance • Placement assistance
            </p>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}