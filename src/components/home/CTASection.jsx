import { useDemoModal } from "../../context/DemoModalContext";
import Reveal from "../common/Reveal";
import Container from "../common/Container";

export default function CTASection() {
  const { openDemo } = useDemoModal();

  return (
    <section id="demo" className="relative overflow-hidden bg-[#071313] px-4 pb-16 pt-12 sm:px-5 md:px-8 md:pb-24 md:pt-20">
      <Container>
        <Reveal>
          <div
            className="
              relative mx-auto max-w-5xl overflow-hidden rounded-[22px]
              border border-[#7CFF00]/35 px-4 py-10 text-center
              shadow-[0_0_40px_rgba(124,255,0,0.08)]
              sm:rounded-[28px] sm:px-12 sm:py-16
            "
            style={{
              background:
                "radial-gradient(circle at center, #163322 0%, #0b1610 48%, #071313 100%)",
            }}
          >
            <p className="mb-4 text-sm font-medium tracking-wide text-[#B7C4BE] sm:text-base">
              Ready to start your Career?
            </p>

            <h2 className="font-roboto text-[1.5rem] font-black leading-snug text-white sm:text-4xl md:text-5xl">
              Book Your{" "}
              <span className="relative inline-block text-[#7CFF00]">
                Free Demo
                <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#7CFF00]" />
              </span>{" "}
              Class Today!
            </h2>

            <button
              type="button"
              onClick={() => openDemo()}
              className="
                mt-6 inline-flex min-h-12 w-full max-w-full items-center justify-center rounded-full
                bg-white px-5 text-[13px] font-black uppercase tracking-[0.06em] text-[#071313]
                transition-transform hover:-translate-y-0.5 hover:bg-[#7CFF00]
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
