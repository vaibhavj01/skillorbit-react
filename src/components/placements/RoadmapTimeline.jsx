import RoadmapStep from "./RoadmapStep";
import RoadmapIcon from "./RoadmapIcon";
import { placementJourney } from "../../data/placementProcess";

const ROW_ONE = placementJourney.slice(0, 3);
const ROW_TWO = placementJourney.slice(3);

export default function RoadmapTimeline({ visible, activeId, setActiveId }) {
  return (
    <>
      <ol className="relative space-y-8 border-l-2 border-[#16A34A]/25 lg:hidden">
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

      <div className="hidden lg:block">
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
          className="mt-12"
        />
      </div>
    </>
  );
}

function TimelineRow({ items, visible, activeId, setActiveId, delayStart, className = "" }) {
  const columns = items.length === 3 ? "grid-cols-3" : "grid-cols-4";

  return (
    <div className={className}>
      <div className="relative mb-8">
        <div
          className={`roadmap-line pointer-events-none absolute left-[10%] right-[10%] top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#BBF7D0] via-[#16A34A] to-[#15803D] ${
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
                  className={`roadmap-node relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#F6FBF7] outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/50 ${
                    item.featured ? "roadmap-node--final" : ""
                  } ${
                    active
                      ? "bg-[#16A34A] text-white shadow-[0_8px_20px_rgba(22,163,74,0.35)]"
                      : "bg-white text-[#15803D] shadow-[0_4px_14px_rgba(17,24,39,0.08)]"
                  } ${visible ? "is-visible" : "opacity-0"}`}
                  style={{ animationDelay: `${delayStart + index * 0.1}s` }}
                >
                  <RoadmapIcon name={item.icon} size={22} />
                </button>
                <span className="mt-2 font-grotesk text-[11px] font-bold tracking-[0.16em] text-[#16A34A]">
                  {item.step}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <ol className={`grid gap-5 ${columns}`}>
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
