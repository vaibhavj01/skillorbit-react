import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { testimonials } from "../../data/testimonials";
import { ASSETS } from "../../data/siteConfig";
import OrbitBackdrop from "../common/OrbitBackdrop";

function stackFromRole(role = "") {
  const value = role.toLowerCase();
  if (value.includes("salesforce")) return "salesforce";
  if (value.includes("servicenow")) return "servicenow";
  if (value.includes("devops")) return "devops";
  if (value.includes("data")) return "analytics";
  return "it career";
}

function useStickyCount() {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const apply = () => setCount(desktop.matches ? 4 : 3);
    apply();
    desktop.addEventListener("change", apply);
    return () => desktop.removeEventListener("change", apply);
  }, []);

  return count;
}

function TestimonialCard({ item }) {
  const stack = stackFromRole(item.role);

  return (
    <article className="so-place-card">
      <img
        src={ASSETS.logo}
        alt="SkillOrbit Academy"
        className="so-place-card__logo"
        width={132}
        height={34}
      />

      <p className="so-place-card__congrats">Congratulations</p>

      <div className="so-place-card__body">
        <span className={`so-place-card__cloud so-place-card__cloud--${stack.replace(/\s+/g, "-")}`}>
          {stack}
        </span>

        <span className="so-place-card__arrow" aria-hidden="true" />

        <div className="so-place-card__polaroid">
          <div className="so-place-card__photo-wrap">
            <img
              src={item.avatar}
              alt={`${item.name}, ${item.role}`}
              className="so-place-card__photo"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
          <p className="so-place-card__name">{item.name}</p>
        </div>

        <p className="so-place-card__offer">
          <span>{item.role}</span>
          <strong>{item.package}</strong>
        </p>

        <span className="so-place-card__stamp">Placed</span>
      </div>

      <p className="so-place-card__footer">
        Empowering The Next Generation of
        <span> IT Professionals</span>
      </p>
    </article>
  );
}

function StickyNote({ item }) {
  return (
    <div className="so-place-sticky">
      <span className="so-place-pin" aria-hidden="true">
        <span className="so-place-pin__head" />
        <span className="so-place-pin__needle" />
      </span>
      <TestimonialCard item={item} />
    </div>
  );
}

function Dots({ idx, onSelect }) {
  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      {testimonials.map((item, i) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(i)}
          className="h-2 rounded-full bg-brand-primary transition-all"
          style={{
            width: i === idx ? 22 : 8,
            opacity: i === idx ? 1 : 0.28,
          }}
          aria-label={`Go to placement story ${i + 1}: ${item.name}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const stickyCount = useStickyCount();
  const active = testimonials[idx];
  const stickyItems = Array.from({ length: Math.min(stickyCount, total) }, (_, i) => (
    testimonials[(idx + i) % total]
  ));

  const go = useCallback((dir) => {
    setIdx((value) => (value + dir + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused || total < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIdx((value) => (value + 1) % total);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  if (!active) return null;

  return (
    <section id="testimonials" className="so-dark relative overflow-hidden bg-[var(--bg-secondary)] so-section-lg">
      <OrbitBackdrop variant="mesh" />
      <Container className="relative z-10 max-w-7xl">
        <SectionHeading
          eyebrow="Placed"
          title="Congratulations"
          subtitle="Learners who trained with SkillOrbit and moved into IT roles."
        />
        <p className="mb-8 text-center">
          <Link to="/reviews" className="text-sm font-bold text-brand-lime hover:underline">
            Read all student reviews
          </Link>
        </p>

        <Reveal>
          <div className="so-place-slider md:hidden">
            <button
              type="button"
              onClick={() => go(-1)}
              className="so-place-slider__nav"
              aria-label="Previous placement story"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="so-place-slider__frame">
              <TestimonialCard key={active.id} item={active} />
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              className="so-place-slider__nav"
              aria-label="Next placement story"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="md:hidden">
            <Dots idx={idx} onSelect={setIdx} />
          </div>

          <div
            className="so-place-board-wrap hidden md:flex"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <button
              type="button"
              onClick={() => go(-1)}
              className="so-place-slider__nav hidden lg:inline-flex"
              aria-label="Previous placement stories"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="so-place-board">
              {stickyItems.map((item) => (
                <StickyNote key={item.id} item={item} />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              className="so-place-slider__nav hidden lg:inline-flex"
              aria-label="Next placement stories"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="hidden md:block">
            <Dots idx={idx} onSelect={setIdx} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
