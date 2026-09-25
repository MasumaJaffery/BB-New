import Image from "next/image";
import Link from "next/link";
import { Award, Building2, MapPin, ShieldCheck } from "lucide-react";

const STATS = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Building2, value: "150+", label: "Projects Completed" },
  { icon: MapPin, value: "NJ / NY", label: "Service Area" },
  { icon: ShieldCheck, value: "Licensed &", label: "Insured" },
];

const STATS_LOOP = [...STATS, ...STATS];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      {/* Background photo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Hero.png"
          alt="Brunswick Builders project site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Light navy wash, just enough for text legibility */}
        <div className="absolute inset-0 bg-navy-900/40" />
      </div>

      {/* Hero content */}
      <div className="mx-auto flex min-h-[480px] max-w-[1360px] flex-col justify-center px-5 py-10 sm:px-6 lg:min-h-[620px] lg:py-14">
        <h1 className="max-w-full text-[34px] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-white sm:text-[42px] md:max-w-[560px] md:text-[48px] lg:max-w-[620px] lg:text-[56px] lg:leading-[0.98] lg:tracking-[-0.025em]">
          Building
          <br />
          Stronger Futures.
          <br />
          <span className="text-gold-400">Together.</span>
        </h1>

        <p className="mt-5 max-w-full text-sm font-semibold leading-[1.7] text-white/90 sm:max-w-[420px] lg:mt-7 lg:max-w-[490px] lg:font-normal lg:leading-[1.75]">
  Brunswick Builders, LLC is a construction management and general
  contracting firm delivering exceptional results with integrity,
  transparency and unmatched attention to detail.
</p>

        <div className="mt-7 flex w-auto flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5 lg:mt-8">
          <Link
            href="/projects"
            className="w-full min-w-0 bg-navy-700 px-7 py-4 text-center text-[11px] font-semibold tracking-wide text-white transition-colors hover:bg-navy-600 sm:w-auto sm:min-w-[220px]"
          >
            VIEW OUR PROJECTS
          </Link>
          <Link
            href="/quote"
            className="w-full min-w-0 border border-cream-200 bg-cream-200/95 px-7 py-4 text-center text-[11px] font-semibold tracking-wide text-navy-900 transition-colors hover:bg-cream-200 sm:w-auto sm:min-w-[198px]"
          >
            START A PROJECT
          </Link>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-navy-900">
        <div className="mx-auto max-w-[1360px] px-4 py-4 sm:px-6 lg:px-0 lg:py-3">
          <div className="hidden min-h-[88px] items-center gap-x-4 lg:grid lg:grid-cols-4 lg:gap-x-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-9 w-9 flex-shrink-0 text-gold-400" strokeWidth={1.35} />
                <p className="leading-tight text-white/90">
                  <span className="block text-[18px] font-semibold">{value}</span>
                  <span className="mt-1 block text-[9px] font-semibold uppercase tracking-wide text-white/80">{label}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="hero-marquee block overflow-hidden lg:hidden">
            <div className="hero-marquee-track flex min-h-[auto] w-max items-center gap-x-6">
              {STATS_LOOP.map(({ icon: Icon, value, label }, index) => (
                <div
                  key={`${label}-${index}`}
                  className="flex flex-shrink-0 items-center gap-3"
                >
                  <Icon className="h-7 w-7 flex-shrink-0 text-gold-400" strokeWidth={1.35} />
                  <p className="whitespace-nowrap leading-tight text-white/90">
                    <span className="block text-[16px] font-semibold">{value}</span>
                    <span className="mt-1 block text-[9px] font-semibold uppercase tracking-wide text-white/80">{label}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}