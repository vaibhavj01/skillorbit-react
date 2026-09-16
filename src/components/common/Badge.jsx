const TONES = {
  brand: "bg-[rgba(57,255,20,0.12)] text-brand-lime",
  dark: "bg-dark-surface text-brand-primary border border-dark-border",
  amber: "bg-[rgba(245,158,11,0.12)] text-warning",
  red: "bg-[rgba(239,68,68,0.12)] text-error",
  neutral: "bg-[rgba(255,255,255,0.06)] text-ink-light",
};

export default function Badge({ children, tone = "brand", icon: Icon, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-xl ${TONES[tone]} ${className}`}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
}
