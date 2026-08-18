import Seo from "../components/common/Seo";
import CorporateHero from "../components/corporate/CorporateHero";
import CorporateClients from "../components/corporate/CorporateClients";
import CorporatePOV from "../components/corporate/CorporatePOV";
import CorporateAbout from "../components/corporate/CorporateAbout";
import CorporateLeadership from "../components/corporate/CorporateLeadership";
import CorporateInquiry from "../components/corporate/CorporateInquiry";
import DemandCoursesCarousel from "../components/certificates/DemandCoursesCarousel";
import "../styles/corporate.css";

export default function Corporate() {
  return (
    <>
      <Seo
        title="Corporate Training"
        description="Upskill your team in Data Analytics, Java Full Stack, and Python Full Stack with SkillOrbit — classroom, online, or hybrid from Baner, Hinjawadi, and Wakad, Pune."
        path="/corporate"
      />
      <CorporateHero />
      <CorporateClients />
      <CorporatePOV />
      <CorporateAbout />
      <CorporateLeadership />
      <CorporateInquiry />
      <DemandCoursesCarousel />
    </>
  );
}
