import { useDemoModal } from "../../context/DemoModalContext";
import Reveal from "../common/Reveal";
import Container from "../common/Container";

export default function CTASection() {
  const { openDemo } = useDemoModal();

  return (
    <section id="demo" className="so-dark relative overflow-hidden bg-dark so-section">
      <Container>
        <Reveal>
          <div
            className="
              relative mx-auto max-w-5xl overflow-hidden rounded-[20px]
              border border-dark-border bg-dark-surface
              px-[clamp(1rem,4vw,3rem)] py-[clamp(2.25rem,5vw,4rem)] text-center
              sm:rounded-[28px]
            "
          >
            <p className="mb-4 text-sm font-medium tracking-wide text-dark-muted sm:text-base">
              Ready to start your Career?
            </p>

            <h2 className="font-display text-h2 font-bold leading-snug text-white">
              Book Your{" "}
              <span className="relative inline-block text-brand-primary">
                Free Demo
                <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-brand-primary" />
              </span>{" "}
              Class Today!
            </h2>

            <button
              type="button"
              onClick={() => openDemo()}
              className="
                mt-6 inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-xl
                bg-brand-primary px-5 text-[13px] font-bold uppercase tracking-[0.06em] text-[var(--cta-ink)]
                transition-colors hover:bg-brand-green
                sm:mt-8 sm:h-14 sm:w-auto sm:px-10 sm:text-[15px]
              "
            >
              Reserve My Seat Now
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
