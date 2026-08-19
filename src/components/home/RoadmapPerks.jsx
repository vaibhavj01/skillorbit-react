import Container from "../common/Container";
import Reveal from "../common/Reveal";
import OrbitBackdrop from "../common/OrbitBackdrop";
import RoadmapInclusions from "../courses/RoadmapInclusions";

export default function RoadmapPerks() {
  return (
    <section className="relative overflow-hidden bg-[#071313] py-12 md:py-20">
      <OrbitBackdrop variant="night" />
      <Container className="relative z-10">
        <Reveal>
          <RoadmapInclusions variant="light" />
        </Reveal>
      </Container>
    </section>
  );
}
