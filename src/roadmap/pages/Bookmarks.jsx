import { Link } from "react-router-dom";
import { useProgress } from "../auth/ProgressContext";
import RoadmapCard from "../components/RoadmapCard";
import { getRoadmapBySlug } from "../data/catalog";

export default function Bookmarks() {
  const { progress, bookmarks, toggleRoadmapBookmark, toggleTopicBookmark, toggleResourceBookmark } = useProgress();
  const savedRoadmaps = bookmarks.roadmaps.map((slug) => getRoadmapBySlug(slug)).filter(Boolean);

  return (
    <div>
      <section className="rm-hero">
        <h1>Bookmarks</h1>
        <p>Saved roadmaps, topics, and resources — kept with your SkillOrbit account.</p>
      </section>

      <section>
        <div className="rm-section-head"><h2>Saved Roadmaps</h2></div>
        {savedRoadmaps.length ? (
          <div className="rm-grid">
            {savedRoadmaps.map((roadmap) => (
              <RoadmapCard
                key={roadmap.slug}
                roadmap={roadmap}
                entry={progress[roadmap.slug] || progress[roadmap.id]}
                bookmarked
                onBookmark={toggleRoadmapBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="rm-card rm-empty">Bookmark a roadmap from Explore to see it here.</div>
        )}
      </section>

      <section style={{ marginTop: "2rem" }}>
        <div className="rm-section-head"><h2>Saved Topics</h2></div>
        {bookmarks.topics.length ? (
          <div className="rm-list">
            {bookmarks.topics.map((item) => (
              <article key={item.topicId} className="rm-card">
                <h3>{item.title}</h3>
                <div className="rm-card-actions">
                  <Link className="rm-btn rm-btn--primary" to={`/roadmap/${item.roadmapId}`}>Open roadmap</Link>
                  <button type="button" className="rm-btn rm-btn--ghost" onClick={() => toggleTopicBookmark(item.roadmapId, item.topicId, item.title)}>
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rm-card rm-empty">Save a topic from any roadmap node.</div>
        )}
      </section>

      <section style={{ marginTop: "2rem" }}>
        <div className="rm-section-head"><h2>Saved Resources</h2></div>
        {bookmarks.resources.length ? (
          <div className="rm-list">
            {bookmarks.resources.map((item) => (
              <article key={item.id} className="rm-card">
                <h3>{item.title}</h3>
                <p>{item.type}</p>
                <div className="rm-card-actions">
                  <a className="rm-btn rm-btn--primary" href={item.href}>Open Resource</a>
                  <button type="button" className="rm-btn rm-btn--ghost" onClick={() => toggleResourceBookmark(item)}>
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rm-card rm-empty">Bookmark a resource while studying a topic.</div>
        )}
      </section>
    </div>
  );
}
