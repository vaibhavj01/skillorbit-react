export default function RoadmapStep({
  item,
  visible,
  delay = 0,
  active = false,
  onActivate,
  onDeactivate,
  layout = "desktop",
}) {
  const featured = Boolean(item.featured);
  const delayMs = `${delay}s`;

  if (layout === "mobile") {
    return (
      <li className="relative pl-10">
        <span
          className={`absolute left-0 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-white text-[11px] font-bold ${
            featured
              ? "border-[#16A34A] bg-[#16A34A] text-white roadmap-node--final"
              : "border-[#16A34A] text-[#15803D]"
          } ${visible ? "is-visible" : ""}`}
          style={{ animationDelay: delayMs }}
        >
          {item.step}
        </span>
        <article
          tabIndex={0}
          onMouseEnter={onActivate}
          onMouseLeave={onDeactivate}
          onFocus={onActivate}
          onBlur={onDeactivate}
          className={`roadmap-card rounded-2xl border bg-white p-5 outline-none ${
            featured ? "roadmap-card--final border-[#16A34A]/30" : "border-[#E5E7EB]"
          } ${active ? "is-active -translate-y-0.5 border-[#16A34A] shadow-[0_16px_36px_rgba(17,24,39,0.08)]" : ""} ${
            visible ? "is-visible" : "opacity-0"
          }`}
          style={{ animationDelay: delayMs }}
        >
          <StepBody item={item} featured={featured} active={active} compact />
        </article>
      </li>
    );
  }

  return (
    <li className="min-w-0">
      <article
        tabIndex={0}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
        className={`roadmap-card group flex h-full flex-col rounded-2xl border bg-white p-5 outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/40 ${
          featured ? "roadmap-card--final border-[#16A34A]/35" : "border-[#E5E7EB]"
        } ${
          active
            ? "is-active -translate-y-1 border-[#16A34A] shadow-[0_18px_40px_rgba(17,24,39,0.1)]"
            : "shadow-[0_4px_16px_rgba(17,24,39,0.04)]"
        } ${visible ? "is-visible" : "opacity-0"}`}
        style={{ animationDelay: delayMs }}
      >
        <StepBody item={item} featured={featured} active={active} />
      </article>
    </li>
  );
}

function StepBody({ item, featured, active, compact = false }) {
  const showAll = active || featured;
  const points = showAll ? item.points : item.points.slice(0, 3);

  return (
    <>
      {featured ? (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#16A34A]">
          Final step
        </p>
      ) : null}
      <h3 className="font-grotesk text-base font-bold text-[#111827]">{item.title}</h3>
      <p className={`mt-2 text-sm leading-6 text-[#4B5563] ${compact ? "" : "min-h-[72px]"}`}>
        {item.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {points.map((point) => (
          <li
            key={point}
            className="rounded-full bg-[#F0FDF4] px-2.5 py-1 text-[11px] font-semibold text-[#15803D]"
          >
            {point}
          </li>
        ))}
      </ul>
    </>
  );
}
