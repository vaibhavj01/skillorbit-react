import useScrollReveal from "../../hooks/useScrollReveal";

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [ref, visible] = useScrollReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}
