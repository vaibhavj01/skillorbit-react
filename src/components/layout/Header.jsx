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
import { ASSETS } from "../../data/siteConfig";

/* =========================================================
   DESKTOP + MOBILE MAIN NAVIGATION
========================================================= */

const DESKTOP_NAV = [
  { label: "Home", to: "/" },
  { label: "All Courses", to: "/courses" },
  { label: "Roadmaps", to: "/roadmap" },
  { label: "About Us", to: "/about" },
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
  const [headerOpen, setHeaderOpen] = useState(false);

  /* =========================================================
     SCROLL EFFECT
  ========================================================= */

  useEffect(() => {
    setHeaderOpen(false);
  }, [pathname, search, hash]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setScrolled(currentY > 20);

      if (headerOpen || window.innerWidth < 1024) {
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
  }, [headerOpen]);

  /* =========================================================
     PREVENT BODY SCROLL WHEN DRAWER IS OPEN
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = headerOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [headerOpen]);

  const openHeaderDrawer = () => {
    setHeaderOpen(true);
  };

  const closeHeaderDrawer = () => {
    setHeaderOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP MAIN HEADER
      ====================================================== */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          hidden
          lg:block
          transition-all
          duration-300
          ease-out
          ${navHidden ? "-translate-y-full" : "translate-y-0"}
        `}
        style={{
          background: "var(--header-bg)",
          borderBottom: "1px solid rgba(77, 108, 93, 0.16)",
          boxShadow: scrolled ? "0 8px 24px rgba(2, 26, 20, 0.08)" : "none",
        }}
      >
        <div
          className="
            mx-auto
            flex
            h-[72px]
            max-w-site
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
              width={155}
              height={40}
              fetchPriority="high"
              decoding="async"
              className="
                h-auto
                w-[138px]
                object-contain
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
                        text-[14px]
                        font-semibold
                        xl:px-2.5
                        xl:text-[15px]
                        2xl:px-3
                        2xl:text-[15px]
                        transition-all
                        duration-200
                        ${
                          active
                            ? "bg-[var(--color-emerald)] text-brand-lime"
                            : "text-[var(--header-ink)] hover:text-[var(--green-chip)]"
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
                      <div className="overflow-hidden rounded-xl border border-dark-border bg-[var(--color-bg-emerald)] py-2 shadow-card">
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
                                  ? "bg-[var(--color-emerald)] text-brand-lime"
                                  : "text-ink-inverse hover:bg-white/5 hover:text-brand-lime"
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
                    text-[14px]
                    font-semibold
                    xl:px-2.5
                    xl:text-[15px]
                    2xl:px-3
                    2xl:text-[15px]
                    transition-all
                    duration-200
                    ${
                        active
                          ? "bg-[var(--color-emerald)] text-brand-lime"
                          : "text-[var(--header-ink)] hover:text-[var(--green-chip)]"
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
          border-[rgba(77,108,93,0.16)]

          bg-[var(--header-bg)]

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
            text-[var(--header-ink)]
            transition-all
            duration-200
            hover:bg-black/5
            hover:text-[var(--green-chip)]
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
            width={125}
            height={32}
            fetchPriority="high"
            decoding="async"
            className="
              h-auto
              w-[108px]
              object-contain
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

            bg-dark/70

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

            bg-[var(--color-bg-dark)]

            shadow-card

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

              bg-[var(--bg-tertiary)]

              px-5
            "
          >
            {/* Title */}

            <div>
              <p
                className="
                  text-base
                  font-bold
                  text-brand-lime
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

                text-brand-lime
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
                            ? "bg-[var(--color-emerald)] text-brand-lime"
                            : "text-ink-inverse hover:bg-white/5 hover:text-brand-lime"
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        size={17}
                        strokeWidth={2.5}
                        className="shrink-0 text-brand-lime transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>

                    {item.children?.length ? (
                      <div className="mb-2 ml-3 mt-1 space-y-1 border-l border-dark-border pl-3">
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
                              text-[15px]
                              font-semibold
                              ${
                                pathname === child.to
                                  ? "bg-[var(--color-emerald)] text-brand-lime"
                                  : "text-ink-dim hover:bg-white/5 hover:text-brand-lime"
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
              border-dark-border

              bg-[var(--color-bg-emerald)]

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