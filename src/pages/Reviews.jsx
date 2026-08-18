import Seo from "../components/common/Seo";
import ReviewsHero from "../components/reviews/ReviewsHero";
import ReviewsFeed from "../components/reviews/ReviewsFeed";
import DemandCoursesCarousel from "../components/certificates/DemandCoursesCarousel";
import CTASection from "../components/home/CTASection";
import "../styles/reviews.css";

export default function Reviews() {
  return (
    <>
      <Seo
        title="Student Reviews"
        description="Read SkillOrbit learner feedback on Data Analytics, Java Full Stack, and Python Full Stack — labs, GitHub work, and placement support from Baner, Hinjawadi, and Wakad."
        path="/reviews"
      />
      <ReviewsHero />
      <ReviewsFeed />
      <CTASection />
      <DemandCoursesCarousel />
    </>
  );
}
