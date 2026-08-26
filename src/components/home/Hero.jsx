import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import HeroOrbit from "./HeroOrbit";

export default function Hero() {
  return (
    <section
      id="home"
      className="so-hero relative overflow-hidden bg-surface-bg font-body"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, rgba(0,184,61,0.10), transparent 38%), radial-gradient(circle at 88% 78%, rgba(0,92,43,0.06), transparent 34%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(0,184,61,0.14) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(circle at 70% 48%, black 20%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle at 70% 48%, black 20%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <Container
        className="
          relative
          z-10
          grid
          min-w-0
          items-center
          gap-8
          md:gap-10
          lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)]
          lg:gap-5
          xl:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)]
          xl:gap-8
        "
      >
        <div>
          <p
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-line
              bg-surface-muted
              px-3
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-brand-green
              sm:mb-5
              sm:text-xs
              md:text-sm
            "
          >
            <Sparkles size={13} className="text-brand-green" />
            Data Analytics · GenAI · Career Training
          </p>

          <h1
            className="
              mb-4
              max-w-3xl
              font-display
              font-extrabold
              text-hero
              text-ink
              sm:mb-5
            "
          >
            Build Skills.
            <br className="hidden sm:block" />
            {" "}
            Build Careers.
            <br />
            <span className="text-brand-green">
              Build Your Future.
            </span>
          </h1>

          <p
            className="
              mb-5
              max-w-xl
              text-[16px]
              font-medium
              leading-6
              text-ink-light
              sm:mb-6
              sm:text-[17px]
              sm:leading-7
              md:text-lg
            "
          >
            Learn in-demand Data Analytics and GenAI skills with industry-focused
            training, hands-on projects, expert mentorship and
            dedicated career support.
          </p>

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
                className="transition-transform duration-300 group-hover:translate-x-1"
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
              text-ink-light
              sm:text-xs
              md:text-sm
            "
          >
            <Link
              to="/#batches"
              className="
                font-semibold
                text-brand-green
                underline
                decoration-dotted
                underline-offset-4
                transition-colors
                hover:text-brand-dark
              "
            >
              View Upcoming Batches
            </Link>

            <span className="hidden text-border sm:inline">·</span>

            <Link
              to="/distance-learning"
              className="
                hidden
                font-semibold
                text-brand-green
                underline
                decoration-dotted
                underline-offset-4
                transition-colors
                hover:text-brand-dark
                sm:inline
              "
            >
              Explore Distance Learning
            </Link>
          </p>
        </div>

          <div
            className="
              relative
              mt-2
              flex
              w-full
              min-w-0
              items-center
              justify-center
              sm:mt-3
              md:mt-0
            "
          >
          <div
            className="
              relative
              w-full
              max-w-[min(100%,40rem)]
            "
          >
            <HeroOrbit />
          </div>
        </div>
      </Container>
    </section>
  );
}
