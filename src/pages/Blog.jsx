import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import BlogGrid from "../components/blog/BlogGrid";
import { blogPosts } from "../data/blogs";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(blogPosts.map((p) => p.category))], []);

  const filtered = blogPosts.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const matchesQuery = !query.trim() || p.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <Seo
        title="Resources & Blog"
        description="Career guidance, learning tips and IT industry insights from the SkillOrbit Academy team."
        path="/blog"
      />
      <PageHero title="Career & Learning Insights" subtitle="Guides and tips for choosing courses, building projects and landing your first IT role." />

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 h-12">
              <Search size={16} className="text-ink-muted shrink-0" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                aria-label="Search articles"
                className="w-full bg-transparent outline-none text-sm placeholder:text-ink-muted"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    isActive ? "bg-ink text-brand-400 border-transparent" : "bg-white text-ink-light border-line"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <BlogGrid posts={filtered} emptyLabel="No articles match your search yet." />
        </Container>
      </section>
    </>
  );
}
