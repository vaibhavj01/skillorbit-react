import { useState } from "react";
import { ArrowRight, Briefcase, ChevronDown, GraduationCap, RefreshCw, Rocket } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import { Eyebrow } from "../common/SectionHeading";
import { faqs } from "../../data/faqs";
import OrbitBackdrop from "../common/OrbitBackdrop";
import { useDemoModal } from "../../context/DemoModalContext";

const CAREER_PATHS = [
  {
    id: "student",
    title: "Student",
    text: "Build job-ready skills",
    Icon: GraduationCap,
  },
  {
    id: "professional",
    title: "Working Professional",
    text: "Upskill for better opportunities",
    Icon: Briefcase,
  },
  {
    id: "switcher",
    title: "Career Switcher",
    text: "Move into a new tech domain",
    Icon: RefreshCw,
  },
  {
    id: "seeker",
    title: "Job Seeker",
    text: "Prepare for industry roles",
    Icon: Rocket,
  },
];

function FAQItem({ item, isOpen, onClick, index }) {
  const panelId = `faq-panel-${index}`;
  return (
    <div className="border-b border-line">
      <h3>
        <button
          className="w-full flex items-center justify-between gap-4 py-5 text-left text-[15px] font-semibold md:text-base"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="text-ink">{item.question}</span>
          <ChevronDown
            size={18}
            className="shrink-0 transition-transform duration-300 text-brand-dark"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>
      </h3>
      <div id={panelId} className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? "480px" : "0px" }}>
        <p className="pb-5 text-[15px] font-normal leading-relaxed text-ink-light">{item.answer}</p>
      </div>
    </div>
  );
}

function CareerGuidanceCard() {
  const { openDemo } = useDemoModal();

  return (
    <div className="mt-8 rounded-2xl border border-line bg-surface p-5 shadow-card sm:mt-10 sm:p-6">
      <div className="mb-4 h-px w-10 rounded-full bg-[linear-gradient(90deg,var(--brand-green),#2ECBC7)]" aria-hidden="true" />
      <h3 className="font-bold text-[1.05rem] leading-snug text-ink sm:text-lg">
        Not Sure Which Course?
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-light">
        Tell us your goal and we'll help you choose the right learning path.
      </p>

      <ul className="mt-4 space-y-1.5">
        {CAREER_PATHS.map(({ id, title, text, Icon }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => openDemo()}
              className="flex w-full items-center gap-3 rounded-xl border border-transparent px-2 py-2 text-left transition-colors hover:border-line hover:bg-surface-muted"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-brand-green">
                <Icon size={16} strokeWidth={2.1} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-ink">{title}</span>
                <span className="block text-xs leading-snug text-ink-light">{text}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => openDemo()}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-green transition-colors hover:text-brand-dark"
      >
        Get Personalised Guidance
        <ArrowRight size={15} />
      </button>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative overflow-hidden bg-surface-bg so-section-lg">
      <OrbitBackdrop variant="mint" />
      <Container className="relative z-10 grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <Eyebrow>Support</Eyebrow>
          <h2 className="mb-4 font-display text-h2 font-bold tracking-tight text-ink">Frequently Asked Questions</h2>
          <p className="text-base mb-6 text-ink-muted">Answers about courses, modes, certificates and career support.</p>
          <Button opensDemo variant="primary" size="md" className="w-full sm:w-auto">
            Book a Demo
          </Button>
          <CareerGuidanceCard />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          {faqs.map((item, i) => (
            <FAQItem key={item.id} item={item} index={i} isOpen={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
