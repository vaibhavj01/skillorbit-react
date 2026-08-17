import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";

import { courses } from "../../data/courses";
import useClickOutside from "../../hooks/useClickOutside";

export default function HeaderSearch({ variant = "desktop" }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const ref = useRef(null);

  const isMobile = variant === "mobile";

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
    query.trim().length > 1
      ? courses
          .filter((course) => {
            const searchText = query.toLowerCase();

            return (
              course.name?.toLowerCase().includes(searchText) ||
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
          border-[#35D0A5]/30
          bg-white

          transition-all
          duration-300

          ${
            isMobile
              ? `
                h-10
                w-full
                rounded-lg
                px-3
              `
              : `
                h-10
                w-40
                px-3
                focus-within:w-64
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
            text-[#239F4A]
            transition-colors
            duration-200
            group-focus-within:text-[#35D0A5]
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
            text-[#071313]
            outline-none

            placeholder:text-[#55727C]

            ${
              isMobile
                ? "ml-1.5 text-sm"
                : "ml-2 text-sm"
            }
          `}
        />

        {/* Clear Button */}

        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={closeSearch}
            className="
              ml-1
              flex
              shrink-0
              items-center
              justify-center
              rounded-full
              text-[#55727C]
              transition-colors
              duration-200
              hover:text-[#239F4A]
            "
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
            border-[#35D0A5]/20
            bg-white
            shadow-[0_15px_40px_rgba(7,19,19,0.15)]

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
                  text-[#55727C]
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
                      border-[#35D0A5]/10
                      px-3
                      py-3
                      transition-all
                      duration-200
                      last:border-b-0
                      hover:bg-[#7CFF00]/10
                    "
                  >
                    {/* Course Name */}

                    <span
                      className={`
                        font-bold
                        text-[#071313]
                        transition-colors
                        group-hover:text-[#239F4A]

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
                        text-[#55727C]

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