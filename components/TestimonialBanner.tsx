import { Quote } from "lucide-react";

export default function TestimonialBanner() {
  return (
    <section
      className="relative overflow-hidden bg-[#10243d] px-8 py-9"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,28,49,.86),rgba(10,28,49,.86)), url('/images/brunswick-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative mx-auto max-w-[900px] text-center">
        <div className="flex items-start justify-center gap-4 px-4 py-3 text-white">
          <Quote
            className="mt-1 h-7 w-7 shrink-0 rotate-180 fill-white text-white"
            strokeWidth={0}
          />

          <blockquote className="max-w-[620px] px-4 py-2 text-[24px] font-light leading-[1.2] tracking-[0.01em]">
            “We provide clients with professional service,
            <br />
            integrity, and our price is workmanship.”
          </blockquote>

          <Quote
            className="mt-1 h-7 w-7 shrink-0 fill-white text-white"
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
