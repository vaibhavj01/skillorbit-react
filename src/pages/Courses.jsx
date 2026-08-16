import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Seo from "../components/common/Seo";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import CourseFilter from "../components/courses/CourseFilter";
import CourseGrid from "../components/courses/CourseGrid";
import { courses } from "../data/courses";

export default function Courses() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesCategory = category === "all" || c.category === category;
      const matchesQuery =
        !query.trim() ||
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        (c.technologies || []).some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <Seo
        title="Courses"
        description="Browse SkillOrbit Academy's full catalog of IT training programs across full stack development, testing, cloud, data science and more."
        path="/courses"
      />
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="All Courses"
            subtitle="Filter by category or search to find the right program for your goals. Click any course to view full details."
          />

          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 h-12">
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
