export default function Input({ error, className = "", ...props }) {
  return (
    <input
      className={`h-12 rounded-xl border px-4 text-sm outline-none transition-colors bg-white placeholder:text-ink-muted focus:border-brand-500 ${
        error ? "border-[#D92D20]" : "border-line"
      } ${className}`}
      {...props}
    />
  );
}
