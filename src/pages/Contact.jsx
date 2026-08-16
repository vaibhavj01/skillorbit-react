import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import ContactForm from "../components/forms/ContactForm";
import { CONTACT } from "../data/siteConfig";

const CARDS = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: CONTACT.whatsappHref },
  { icon: MapPin, label: "Location", value: CONTACT.location, href: "#" },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with SkillOrbit Academy — email, phone, WhatsApp or send us a message to book your free demo class."
        path="/contact"
      />
      <PageHero title="Visit or Message Us" subtitle="We are based in Pune and happy to guide your next learning step." />

      <section className="py-16 md:py-20">
        <Container className="grid lg:grid-cols-2 gap-10 items-start">
          <Reveal className="grid sm:grid-cols-2 gap-4">
            {CARDS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === "WhatsApp" ? "_blank" : undefined}
                rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="p-5 rounded-2xl border border-line bg-white flex flex-col gap-2 hover:-translate-y-0.5 transition-transform"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-100">
                  <c.icon size={18} className="text-brand-700" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{c.label}</p>
                <p className="text-sm font-medium text-ink">{c.value}</p>
              </a>
            ))}
            <div className="sm:col-span-2 rounded-2xl overflow-hidden border border-line h-48 bg-surface-muted flex items-center justify-center">
              <img src="/assets/images/placeholders/map.svg" alt="Map showing SkillOrbit Academy location in Pune" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="p-8 rounded-3xl border border-line bg-white">
            <h3 className="text-lg font-bold mb-2 font-display text-ink">Send us a message</h3>
            <p className="text-sm mb-6 text-ink-muted">Fill in your details and we'll get back to you within one business day.</p>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
