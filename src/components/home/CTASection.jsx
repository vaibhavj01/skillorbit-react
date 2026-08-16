import { Phone } from "lucide-react";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import { CONTACT } from "../../data/siteConfig";

export default function CTASection() {
  return (
    <section id="demo" className="py-16 md:py-20 px-5 md:px-8">
      <Reveal className="max-w-6xl mx-auto rounded-3xl p-8 md:p-14 relative overflow-hidden bg-gradient-dark">
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.25), transparent 70%)" }}
        />
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display">Book a Free Demo Class</h2>
            <p className="text-white/80 max-w-md">
              Talk to our counsellors, preview the learning model and find the right batch for 2026 admissions.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <Button to="/contact" variant="dark" size="lg">
              Book Free Demo
            </Button>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl font-semibold text-white border-2 border-white/40 hover:bg-white/10 transition-colors"
            >
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
