
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import Container from "../common/Container";
import { useDemoModal } from "../../context/DemoModalContext";

import {
  CONTACT,
  ASSETS,
  FOOTER_QUICK_LINKS,
  FOOTER_POPULAR_COURSES,
  FOOTER_SUPPORT_LINKS,
  FOOTER_LEGAL_LINKS,
  SOCIAL_LINKS,
} from "../../data/siteConfig";

/* ---------------------------------------
   Social Media Icons
--------------------------------------- */

const SOCIAL_ICONS = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
};

/* ---------------------------------------
   Footer Navigation Link
--------------------------------------- */

function FooterNavLink({ item, onDemo }) {
  if (item.action === "demo") {
    return (
      <button
        type="button"
        className="so-footer__link"
        onClick={onDemo}
      >
        {item.label}
      </button>
    );
  }

  if (item.href) {
    const external = item.href.startsWith("http");

    return (
      <a
        href={item.href}
        className="so-footer__link"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      to={item.to}
      className="so-footer__link"
    >
      {item.label}
    </Link>
  );
}

/* ---------------------------------------
   Footer Column
--------------------------------------- */

function FooterColumn({ title, links, onDemo }) {
  return (
    <nav
      className="so-footer__col"
      aria-label={title}
    >
      <h2 className="so-footer__heading">
        {title}
      </h2>

      <ul>
        {links.map((item) => (
          <li key={item.label}>
            <FooterNavLink
              item={item}
              onDemo={onDemo}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------------------------------------
   Social Links
--------------------------------------- */

function SocialLinks({ className = "" }) {
  return (
    <ul
      className={`so-footer__socials ${className}`.trim()}
      aria-label="Social media links"
    >
      {SOCIAL_LINKS.map((item) => {
        const Icon = SOCIAL_ICONS[item.id];

        // If an icon isn't configured,
        // don't render an empty/broken icon.
        if (!Icon) {
          return null;
        }

        return (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="so-footer__social"
              aria-label={`Visit SkillOrbit on ${item.label}`}
              title={item.label}
            >
              <Icon
                size={16}
                aria-hidden="true"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------------------------------------
   Footer
--------------------------------------- */

export default function Footer() {
  const { openDemo } = useDemoModal();
  const year = new Date().getFullYear();

  return (
    <footer className="so-footer">
      <div className="so-footer__body">

        {/* Decorative background glow */}
        <div
          className="so-footer__glow"
          aria-hidden="true"
        />

        <Container className="so-footer__inner">

          {/* --------------------------------
              Footer Main Grid
          -------------------------------- */}

          <div className="so-footer__grid">

            {/* --------------------------------
                Brand & Contact
            -------------------------------- */}

            <section
              className="so-footer__brand"
              aria-label="SkillOrbit"
            >
              <Link
                to="/"
                className="so-footer__logo"
                aria-label="SkillOrbit Academy home"
              >
                <img
                  src={ASSETS.logo}
                  alt="SkillOrbit Academy"
                  width={150}
                  height={40}
                  loading="lazy"
                  decoding="async"
                />
              </Link>

              <p className="so-footer__desc">
                Industry-ready IT education for students,
                professionals and career changers.
              </p>

              <div className="so-footer__meta">

                <p className="so-footer__meta-label">
                  Location
                </p>

                <p className="so-footer__meta-value">
                  {CONTACT.location}
                </p>

                <a
                  className="so-footer__meta-link"
                  href={`mailto:${CONTACT.email}`}
                  aria-label={`Email SkillOrbit at ${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>

                <a
                  className="so-footer__meta-link"
                  href={CONTACT.phoneHref}
                  aria-label={`Call SkillOrbit at ${CONTACT.phoneDisplay}`}
                >
                  {CONTACT.phoneDisplay}
                </a>

              </div>
            </section>

            {/* Quick Links */}

            <FooterColumn
              title="Quick Links"
              links={FOOTER_QUICK_LINKS}
            />

            {/* Popular Courses */}

            <FooterColumn
              title="Popular Courses"
              links={FOOTER_POPULAR_COURSES}
            />

            {/* Career & Support */}

            <FooterColumn
              title="Career & Support"
              links={FOOTER_SUPPORT_LINKS}
              onDemo={openDemo}
            />

          </div>

          {/* --------------------------------
              Divider
          -------------------------------- */}

          <div
            className="so-footer__rule"
            aria-hidden="true"
          />

          {/* --------------------------------
              Footer Bottom
          -------------------------------- */}

          <div className="so-footer__bottom">

            {/* Copyright */}

            <p className="so-footer__copy">
              © {year} {CONTACT.name}. All rights reserved.
            </p>

            {/* Social Media */}

            <SocialLinks />

            {/* Legal Links */}

            <nav
              className="so-footer__legal"
              aria-label="Legal"
            >
              {FOOTER_LEGAL_LINKS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

          </div>

        </Container>
      </div>
    </footer>
  );
}

