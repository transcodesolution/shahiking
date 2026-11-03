import React from "react";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-[#FCFCFC] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-12 xl:gap-16">

          {/* Story Image */}
          <div className="w-full lg:w-[52%]">
            <div className="relative aspect-685/500 w-full overflow-hidden rounded-2xl border border-[#E5E0D7] shadow-sm">
              <Image
                src="/Image/aboutpage/our-story.webp"
                alt="Pure Quality Sourcing"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 52vw"
                className="object-cover"
              />

              {/* Image Badge */}
              <span className="absolute left-4 top-4 z-10 rounded-lg border border-stroke bg-[#FAF8F5]/90 px-3.5 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-xs sm:left-5 sm:top-5">
                Pure Quality Sourcing
              </span>
            </div>
          </div>

          {/* Story Content */}
          <div className="flex w-full flex-col justify-center lg:w-[48%]">

            <span className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary sm:text-[16px]">
              Our Heritage &amp; Evolution
            </span>

            <h2 className="mb-5 font-heading text-4xl font-bold leading-tight text-primary sm:mb-6 sm:text-5xl lg:text-6xl">
              Our Story
            </h2>

            <p className="mb-4 text-base font-normal leading-relaxed text-[#222521] sm:mb-5 sm:text-lg xl:text-xl">
              ShahiKing was created with a simple vision—to offer curated health
              foods that combine quality, purity, and taste.
            </p>

            <p className="mb-7 text-sm leading-relaxed text-[#696860] sm:mb-8 sm:text-base">
              As eating habits evolve, people are becoming more aware of protein
              intake, clean-label products, and nutrient-dense snacks. We recognized
              this shift and built a brand that adapts to modern nutrition
              needs—without compromising authenticity.
            </p>

            {/* Quote */}
            <div className="w-full rounded-xl border-l-2 border-primary bg-secondary px-5 py-5">
              <p className="text-sm font-medium italic leading-relaxed text-primary sm:text-base">
                &ldquo;And we continue to expand into new health-focused categories.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}