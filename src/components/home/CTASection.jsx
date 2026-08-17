import { Phone } from "lucide-react";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import OrbitBackdrop from "../common/OrbitBackdrop";
import { CONTACT } from "../../data/siteConfig";

export default function CTASection() {
  return (
    <section id="demo" className="relative overflow-hidden bg-[#051912] px-5 py-16 md:px-8 md:py-20">
      <OrbitBackdrop variant="night" />
      <Reveal className="relative z-10 mx-auto max-w-6xl">
        <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">
              Book a Free Demo Class
            </h2>
            <p className="max-w-md text-white/75">
              Talk to our counsellors, preview the learning model and find the right batch for 2026 admissions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="bg-[#7CFF00] text-[#06352C] hover:bg-[#E7FF00] hover:text-[#06352C]"
            >
              Book Free Demo
            </Button>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-[#7CFF00]/50 px-8 font-semibold text-white transition-colors hover:bg-[#7CFF00]/10"
            >
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
