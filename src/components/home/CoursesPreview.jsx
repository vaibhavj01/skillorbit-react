import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import CourseGrid from "../courses/CourseGrid";
import { courses } from "../../data/courses";

export default function CoursesPreview() {
  const featured = courses.slice(0, 8);

  return (
    <section
      id="courses"
      className="
        relative
        overflow-hidden

        bg-[#050505]

        py-16

        sm:py-20

        md:py-24

        lg:py-28
      "
    >

      {/* =====================================================
          BACKGROUND GREEN GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-0

          h-[350px]
          w-[600px]

          -translate-x-1/2

          rounded-full

          bg-green-500/[0.05]

          blur-[110px]
        "
      />

      {/* =====================================================
          SECONDARY GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          -right-32
          bottom-0

          h-[300px]
          w-[300px]

          rounded-full

          bg-green-400/[0.035]

          blur-[100px]
        "
      />


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <Container
        className="
          relative
          z-10
        "
      >

        {/* ===================================================
            SECTION HEADING
        ==================================================== */}

        <div
          className="
            [&_p]:text-[#5F6F78]
            [&_h2]:text-[#16324F] 
          "
        >

          <SectionHeading
            eyebrow="Programs"
            title="Learn Skills That Companies Need"
            subtitle="Industry-focused technology programs for students, freshers, working professionals and career switchers. Click any course to view full details."
          />

        </div>


        {/* ===================================================
            COURSE GRID
        ==================================================== */}

        <div
          className="
            mt-8

            sm:mt-10

            md:mt-12
          "
        >

          <CourseGrid courses={featured} />

        </div>


        {/* ===================================================
            VIEW ALL BUTTON
        ==================================================== */}

        <Reveal
          className="
            mt-10
            text-center

            sm:mt-12

            md:mt-14
          "
        >

          <Button
            to="/courses"
            variant="outline"
            size="md"
            className="
              border-green-500/40
              text-[#0F9D78]


              hover:border-green-400
              hover:bg-[#0F9D78]
              hover:text-black
            "
          >
            View All Courses
          </Button>

        </Reveal>

      </Container>

    </section>
  );
}