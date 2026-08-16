import Reveal from "../common/Reveal";
import { CATEGORIES } from "../../data/courses";

export default function CourseFilter({ active, onChange }) {
  return (
    <Reveal className="flex flex-wrap justify-center gap-2 mb-10">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              isActive ? "bg-ink text-brand-400 border-transparent" : "bg-white text-ink-light border-line"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </Reveal>
  );
}
