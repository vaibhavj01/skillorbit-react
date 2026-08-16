import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Stats from "../components/home/Stats";
import Partners from "../components/home/Partners";
import PlacementProcess from "../components/home/PlacementProcess";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

export default function Placements() {
  return (
    <>
      <Seo
        title="Placements"
        description="SkillOrbit Academy's placement support: resume guidance, mock interviews, hiring partner network and a structured six-step career process."
        path="/placements"
      />
      <PageHero
        title="Placement Support That Follows You to Interview Day"
        subtitle="A structured process — assessment, resume building, projects, mocks, interview prep and placement assistance — for eligible learners."
      />
      <Stats />
      <div className="pt-8" />
      <PlacementProcess />
      <Partners />
      <Projects />
      <Testimonials />
      <CTASection />
    </>
  );
}



// import PlacementHero from "../components/placements/PlacementHero";
// import PlacementStats from "../components/placements/PlacementStats";
// import WhyPlacementSupport from "../components/placements/WhyPlacementSupport";

// export default function Placements() {
//   return (
//     <main>
//       <PlacementHero />

//       {/* <PlacementStats /> */}

//       <WhyPlacementSupport />
//     </main>
//   );
// }