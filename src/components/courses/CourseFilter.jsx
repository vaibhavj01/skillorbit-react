import Reveal from "../common/Reveal";
import { CATEGORIES } from "../../data/courses";

export default function CourseFilter({ active, onChange }) {
  return (
    <Reveal className="course-filter-scroll mb-10">
      <div className="flex w-max min-w-full justify-center gap-2 px-1">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              type="button"
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                isActive
                  ? "bg-ink text-brand-400 border-transparent shadow-md"
                  : "bg-[#F3FBF7] text-ink-light border-[#35D0A5]/25 hover:border-brand-400 hover:text-brand-700"
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
