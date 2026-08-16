import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import CourseGrid from "../courses/CourseGrid";
import { courses } from "../../data/courses";

export default function CoursesPreview() {
  const featured = courses.slice(0, 8);
  return (
    <section id="courses" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Programs"
          title="Learn Skills That Companies Need"
          subtitle="Industry-focused technology programs for students, freshers, working professionals and career switchers. Click any course to view full details."
        />
        <CourseGrid courses={featured} />
        <Reveal className="text-center mt-12">
          <Button to="/courses" variant="outline" size="md">
            View All Courses
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
