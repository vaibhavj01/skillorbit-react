import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const go = useCallback((dir) => {
    setIdx((v) => (v + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const t = testimonials[idx];
  if (!t) return null;

  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="Voices" title="Learner Testimonials" subtitle="Placeholder quotes until real learner stories are published." />
        <Reveal>
          <div className="relative bg-white rounded-3xl border border-line p-8 md:p-12 text-center">
            <Quote size={36} className="mx-auto mb-4 text-brand-100" />
            <p className="text-lg md:text-xl leading-relaxed mb-6 font-display text-ink">“{t.quote}”</p>
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill={i < t.rating ? "#36A84A" : "none"} className="text-brand-500" />
              ))}
            </div>
            <img src={t.avatar} alt="" className="w-12 h-12 rounded-full mx-auto mb-2 object-cover bg-brand-100" loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            <p className="font-bold text-sm text-ink">{t.name}</p>
            <p className="text-xs text-ink-muted">{t.role} · {t.company}</p>

            <div className="flex items-center justify-center gap-3 mt-8">
              <button onClick={() => go(-1)} className="w-10 h-10 rounded-full flex items-center justify-center border border-line text-brand-700" aria-label="Previous testimonial">
                <ChevronLeft size={18} />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="rounded-full transition-all bg-brand-500"
                  style={{ width: i === idx ? 20 : 8, height: 8, opacity: i === idx ? 1 : 0.3 }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
              <button onClick={() => go(1)} className="w-10 h-10 rounded-full flex items-center justify-center border border-line text-brand-700" aria-label="Next testimonial">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
