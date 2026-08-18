import Reveal from "../common/Reveal";
import RoadmapIcon from "./RoadmapIcon";
import { careerBenefits } from "../../data/placementProcess";

export default function CareerBenefits() {
  return (
    <div className="mt-16 md:mt-20">
      <Reveal className="mb-8 text-center">
        <h3 className="font-grotesk text-2xl font-bold text-[#111827] md:text-3xl">
          More Than Training
        </h3>
        <p className="mt-2 text-sm text-[#4B5563]">
          Support that stays around the roadmap — learning, mentorship, and hiring access.
        </p>
      </Reveal>

      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {careerBenefits.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_4px_16px_rgba(17,24,39,0.04)] transition hover:-translate-y-0.5 hover:border-[#16A34A]/40 hover:shadow-[0_14px_32px_rgba(17,24,39,0.08)]">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0FDF4] text-[#16A34A]">
                <RoadmapIcon name={item.icon} size={18} />
              </span>
              <h4 className="font-grotesk text-sm font-bold text-[#111827]">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-[#4B5563]">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
