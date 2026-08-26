import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { testimonials } from "../../data/testimonials";
import OrbitBackdrop from "../common/OrbitBackdrop";

function signedOffset(index, active, total) {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function TestimonialCard({ item, active }) {
  return (
    <article className={`testimonial-cover-card ${active ? "is-active" : ""}`}>
      <img
        src={item.avatar}
        alt={`${item.name}, ${item.role}`}
        className="testimonial-cover-card__photo"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <p className="testimonial-cover-card__name">{item.name}</p>
      <p className="testimonial-cover-card__role">{item.role}</p>
      <p className="testimonial-cover-card__package">{item.package}</p>
    </article>
  );
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;

  const go = useCallback((dir) => {
    setIdx((v) => (v + dir + total) % total);
  }, [total]);

  useEffect(() => {
    if (total < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIdx((v) => (v + 1) % total);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [total]);

  if (!total) return null;

  return (
    <section id="testimonials" className="relative overflow-hidden bg-surface-bg so-section-lg">
      <OrbitBackdrop variant="mint" />
      <Container className="relative z-10 max-w-6xl">
        <SectionHeading
          eyebrow="Voices"
          title="Learner Testimonials"
          subtitle="Hear from learners who trained with SkillOrbit and moved into IT roles."
        />
        <p className="mb-8 text-center">
          <Link to="/reviews" className="text-sm font-bold text-brand-primary hover:underline">
            Read all student reviews
          </Link>
        </p>

        <Reveal>
          <div className="relative">
            <div className="testimonial-stage">
              {testimonials.map((item, i) => {
                const offset = signedOffset(i, idx, total);
                const visible = Math.abs(offset) <= 2;
                return (
                  <button
                    type="button"
                    key={item.id}
                    className={`testimonial-cover offset-${offset}${visible ? "" : " is-hidden"}`}
                    style={{ zIndex: 10 - Math.abs(offset) }}
                    onClick={() => setIdx(i)}
                    aria-label={`Show testimonial ${i + 1}: ${item.name}`}
                    aria-current={offset === 0}
                    tabIndex={visible ? 0 : -1}
                  >
                    <TestimonialCard item={item} active={offset === 0} />
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--brand-green)]/40 bg-surface-bg text-brand-primary transition-all hover:border-brand-green hover:bg-brand-green hover:text-[var(--cta-ink)]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIdx(i)}
                    className="h-2 rounded-full bg-brand-primary transition-all"
                    style={{
                      width: i === idx ? 22 : 8,
                      opacity: i === idx ? 1 : 0.28,
                    }}
                    aria-label={`Go to testimonial ${i + 1}: ${item.name}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--brand-green)]/40 bg-surface-bg text-brand-primary transition-all hover:border-brand-green hover:bg-brand-green hover:text-[var(--cta-ink)]"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
