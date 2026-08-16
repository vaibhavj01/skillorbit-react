import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";

const ANNOUNCEMENT_LINKS = [
  {
    label: "Certificate",
    to: "/certificates",
  },
  {
    label: "Webinar",
    to: "/webinar",
  },
  {
    label: "Corporate",
    to: "/corporate",
  },
  {
    label: "CSR",
    to: "/csr",
  },
  {
    label: "Blogs",
    to: "/blog",
  },
  {
    label: "Students Reviews",
    to: "/#testimonials",
  },
  {
    label: "Referral",
    to: "/referral",
  },
  {
    label: "Free Courses",
    to: "/courses",
  },
  {
    label: "Feedback",
    to: "/feedback",
  },
  {
    label: "Careers",
    to: "/careers",
  },
  {
    label: "Contact Us",
    to: "/contact",
  },
];

export default function AnnouncementBar({
  mobileOpen = false,
  onClose = () => {},
}) {
  return (
    <>
      {/* ================= DESKTOP ANNOUNCEMENT BAR ================= */}

      <div className="hidden h-9 bg-[#071313] md:block">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-end px-5 md:px-8">
          <nav className="flex items-center text-[12px] font-semibold">
            {ANNOUNCEMENT_LINKS.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <Link
                  to={item.to}
                  className="
                    px-2
                    text-[#EFFFFB]
                    transition-colors
                    hover:text-[#7CFF00]
                  "
                >
                  {item.label}
                </Link>

                {index !== ANNOUNCEMENT_LINKS.length - 1 && (
                  <span className="text-[#8BE4FF]/60">|</span>
                )}
              </div>
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
          ${
            mobileOpen
              ? "pointer-events-auto"
              : "pointer-events-none"
          }
        `}
      >
        {/* Overlay */}

        <div
          onClick={onClose}
          className="
            absolute
            inset-0
            bg-[#071313]/45
            backdrop-blur-sm
            transition-opacity
            duration-300
          "
          style={{
            opacity: mobileOpen ? 1 : 0,
          }}
        />

        {/* Drawer */}

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
            bg-white
            shadow-2xl
            transition-transform
            duration-300
          "
          style={{
            transform: mobileOpen
              ? "translateX(0)"
              : "translateX(-100%)",
          }}
        >
          {/* Drawer Header */}

          <div
            className="
              flex
              h-16
              shrink-0
              items-center
              justify-between
              border-b
              border-[#35D0A5]/20
              bg-gradient-to-r
              from-[#35D0A5]
              via-[#29C3BE]
              to-[#1FB8D2]
              px-5
            "
          >
            <div>
              <p className="text-sm font-bold text-white">
                SkillOrbit
              </p>

              <p className="text-[11px] font-medium text-white/80">
                Explore More
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
                bg-white/20
                text-white
                backdrop-blur-sm
              "
            >
              <X size={19} />
            </button>
          </div>

          {/* Quick Links */}

          <div className="flex-1 overflow-y-auto px-4 py-5">
            <p
              className="
                mb-3
                px-2
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#239F4A]
              "
            >
              Quick Links
            </p>

            <nav className="space-y-1">
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
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#071313]
                    transition-all
                    duration-200
                    hover:bg-[#7CFF00]/10
                    hover:text-[#239F4A]
                  "
                >
                  <span>{item.label}</span>

                  <ChevronRight
                    size={17}
                    className="text-[#239F4A]"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}