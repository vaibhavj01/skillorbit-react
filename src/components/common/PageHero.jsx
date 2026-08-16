import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-surface-bg">
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(54,168,74,0.3), transparent 70%)" }}
      />
      <Container className="relative text-center max-w-2xl">
        <Reveal>
          <h1 className="font-display font-bold text-h2 text-ink mb-4">{title}</h1>
          {subtitle && <p className="text-base md:text-lg text-ink-muted leading-relaxed">{subtitle}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
