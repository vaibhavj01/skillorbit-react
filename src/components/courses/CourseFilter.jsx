import Reveal from "../common/Reveal";
import { CATEGORIES } from "../../data/courses";

export default function CourseFilter({ active, onChange }) {
  return (
    <Reveal className="course-filter-scroll mb-8 hidden sm:mb-10 sm:block">
      <div className="flex w-full flex-wrap justify-center gap-2 px-1">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              type="button"
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 min-h-11 ${
                isActive
                  ? "bg-ink text-brand-400 border-transparent shadow-md"
                  : "bg-[#0d1c16] text-ink-light border-[#7CFF00]/25 hover:border-brand-400 hover:text-brand-700"
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
