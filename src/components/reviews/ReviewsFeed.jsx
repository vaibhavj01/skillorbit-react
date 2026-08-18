import { useCallback, useEffect, useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import ReviewStars from "./ReviewStars";
import { PLATFORM_RATINGS, testimonials } from "../../data/testimonials";

const AVATAR_COLORS = ["#239F4A", "#087A3E", "#2ECBC7", "#35D0A5"];

function initial(name) {
  return name.trim().charAt(0).toUpperCase();
}

function PlatformMark({ name, color }) {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white"
      style={{ background: color }}
      aria-hidden="true"
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export default function ReviewsFeed() {
  const [idx, setIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const total = testimonials.length;
  const active = testimonials[idx];

  const go = useCallback(
    (dir) => {
      setExpanded(false);
      setIdx((value) => (value + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (total < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const timer = window.setInterval(() => go(1), 5600);
    return () => window.clearInterval(timer);
  }, [go, total]);

  if (!active) return null;

  const long = active.quote.length > 180;
  const body = !expanded && long ? `${active.quote.slice(0, 170).trim()}…` : active.quote;
  const color = AVATAR_COLORS[idx % AVATAR_COLORS.length];

  return (
    <section id="latest-reviews" className="relative overflow-hidden bg-[#050c0a] py-16 md:py-20">
      <Container className="relative z-10">
        <Reveal className="mb-10 max-w-2xl">
          <h2 className="font-roboto text-3xl font-black text-white md:text-4xl">
            What our <span className="text-[#7CFF00]">learners say</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#C5D5CE]">
            Feedback from classroom, hybrid, and online batches. Stack, campus, and what they
            actually shipped.
          </p>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-[#0d1c16] p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <p className="text-sm font-black text-white">Latest reviews</p>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7CFF00]">
                  <span className="reviews-live-dot" />
                  Live feed
                </span>
              </div>

              <article className="rounded-2xl bg-white p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black text-white"
                      style={{ background: color }}
                    >
                      {initial(active.name)}
                    </span>
                    <div>
                      <p className="font-roboto text-sm font-black text-[#071313]">{active.name}</p>
                      <p className="text-xs text-[#365F6E]">{active.date}</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-[#E7F7F0] px-2 py-1 text-[10px] font-black uppercase tracking-wide text-[#087A3E]">
                    {active.platform}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <ReviewStars rating={active.rating} />
                  <BadgeCheck size={16} className="text-[#239F4A]" />
                </div>

                <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-[#087A3E]">Course</dt>
                    <dd className="font-semibold text-[#071313]">{active.course}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-[#087A3E]">Campus</dt>
                    <dd className="font-semibold text-[#071313]">{active.campus}</dd>
                  </div>
                </dl>

                <p className="mt-4 text-sm leading-7 text-[#365F6E]">{body}</p>
                {long ? (
                  <button
                    type="button"
                    onClick={() => setExpanded((value) => !value)}
                    className="mt-2 text-sm font-bold text-[#087A3E]"
                  >
                    {expanded ? "Show less" : "Read more"}
                  </button>
                ) : null}
              </article>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-[#B7C4BE]">
                  {idx + 1} / {total} stories
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#7CFF00] hover:bg-[#7CFF00] hover:text-[#071313]"
                    aria-label="Previous review"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#7CFF00] hover:bg-[#7CFF00] hover:text-[#071313]"
                    aria-label="Next review"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-3xl border border-white/10 bg-[#0d1c16] p-5 sm:p-6">
            <div className="mb-5 flex items-end justify-between gap-3">
              <h3 className="font-roboto text-lg font-black text-white">Platform ratings</h3>
              <p className="text-sm font-bold text-[#7CFF00]">4.8 / 5 avg</p>
            </div>
            <ul className="space-y-3">
              {PLATFORM_RATINGS.map((platform) => (
                <li
                  key={platform.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-start gap-3">
                    <PlatformMark name={platform.name} color={platform.color} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-black text-white">{platform.name}</p>
                        <p className="text-sm font-bold text-white">{platform.score.toFixed(1)} / 5</p>
                      </div>
                      <p className="mt-0.5 text-[11px] text-[#7CFF00]">{platform.growth}</p>
                      <p className="mt-1 text-xs text-[#B7C4BE]">{platform.reviewsLabel}</p>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${platform.percent}%`, background: platform.color }}
                        />
                      </div>
                      <ReviewStars rating={5} size={12} className="mt-2" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
