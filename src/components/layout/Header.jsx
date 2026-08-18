import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  ArrowRight,
  ChevronDown,
  X,
} from "lucide-react";

import Button from "../common/Button";
import HeaderSearch from "./HeaderSearch";
import AnnouncementBar from "./AnnouncementBar";
import { ASSETS } from "../../data/siteConfig";
import { CORPORATE_PROGRAMS } from "../../data/corporate";

/* =========================================================
   DESKTOP + MOBILE MAIN NAVIGATION
========================================================= */

const DESKTOP_NAV = [
  {
    label: "JOB ORIENTED COURSES",
    to: "/courses?category=fullstack",
  },
  {
    label: "IT COURSES",
    to: "/courses",
  },
  {
    label: "DESIGNING COURSES",
    to: "/courses?category=web",
  },
  {
    label: "PLACEMENT",
    to: "/placements",
  },
  {
    label: "CORPORATE COURSES",
    to: "/corporate",
    children: [
      { label: "Corporate Training", to: "/corporate" },
      ...CORPORATE_PROGRAMS.map((program) => ({
        label: program.label,
        to: `/courses/${program.slug}`,
      })),
    ],
  },
];

export default function Header() {
  const { pathname, search, hash } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  /* Mobile drawers */
  const [announcementOpen, setAnnouncementOpen] =
    useState(false);

  const [headerOpen, setHeaderOpen] =
    useState(false);

  /* =========================================================
     SCROLL EFFECT
  ========================================================= */

  useEffect(() => {
    setHeaderOpen(false);
    setAnnouncementOpen(false);
  }, [pathname, search, hash]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setScrolled(currentY > 20);

      if (announcementOpen || headerOpen) {
        setNavHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY < 48) {
        setNavHidden(false);
      } else if (delta > 6) {
        setNavHidden(true);
      } else if (delta < -6) {
        setNavHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [announcementOpen, headerOpen]);

  /* =========================================================
     PREVENT BODY SCROLL WHEN DRAWER IS OPEN
  ========================================================= */

  useEffect(() => {
    const drawerOpen =
      announcementOpen || headerOpen;

    document.body.style.overflow = drawerOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [
    announcementOpen,
    headerOpen,
  ]);

  /* =========================================================
     OPEN LEFT ANNOUNCEMENT DRAWER
  ========================================================= */

  const openAnnouncement = () => {
    setHeaderOpen(false);
    setAnnouncementOpen(true);
  };

  /* =========================================================
     OPEN RIGHT MAIN NAV DRAWER
  ========================================================= */

  const openHeaderDrawer = () => {
    setAnnouncementOpen(false);
    setHeaderOpen(true);
  };

  /* =========================================================
     CLOSE RIGHT DRAWER
  ========================================================= */

  const closeHeaderDrawer = () => {
    setHeaderOpen(false);
  };

  return (
    <>
      {/* =====================================================
          ANNOUNCEMENT BAR

          DESKTOP:
          Top announcement links.

          MOBILE:
          Opens from LEFT when hamburger is clicked.
      ====================================================== */}

      <AnnouncementBar
        hidden={navHidden}
        mobileOpen={announcementOpen}
        onClose={() =>
          setAnnouncementOpen(false)
        }
      />

      {/* =====================================================
          DESKTOP MAIN HEADER
      ====================================================== */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-10
          z-50
          hidden
          md:block
          transition-all
          duration-300
          ease-out
          ${navHidden ? "-translate-y-[calc(100%+2.5rem)]" : "translate-y-0"}
        `}
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.94)"
            : "rgba(255,255,255,0.78)",

          backdropFilter: "blur(16px)",

          WebkitBackdropFilter:
            "blur(16px)",

          borderBottom:
            "1px solid rgba(35,159,74,0.12)",

          boxShadow: scrolled
            ? "0 8px 30px rgba(7,19,19,0.08)"
            : "none",
        }}
      >
        <div
          className="
            mx-auto
            flex
            h-[72px]
            max-w-7xl
            items-center
            gap-5
            px-5
            md:px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            className="
              flex
              shrink-0
              items-center
            "
            aria-label="SkillOrbit Academy home"
          >
            <img
              src={ASSETS.logo}
              alt="SkillOrbit Academy"
              className="
                w-[155px]
                object-contain
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className=" 
              ml-auto
              flex
              items-center
              gap-0.5
            "
            aria-label="Primary navigation"
          >
            {DESKTOP_NAV.map((item) => {
              const current = `${pathname}${search}`;
              const active =
                pathname === item.to ||
                current === item.to ||
                item.children?.some((child) => pathname === child.to);

              if (item.children?.length) {
                return (
                  <div key={item.label} className="group relative">
                    <Link
                      to={item.to}
                      className={`
                        inline-flex
                        items-center
                        gap-1
                        whitespace-nowrap
                        rounded-lg
                        px-3
                        py-3
                        text-[14px]
                        font-semibold
                        transition-all
                        duration-200
                        ${
                          active
                            ? "bg-[#7CFF00]/15 text-[#239F4A]"
                            : "text-[#071313] hover:bg-[#7CFF00]/10 hover:text-[#239F4A]"
                        }
                      `}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </Link>
                    <div
                      className="
                        invisible
                        absolute
                        left-0
                        top-full
                        z-50
                        min-w-[220px]
                        origin-top
                        pt-1
                        opacity-0
                        transition
                        duration-150
                        group-hover:visible
                        group-hover:opacity-100
                        group-focus-within:visible
                        group-focus-within:opacity-100
                      "
                    >
                      <div className="overflow-hidden rounded-xl border border-[#35D0A5]/20 bg-white py-2 shadow-[0_16px_40px_rgba(7,19,19,0.12)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className={`
                              block
                              px-4
                              py-2.5
                              text-sm
                              font-semibold
                              transition
                              ${
                                pathname === child.to
                                  ? "bg-[#7CFF00]/15 text-[#239F4A]"
                                  : "text-[#071313] hover:bg-[#7CFF00]/10 hover:text-[#239F4A]"
                              }
                            `}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`
                    whitespace-nowrap
                    rounded-lg
                    px-3
                    py-3
                    text-[14px]
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      active
                        ? "bg-[#7CFF00]/15 text-[#239F4A]"
                        : "text-[#071313] hover:bg-[#7CFF00]/10 hover:text-[#239F4A]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP SEARCH

              IMPORTANT:
              Use default desktop variant here.
          ================================================== */}

          <div className="hidden xl:block">
            <HeaderSearch />
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}

          <Button
            to="/contact"
            variant="primary"
            size="sm"
            className="
              shrink-0
              rounded-xl

              bg-[#071313]
              px-5

              font-bold
              text-[#7CFF00]

              transition-all
              duration-300

              hover:bg-[#239F4A]
              hover:text-white

              hover:shadow-[0_8px_25px_rgba(35,159,74,0.25)]
            "
          >
            Book Free Demo
          </Button>
        </div>
      </header>

      {/* =====================================================
          MOBILE HEADER

          LEFT   = AnnouncementBar
          CENTER = SkillOrbit Logo
          RIGHT  = Main Header Navigation
      ====================================================== */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50

          flex
          h-14
          items-center
          justify-between

          border-b
          border-[#35D0A5]/20

          bg-white/90

          px-3

          shadow-sm

          backdrop-blur-xl

          transition-transform
          duration-300
          ease-out

          md:hidden

          ${navHidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        {/* =================================================
            LEFT HAMBURGER
            Opens AnnouncementBar
        ================================================== */}

        <button
          type="button"
          aria-label="Open announcements"
          onClick={openAnnouncement}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-xl

            text-[#239F4A]

            transition-all
            duration-200

            hover:bg-[#7CFF00]/10

            active:scale-95
          "
        >
          <Menu
            size={23}
            strokeWidth={2.5}
          />
        </button>

        {/* =================================================
            CENTER LOGO
        ================================================== */}

        <Link
          to="/"
          aria-label="SkillOrbit Academy home"
          className="
            absolute
            left-1/2
            -translate-x-1/2
          "
        >
          <img
            src={ASSETS.logo}
            alt="SkillOrbit Academy"
            className="
              w-[125px]
              object-contain
            "
          />
        </Link>

        {/* =================================================
            RIGHT ARROW
            Opens MAIN HEADER NAVIGATION
        ================================================== */}

        <button
          type="button"
          aria-label="Open main navigation"
          onClick={openHeaderDrawer}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-xl

            text-[#239F4A]

            transition-all
            duration-200

            hover:bg-[#7CFF00]/10

            active:scale-95
          "
        >
          <ArrowRight
            size={23}
            strokeWidth={2.5}
          />
        </button>
      </header>

      {/* =====================================================
          RIGHT SIDE MAIN NAVIGATION DRAWER — MOBILE

          Contains ONLY:

          JOB ORIENTED COURSES
          IT COURSES
          DESIGNING COURSES
          PLACEMENT
          CORPORATE COURSES
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[80]
          md:hidden

          ${
            headerOpen
              ? "pointer-events-auto"
              : "pointer-events-none"
          }
        `}
      >
        {/* =================================================
            BACKGROUND OVERLAY
        ================================================== */}

        <div
          onClick={closeHeaderDrawer}
          className="
            absolute
            inset-0

            bg-[#071313]/40

            backdrop-blur-[3px]

            transition-opacity
            duration-300
          "
          style={{
            opacity: headerOpen ? 1 : 0,
          }}
        />

        {/* =================================================
            RIGHT DRAWER
        ================================================== */}

        <aside
          className="
            absolute
            right-0
            top-0
            bottom-0

            flex
            w-[82%]
            max-w-[340px]
            min-w-[270px]

            flex-col

            overflow-hidden

            bg-white

            shadow-[-12px_0_40px_rgba(7,19,19,0.20)]

            transition-transform
            duration-300
            ease-out
          "
          style={{
            transform: headerOpen
              ? "translateX(0)"
              : "translateX(100%)",
          }}
        >
          {/* =================================================
              DRAWER HEADER
          ================================================== */}

          <div
            className="
              flex
              h-16
              shrink-0
              items-center
              justify-between

              bg-gradient-to-r
              from-[#35D0A5]
              via-[#29C3BE]
              to-[#1FB8D2]

              px-5
            "
          >
            {/* Title */}

            <div>
              <p
                className="
                  text-base
                  font-bold
                  text-white
                "
              >
                SkillOrbit
              </p>

              <p
                className="
                  mt-0.5
                  text-[11px]
                  font-medium
                  text-white/80
                "
              >
                Explore Courses
              </p>
            </div>

            {/* Close Button */}

            <button
              type="button"
              onClick={closeHeaderDrawer}
              aria-label="Close navigation"
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

                transition-all
                duration-200

                hover:bg-white/30

                active:scale-90
              "
            >
              <X
                size={19}
                strokeWidth={2.5}
              />
            </button>
          </div>

          {/* =================================================
              MAIN NAVIGATION
          ================================================== */}

          <nav
            className="
              flex-1
              overflow-y-auto

              px-4
              py-6
            "
            aria-label="Mobile main navigation"
          >
            {/* Section Label */}

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
              Main Navigation
            </p>

            <div className="mb-5">
              <HeaderSearch variant="mobile" />
            </div>

            {/* Navigation Items */}

            <div className="space-y-1.5">
              {DESKTOP_NAV.map((item) => {
                const current = `${pathname}${search}`;
                const active =
                  pathname === item.to ||
                  current === item.to ||
                  item.children?.some((child) => pathname === child.to);

                return (
                  <div key={item.label}>
                    <Link
                      to={item.to}
                      onClick={closeHeaderDrawer}
                      className={`
                        group
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-4
                        text-sm
                        font-bold
                        transition-all
                        duration-200
                        active:scale-[0.98]
                        ${
                          active
                            ? "bg-[#7CFF00]/15 text-[#239F4A]"
                            : "text-[#071313] hover:bg-[#7CFF00]/10 hover:text-[#239F4A]"
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        size={17}
                        strokeWidth={2.5}
                        className="shrink-0 text-[#239F4A] transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>

                    {item.children?.length ? (
                      <div className="mb-2 ml-3 mt-1 space-y-1 border-l border-[#35D0A5]/25 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={closeHeaderDrawer}
                            className={`
                              block
                              rounded-lg
                              px-3
                              py-2
                              text-[13px]
                              font-semibold
                              ${
                                pathname === child.to
                                  ? "bg-[#7CFF00]/15 text-[#239F4A]"
                                  : "text-[#365F6E] hover:bg-[#7CFF00]/10 hover:text-[#239F4A]"
                              }
                            `}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* =================================================
              BOTTOM CTA
          ================================================== */}

          <div
            className="
              shrink-0

              border-t
              border-[#35D0A5]/15

              bg-[#F5FFFB]

              p-4
            "
          >
            <Link
              to="/contact"
              onClick={closeHeaderDrawer}
              className="
                flex
                w-full
                items-center
                justify-center

                rounded-xl

                bg-[#071313]

                px-5
                py-3.5

                text-sm
                font-bold

                text-[#7CFF00]

                transition-all
                duration-200

                hover:bg-[#239F4A]
                hover:text-white
              "
            >
              Book Free Demo
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}