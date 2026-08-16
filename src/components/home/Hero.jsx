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
        min-h-screen
        overflow-hidden
        pt-28
        pb-16

        sm:pt-32
        sm:pb-20

        md:pt-36
        md:pb-24

        lg:pt-40
        lg:pb-24

        bg-gradient-to-br
        from-[#35D0A5]
        via-[#29C3BE]
        to-[#1FB8D2]
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[480px]
          w-[480px]
          rounded-full
          blur-3xl
          opacity-30
        "
        style={{
          background:
            "radial-gradient(circle, rgba(124,255,0,0.30), transparent 70%)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-24
          h-[420px]
          w-[420px]
          rounded-full
          blur-3xl
          opacity-25
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
          top-[8%]
          h-[360px]
          w-[360px]
          -translate-x-1/2
          rounded-full
          bg-[#7CFF00]/10
          blur-[80px]

          sm:h-[430px]
          sm:w-[430px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <Container
        className="
          relative
          z-10
          grid
          items-center
          gap-10

          lg:grid-cols-2
          lg:gap-14
        "
      >

        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <Reveal>

          {/* Eyebrow */}
          <p
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/40
              bg-white/25
              px-3
              py-1.5
              text-xs
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#087A3E]
              backdrop-blur-sm

              sm:text-sm
            "
          >
            <Sparkles
              size={14}
              className="text-[#7CFF00]"
            />

            Industry-Ready IT Education
          </p>

          {/* =================================================
              HEADING
          ================================================== */}

          <h1
            className="
              mb-6
              max-w-3xl
              font-display
              font-extrabold
              leading-[0.98]
              tracking-[-0.04em]
              text-[#071313]

              text-5xl

              sm:text-6xl

              md:text-7xl

              lg:text-[70px]

              xl:text-[76px]
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
              mb-8
              max-w-xl
              text-base
              font-medium
              leading-7
              text-[#365F6E]

              sm:text-lg
              sm:leading-8
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
              mb-6
              flex
              flex-col
              gap-3

              sm:flex-row
              sm:flex-wrap
              sm:gap-4
            "
          >
            <Button
              to="/contact"
              variant="primary"
              size="lg"
            >
              Book Free Demo

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
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
              text-sm
              font-medium
              text-[#365F6E]
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

            mt-6

            sm:mt-8

            lg:mt-0
          "
        >

          {/* Orbit */}
          <div
            className="
              relative
              mx-auto

              w-full
              max-w-[420px]

              sm:max-w-[500px]

              lg:max-w-[600px]
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
              left-1/2
              top-0
              hidden
              -translate-x-1/2
              rounded-2xl
              border
              border-white/70
              bg-white/90
              px-4
              py-3
              shadow-xl
              backdrop-blur-md

              md:block

              lg:left-0
              lg:top-2
              lg:translate-x-0
            "
          >
            <p className="font-display text-xl font-bold text-[#071313]">
              {STATS[0].value.toLocaleString()}
              {STATS[0].suffix}
            </p>

            <p className="text-xs font-medium text-[#55727C]">
              Learners guided
            </p>
          </div>

          {/* =================================================
              PLACEMENT STAT
          ================================================== */}

          <div
            className="
              absolute
              bottom-0
              right-0
              hidden
              rounded-2xl
              border
              border-white/70
              bg-white/90
              px-4
              py-3
              shadow-xl
              backdrop-blur-md

              md:block

              lg:bottom-6
              lg:right-0
            "
          >
            <p className="font-display text-xl font-bold text-[#071313]">
              {STATS[2].value}
              {STATS[2].suffix}
            </p>

            <p className="text-xs font-medium text-[#55727C]">
              Placement support rate
            </p>
          </div>

        </Reveal>
      </Container>
    </section>
  );
}