import Container from "../common/Container";
import Reveal from "../common/Reveal";
import { hiringPartners } from "../../data/partners";
import { ROADMAP_TAGLINE } from "../../data/roadmapInclusions";

export default function CorporateClients() {
  const loop = [...hiringPartners, ...hiringPartners];

  return (
    <section className="relative overflow-hidden bg-[#050c0a] py-16 md:py-20">
      <Container className="relative z-10">
        <Reveal>
          <h2 className="text-center font-roboto text-3xl font-black text-white md:text-4xl">
            Our <span className="text-[#7CFF00]">Clients</span>
          </h2>
          <span className="corporate-divider mt-5" aria-hidden="true" />
        </Reveal>

        <div className="mt-10 overflow-hidden">
          <div className="partners-slide-left flex w-max gap-4">
            {loop.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex h-16 w-[140px] shrink-0 items-center justify-center rounded-xl bg-white px-3 shadow-[0_8px_20px_rgba(0,0,0,0.28)]"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-12 w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <Reveal className="mx-auto mt-14 max-w-3xl text-center">
          <h3 className="font-roboto text-2xl font-black leading-snug text-white sm:text-3xl">
            How will <span className="text-[#7CFF00]">SkillOrbit’s</span> corporate training
            develop future leaders?
          </h3>
          <p className="mt-5 text-sm font-semibold text-[#7CFF00] sm:text-base">
            {ROADMAP_TAGLINE}.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
