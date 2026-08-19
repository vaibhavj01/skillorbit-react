import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import HeroOrbit from "./HeroOrbit";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#071313]
        font-roboto
        pt-20
        pb-8
        sm:pt-24
        sm:pb-12
        md:pt-28
        md:pb-14
        lg:pt-16
        lg:pb-16
        xl:pt-20
        xl:pb-20
      "
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, rgba(35,159,74,0.22), transparent 38%), radial-gradient(circle at 88% 78%, rgba(124,255,0,0.08), transparent 34%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(35,159,74,0.16) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(circle at 70% 48%, black 20%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle at 70% 48%, black 20%, transparent 72%)",
        }}
        aria-hidden="true"
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
              border-[#7CFF00]/25
              bg-[#7CFF00]/10

              px-3
              py-1.5

              text-[10px]
              font-bold
              uppercase
              tracking-[0.14em]

              text-[#7CFF00]

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
              mb-4
              max-w-3xl
              font-roboto
              font-black
              leading-[1.12]
              tracking-[-0.03em]
              text-white
              text-[1.75rem]
              sm:mb-5
              sm:text-[2.5rem]
              sm:leading-[1.08]
              md:text-[56px]
              lg:text-[55px]
              xl:text-[66px]
              2xl:text-[70px]
            "
          >

            Build Skills.
            <br className="hidden sm:block" />
            {" "}
            Build Careers.
            <br />

            <span
              className="
                text-[#7CFF00]
                drop-shadow-[0_2px_18px_rgba(124,255,0,0.35)]
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
              mb-5
              max-w-xl
              text-[15px]
              font-medium
              leading-6
              text-[#C5D5CE]
              sm:mb-6
              sm:text-sm
              sm:leading-7
              md:text-base

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
              mb-3
              flex
              flex-col
              gap-2.5
              sm:mb-5
              sm:flex-row
              sm:flex-wrap
              sm:gap-3
            "
          >

            <Button
              opensDemo
              variant="primary"
              size="md"
              className="group w-full sm:w-auto sm:h-14 sm:px-8 sm:text-base"
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
              size="md"
              className="w-full sm:w-auto sm:h-14 sm:px-8 sm:text-base"
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
              gap-x-3
              gap-y-1
              text-[12px]
              font-medium
              leading-5
              text-[#C5D5CE]
              sm:text-xs
              md:text-sm
            "
          >

            <Link
              to="/#batches"
              className="
                font-semibold
                text-[#7CFF00]
                underline
                decoration-dotted
                underline-offset-4
                transition-colors
                hover:text-[#C5D5CE]
              "
            >
              View Upcoming Batches
            </Link>


            <span className="hidden text-[#7CFF00]/50 sm:inline">
              ·
            </span>


            <Link
              to="/distance-learning"
              className="
                hidden
                font-semibold
                text-[#7CFF00]
                underline
                decoration-dotted
                underline-offset-4
                transition-colors
                hover:text-[#C5D5CE]
                sm:inline
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
            mt-2
            flex
            w-full
            items-center
            justify-center
            sm:mt-3
            md:mt-0
            lg:-translate-y-5
            xl:-translate-y-7
          "
        >
          <div
            className="
              relative
              w-full
              max-w-[280px]
              overflow-visible
              sm:max-w-[380px]
              md:max-w-[460px]
              lg:max-w-[540px]
              xl:max-w-[600px]
              2xl:max-w-[640px]
            "
          >
            <HeroOrbit />
          </div>
        </Reveal>

      </Container>

    </section>
  );
}