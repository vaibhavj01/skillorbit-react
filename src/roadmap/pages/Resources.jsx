import { useMemo } from "react";
import { useProgress } from "../auth/ProgressContext";
import { getRoadmapCatalog } from "../data/catalog";
import RmButton from "../components/RmButton";

export default function Resources() {
  const { bookmarks, toggleResourceBookmark } = useProgress();
  const resources = useMemo(() => {
    const all = [];
    getRoadmapCatalog().forEach((roadmap) => {
      roadmap.resources.forEach((item) => {
        all.push({ ...item, roadmapTitle: roadmap.title, roadmapSlug: roadmap.slug });
      });
    });
    return all;
  }, []);

  return (
    <div>
      <section className="rm-hero">
        <h1>Resources</h1>
        <p>Course links and technologies tied to each SkillOrbit roadmap.</p>
      </section>
      <div className="rm-grid">
        {resources.map((item) => {
          const saved = bookmarks.resources.some((entry) => entry.id === item.id);
          return (
            <article key={item.id} className="rm-card">
              <h3>{item.title}</h3>
              <p>{item.roadmapTitle}</p>
              <div className="rm-card-actions">
                <RmButton href={item.href}>Open Resource</RmButton>
                <RmButton variant={saved ? "soft" : "ghost"} onClick={() => toggleResourceBookmark(item)}>
                  {saved ? "Saved" : "Bookmark"}
                </RmButton>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
