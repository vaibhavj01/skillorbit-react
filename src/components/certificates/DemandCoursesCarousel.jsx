import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Users } from "lucide-react";
import Container from "../common/Container";
import { courses, getCourseCover } from "../../data/courses";
import { useDemoModal } from "../../context/DemoModalContext";

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
  const { openDemo } = useDemoModal();

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
    <section className="relative overflow-hidden bg-surface-bg so-section-lg">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(0,184,61,0.16), transparent 42%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <h2 className="mb-8 text-center font-roboto text-[1.5rem] font-black text-ink sm:mb-10 md:text-4xl">
          Explore Other <span className="text-brand-primary">Demanding</span> Courses
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-primary text-[var(--cta-ink)] shadow-[0_0_24px_rgba(0,214,57,0.35)] transition hover:bg-brand-green md:flex lg:-translate-x-6"
            aria-label="Previous courses"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full bg-brand-primary text-[var(--cta-ink)] shadow-[0_0_24px_rgba(0,214,57,0.35)] transition hover:bg-brand-green md:flex lg:translate-x-6"
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
                    ? "border-brand-primary shadow-[0_0_32px_rgba(0,214,57,0.22)]"
                    : "border-white/20 hover:border-brand-green hover:shadow-[0_0_28px_rgba(0,214,57,0.18)]"}
                `}
              >
                <div className="relative h-[clamp(11rem,38vw,14.5rem)] overflow-hidden">
                  <img
                    src={getCourseCover(course)}
                    alt=""
                    className="h-full w-full object-cover object-center opacity-80 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-bg via-[var(--text-primary)]/55 to-black/20" />
                  <div className="absolute inset-x-0 bottom-0 px-5 pb-4 text-center">
                    <h3 className="font-roboto text-2xl font-black leading-tight text-ink">
                      {course.name.replace(" Development", "")}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-ink/80">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-1">
                  <Link
                    to={`/courses/${course.slug || course.id}`}
                    className="mx-auto flex h-10 w-full max-w-[210px] items-center justify-center gap-2 rounded-full bg-white text-sm font-extrabold text-[var(--cta-ink)] transition hover:bg-brand-green"
                  >
                    Explore Course <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="flex flex-col gap-2 border-t border-white/15 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex min-w-0 items-center gap-2 text-[12px] font-semibold text-ink">
                    <Users size={15} className="shrink-0 text-brand-primary" />
                    <span className="text-brand-primary">{learnersFor(course.id)}</span>
                    <span className="truncate text-ink/80">Learning Today</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => openDemo(course.id)}
                    className="shrink-0 self-start rounded-full bg-brand-primary px-3.5 py-1.5 text-[11px] font-extrabold text-[var(--cta-ink)] transition hover:bg-brand-green sm:self-auto"
                  >
                    Enroll Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
