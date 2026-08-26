import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";

export const ANNOUNCEMENT_LINKS = [
  { label: "Certificate", to: "/certificates" },
  { label: "Webinar", to: "/webinar" },
  { label: "Corporate", to: "/corporate" },
  { label: "CSR", to: "/csr" },
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
          lg:block
          transition-transform
          duration-300
          ease-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
        style={{
          background:
            "linear-gradient(90deg, var(--brand-deep) 0%, var(--brand-dark) 28%, var(--brand-green) 55%, var(--brand-green) 78%, var(--brand-green) 100%)",
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
            via-brand-primary
            to-transparent
          "
        />

        <div className="mx-auto flex h-full max-w-site items-center justify-end px-5 md:px-8">
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

                  hover:bg-brand-green
                  hover:text-[var(--cta-ink)]
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
          lg:hidden
          ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        <div
          onClick={onClose}
          className="
            absolute
            inset-0
            bg-[var(--brand-deep)]/50
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
            bg-surface
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
                "linear-gradient(90deg, var(--brand-dark) 0%, var(--brand-green) 50%, var(--brand-green) 100%)",
            }}
          >
            <div>
              <p className="text-sm font-bold text-white">SkillOrbit</p>
              <p className="mt-0.5 text-[11px] font-medium text-brand-primary/90">
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
                bg-brand-primary
                text-[var(--cta-ink)]
                transition-all
                duration-200
                hover:bg-brand-green
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
                    border-brand-primary/20
                    bg-surface-bg
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-none
                    transition-all
                    duration-200
                    hover:border-brand-green
                    hover:bg-brand-green/15
                    hover:text-brand-green
                  "
                >
                  <span>{item.label}</span>
                  <ChevronRight size={17} className="text-brand-primary" />
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
