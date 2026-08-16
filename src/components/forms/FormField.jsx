export default function FormField({ label, htmlFor, error, children, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label} {required && <span className="text-[#D92D20]">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-[#D92D20]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
