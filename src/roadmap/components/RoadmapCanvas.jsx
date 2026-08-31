import { Check, Lock } from "lucide-react";

const LABELS = {
  completed: "Completed",
  "in-progress": "In progress",
  "not-started": "Not started",
  locked: "Locked",
};

export default function RoadmapCanvas({ nodes, statuses, selectedId, onSelect, scale }) {
  return (
    <div className="rm-canvas-scroller">
      <ol className="rm-path" style={{ transform: `scale(${scale})` }}>
        {nodes.map((node, index) => {
          const status = statuses[node.id] || "not-started";
          return (
            <li key={node.id}>
              {index > 0 ? <div className="rm-path-line" aria-hidden="true" /> : null}
              <button
                type="button"
                className={`rm-node rm-node--${status} ${selectedId === node.id ? "is-active" : ""}`}
                onClick={() => onSelect(node)}
              >
                <span className="rm-node-index">
                  {status === "completed" ? <Check size={14} /> : status === "locked" ? <Lock size={13} /> : index + 1}
                </span>
                <span>
                  {node.title}
                  <small>{node.stage} · {LABELS[status]}</small>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
