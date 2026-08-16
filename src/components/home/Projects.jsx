import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Build" title="Projects That Prove Your Skills" subtitle="Portfolio work across web, cloud and AI — illustrative examples for learners." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <div className="rounded-2xl overflow-hidden border border-line bg-white group">
                <div className="h-44 flex items-center justify-center" style={{ background: "linear-gradient(155deg, #EAF8EE 0%, #D5F0DC 45%, #BFE8C9 100%)" }}>
                  <img src={p.image} alt={p.title} className="h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-brand-600">{p.category}</span>
                  <h3 className="text-lg font-bold mt-1 mb-1.5 font-display text-ink">{p.title}</h3>
                  <p className="text-sm text-ink-muted mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies?.map((t) => (
                      <span key={t} className="text-[11px] font-medium px-2 py-1 rounded-md bg-surface-muted text-ink-light">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
