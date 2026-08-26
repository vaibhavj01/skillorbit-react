export default function Input({ error, className = "", ...props }) {
  return (
    <input
      className={`so-input h-12 w-full rounded-xl border px-4 text-base outline-none transition-colors sm:text-sm ${
        error ? "border-error" : "border-line"
      } ${className}`}
      {...props}
    />
  );
}
