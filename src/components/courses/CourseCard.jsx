import { Link } from "react-router-dom";
import { Star, Clock, ArrowUpRight } from "lucide-react";
import Reveal from "../common/Reveal";
import { categoryLabel } from "../../data/courses";

export default function CourseCard({ course, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link
        to={`/courses/${course.slug || course.id}`}
        className="h-full flex flex-col p-6 rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover group"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-ink p-2.5">
            <img
              src={course.icon}
              alt=""
              className="w-full h-full object-contain"
              style={{ filter: "invert(70%) sepia(40%) saturate(500%) hue-rotate(70deg)" }}
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-brand-100 text-brand-700">
            <Star size={11} fill="currentColor" /> {course.rating}
          </span>
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wide text-brand-600 mb-1">
          {categoryLabel(course.category)}
        </span>
        <h3 className="text-lg font-bold mb-2 leading-snug font-display text-ink">{course.name}</h3>
        <p className="text-sm mb-4 leading-relaxed flex-1 text-ink-muted line-clamp-3">{course.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {(course.technologies || []).slice(0, 3).map((t) => (
            <span key={t} className="text-[11px] font-medium px-2 py-1 rounded-md bg-surface-muted text-ink-light">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-line text-xs text-ink-muted">
          <span className="flex items-center gap-1">
            <Clock size={13} /> {course.duration}
          </span>
          <span>{course.level}</span>
        </div>

        <span className="mt-4 flex items-center justify-center gap-1.5 text-sm font-semibold py-2.5 rounded-lg bg-ink text-brand-400 group-hover:bg-[#22302A] transition-colors">
          View Details <ArrowUpRight size={14} />
        </span>
      </Link>
    </Reveal>
  );
}
