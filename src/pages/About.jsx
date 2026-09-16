import { MonitorPlay, Users, BookOpen } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import { Eyebrow } from "../components/common/SectionHeading";
import { CONTACT, STATS } from "../data/siteConfig";
import OrbitBackdrop from "../components/common/OrbitBackdrop";

const TEACHING = [
  {
    icon: Users,
    title: "Industry Expert Trainers",
    text: "Learn directly from experienced industry professionals with practical knowledge, real-world examples, project guidance, and career-focused mentoring.",
  },
  {
    icon: MonitorPlay,
    title: "Dedicated HR & Career Support",
    text: "Get dedicated HR support for resume guidance, interview preparation, communication skills, doubt-solving sessions, and personalized career guidance.",
  },
  {
    icon: BookOpen,
    title: "Weekly Mock Interviews & Assessments",
    text: "Participate in mock technical and HR interviews every 15 days with feedback, performance analysis, and real industry-style interview exposure.",
  },
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
        className="!pb-6 sm:!pb-8"
      />

      <section className="relative overflow-hidden bg-[var(--bg-secondary)] so-section !pt-6 !pb-6 sm:!pt-8 sm:!pb-8">
        <OrbitBackdrop variant="mint" />
        <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-xl pb-8 lg:mx-0">
            <div className="relative overflow-hidden rounded-3xl border-[3px] border-brand-primary/40 shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
              <img
                src="/assets/images/certificate-graduate.webp"
                alt="SkillOrbit learner celebrating course completion"
                className="aspect-[4/5] h-auto w-full object-cover object-[center_18%] sm:aspect-[5/4]"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-surface-bg/55 via-transparent to-brand-primary/10"
                aria-hidden="true"
              />
              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 sm:left-4 sm:top-4">
                {["Classroom", "Online", "Placement"].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-brand-primary/50 bg-surface-bg/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-primary backdrop-blur-sm sm:text-[11px]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <img
              src="/assets/images/course-certificate.webp"
              alt="Sample SkillOrbit course certificate"
              className="absolute -right-1 bottom-20 w-[48%] max-w-[210px] rotate-[8deg] rounded-md border-2 border-white shadow-[0_14px_32px_rgba(0,0,0,0.45)] sm:-right-3 sm:bottom-12 sm:max-w-[240px]"
            />

            <div className="absolute -bottom-2 left-3 rounded-2xl border border-brand-primary/30 bg-surface px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.35)] sm:left-5 sm:px-5 sm:py-4">
              <p className="font-display text-2xl font-bold text-ink">
                {STATS[0].value.toLocaleString("en-IN")}
                {STATS[0].suffix}
              </p>
              <p className="text-xs font-semibold text-ink-light">Learners guided</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mb-4 font-display text-h2 font-bold tracking-tight text-ink">
              Skills that orbit your career
            </h2>
            <p className="text-base leading-relaxed mb-3 text-ink-light">
              Skill Orbit is a career-focused IT training academy dedicated to helping students, freshers, working
              professionals and career switchers build industry-relevant skills and prepare for successful careers
              in technology.
            </p>
            <p className="text-base leading-relaxed mb-3 text-ink-muted">
              In today’s competitive job market, a degree or certification alone is not enough. Employers look for
              candidates who have practical knowledge, relevant technical skills, real-world project experience and
              the confidence to perform in professional environments.
            </p>
            <p className="text-base leading-relaxed mb-6 text-ink-muted">
              At Skill Orbit, we bridge this gap through industry-oriented training, hands-on learning, expert trainers
              and comprehensive career preparation.
            </p>
            <p className="text-sm font-semibold text-ink">{CONTACT.name}</p>
            <p className="text-sm text-ink-muted">
              {CONTACT.location} · <a href={`mailto:${CONTACT.email}`} className="text-brand-primary underline decoration-dotted">{CONTACT.email}</a>
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="teaching" className="relative overflow-hidden bg-[var(--bg-primary)] so-section !pt-6 sm:!pt-8">
        <Container className="relative z-10">
          <Reveal className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
            <h2 className="mb-3 font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
              We Don't Just Teach. We Prepare You for the Industry.
            </h2>
            <p className="text-base text-dark-muted">
              Industry-led training, personal mentorship and continuous interview practice — everything you need to become career-ready.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEACHING.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-brand-primary/20 bg-surface p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(57,255,20,0.12)] text-brand-lime">
                    <item.icon size={20} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="text-sm leading-6 text-ink-muted">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* <Stats />
      <Testimonials />
      <IsoCertification />
      <CTASection /> */}
    </>
  );
}
