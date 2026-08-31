import Seo from "../components/common/Seo";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import ContactForm from "../components/forms/ContactForm";
import CertificateHero from "../components/certificates/CertificateHero";
import CertificateSample from "../components/certificates/CertificateSample";
import DemandCoursesCarousel from "../components/certificates/DemandCoursesCarousel";
import { CONTACT } from "../data/siteConfig";
import OrbitBackdrop from "../components/common/OrbitBackdrop";

const POINTS = [
  "Course completion certificates after assessments",
  "Support for certificate verification by employers",
  "Guidance on certification-oriented programs such as AWS",
];

export default function Certificates() {
  return (
    <>
      <Seo
        title="Certificates"
        description="Earn industry-recognized SkillOrbit certificates, verify credentials, and go confidently toward your career goals."
        path="/certificates"
      />

      <CertificateHero />

      <CertificateSample />

      <section className="relative overflow-hidden bg-surface-bg so-section">
        <OrbitBackdrop variant="mint" />
        <Container className="relative z-10 grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
              Verify or request
            </p>
            <h2 className="mb-4 font-display text-h2 font-bold text-ink">
              Need a certificate or verification?
            </h2>
            <p className="mb-6 max-w-md text-sm leading-7 text-ink-light">
              Tell us your name, course and batch. Our team can share a completion
              certificate or help an employer verify your credential.
            </p>
            <ul className="space-y-4">
              {POINTS.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-brand-primary/20 bg-surface px-5 py-4 text-sm leading-relaxed text-ink-light shadow-sm"
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

          <Reveal delay={0.08} className="rounded-3xl border border-brand-primary/20 bg-surface p-6 sm:p-8">
            <h2 className="mb-2 font-display text-lg font-bold text-ink">Send a request</h2>
            <p className="mb-6 text-sm text-ink-muted">
              Share your details and our team will get back to you within one business day.
            </p>
            <ContactForm
              leadSource="Certificates"
              defaultMessage="I would like help with a SkillOrbit certificate."
            />
          </Reveal>
        </Container>
      </section>

      <DemandCoursesCarousel />
    </>
  );
}
