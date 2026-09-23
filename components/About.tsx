import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full overflow-hidden bg-white" id="about">
      <div className="mx-auto grid w-full max-giw-[1200px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-12 md:px-10 lg:gap-20 lg:py-20">
        {/* Text */}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.04em] text-[#18304D]">
              About Brunswick Builders
            </span>
            <span className="h-px w-5 bg-[#D8B58E]" />
          </div>

          <h2 className="mt-5 text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-[#142941] sm:text-[34px] lg:text-[40px]">
            Built on experience.
            <br />
            Driven by craftsmanship.
          </h2>

          <p className="mt-5 max-w-[480px] text-sm leading-[1.8] text-[#526174]">
            For over two decades, Brunswick Builders has provided construction
            management and general contracting services for a wide range of
            markets. We partner with our clients from concept to completion,
            delivering projects on time, on budget and beyond expectations.
          </p>

          <Link
            href="/about"
            className="mt-6 inline-flex min-h-11 items-center gap-4 bg-[#122B48] px-5 text-[11px] font-semibold uppercase tracking-[0.03em] text-white transition-colors duration-200 hover:bg-[#183754] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#122B48]"
          >
            Discover Our Story
            <span aria-hidden="true" className="text-lg font-normal leading-none">
              →
            </span>
          </Link>
        </div>

        {/* Image */}
        <div className="relative mr-4 mb-4 sm:mr-5 sm:mb-5">
          <div className="pointer-events-none absolute -right-4 -bottom-4 h-2/3 w-1/2 bg-[#F0ECE7] sm:-right-5 sm:-bottom-5" />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 -left-4 h-[70px] w-[28px] bg-[radial-gradient(circle,#18304D_1.15px,transparent_1.25px)] bg-[length:6px_6px]"
          />

          <div className="relative aspect-[371/194] w-full overflow-hidden">
            <Image
              src="/images/About.png"
              alt="Brunswick Builders construction project"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 520px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}