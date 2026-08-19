import Seo from "../components/common/Seo";
import PlacementDreams from "../components/placements/PlacementDreams";
import Stats from "../components/home/Stats";
import Partners from "../components/home/Partners";
import PlacementRoadmap from "../components/placements/PlacementRoadmap";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

export default function Placements() {
  return (
    <>
      <Seo
        title="Placements"
        description="SkillOrbit Academy placement support: a 7-step journey from skill assessment to job offers, with resume guidance, mocks, drives and career support."
        path="/placements"
      />
      <PlacementDreams />
      <Stats />
      <div className="pt-8" />
      <PlacementRoadmap />
      <Partners />
      <Projects />
      <Testimonials />
      <CTASection />
    </>
  );
}
