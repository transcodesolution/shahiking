import React from "react";
import {
  LuBookOpen,
  LuZap,
  LuSparkles,
  LuClock,
} from "react-icons/lu";

const pillars = [
  {
    number: "PILLAR 01",
    title: "Premium Nuts & Healthy Snacks",
    description: "Slow-roasted makhana with authentic spice balances.",
    icon: LuBookOpen,
  },
  {
    number: "PILLAR 02",
    title: "Plant-Based Protein Products",
    description: "Naturally bioavailable wholesome nourishment.",
    icon: LuZap,
  },
  {
    number: "PILLAR 03",
    title: "Nutrient-Rich Superfoods",
    description: "Dense in micronutrients, clean and unadulterated.",
    icon: LuSparkles,
  },
  {
    number: "PILLAR 04",
    title: "Everyday Clean-Label Essentials",
    description: "Honest pantry staples for health-conscious living.",
    icon: LuClock,
  },
];

export default function CoreProductPillars() {
  return (
    <section className="bg-[#FCFCFC] pb-16 pt-4 sm:pb-20 sm:pt-6 lg:pb-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <h3 className="mb-4 text-sm lg:text-2xl font-semibold uppercase tracking-[0.18em] text-primary sm:mb-6">
          Core Product Pillars:
        </h3>

        {/* Product Pillars */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {pillars.map(({ number, title, description, icon: Icon }) => (
            <div
              key={number}
              className="flex flex-col justify-between rounded-2xl border border-stroke bg-secondary p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* Icon */}
                <div className="mb-2.5 flex size-10 items-center justify-center rounded-xl border border-stroke bg-[#FAF8F5] text-primary sm:mb-4.5">
                  <Icon
                    size={20}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h4 className="mb-1.5 text-[16px] font-semibold leading-[1.3] text-[#0E0E0E] sm:mb-2.5 sm:text-lg">
                  {title}
                </h4>

                {/* Description */}
                <p className="mb-6 text-sm sm:text-[16px] leading-relaxed text-[#696860]">
                  {description}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-auto border-t border-stroke pt-4">
                <span className="text-sm sm:text-[16px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {number}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}