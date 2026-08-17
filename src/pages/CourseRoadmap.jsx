import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Map, Target } from "lucide-react";
import Seo from "../components/common/Seo";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import OrbitBackdrop from "../components/common/OrbitBackdrop";
import RoadmapPath from "../components/courses/RoadmapPath";
import { getCourseBySlug, categoryLabel } from "../data/courses";
import { getCourseRoadmap } from "../data/roadmaps";

function roadmapFromCurriculum(course) {
  const items = course.curriculum || [];
  if (!items.length) return null;

  return {
    intro: `A SkillOrbit learning path for ${course.name}, based on the course curriculum.`,
    outcome: course.careerPath || "Job-ready skill path",
    stages: items.map((title, index) => ({
      title,
      subtitle: `Module ${index + 1}`,
      nodes: [{ title: "Focus", topics: [title] }],
    })),
  };
}

export default function CourseRoadmap() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!course) return <Navigate to="/courses" replace />;

  const roadmap = getCourseRoadmap(course.slug) || getCourseRoadmap(course.id) || roadmapFromCurriculum(course);

  if (!roadmap) return <Navigate to={`/courses/${course.slug}`} replace />;

  return (
    <>
      <Seo
        title={`${course.name} Roadmap`}
        description={roadmap.intro}
        path={`/courses/${course.slug}/roadmap`}
      />

      <section className="relative overflow-hidden bg-[#051912] pb-20 pt-28 md:pb-28 md:pt-36">
        <OrbitBackdrop variant="night" />
        <Container className="relative z-10">
          <Link
            to={`/courses/${course.slug}`}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#7CFF00]"
          >
            <ArrowLeft size={16} /> Back to {course.name}
          </Link>

          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7CFF00]">
              <Map size={14} /> Course roadmap
            </p>
            <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
              {course.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
              {roadmap.intro}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#7CFF00]/40 bg-[#7CFF00]/10 px-4 py-2 text-sm font-semibold text-[#7CFF00]">
              <Target size={15} /> Outcome: {roadmap.outcome}
            </p>
          </Reveal>

          <Reveal>
            <RoadmapPath title={course.name} stages={roadmap.stages} />
          </Reveal>

          <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Button to={`/courses/${course.slug}`} variant="primary" size="md">
              View course details <ArrowRight size={16} />
            </Button>
            <Button to="/contact" variant="outline" size="md" className="border-[#7CFF00] text-[#7CFF00]">
              Book a free demo
            </Button>
          </Reveal>

          <p className="mt-6 text-center text-xs text-white/45">
            This is SkillOrbit’s in-house learning path for {categoryLabel(course.category)}.
          </p>
        </Container>
      </section>
    </>
  );
}
