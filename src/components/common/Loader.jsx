export default function Loader({ label = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3" role="status" aria-live="polite">
      <span className="w-10 h-10 rounded-full border-[3px] border-line border-t-brand-500 animate-spin" />
      <p className="text-sm text-ink-muted">{label}</p>
    </div>
  );
}
