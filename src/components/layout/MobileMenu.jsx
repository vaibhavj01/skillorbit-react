import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";

import Button from "../common/Button";
import HeaderSearch from "./HeaderSearch";
import { NAV_LINKS, ASSETS } from "../../data/siteConfig";

export default function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`
        fixed
        inset-0
        z-[70]
        md:hidden
        ${
          open
            ? "pointer-events-auto"
            : "pointer-events-none"
        }
      `}
      aria-hidden={!open}
    >
      {/* ================= OVERLAY ================= */}

      <div
        onClick={onClose}
        className="
          absolute
          inset-0
          bg-black/60
          backdrop-blur-sm
          transition-opacity
          duration-300
        "
        style={{
          opacity: open ? 1 : 0,
        }}
      />

      {/* ================= DRAWER ================= */}

      <div
        className="
          absolute
          right-0
          top-0
          flex
          h-full
          w-[88vw]
          max-w-[390px]
          flex-col
          bg-[#050505]
          shadow-2xl
          transition-transform
          duration-300
        "
        style={{
          transform: open
            ? "translateX(0)"
            : "translateX(100%)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* ================= DRAWER HEADER ================= */}

        <div
          className="
            flex
            h-16
            shrink-0
            items-center
            justify-between
            border-b
            border-white/10
            px-5
          "
        >
          <img
            src={ASSETS.logo}
            alt="SkillOrbit Academy"
            className="w-[125px]"
          />

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              text-white
              transition-colors
              hover:bg-white/10
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* ================= SEARCH ================= */}

        <div className="border-b border-white/10 p-5">
          <HeaderSearch variant="mobile" />
        </div>

        {/* ================= NAVIGATION ================= */}

        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      transition-all

                      ${
                        isActive
                          ? "bg-[#FF6B00] text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }
                    `
                  }
                >
                  <span>{link.label}</span>

                  <ChevronRight size={17} />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ================= CTA ================= */}

        <div
          className="
            shrink-0
            border-t
            border-white/10
            p-5
          "
        >
          <Button
            to="/contact"
            variant="primary"
            size="md"
            className="
              w-full
              rounded-xl
              bg-[#FF6B00]
              font-bold
              text-white
              hover:bg-[#FF7A1A]
            "
            onClick={onClose}
          >
            Request Callback
          </Button>
        </div>
      </div>
    </div>
  );
}