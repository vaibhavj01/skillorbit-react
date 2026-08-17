import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHero({ title, subtitle }) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#35D0A5]
        via-[#29C3BE]
        to-[#1FB8D2]
        pb-16
        pt-28
        md:pb-20
        md:pt-40
      "
    >
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,255,0,0.35), transparent 70%)" }}
      />
      <Container className="relative max-w-2xl text-center">
        <Reveal>
          <h1 className="mb-4 font-display text-h2 font-bold tracking-tight text-[#071313]">{title}</h1>
          {subtitle && (
            <p className="text-base leading-relaxed text-[#365F6E] md:text-lg">{subtitle}</p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
