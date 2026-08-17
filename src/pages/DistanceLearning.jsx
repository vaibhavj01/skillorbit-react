import { BookOpen, Users, Target, Clock, Award, Wifi } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import CourseGrid from "../components/courses/CourseGrid";
import LearningModels from "../components/home/LearningModels";
import FAQ from "../components/home/FAQ";
import CTASection from "../components/home/CTASection";
import { courses } from "../data/courses";
import OrbitBackdrop from "../components/common/OrbitBackdrop";

const BENEFITS = [
  { icon: BookOpen, title: "Guided curriculum", text: "Week-by-week modules with clear milestones and recorded sessions." },
  { icon: Users, title: "Mentor support", text: "Scheduled doubt-clearing calls and progress reviews with faculty." },
  { icon: Target, title: "Career track", text: "Projects and interview prep built into the distance learning journey." },
  { icon: Clock, title: "Flexible pace", text: "Study around your job or other commitments, with clear deadlines." },
  { icon: Award, title: "Certification", text: "Earn a SkillOrbit certificate on completing course requirements." },
  { icon: Wifi, title: "Learn from anywhere", text: "All you need is an internet connection — no relocation required." },
];

export default function DistanceLearning() {
  const distanceCourses = courses.filter((c) => (c.mode || []).includes("Distance Learning")).slice(0, 8);
  const fallbackCourses = distanceCourses.length ? distanceCourses : courses.slice(0, 8);

  return (
    <>
      <Seo
        title="Distance Learning"
        description="Learn remotely with SkillOrbit Academy's Distance Learning programs — structured content, mentor support and career guidance from anywhere."
        path="/distance-learning"
      />
      <PageHero
        title="Learn Remotely. Stay Accountable."
        subtitle="Structured content, mentor check-ins and career guidance — designed for professionals and students who can't attend daily classroom sessions."
      />

      <section className="relative overflow-hidden bg-[#E7F7F0] py-16 md:py-20">
        <OrbitBackdrop variant="mint" />
        <Container className="relative z-10">
          <SectionHeading eyebrow="Why Distance Learning" title="Built for Real Life, Not Just a Classroom" align="left" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="h-full p-6 rounded-2xl border border-line bg-surface-bg">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-brand-100">
                    <b.icon size={19} className="text-brand-700" />
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-ink">{b.title}</h3>
                  <p className="text-sm text-ink-muted">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#E7F7F0] py-16 md:py-20">
        <OrbitBackdrop variant="mint" />
        <Container className="relative z-10">
          <SectionHeading eyebrow="Programs" title="Available in Distance Learning" subtitle="These programs currently support the Distance Learning mode." />
          <CourseGrid courses={fallbackCourses} />
          <Reveal className="text-center mt-12">
            <Button to="/courses" variant="outline" size="md">Browse All Courses</Button>
          </Reveal>
        </Container>
      </section>

      <LearningModels />
      <FAQ />
      <CTASection />
    </>
  );
}
