import Image from "next/image";
import Link from "next/link";
import { Award, Building2, MapPin, ShieldCheck } from "lucide-react";

const STATS = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Building2, value: "150+", label: "Projects Completed" },
  { icon: MapPin, value: "NJ / NY", label: "Service Area" },
  { icon: ShieldCheck, value: "Licensed &", label: "Insured" },
];

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
      <div className="mx-auto flex min-h-[620px] max-w-[1360px] flex-col justify-center px-6 py-14">
        <h1 className="max-w-[620px] text-[56px] font-bold uppercase leading-[0.98] tracking-[-0.025em] text-white">
          Building
          <br />
          Stronger Futures.
          <br />
          <span className="text-gold-400">Together.</span>
        </h1>

        <p className="mt-7 max-w-[490px] text-sm leading-[1.75] text-white/90">
          Brunswick Builders, LLC is a construction management and general
          contracting firm delivering exceptional results with integrity,
          transparency and unmatched attention to detail.
        </p>

        <div className="mt-8 flex w-auto flex-row flex-wrap gap-5">
          <Link
            href="/projects"
            className="min-w-[220px] bg-navy-700 px-7 py-4 text-center text-[11px] font-semibold tracking-wide text-white transition-colors hover:bg-navy-600"
          >
            VIEW OUR PROJECTS
          </Link>
          <Link
            href="/quote"
            className="min-w-[198px] border border-cream-200 bg-cream-200/95 px-7 py-4 text-center text-[11px] font-semibold tracking-wide text-navy-900 transition-colors hover:bg-cream-200"
          >
            START A PROJECT
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-900">
        <div className="mx-auto grid min-h-[98px] max-w-[1360px] grid-cols-4 gap-x-8 px-0 py-5">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-5">
              <Icon className="h-10 w-10 shrink-0 text-gold-400" strokeWidth={1.35} />
              <p className="leading-tight text-white/90">
                <span className="block text-[20px] font-semibold">{value}</span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wide text-white/80">{label}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}