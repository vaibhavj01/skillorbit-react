import { useState } from "react";
import Container from "../common/Container";
import useScrollReveal from "../../hooks/useScrollReveal";
import RoadmapHeader from "./RoadmapHeader";
import RoadmapTimeline from "./RoadmapTimeline";
import CareerBenefits from "./CareerBenefits";
import PlacementCTA from "./PlacementCTA";
import "../../styles/placement-roadmap.css";

export default function PlacementRoadmap() {
  const [ref, visible] = useScrollReveal(0.12);
  const [activeId, setActiveId] = useState(null);

  return (
    <section
      id="placements"
      ref={ref}
      className="relative overflow-hidden bg-[#F6FBF7] py-20 md:py-28"
    >
      <Container className="relative z-10">
        <RoadmapHeader />
        <RoadmapTimeline visible={visible} activeId={activeId} setActiveId={setActiveId} />
        <CareerBenefits />
        <PlacementCTA />
      </Container>
    </section>
  );
}
