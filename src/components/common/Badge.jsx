const TONES = {
  brand: "bg-[#7CFF00]/15 text-[#7CFF00]",
  dark: "bg-[#0d1c16] text-[#7CFF00] border border-[#7CFF00]/25",
  amber: "bg-[#7CFF00]/10 text-[#E7FF00]",
  red: "bg-[#FDEDEC]/10 text-[#FF8A80]",
  neutral: "bg-white/5 text-[#C5D5CE]",
};

export default function Badge({ children, tone = "brand", icon: Icon, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${TONES[tone]} ${className}`}>
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
}
