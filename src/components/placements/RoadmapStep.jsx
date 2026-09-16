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
      <li className="relative pl-9">
        <span
          className={`absolute left-0 top-1 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-dark-surface text-[10px] font-bold ${
            featured
                  ? "border-brand-lime bg-brand-lime text-[var(--cta-ink)] roadmap-node--final"
                  : "border-brand-lime text-brand-lime"
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
          className={`roadmap-card rounded-2xl border bg-dark-surface p-3.5 outline-none sm:p-4 ${
            featured ? "roadmap-card--final border-[rgba(57,255,20,0.35)]" : "border-dark-border"
          } ${active ? "is-active -translate-y-0.5 border-brand-lime" : ""} ${
            visible ? "is-visible" : "opacity-0"
          }`}
          style={{ animationDelay: delayMs }}
        >
          <StepBody item={item} featured={featured} active={active} />
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
        className={`roadmap-card group flex h-full flex-col rounded-2xl border bg-dark-surface p-3.5 outline-none focus-visible:ring-2 focus-visible:ring-[rgba(57,255,20,0.40)] sm:p-4 ${
          featured ? "roadmap-card--final border-[rgba(57,255,20,0.35)]" : "border-dark-border"
        } ${
          active
            ? "is-active -translate-y-0.5 border-brand-lime"
            : ""
        } ${visible ? "is-visible" : "opacity-0"}`}
        style={{ animationDelay: delayMs }}
      >
        <StepBody item={item} featured={featured} active={active} />
      </article>
    </li>
  );
}

function StepBody({ item, featured, active }) {
  const showAll = active || featured;
  const points = showAll ? item.points : item.points.slice(0, 3);

  return (
    <>
      {featured ? (
        <p className="mb-1.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-brand-lime">
          Final step
        </p>
      ) : null}
      <h3 className="font-display text-[0.95rem] font-bold leading-snug text-white sm:text-base">
        {item.title}
      </h3>
      <p className="mt-1.5 font-body text-[13px] leading-5 text-dark-muted sm:text-sm sm:leading-6">
        {item.description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {points.map((point) => (
          <li
            key={point}
            className="rounded-full bg-[rgba(57,255,20,0.10)] px-2.5 py-0.5 text-[11px] font-semibold text-brand-lime"
          >
            {point}
          </li>
        ))}
      </ul>
    </>
  );
}
