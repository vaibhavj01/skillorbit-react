import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { trainers } from "../../data/trainers";

export default function Trainers() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Faculty" title="Meet Our Trainers" subtitle="Mentor profiles shown are placeholders until real faculty bios are published." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trainers.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <div className="text-center p-6 rounded-2xl border border-line bg-white">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover bg-brand-100"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <h3 className="font-bold text-sm mb-0.5 text-ink">{t.name}</h3>
                <p className="text-xs font-semibold mb-1 text-brand-700">{t.role}</p>
                <p className="text-[11px] text-ink-muted">{t.specialization}</p>
                <p className="text-[11px] text-ink-muted mt-1">{t.experience}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
