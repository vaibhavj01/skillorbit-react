import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { CONTACT } from "../../data/siteConfig";
import WhatsAppIcon from "../common/WhatsAppIcon";

const ACTIONS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: CONTACT.whatsappHref,
    external: true,
    className: "bg-[#25D366] text-white",
    icon: WhatsAppIcon,
  },
  {
    id: "call",
    label: "Call",
    href: CONTACT.phoneHref,
    external: false,
    className: "bg-[#39FF14] text-[#021A12] shadow-[0_8px_20px_rgba(57,255,20,0.22)]",
    icon: Phone,
  },
];

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-40 flex flex-col items-end gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(57,255,20,0.25)] bg-[#063522] text-[#B8FF5A] shadow-[0_8px_20px_rgba(2,26,18,0.35)] transition-colors duration-200 hover:border-[rgba(57,255,20,0.45)] hover:text-[#39FF14] sm:h-11 sm:w-11"
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
            className={`relative flex h-12 w-12 items-center justify-center rounded-full shadow-lg sm:h-14 sm:w-14 ${action.className}`}
            aria-label={action.label}
          >
            <Icon size={20} className="relative" />
          </a>
        );
      })}
    </div>
  );
}
