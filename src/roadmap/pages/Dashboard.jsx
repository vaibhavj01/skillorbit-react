import { useMemo, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useProgress } from "../auth/ProgressContext";
import CategoryChips from "../components/CategoryChips";
import RoadmapCard from "../components/RoadmapCard";
import { getRoadmapCatalog } from "../data/catalog";

export default function Dashboard() {
  const { user } = useAuth();
  const { progress, bookmarks, stats, toggleRoadmapBookmark } = useProgress();
  const [category, setCategory] = useState("");
  const catalog = useMemo(() => getRoadmapCatalog(), []);

  const continueItems = useMemo(() => {
    return catalog
      .map((roadmap) => ({ roadmap, entry: progress[roadmap.slug] || progress[roadmap.id] }))
      .filter((item) => item.entry?.lastAccessed || (item.entry?.completedTopics?.length || 0) > 0)
      .sort((a, b) => new Date(b.entry.lastAccessed || 0) - new Date(a.entry.lastAccessed || 0))
      .slice(0, 3);
  }, [catalog, progress]);

  const explore = catalog.filter((item) => !category || item.category === category).slice(0, 9);

  return (
    <div>
      <section className="rm-hero">
        <h1>Welcome back, {user.name.split(" ")[0]}</h1>
        <p>Continue building the skills that move your career forward.</p>
      </section>

      <section className="rm-stats" aria-label="Learning overview">
        <article className="rm-stat">
          <strong>{stats.overall}%</strong>
          <span>Overall Progress</span>
        </article>
        <article className="rm-stat">
          <strong>{stats.active}</strong>
          <span>Active Roadmaps</span>
        </article>
        <article className="rm-stat">
          <strong>{stats.completedTopics}</strong>
          <span>Topics Completed</span>
        </article>
        <article className="rm-stat">
          <strong>{stats.streak}</strong>
          <span>Day Streak</span>
        </article>
      </section>

      <section>
        <div className="rm-section-head">
          <h2>Continue Learning</h2>
        </div>
        {continueItems.length ? (
          <div className="rm-grid">
            {continueItems.map(({ roadmap, entry }) => (
              <RoadmapCard
                key={roadmap.slug}
                roadmap={roadmap}
                entry={entry}
                continueMode
                bookmarked={bookmarks.roadmaps.includes(roadmap.slug)}
                onBookmark={toggleRoadmapBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="rm-card rm-empty">
            <p>Pick a roadmap below to start tracking topics.</p>
          </div>
        )}
      </section>

      <section style={{ marginTop: "2rem" }}>
        <div className="rm-section-head">
          <h2>Explore Roadmaps</h2>
        </div>
        <CategoryChips value={category} onChange={setCategory} />
        <div className="rm-grid">
          {explore.map((roadmap) => (
            <RoadmapCard
              key={roadmap.slug}
              roadmap={roadmap}
              entry={progress[roadmap.slug] || progress[roadmap.id]}
              bookmarked={bookmarks.roadmaps.includes(roadmap.slug)}
              onBookmark={toggleRoadmapBookmark}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
