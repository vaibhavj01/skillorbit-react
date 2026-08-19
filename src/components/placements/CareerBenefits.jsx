import Reveal from "../common/Reveal";
import RoadmapIcon from "./RoadmapIcon";
import { careerBenefits } from "../../data/placementProcess";

export default function CareerBenefits() {
  return (
    <div className="mt-16 md:mt-20">
      <Reveal className="mb-8 text-center">
        <h3 className="font-grotesk text-2xl font-bold text-white md:text-3xl">
          More Than Training
        </h3>
        <p className="mt-2 text-sm text-[#C5D5CE]">
          Support that stays around the roadmap — learning, mentorship, and hiring access.
        </p>
      </Reveal>

      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {careerBenefits.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-[#7CFF00]/15 bg-[#0d1c16] p-5 shadow-card transition hover:-translate-y-0.5 hover:border-[#7CFF00]/40">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#7CFF00]/15 text-[#7CFF00]">
                <RoadmapIcon name={item.icon} size={18} />
              </span>
              <h4 className="font-grotesk text-sm font-bold text-white">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-[#C5D5CE]">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
