import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import { categoryLabel } from "../../data/courses";
import { canvasNodeStatus, roadmapPercent, useProgress } from "../auth/ProgressContext";
import ProgressBar from "../components/ProgressBar";
import RoadmapCanvas from "../components/RoadmapCanvas";
import TopicPanel from "../components/TopicPanel";
import { getRoadmapBySlug } from "../data/catalog";

export default function RoadmapView() {
  const { slug } = useParams();
  const roadmap = useMemo(() => getRoadmapBySlug(slug), [slug]);
  const {
    progress,
    bookmarks,
    touchRoadmap,
    startTopic,
    completeTopics,
    toggleRoadmapBookmark,
    toggleTopicBookmark,
    toggleResourceBookmark,
  } = useProgress();
  const [selectedId, setSelectedId] = useState(null);
  const [scale, setScale] = useState(1);
  const [desktop, setDesktop] = useState(() => (typeof window !== "undefined" ? window.innerWidth >= 1024 : true));

  useEffect(() => {
    const onResize = () => setDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (roadmap) touchRoadmap(roadmap.slug);
  }, [roadmap, touchRoadmap]);

  const entry = roadmap ? progress[roadmap.slug] || progress[roadmap.id] : null;
  const nodes = roadmap?.canvasNodes || [];
  const statuses = useMemo(() => {
    const map = {};
    let previousCompleted = true;
    nodes.forEach((node) => {
      const status = canvasNodeStatus(entry, node, previousCompleted);
      map[node.id] = status;
      previousCompleted = status === "completed";
    });
    return map;
  }, [entry, nodes]);

  const selected = nodes.find((node) => node.id === selectedId) || null;
  const selectedStatus = selected ? statuses[selected.id] : "not-started";

  if (!roadmap) {
    return (
      <div className="rm-card rm-empty">
        <h1>Roadmap not found</h1>
        <p>That path is not in the SkillOrbit catalog.</p>
        <Link to="/roadmap">Back to roadmaps</Link>
      </div>
    );
  }

  const percent = roadmapPercent(roadmap, entry);
  const done = entry?.completedTopics?.length || 0;
  const topicBookmarked = selected ? bookmarks.topics.some((item) => item.topicId === selected.id) : false;

  const startSelected = () => {
    if (!selected || selectedStatus === "locked") return;
    startTopic(roadmap.slug, selected.topicIds[0], selected.title);
  };

  const completeSelected = () => {
    if (!selected || selectedStatus === "locked") return;
    completeTopics(roadmap.slug, selected.topicIds, selected.title);
  };

  const panel = (
    <TopicPanel
      node={selected}
      status={selectedStatus}
      bookmarked={topicBookmarked}
      asDrawer={!desktop && Boolean(selected)}
      onClose={() => setSelectedId(null)}
      onStart={startSelected}
      onComplete={completeSelected}
      onBookmark={() => selected && toggleTopicBookmark(roadmap.slug, selected.id, selected.title)}
    />
  );

  return (
    <div>
      <section className="rm-hero" style={{ marginBottom: "1rem" }}>
        <p className="rm-chip">{categoryLabel(roadmap.category)}</p>
        <h1>{roadmap.title}</h1>
        <p>{roadmap.intro || roadmap.description}</p>
        <ProgressBar value={percent} />
        <p className="rm-muted">
          {percent}% · {done} / {roadmap.topicCount} topics completed · {roadmap.estimatedDuration}
        </p>
        <div className="rm-card-actions">
          <button
            type="button"
            className={`rm-btn ${bookmarks.roadmaps.includes(roadmap.slug) ? "rm-btn--soft" : "rm-btn--ghost"}`}
            onClick={() => toggleRoadmapBookmark(roadmap.slug)}
          >
            {bookmarks.roadmaps.includes(roadmap.slug) ? "Bookmarked" : "Bookmark roadmap"}
          </button>
          {selected?.resources[0] ? (
            <button
              type="button"
              className="rm-btn rm-btn--ghost"
              onClick={() => toggleResourceBookmark(selected.resources[0])}
            >
              Bookmark resource
            </button>
          ) : null}
        </div>
      </section>

      <div className="rm-view">
        <aside className="rm-side">
          <h2 style={{ fontSize: "0.95rem", margin: "0 0 0.5rem" }}>Path</h2>
          {nodes.map((node) => (
            <button key={node.id} type="button" className={selectedId === node.id ? "is-active" : ""} onClick={() => setSelectedId(node.id)}>
              {node.title}
            </button>
          ))}
        </aside>

        <section className="rm-card" style={{ paddingTop: "0.75rem" }}>
          <div className="rm-canvas-tools">
            <button type="button" className="rm-icon-btn" aria-label="Zoom out" onClick={() => setScale((v) => Math.max(0.75, Number((v - 0.1).toFixed(2))))}>
              <Minus size={16} />
            </button>
            <button type="button" className="rm-icon-btn" aria-label="Zoom in" onClick={() => setScale((v) => Math.min(1.2, Number((v + 0.1).toFixed(2))))}>
              <Plus size={16} />
            </button>
          </div>
          <RoadmapCanvas nodes={nodes} statuses={statuses} selectedId={selectedId} onSelect={(node) => setSelectedId(node.id)} scale={scale} />
        </section>

        {desktop ? panel : null}
      </div>

      {!desktop && selected ? (
        <>
          <button type="button" className="rm-overlay" aria-label="Close topic" onClick={() => setSelectedId(null)} />
          {panel}
        </>
      ) : null}
    </div>
  );
}
