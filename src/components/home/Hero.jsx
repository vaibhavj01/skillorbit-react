import { Sparkles, ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import OrbitVisual from "./OrbitVisual";
import { STATS } from "../../data/siteConfig";

export default function Hero() {
  return (
    <section
      id="home"
      className="
          relative
          overflow-hidden

        bg-gradient-to-br
        from-[#35D0A5]
        via-[#29C3BE]
        to-[#1FB8D2]

        /* =========================
           MOBILE
        ========================== */

        pt-16
        pb-10

        /* =========================
           SMALL TABLET
        ========================== */

        sm:pt-20
        sm:pb-12

        /* =========================
           TABLET
        ========================== */

        md:pt-20
        md:pb-14

        /* =========================
           LAPTOP
        ========================== */

        lg:pt-16
        lg:pb-16

        /* =========================
           LARGE DESKTOP
        ========================== */

        xl:pt-20
        xl:pb-20
      "
    >
        
      {/* =====================================================
          BACKGROUND GLOW - LEFT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40

          h-[350px]
          w-[350px]

          rounded-full
          blur-3xl
          opacity-30

          sm:h-[420px]
          sm:w-[420px]

          lg:h-[480px]
          lg:w-[480px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(124,255,0,0.30), transparent 70%)",
        }}
      />


      {/* =====================================================
          BACKGROUND GLOW - RIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-24

          h-[320px]
          w-[320px]

          rounded-full
          blur-3xl
          opacity-25

          sm:h-[380px]
          sm:w-[380px]

          lg:h-[420px]
          lg:w-[420px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(139,228,255,0.35), transparent 70%)",
        }}
      />


      {/* =====================================================
          MOBILE ORBIT GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]

          h-[280px]
          w-[280px]

          -translate-x-1/2
          rounded-full
          bg-[#7CFF00]/10
          blur-[75px]

          sm:top-[40%]
          sm:h-[350px]
          sm:w-[350px]

          md:top-[38%]
          md:h-[400px]
          md:w-[400px]

          lg:hidden
        "
      />


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <Container
        className="
          relative
          z-10

          grid
          items-center

          gap-8

          /* =========================
             TABLET
          ========================== */

          md:gap-10

          /* =========================
             DESKTOP
          ========================== */

          lg:grid-cols-[1fr_0.82fr]
          lg:gap-5

          /* =========================
             LARGE DESKTOP
          ========================== */

          xl:grid-cols-[1fr_0.88fr]
          xl:gap-8
        "
      >

        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <Reveal>

          {/* =================================================
              EYEBROW
          ================================================== */}

          <p
            className="
              mb-4

              inline-flex
              items-center
              gap-2

              rounded-full
              border
              border-white/40
              bg-white/25

              px-3
              py-1.5

              text-[10px]
              font-bold
              uppercase
              tracking-[0.14em]

              text-[#087A3E]

              backdrop-blur-sm

              sm:mb-5
              sm:text-xs

              md:text-sm
            "
          >

            <Sparkles
              size={13}
              className="text-[#7CFF00]"
            />

            Industry-Ready IT Education

          </p>


          {/* =================================================
              HEADING
          ================================================== */}

          <h1
            className="
              mb-5

              max-w-3xl

              font-display
              font-extrabold

              leading-[0.98]
              tracking-[-0.04em]

              text-[#071313]

              /* Mobile */

              text-[40px]

              /* Small mobile */

              sm:text-[46px]

              /* Tablet */

              md:text-[56px]

              /* Laptop */

              lg:text-[55px]

              /* Large desktop */

              xl:text-[66px]

              2xl:text-[70px]
            "
          >

            Build Skills.
            <br />

            Build Careers.
            <br />

            <span
              className="
                text-[#239F4A]
                drop-shadow-[0_2px_10px_rgba(35,159,74,0.10)]
              "
            >
              Build Your Future.
            </span>

          </h1>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mb-6

              max-w-xl

              text-[13px]
              font-medium
              leading-6

              text-[#365F6E]

              sm:text-sm
              sm:leading-7

              md:text-base
              md:leading-7

              lg:text-[15px]

              xl:text-base
              xl:leading-7
            "
          >

            Learn in-demand technology skills with industry-focused
            training, hands-on projects, expert mentorship and
            dedicated career support.

          </p>


          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="
              mb-5

              flex
              flex-col
              gap-2.5

              sm:flex-row
              sm:flex-wrap
              sm:gap-3
            "
          >

            <Button
              to="/contact"
              variant="primary"
              size="lg"
            >
              Book Free Demo

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </Button>


            <Button
              to="/courses"
              variant="outline"
              size="lg"
            >
              Explore Courses
            </Button>

          </div>


          {/* =================================================
              SECONDARY LINKS
          ================================================== */}

          <p
            className="
              flex
              flex-wrap
              items-center
              gap-2

              text-[11px]
              font-medium

              text-[#365F6E]

              sm:text-xs

              md:text-sm
            "
          >

            <a
              href="#batches"
              className="
                font-semibold
                text-[#087A3E]

                underline
                decoration-dotted
                underline-offset-4

                transition-colors

                hover:text-[#063F2A]
              "
            >
              View Upcoming Batches
            </a>


            <span className="text-[#087A3E]/50">
              ·
            </span>


            <a
              href="/distance-learning"
              className="
                font-semibold
                text-[#087A3E]

                underline
                decoration-dotted
                underline-offset-4

                transition-colors

                hover:text-[#063F2A]
              "
            >
              Explore Distance Learning
            </a>

          </p>

        </Reveal>


        {/* ===================================================
            RIGHT / ORBIT
        ==================================================== */}

        <Reveal
          delay={0.15}
          className="
            relative

            flex
            items-center
            justify-center

            /* =========================
               MOBILE
            ========================== */

            mt-2

            /* =========================
               SMALL TABLET
            ========================== */

            sm:mt-3

            /* =========================
               TABLET
            ========================== */

            md:mt-0

            /* =========================
               DESKTOP
            ========================== */

            lg:-translate-y-5

            /* =========================
               LARGE DESKTOP
            ========================== */

            xl:-translate-y-7
          "
        >

          {/* =================================================
              ORBIT CONTAINER
          ================================================== */}

          <div
            className="
              relative
              w-full

              max-w-[280px]

              sm:max-w-[320px]

              md:max-w-[350px]

              lg:max-w-[365px]

              xl:max-w-[400px]

              2xl:max-w-[430px]
            "
          >

            <OrbitVisual />

          </div>


          {/* =================================================
              LEARNERS STAT
          ================================================== */}

          <div
            className="
              absolute

              /* Mobile */
              left-1/2
              top-[-8px]

              hidden

              -translate-x-1/2

              rounded-xl
              border
              border-white/70

              bg-white/90

              px-3
              py-2.5

              shadow-lg

              backdrop-blur-md

              /* Tablet */
              md:block

              /* Desktop */
              lg:left-0
              lg:top-[-12px]
              lg:translate-x-0

              /* Large desktop */
              xl:left-2
              xl:top-[-16px]
            "
          >

            <p
              className="
                font-display
                text-lg
                font-bold
                leading-none
                text-[#071313]

                sm:text-xl
              "
            >
              {STATS[0].value.toLocaleString()}
              {STATS[0].suffix}
            </p>


            <p
              className="
                mt-1
                whitespace-nowrap

                text-[10px]
                font-medium

                text-[#55727C]

                sm:text-xs
              "
            >
              Learners guided
            </p>

          </div>


          {/* =================================================
              PLACEMENT STAT
          ================================================== */}

          <div
            className="
              absolute

              /* Mobile */
              bottom-[-4px]
              right-1

              hidden

              rounded-xl
              border
              border-white/70

              bg-white/90

              px-3
              py-2.5

              shadow-lg

              backdrop-blur-md

              /* Tablet */
              md:block

              /* Desktop */
              lg:bottom-0
              lg:right-0

              /* Large desktop */
              xl:bottom-2
              xl:right-1
            "
          >

            <p
              className="
                font-display
                text-lg
                font-bold
                leading-none
                text-[#071313]

                sm:text-xl
              "
            >
              {STATS[2].value}
              {STATS[2].suffix}
            </p>


            <p
              className="
                mt-1
                whitespace-nowrap

                text-[10px]
                font-medium

                text-[#55727C]

                sm:text-xs
              "
            >
              Placement support rate
            </p>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}