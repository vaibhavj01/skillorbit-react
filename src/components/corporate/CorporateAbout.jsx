import { useState } from "react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import { CORPORATE_ABOUT } from "../../data/corporate";

export default function CorporateAbout() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#050c0a] py-16 md:py-20">
      <Container className="relative z-10">
        <Reveal className="text-center">
          <a
            href="#corporate-demo"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#7CFF00] px-7 text-sm font-black uppercase tracking-[0.08em] text-[#071313] transition hover:-translate-y-0.5 hover:bg-[#E7FF00]"
          >
            Book free demo
          </a>
          <h2 className="mt-8 font-roboto text-3xl font-black text-[#7CFF00] md:text-4xl">
            About Our Program
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="corporate-glow-card mx-auto mt-10 max-w-4xl rounded-3xl bg-white px-6 py-10 sm:px-12 sm:py-12">
          <div className="space-y-4 text-sm leading-7 text-[#071313] md:text-base">
            {CORPORATE_ABOUT.short.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            {open
              ? CORPORATE_ABOUT.more.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))
              : null}
          </div>
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#071313] px-8 text-sm font-bold text-white transition hover:bg-[#063F2A] hover:text-[#7CFF00]"
            >
              {open ? "Show less" : "Read more..."}
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
