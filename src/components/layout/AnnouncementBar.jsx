import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";

const ANNOUNCEMENT_LINKS = [
  { label: "Certificate", to: "/certificates" },
  { label: "Webinar", to: "/webinar" },
  { label: "Corporate", to: "/corporate" },
  { label: "CSR", to: "/csr" },
  { label: "Blogs", to: "/blog" },
  { label: "Students Reviews", to: "/reviews" },
  { label: "Referral", to: "/referral" },
  { label: "Feedback", to: "/feedback" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export default function AnnouncementBar({
  hidden = false,
  mobileOpen = false,
  onClose = () => {},
}) {
  return (
    <>
      {/* ================= DESKTOP ANNOUNCEMENT BAR ================= */}

      <div
        className={`
          fixed
          left-0
          right-0
          top-0
          z-[60]
          hidden
          h-10
          md:block
          transition-transform
          duration-300
          ease-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
        style={{
          background:
            "linear-gradient(90deg, #063F2A 0%, #087A3E 28%, #1AA34A 55%, #239F4A 78%, #35D0A5 100%)",
        }}
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#7CFF00]
            to-transparent
          "
        />

        <div className="mx-auto flex h-full max-w-7xl items-center justify-end px-5 md:px-8">
          <nav className="flex items-center gap-1" aria-label="Quick links">
            {ANNOUNCEMENT_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="
                  rounded-full
                  px-2.5
                  py-1

                  text-[11px]
                  font-bold
                  tracking-wide
                  text-white/90

                  transition-all
                  duration-200

                  hover:bg-[#7CFF00]
                  hover:text-[#06352C]
                  hover:shadow-[0_0_16px_rgba(124,255,0,0.45)]
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ================= MOBILE ANNOUNCEMENT DRAWER ================= */}

      <div
        className={`
          fixed
          inset-0
          z-[90]
          md:hidden
          ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        <div
          onClick={onClose}
          className="
            absolute
            inset-0
            bg-[#063F2A]/50
            backdrop-blur-sm
            transition-opacity
            duration-300
          "
          style={{ opacity: mobileOpen ? 1 : 0 }}
        />

        <aside
          className="
            absolute
            bottom-0
            left-0
            top-0
            flex
            w-[88%]
            max-w-[360px]
            flex-col
            bg-[#F4FFF8]
            shadow-2xl
            transition-transform
            duration-300
          "
          style={{
            transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <div
            className="
              flex
              h-16
              shrink-0
              items-center
              justify-between
              px-5
            "
            style={{
              background:
                "linear-gradient(90deg, #087A3E 0%, #239F4A 50%, #35D0A5 100%)",
            }}
          >
            <div>
              <p className="text-sm font-bold text-white">SkillOrbit</p>
              <p className="mt-0.5 text-[11px] font-medium text-[#E7FF00]/90">
                Quick links
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close announcements"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#7CFF00]
                text-[#06352C]
                transition-all
                duration-200
                hover:bg-[#E7FF00]
              "
            >
              <X size={19} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-5">
            <nav className="space-y-1.5">
              {ANNOUNCEMENT_LINKS.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={onClose}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-[#35D0A5]/15
                    bg-white
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#063F2A]
                    shadow-[0_4px_12px_rgba(6,63,42,0.04)]
                    transition-all
                    duration-200
                    hover:border-[#7CFF00]
                    hover:bg-[#7CFF00]/15
                    hover:text-[#087A3E]
                  "
                >
                  <span>{item.label}</span>
                  <ChevronRight size={17} className="text-[#239F4A]" />
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
