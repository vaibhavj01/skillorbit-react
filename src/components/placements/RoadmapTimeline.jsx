import RoadmapStep from "./RoadmapStep";
import RoadmapIcon from "./RoadmapIcon";
import { placementJourney } from "../../data/placementProcess";

const ROW_ONE = placementJourney.slice(0, 3);
const ROW_TWO = placementJourney.slice(3);

export default function RoadmapTimeline({ visible, activeId, setActiveId }) {
  return (
    <>
      <ol className="relative space-y-[clamp(0.75rem,2svh,1.1rem)] border-l-2 border-brand-green/30 md:hidden">
        {placementJourney.map((item, index) => (
          <RoadmapStep
            key={item.id}
            item={item}
            layout="mobile"
            visible={visible}
            delay={0.08 * index}
            active={activeId === item.id}
            onActivate={() => setActiveId(item.id)}
            onDeactivate={() => setActiveId(null)}
          />
        ))}
      </ol>

      <div className="hidden md:block">
        <TimelineRow
          items={ROW_ONE}
          visible={visible}
          activeId={activeId}
          setActiveId={setActiveId}
          delayStart={0}
        />
        <TimelineRow
          items={ROW_TWO}
          visible={visible}
          activeId={activeId}
          setActiveId={setActiveId}
          delayStart={0.28}
          className="mt-[clamp(1.1rem,2.4svh,1.6rem)]"
        />
      </div>
    </>
  );
}

function TimelineRow({ items, visible, activeId, setActiveId, delayStart, className = "" }) {
  const columns = items.length === 3 ? "grid-cols-3" : "grid-cols-4";

  return (
    <div className={className}>
      <div className="relative mb-[clamp(0.75rem,1.8svh,1.15rem)]">
        <div
          className={`roadmap-line pointer-events-none absolute left-[8%] right-[8%] top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#00D639] via-[#00B83D] to-[#005C2B] ${
            visible ? "is-visible" : ""
          }`}
          aria-hidden="true"
        />
        <ol className={`relative grid ${columns}`}>
          {items.map((item, index) => {
            const active = activeId === item.id || item.featured;
            return (
              <li key={item.id} className="flex flex-col items-center">
                <button
                  type="button"
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                  onFocus={() => setActiveId(item.id)}
                  onBlur={() => setActiveId(null)}
                  aria-label={`${item.step}. ${item.title}`}
                  className={`roadmap-node relative z-10 flex h-[clamp(2.65rem,5.4svh,3.25rem)] w-[clamp(2.65rem,5.4svh,3.25rem)] items-center justify-center rounded-full border-4 border-[var(--dark-background)] outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50 ${
                    item.featured ? "roadmap-node--final" : ""
                  } ${
                    active
                      ? "bg-[#00D639] text-[var(--cta-ink)] shadow-btn"
                      : "bg-white text-[#005C2B] shadow-card"
                  } ${visible ? "is-visible" : "opacity-0"}`}
                  style={{ animationDelay: `${delayStart + index * 0.1}s` }}
                >
                  <RoadmapIcon name={item.icon} size={22} />
                </button>
                <span className="mt-1.5 font-display text-[11px] font-bold tracking-[0.16em] text-[#00D639]">
                  {item.step}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <ol className={`grid gap-[clamp(0.7rem,1.4vw,1rem)] ${columns}`}>
        {items.map((item, index) => (
          <RoadmapStep
            key={item.id}
            item={item}
            visible={visible}
            delay={delayStart + 0.12 + index * 0.1}
            active={activeId === item.id}
            onActivate={() => setActiveId(item.id)}
            onDeactivate={() => setActiveId(null)}
          />
        ))}
      </ol>
    </div>
  );
}
