import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import { placementProcess } from "../../data/placementProcess";

export default function PlacementProcess() {
  return (
    <section id="placements" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading eyebrow="Careers" title="Placement Process" subtitle="A clear step-by-step path from skills to interviews — for eligible learners." />
        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-line" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {placementProcess.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.07}>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4 relative z-10 bg-gradient-brand font-display">
                    {String(s.step).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-ink">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-ink-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="text-center mt-14">
          <Button to="/placements" variant="outline" size="md">
            View Placement Support
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
