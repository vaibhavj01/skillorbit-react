import { Target, Handshake, Sprout } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import { Eyebrow } from "../components/common/SectionHeading";
import Stats from "../components/home/Stats";
import Trainers from "../components/home/Trainers";
import CTASection from "../components/home/CTASection";
import { CONTACT, STATS } from "../data/siteConfig";

const VALUES = [
  { icon: Target, title: "Outcome focus", text: "Every module ties back to skills employers need." },
  { icon: Handshake, title: "Mentorship", text: "Human guidance alongside digital content." },
  { icon: Sprout, title: "Growth mindset", text: "Continuous learning beyond the first job." },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="SKILLORBIT Academy Pvt. Ltd. is a Pune-based IT training and distance learning institute focused on career-ready skills."
        path="/about"
      />
      <PageHero
        title="About SKILLORBIT Academy"
        subtitle="A Pune-based IT training and distance learning institute focused on career-ready skills."
      />

      <section className="py-16 md:py-20 bg-white">
        <Container className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal className="relative">
            <img
              src="/assets/images/placeholders/hero-students.svg"
              alt="Learners collaborating at SKILLORBIT Academy"
              className="w-full rounded-3xl border border-line"
              loading="lazy"
            />
            <div className="absolute -bottom-5 left-5 bg-white rounded-2xl px-5 py-4 shadow-card border border-line">
              <p className="text-2xl font-bold font-display text-ink">{STATS[0].value.toLocaleString()}+</p>
              <p className="text-xs text-ink-muted">Learners</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="text-3xl font-bold leading-tight mb-4 font-display text-ink tracking-tight">
              Skills that orbit your career
            </h2>
            <p className="text-base leading-relaxed mb-3 text-ink-light">
              SKILLORBIT Academy Pvt. Ltd. delivers industry-focused IT programs through classroom, online, hybrid,
              self-paced and distance learning models.
            </p>
            <p className="text-base leading-relaxed mb-6 text-ink-muted">
              We combine mentor-led teaching, real projects and career support so learners can move from
              fundamentals to job-ready confidence.
            </p>
            <p className="text-sm font-semibold text-ink">{CONTACT.name}</p>
            <p className="text-sm text-ink-muted">
              {CONTACT.location} · <a href={`mailto:${CONTACT.email}`} className="text-brand-700 underline decoration-dotted">{CONTACT.email}</a>
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-ink mb-3">
              Mission: Learn → Build → Certify → Prepare → Get Placed → Grow
            </h2>
            <p className="text-base text-ink-muted">
              We exist to make premium technology education accessible, practical and career-aligned.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="text-center p-7 rounded-2xl border border-line bg-white">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-brand-100">
                    <v.icon size={22} className="text-brand-700" />
                  </div>
                  <h3 className="font-bold text-base mb-1.5 font-display text-ink">{v.title}</h3>
                  <p className="text-sm text-ink-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Stats />
      <div className="pt-8" />
      <Trainers />
      <CTASection />
    </>
  );
}
