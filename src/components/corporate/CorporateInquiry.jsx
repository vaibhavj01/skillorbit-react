import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import ContactForm from "../forms/ContactForm";
import Button from "../common/Button";
import { CONTACT } from "../../data/siteConfig";
import { CORPORATE_OFFICES } from "../../data/corporate";
import OrbitBackdrop from "../common/OrbitBackdrop";

export default function CorporateInquiry() {
  return (
    <section id="corporate-demo" className="relative overflow-hidden bg-[#E7F7F0] py-16 md:py-20">
      <OrbitBackdrop variant="mint" />
      <Container className="relative z-10">
        <Reveal className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#087A3E]">
            Plan a cohort
          </p>
          <h2 className="mb-3 font-roboto text-3xl font-black text-[#071313]">
            Train with us in Baner, Hinjawadi or Wakad
          </h2>
          <p className="text-sm leading-7 text-[#365F6E]">
            Tell us your team size, stack, and preferred campus. We will propose a classroom,
            online, or hybrid plan around Data Analytics, Java Full Stack, or Python Full Stack.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {CORPORATE_OFFICES.map((office) => (
                <a
                  key={office.id}
                  href={office.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[#35D0A5]/20 bg-[#F3FBF7] p-5 transition hover:-translate-y-0.5"
                >
                  <MapPin size={18} className="text-[#087A3E]" />
                  <p className="mt-3 font-roboto text-lg font-black text-[#071313]">{office.name}</p>
                  <p className="mt-2 text-xs leading-5 text-[#365F6E]">{office.blurb}</p>
                </a>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 rounded-2xl border border-[#35D0A5]/20 bg-[#F3FBF7] px-4 py-3 text-sm font-semibold text-[#071313]"
              >
                <Mail size={16} className="shrink-0 text-[#087A3E]" />
                <span className="break-all">{CONTACT.email}</span>
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 rounded-2xl border border-[#35D0A5]/20 bg-[#F3FBF7] px-4 py-3 text-sm font-semibold text-[#071313]"
              >
                <Phone size={16} className="shrink-0 text-[#087A3E]" />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-[#35D0A5]/20 bg-[#F3FBF7] px-4 py-3 text-sm font-semibold text-[#071313]"
              >
                <MessageCircle size={16} className="shrink-0 text-[#087A3E]" />
                WhatsApp
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={CONTACT.smsHref} variant="outline" size="md">
                Message us
              </Button>
              <Button href={CONTACT.phoneHref} variant="primary" size="md">
                Call {CONTACT.phoneDisplay}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-3xl border border-[#35D0A5]/20 bg-[#F3FBF7] p-6 sm:p-8">
            <h3 className="mb-2 font-display text-lg font-bold text-ink">Request a corporate demo</h3>
            <p className="mb-6 text-sm text-ink-muted">
              Share your details and our team will get back within one business day.
            </p>
            <ContactForm
              leadSource="Corporate"
              defaultMessage="I would like to discuss corporate training for my team — Data Analytics, Java Full Stack, or Python Full Stack."
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
