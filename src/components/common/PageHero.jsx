import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-[#071313] px-0 pb-10 pt-20 sm:pb-14 sm:pt-28 md:pb-20 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, rgba(35,159,74,0.22), transparent 38%), radial-gradient(circle at 88% 78%, rgba(124,255,0,0.08), transparent 34%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative z-10 max-w-2xl text-center">
        <Reveal>
          <h1 className="mb-3 font-display text-[1.65rem] font-bold leading-tight tracking-tight text-white sm:mb-4 sm:text-h2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm leading-6 text-[#C5D5CE] sm:text-base sm:leading-relaxed md:text-lg">{subtitle}</p>
          )}
          <span className="corporate-divider mt-5 inline-block sm:mt-6" aria-hidden="true" />
        </Reveal>
      </Container>
    </section>
  );
}
