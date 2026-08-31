import { useMemo } from "react";
import { useAuth } from "../auth/AuthContext";
import { roadmapPercent, useProgress } from "../auth/ProgressContext";
import ProgressBar from "../components/ProgressBar";
import RoadmapCard from "../components/RoadmapCard";
import { getRoadmapBySlug, getRoadmapCatalog } from "../data/catalog";
import { timeAgo } from "../utils";

export default function ProgressPage() {
  const { user } = useAuth();
  const { progress, bookmarks, stats, activity, toggleRoadmapBookmark } = useProgress();
  const catalog = useMemo(() => getRoadmapCatalog(), []);

  const started = catalog
    .map((roadmap) => ({ roadmap, entry: progress[roadmap.slug] || progress[roadmap.id] }))
    .filter((item) => item.entry)
    .sort((a, b) => roadmapPercent(b.roadmap, b.entry) - roadmapPercent(a.roadmap, a.entry));

  const completed = started.filter(({ roadmap, entry }) => roadmapPercent(roadmap, entry) >= 100);
  const active = started.filter(({ roadmap, entry }) => {
    const pct = roadmapPercent(roadmap, entry);
    return pct > 0 && pct < 100;
  });

  return (
    <div>
      <section className="rm-hero">
        <h1>My Progress</h1>
        <p>Learning overview for {user.name}.</p>
      </section>
      <section className="rm-stats">
        <article className="rm-stat"><strong>{stats.overall}%</strong><span>Overall Progress</span></article>
        <article className="rm-stat"><strong>{active.length}</strong><span>Active Roadmaps</span></article>
        <article className="rm-stat"><strong>{completed.length}</strong><span>Completed Roadmaps</span></article>
        <article className="rm-stat"><strong>{stats.completedTopics}</strong><span>Topics Completed</span></article>
      </section>
      <p className="rm-muted" style={{ marginTop: "-0.6rem", marginBottom: "1.25rem" }}>{stats.streak} day learning streak</p>

      <section>
        <div className="rm-section-head"><h2>Roadmap progress</h2></div>
        {started.length ? (
          <div className="rm-grid">
            {started.map(({ roadmap, entry }) => (
              <article key={roadmap.slug} className="rm-card">
                <h3>{roadmap.title}</h3>
                <ProgressBar value={roadmapPercent(roadmap, entry)} />
                <p className="rm-muted">
                  {roadmapPercent(roadmap, entry)}% · {entry.completedTopics?.length || 0} / {roadmap.topicCount} topics
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="rm-card rm-empty">Start a roadmap to see progress here.</div>
        )}
      </section>

      <section style={{ marginTop: "2rem" }}>
        <div className="rm-section-head"><h2>Recent Activity</h2></div>
        {activity.length ? (
          <ul className="rm-activity rm-card">
            {activity.slice(0, 12).map((item) => {
              const roadmap = getRoadmapBySlug(item.roadmapId);
              return (
                <li key={item.id}>
                  <span>
                    {item.type === "complete" ? "Completed" : "Started"} {item.title || "a topic"}
                    {roadmap ? ` in ${roadmap.title}` : ""}
                  </span>
                  <span>{timeAgo(item.at)}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="rm-card rm-empty">Complete a topic to log activity.</div>
        )}
      </section>

      {active.length ? (
        <section style={{ marginTop: "2rem" }}>
          <div className="rm-section-head"><h2>Active roadmaps</h2></div>
          <div className="rm-grid">
            {active.map(({ roadmap, entry }) => (
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
        </section>
      ) : null}
    </div>
  );
}
