import { ChevronDown } from "lucide-react";

export default function Select({ error, className = "", children, ...props }) {
  return (
    <div className="relative">
      <select
        className={`h-12 w-full appearance-none rounded-xl border px-4 pr-10 text-base outline-none transition-colors bg-[#0d1c16] text-white focus:border-[#7CFF00] sm:text-sm ${
          error ? "border-[#D92D20]" : "border-line"
        } ${className}`}
        {...props}
      >
        {children}
      </select>
      <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted" />
    </div>
  );
}
