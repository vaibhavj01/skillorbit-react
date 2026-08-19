import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import Seo from "../components/common/Seo";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import CourseFilter from "../components/courses/CourseFilter";
import CourseGrid from "../components/courses/CourseGrid";
import { CATEGORIES, courses, orderCourses } from "../data/courses";
import OrbitBackdrop from "../components/common/OrbitBackdrop";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const category = CATEGORIES.some((cat) => cat.id === categoryParam) ? categoryParam : "all";
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const setCategory = (id) => {
    const next = new URLSearchParams(searchParams);
    if (!id || id === "all") next.delete("category");
    else next.set("category", id);
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    return orderCourses(
      courses.filter((c) => {
        const matchesCategory = category === "all" || c.category === category;
        const matchesQuery =
          !query.trim() ||
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          (c.shortTitle || "").toLowerCase().includes(query.toLowerCase()) ||
          (c.technologies || []).some((t) => t.toLowerCase().includes(query.toLowerCase()));
        return matchesCategory && matchesQuery;
      }),
    );
  }, [category, query]);

  return (
    <>
      <Seo
        title="Courses"
        description="Browse SkillOrbit Academy's full catalog of IT training programs across full stack development, testing, cloud, data science and more."
        path="/courses"
      />
      <section className="relative overflow-hidden bg-[#071313] pb-16 pt-20 md:pb-28 md:pt-40">
        <OrbitBackdrop variant="night" />
        <Container className="relative z-10">
          <div className="mb-8 text-center sm:mb-12">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7CFF00]">
              Programs
            </p>
            <h1 className="font-display text-[1.65rem] font-bold leading-snug text-white sm:text-4xl">
              All Courses
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#C5D5CE]">
              Filter by category or search to find the right program for your goals.
              Click any course to view full details.
            </p>
            <div className="mt-6 flex justify-center">
              <Button opensDemo variant="primary" size="md" className="w-full sm:w-auto">
                Book Free Demo
              </Button>
            </div>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex h-12 items-center gap-2 rounded-xl border border-[#7CFF00]/25 bg-[#0d1c16] px-4">
              <Search size={16} className="text-ink-muted shrink-0" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by course or technology…"
                aria-label="Search courses"
                className="w-full bg-transparent outline-none text-base text-white placeholder:text-ink-muted sm:text-sm"
              />
            </div>
          </div>

          <CourseFilter active={category} onChange={setCategory} />
          <CourseGrid courses={filtered} emptyLabel="No courses match your search. Try a different category or keyword." />
        </Container>
      </section>
    </>
  );
}
