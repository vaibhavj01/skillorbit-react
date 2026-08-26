import { Link } from "react-router-dom";
import { useDemoModal } from "../../context/DemoModalContext";

const SIZES = {
  sm: "min-h-11 h-11 px-3.5 text-sm sm:px-4",
  md: "min-h-12 h-12 px-5 text-sm sm:px-6",
  lg: "min-h-12 h-12 px-5 text-sm sm:h-14 sm:px-8 sm:text-base",
};

const VARIANTS = {
  primary: "bg-brand-primary text-[var(--cta-ink)] shadow-btn hover:bg-brand-green",
  outline: "bg-transparent text-brand-dark border border-line hover:bg-surface-muted hover:border-brand-green",
  dark: "bg-dark-surface text-brand-primary border border-dark-border hover:border-brand-green",
  ghost: "bg-transparent text-ink-light hover:text-brand-green",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  opensDemo = false,
  defaultCourseId = "",
  className = "",
  onClick,
  type,
  ...props
}) {
  const { openDemo } = useDemoModal();
  const base = `inline-flex max-w-full items-center justify-center gap-2 rounded-xl font-semibold transition-[background-color,border-color,transform,color] duration-200 touch-manipulation [overflow-wrap:anywhere] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  const handleClick = (event) => {
    if (opensDemo) {
      event.preventDefault();
      openDemo(defaultCourseId);
    }
    onClick?.(event);
  };

  if (opensDemo) {
    return (
      <button type={type || "button"} className={base} onClick={handleClick} {...props}>
        {children}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={base} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={base} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type={type || "button"} className={base} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
