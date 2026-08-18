import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";
import Container from "../common/Container";

export default function CTASection() {
  return (
    <section id="demo" className="relative overflow-hidden bg-[#071313] px-5 py-16 md:px-8 md:py-20">
      <Container>
        <Reveal>
          <div
            className="
              relative mx-auto max-w-5xl overflow-hidden rounded-[28px]
              border border-[#7CFF00]/35 px-6 py-14 text-center
              shadow-[0_0_40px_rgba(124,255,0,0.08)]
              sm:px-12 sm:py-16
            "
            style={{
              background:
                "radial-gradient(circle at center, #163322 0%, #0b1610 48%, #071313 100%)",
            }}
          >
            <p className="mb-4 text-sm font-medium tracking-wide text-[#B7C4BE] sm:text-base">
              Ready to start your Career?
            </p>

            <h2 className="font-roboto text-[28px] font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Book Your{" "}
              <span className="relative inline-block text-[#7CFF00]">
                Free Demo
                <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-[#7CFF00]" />
              </span>{" "}
              Class Today!
            </h2>

            <Link
              to="/contact"
              className="
                mt-8 inline-flex h-12 items-center justify-center rounded-full
                bg-white px-8 text-sm font-black uppercase tracking-[0.08em] text-[#071313]
                transition-transform hover:-translate-y-0.5 hover:bg-[#7CFF00]
                sm:h-14 sm:px-10 sm:text-[15px]
              "
            >
              Reserve My Seat Now
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
