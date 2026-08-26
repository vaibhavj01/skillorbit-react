import { Link } from "react-router-dom";
import { Star, Check, ArrowRight, Map } from "lucide-react";
import Reveal from "../common/Reveal";
import { ASSETS } from "../../data/siteConfig";
import { getCourseCover } from "../../data/courses";

export default function CourseCard({ course, delay = 0 }) {
  const cover = getCourseCover(course);
  const placement = course.placementSupport
    ? "100% Placement Assistance"
    : "Career guidance";
  const detailsTo = `/courses/${course.slug || course.id}`;
  const roadmapTo = `${detailsTo}/roadmap`;

  return (
    <Reveal delay={delay} className="h-full">
      <article className="so-card flex h-full min-w-0 flex-col overflow-hidden">
        <Link to={detailsTo} className="relative aspect-[16/9] shrink-0 overflow-hidden bg-surface-muted">
          <img
            src={cover}
            alt={course.name}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
            width={640}
            height={360}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <span className="absolute right-3 top-3 z-[3] rounded-lg bg-surface px-2 py-1 shadow-card">
            <img
              src={ASSETS.logo}
              alt="SkillOrbit"
              className="h-6 w-auto max-w-[72px] object-contain"
            />
          </span>
        </Link>

        <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
          <Link to={detailsTo}>
            <h3 className="mb-2 font-display text-[1.2rem] font-bold leading-snug text-ink sm:text-[22px]">
              {course.name}
            </h3>
            <p className="mb-4 line-clamp-3 text-[13.5px] leading-relaxed text-ink-light">
              {course.description}
            </p>
          </Link>

          <ul className="mb-5 space-y-2.5 text-[13.5px] text-ink-light">
            <Detail label="Duration" value={course.duration} />
            <Detail label="Fees" value={course.fees} />
            <Detail label="Placement" value={placement} />
          </ul>

          <div className="mt-auto space-y-3">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-ink">
              <Star size={16} className="fill-warning text-warning" />
              {course.rating}
              <span className="font-medium text-ink-muted">
                ({course.reviewCount || 52} Reviews)
              </span>
            </p>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                to={roadmapTo}
                className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl border border-line bg-transparent px-3 py-2.5 text-[11px] font-bold uppercase tracking-wide text-brand-dark transition-colors hover:border-brand-green hover:bg-surface-muted"
              >
                <Map size={13} /> Roadmap
              </Link>
              <Link
                to={detailsTo}
                className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-brand-primary px-3 py-2.5 text-[11px] font-bold uppercase tracking-wide text-[var(--cta-ink)] transition-colors hover:bg-brand-green"
              >
                View More <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Detail({ label, value }) {
  return (
    <li className="flex items-start gap-2">
      <Check size={16} className="mt-0.5 shrink-0 text-brand-green" strokeWidth={2.75} />
      <span>
        {label}:{" "}
        <strong className="font-bold text-ink">{value}</strong>
      </span>
    </li>
  );
}
