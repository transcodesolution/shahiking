import React from "react";
import { GiCheckMark } from "react-icons/gi";
import TimelineSection from "./TimelineSection";
import Image from "next/image";

export default function OurStory() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Image/aboutpage/ourstory_bg.webp"
        alt="our story bg"
        width={1920}
        height={994}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Leaf Image */}
      <div className="absolute top-0 left-0 z-10">
        <Image
          src="/Image/aboutpage/ourstory_leaf.webp"
          alt="leaf"
          width={436}
          height={421}
          className="w-50 lg:w-87.5 object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#B3B2B0] -translate-x-1/2 my-6"></div>

        <TimelineSection
          title="Our Story"
          description="ShahiKing was created with a simple vision — to offer curated health foods that combine quality, purity, and taste.
          As eating habits evolve, people are becoming more aware of protein intake, clean-label products, and nutrient-dense snacks. We recognized this shift and built a brand that adapts to modern nutrition needs — without compromising authenticity."
          points={[
            "Premium Nuts & Healthy Snacks",
            "Plant-Based Protein Products",
            "Nutrient-Rich Superfoods",
            "Everyday Clean-Label Essentials",
          ]}
          details="And we continue to expand into new health-focused categories."
        />

        <TimelineSection
          title="Our Commitment"
          description="Quality is our foundation."
          align="right"
          points={[
            "Carefully sourced raw ingredients",
            "Hygienic processing & safe packaging",
            "FSSAI-compliant manufacturing",
            "Balanced nutrition with great taste",
            "Long-term distributor & retailer partnerships",
          ]}
          details="Every product that carries the ShahiKing name reflects our promise of trust and consistency."
        />

        <TimelineSection
          title="Our Vision"
          description="To become a trusted national brand in the premium healthy food and plant-based nutrition segment, delivering innovation, quality, and value across multiple product categories."
        />
      </div>
    </div>
  );
}
