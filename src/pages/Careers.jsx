import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import { CONTACT } from "../data/siteConfig";

export default function Careers() {
  return (
    <>
      <Seo title="Careers" description="Open roles at SkillOrbit Academy will be listed here. Send your resume to be considered for future openings." path="/careers" />
      <PageHero title="Careers at SkillOrbit" subtitle="We are building a next-generation IT education platform. Open roles will be listed here." />

      <section className="py-16 md:py-24">
        <Container className="max-w-xl">
          <Reveal className="text-center p-10 md:p-14 rounded-3xl border border-line bg-white">
            <h2 className="font-display font-bold text-xl text-ink mb-2">No open positions right now</h2>
            <p className="text-sm text-ink-muted mb-6 leading-relaxed">
              This is a placeholder careers page. Send your resume to{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-brand-700 underline decoration-dotted">{CONTACT.email}</a>{" "}
              with the subject "Careers — [Role]" and we will keep you in mind for future openings.
            </p>
            <Button to="/contact" variant="primary" size="md">Contact Us</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
