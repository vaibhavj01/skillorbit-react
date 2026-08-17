import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import { CONTACT } from "../data/siteConfig";
import OrbitBackdrop from "../components/common/OrbitBackdrop";

export default function Careers() {
  return (
    <>
      <Seo title="Careers" description="Open roles at SkillOrbit Academy will be listed here. Send your resume to be considered for future openings." path="/careers" />
      <PageHero title="Careers at SkillOrbit" subtitle="We are building a next-generation IT education platform. Open roles will be listed here." />

      <section className="relative overflow-hidden bg-[#E7F7F0] py-16 md:py-24">
        <OrbitBackdrop variant="mint" />
        <Container className="relative z-10 max-w-xl">
          <Reveal className="rounded-3xl border border-[#35D0A5]/20 bg-[#F3FBF7] p-10 text-center md:p-14">
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
