import { ROADMAP_CATEGORIES } from "../data/catalog";

export default function CategoryChips({ value, onChange }) {
  return (
    <div className="rm-chips" role="tablist" aria-label="Roadmap categories">
      <button type="button" className={!value ? "is-active" : ""} onClick={() => onChange("")}>
        All
      </button>
      {ROADMAP_CATEGORIES.map((item) => (
        <button
          key={item.id}
          type="button"
          className={value === item.id ? "is-active" : ""}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
