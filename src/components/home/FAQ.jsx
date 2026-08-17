import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import { Eyebrow } from "../common/SectionHeading";
import { faqs } from "../../data/faqs";
import OrbitBackdrop from "../common/OrbitBackdrop";

function FAQItem({ item, isOpen, onClick, index }) {
  const panelId = `faq-panel-${index}`;
  return (
    <div className="border-b border-line">
      <h3>
        <button
          className="w-full flex items-center justify-between gap-4 py-5 text-left"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="font-semibold text-sm md:text-base text-ink">{item.question}</span>
          <ChevronDown
            size={18}
            className="shrink-0 transition-transform duration-300 text-brand-700"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>
      </h3>
      <div id={panelId} className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? "480px" : "0px" }}>
        <p className="pb-5 text-sm leading-relaxed text-ink-muted">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative overflow-hidden bg-[#E7F7F0] py-20 md:py-28">
      <OrbitBackdrop variant="mint" />
      <Container className="relative z-10 grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <Eyebrow>Support</Eyebrow>
          <h2 className="text-3xl font-bold leading-tight mb-4 font-display text-ink tracking-tight">Frequently Asked Questions</h2>
          <p className="text-base mb-6 text-ink-muted">Answers about courses, modes, certificates and career support.</p>
          <Button to="/contact" variant="primary" size="md">
            Still have questions? Book a Demo
          </Button>
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
