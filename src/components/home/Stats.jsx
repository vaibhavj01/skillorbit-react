import {
  Users,
  Handshake,
  Award,
  GraduationCap,
  UserRoundCheck,
  ArrowRight,
} from "lucide-react";

import useScrollReveal from "../../hooks/useScrollReveal";
import useCounter from "../../hooks/useCounter";
import { STATS } from "../../data/siteConfig";
import { useDemoModal } from "../../context/DemoModalContext";

const statIcons = {
  students: Users,
  partners: Handshake,
  placementRate: Award,
  courses: GraduationCap,
  experts: UserRoundCheck,
};

function StatItem({ stat, index }) {
  const [ref, visible] = useScrollReveal(0.3);
  const value = useCounter(stat.value, visible);
  const Icon = statIcons[stat.key] || Award;
  const isLast = index === STATS.length - 1;
  const isLeftCol = index % 2 === 0 && !isLast;

  return (
    <div
      ref={ref}
      className={`
        group flex min-w-0 items-center gap-2 px-2.5 py-3
        sm:gap-3 sm:px-4 sm:py-4
        md:justify-center lg:col-span-1 lg:flex-1 lg:px-3 xl:px-4
        ${isLast ? "col-span-2 justify-center lg:justify-center" : ""}
        ${isLeftCol ? "border-r border-white/[0.08]" : ""}
        ${index < 4 ? "border-b border-white/[0.08]" : ""}
        ${isLast ? "lg:border-r-0" : "lg:border-r lg:border-b-0"}
      `}
    >
      <div
        className="
          flex h-8 w-8 shrink-0 items-center justify-center rounded-full
          border border-[#7CFF00]/30 bg-[#7CFF00]/10 text-[#7CFF00]
          sm:h-10 sm:w-10 lg:h-11 lg:w-11
        "
      >
        <Icon size={15} strokeWidth={1.8} className="sm:hidden" />
        <Icon size={18} strokeWidth={1.8} className="hidden sm:block" />
      </div>

      <div className="min-w-0">
        <div className="flex items-baseline leading-none">
          <span className="font-display text-[18px] font-extrabold tracking-tight text-white sm:text-[24px] lg:text-[23px] xl:text-[25px]">
            {value.toLocaleString("en-IN")}
          </span>
          <span className="ml-0.5 text-[14px] font-extrabold text-[#7CFF00] sm:text-[19px] lg:text-[18px] xl:text-[20px]">
            {stat.suffix}
          </span>
        </div>
        <p className="mt-0.5 text-[9px] font-bold uppercase leading-snug tracking-[0.04em] text-[#B7C4BE] sm:mt-1 sm:text-[11px] lg:text-[10px] xl:text-[11px]">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

export default function Stats() {
  const { openDemo } = useDemoModal();

  return (
    <section className="relative z-20 -mt-4 bg-[#071313] px-3 sm:-mt-8 sm:px-6 lg:-mt-9 lg:px-8">
      <div className="mx-auto w-full max-w-[1320px]">
        <div
          className="
            relative overflow-hidden rounded-2xl border border-white/[0.10]
            bg-[#080909] shadow-[0_20px_60px_rgba(0,0,0,0.28)]
            sm:rounded-[1.5rem] lg:rounded-full
          "
        >
          <div
            className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-px bg-gradient-to-r from-transparent via-[#7CFF00]/70 to-transparent blur-[1px]"
          />

          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="grid grid-cols-2 lg:flex lg:flex-1">
              {STATS.map((stat, index) => (
                <StatItem key={stat.key} stat={stat} index={index} />
              ))}
            </div>

            <div className="hidden border-t border-white/[0.08] p-3 lg:block lg:border-l lg:border-t-0 lg:p-2">
              <button
                type="button"
                onClick={() => openDemo()}
                className="
                  group flex h-11 min-w-[150px] items-center justify-center gap-2 rounded-full
                  bg-[#7CFF00] px-5 text-xs font-extrabold uppercase tracking-[0.06em]
                  text-[#071313] shadow-[0_8px_25px_rgba(124,255,0,0.22)]
                  transition-all duration-300 hover:bg-[#E7FF00]
                  hover:shadow-[0_10px_30px_rgba(124,255,0,0.32)]
                "
              >
                Book Free Demo
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
