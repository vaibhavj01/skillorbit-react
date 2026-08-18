import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, MessageSquare, Phone } from "lucide-react";
import { CONTACT } from "../../data/siteConfig";

const ACTIONS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: CONTACT.whatsappHref,
    external: true,
    className: "bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.35)]",
    icon: MessageCircle,
  },
  {
    id: "msg",
    label: "Msg",
    href: CONTACT.smsHref,
    external: false,
    className: "bg-[#1FB8D2] text-white shadow-[0_8px_20px_rgba(31,184,210,0.35)]",
    icon: MessageSquare,
  },
  {
    id: "call",
    label: "Call",
    href: CONTACT.phoneHref,
    external: false,
    className: "bg-[#7CFF00] text-[#071313] shadow-[0_8px_20px_rgba(124,255,0,0.35)]",
    icon: Phone,
  },
];

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-brand-600 shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {ACTIONS.map((action) => {
        const Icon = action.icon;
        return (
          <a
            key={action.id}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            className={`group relative flex h-14 w-14 items-center justify-center rounded-full ${action.className}`}
            aria-label={action.label}
          >
            {action.id === "whatsapp" && (
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
            )}
            <Icon size={22} className="relative" />
            <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-[#071313] px-3 py-1 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {action.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
