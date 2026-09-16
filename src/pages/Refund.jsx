
import Seo from "../components/common/Seo";
import LegalPage from "../components/common/LegalPage";

const SECTIONS = [
  {
    heading: "1. General Payment Policy",
    body: `All payments made to SkillOrbit Academy for courses, programs, training, workshops, or other paid services are subject to this Refund & Cancellation Policy.

Before making a payment, students are encouraged to review the applicable course details, fee structure, payment schedule, and refund conditions.

Where specific refund or cancellation terms are provided during enrollment or in a written agreement, those terms may apply to the relevant program.`,
  },

  {
    heading: "2. Course Fees",
    body: `Course fees and applicable charges will be communicated to the student before enrollment.

By completing a course payment, the student acknowledges that they have reviewed the applicable course information and payment terms.

Course fees may include tuition, training, learning resources, registration charges, or other applicable charges depending on the selected program.

Any installment or payment plan agreed at the time of enrollment must be followed according to the applicable payment schedule.`,
  },

  {
    heading: "3. Refund Policy",
    body: `Refund eligibility depends on the circumstances and the applicable course or program terms.

• No refund will generally be provided once the course or training program has commenced.

• If SkillOrbit Academy cancels a course before it begins and is unable to provide an alternative batch or mutually agreed arrangement, a full refund of the applicable course fee may be issued.

• Where a refund is permitted, the request should be submitted before the course commencement date.

• Refund eligibility may be affected if the student has already received access to course materials, resources, services, or other benefits associated with the enrollment.

• Any applicable administrative, transaction, or processing charges may be deducted from an eligible refund where permitted.`,
  },

  {
    heading: "4. Cancellation Policy",
    body: `Students who wish to cancel their enrollment before the course start date should contact SkillOrbit Academy through the official support or admissions channels as soon as possible.

Cancellation requests should include the student's name, registered contact details, course name, enrollment information, and reason for cancellation where relevant.

Cancellation requests received after the course has commenced may not be eligible for a refund.

SkillOrbit Academy may review individual circumstances and determine eligibility in accordance with the applicable course terms and this policy.`,
  },

  {
    heading: "5. Duplicate Payments and Payment Errors",
    body: `If a student is charged more than once for the same course or transaction due to a duplicate payment, payment gateway issue, technical error, or other verified transaction problem, the excess amount may be refunded after verification.

Students should contact SkillOrbit Academy as soon as they identify a duplicate or incorrect payment.

After verification and confirmation of the duplicate transaction, the eligible excess amount will generally be refunded within 7–10 working days, subject to the processing timelines of the relevant bank or payment service provider.`,
  },

  {
    heading: "6. Failed or Pending Transactions",
    body: `In some cases, a payment may appear as failed, pending, or incomplete while the amount has temporarily been debited from the student's bank account.

Students should avoid making repeated payments immediately if the transaction status is unclear.

Please contact SkillOrbit Academy with the transaction details so that the payment status can be verified.

If the amount was debited but the payment was not successfully received by SkillOrbit Academy, the transaction will be handled according to the applicable payment gateway or banking process.`,
  },

  {
    heading: "7. Demo Sessions and Counselling",
    body: `Free demo sessions, introductory sessions, and counselling sessions provided without charge do not involve a course fee and therefore do not qualify for a monetary refund.

If a paid session or service is offered separately, its applicable cancellation and refund terms will be communicated before payment.`,
  },

  {
    heading: "8. Mode of Refund",
    body: `Where a refund is approved, it will generally be processed using the original payment method used for the transaction.

Depending on the payment gateway, bank, or financial institution, the time required for the refunded amount to appear in the student's account may vary.

SkillOrbit Academy is not responsible for delays caused by banks, payment gateways, or other financial institutions after the refund has been initiated.`,
  },

  {
    heading: "9. How to Request a Refund",
    body: `To request a refund or cancellation, contact SkillOrbit Academy using the official contact details published on our website.

For faster processing, include:

• Full name

• Registered email address

• Registered phone number

• Course or program name

• Enrollment or payment details

• Transaction ID or payment reference, where available

• Reason for the refund or cancellation request

Refund requests will be reviewed and processed according to the applicable terms and eligibility requirements.`,
  },

  {
    heading: "10. Processing Time",
    body: `Once a refund has been approved, SkillOrbit Academy will initiate the refund within the applicable processing period.

For verified duplicate payments or technical payment errors, eligible refunds are generally processed within 7–10 working days after verification.

The actual time for the funds to reach the original payment account may depend on the payment gateway, bank, or financial institution.`,
  },

  {
    heading: "11. Changes to This Policy",
    body: `SkillOrbit Academy may update this Refund & Cancellation Policy from time to time to reflect changes in our courses, payment processes, services, or applicable requirements.

Any updated version will be published on this page with the revised date.

Students are encouraged to review the applicable refund terms before making a course payment.`,
  },

  {
    heading: "12. Contact Us",
    body: `For questions regarding payments, cancellations, or refund requests, please contact SkillOrbit Academy through our official contact details.

SkillOrbit Academy

Email: info@skill-orbit.com

Phone: +91 7276323332.

Location: FL 3 2ND FLOOR EXCLUSIVE,APT ,S NO 134 5 6 1.. BANER GAON,HAVELI, PUNE,
MAHARASHTRA, INDIA, 411045`,
  },
];

export default function Refund() {
  return (
    <>
      <Seo
        title="Refund & Cancellation Policy"
        description="Read the SkillOrbit Academy Refund & Cancellation Policy covering course fees, cancellations, refunds, duplicate payments, payment errors, and refund processing."
        path="/refund"
      />

      <LegalPage
        title="Refund & Cancellation Policy"
        lastUpdated="September 2026"
        sections={SECTIONS}
      />
    </>
  );
}

