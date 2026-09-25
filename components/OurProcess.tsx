import {
  Search,
  ClipboardList,
  Compass,
  Construction,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We listen, learn and define your vision and goals.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    text: "Detailed planning, budgeting and scheduling for success.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design",
    text: "Collaborative or smart, functional and innovative solutions.",
    icon: Compass,
  },
  {
    number: "04",
    title: "Build",
    text: "Expert construction with quality and integrity.",
    icon: Construction,
  },
  {
    number: "05",
    title: "Deliver",
    text: "On-time delivery and lasting relationships.",
    icon: ShieldCheck,
  },
];

export default function OurProcess() {
  return (
    <section className="w-full bg-white px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#182942]">
            Our Process
          </p>
          <h2 className="text-[22px] font-semibold leading-tight text-[#14243d] md:text-[25px]">
            A Proven Approach to Successful Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex min-h-[150px] flex-col items-center px-4 py-4 text-center lg:px-7"
              >
                {index < steps.length - 1 && (
                  <span className="absolute right-[-1px] top-[18px] hidden w-7 border-t-2 border-dotted border-[#dcc7a9] lg:block" />
                )}

                <Icon
                  strokeWidth={1.35}
                  className="mb-2 h-[20px] w-[20px] text-[#17263d] md:h-[25px] md:w-[25px]"
                />

                <span className="text-[18px] font-semibold leading-none text-[#dcc4a2]">
                  {step.number}
                </span>

                <h3 className="mt-1 text-[14px] font-bold text-[#14243d]">
                  {step.title}
                </h3>

                <p className="mt-1.5 max-w-[150px] text-[14px] leading-[1.45] text-[#26354b]">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
