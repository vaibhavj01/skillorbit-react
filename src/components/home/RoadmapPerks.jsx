import Container from "../common/Container";
import Reveal from "../common/Reveal";
import OrbitBackdrop from "../common/OrbitBackdrop";
import RoadmapInclusions from "../courses/RoadmapInclusions";

export default function RoadmapPerks() {
  return (
    <section className="relative overflow-hidden bg-[#E7F7F0] py-16 md:py-20">
      <OrbitBackdrop variant="mint" />
      <Container className="relative z-10">
        <Reveal>
          <RoadmapInclusions variant="light" />
        </Reveal>
      </Container>
    </section>
  );
}
