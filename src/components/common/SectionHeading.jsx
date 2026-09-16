import Reveal from "./Reveal";

export function Eyebrow({ children, light = true }) {
  return (
    <p className="mb-2 inline-flex max-w-full items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.08em] text-brand-lime sm:mb-3 sm:text-xs sm:tracking-[0.08em]">
      <span className="h-px w-5 shrink-0 bg-brand-lime sm:w-6" />
      <span className="min-w-0">{children}</span>
    </p>
  );
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = true }) {
  const isCenter = align === "center";
  return (
    <Reveal className={`mb-[clamp(1.5rem,3vw,3rem)] max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className="mb-3 font-display text-h2 font-extrabold text-ink-inverse">{title}</h2>
      {subtitle && (
        <p className={`max-w-xl text-sm leading-6 sm:text-base sm:leading-relaxed ${isCenter ? "mx-auto" : ""} text-dark-muted`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
