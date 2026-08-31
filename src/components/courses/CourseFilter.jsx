import Reveal from "../common/Reveal";
import { CATEGORIES } from "../../data/courses";

export default function CourseFilter({
  active,
  onChange,
  align = "center",
  variant = "light",
  className = "",
}) {
  return (
    <Reveal className={`course-filter-scroll mb-8 sm:mb-10 ${className}`}>
      <div
        className={`flex w-full flex-wrap gap-2 ${
          align === "start" ? "justify-start" : "justify-center"
        }`}
      >
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              type="button"
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`course-chip inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-3.5 text-sm font-semibold leading-none transition-colors duration-200 ${
                variant === "dark"
                  ? isActive
                    ? "course-chip--active-dark"
                    : "course-chip--idle-dark"
                  : isActive
                    ? "bg-ink text-brand-400 border-transparent shadow-md"
                    : "bg-surface text-ink-light border-brand-primary/25 hover:border-brand-400 hover:text-brand-700"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </Reveal>
  );
}
