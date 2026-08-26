const TONES = {
  brand: "bg-surface-muted text-brand-green",
  dark: "bg-dark-surface text-brand-primary border border-dark-border",
  amber: "bg-surface-muted text-warning",
  red: "bg-red-50 text-error",
  neutral: "bg-surface-muted text-ink-light",
};

export default function Badge({ children, tone = "brand", icon: Icon, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-xl ${TONES[tone]} ${className}`}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
}
