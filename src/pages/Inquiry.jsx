import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import ContactForm from "../components/forms/ContactForm";
import Button from "../components/common/Button";
import { CONTACT } from "../data/siteConfig";
import OrbitBackdrop from "../components/common/OrbitBackdrop";
import Corporate from "./Corporate";

const TOPICS = {
  corporate: {
    title: "Corporate Training",
    subtitle: "Upskill your team with industry-ready IT programs, custom batches and dedicated mentorship.",
    path: "/corporate",
    message: "I would like to discuss corporate training for my team.",
    leadSource: "Corporate",
    points: [
      "Customized full-stack, cloud, testing and data programs",
      "Online, classroom or hybrid delivery for your employees",
      "Progress tracking, assessments and completion certificates",
    ],
  },
  certificates: {
    title: "Certificates",
    subtitle: "Verify a SkillOrbit certificate or request a completion certificate for a program you finished.",
    path: "/certificates",
    message: "I would like help with a SkillOrbit certificate.",
    leadSource: "Certificates",
    points: [
      "Course completion certificates after assessments",
      "Support for certificate verification by employers",
      "Guidance on certification-oriented programs such as AWS",
    ],
  },
  webinar: {
    title: "Webinars",
    subtitle: "Join free live sessions on careers, tools and upcoming batches — or request a private demo webinar.",
    path: "/webinar",
    message: "Please share upcoming webinar dates and a seat for me.",
    leadSource: "Webinar",
    points: [
      "Live career guidance and tool walkthroughs",
      "Meet mentors before you enrol",
      "Recordings shared with registered learners",
    ],
  },
  csr: {
    title: "CSR & Community",
    subtitle: "Partner with SkillOrbit for education outreach, student scholarships and skilling initiatives.",
    path: "/csr",
    message: "I would like to explore a CSR or community skilling partnership.",
    leadSource: "CSR",
    points: [
      "Skill development programs for students and freshers",
      "Scholarship and sponsored-seat options",
      "Campus and NGO collaboration support",
    ],
  },
  referral: {
    title: "Referral Program",
    subtitle: "Refer a friend or colleague to SkillOrbit and we will help them pick the right course.",
    path: "/referral",
    message: "I would like to refer someone to a SkillOrbit course.",
    leadSource: "Referral",
    points: [
      "Share a course with friends, classmates or teammates",
      "Our counsellors will guide them on batches and fees",
      "Ask us about current referral benefits when you write in",
    ],
  },
  feedback: {
    title: "Feedback",
    subtitle: "Tell us what went well and what we can improve — every message is reviewed by the academy team.",
    path: "/feedback",
    message: "I would like to share feedback about SkillOrbit.",
    leadSource: "Feedback",
    points: [
      "Course content, trainers and support",
      "Website, batches or counselling experience",
      "We typically respond within one business day",
    ],
  },
};

export default function Inquiry({ topic = "corporate" }) {
  if (topic === "corporate") {
    return <Corporate />;
  }

  const page = TOPICS[topic] || TOPICS.corporate;

  return (
    <>
      <Seo title={page.title} description={page.subtitle} path={page.path} />
      <PageHero title={page.title} subtitle={page.subtitle} />

      <section className="relative overflow-hidden bg-[#071313] py-16 md:py-20">
        <OrbitBackdrop variant="night" />
        <Container className="relative z-10 grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-4">
              {page.points.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-[#7CFF00]/20 bg-[#0d1c16] px-5 py-4 text-sm leading-relaxed text-ink-light shadow-sm"
                >
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={CONTACT.phoneHref} variant="outline" size="md">
                Call {CONTACT.phoneDisplay}
              </Button>
              <Button href={CONTACT.whatsappHref} variant="primary" size="md" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-3xl border border-[#7CFF00]/20 bg-[#0d1c16] p-6 sm:p-8">
            <h2 className="mb-2 font-display text-lg font-bold text-ink">Send a request</h2>
            <p className="mb-6 text-sm text-ink-muted">
              Share your details and our team will get back to you within one business day.
            </p>
            <ContactForm defaultMessage={page.message} leadSource={page.leadSource} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
