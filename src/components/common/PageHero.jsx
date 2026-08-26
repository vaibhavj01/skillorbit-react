import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHero({ title, subtitle }) {
  return (
    <section className="so-page-hero relative overflow-hidden bg-surface-bg px-0">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, rgba(0,184,61,0.10), transparent 38%), radial-gradient(circle at 88% 78%, rgba(0,92,43,0.06), transparent 34%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(0,184,61,0.14) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      <Container className="relative z-10 max-w-2xl text-center">
        <Reveal>
          <h1 className="mb-3 font-display text-h2 font-bold tracking-tight text-ink sm:mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm leading-6 text-ink-light sm:text-base sm:leading-relaxed md:text-lg">{subtitle}</p>
          )}
          <span className="corporate-divider mt-5 inline-block sm:mt-6" aria-hidden="true" />
        </Reveal>
      </Container>
    </section>
  );
}
