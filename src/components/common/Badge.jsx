const TONES = {
  brand: "bg-brand-100 text-brand-600",
  dark: "bg-ink text-brand-400",
  amber: "bg-[#FEF6E7] text-[#B25E09]",
  red: "bg-[#FDEDEC] text-[#B42318]",
  neutral: "bg-surface-muted text-ink-light",
};

export default function Badge({ children, tone = "brand", icon: Icon, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${TONES[tone]} ${className}`}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
}
