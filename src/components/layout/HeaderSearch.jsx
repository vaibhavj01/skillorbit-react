import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";

import useClickOutside from "../../hooks/useClickOutside";

export default function HeaderSearch({ variant = "desktop" }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [catalog, setCatalog] = useState(null);

  const ref = useRef(null);

  const isMobile = variant === "mobile";

  useEffect(() => {
    if (!open && query.trim().length < 2) return undefined;
    let cancelled = false;
    import("../../data/courses").then((mod) => {
      if (!cancelled) setCatalog(mod.courses);
    });
    return () => {
      cancelled = true;
    };
  }, [open, query]);

  useClickOutside(
    ref,
    () => {
      setOpen(false);
    },
    open
  );

  /* =========================================================
     SEARCH RESULTS
  ========================================================= */

  const results =
    catalog && query.trim().length > 1
      ? catalog
          .filter((course) => {
            const searchText = query.toLowerCase();

            return (
              course.name?.toLowerCase().includes(searchText) ||
              course.shortTitle?.toLowerCase().includes(searchText) ||
              course.category?.toLowerCase().includes(searchText) ||
              (course.technologies || []).some((tech) =>
                tech.toLowerCase().includes(searchText)
              )
            );
          })
          .slice(0, 6)
      : [];

  /* =========================================================
     CLOSE SEARCH
  ========================================================= */

  const closeSearch = () => {
    setOpen(false);
    setQuery("");
  };

  /* =========================================================
     HANDLE SEARCH
  ========================================================= */

  const handleChange = (e) => {
    const value = e.target.value;

    setQuery(value);

    if (value.trim().length > 1) {
      setOpen(true);
    }
  };

  return (
    <div
      ref={ref}
      className={`
        relative
        ${isMobile ? "w-full" : "w-auto"}
      `}
    >
      {/* =====================================================
          SEARCH INPUT
      ====================================================== */}

      <div
        className={`
          group
          flex
          items-center
          rounded-xl
          border
          transition-all
          duration-300

          ${
            isMobile
              ? `
                h-10
                w-full
                rounded-lg
                border-dark-border
                bg-white/5
                px-3
              `
              : `
                h-10
                w-40
                border-[rgba(77,108,93,0.22)]
                bg-white
                px-3
                focus-within:w-64
                focus-within:border-[var(--green-chip)]
              `
          }
        `}
      >
        {/* Search Icon */}

        <Search
          size={isMobile ? 13 : 17}
          strokeWidth={2}
          className="
            shrink-0
            text-brand-lime
            transition-colors
            duration-200
            group-focus-within:text-brand-lime
          "
        />

        {/* Input */}

        <input
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={() => {
            if (query.trim().length > 1) {
              setOpen(true);
            }
          }}
          placeholder="Search courses..."
          aria-label="Search courses"
          className={`
            min-w-0
            flex-1
            bg-transparent
            outline-none

            ${
              isMobile
                ? "ml-1.5 text-base text-ink-inverse placeholder:text-ink-dim sm:text-sm"
                : "ml-2 text-sm text-[var(--header-ink)] placeholder:text-[var(--text-muted)]"
            }
          `}
        />

        {/* Clear Button */}

        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={closeSearch}
            className={`
              ml-1
              flex
              shrink-0
              items-center
              justify-center
              rounded-full
              ${isMobile ? "text-ink-dim" : "text-[var(--text-muted)]"}
              transition-colors
              duration-200
              hover:text-brand-lime
            `}
          >
            <X size={isMobile ? 12 : 14} />
          </button>
        )}
      </div>

      {/* =====================================================
          SEARCH RESULTS
      ====================================================== */}

      {open && query.trim().length > 1 && (
        <div
          className={`
            absolute
            z-[120]
            mt-2
            overflow-hidden
            rounded-xl
            border
            border-brand-primary/20
            bg-surface
            shadow-[0_15px_40px_rgba(0,0,0,0.45)]

            ${
              isMobile
                ? `
                  left-0
                  right-0
                  w-full
                `
                : `
                  right-0
                  w-80
                  max-w-[90vw]
                `
            }
          `}
        >
          {/* =================================================
              NO RESULTS
          ================================================== */}

          {results.length === 0 ? (
            <div className="px-3 py-4">
              <p
                className={`
                  text-dark-muted
                  ${
                    isMobile
                      ? "text-[9px]"
                      : "text-sm"
                  }
                `}
              >
                No courses match "{query}".
              </p>
            </div>
          ) : (
            /* =================================================
               RESULTS LIST
            ================================================== */

            <ul
              className="
                max-h-72
                overflow-y-auto
              "
            >
              {results.map((course) => (
                <li key={course.id}>
                  <Link
                    to={`/courses/${course.slug || course.id}`}
                    onClick={closeSearch}
                    className="
                      group
                      flex
                      flex-col
                      gap-0.5
                      border-b
                      border-[var(--brand-green)]/10
                      px-3
                      py-3
                      transition-all
                      duration-200
                      last:border-b-0
                      hover:bg-brand-green/10
                    "
                  >
                    {/* Course Name */}

                    <span
                      className={`
                        font-bold
                        text-white
                        transition-colors
                        group-hover:text-brand-lime

                        ${
                          isMobile
                            ? "text-[9px]"
                            : "text-sm"
                        }
                      `}
                    >
                      {course.name}
                    </span>

                    {/* Course Details */}

                    <span
                      className={`
                        text-[var(--text-muted)]

                        ${
                          isMobile
                            ? "text-[8px]"
                            : "text-xs"
                        }
                      `}
                    >
                      {course.duration}
                      {" · "}
                      {course.level}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}