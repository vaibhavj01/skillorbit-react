const LEAF_COLORS = [
  "#FACC15",
  "#7CFF00",
  "#22D3EE",
  "#F97316",
  "#34D399",
  "#C084FC",
  "#FB923C",
  "#38BDF8",
  "#F472B6",
  "#2DD4BF",
];

const ITEM_H = 40;
const ITEM_GAP = 10;

function splitNodes(nodes, stageIndex) {
  if (nodes.length === 1) {
    return stageIndex % 2 === 0
      ? { left: nodes, right: [] }
      : { left: [], right: nodes };
  }
  return {
    left: nodes.filter((_, i) => i % 2 === 0),
    right: nodes.filter((_, i) => i % 2 === 1),
  };
}

function Fork({ count, side }) {
  const height = count * ITEM_H + Math.max(0, count - 1) * ITEM_GAP;
  const mid = height / 2;
  const startX = side === "left" ? 2 : 70;
  const endX = side === "left" ? 70 : 2;

  return (
    <svg className="rm-fork" width="72" height={height} viewBox={`0 0 72 ${height}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const y = i * (ITEM_H + ITEM_GAP) + ITEM_H / 2;
        return (
          <path
            key={i}
            d={`M ${startX} ${y} C 36 ${y}, 36 ${mid}, ${endX} ${mid}`}
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeDasharray="5 6"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

function GlossyNode({ label, tone, color, title }) {
  return (
    <span
      className={`rm-node rm-node--${tone}`}
      title={title || label}
      style={color ? { "--rm": color } : undefined}
    >
      <span className="rm-node__sheen" />
      <span className="rm-node__label">{label}</span>
    </span>
  );
}

function Branch({ node, side, colorOffset = 0 }) {
  const topics = node.topics || [];

  const leaves = (
    <div className="rm-leaves" style={{ gap: ITEM_GAP }}>
      {topics.map((topic, i) => (
        <GlossyNode
          key={topic}
          label={topic}
          tone="leaf"
          color={LEAF_COLORS[(colorOffset + i) % LEAF_COLORS.length]}
        />
      ))}
    </div>
  );

  const group = <GlossyNode label={node.title} tone="group" />;
  const fork = topics.length ? <Fork count={topics.length} side={side} /> : null;
  const arm = <span className="rm-arm" />;

  return (
    <div className={`rm-branch rm-branch--${side}`}>
      {side === "left" ? (
        <>
          {leaves}
          {fork}
          {group}
          {arm}
        </>
      ) : (
        <>
          {arm}
          {group}
          {fork}
          {leaves}
        </>
      )}
    </div>
  );
}

export default function RoadmapPath({ title, stages }) {
  return (
    <div className="rm-board-wrap">
      <div className="rm-board">
        <div className="rm-spine-line" aria-hidden="true" />

        {title && (
          <div className="rm-title-row">
            <GlossyNode label={title} tone="title" />
          </div>
        )}

        {stages.map((stage, index) => {
          const { left, right } = splitNodes(stage.nodes || [], index);
          return (
            <div className="rm-stage" key={`${stage.title}-${index}`}>
              <div className="rm-side rm-side--left">
                {left.map((node, i) => (
                  <Branch key={node.title} node={node} side="left" colorOffset={index * 3 + i} />
                ))}
              </div>

              <div className="rm-spine">
                <GlossyNode label={stage.title} tone="hub" />
              </div>

              <div className="rm-side rm-side--right">
                {right.map((node, i) => (
                  <Branch key={node.title} node={node} side="right" colorOffset={index * 3 + i + 4} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
