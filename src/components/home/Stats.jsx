import { Link } from "react-router-dom";
import {
  Users,
  Handshake,
  Award,
  GraduationCap,
  UserRoundCheck,
  ArrowRight,
} from "lucide-react";

import useScrollReveal from "../../hooks/useScrollReveal";
import useCounter from "../../hooks/useCounter";
import { STATS } from "../../data/siteConfig";


/* =========================================================
   ICON CONFIG
========================================================= */

const statIcons = {
  students: Users,
  partners: Handshake,
  placementRate: Award,
  courses: GraduationCap,
  experts: UserRoundCheck,
};


/* =========================================================
   STAT ITEM
========================================================= */

function StatItem({ stat, index }) {
  const [ref, visible] = useScrollReveal(0.3);

  const value = useCounter(
    stat.value,
    visible
  );

  const Icon =
    statIcons[stat.key] || Award;


  return (
    <div
      ref={ref}
      className={`
        group
        flex
        min-w-0
        flex-1
        items-center
        gap-2.5

        px-3
        py-4

        sm:px-4
        sm:gap-3

        lg:px-3
        xl:px-4

        transition-all
        duration-300

        ${
          index !== STATS.length - 1
            ? "border-b border-white/[0.08] sm:border-b-0 lg:border-r"
            : ""
        }
      `}
    >

      {/* =====================================================
          ICON
      ===================================================== */}

      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center

          rounded-full

          border
          border-green-500/25

          bg-green-500/[0.08]

          text-green-400

          transition-all
          duration-300

          group-hover:border-green-400/50
          group-hover:bg-green-500/15
          group-hover:text-green-300
          group-hover:scale-105

          sm:h-10
          sm:w-10
        "
      >

        <Icon
          size={18}
          strokeWidth={1.8}
        />

      </div>


      {/* =====================================================
          TEXT
      ===================================================== */}

      <div className="min-w-0">

        {/* Number */}

        <div
          className="
            flex
            items-baseline
            leading-none
          "
        >

          <span
            className="
              font-display
              text-[22px]
              font-extrabold
              tracking-tight
              text-white

              sm:text-[24px]

              lg:text-[23px]

              xl:text-[25px]
            "
          >
            {value.toLocaleString("en-IN")}
          </span>


          <span
            className="
              ml-0.5
              text-[18px]
              font-extrabold
              text-green-400

              sm:text-[19px]

              lg:text-[18px]

              xl:text-[20px]
            "
          >
            {stat.suffix}
          </span>

        </div>


        {/* Label */}

        <p
          className="
            mt-1
            truncate

            text-[8px]
            font-bold
            uppercase
            tracking-[0.08em]

            text-slate-400

            sm:text-[9px]

            lg:text-[8px]

            xl:text-[9px]
          "
        >
          {stat.label}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   MAIN STATS BAR
========================================================= */

export default function Stats() {

  return (

    <section
      className="
        relative
        z-20

        -mt-6
        px-4

        bg-[#35D0A5]

        sm:-mt-8
        sm:px-6

        lg:-mt-9
        lg:px-8
      "
    >

      {/* ===================================================
          CONTAINER
      ==================================================== */}

      <div
        className="
          mx-auto
          w-full

          max-w-[1320px]
        "
      >

        {/* =================================================
            STATS BAR
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden

            rounded-[1.5rem]

            border
            border-white/[0.10]

            bg-[#080909]

            shadow-[0_20px_60px_rgba(0,0,0,0.28)]

            lg:rounded-full
          "
        >

          {/* =================================================
              TOP GREEN GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-[15%]
              right-[15%]
              top-0
              h-px

              bg-gradient-to-r
              from-transparent
              via-green-400/70
              to-transparent

              blur-[1px]
            "
          />


          {/* =================================================
              CONTENT
          ================================================= */}

          <div
            className="
              flex
              flex-col

              lg:flex-row
              lg:items-center
            "
          >

            {/* =================================================
                STATS
            ================================================= */}

            <div
              className="
                grid
                grid-cols-2

                sm:grid-cols-3

                lg:flex
                lg:flex-1
              "
            >

              {STATS.map((stat, index) => (

                <StatItem
                  key={stat.key}
                  stat={stat}
                  index={index}
                />

              ))}

            </div>


            {/* =================================================
                CTA
            ================================================= */}

            <div
              className="
                border-t
                border-white/[0.08]

                p-2.5

                lg:border-l
                lg:border-t-0

                lg:p-2
              "
            >

              <Link
                to="/contact"
                className="
                  group

                  flex
                  h-11

                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  bg-green-500

                  px-6

                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[0.08em]

                  text-white

                  shadow-[0_8px_25px_rgba(34,197,94,0.22)]

                  transition-all
                  duration-300

                  hover:bg-green-400

                  hover:shadow-[0_10px_30px_rgba(34,197,94,0.32)]

                  sm:text-xs

                  lg:min-w-[150px]
                "
              >

                Book Free Demo

                <ArrowRight
                  size={14}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
