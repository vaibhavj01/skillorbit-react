export default function Textarea({ error, className = "", ...props }) {
  return (
    <textarea
      rows={5}
      className={`w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors bg-[#0d1c16] text-white placeholder:text-[#8AA0A8] focus:border-[#7CFF00] resize-none sm:text-sm ${
        error ? "border-[#D92D20]" : "border-line"
      } ${className}`}
      {...props}
    />
  );
}
