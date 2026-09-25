import {
  ShieldCheck,
  UsersRound,
  MessageCircleMore,
  Star,
} from "lucide-react";

const reasons = [
  {
    title: "Quality Control",
    text: "Rigorous quality standards and continuous oversight throughout every phase.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced Team",
    text: "Skilled professionals with deep industry knowledge and hands-on experience.",
    icon: UsersRound,
  },
  {
    title: "Transparent Management",
    text: "Clear communication, realistic timelines and honest reporting at every step.",
    icon: MessageCircleMore,
  },
  {
    title: "Attention to Detail",
    text: "We take pride in craftsmanship and delivering exceptional results.",
    icon: Star,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white px-12 py-14">
      <div className="mx-auto max-w-[1180px]">
        <p className="mb-8 text-center text-[14px] font-semibold uppercase tracking-[0.06em] text-[#182942]">
          Why Choose Brunswick Builders?
        </p>

        <div className="grid grid-cols-4 gap-0">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className={[
                  "flex items-start gap-4 px-6 py-5",
                  index !== 0 ? "border-l border-[#dfcdb5]" : "",
                ].join(" ")}
              >
                <Icon
                  className="mt-0.5 h-[25px] w-[25px] shrink-0 text-[#17263d]"
                  strokeWidth={1.35}
                />

                <div>
                  <h3 className="text-[14px] font-bold text-[#14243d]">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 max-w-[185px] text-[14px] leading-[1.6] text-[#344257]">
                    {reason.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
