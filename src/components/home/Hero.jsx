import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import HeroOrbit from "./HeroOrbit";
import OrbitBackdrop from "../common/OrbitBackdrop";

export default function Hero() {
  return (
    <section
      id="home"
      className="
          relative
           overflow-hidden
        py-20
        sm:py-24
        md:py-28
        lg:py-32

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
      <OrbitBackdrop variant="sky" />

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

            <Link
              to="/#batches"
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
            </Link>


            <span className="text-[#087A3E]/50">
              ·
            </span>


            <Link
              to="/distance-learning"
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
            </Link>

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

              max-w-[300px]

              sm:max-w-[340px]

              md:max-w-[380px]

              lg:max-w-[420px]

              xl:max-w-[460px]

              2xl:max-w-[500px]
            "
          >

            <HeroOrbit />

          </div>

        </Reveal>

      </Container>

    </section>
  );
}