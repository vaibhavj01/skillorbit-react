import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { roadmapPercent, useProgress } from "../auth/ProgressContext";
import CategoryChips from "../components/CategoryChips";
import RoadmapCard from "../components/RoadmapCard";
import { getRoadmapCatalog, searchRoadmaps } from "../data/catalog";

function applyFilters(list, { q, category, difficulty, sort, progress }) {
  let next = searchRoadmaps(q, list);
  if (category) next = next.filter((item) => item.category === category);
  if (difficulty && difficulty !== "All") {
    next = next.filter((item) => String(item.difficulty).toLowerCase().includes(difficulty.toLowerCase()));
  }
  if (sort === "newest") next = [...next].sort((a, b) => b.createdRank - a.createdRank);
  else if (sort === "progress") {
    next = [...next].sort((a, b) => roadmapPercent(b, progress[b.slug] || progress[b.id]) - roadmapPercent(a, progress[a.slug] || progress[a.id]));
  } else next = [...next].sort((a, b) => b.popularRank - a.popularRank);
  return next;
}

export default function Explore() {
  const { isAuthenticated } = useAuth();
  const { progress, bookmarks, toggleRoadmapBookmark } = useProgress();
  const [params, setParams] = useSearchParams();
  const [difficulty, setDifficulty] = useState("All");
  const [sort, setSort] = useState("popular");
  const q = params.get("q") || "";
  const category = params.get("category") || "";

  const catalog = useMemo(() => getRoadmapCatalog(), []);
  const items = useMemo(
    () => applyFilters(catalog, { q, category, difficulty, sort, progress }),
    [catalog, q, category, difficulty, sort, progress]
  );

  return (
    <div>
      <div className="rm-hero">
        <h1>Explore Roadmaps</h1>
        <p>Original SkillOrbit learning paths mapped to the courses already on this site.</p>
      </div>
      <CategoryChips
        value={category}
        onChange={(id) => {
          const next = new URLSearchParams(params);
          if (id) next.set("category", id);
          else next.delete("category");
          setParams(next);
        }}
      />
      <div className="rm-toolbar">
        <input
          className="rm-search"
          value={q}
          onChange={(event) => {
            const next = new URLSearchParams(params);
            if (event.target.value) next.set("q", event.target.value);
            else next.delete("q");
            setParams(next);
          }}
          placeholder="Search roadmaps..."
          aria-label="Search roadmaps"
        />
        {["All", "Beginner", "Intermediate", "Advanced"].map((item) => (
          <button key={item} type="button" className={`rm-chip ${difficulty === item ? "is-active" : ""}`} onClick={() => setDifficulty(item)} style={difficulty === item ? { color: "#021A12", background: "#39FF14" } : {}}>
            {item}
          </button>
        ))}
        <select className="rm-search" value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort roadmaps">
          <option value="popular">Popular</option>
          <option value="newest">Newest</option>
          <option value="progress">My Progress</option>
        </select>
      </div>
      <div className="rm-grid">
        {items.map((roadmap) => (
          <RoadmapCard
            key={roadmap.slug}
            roadmap={roadmap}
            entry={progress[roadmap.slug] || progress[roadmap.id]}
            bookmarked={bookmarks.roadmaps.includes(roadmap.slug)}
            onBookmark={isAuthenticated ? toggleRoadmapBookmark : undefined}
          />
        ))}
      </div>
    </div>
  );
}
