import { lazy, Suspense } from "react";
import Seo from "../components/common/Seo";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Partners from "../components/home/Partners";
import WhyFeatures from "../components/home/WhyFeatures";
import PageFallback from "../components/common/PageFallback";

const HomeBelowFold = lazy(() => import("./HomeBelowFold"));

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
      <Suspense fallback={<PageFallback />}>
        <HomeBelowFold />
      </Suspense>
    </>
  );
}
