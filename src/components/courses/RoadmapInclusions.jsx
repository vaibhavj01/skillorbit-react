import { Check } from "lucide-react";
import { ROADMAP_TAGLINE, roadmapInclusionGroups } from "../../data/roadmapInclusions";

export default function RoadmapInclusions({ variant = "dark" }) {
  const isDark = variant === "dark";

  return (
    <div className={isDark ? "text-white" : "text-[#071313]"}>
      <p
        className={`mb-2 text-center text-xs font-bold uppercase tracking-[0.18em] ${
          isDark ? "text-[#7CFF00]" : "text-[#087A3E]"
        }`}
      >
        Included with every SkillOrbit roadmap
      </p>
      <h2 className="mb-8 text-center font-roboto text-2xl font-black md:text-3xl">
        {ROADMAP_TAGLINE}
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {roadmapInclusionGroups.map((group) => (
          <article
            key={group.id}
            className={`rounded-2xl border p-5 ${
              isDark
                ? "border-white/10 bg-white/5"
                : "border-[#35D0A5]/20 bg-white shadow-[0_10px_28px_rgba(6,63,42,0.06)]"
            }`}
          >
            <h3 className={`mb-4 text-sm font-extrabold ${isDark ? "text-[#7CFF00]" : "text-[#239F4A]"}`}>
              {group.title}
            </h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-snug">
                  <Check
                    size={15}
                    className={`mt-0.5 shrink-0 ${isDark ? "text-[#7CFF00]" : "text-[#239F4A]"}`}
                    strokeWidth={2.8}
                  />
                  <span className={isDark ? "text-white/80" : "text-[#365F6E]"}>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
