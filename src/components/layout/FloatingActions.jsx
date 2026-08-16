import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { CONTACT } from "../../data/siteConfig";

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
          className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg bg-white border border-line text-brand-600"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-white bg-[#25D366]"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-40 bg-[#25D366]" />
        <MessageCircle size={24} className="relative" />
      </a>
    </div>
  );
}
