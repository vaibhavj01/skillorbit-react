import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import Container from "../common/Container";
import { FOOTER_LINKS, CONTACT } from "../../data/siteConfig";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2ECBC7] pt-16 text-[#071313]">
      <div
        className="pointer-events-none absolute left-1/2 top-[-18%] h-[130%] w-[120%] -translate-x-1/2 rounded-full border border-white/30"
        aria-hidden="true"
      />

      <Container className="relative z-10 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          <div className="lg:col-span-1 sm:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm bg-[#00A3CC] text-white font-display">
                SO
              </span>
              <span className="text-lg font-bold font-display">SkillOrbit</span>
            </Link>
            <p className="text-sm text-[#063F2A]/80 leading-relaxed max-w-xs mb-4">
              Premium IT training and distance learning from Pune — learn, build, certify and grow your career.
            </p>
            <ul className="space-y-2 text-sm text-[#063F2A]/80">
              <li className="flex items-center gap-2">
                <MapPin size={14} /> {CONTACT.location}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#00A3CC]">{CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a href={CONTACT.phoneHref} className="hover:text-[#00A3CC]">{CONTACT.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} />
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#00A3CC]">WhatsApp</a>
              </li>
            </ul>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-[#063F2A]/80 hover:text-[#00A3CC] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="relative z-10 bg-[#00A3CC] py-4">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/90">
          <p>© {new Date().getFullYear()} {CONTACT.name} All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/refund" className="hover:text-white">Refunds</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
