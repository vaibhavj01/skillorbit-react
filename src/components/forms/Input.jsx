export default function Input({ error, className = "", ...props }) {
  return (
    <input
      className={`h-12 w-full rounded-xl border px-4 text-base outline-none transition-colors bg-[#0d1c16] text-white placeholder:text-[#8AA0A8] focus:border-[#7CFF00] sm:text-sm ${
        error ? "border-[#D92D20]" : "border-line"
      } ${className}`}
      {...props}
    />
  );
}
