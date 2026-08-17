import { Link } from "react-router-dom";
import { Star, Check, ArrowRight, Map } from "lucide-react";
import Reveal from "../common/Reveal";
import { ASSETS } from "../../data/siteConfig";
import { getCourseCover } from "../../data/courses";

export default function CourseCard({ course, delay = 0 }) {
  const cover = getCourseCover(course);
  const tags = (course.technologies || []).slice(0, 2);
  const placement = course.placementSupport
    ? "100% Placement Assistance"
    : "Career guidance";
  const detailsTo = `/courses/${course.slug || course.id}`;
  const roadmapTo = `${detailsTo}/roadmap`;

  return (
    <Reveal delay={delay} className="h-full">
      <article className="h-full flex flex-col overflow-hidden rounded-[20px] bg-[#F3FBF7] shadow-[0_10px_30px_rgba(16,21,20,0.12)] transition-transform duration-300 hover:-translate-y-1">
        <Link to={detailsTo} className="relative aspect-[16/10] shrink-0 overflow-hidden">
          <img
            src={cover}
            alt={course.name}
            className="h-full w-full object-cover object-[70%_center]"
            loading="lazy"
          />

          <div className="absolute left-3 top-3 z-[3] flex max-w-[58%] flex-col gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="w-fit rounded-full bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[#1E3A5F] shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <img
            src={ASSETS.logo}
            alt="SkillOrbit"
            className="absolute right-3 top-3 z-[3] h-7 w-auto max-w-[80px] object-contain drop-shadow-md"
          />
        </Link>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
          <Link to={detailsTo}>
            <h3 className="mb-2 font-display text-[22px] font-extrabold leading-snug text-[#071313]">
              {course.name}
            </h3>
            <p className="mb-4 line-clamp-3 text-[13.5px] leading-relaxed text-[#365F6E]">
              {course.description}
            </p>
          </Link>

          <ul className="mb-5 space-y-2.5 text-[13.5px] text-[#365F6E]">
            <Detail label="Duration" value={course.duration} />
            <Detail label="Fees" value={course.fees} />
            <Detail label="Placement" value={placement} />
          </ul>

          <div className="mt-auto space-y-3">
            <p className="flex items-center gap-1.5 text-sm font-semibold text-[#071313]">
              <Star size={16} className="fill-[#F5B400] text-[#F5B400]" />
              {course.rating}
              <span className="font-medium text-[#365F6E]">
                ({course.reviewCount || 52} Reviews)
              </span>
            </p>

            <div className="flex gap-2">
              <Link
                to={roadmapTo}
                className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-[#35D0A5] bg-white px-3 py-2 text-[11px] font-extrabold uppercase tracking-wide text-[#087A3E] shadow-[0_6px_18px_rgba(53,208,165,0.16)] transition-all hover:-translate-y-0.5 hover:border-[#7CFF00] hover:bg-[#E7F7F0]"
              >
                <Map size={13} /> Roadmap
              </Link>
              <Link
                to={detailsTo}
                className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-[#6ecb17] bg-[#7bff00] px-3 py-2 text-[11px] font-extrabold uppercase tracking-wide text-[#06352C] shadow-[0_8px_25px_rgba(124,255,0,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#d0e324] hover:shadow-[0_10px_35px_rgba(124,255,0,0.35)]"
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
        <strong className="font-bold text-[#071313]">{value}</strong>
      </span>
    </li>
  );
}
