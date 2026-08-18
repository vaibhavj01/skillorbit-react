import { Link } from "react-router-dom";
import { whyFeatures } from "../../data/whyFeatures";
import OrbitBackdrop from "../common/OrbitBackdrop";

export default function WhyFeatures() {
  return (
    <section
      id="why"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        md:py-28
        lg:py-32
        bg-gradient-to-r
        from-[#35D0A5]
        via-[#29C3BE]
        to-[#1FB8D2]
      "
    >
      <OrbitBackdrop variant="mesh" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-5xl text-center">

          {/* Eyebrow */}
          <p
            className="
              mb-5
              text-xs
              font-extrabold
              uppercase
              tracking-[0.35em]
              text-[#E7FF00]
              sm:text-sm
            "
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            WHY SKILLORBIT?
          </p>

          {/* Main Heading */}
          <h2
            className="
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Your Journey from{" "}
            <span
              className="
                text-[#7CFF00]
                drop-shadow-[0_0_18px_rgba(124,255,0,0.20)]
              "
            >
              Learning
            </span>{" "}
            to{" "}
            <span
              className="
                text-[#8BE4FF]
                drop-shadow-[0_0_18px_rgba(139,228,255,0.25)]
              "
            >
              Earning
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-[#EFFFFB]
              sm:text-base
            "
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            More than training — build real skills, work on real projects,
            and become career ready with SkillOrbit.
          </p>

          {/* Underline */}
          <div
            className="
              mx-auto
              mt-8
              h-1
              w-16
              rounded-full
              bg-[#7CFF00]
              shadow-[0_0_18px_rgba(124,255,0,0.65)]
            "
          />
        </div>

        {/* ================= FEATURES ================= */}
        <div className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-4 sm:mt-16 md:gap-5">

          {whyFeatures.map((item) => (
            <Link
              key={item.id}
              to={item.to || "/courses"}
              className="
                group
                flex
                min-h-[64px]
                items-center
                gap-3
                rounded-full
                border
                border-white/25
                bg-white/[0.10]
                px-6
                py-3.5
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#7CFF00]/70
                hover:bg-white/[0.18]
                hover:shadow-[0_0_25px_rgba(124,255,0,0.18)]
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-lg
                  text-[#7CFF00]
                  drop-shadow-[0_0_8px_rgba(124,255,0,0.35)]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                <span aria-hidden="true">
                  {item.icon}
                </span>
              </div>

              {/* Text */}
              <span
                className="
                  whitespace-nowrap
                  text-sm
                  font-bold
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-[#F4FFD6]
                  sm:text-base
                "
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-14 flex justify-center sm:mt-16">
          <Link
            to="/contact"
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              border
              border-[#7CFF00]
              bg-[#7CFF00]
              px-7
              py-3.5
              text-sm
              font-extrabold
              text-[#06352C]
              shadow-[0_8px_25px_rgba(124,255,0,0.22)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#E7FF00]
              hover:shadow-[0_10px_35px_rgba(124,255,0,0.35)]
            "
          >
            Start Your Journey

            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}