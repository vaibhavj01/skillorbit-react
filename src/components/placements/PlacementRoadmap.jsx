import { useState } from "react";
import Container from "../common/Container";
import useScrollReveal from "../../hooks/useScrollReveal";
import RoadmapHeader from "./RoadmapHeader";
import RoadmapTimeline from "./RoadmapTimeline";
import PlacementCTA from "./PlacementCTA";
import "../../styles/placement-roadmap.css";

export default function PlacementRoadmap() {
  const [ref, visible] = useScrollReveal(0.12);
  const [activeId, setActiveId] = useState(null);

  return (
    <section
      id="placements"
      ref={ref}
      className="so-dark relative overflow-hidden bg-dark placement-journey"
    >
      <Container className="relative z-10">
        <RoadmapHeader />
        <RoadmapTimeline visible={visible} activeId={activeId} setActiveId={setActiveId} />
        <PlacementCTA />
      </Container>
    </section>
  );
}
