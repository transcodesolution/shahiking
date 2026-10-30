
import Image from "next/image";
import FaqAccordion from "./FaqAccordion";

export default function FAQ() {
  return (
    <section className="relative isolate overflow-hidden py-12 md:py-25">

      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* FAQ Introduction */}
          <div className="w-full lg:sticky lg:top-24 lg:w-1/3 lg:shrink-0">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E3DCC4] bg-white px-4 py-[6px] text-xs font-semibold uppercase tracking-[0.05em] text-primary sm:text-base">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              FAQ
            </p>

            <h2 className="mb-4 font-heading text-xl font-bold leading-tight text-primary lg:text-2xl">
              Frequently Asked Questions
            </h2>

            <p className="max-w-md text-base text-accent">
              Find answers to common questions about our products, nutrition,
              and brand.
            </p>

            <p className="mt-6 text-lg font-semibold text-primary md:text-xl">
              Still curious? Contact Us
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="w-full min-w-0 lg:flex-1">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
