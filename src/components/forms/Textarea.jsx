export default function Textarea({ error, className = "", ...props }) {
  return (
    <textarea
      rows={5}
      className={`rounded-xl border px-4 py-3 text-sm outline-none transition-colors bg-white placeholder:text-ink-muted focus:border-brand-500 resize-none ${
        error ? "border-[#D92D20]" : "border-line"
      } ${className}`}
      {...props}
    />
  );
}
