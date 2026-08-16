import Reveal from "./Reveal";

export function Eyebrow({ children }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3 text-brand-600 font-mono">
      <span className="w-6 h-px bg-brand-500" />
      {children}
    </p>
  );
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const isCenter = align === "center";
  return (
    <Reveal className={`max-w-2xl mb-12 md:mb-16 ${isCenter ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display font-bold text-h2 text-ink mb-4">{title}</h2>
      {subtitle && <p className="text-base md:text-lg leading-relaxed text-ink-muted">{subtitle}</p>}
    </Reveal>
  );
}
