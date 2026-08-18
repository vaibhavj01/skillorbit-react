import Seo from "../components/common/Seo";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Partners from "../components/home/Partners";
import WhyFeatures from "../components/home/WhyFeatures";
import CoursesPreview from "../components/home/CoursesPreview";
import Batches from "../components/home/Batches";
import LearningModels from "../components/home/LearningModels";
import DistanceLearningPreview from "../components/home/DistanceLearningPreview";
import Projects from "../components/home/Projects";
import PlacementRoadmap from "../components/placements/PlacementRoadmap";
import Testimonials from "../components/home/Testimonials";
import BlogPreview from "../components/home/BlogPreview";
import FAQ from "../components/home/FAQ";
import RoadmapPerks from "../components/home/RoadmapPerks";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Seo
        title="Build Skills. Build Careers. Build Your Future."
        description="SkillOrbit Academy is a Pune-based IT training and distance learning institute offering industry-focused courses with placement support."
        path="/"
      />
      <Hero />
      <Stats />
      <Partners />
      <WhyFeatures />
      <CoursesPreview />
      <Batches />
      <LearningModels />
      <DistanceLearningPreview />
      <Projects />
      <PlacementRoadmap />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <RoadmapPerks />
      <CTASection />
    </>
  );
}
