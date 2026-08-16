import Seo from "../components/common/Seo";
import LegalPage from "../components/common/LegalPage";

const SECTIONS = [
  {
    heading: "Acceptance",
    body: "By using this website you agree to these terms. Content is provided for informational purposes about SkillOrbit Academy programs.",
  },
  {
    heading: "Accuracy",
    body: "Course schedules, fees and availability may change. Confirm details with admissions before enrolling. Placeholder partner logos and testimonials are clearly marked.",
  },
  {
    heading: "Intellectual property",
    body: "Logo, brand assets and site content belong to SkillOrbit Academy Pvt. Ltd. unless otherwise noted.",
  },
  {
    heading: "Limitation",
    body: "This static demo site does not process payments or guarantee admissions, placements or salaries.",
  },
];

export default function Terms() {
  return (
    <>
      <Seo title="Terms of Use" description="SkillOrbit Academy's terms of use summary." path="/terms" />
      <LegalPage title="Terms of Use" sections={SECTIONS} />
    </>
  );
}
