import { Quote } from "lucide-react";

export default function TestimonialBanner() {
  return (
    <section
      className="relative overflow-hidden bg-[#10243d] px-5 py-8 md:px-8 md:py-9"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,28,49,.86),rgba(10,28,49,.86)), url('/images/brunswick-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative mx-auto max-w-[900px] text-center">
        <div className="flex items-start justify-center gap-2 px-2 py-2 text-white md:gap-4 md:px-4 md:py-3">
          <Quote
            className="mt-1 h-6 w-6 shrink-0 rotate-180 fill-white text-white md:h-7 md:w-7"
            strokeWidth={0}
          />

          <blockquote className="max-w-[620px] px-1 py-1 text-[18px] font-light leading-[1.2] tracking-[0.01em] md:px-4 md:py-2 md:text-[24px]">
            “We provide clients with professional service,
            <br className="hidden md:block" />
            integrity, and our price is workmanship.”
          </blockquote>

          <Quote
            className="mt-1 h-6 w-6 shrink-0 fill-white text-white md:h-7 md:w-7"
            strokeWidth={0}
          />
        </div>

        <p className="mt-2 text-[12px] font-medium text-[#d8bd97]">
          – Brunswick Builders
        </p>
      </div>
    </section>
  );
}
