import PageHero from "./PageHero";
import Container from "./Container";
import Reveal from "./Reveal";
import { CONTACT } from "../../data/siteConfig";
import OrbitBackdrop from "./OrbitBackdrop";

export default function LegalPage({ title, sections }) {
  return (
    <>
      <PageHero title={title} subtitle="Please read carefully. This is a concise policy summary for our static site." />
      <section className="relative overflow-hidden bg-[#071313] py-16 md:py-20">
        <OrbitBackdrop variant="night" />
        <Container className="relative z-10 max-w-2xl">
          {sections.map((s) => (
            <Reveal key={s.heading} className="mb-8">
              <h2 className="font-display font-bold text-xl text-ink mb-2">{s.heading}</h2>
              <p className="text-base leading-relaxed text-ink-muted">{s.body}</p>
            </Reveal>
          ))}
          <p className="text-sm text-ink-muted pt-4 border-t border-line">
            Questions? Contact{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-[#7CFF00] underline decoration-dotted">{CONTACT.email}</a>{" "}
            or call <a href={CONTACT.phoneHref} className="text-[#7CFF00] underline decoration-dotted">{CONTACT.phoneDisplay}</a>.
          </p>
        </Container>
      </section>
    </>
  );
}
