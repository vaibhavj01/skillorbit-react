import { Check } from "lucide-react";
import { ROADMAP_TAGLINE, roadmapInclusionGroups } from "../../data/roadmapInclusions";

export default function RoadmapInclusions({ variant = "dark" }) {
  const isDark = variant === "dark";

  return (
    <div className={isDark ? "text-white" : "text-ink"}>
      <p
        className={`mb-2 text-center text-xs font-bold uppercase tracking-[0.18em] ${
          isDark ? "text-brand-primary" : "text-brand-primary"
        }`}
      >
        Included with every SkillOrbit roadmap
      </p>
      <h2 className="mb-8 text-center font-display text-2xl font-bold md:text-3xl">
        {ROADMAP_TAGLINE}
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {roadmapInclusionGroups.map((group) => (
          <article
            key={group.id}
            className={`rounded-2xl border p-5 ${
              isDark
                ? "border-white/10 bg-white/5"
                : "border-brand-primary/20 bg-surface shadow-card"
            }`}
          >
            <h3 className={`mb-4 text-sm font-extrabold ${isDark ? "text-brand-primary" : "text-[var(--brand-green)]"}`}>
              {group.title}
            </h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-snug">
                  <Check
                    size={15}
                    className={`mt-0.5 shrink-0 ${isDark ? "text-brand-primary" : "text-[var(--brand-green)]"}`}
                    strokeWidth={2.8}
                  />
                  <span className={isDark ? "text-white/90" : "text-ink-light"}>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
