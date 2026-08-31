import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import Container from "../common/Container";
import { FOOTER_LINKS, CONTACT, ASSETS } from "../../data/siteConfig";

export default function Footer() {
  return (
    <footer className="so-footer so-dark relative overflow-hidden border-t border-dark-border bg-dark font-body text-dark-muted">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 0%, rgba(102,255,0,0.08), transparent 34%), radial-gradient(circle at 90% 100%, rgba(0,200,83,0.08), transparent 28%)",
        }}
        aria-hidden="true"
      />

      <Container className="so-footer__inner relative z-10">
        <div className="so-footer__grid">
          <div className="so-footer__brand">
            <Link to="/" className="so-footer__logo" aria-label="SkillOrbit Academy home">
              <img
                src={ASSETS.logo}
                alt="SkillOrbit Academy"
                width={140}
                height={36}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="so-footer__desc">
              Premium IT training and distance learning from Pune — learn, build, certify and grow your career.
            </p>
            <p className="so-footer__mobile-loc">
              <MapPin size={13} className="shrink-0 text-brand-primary" />
              Baner · Hinjawadi · Wakad
            </p>
            <div className="so-footer__mobile-actions">
              <a
                href={`mailto:${CONTACT.email}`}
                className="so-footer__icon-btn"
                aria-label={`Email ${CONTACT.email}`}
              >
                <Mail size={15} />
              </a>
              <a
                href={CONTACT.phoneHref}
                className="so-footer__icon-btn"
                aria-label={`Call ${CONTACT.phoneDisplay}`}
              >
                <Phone size={15} />
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="so-footer__icon-btn"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
            <ul className="so-footer__contact">
              <li>
                <span className="so-footer__contact-icon" aria-hidden="true">
                  <MapPin size={14} />
                </span>
                <span>Baner, Hinjawadi &amp; Wakad, Pune</span>
              </li>
              <li>
                <span className="so-footer__contact-icon" aria-hidden="true">
                  <Mail size={14} />
                </span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <span className="so-footer__contact-icon" aria-hidden="true">
                  <Phone size={14} />
                </span>
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <span className="so-footer__contact-icon" aria-hidden="true">
                  <MessageCircle size={14} />
                </span>
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="so-footer__links">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title} className="so-footer__col min-w-0">
                <h4 className="so-footer__heading font-display">{title}</h4>
                <ul>
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="so-footer__link">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="so-footer__legal relative z-10">
        <Container className="so-footer__legal-inner">
          <p>© {new Date().getFullYear()} {CONTACT.name}</p>
          <div className="so-footer__legal-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/refund">Refunds</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
