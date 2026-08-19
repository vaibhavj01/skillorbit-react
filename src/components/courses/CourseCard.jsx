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
      <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#7CFF00]/15 bg-[#0d1c16] shadow-card transition-transform duration-300 hover:-translate-y-1">
        <Link to={detailsTo} className="relative aspect-[16/9] shrink-0 overflow-hidden bg-[#071313]">
          <img
            src={cover}
            alt={course.name}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />

          <img
            src={ASSETS.logo}
            alt="SkillOrbit"
            className="absolute right-3 top-3 z-[3] h-7 w-auto max-w-[72px] object-contain brightness-0 invert drop-shadow-md"
          />
        </Link>

        <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
          <Link to={detailsTo}>
            <h3 className="mb-2 font-display text-[1.2rem] font-extrabold leading-snug text-white sm:text-[22px]">
              {course.name}
            </h3>
            <p className="mb-4 line-clamp-3 text-[13.5px] leading-relaxed text-[#C5D5CE]">
              {course.description}
            </p>
          </Link>

          <ul className="mb-5 space-y-2.5 text-[13.5px] text-[#C5D5CE]">
            <Detail label="Duration" value={course.duration} />
            <Detail label="Fees" value={course.fees} />
            <Detail label="Placement" value={placement} />
          </ul>

          <div className="mt-auto space-y-3">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
              <Star size={16} className="fill-[#F5B400] text-[#F5B400]" />
              {course.rating}
              <span className="font-medium text-[#C5D5CE]">
                ({course.reviewCount || 52} Reviews)
              </span>
            </p>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                to={roadmapTo}
                className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-[#7CFF00]/40 bg-transparent px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-wide text-[#7CFF00] transition-all hover:-translate-y-0.5 hover:bg-[#7CFF00] hover:text-[#071313]"
              >
                <Map size={13} /> Roadmap
              </Link>
              <Link
                to={detailsTo}
                className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-[#6ecb17] bg-[#7bff00] px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-wide text-[#071313] shadow-[0_8px_25px_rgba(124,255,0,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#d0e324] hover:shadow-[0_10px_35px_rgba(124,255,0,0.35)]"
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
      <Check size={16} className="mt-0.5 shrink-0 text-[#239F4A]" strokeWidth={2.75} />
      <span>
        {label}:{" "}
        <strong className="font-bold text-white">{value}</strong>
      </span>
    </li>
  );
}
