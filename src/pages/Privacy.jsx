import Seo from "../components/common/Seo";
import LegalPage from "../components/common/LegalPage";

const SECTIONS = [
  {
    heading: "Overview",
    body: "This static website stores limited data in your browser (theme preference, cookie consent, wishlist and simulated form submissions). We do not operate a server-side database on this site.",
  },
  {
    heading: "Information you provide",
    body: "When you use contact or demo forms, details are validated and saved locally in your browser for demonstration. For real enquiries, please email or call us using the published contact details.",
  },
  {
    heading: "Cookies",
    body: "Essential cookies or localStorage keys remember theme and consent. Declining cookies keeps the site usable without storing non-essential preferences.",
  },
  {
    heading: "Contact",
    body: "For privacy questions, email skillorbit@gmail.com.",
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
