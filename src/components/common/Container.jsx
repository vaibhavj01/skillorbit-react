export default function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full min-w-0 max-w-site px-[var(--so-gutter)] ${className}`}>{children}</div>;
}
