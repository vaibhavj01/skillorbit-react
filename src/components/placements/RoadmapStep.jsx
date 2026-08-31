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
          className={`absolute left-0 top-1 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-surface text-[10px] font-bold ${
            featured
                  ? "border-[var(--brand-primary)] bg-[var(--brand-lime)] text-[var(--cta-ink)] roadmap-node--final"
                  : "border-[var(--brand-primary)] text-[var(--brand-dark)]"
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
          className={`roadmap-card rounded-2xl border bg-white p-3.5 outline-none sm:p-4 ${
            featured ? "roadmap-card--final border-[#00C853]/30" : "border-[#00C853]/18"
          } ${active ? "is-active -translate-y-0.5 border-[#00C853]" : ""} ${
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
        className={`roadmap-card group flex h-full flex-col rounded-2xl border bg-white p-3.5 outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]/40 sm:p-4 ${
          featured ? "roadmap-card--final border-[#00C853]/35" : "border-[#00C853]/18"
        } ${
          active
            ? "is-active -translate-y-0.5 border-[#00C853]"
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
        <p className="mb-1.5 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-[#00C853]">
          Final step
        </p>
      ) : null}
      <h3 className="font-display text-[0.95rem] font-bold leading-snug text-[#061812] sm:text-base">
        {item.title}
      </h3>
      <p className="mt-1.5 font-body text-[13px] leading-5 text-[#52605A] sm:text-sm sm:leading-6">
        {item.description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {points.map((point) => (
          <li
            key={point}
            className="rounded-full bg-[#F1F6F3] px-2.5 py-0.5 text-[11px] font-semibold text-[var(--brand-dark)]"
          >
            {point}
          </li>
        ))}
      </ul>
    </>
  );
}
