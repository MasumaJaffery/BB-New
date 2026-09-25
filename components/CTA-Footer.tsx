"use client";

import {
  ArrowRight,
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = ["About Us", "Services", "Projects", "Our Process", "Contact Us"];
const services = [
  "Construction Management",
  "General Contracting",
  "Design-Build",
  "Preconstruction",
];

export default function CTAFooter() {
  return (
    <footer className="w-full">
      {/* CTA */}
      <section
        className="relative overflow-hidden bg-[#10243d] px-8 py-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,31,52,.88),rgba(12,31,52,.88)), url('/images/brunswick-bg.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-5">
          <div>
            <h2 className="text-[24px] font-light leading-tight text-white">
              Have a project in mind?
            </h2>
            <p className="text-[23px] font-semibold leading-tight text-[#e0c39d]">
              Let’s build something exceptional.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex min-h-[43px] items-center gap-5 bg-[#e1c49d] px-5 text-[12px] font-semibold uppercase text-[#14243d] transition hover:bg-[#edd6b7]"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <section className="bg-[#0c223b] px-8 pb-8 pt-10 text-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[1.35fr_1fr_1fr_1fr_1.2fr] gap-10">
          <div className="pr-2">
            <div className="mb-4">
              <div className="text-[18px] font-bold leading-none tracking-[0.08em]">
                BRUNSWICK
              </div>
              <div className="mt-1 text-[10px] tracking-[0.35em]">BUILDERS</div>
            </div>

            <p className="max-w-[190px] text-[12px] leading-[1.65] text-white/75">
              Construction management and general contracting services
              delivered with integrity, quality and commitment.
            </p>
          </div>

          <FooterColumn title="Quick Links" items={quickLinks} />
          <FooterColumn title="Services" items={services} />

          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <ul className="space-y-2 text-[12px] leading-[1.7] text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e0c39d]" />
                <span>
                  125 Marvin Drive, Suite G-202
                  <br />
                  Edison, NJ 08817
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#e0c39d]" />
                <span>732-452-9522</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#e0c39d]" />
                <span>info@brunswickbuilders.com</span>
              </li>
            </ul>
          </div>

          <div>
            <FooterHeading>Certifications</FooterHeading>
            <ul className="space-y-1.5 text-[12px] leading-[1.75] text-white/80">
              <li>New Jersey Business Registration</li>
              <li>New Jersey Home Improvement</li>
              <li>Contractor Registration</li>
              <li>NJ DCA License # 13VH009100</li>
              <li>Fully Licensed &amp; Insured</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1180px] items-center justify-between border-t border-white/10 pt-4">
          <p className="w-full text-center text-[12px] text-white/65">
            © 2024 Brunswick Builders, LLC. All Rights Reserved.
          </p>

          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center border border-white/40 text-white/80 transition hover:bg-white/10"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.05em] text-white">
      {children}
    </h3>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[12px] text-white/80 transition hover:text-[#e0c39d]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
