import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import Seo from "../components/common/Seo";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
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
      <section className="relative overflow-hidden bg-[#E7F7F0] pb-20 pt-32 md:pb-28 md:pt-40">
        <OrbitBackdrop variant="mint" />
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Programs"
            title="All Courses"
            subtitle="Filter by category or search to find the right program for your goals. Click any course to view full details."
          />

          <div className="max-w-md mx-auto mb-8">
            <div className="flex h-12 items-center gap-2 rounded-xl border border-[#35D0A5]/25 bg-[#F3FBF7] px-4">
              <Search size={16} className="text-ink-muted shrink-0" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by course or technology…"
                aria-label="Search courses"
                className="w-full bg-transparent outline-none text-sm placeholder:text-ink-muted"
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
