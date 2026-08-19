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
import AnnouncementBar, { ANNOUNCEMENT_LINKS } from "./AnnouncementBar";
import { ASSETS } from "../../data/siteConfig";
import { CORPORATE_PROGRAMS } from "../../data/corporate";

/* =========================================================
   DESKTOP + MOBILE MAIN NAVIGATION
========================================================= */

const DESKTOP_NAV = [
  { label: "Home", to: "/" },
  { label: "All Courses", to: "/courses" },
  { label: "About Us", to: "/about" },
  { label: "Placement", to: "/placements" },
  {
    label: "Corporate",
    to: "/corporate",
    children: [
      { label: "Corporate Training", to: "/corporate" },
      ...CORPORATE_PROGRAMS.map((program) => ({
        label: program.label,
        to: `/courses/${program.slug}`,
      })),
    ],
  },
  { label: "Teaching", to: "/about#teaching" },
  { label: "Contact Us", to: "/contact" },
];

function navPath(to = "") {
  return to.split("#")[0] || "/";
}

function navHash(to = "") {
  const index = to.indexOf("#");
  return index >= 0 ? to.slice(index) : "";
}

function isNavActive(item, pathname, search, hash) {
  const path = navPath(item.to);
  const itemHash = navHash(item.to);

  if (itemHash) {
    return pathname === path && hash === itemHash;
  }

  if (path === "/") return pathname === "/";
  if (path === "/about") return pathname === "/about" && hash !== "#teaching";
  if (path === "/courses") return pathname === "/courses" || pathname.startsWith("/courses/");
  if (path === "/placements") return pathname === "/placements";
  if (path === "/corporate") {
    return pathname === "/corporate" || item.children?.some((child) => pathname === child.to);
  }
  if (path === "/contact") return pathname === "/contact";

  return (
    pathname === item.to ||
    `${pathname}${search}` === item.to ||
    item.children?.some((child) => pathname === child.to)
  );
}

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

      if (announcementOpen || headerOpen || window.innerWidth < 1024) {
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
     OPEN MAIN NAV DRAWER
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
          lg:block
          transition-all
          duration-300
          ease-out
          ${navHidden ? "-translate-y-[calc(100%+2.5rem)]" : "translate-y-0"}
        `}
        style={{
          background: scrolled
            ? "rgba(7,19,19,0.94)"
            : "rgba(7,19,19,0.78)",

          backdropFilter: "blur(16px)",

          WebkitBackdropFilter:
            "blur(16px)",

          borderBottom:
            "1px solid rgba(124,255,0,0.18)",

          boxShadow: scrolled
            ? "0 8px 30px rgba(0,0,0,0.35)"
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
                w-[138px]
                object-contain
                brightness-0
                invert
                drop-shadow-[0_0_10px_rgba(124,255,0,0.35)]
                xl:w-[155px]
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
              const active = isNavActive(item, pathname, search, hash);

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
                        px-2
                        py-3
                        text-[12px]
                        font-semibold
                        xl:px-2.5
                        xl:text-[13px]
                        2xl:px-3
                        2xl:text-[14px]
                        transition-all
                        duration-200
                        ${
                          active
                            ? "bg-[#7CFF00]/15 text-[#7CFF00]"
                            : "text-white hover:bg-[#7CFF00]/10 hover:text-[#7CFF00]"
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
                      <div className="overflow-hidden rounded-xl border border-[#7CFF00]/20 bg-[#0d1c16] py-2 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
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
                                  ? "bg-[#7CFF00]/15 text-[#7CFF00]"
                                  : "text-white hover:bg-[#7CFF00]/10 hover:text-[#7CFF00]"
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
                    px-2
                    py-3
                    text-[12px]
                    font-semibold
                    xl:px-2.5
                    xl:text-[13px]
                    2xl:px-3
                    2xl:text-[14px]
                    transition-all
                    duration-200
                    ${
                      active
                        ? "bg-[#7CFF00]/15 text-[#7CFF00]"
                        : "text-white hover:bg-[#7CFF00]/10 hover:text-[#7CFF00]"
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

          <div className="hidden 2xl:block">
            <HeaderSearch />
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}

          <Button
            opensDemo
            variant="primary"
            size="sm"
            className="
              shrink-0
              rounded-xl
              px-4
              font-bold
              xl:px-5
            "
          >
            Book Free Demo
          </Button>
        </div>
      </header>

      {/* =====================================================
          MOBILE HEADER

          LEFT   = Main navigation
          CENTER = SkillOrbit Logo
          RIGHT  = Book Free Demo
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
          border-[#7CFF00]/20

          bg-[#071313]/92

          px-3

          shadow-sm

          backdrop-blur-xl

          transition-transform
          duration-300
          ease-out

          lg:hidden
        `}
      >
        {/* =================================================
            LEFT HAMBURGER
            Opens main navigation
        ================================================== */}

        <button
          type="button"
          aria-label="Open main navigation"
          onClick={openHeaderDrawer}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            text-[#7CFF00]
            transition-all
            duration-200
            hover:bg-[#7CFF00]/10
            active:scale-95
          "
        >
          <Menu
            size={24}
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
              w-[108px]
              object-contain
              brightness-0
              invert
              drop-shadow-[0_0_8px_rgba(124,255,0,0.35)]
              min-[380px]:w-[125px]
            "
          />
        </Link>

        {/* =================================================
            RIGHT CTA
        ================================================== */}

        <Button
          opensDemo
          variant="primary"
          size="sm"
          className="relative z-10 h-11 min-h-11 shrink-0 rounded-lg px-3 text-xs font-bold min-[380px]:px-3.5 min-[380px]:text-sm"
        >
          <span className="min-[380px]:hidden">Demo</span>
          <span className="hidden min-[380px]:inline">Free Demo</span>
        </Button>
      </header>

      {/* =====================================================
          RIGHT SIDE MAIN NAVIGATION DRAWER — MOBILE

          Contains the main site navigation
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[80]
          lg:hidden

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

            bg-[#071313]/70

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
            left-0
            top-0
            bottom-0

            flex
            w-[min(92vw,340px)]

            flex-col

            overflow-hidden

            bg-[#0d1c16]

            shadow-[12px_0_40px_rgba(0,0,0,0.45)]

            transition-transform
            duration-300
            ease-out
          "
          style={{
            transform: headerOpen
              ? "translateX(0)"
              : "translateX(-100%)",
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
              from-[#063F2A]
              via-[#087A3E]
              to-[#239F4A]

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
                h-11
                w-11
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

                text-[#7CFF00]
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
                const active = isNavActive(item, pathname, search, hash);

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
                            ? "bg-[#7CFF00]/15 text-[#7CFF00]"
                            : "text-white hover:bg-[#7CFF00]/10 hover:text-[#7CFF00]"
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        size={17}
                        strokeWidth={2.5}
                        className="shrink-0 text-[#7CFF00] transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>

                    {item.children?.length ? (
                      <div className="mb-2 ml-3 mt-1 space-y-1 border-l border-[#7CFF00]/25 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={closeHeaderDrawer}
                            className={`
                              block
                              min-h-11
                              rounded-lg
                              px-3
                              py-3
                              text-[13px]
                              font-semibold
                              ${
                                pathname === child.to
                                  ? "bg-[#7CFF00]/15 text-[#7CFF00]"
                                  : "text-[#C5D5CE] hover:bg-[#7CFF00]/10 hover:text-[#7CFF00]"
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

            <p className="mb-2 mt-6 px-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7CFF00]">
              More
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {ANNOUNCEMENT_LINKS.filter((link) => !["Corporate", "Contact Us"].includes(link.label)).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeHeaderDrawer}
                  className="rounded-lg px-3 py-3 text-[13px] font-semibold text-[#C5D5CE] hover:bg-[#7CFF00]/10 hover:text-[#7CFF00]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* =================================================
              BOTTOM CTA
          ================================================== */}

          <div
            className="
              shrink-0

              border-t
              border-[#7CFF00]/15

              bg-[#071313]

              p-4
              pb-[max(1rem,env(safe-area-inset-bottom))]
            "
          >
            <Button
              opensDemo
              variant="primary"
              size="md"
              onClick={closeHeaderDrawer}
              className="w-full rounded-xl font-bold"
            >
              Book Free Demo
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}