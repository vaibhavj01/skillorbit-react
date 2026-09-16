import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import Container from "../components/common/Container";
import Reveal from "../components/common/Reveal";
import ContactForm from "../components/forms/ContactForm";
import { CONTACT } from "../data/siteConfig";
import OrbitBackdrop from "../components/common/OrbitBackdrop";

const CARDS = [
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: "Phone", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: CONTACT.whatsappHref },
  { icon: MapPin, label: "Location", value: CONTACT.location, href: "https://www.google.com/maps/search/?api=1&query=SkillOrbit+Academy+Baner+Hinjawadi+Wakad+Pune" },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with SkillOrbit Academy — email, phone, WhatsApp or send us a message to book your free demo class."
        path="/contact"
      />
      <PageHero title="Visit or Message Us" subtitle="Train with us in Baner, Hinjawadi or Wakad — or reach us online for a free demo." />

      <section className="relative overflow-hidden bg-surface-bg so-section-lg">
        <OrbitBackdrop variant="mint" />
        <Container className="relative z-10 grid items-start gap-10 lg:grid-cols-2">
          <Reveal className="grid sm:grid-cols-2 gap-4">
            {CARDS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === "WhatsApp" || c.label === "Location" ? "_blank" : undefined}
                rel={c.label === "WhatsApp" || c.label === "Location" ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-2 rounded-2xl border border-brand-primary/20 bg-surface p-5 transition-transform hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(57,255,20,0.12)]">
                  <c.icon size={18} className="text-brand-lime" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{c.label}</p>
                <p className="text-sm font-medium text-ink">{c.value}</p>
              </a>
            ))}
            <div className="sm:col-span-2 rounded-2xl overflow-hidden border border-line h-64 md:h-80 bg-surface-muted">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.217344139965!2d73.78013777465314!3d18.564237567839925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf40aa7e9bb9%3A0xc500a2125885cc03!2sSkill%20Orbit%20Academy%20Private%20Limited!5e0!3m2!1sen!2sin!4v1789542657514!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="SkillOrbit Academy location in Pune"
  />
</div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-brand-primary/20 bg-surface p-8">
            <h3 className="text-lg font-bold mb-2 font-display text-ink">Send us a message</h3>
            <p className="text-sm mb-6 text-ink-muted">Fill in your details and we'll get back to you within one business day.</p>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
