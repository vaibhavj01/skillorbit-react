import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHero({ title, subtitle }) {
  return (
    <section className="so-page-hero so-hero-dark relative overflow-hidden px-0">
      <div className="so-hero-glow" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(102,255,0,0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <Container className="relative z-10 max-w-2xl text-center">
        <Reveal>
          <h1 className="mb-3 font-display text-h1 font-bold tracking-tight text-ink-inverse sm:mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm leading-6 text-ink-dim sm:text-base sm:leading-relaxed md:text-lg">{subtitle}</p>
          )}
          <span className="corporate-divider mt-5 inline-block sm:mt-6" aria-hidden="true" />
        </Reveal>
      </Container>
    </section>
  );
}
