import Image from "next/image";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  image: string;
  href: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Construction Management",
    description:
      "Expert oversight and coordination of your project from planning through completion.",
    image: "/images/1.png",
    href: "/services/construction-management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" strokeWidth={1.7}>
        <path
          d="M4 21V9l8-5 8 5v12M9 21v-6h6v6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "General Contracting",
    description:
      "Full-service general contracting delivering quality craftsmanship and reliable results.",
    image: "/images/2.png",
    href: "/services/general-contracting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" strokeWidth={1.7}>
        <path
          d="M4 20h16M6 20V10l6-4 6 4v10M10 20v-5h4v5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Design-Build",
    description:
      "Integrated design and construction solutions that streamline the process and reduce costs.",
    image: "/images/3.png",
    href: "/services/design-build",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" strokeWidth={1.7}>
        <path
          d="M4 4h11l5 5v11H4V4Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 4v6h6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Preconstruction",
    description:
      "Planning, budgeting and scheduling to set your project up for long-term success.",
    image: "/images/4.png",
    href: "/services/preconstruction",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" strokeWidth={1.7}>
        <path
          d="M5 4h14v16H5V4Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 8h8M8 12h8M8 16h5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="text-sm font-semibold tracking-wide text-[#0B1F3F]">
              What We Do
            </span>
            <span className="h-px w-10 bg-[#0B1F3F]/30" />
          </div>
          <h2 className="text-3xl font-bold text-[#0B1F3F] sm:text-4xl">
            Comprehensive Construction Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col">
              <div className="relative h-48 w-full overflow-hidden rounded-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="relative -mt-7 flex flex-1 flex-col pl-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1F3F] text-white shadow-md">
                  {service.icon}
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#0B1F3F]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3F] transition-colors hover:text-[#0B1F3F]/70"
                >
                  Learn More
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}