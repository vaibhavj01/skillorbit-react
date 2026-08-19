import Seo from "../components/common/Seo";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import GenAIBatchAd from "../components/home/GenAIBatchAd";
import Partners from "../components/home/Partners";
import WhyFeatures from "../components/home/WhyFeatures";
import CoursesPreview from "../components/home/CoursesPreview";
import Batches from "../components/home/Batches";
import Projects from "../components/home/Projects";
import PlacementRoadmap from "../components/placements/PlacementRoadmap";
import Testimonials from "../components/home/Testimonials";
import IsoCertification from "../components/home/IsoCertification";
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
      <GenAIBatchAd />
      <Partners />
      <WhyFeatures />
      <CoursesPreview />
      <Batches />
      <Projects />
      <PlacementRoadmap />
      <Testimonials />
      <IsoCertification />
      <BlogPreview />
      <FAQ />
      <RoadmapPerks />
      <CTASection />
    </>
  );
}
