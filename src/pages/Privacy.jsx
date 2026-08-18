import Seo from "../components/common/Seo";
import LegalPage from "../components/common/LegalPage";

const SECTIONS = [
  {
    heading: "Overview",
    body: "This website may store limited data in your browser (theme preference, cookie consent). Form submissions are saved to a Google Sheet used by the SkillOrbit team. We do not operate a separate server-side database on this site.",
  },
  {
    heading: "Information you provide",
    body: "When you use contact, demo, or callback forms, your details are added to one Google Sheet so the team can follow up. You can also email or call us using the published contact details.",
  },
  {
    heading: "Cookies",
    body: "Essential cookies or localStorage keys remember theme and consent. Declining cookies keeps the site usable without storing non-essential preferences.",
  },
  {
    heading: "Contact",
    body: "For privacy questions, email info@skill-orbit.com.",
  },
];

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" description="SkillOrbit Academy's privacy policy summary." path="/privacy" />
      <LegalPage title="Privacy Policy" sections={SECTIONS} />
    </>
  );
}
