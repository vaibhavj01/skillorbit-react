
import Seo from "../components/common/Seo";
import LegalPage from "../components/common/LegalPage";

const SECTIONS = [
  {
    heading: "1. Acceptance of Terms",
    body: `Welcome to SkillOrbit Academy.

By accessing or using the SkillOrbit Academy website, services, courses, or related platforms, you agree to comply with and be bound by these Terms & Conditions.

If you do not agree with any part of these Terms & Conditions, please do not use our website or services.

These Terms & Conditions apply to all visitors, users, students, applicants, and individuals who interact with SkillOrbit Academy.`,
  },

  {
    heading: "2. Use of Website",
    body: `The content available on the SkillOrbit Academy website is provided for general informational and educational purposes.

You agree to use the website only for lawful purposes and in a manner that does not violate applicable laws, regulations, or the rights of SkillOrbit Academy or any third party.

You must not:

• Use the website for fraudulent, unlawful, or unauthorized purposes.

• Attempt to gain unauthorized access to the website, its systems, accounts, or data.

• Introduce malicious software, harmful code, or other technologies that may affect the website.

• Copy, reproduce, modify, distribute, or commercially exploit website content without appropriate permission.

Unauthorized use of this website may result in termination of access and may give rise to legal action where applicable.`,
  },

  {
    heading: "3. Course Enrollment",
    body: `Enrollment in any SkillOrbit Academy course or program is subject to availability, eligibility requirements, and confirmation by the academy.

Submitting an enquiry, registration form, demo request, or application does not automatically guarantee admission or enrollment.

Course enrollment may be confirmed only after the applicable registration or course fee requirements have been completed and the enrollment has been accepted by SkillOrbit Academy.

SkillOrbit Academy reserves the right to modify course content, curriculum, schedules, trainers, delivery methods, course duration, or fees when reasonably necessary.

Where significant changes affect an enrolled student, SkillOrbit Academy will make reasonable efforts to communicate such changes.`,
  },

  {
    heading: "4. Course Fees and Payments",
    body: `Applicable course fees, payment schedules, installment terms, and other charges will be communicated to students before enrollment or payment.

Students are responsible for providing accurate payment and billing information.

Where payments are processed through a third-party payment gateway or financial service provider, the transaction may also be subject to that provider's terms and policies.

Payment confirmation does not by itself create a guarantee of employment, placement, salary, promotion, or any particular career outcome.`,
  },

  {
    heading: "5. Refunds and Cancellations",
    body: `Refunds, cancellations, transfers, or changes to course enrollment are subject to the applicable refund and cancellation policy of SkillOrbit Academy.

Please review the Refund & Cancellation Policy before making a course payment.

Any refund request must be submitted through the official communication channels of SkillOrbit Academy and may be subject to applicable eligibility conditions, timelines, and deductions.`,
  },

  {
    heading: "6. Intellectual Property",
    body: `All website content and materials provided by SkillOrbit Academy, including but not limited to logos, branding, text, graphics, videos, course materials, notes, presentations, designs, documents, illustrations, and other educational resources, are owned by or licensed to SkillOrbit Academy unless otherwise stated.

You may use course materials only for your personal educational purposes and in accordance with the applicable course terms.

You must not reproduce, publish, distribute, sell, upload, share, modify, or commercially exploit SkillOrbit Academy materials without prior written permission.

Unauthorized use or redistribution of educational materials may result in termination of access and appropriate legal action.`,
  },

  {
    heading: "7. User Responsibilities",
    body: `When using SkillOrbit Academy services, you agree to provide accurate, current, and complete information.

You are responsible for:

• Providing accurate information during registration or enrollment.

• Maintaining the confidentiality of your account credentials, where applicable.

• Using course materials only for permitted educational purposes.

• Following academy rules and reasonable instructions.

• Treating trainers, staff, counsellors, students, and other users respectfully.

• Not engaging in abusive, threatening, fraudulent, disruptive, or unlawful behavior.

SkillOrbit Academy may restrict or terminate access to its services where a user violates these Terms & Conditions or applicable academy policies.`,
  },

  {
    heading: "8. Career, Placement and Employment Disclaimer",
    body: `SkillOrbit Academy provides education, training, career guidance, and related support intended to improve students' knowledge and career readiness.

However, completion of a course does not guarantee:

• Employment or placement.

• A particular job role.

• A specific salary or salary increase.

• Promotion or career advancement.

• Selection by any particular company.

Career outcomes depend on multiple factors, including individual skills, experience, qualifications, interview performance, market conditions, employer requirements, and other circumstances outside the control of SkillOrbit Academy.

Any placement assistance, interview preparation, job referrals, or career support offered by SkillOrbit Academy should not be interpreted as a guarantee of employment.`,
  },

  {
    heading: "9. Course Content and Accuracy",
    body: `We make reasonable efforts to provide accurate and useful educational information.

However, technology, tools, software, industry practices, and job requirements may change over time.

SkillOrbit Academy may update or modify course content to keep programs relevant.

Course descriptions, schedules, trainers, fees, features, and availability displayed on the website may change from time to time.

Users should confirm the latest course information with SkillOrbit Academy before enrollment.`,
  },

  {
    heading: "10. Third-Party Services and Links",
    body: `The SkillOrbit Academy website may contain links to third-party websites, platforms, payment providers, social media services, or other external resources.

These third-party services operate independently and may have their own terms, policies, and privacy practices.

SkillOrbit Academy is not responsible for the availability, content, security, accuracy, or policies of third-party websites or services.

You should review the applicable terms and privacy policies before using third-party services.`,
  },

  {
    heading: "11. Limitation of Liability",
    body: `To the extent permitted by applicable law, SkillOrbit Academy shall not be responsible for indirect, incidental, consequential, special, or unforeseeable losses arising from the use of the website, courses, educational materials, or services.

SkillOrbit Academy does not guarantee that the website or its services will always be available, uninterrupted, error-free, or completely secure.

Nothing in these Terms & Conditions is intended to exclude or limit liability where such exclusion or limitation is not permitted under applicable law.`,
  },

  {
    heading: "12. Suspension or Termination",
    body: `SkillOrbit Academy may suspend, restrict, or terminate a user's access to its website, courses, learning materials, or services if the user:

• Violates these Terms & Conditions.

• Misuses course materials or intellectual property.

• Engages in abusive, fraudulent, threatening, or unlawful conduct.

• Provides false or misleading information.

• Attempts to compromise the security or operation of the website.

Termination of access does not necessarily remove any rights or obligations that arose before termination.`,
  },

  {
    heading: "13. Changes to These Terms",
    body: `SkillOrbit Academy may update these Terms & Conditions from time to time to reflect changes in our services, courses, business practices, technology, or applicable legal requirements.

Updated Terms & Conditions will be published on this page.

Your continued use of the website or services after changes are published may constitute acceptance of the updated Terms & Conditions.`,
  },

  {
    heading: "14. Governing Law",
    body: `These Terms & Conditions shall be governed by and interpreted in accordance with the applicable laws of India.

Any disputes arising in connection with these Terms & Conditions or the use of SkillOrbit Academy services shall be subject to the jurisdiction of the appropriate courts in India, subject to applicable law.`,
  },

  {
    heading: "15. Contact Us",
    body: `If you have questions regarding these Terms & Conditions, course enrollment, payments, cancellations, or any other SkillOrbit Academy service, please contact us through the official contact details published on our website.

SkillOrbit Academy

Email: info@skill-orbit.com

Phone: Please refer to the official contact details published on our website.

Location: Please refer to the official business location published on our website.`,
  },
];

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Read the SkillOrbit Academy Terms & Conditions covering website use, course enrollment, payments, intellectual property, user responsibilities, and other policies."
        path="/terms"
      />

      <LegalPage
        title="Terms & Conditions"
        lastUpdated="September 2026"
        sections={SECTIONS}
      />
    </>
  );
}

