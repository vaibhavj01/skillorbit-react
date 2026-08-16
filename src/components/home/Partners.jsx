import Container from "../common/Container";
import Reveal from "../common/Reveal";
import { hiringPartners } from "../../data/partners";

/* =========================================================
   COMPANY CARD
========================================================= */

function CompanyCard({ company }) {
  return (
    <div
      className="
        group
        flex
        h-[78px]
        w-[155px]
        shrink-0
        items-center
        justify-center

        rounded-xl

        border
        border-white/25

        bg-white/[0.10]

        px-3

        backdrop-blur-md

        shadow-[0_8px_25px_rgba(0,0,0,0.12)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:border-[#7CFF00]/70
        hover:bg-white/[0.18]
        hover:shadow-[0_0_25px_rgba(124,255,0,0.18)]

        sm:h-[84px]
        sm:w-[170px]

        md:h-[90px]
        md:w-[190px]

        lg:h-[96px]
        lg:w-[205px]

        xl:h-[100px]
        xl:w-[215px]
      "
    >
      {/* =================================================
          LOGO
      ================================================== */}

      <img
        src={company.logo}
        alt={`${company.name} logo`}
        loading="lazy"
        draggable="false"
        className="
          block

          h-[52px]
          w-[150px]

          object-contain
          object-center

          select-none

          opacity-95

          transition-all
          duration-300
          ease-out

          group-hover:scale-105
          group-hover:opacity-100

          sm:h-[56px]
          sm:w-[160px]

          md:h-[60px]
          md:w-[170px]

          lg:h-[64px]
          lg:w-[180px]

          xl:h-[68px]
          xl:w-[185px]
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

      {/* ===================================================
          LEFT FADE
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20

          h-full
          w-8

          bg-gradient-to-r
          from-[#29C3BE]
          to-transparent

          sm:w-12
          md:w-20
          lg:w-28
        "
      />


      {/* ===================================================
          RIGHT FADE
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20

          h-full
          w-8

          bg-gradient-to-l
          from-[#1FB8D2]
          to-transparent

          sm:w-12
          md:w-20
          lg:w-28
        "
      />


      {/* ===================================================
          MOVING TRACK
      ==================================================== */}

      <div
        className={`
          flex
          w-max

          gap-3

          sm:gap-4
          md:gap-5
          lg:gap-6

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
     FIVE DIFFERENT ROWS
  ======================================================= */

  const rowOne = [
    hiringPartners[0],
    hiringPartners[1],
    hiringPartners[2],
    hiringPartners[3],
    hiringPartners[4],
  ];


  const rowTwo = [
    hiringPartners[5],
    hiringPartners[6],
    hiringPartners[7],
    hiringPartners[8],
    hiringPartners[9],
  ];


  const rowThree = [
    hiringPartners[10],
    hiringPartners[11],
    hiringPartners[0],
    hiringPartners[1],
    hiringPartners[2],
  ];


  const rowFour = [
    hiringPartners[3],
    hiringPartners[6],
    hiringPartners[4],
    hiringPartners[7],
    hiringPartners[5],
  ];


  const rowFive = [
    hiringPartners[8],
    hiringPartners[9],
    hiringPartners[10],
    hiringPartners[0],
    hiringPartners[11],
  ];


  return (
    <section
      id="companies"
      className="
        relative
        overflow-hidden

        py-14

        sm:py-16
        md:py-20
        lg:py-24

        bg-gradient-to-r
        from-[#35D0A5]
        via-[#29C3BE]
        to-[#1FB8D2]
      "
    >

      {/* ===================================================
          BACKGROUND GLOW 1
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-10

          h-[300px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-[#B8FF00]/10

          blur-3xl
        "
      />


      {/* ===================================================
          BACKGROUND GLOW 2
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          -right-32
          bottom-0

          h-[320px]
          w-[320px]

          rounded-full

          bg-[#8BE4FF]/10

          blur-3xl
        "
      />


      {/* ===================================================
          MAIN CONTAINER
      ==================================================== */}

      <Container
        className="
          relative
          z-10
          w-full
        "
      >

        {/* =================================================
            HEADING
        ================================================== */}

        <Reveal
          className="
            mb-7
            text-center

            sm:mb-8
            md:mb-10
            lg:mb-12
          "
        >

          {/* Career Network */}

          <p
            className="
              mb-2

              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.35em]

              text-[#E7FF00]

              sm:mb-3
              sm:text-[10px]

              md:text-xs
            "
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Career Network
          </p>


          {/* Main Heading */}

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
              mt-6

              h-1
              w-16

              rounded-full

              bg-[#7CFF00]

              shadow-[0_0_18px_rgba(124,255,0,0.65)]
            "
          />

        </Reveal>


        {/* =================================================
            ROW 1
        ================================================== */}

        <Reveal delay={0.05}>
          <div className="mb-3 sm:mb-4 md:mb-5">
            <SlidingRow
              companies={rowOne}
              direction="left"
              speed="normal"
            />
          </div>
        </Reveal>


        {/* =================================================
            ROW 2
        ================================================== */}

        <Reveal delay={0.08}>
          <div className="mb-3 sm:mb-4 md:mb-5">
            <SlidingRow
              companies={rowTwo}
              direction="right"
              speed="slow"
            />
          </div>
        </Reveal>


        {/* =================================================
            ROW 3
        ================================================== */}

        <Reveal delay={0.11}>
          <div className="mb-3 sm:mb-4 md:mb-5">
            <SlidingRow
              companies={rowThree}
              direction="left"
              speed="normal"
            />
          </div>
        </Reveal>


        {/* =================================================
            ROW 4
        ================================================== */}

        <Reveal delay={0.14}>
          <div className="mb-3 sm:mb-4 md:mb-5">
            <SlidingRow
              companies={rowFour}
              direction="right"
              speed="slow"
            />
          </div>
        </Reveal>


        {/* =================================================
            ROW 5
        ================================================== */}

        <Reveal delay={0.17}>
          <SlidingRow
            companies={rowFive}
            direction="left"
            speed="normal"
          />
        </Reveal>


        {/* =================================================
            BOTTOM LABEL
        ================================================== */}

        <Reveal delay={0.20}>
          <div
            className="
              mt-7
              flex
              justify-center

              sm:mt-8
              md:mt-10
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