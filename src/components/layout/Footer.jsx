import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import Container from "../common/Container";
import { FOOTER_LINKS, CONTACT, ASSETS } from "../../data/siteConfig";

export default function Footer() {
  return (
    <footer className="so-dark relative overflow-hidden border-t border-dark-border bg-dark pt-[clamp(2rem,5vw,4rem)] text-dark-muted">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 0%, rgba(0,184,61,0.12), transparent 34%), radial-gradient(circle at 90% 100%, rgba(0,214,57,0.06), transparent 28%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pb-6 sm:pb-10">
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 pb-6 sm:gap-10 sm:pb-12 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="mb-2 inline-flex items-center rounded-xl bg-surface px-2 py-1.5 sm:mb-4" aria-label="SkillOrbit Academy home">
              <img
                src={ASSETS.logo}
                alt="SkillOrbit Academy"
                width={160}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto max-w-[140px] object-contain sm:h-10 sm:max-w-[160px]"
              />
            </Link>
            <p className="mb-3 hidden max-w-xs text-sm leading-relaxed text-dark-muted sm:mb-4 sm:block">
              Premium IT training and distance learning from Pune — learn, build, certify and grow your career.
            </p>
            <p className="mb-3 flex items-center gap-1.5 text-[12px] text-dark-muted sm:hidden">
              <MapPin size={13} className="shrink-0 text-brand-primary" />
              Baner · Hinjawadi · Wakad
            </p>
            <div className="flex items-center gap-2 sm:hidden">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-dark-border bg-dark-surface text-brand-primary"
                aria-label={`Email ${CONTACT.email}`}
              >
                <Mail size={15} />
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-dark-border bg-dark-surface text-brand-primary"
                aria-label={`Call ${CONTACT.phoneDisplay}`}
              >
                <Phone size={15} />
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-dark-border bg-dark-surface text-brand-primary"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
            <ul className="hidden space-y-2 text-sm text-dark-muted sm:block">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand-primary" />
                <span>Baner, Hinjawadi &amp; Wakad, Pune</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-primary" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-primary">{CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brand-primary" />
                <a href={CONTACT.phoneHref} className="hover:text-brand-primary">{CONTACT.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-brand-primary" />
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">WhatsApp</a>
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
                      className="inline-flex min-h-8 items-center text-[12px] text-dark-muted transition-colors hover:text-brand-primary sm:min-h-11 sm:text-sm"
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

      <div className="relative z-10 border-t border-dark-border bg-dark-surface py-3 sm:py-4">
        <Container className="flex flex-col items-center justify-between gap-2 text-[11px] text-dark-muted sm:flex-row sm:gap-3 sm:text-xs">
          <p>© {new Date().getFullYear()} {CONTACT.name}</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-brand-primary">Privacy</Link>
            <Link to="/terms" className="hover:text-brand-primary">Terms</Link>
            <Link to="/refund" className="hover:text-brand-primary">Refunds</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
