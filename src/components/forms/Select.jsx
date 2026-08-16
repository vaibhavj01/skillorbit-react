import { ChevronDown } from "lucide-react";

export default function Select({ error, className = "", children, ...props }) {
  return (
    <div className="relative">
      <select
        className={`h-12 w-full appearance-none rounded-xl border px-4 pr-10 text-sm outline-none transition-colors bg-white focus:border-brand-500 ${
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
