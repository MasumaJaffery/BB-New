import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Service = { title: string; description: string; image: string; href: string; icon: ReactNode };

const services: Service[] = [
  { title: "Construction Management", description: "Expert oversight and coordination of your project from planning through completion.", image: "/images/1.png", href: "/services/construction-management", icon: <><path d="M4 21V9l8-5 8 5v12M9 21v-6h6v6" /></> },
  { title: "General Contracting", description: "Full-service general contracting delivering quality craftsmanship and reliable results.", image: "/images/2.png", href: "/services/general-contracting", icon: <><path d="M4 20h16M6 20V10l6-4 6 4v10M10 20v-5h4v5" /></> },
  { title: "Design-Build", description: "Integrated design and construction solutions that streamline the process and reduce costs.", image: "/images/3.png", href: "/services/design-build", icon: <><path d="M4 4h11l5 5v11H4V4Z" /><path d="M14 4v6h6" /></> },
  { title: "Preconstruction", description: "Planning, budgeting and scheduling to set your project up for long-term success.", image: "/images/4.png", href: "/services/preconstruction", icon: <><path d="M5 4h14v16H5V4Z" /><path d="M8 8h8M8 12h8M8 16h5" /></> },
];

export default function ServicesSection() {
  return <section aria-labelledby="services-heading" className="bg-white px-5 py-20 text-[#14263e]">
    <div className="mx-auto max-w-[1450px]">
      <div className="mb-10 text-center">
        <div className="mb-3 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.06em]">What We Do<span aria-hidden="true" className="h-px w-8 bg-[#d9bd97]" /></div>
        <h2 id="services-heading" className="text-[40px] font-semibold tracking-tight">Comprehensive Construction Services</h2>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {services.map(service => <article key={service.title} className="flex h-full flex-col border border-[#e8ebef] bg-white shadow-sm shadow-[#17283e]/[0.03]">
          <div className="relative h-40 w-full overflow-hidden"><Image src={service.image} alt="" fill sizes="25vw" className="object-cover" /></div>
          <div className="relative flex flex-1 flex-col px-6 pb-6">
            <div className="-mt-7 mb-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#142b48] text-white shadow-sm"><svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{service.icon}</svg></div>
            <h3 className="max-w-[190px] text-lg font-semibold leading-tight">{service.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-[#5e6670]">{service.description}</p>
            <Link href={service.href} className="mt-5 inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14263e]">Learn More <span aria-hidden="true" className="text-lg leading-none">→</span></Link>
          </div>
        </article>)}
      </div>
    </div>
  </section>;
}