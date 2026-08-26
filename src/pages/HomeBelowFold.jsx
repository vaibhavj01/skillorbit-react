import CoursesPreview from "../components/home/CoursesPreview";
import Batches from "../components/home/Batches";
import PlacementRoadmap from "../components/placements/PlacementRoadmap";
import Testimonials from "../components/home/Testimonials";
import IsoCertification from "../components/home/IsoCertification";
import FAQ from "../components/home/FAQ";
import CTASection from "../components/home/CTASection";

export default function HomeBelowFold() {
  return (
    <>
      <CoursesPreview />
      <Batches />
      <PlacementRoadmap />
      <Testimonials />
      <IsoCertification />
      <FAQ />
      <CTASection />
    </>
  );
}
