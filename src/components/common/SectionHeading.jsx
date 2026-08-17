import Reveal from "./Reveal";

export function Eyebrow({ children, light = false }) {
  return (
    <p className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3 font-mono ${light ? "text-[#7CFF00]" : "text-[#087A3E]"}`}>
      <span className={`w-6 h-px ${light ? "bg-[#7CFF00]" : "bg-[#35D0A5]"}`} />
      {children}
    </p>
  );
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", light = false }) {
  const isCenter = align === "center";
  return (
    <Reveal className={`max-w-2xl mb-12 md:mb-16 ${isCenter ? "mx-auto text-center" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`font-display font-bold text-h2 mb-4 ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? "text-white/70" : "text-ink-muted"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
