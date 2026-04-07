import React from "react";
import { GiCheckMark } from "react-icons/gi";

export default function OurStory() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/Image/aboutpage/ourstory_bg.webp"
        alt="our story bg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Leaf Image */}
      <div className="absolute top-0 left-0 z-10">
        <img
          src="/Image/aboutpage/ourstory_leaf.webp"
          alt="leaf"
          className="w-50 lg:w-87.5 object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#B3B2B0] -translate-x-1/2 my-6"></div>

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 items-center mb-16 relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 lg:top-13.5 xl:top-15 w-4 h-4 bg-secondary border-2 border-[#B5B4B1] rounded-full z-30"></div>

          <div></div>

          <div className="w-full">
            <h2 className="display-heading font-semibold text-[#2F4F2F] ml-4 md:ml-8 py-2">
              Our Story
            </h2>
            <p className="border border-dashed border-[#A8A7A6] max-w-169"></p>
            <p className="body-md ml-4 md:ml-8 mt-4">
              ShahiKing was created with a simple vision — to offer curated
              health foods that combine quality, purity, and taste.
              <span className="block">
                As eating habits evolve, people are becoming more aware of
                protein intake, clean-label products, and nutrient-dense snacks.
                We recognized this shift and built a brand that adapts to modern
                nutrition needs — without compromising authenticity.
              </span>
            </p>

            <ul className="mt-4 space-y-2 body-md ml-4 md:ml-8">
              <li className="flex items-center gap-2">
                <span className="text-primary">
                  <GiCheckMark />
                </span>
                Premium Nuts & Healthy Snacks
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">
                  <GiCheckMark />
                </span>
                Plant-Based Protein Products
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">
                  <GiCheckMark />
                </span>
                Nutrient-Rich Superfoods
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">
                  <GiCheckMark />
                </span>
                Everyday Clean-Label Essentials
              </li>
            </ul>
            <p className="body-md mt-2 ml-4 md:ml-8">
              And we continue to expand into new health-focused categories.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 items-center mb-16 relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 lg:top-13.5 xl:top-15 w-4 h-4 bg-secondary border-2 border-[#B5B4B1] rounded-full z-30"></div>

          <div className="text-left md:text-right">
            <h2 className="display-heading font-semibold text-[#2F4F2F] mr-8 py-2">
              Our Commitment
            </h2>
            <p className="border border-dashed border-[#A8A7A6] max-w-169 ml-auto"></p>
            <p className="body-md mt-4 mr-8 text-start md:text-end">Quality is our foundation.</p>

            <ul className="space-y-2 body-md mt-2 mr-8">
              <li className="flex justify-start md:justify-end items-center gap-2">
                Carefully sourced raw ingredients
                <span className="text-primary">
                  <GiCheckMark />
                </span>
              </li>
               <li className="flex justify-start md:justify-end items-center gap-2">
                Hygienic processing & safe packaging
                <span className="text-primary">
                  <GiCheckMark />
                </span>
              </li>
              <li className="flex justify-start md:justify-end items-center gap-2">
                FSSAI-compliant manufacturing
                <span className="text-primary">
                  <GiCheckMark />
                </span>
              </li>
               <li className="flex justify-start md:justify-end items-center gap-2">
                Balanced nutrition with great taste
                <span className="text-primary">
                  <GiCheckMark />
                </span>
              </li>
               <li className="flex justify-start md:justify-end items-center gap-2">
                Long-term distributor & retailer partnerships
                <span className="text-primary">
                  <GiCheckMark />
                </span>
              </li>
            </ul>

            <p className="mt-2 body-md mr-8 text-start md:text-end">
              Every product that carries the ShahiKing name reflects our promise of trust and consistency.
            </p>
          </div>

          <div></div>
        </div>

        {/* SECTION 3 */}
        <div className="grid md:grid-cols-2 items-center relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 lg:top-13.5 xl:top-15 w-4 h-4 bg-secondary border-2 border-[#B5B4B1] rounded-full z-30"></div>

          <div></div>

          <div>
            <h2 className="display-heading font-semibold text-[#2F4F2F] ml-4 md:ml-8 py-2">
              Our Vision
            </h2>
            <p className="border border-dashed border-[#A8A7A6] max-w-169"></p>
            <p className="body-md ml-4 md:ml-8 mt-4 leading-6">
              To become a trusted national brand in premium healthy food and
              plant-based nutrition, delivering innovation, quality, and value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
