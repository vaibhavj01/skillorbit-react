import { Link } from "react-router-dom";

export default function RmButton({
  children,
  to,
  href,
  variant = "primary",
  full,
  className = "",
  type = "button",
  ...props
}) {
  const cls = `rm-btn rm-btn--${variant} ${full ? "rm-btn--full" : ""} ${className}`.trim();
  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} {...props}>
      {children}
    </button>
  );
}
