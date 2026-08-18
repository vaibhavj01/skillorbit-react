import Container from "../common/Container";
import Reveal from "../common/Reveal";

export default function CorporateLeadership() {
  return (
    <section className="relative overflow-hidden bg-[#071313] py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(53,208,165,0.12), transparent 40%), radial-gradient(circle at 80% 100%, rgba(124,255,0,0.08), transparent 36%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-roboto text-3xl font-black leading-tight text-[#7CFF00] sm:text-4xl">
            Role-ready communication for IT teams
          </h2>
          <p className="mt-6 text-sm leading-7 text-[#C5D5CE] md:text-base">
            Data Analytics, Java Full Stack, and Python Full Stack work only scales when people
            can explain decisions. This layer of the program builds practical habits — clear
            standups, honest reviews, and client-ready demos — so your next leads communicate
            with purpose, not just ship tickets.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
