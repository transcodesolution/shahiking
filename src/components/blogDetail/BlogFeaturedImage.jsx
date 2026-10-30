import React from "react";
import Image from "next/image";

export default function BlogFeaturedImage({ item }) {
  const imageSrc =
    item?.featuredImage || "/Image/blogpage/plan-based-protein.webp";
  const imageAlt =
    item?.title ||
    "Plant-Based Protein: The Ultimate Guide for Muscle Growth, Weight Loss & Clean Nutrition";
  const badgeText =
    item?.editorialBadge || "SHAHIKING WELLNESS EDITORIAL • VOL. 14";

  return (
    <section className="bg-[#FCFCFC] pb-10 sm:pb-14 md:pb-16 lg:pb-20">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[36px] lg:rounded-[40px] shadow-sm">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={2022}
            height={778}
            priority
            sizes="(max-width: 1720px) 100vw, 1720px"
            className="w-full h-auto aspect-[16/9] sm:aspect-[2.2/1] lg:aspect-[2.5/1] object-cover"
          />

          {/* Editorial Badge Overlay */}
          <div className="absolute bottom-4 left-4 z-10 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EBE4D5]/70 bg-white/95 px-4 py-2 shadow-md backdrop-blur-xs sm:gap-2.5 sm:px-5 sm:py-2.5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.14em] text-primary sm:text-xs sm:tracking-[0.16em] md:text-[13px]">
                {badgeText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
