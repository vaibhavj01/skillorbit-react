export default function Textarea({ error, className = "", ...props }) {
  return (
    <textarea
      rows={5}
      className={`so-input w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors resize-none sm:text-sm ${
        error ? "border-error" : "border-line"
      } ${className}`}
      {...props}
    />
  );
}
