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
      className="so-dark why-section relative overflow-hidden bg-dark"
    >
      <OrbitBackdrop variant="mesh" />

      <div className="relative z-10 mx-auto max-w-site px-[var(--so-gutter)]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="why-section__eyebrow font-display font-extrabold uppercase tracking-[0.16em] text-brand-primary">
            WHY SKILLORBIT?
          </p>

          <h2 className="why-section__title font-display font-bold tracking-tight text-white">
            Your Journey from{" "}
            <span className="text-brand-primary">Learning</span> to{" "}
            <span className="text-brand-primary">Earning</span>
          </h2>

          <p className="why-section__copy mx-auto max-w-2xl font-medium text-dark-muted">
            More than training — build real skills, work on real projects,
            and become career ready with SkillOrbit.
          </p>

          <div className="why-section__rule mx-auto rounded-full bg-gradient-brand" />
        </div>

        <div className="why-section__grid mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-3">
          {whyFeatures.map((item, index) => {
            const Icon = FEATURE_ICONS[item.id] || Monitor;
            const isLast = index === whyFeatures.length - 1;

            return (
              <Link
                key={item.id}
                to={item.to || "/courses"}
                className={`why-section__card group flex min-w-0 items-center border border-dark-border bg-dark-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-green ${
                  isLast ? "why-section__card--last" : ""
                }`}
              >
                <div className="flex w-full min-w-0 items-center">
                  <div className="why-section__icon flex shrink-0 items-center justify-center rounded-xl bg-[rgba(0,184,61,0.12)] text-brand-primary">
                    <Icon size={18} strokeWidth={1.8} className="sm:hidden" />
                    <span className="why-section__emoji hidden sm:inline" aria-hidden="true">
                      {item.icon}
                    </span>
                  </div>

                  <span className="why-section__label min-w-0 font-display font-bold leading-snug text-white transition-colors duration-300 group-hover:text-brand-primary">
                    {item.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="why-section__cta flex justify-center px-4">
  <Link
    to="/contact"
    className="group inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-brand-primary px-6 py-3 text-sm font-bold text-[var(--cta-ink)] shadow-btn transition-colors duration-200 hover:bg-brand-green"
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
