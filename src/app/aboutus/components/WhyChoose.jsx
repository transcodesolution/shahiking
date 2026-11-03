import React from "react";

const benefits = [
  {
    title: "Carefully Sourced Raw Ingredients",
    description:
      "Handpicked farm-level selections focusing exclusively on pristine makhana pods and fresh whole spices.",
    tag: "ORIGIN ASSURANCE",
  },
  {
    title: "Hygienic Processing & Safe Packaging",
    description:
      "Controlled processing environments and multi-layer food-grade packaging that safeguards freshness and shelf stability.",
    tag: "SANITARY STANDARDS",
  },
  {
    title: "FSSAI-Compliant Manufacturing",
    description:
      "Operating strictly within prescribed statutory food safety benchmarks and regulatory hygiene guidelines.",
    tag: "REGULATORY PROTOCOL",
  },
  {
    title: "Balanced Nutrition with Great Taste",
    description:
      "Wholesome macro and micronutrient profiles paired with time-tested spice blending for natural culinary satisfaction.",
    tag: "TASTE & HEALTH",
  },
  {
    title: "Long-Term Distributor & Retailer Partnerships",
    description:
      "Committed supply chain alignment, transparent communication, and collaborative commercial terms for business partners.",
    tag: "B2B RELIABILITY",
  },
  {
    title: "Trust & Consistency",
    description:
      "Uniformity in batch sizing, moisture tolerance, roasting crispness, and aroma across every shipment dispatched.",
    tag: "BATCH QUALITY",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#FCFCFC] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section Intro */}
        <div className="mb-8 sm:mb-10">
          <span className="mb-2.5 block text-sm font-semibold uppercase tracking-[0.18em] text-primary sm:text-base">
            Integrity &amp; Rigor
          </span>

          <h2 className="font-heading text-4xl font-bold leading-tight text-[#0E0E0E] sm:text-5xl lg:text-6xl">
            Why Choose{" "}
            <span className="text-primary">
              ShahiKing Exports
            </span>
          </h2>

          <p className="mt-3 text-sm text-[#696860] sm:text-base lg:text-xl">
            Quality is our foundation. Consistency is our promise.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {benefits.map(({ title, description, tag }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-stroke bg-secondary p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7"
            >
              <div className="flex-1">
                <h3 className="mb-2.5 text-lg leading-snug text-[#0E0E0E] sm:text-xl font-bold">
                  {title}
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-[#696860]">
                  {description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 border-t border-stroke pt-4">
                <span className="text-sm md:text-base font-semibold uppercase tracking-[0.14em] text-primary">
                  {tag}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-6 rounded-2xl border border-stroke bg-secondary px-5 py-6 text-center sm:mt-8 sm:px-8">
          <p className="text-sm font-semibold leading-relaxed text-[#0E0E0E] sm:text-base lg:text-xl">
            &ldquo;Every product that carries the ShahiKing name reflects our
            promise of trust and consistency.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}