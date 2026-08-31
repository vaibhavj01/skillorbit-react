import { Bookmark } from "lucide-react";
import RmButton from "./RmButton";

export default function TopicPanel({
  node,
  status,
  bookmarked,
  onClose,
  onStart,
  onComplete,
  onBookmark,
  asDrawer,
}) {
  if (!node) {
    return (
      <aside className="rm-panel">
        <h2>Topic details</h2>
        <p className="rm-muted">Select a node on the path to see what to learn next.</p>
      </aside>
    );
  }

  const locked = status === "locked";
  const completed = status === "completed";
  const content = (
    <>
      {asDrawer ? (
        <div style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.6rem" }}>
          <h2>{node.title}</h2>
          <button type="button" className="rm-icon-btn" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
      ) : (
        <h2>{node.title}</h2>
      )}
      <p>{node.description}</p>
      <div className="rm-meta">
        <span className="rm-chip">{node.difficulty}</span>
        <span className="rm-chip">{node.estimatedTime}</span>
        <span className="rm-chip">{status.replace("-", " ")}</span>
      </div>
      <h3 className="mt-4 text-sm font-extrabold" style={{ marginTop: "1rem", fontSize: "0.82rem" }}>What you will learn</h3>
      <ul>
        {node.whatYouLearn.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {node.prerequisites.length ? (
        <>
          <h3 style={{ marginTop: "1rem", fontSize: "0.82rem" }}>Prerequisites</h3>
          <ul>
            {node.prerequisites.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}
      <h3 style={{ marginTop: "1rem", fontSize: "0.82rem" }}>Resources</h3>
      <ul>
        {node.resources.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="rm-card-actions">
        {!completed && !locked ? (
          <RmButton onClick={onStart} variant="ghost">
            Start Learning
          </RmButton>
        ) : null}
        {!completed && !locked ? (
          <RmButton onClick={onComplete}>Mark as Complete</RmButton>
        ) : null}
        {completed ? (
          <RmButton onClick={onComplete} variant="soft">
            Completed
          </RmButton>
        ) : null}
        {node.resources[0] ? (
          <RmButton href={node.resources[0].href} variant="ghost">
            Open Resource
          </RmButton>
        ) : null}
        <button
          type="button"
          className={`rm-icon-btn ${bookmarked ? "is-on" : ""}`}
          onClick={onBookmark}
          aria-label="Bookmark topic"
        >
          <Bookmark size={16} fill={bookmarked ? "currentColor" : "none"} />
        </button>
      </div>
      {locked ? <p className="rm-muted" style={{ marginTop: "0.75rem" }}>Complete the previous checkpoint to unlock this topic.</p> : null}
    </>
  );

  if (asDrawer) {
    return <div className="rm-drawer">{content}</div>;
  }

  return <aside className="rm-panel">{content}</aside>;
}
