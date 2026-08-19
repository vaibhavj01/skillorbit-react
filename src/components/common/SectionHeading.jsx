import Reveal from "./Reveal";

export function Eyebrow({ children, light = false }) {
  return (
    <p className={`mb-2 inline-flex max-w-full items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#7CFF00] sm:mb-3 sm:text-xs sm:tracking-widest ${light ? "" : ""}`}>
      <span className="h-px w-5 shrink-0 bg-[#7CFF00] sm:w-6" />
      <span className="min-w-0">{children}</span>
    </p>
  );
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }) {
  const isCenter = align === "center";
  return (
    <Reveal className={`mb-8 max-w-2xl md:mb-12 ${isCenter ? "mx-auto text-center" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className="mb-3 font-display text-h2 font-bold text-white">{title}</h2>
      {subtitle && (
        <p className={`text-sm leading-6 sm:text-base sm:leading-relaxed md:text-lg ${light ? "text-white/70" : "text-ink-muted"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
