import Container from "../common/Container";
import Reveal from "../common/Reveal";
import { hiringPartners } from "../../data/partners";

export default function Partners() {
  const loop = [...hiringPartners, ...hiringPartners];
  return (
    <section className="py-14">
      <Container>
        <Reveal className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Where Our Learners Aim to Work</p>
          <p className="text-xs mt-1 text-ink-muted">Illustrative logos — placeholders, not confirmed partnerships.</p>
        </Reveal>
        <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex gap-10 w-max animate-marquee">
            {loop.map((p, i) => (
              <span
                key={`${p.id}-${i}`}
                className="flex items-center justify-center h-16 w-40 rounded-xl border border-line bg-white shrink-0 px-4"
              >
                <img src={p.logo} alt={p.name} className="max-h-8 max-w-full object-contain opacity-80" loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
