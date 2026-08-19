import { Link } from "react-router-dom";
import {
  ArrowRightCircle,
  Briefcase,
  Globe,
  GraduationCap,
  Handshake,
  Monitor,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { whyFeatures } from "../../data/whyFeatures";
import OrbitBackdrop from "../common/OrbitBackdrop";

const FEATURE_ICONS = {
  1: Users,
  2: ShieldCheck,
  3: Briefcase,
  4: Handshake,
  5: GraduationCap,
  6: RefreshCw,
  7: ArrowRightCircle,
  8: Globe,
  9: Monitor,
};

export default function WhyFeatures() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#071313] py-12 sm:py-20 md:py-28 lg:py-32"
    >
      <OrbitBackdrop variant="mesh" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p
            className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#E7FF00] sm:mb-5 sm:text-sm sm:tracking-[0.35em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            WHY SKILLORBIT?
          </p>

          <h2
            className="text-[1.55rem] font-extrabold leading-[1.2] tracking-tight text-white sm:text-5xl sm:leading-[1.12] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Your Journey from{" "}
            <span className="block sm:inline">
              <span className="text-[#7CFF00] drop-shadow-[0_0_18px_rgba(124,255,0,0.20)]">
                Learning
              </span>{" "}
              to{" "}
              <span className="text-[#7CFF00] drop-shadow-[0_0_18px_rgba(124,255,0,0.20)] sm:text-[#8BE4FF] sm:drop-shadow-[0_0_18px_rgba(139,228,255,0.25)]">
                Earning
              </span>
            </span>
          </h2>

          <p
            className="mx-auto mt-5 hidden max-w-2xl text-sm font-medium leading-7 text-[#EFFFFB] sm:mt-6 sm:block sm:text-base"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            More than training — build real skills, work on real projects,
            and become career ready with SkillOrbit.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#7CFF00] shadow-[0_0_18px_rgba(124,255,0,0.65)] sm:mt-8" />
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-2.5 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-wrap lg:justify-center lg:gap-5">
          {whyFeatures.map((item, index) => {
            const Icon = FEATURE_ICONS[item.id] || Monitor;
            const isLast = index === whyFeatures.length - 1;

            return (
              <Link
                key={item.id}
                to={item.to || "/courses"}
                className={`group flex min-w-0 items-center rounded-2xl border border-white/15 bg-[#0d1c16] transition-all duration-300 hover:-translate-y-1 hover:border-[#7CFF00]/70 hover:shadow-[0_0_25px_rgba(124,255,0,0.18)] sm:min-h-[64px] sm:flex-row sm:gap-3 sm:rounded-full sm:border-white/25 sm:bg-white/[0.10] sm:px-6 sm:py-3.5 sm:backdrop-blur-md lg:w-auto ${
                  isLast
                    ? "col-span-2 mx-auto w-[calc(50%-5px)] sm:col-span-1 sm:mx-0 sm:w-full lg:w-auto"
                    : "w-full"
                }`}
              >
                <div className="flex w-full flex-col items-center px-3 py-4 text-center sm:w-auto sm:flex-row sm:gap-3 sm:px-0 sm:py-0 sm:text-left">
                  <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#7CFF00]/25 bg-[#071313] text-[#7CFF00] sm:mb-0 sm:h-9 sm:w-9 sm:rounded-full sm:border-0 sm:bg-transparent">
                    <Icon size={20} strokeWidth={1.8} className="sm:hidden" />
                    <span className="hidden text-lg sm:inline" aria-hidden="true">
                      {item.icon}
                    </span>
                  </div>

                  <span
                    className="text-[12px] font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#F4FFD6] sm:text-base lg:whitespace-nowrap"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center px-1 sm:mt-16">
          <Link
            to="/contact"
            className="group inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-3 rounded-full border border-[#7CFF00] bg-[#7CFF00] px-6 py-3.5 text-sm font-extrabold text-[#071313] shadow-[0_8px_25px_rgba(124,255,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E7FF00] hover:shadow-[0_10px_35px_rgba(124,255,0,0.35)] sm:px-7"
          >
            Start Your Journey
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
