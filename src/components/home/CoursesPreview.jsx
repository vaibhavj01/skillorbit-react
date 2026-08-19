import { useMemo, useState } from "react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import CourseGrid from "../courses/CourseGrid";
import CourseFilter from "../courses/CourseFilter";

import { courses, orderCourses } from "../../data/courses";
import OrbitBackdrop from "../common/OrbitBackdrop";

export default function CoursesPreview() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  /*
   * Filter courses
   */
  const filteredCourses = useMemo(() => {
    const search = query.trim().toLowerCase();

    return orderCourses(
      courses.filter((course) => {
        const matchesCategory =
          category === "all" || course.category === category;

        const matchesSearch =
          !search ||
          course.name?.toLowerCase().includes(search) ||
          course.shortTitle?.toLowerCase().includes(search) ||
          course.title?.toLowerCase().includes(search) ||
          (course.technologies || []).some((technology) =>
            technology.toLowerCase().includes(search)
          );

        return matchesCategory && matchesSearch;
      }),
    );
  }, [category, query]);

  /*
   * Show only first 8 courses on homepage
   */
  const featured = filteredCourses.slice(0, 8);

  return (
    <section
      id="courses"
      className="
        relative
        overflow-hidden
        bg-[#071313]
        py-12
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      <OrbitBackdrop variant="night" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <Container className="relative z-10">

        <Reveal>
          <div className="text-center">
            <SectionHeading
              eyebrow="Programs"
              title="Learn Skills That Companies Need"
              subtitle="Industry-focused technology programs for students, freshers, working professionals and career switchers. Click any course to view full details."
            />
          </div>
        </Reveal>

        {/* =================================================
            SEARCH
        ================================================== */}

        <Reveal delay={0.05}>
          <div className="mt-8 flex justify-center sm:mt-10">

            <div className="relative w-full max-w-[560px]">

              {/* Search Icon */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-[#64748B]
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </div>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by course or technology..."
                className="
                  h-[60px]
                  w-full
                  rounded-2xl
                  border
                  border-[#7CFF00]/25
                  bg-[#0d1c16]
                  pl-14
                  pr-5
                  text-[15px]
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[#8AA0A8]

                  focus:border-[#7CFF00]
                  focus:ring-4
                  focus:ring-[#7CFF00]/15
                "
              />

            </div>

          </div>
        </Reveal>

        {/* =================================================
            CATEGORY FILTER
        ================================================== */}

        <Reveal delay={0.08} className="hidden sm:block">
          <div className="mt-8 sm:mt-10">

            <CourseFilter
              active={category}
              onChange={setCategory}
            />

          </div>
        </Reveal>

        {/* =================================================
            COURSE GRID
        ================================================== */}

        <Reveal delay={0.12}>
          <div className="mt-10 sm:mt-12 md:mt-14">

            {featured.length > 0 ? (
              <CourseGrid courses={featured} />
            ) : (
              <div
                className="
                  rounded-2xl
                  border
                  border-[#7CFF00]/20
                  bg-[#0d1c16]
                  px-6
                  py-16
                  text-center
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  No courses found
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[#64748B]
                  "
                >
                  Try another course name, technology or category.
                </p>
              </div>
            )}

          </div>
        </Reveal>

        {/* =================================================
            VIEW ALL
        ================================================== */}

        <Reveal
          delay={0.15}
          className="
            mt-10
            text-center
            sm:mt-12
            md:mt-14
          "
        >
          <Button
            to="/courses"
            variant="outline"
            size="md"
            className="
              border-[#7CFF00]/40
              text-[#7CFF00]

              hover:border-[#7CFF00]
              hover:bg-[#7CFF00]
              hover:text-[#071313]
            "
          >
            View All Courses
          </Button>
        </Reveal>

      </Container>
    </section>
  );
}