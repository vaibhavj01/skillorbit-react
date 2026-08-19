import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
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
      <Quote size={28} className={active ? "text-[#7CFF00]" : "text-[#35D0A5]"} />
      <p className="mt-4 line-clamp-5 font-display text-sm leading-relaxed text-white/90 sm:text-base">
        “{item.quote}”
      </p>
      <div className="mt-5 flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={15}
            fill={i < item.rating ? "#7CFF00" : "none"}
            className="text-[#7CFF00]"
          />
        ))}
      </div>
      <img
        src={item.avatar}
        alt=""
        className="mt-5 h-12 w-12 rounded-full object-cover ring-2 ring-[#35D0A5]/50"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <p className="mt-2 text-sm font-bold text-white">{item.name}</p>
      <p className="text-xs text-white/55">
        {item.role} · {item.company}
      </p>
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
    <section id="testimonials" className="relative overflow-hidden bg-[#051912] py-16 sm:py-20 md:py-28">
      <OrbitBackdrop variant="night" />
      <Container className="relative z-10 max-w-6xl">
        <SectionHeading
          eyebrow="Voices"
          title="Learner Testimonials"
          subtitle="Hear from learners who trained with SkillOrbit and moved into IT roles."
          light
        />
        <p className="mb-8 text-center">
          <Link to="/reviews" className="text-sm font-bold text-[#7CFF00] hover:underline">
            Read all student reviews
          </Link>
        </p>

        <Reveal>
          <div className="relative">
            <div className="testimonial-stage">
              {testimonials.map((item, i) => {
                const offset = signedOffset(i, idx, total);
                return (
                  <button
                    type="button"
                    key={item.id}
                    className={`testimonial-cover offset-${offset}`}
                    style={{ zIndex: 10 - Math.abs(offset) }}
                    onClick={() => setIdx(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={offset === 0}
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#35D0A5]/40 bg-[#071313] text-[#7CFF00] transition-all hover:border-[#7CFF00] hover:bg-[#7CFF00] hover:text-[#071313]"
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
                    className="h-2 rounded-full bg-[#7CFF00] transition-all"
                    style={{
                      width: i === idx ? 22 : 8,
                      opacity: i === idx ? 1 : 0.28,
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#35D0A5]/40 bg-[#071313] text-[#7CFF00] transition-all hover:border-[#7CFF00] hover:bg-[#7CFF00] hover:text-[#071313]"
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
