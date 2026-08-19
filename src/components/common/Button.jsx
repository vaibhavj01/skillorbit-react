import { Link } from "react-router-dom";
import { useDemoModal } from "../../context/DemoModalContext";

const SIZES = {
  sm: "min-h-11 h-11 px-3.5 text-sm sm:px-4",
  md: "min-h-12 h-12 px-5 text-sm sm:px-6",
  lg: "min-h-12 h-12 px-5 text-sm sm:h-14 sm:px-8 sm:text-base",
};

const VARIANTS = {
  primary: "bg-[#7CFF00] text-[#071313] shadow-btn hover:bg-[#E7FF00]",
  outline: "bg-transparent text-[#7CFF00] border-[1.5px] border-[#7CFF00]/45 hover:bg-[#7CFF00] hover:text-[#071313]",
  dark: "bg-[#0d1c16] text-[#7CFF00] border border-[#7CFF00]/25 hover:border-[#7CFF00]",
  ghost: "bg-transparent text-[#C5D5CE] hover:text-[#7CFF00]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  opensDemo = false,
  defaultCourseId = "",
  campaign = "",
  className = "",
  onClick,
  type,
  ...props
}) {
  const { openDemo } = useDemoModal();
  const base = `inline-flex max-w-full items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 touch-manipulation [overflow-wrap:anywhere] hover:-translate-y-0.5 active:translate-y-0 ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  const handleClick = (event) => {
    if (opensDemo) {
      event.preventDefault();
      openDemo(defaultCourseId, campaign ? { campaign } : {});
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
