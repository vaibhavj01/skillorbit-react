import { Calendar, Clock, Sparkles } from "lucide-react";
import Container from "../common/Container";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import OrbitBackdrop from "../common/OrbitBackdrop";
import useCountdown from "../../hooks/useCountdown";
import { GENAI_PROMO, GENAI_PROMO_DEADLINE_MS } from "../../data/genaiPromo";
import { getCourseBySlug, getCourseCover } from "../../data/courses";
import { CONTACT } from "../../data/siteConfig";

function pad(value) {
  return String(value).padStart(2, "0");
}

const WHATSAPP_TEXT = encodeURIComponent(
  `Hi SkillOrbit, I want to book a free demo slot for Data Analytics + GenAI on Sunday, 23 August 2026. Batch starts 1 September 2026.`,
);

export default function GenAIBatchAd() {
  const { expired, days, hours, minutes, seconds } = useCountdown(GENAI_PROMO_DEADLINE_MS);
  const course = getCourseBySlug(GENAI_PROMO.courseId);
  const cover = course ? getCourseCover(course) : "/assets/images/courses/data-analytics.png";

  return (
    <section id="genai-batch" className="relative overflow-hidden bg-[#071313] py-8 sm:py-12 md:py-16">
      <OrbitBackdrop variant="night" />
      <Container className="relative z-10">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[#7CFF00]/30 bg-[#0d1c16] shadow-[0_0_40px_rgba(124,255,0,0.08)] sm:rounded-3xl md:grid md:grid-cols-[0.92fr_1.08fr]">
            <div className="relative hidden min-h-[280px] md:block">
              <img
                src={cover}
                alt=""
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071313]/20 via-transparent to-[#071313]/85" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7CFF00]">
                  New batch
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-white">
                  Starts {GENAI_PROMO.batchStartLabel}
                </p>
              </div>
            </div>

            <div className="px-4 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10">
              <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#7CFF00]/40 bg-[#7CFF00]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7CFF00]">
                <Sparkles size={12} />
                Now enrolling
              </p>

              <h2 className="font-display text-[1.45rem] font-extrabold leading-[1.15] text-white sm:text-3xl">
                Data Analytics + GenAI{" "}
                <span className="text-[#7CFF00]">batch starts 1 Sept</span>
              </h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-[#C5D5CE]">
                Join the new classroom / online batch from 1 September 2026. Book a free demo slot on Sunday, 23 August to see the curriculum before you enrol.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-[#7CFF00]/20 bg-[#071313] px-3.5 py-3">
                  <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7CFF00]">
                    <Calendar size={12} /> Batch starts
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">1 September 2026</p>
                </div>
                <div className="rounded-xl border border-[#7CFF00]/20 bg-[#071313] px-3.5 py-3">
                  <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7CFF00]">
                    <Clock size={12} /> Free demo
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">Sunday, 23 August</p>
                </div>
              </div>

              {expired ? (
                <p className="mt-4 text-sm font-semibold text-white">
                  The 23 August demo window has closed. Enquire to join the 1 September batch.
                </p>
              ) : (
                <div className="mt-4">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7CFF00]">
                    Book free demo slots before 23 Aug
                  </p>
                  <div className="grid grid-cols-4 gap-2" aria-hidden="true">
                    {[
                      { label: "Days", value: pad(days) },
                      { label: "Hrs", value: pad(hours) },
                      { label: "Min", value: pad(minutes) },
                      { label: "Sec", value: pad(seconds) },
                    ].map((unit) => (
                      <div
                        key={unit.label}
                        className="rounded-xl border border-[#7CFF00]/20 bg-[#071313] px-1 py-2 text-center"
                      >
                        <p className="font-display text-lg font-bold tabular-nums text-white sm:text-xl">
                          {unit.value}
                        </p>
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-[#8AA0A8]">
                          {unit.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="sr-only">
                    Free demo slots close Sunday, 23 August 2026, 11:59 PM IST.
                  </p>
                </div>
              )}

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <Button
                  opensDemo
                  defaultCourseId={GENAI_PROMO.courseId}
                  campaign="genai-promo"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Book Free Demo Slot
                </Button>
                <a
                  href={`${CONTACT.whatsappHref}?text=${WHATSAPP_TEXT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-[#7CFF00]/40 px-5 text-sm font-semibold text-[#7CFF00] hover:bg-[#7CFF00]/10 sm:w-auto"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
