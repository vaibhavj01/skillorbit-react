import { whyFeatures } from "../../data/whyFeatures";

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
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#B8FF00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

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
            <div
              key={item.id}
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
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-14 flex justify-center sm:mt-16">
          <button
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
          </button>
        </div>
      </div>

      {/* ================= FLOATING JOB TAB ================= */}
      <div
        className="
          fixed
          left-0
          top-1/2
          z-40
          hidden
          -translate-y-1/2
          sm:block
        "
      >
        <button
          className="
            relative
            flex
            items-center
            gap-2
            rounded-r-xl
            bg-[#7CFF00]
            px-4
            py-3
            font-extrabold
            text-[#06352C]
            shadow-[0_0_25px_rgba(124,255,0,0.30)]
            transition-all
            duration-300
            hover:px-6
            hover:bg-[#E7FF00]
            hover:shadow-[0_0_35px_rgba(124,255,0,0.45)]
          "
        >
          <span className="text-lg">▶</span>

          <span className="flex flex-col text-left leading-tight">
            <span className="text-[11px] font-semibold">
              Get Me
            </span>
            <span className="text-sm font-extrabold">
              JOB
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}