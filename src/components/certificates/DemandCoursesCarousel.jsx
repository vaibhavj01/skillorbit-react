import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Users } from "lucide-react";
import Container from "../common/Container";
import { courses, getCourseCover } from "../../data/courses";

const FEATURED_IDS = [
  "java-fullstack",
  "python-fullstack",
  "mern-stack",
  "selenium-automation",
  "data-analytics",
  "machine-learning",
  "cybersecurity",
  "aws",
];

function learnersFor(id) {
  let hash = 0;
  for (const char of id) hash = (hash * 33 + char.charCodeAt(0)) % 9000;
  return (1800 + hash).toLocaleString("en-IN");
}

export default function DemandCoursesCarousel() {
  const scroller = useRef(null);
  const [active, setActive] = useState(0);

  const featured = useMemo(
    () => FEATURED_IDS.map((id) => courses.find((course) => course.id === id)).filter(Boolean),
    [],
  );

  const scrollByCard = (direction) => {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector("[data-course-card]");
    const amount = (card?.offsetWidth || 320) + 24;
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
    setActive((current) => Math.min(featured.length - 1, Math.max(0, current + direction)));
  };

  return (
    <section className="relative overflow-hidden bg-[#071313] py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(35,159,74,0.16), transparent 42%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <h2 className="mb-10 text-center font-roboto text-3xl font-black text-white md:text-4xl">
          Explore Other <span className="text-[#7CFF00]">Demanding</span> Courses
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-[#7CFF00] text-[#071313] shadow-[0_0_24px_rgba(124,255,0,0.35)] transition hover:bg-[#E7FF00] md:flex lg:-translate-x-6"
            aria-label="Previous courses"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full bg-[#7CFF00] text-[#071313] shadow-[0_0_24px_rgba(124,255,0,0.35)] transition hover:bg-[#E7FF00] md:flex lg:translate-x-6"
            aria-label="Next courses"
          >
            <ChevronRight size={22} />
          </button>

          <div
            ref={scroller}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {featured.map((course, index) => (
              <article
                key={course.id}
                data-course-card
                className={`
                  group relative w-[min(86vw,340px)] shrink-0 snap-center overflow-hidden rounded-2xl
                  border bg-[#0c1812] transition-all duration-300
                  ${index === active
                    ? "border-[#7CFF00] shadow-[0_0_32px_rgba(124,255,0,0.22)]"
                    : "border-white/20 hover:border-[#7CFF00] hover:shadow-[0_0_28px_rgba(124,255,0,0.18)]"}
                `}
              >
                <div className="relative h-[230px] overflow-hidden">
                  <img
                    src={getCourseCover(course)}
                    alt=""
                    className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071313] via-[#071313]/55 to-black/20" />
                  <div className="absolute inset-x-0 bottom-0 px-5 pb-4 text-center">
                    <h3 className="font-roboto text-2xl font-black leading-tight text-white">
                      {course.name.replace(" Development", "")}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-white/80">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-1">
                  <Link
                    to={`/courses/${course.slug || course.id}`}
                    className="mx-auto flex h-10 w-full max-w-[210px] items-center justify-center gap-2 rounded-full bg-white text-sm font-extrabold text-[#071313] transition hover:bg-[#7CFF00]"
                  >
                    Explore Course <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="flex items-center justify-between border-t border-white/15 px-4 py-3">
                  <p className="flex items-center gap-2 text-[12px] font-semibold text-white">
                    <Users size={15} className="text-[#7CFF00]" />
                    <span className="text-[#7CFF00]">{learnersFor(course.id)}</span>
                    <span className="text-white/80">Learning Today</span>
                  </p>
                  <Link
                    to="/contact"
                    className="rounded-full bg-[#7CFF00] px-3.5 py-1.5 text-[11px] font-extrabold text-[#071313] transition hover:bg-[#E7FF00]"
                  >
                    Enroll Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
