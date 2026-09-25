import Image from "next/image";

const projects = [
  { title: "Splendor Homes", location: "NJ", image: "/images/Splendor Homes.jpg", href: "/projects/corporate-office-complex" },
  { title: "Northbrook Estates", location: "NJ", image: "/images/Northbrook Estates.jpg", href: "/projects/riverside-apartments" },
  { title: "Rockland Engineering", location: "NJ", image: "/images/Rockland.png", href: "/projects/retail-plaza-renovation" },
];

function ProjectCard({ project, featured = false }: { project: typeof projects[number]; featured?: boolean }) {
  return <a href={project.href} className={`group relative block min-h-56 overflow-hidden bg-[#26374a] shadow-xl shadow-black/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream ${featured ? "h-[420px]" : "h-[204px]"}`}>
    <Image src={project.image} alt={project.title} fill sizes={featured ? "37vw" : "28vw"} className="object-cover transition-transform duration-500 group-hover:scale-105" priority={featured} />
    <span className="absolute inset-0 bg-gradient-to-t from-[#0b1829]/95 via-[#0b1829]/15 to-transparent" aria-hidden="true" />
    <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
      <span><span className="block text-lg font-semibold leading-tight">{project.title}</span><span className="mt-1 block text-sm text-white/80">{project.location}</span></span>
      <svg aria-hidden="true" className="mb-1 h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
    </span>
  </a>;
}

export default function FeaturedProjects() {
  return <section id="projects" aria-labelledby="projects-heading" className="bg-[radial-gradient(circle_at_48%_40%,#233b58_0%,#14263e_58%,#102037_100%)] px-12 py-7 text-white">
    <div className="mx-auto grid max-w-[1450px] grid-cols-[minmax(230px,0.8fr)_minmax(0,1.15fr)_minmax(0,0.88fr)] gap-5">
      <div className="flex flex-col items-start justify-center pr-7">
        <div className="mb-5 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.08em]"><span>Featured Projects</span><span className="h-px w-8 bg-cream" /></div>
        <h2 id="projects-heading" className="max-w-sm text-[clamp(28px,2.5vw,42px)] font-semibold leading-[1.13] tracking-tight">Building Excellence<br />Across Every Project</h2>
        <p className="mt-5 max-w-[310px] text-sm leading-6 text-white/90">From commercial developments to custom builds, our work speaks for itself.</p>
        <a href="/projects" className="mt-6 inline-flex min-h-11 items-center bg-cream px-6 text-xs font-medium uppercase tracking-wide text-[#14263e] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream">View All Projects</a>
      </div>
      <ProjectCard project={projects[0]} featured />
      <div className="grid grid-cols-1 gap-5"><ProjectCard project={projects[1]} /><ProjectCard project={projects[2]} /></div>
    </div>
  </section>;
}