import { Target, Handshake, Sprout, MonitorPlay, Users, BookOpen } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import { Eyebrow } from "../components/common/SectionHeading";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import IsoCertification from "../components/home/IsoCertification";
import CTASection from "../components/home/CTASection";
import { CONTACT, STATS } from "../data/siteConfig";
import OrbitBackdrop from "../components/common/OrbitBackdrop";

const VALUES = [
  { icon: Target, title: "Outcome focus", text: "Every module ties back to skills employers need." },
  { icon: Handshake, title: "Mentorship", text: "Human guidance alongside digital content." },
  { icon: Sprout, title: "Growth mindset", text: "Continuous learning beyond the first job." },
];

const TEACHING = [
  {
    icon: Users,
    title: "Mentor-led classroom",
    text: "Learn in Pune classrooms with live labs, doubt-solving and peer collaboration.",
  },
  {
    icon: MonitorPlay,
    title: "Live online teaching",
    text: "Join interactive sessions from anywhere without losing instructor guidance.",
  },
  {
    icon: BookOpen,
    title: "Structured practice",
    text: "Projects, assessments and feedback keep every learner accountable and job-ready.",
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
      />

      <section className="relative overflow-hidden bg-[#071313] py-12 md:py-20">
        <OrbitBackdrop variant="night" />
        <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-xl pb-8 lg:mx-0">
            <div className="relative overflow-hidden rounded-3xl border-[3px] border-[#7CFF00]/40 shadow-[0_24px_50px_rgba(0,0,0,0.4)]">
              <img
                src="/assets/images/certificate-graduate.png"
                alt="SkillOrbit learner celebrating course completion"
                className="aspect-[4/5] h-auto w-full object-cover object-[center_18%] sm:aspect-[5/4]"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#071313]/55 via-transparent to-[#7CFF00]/10"
                aria-hidden="true"
              />
              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 sm:left-4 sm:top-4">
                {["Classroom", "Online", "Placement"].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-[#7CFF00]/50 bg-[#071313]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#7CFF00] backdrop-blur-sm sm:text-[11px]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <img
              src="/assets/images/course-certificate.png"
              alt="Sample SkillOrbit course certificate"
              className="absolute -right-1 bottom-20 w-[48%] max-w-[210px] rotate-[8deg] rounded-md border-2 border-white shadow-[0_14px_32px_rgba(0,0,0,0.45)] sm:-right-3 sm:bottom-12 sm:max-w-[240px]"
            />

            <div className="absolute -bottom-2 left-3 rounded-2xl border border-[#7CFF00]/30 bg-[#0d1c16] px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.35)] sm:left-5 sm:px-5 sm:py-4">
              <p className="font-display text-2xl font-bold text-white">
                {STATS[0].value.toLocaleString("en-IN")}
                {STATS[0].suffix}
              </p>
              <p className="text-xs font-semibold text-[#C5D5CE]">Learners guided</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mb-4 text-[1.5rem] font-bold leading-snug tracking-tight font-display text-white sm:text-3xl">
              Skills that orbit your career
            </h2>
            <p className="text-base leading-relaxed mb-3 text-[#C5D5CE]">
              SKILLORBIT Academy Pvt. Ltd. delivers industry-focused IT programs through classroom, online, hybrid,
              self-paced and distance learning models.
            </p>
            <p className="text-base leading-relaxed mb-6 text-[#B7C4BE]">
              We combine mentor-led teaching, real projects and career support so learners can move from
              fundamentals to job-ready confidence.
            </p>
            <p className="text-sm font-semibold text-white">{CONTACT.name}</p>
            <p className="text-sm text-[#B7C4BE]">
              {CONTACT.location} · <a href={`mailto:${CONTACT.email}`} className="text-[#7CFF00] underline decoration-dotted">{CONTACT.email}</a>
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#0a1612] py-12 md:py-20">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="mb-3 font-display text-xl font-bold text-ink sm:text-2xl md:text-3xl">
              Mission: Learn → Build → Certify → Prepare → Get Placed → Grow
            </h2>
            <p className="text-base text-ink-muted">
              We exist to make premium technology education accessible, practical and career-aligned.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-[#7CFF00]/20 bg-[#0d1c16] p-7 text-center">
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

      <section id="teaching" className="relative overflow-hidden bg-[#071313] py-12 md:py-20">
        <OrbitBackdrop variant="night" />
        <Container className="relative z-10">
          <Reveal className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <Eyebrow>Teaching</Eyebrow>
            <h2 className="mb-3 font-display text-2xl font-bold text-white md:text-3xl">
              How SkillOrbit teaches technology
            </h2>
            <p className="text-sm leading-7 text-[#C5D5CE] md:text-base">
              Teaching at SkillOrbit is mentor-led, project-driven and aligned to hiring needs —
              whether you learn in the classroom, live online, or in a hybrid format.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEACHING.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-[#7CFF00]/20 bg-[#0d1c16] p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#12261d] text-[#7CFF00]">
                    <item.icon size={20} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-6 text-[#B7C4BE]">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Stats />
      <Testimonials />
      <IsoCertification />
      <CTASection />
    </>
  );
}
