
import Seo from "../components/common/Seo";
import LegalPage from "../components/common/LegalPage";

const SECTIONS = [
  {
    heading: "Introduction",
    body: `At SkillOrbit Academy (“SkillOrbit,” “we,” “our,” or “us”), we respect your privacy and are committed to protecting the personal information you share with us.

This Privacy Policy explains what information we may collect, how we use it, how we protect it, and the choices available to you when you use our website, courses, services, and communication channels.

By accessing or using the SkillOrbit Academy website or enrolling in our programs, you acknowledge that you have read and understood this Privacy Policy.`,
  },

  {
    heading: "1. Information We Collect",
    body: `We may collect information that you voluntarily provide to us when you interact with SkillOrbit Academy, including:

• Personal information: Name, email address, phone number, and other contact details.

• Educational information: Qualification, experience, interests, course preferences, and enrollment details.

• Payment information: Payment and billing details required to process course fees or other transactions.

• Communication information: Information you provide when contacting us through forms, email, WhatsApp, phone calls, or other communication channels.

• Website information: Basic technical information such as browser type, device information, IP address, and website interaction data, where applicable.

We only request information that is reasonably necessary for providing our services and communicating with you.`,
  },

  {
    heading: "2. How We Use Your Information",
    body: `SkillOrbit Academy may use your information to:

• Provide, manage, and improve our courses and educational services.

• Process registrations, enrollments, payments, and related transactions.

• Schedule and manage demo sessions, counselling sessions, and other interactions.

• Respond to enquiries, requests, and support queries.

• Send course-related updates, confirmations, reminders, and important notices.

• Share information about relevant courses, workshops, offers, or services where permitted.

• Understand how users interact with our website and improve the user experience.

• Maintain website security and prevent fraudulent, unauthorized, or harmful activity.

• Comply with applicable legal and regulatory requirements.`,
  },

  {
    heading: "3. How We Protect Your Information",
    body: `We take reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or loss.

Access to personal information is limited to authorized individuals and service providers who require the information for legitimate business or operational purposes.

However, no website, online service, or method of electronic transmission can be guaranteed to be completely secure. Therefore, while we take reasonable precautions, we cannot guarantee absolute security of information transmitted or stored electronically.`,
  },

  {
    heading: "4. Payment Information",
    body: `Payments may be processed through third-party payment gateways or financial service providers.

Where applicable, SkillOrbit Academy does not intentionally store complete card numbers, CVV numbers, UPI PINs, passwords, or other sensitive payment credentials on its own systems.

Payment information may be processed directly by the relevant payment service provider according to its own privacy and security practices.

You should review the privacy policy of the payment provider you use.`,
  },

  {
    heading: "5. Third-Party Services",
    body: `We may use trusted third-party service providers to support our operations, including services related to:

• Payment processing

• Email and communication

• WhatsApp or messaging services

• Website hosting and infrastructure

• Analytics and website performance

• Forms, scheduling, and customer support

These providers may process certain information on our behalf to perform specific services.

We aim to work with service providers that maintain appropriate safeguards for personal information.

We do not authorize third parties to use your personal information for purposes unrelated to the services they provide to SkillOrbit Academy, except where required or permitted by applicable law.`,
  },

  {
    heading: "6. Cookies and Website Technologies",
    body: `Our website may use cookies or similar technologies to improve functionality, understand website usage, remember preferences, and improve the overall user experience.

Our website may store limited information in your browser, such as theme preferences and cookie-consent preferences.

You may be able to control or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.

If we introduce analytics, advertising, or other tracking technologies, their use may also be governed by the applicable policies of those third-party providers.`,
  },

  {
    heading: "7. Communication and Marketing",
    body: `If you submit your contact details through our website, enquiry forms, demo booking forms, course registration forms, or other communication channels, we may contact you regarding:

• Your enquiry or registration

• Demo sessions or counselling

• Course information

• Enrollment or payment-related matters

• Important service updates

• Relevant educational programs or offers

Where applicable, you may request that we stop sending promotional communications. We will make reasonable efforts to honor such requests.`,
  },

  {
    heading: "8. Data Retention",
    body: `We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including providing services, maintaining business records, resolving disputes, enforcing agreements, and complying with legal or regulatory obligations.

The retention period may vary depending on the type of information and the purpose for which it was collected.

Form submissions may be stored in a Google Sheet used by the SkillOrbit Academy team for enquiry management and follow-up. We do not operate a separate server-side database for these website form submissions.`,
  },

  {
    heading: "9. Sharing of Personal Information",
    body: `We do not sell or rent your personal information to third parties.

We may share limited information when reasonably necessary with:

• Authorized employees or representatives of SkillOrbit Academy.

• Service providers assisting us with business operations.

• Payment and financial service providers for processing transactions.

• Professional or legal advisors where necessary.

• Government authorities or law-enforcement agencies when required by applicable law.

Any sharing of information will be limited to what is reasonably necessary for the relevant purpose, subject to applicable legal requirements.`,
  },

  {
    heading: "10. Your Privacy Choices",
    body: `Depending on applicable law, you may have rights regarding your personal information, including the ability to:

• Request information about personal data we hold about you.

• Request correction of inaccurate or incomplete information.

• Request deletion of personal information where legally applicable.

• Withdraw consent for certain communications.

• Opt out of promotional communications.

To make a privacy-related request, you can contact SkillOrbit Academy using the contact information provided on our website.

We may need to verify your identity before processing certain requests.`,
  },

  {
    heading: "11. Children's Privacy",
    body: `Our services are primarily intended for students, graduates, professionals, and individuals seeking education or career development.

We do not knowingly collect personal information from children in circumstances where such collection is prohibited by applicable law.

If you believe that a child has provided personal information to us without appropriate consent, please contact us so that we can review and take appropriate action.`,
  },

  {
    heading: "12. External Links",
    body: `Our website may contain links to third-party websites, platforms, or services, including social media and payment providers.

SkillOrbit Academy is not responsible for the privacy practices, content, security, or policies of third-party websites.

We encourage you to review their respective privacy policies before providing personal information.`,
  },

  {
    heading: "13. Changes to This Privacy Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or business practices.

When changes are made, we may update the “Last Updated” date at the top of this page.

We encourage you to review this page periodically to stay informed about how we handle personal information.`,
  },

  {
    heading: "14. Contact Us",
    body: `If you have questions, concerns, or requests regarding this Privacy Policy or the way SkillOrbit Academy handles your personal information, please contact us through the official contact details provided on our website.

SkillOrbit Academy

Email: info@skill-orbit.com

Phone: Please refer to the official contact details published on our website.

Location: Please refer to the official business location published on our website.`,
  },
];

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Read the SkillOrbit Academy Privacy Policy to understand how we collect, use, protect, and manage personal information."
        path="/privacy"
      />

      <LegalPage
        title="Privacy Policy"
        lastUpdated="September 2026"
        sections={SECTIONS}
      />
    </>
  );
}
