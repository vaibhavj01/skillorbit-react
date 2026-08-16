import { Link } from "react-router-dom";

const SIZES = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

// Buttons are black with a green accent text/icon color, per brand direction.
const VARIANTS = {
  primary: "bg-ink text-brand-400 shadow-btn hover:bg-[#22302A]",
  outline: "bg-transparent text-brand-600 border-[1.5px] border-ink hover:bg-ink hover:text-brand-400",
  dark: "bg-ink text-brand-400 hover:bg-[#22302A]",
  ghost: "bg-transparent text-brand-600 hover:text-brand-700",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  ...props
}) {
  const base = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 active:translate-y-0 ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={base} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
