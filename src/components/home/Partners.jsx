import Container from "../common/Container";
import Reveal from "../common/Reveal";
import { hiringPartners } from "../../data/partners";
import OrbitBackdrop from "../common/OrbitBackdrop";

/* =========================================================
   COMPANY CARD
========================================================= */

function CompanyCard({ company }) {
  return (
    <div
      className="
        group
        relative
        flex
        h-[52px]
        w-[105px]
        min-w-[105px]
        shrink-0
        items-center
        justify-center
        overflow-hidden

        rounded-md

        border
        border-white/30

        bg-white

        shadow-[0_3px_8px_rgba(0,0,0,0.18)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:border-[#7CFF00]
        hover:shadow-[0_5px_14px_rgba(124,255,0,0.30)]

        sm:h-[54px]
        sm:w-[110px]
        sm:min-w-[110px]

        md:h-[56px]
        md:w-[115px]
        md:min-w-[115px]
      "
    >
      {/* =================================================
          COMPANY LOGO
      ================================================== */}

      <img
        src={company.logo}
        alt={`${company.name} logo`}
        loading="lazy"
        width="110"
        height="52"
        decoding="async"
        draggable="false"
        className="
          block
          h-full
          w-full

          object-contain
          object-center

          p-1

          select-none

          transition-all
          duration-300
          ease-out

          group-hover:scale-105
        "
      />
    </div>
  );
}


/* =========================================================
   SLIDING ROW
========================================================= */

function SlidingRow({
  companies,
  direction = "left",
  speed = "normal",
}) {
  /*
   * Duplicate the companies so the animation
   * can continue smoothly without an empty space.
   */

  const items = [
    ...companies,
    ...companies,
    ...companies,
    ...companies,
  ];

  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
        py-1
      "
    >
      {/* =================================================
          MOVING TRACK
      ================================================== */}

      <div
        className={`
          flex
          w-max
          gap-3

          sm:gap-3
          md:gap-4

          ${
            direction === "left"
              ? "partners-slide-left"
              : "partners-slide-right"
          }

          ${
            speed === "slow"
              ? "partners-slide-slow"
              : ""
          }
        `}
      >
        {items.map((company, index) => (
          <CompanyCard
            key={`${company.id}-${index}`}
            company={company}
          />
        ))}
      </div>
    </div>
  );
}


/* =========================================================
   MAIN PARTNERS SECTION
========================================================= */

export default function Partners() {

  /* =======================================================
     ROW 1
  ======================================================= */

  const rowOne = hiringPartners.slice(0, 4);
  const rowTwo = hiringPartners.slice(4, 8);
  const rowThree = hiringPartners.slice(8, 12);
  const rowFour = hiringPartners.slice(12, 16);
  return (
    <section
      id="companies"
      className="
        relative
        overflow-hidden
        bg-[#071313]

        py-10

        sm:py-11

        md:py-12

        lg:py-14
      "
    >
      <OrbitBackdrop variant="mesh" />


      {/* =================================================
          MAIN CONTAINER
      ================================================== */}

      <Container
        className="
          relative
          z-10
          w-full
        "
      >

{/* LEFT SOFT EDGE */}
<div
  className="
    pointer-events-none
    absolute
    left-0
    top-0
    z-20

    h-full
    w-[90px]

    bg-gradient-to-r
    from-[#071313]
    via-[#071313]/90
    to-transparent

    blur-[5px]
  "
/>

{/* RIGHT SOFT EDGE */}
<div
  className="
    pointer-events-none
    absolute
    right-0
    top-0
    z-20

    h-full
    w-[90px]

    bg-gradient-to-l
    from-[#071313]
    via-[#071313]/90
    to-transparent

    blur-[5px]
  "
/>
        {/* =================================================
            HEADING
        ================================================== */}

        <Reveal
          className="
            mb-6
            text-center

            sm:mb-7

            md:mb-8
          "
        >

          {/* Eyebrow */}

          <p
            className="
              mb-2

              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.35em]

              text-[#E7FF00]

              sm:text-[10px]

              md:text-xs
            "
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Career Network
          </p>


          {/* Heading */}

          <h2
            className="
              font-display
              font-extrabold
              leading-[1.05]
              tracking-tight

              text-white

              text-2xl

              sm:text-3xl

              md:text-4xl

              lg:text-[44px]

              xl:text-[48px]
            "
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Where Our Learners

            <br />

            <span
              className="
                text-[#7CFF00]

                drop-shadow-[0_0_18px_rgba(124,255,0,0.20)]
              "
            >
              Aim to Work
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-3

              max-w-[520px]

              text-[11px]
              font-medium
              leading-5

              text-[#EFFFFB]

              sm:text-xs
              sm:leading-6

              md:text-sm
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Our learners prepare for opportunities
            across leading technology organizations.
          </p>


          {/* Underline */}

          <div
            className="
              mx-auto
              mt-4

              h-1
              w-16

              rounded-full

              bg-[#7CFF00]

              shadow-[0_0_18px_rgba(124,255,0,0.65)]
            "
          />

        </Reveal>


        {/* =================================================
            ROW 1 — LEFT
        ================================================== */}

        <Reveal delay={0.05}>
          <div className="mb-2 sm:mb-3">

            <SlidingRow
              companies={rowOne}
              direction="left"
              speed="normal"
            />

          </div>
        </Reveal>


        {/* =================================================
            ROW 2 — RIGHT
        ================================================== */}

        <Reveal delay={0.08}>
          <div className="mb-2 sm:mb-3">

            <SlidingRow
              companies={rowTwo}
              direction="right"
              speed="slow"
            />

          </div>
        </Reveal>


        {/* =================================================
            ROW 3 — LEFT
        ================================================== */}

        <Reveal delay={0.11}>
          <div className="mb-2 sm:mb-3">

            <SlidingRow
              companies={rowThree}
              direction="left"
              speed="normal"
            />

          </div>
        </Reveal>


        {/* =================================================
            ROW 4 — RIGHT
        ================================================== */}

        <Reveal delay={0.14}>

          <SlidingRow
            companies={rowFour}
            direction="right"
            speed="slow"
          />

        </Reveal>


        {/* =================================================
            BOTTOM LABEL
        ================================================== */}

        <Reveal delay={0.17}>

          <div
            className="
              mt-6
              flex
              justify-center

              sm:mt-7
            "
          >

            <div
              className="
                inline-flex
                max-w-[90%]

                items-center
                justify-center
                gap-2

                rounded-full

                border
                border-white/25

                bg-white/[0.10]

                px-4
                py-2

                text-center

                text-[8px]
                font-bold
                uppercase
                tracking-[0.12em]

                text-white

                backdrop-blur-md

                sm:text-[9px]

                md:text-[10px]

                lg:text-xs
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0

                  rounded-full

                  bg-[#7CFF00]

                  shadow-[0_0_10px_rgba(124,255,0,0.70)]
                "
              />

              Leading Technology & Enterprise Companies

            </div>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}