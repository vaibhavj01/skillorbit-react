import { Bookmark } from "lucide-react";
import { categoryLabel } from "../../data/courses";
import { roadmapPercent } from "../auth/ProgressContext";
import { difficultyTone, timeAgo } from "../utils";
import ProgressBar from "./ProgressBar";
import RmButton from "./RmButton";

export default function RoadmapCard({
  roadmap,
  entry,
  bookmarked,
  onBookmark,
  continueMode,
}) {
  const percent = roadmapPercent(roadmap, entry);
  const done = entry?.completedTopics?.length || 0;

  return (
    <article className="rm-card">
      <h3>{roadmap.title}</h3>
      <p>{roadmap.description}</p>
      <div className="rm-meta">
        <span className="rm-chip">{categoryLabel(roadmap.category)}</span>
        <span className={`rm-chip rm-chip--${difficultyTone(roadmap.difficulty)}`}>{roadmap.difficulty}</span>
        <span className="rm-chip">{roadmap.topicCount} topics</span>
      </div>
      {entry || percent ? (
        <>
          <ProgressBar value={percent} />
          <p className="rm-muted">
            {percent}% complete · {done} / {roadmap.topicCount} topics
            {continueMode && entry?.lastAccessed ? ` · ${timeAgo(entry.lastAccessed)}` : ""}
          </p>
        </>
      ) : null}
      <div className="rm-card-actions">
        <RmButton to={`/roadmap/${roadmap.slug}`}>
          {continueMode ? "Continue Learning →" : "View Roadmap"}
        </RmButton>
        {onBookmark ? (
          <button
            type="button"
            className={`rm-icon-btn ${bookmarked ? "is-on" : ""}`}
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark roadmap"}
            onClick={() => onBookmark(roadmap.slug)}
          >
            <Bookmark size={16} fill={bookmarked ? "currentColor" : "none"} />
          </button>
        ) : null}
      </div>
    </article>
  );
}
