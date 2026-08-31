import { Link } from "react-router-dom";
import { useDemoModal } from "../../context/DemoModalContext";

const SIZES = {
  sm: "min-h-11 h-11 px-3.5 text-[14px] sm:px-4 sm:text-[15px]",
  md: "min-h-12 h-12 px-5 text-[15px] sm:px-6 sm:text-[16px]",
  lg: "min-h-12 h-12 px-5 text-[15px] sm:h-14 sm:px-8 sm:text-[16px]",
};

const VARIANTS = {
  primary:
    "bg-[var(--brand-lime)] text-[var(--cta-ink)] font-bold shadow-btn hover:bg-[var(--color-lime-hover)]",
  outline:
    "bg-transparent text-brand-dark border border-brand-primary font-semibold hover:bg-[rgba(0,200,83,0.10)] hover:border-brand-primary",
  dark:
    "bg-transparent text-[var(--brand-lime)] border border-brand-primary font-semibold hover:bg-[rgba(0,200,83,0.10)]",
  ghost: "bg-transparent text-ink-light font-semibold hover:text-[var(--brand-lime)]",
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
  const base = `inline-flex max-w-full items-center justify-center gap-2 rounded-xl transition-[background-color,border-color,transform,color,box-shadow] duration-200 touch-manipulation [overflow-wrap:anywhere] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

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
