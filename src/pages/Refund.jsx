import Seo from "../components/common/Seo";
import LegalPage from "../components/common/LegalPage";

const SECTIONS = [
  {
    heading: "General",
    body: "Fee and refund terms are program-specific and confirmed at enrolment. This webpage is a high-level summary only.",
  },
  {
    heading: "Demo sessions",
    body: "Free demo and counselling sessions do not involve fees and therefore have no refunds.",
  },
  {
    heading: "Withdrawals",
    body: "If you need to withdraw after enrolment, contact admissions promptly. Eligibility for partial refunds depends on the batch start date and written policy shared at registration.",
  },
  {
    heading: "How to request",
    body: "Email skillorbit@gmail.com with your enrolment details. Our team will respond with next steps.",
  },
];

export default function Refund() {
  return (
    <>
      <Seo title="Refund Policy" description="SkillOrbit Academy's refund policy summary." path="/refund" />
      <LegalPage title="Refund Policy" sections={SECTIONS} />
    </>
  );
}
