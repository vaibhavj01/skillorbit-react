import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import Container from "../common/Container";
import { FOOTER_LINKS, CONTACT, ASSETS } from "../../data/siteConfig";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#7CFF00]/15 bg-[#050d0d] pt-8 text-[#C5D5CE] sm:pt-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 0%, rgba(35,159,74,0.16), transparent 34%), radial-gradient(circle at 90% 100%, rgba(124,255,0,0.06), transparent 28%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pb-6 sm:pb-10">
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 pb-6 sm:gap-10 sm:pb-12 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="mb-2 inline-flex items-center sm:mb-4" aria-label="SkillOrbit Academy home">
              <img
                src={ASSETS.logo}
                alt="SkillOrbit Academy"
                className="h-8 w-auto max-w-[140px] object-contain brightness-0 invert drop-shadow-[0_0_8px_rgba(124,255,0,0.35)] sm:h-10 sm:max-w-[160px]"
              />
            </Link>
            <p className="mb-3 hidden max-w-xs text-sm leading-relaxed text-[#C5D5CE] sm:mb-4 sm:block">
              Premium IT training and distance learning from Pune — learn, build, certify and grow your career.
            </p>
            <p className="mb-3 flex items-center gap-1.5 text-[12px] text-[#B7C4BE] sm:hidden">
              <MapPin size={13} className="shrink-0 text-[#7CFF00]" />
              Baner · Hinjawadi · Wakad
            </p>
            <div className="flex items-center gap-2 sm:hidden">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#7CFF00]/30 bg-[#0d1c16] text-[#7CFF00]"
                aria-label={`Email ${CONTACT.email}`}
              >
                <Mail size={15} />
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#7CFF00]/30 bg-[#0d1c16] text-[#7CFF00]"
                aria-label={`Call ${CONTACT.phoneDisplay}`}
              >
                <Phone size={15} />
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#7CFF00]/30 bg-[#0d1c16] text-[#7CFF00]"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
            <ul className="hidden space-y-2 text-sm text-[#B7C4BE] sm:block">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#7CFF00]" />
                <span>Baner, Hinjawadi &amp; Wakad, Pune</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#7CFF00]" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#7CFF00]">{CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#7CFF00]" />
                <a href={CONTACT.phoneHref} className="hover:text-[#7CFF00]">{CONTACT.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-[#7CFF00]" />
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#7CFF00]">WhatsApp</a>
              </li>
            </ul>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:mb-4 sm:text-sm sm:normal-case sm:tracking-normal">
                {title}
              </h4>
              <ul className="space-y-0.5 sm:space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="inline-flex min-h-8 items-center text-[12px] text-[#B7C4BE] transition-colors hover:text-[#7CFF00] sm:min-h-11 sm:text-sm"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="relative z-10 border-t border-[#7CFF00]/15 bg-[#0d1c16] py-3 sm:py-4">
        <Container className="flex flex-col items-center justify-between gap-2 text-[11px] text-[#B7C4BE] sm:flex-row sm:gap-3 sm:text-xs">
          <p>© {new Date().getFullYear()} {CONTACT.name}</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-[#7CFF00]">Privacy</Link>
            <Link to="/terms" className="hover:text-[#7CFF00]">Terms</Link>
            <Link to="/refund" className="hover:text-[#7CFF00]">Refunds</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
