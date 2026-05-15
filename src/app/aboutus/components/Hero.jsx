import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-primary relative z-0 overflow-hidden h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/Image/aboutpage/about_hero_bg.webp"
          alt="Hero Background"
          width={1920}
          height={980}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content (optional) */}

      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center text-left px-4 sm:px-6 lg:px-8 py-10 lg:py-0 z-10 min-h-screen gap-8 lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="w-full max-w-3xl">
          <h1 className="font-heading text-[28px] sm:text-[34px] md:text-[44px] lg:text-[54px] xl:text-[64px] font-bold text-shadow-md text-shadow-[#000000D9] text-secondary leading-tight md:leading-snug lg:leading-tight">
            Nourishing Modern
            <span className="block">Lifestyles with</span>
            Premium Health Foods
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-secondary mt-4 mb-6 max-w-xl">
            At ShahiKing, we&apos;re building a trusted premium health food
            brand for modern families. Our range of nutritious snacks and
            high-protein plant-based foods is crafted with clean ingredients,
            authentic taste, and strict quality standards to support healthy,
            balanced lifestyles. 🌿🥗
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button className="bg-secondary text-primary border border-secondary px-1 py-2 rounded-full w-full md:max-w-29.75 mb-2 md:mb-0 hover:bg-primary hover:text-white duration-500 cursor-pointer">
              <a href="#" className="text-[16px] font-medium">
                Healthy
              </a>
            </button>
            <button className="bg-secondary text-primary border border-secondary px-1 py-2 rounded-full w-full md:max-w-31 mb-2 md:mb-0 hover:bg-primary hover:text-white duration-500 cursor-pointer">
              <a href="#" className="text-[16px] font-medium">
                Premium
              </a>
            </button>
            <button className="bg-secondary text-primary border border-secondary px-1 py-2 rounded-full w-full md:max-w-35 mb-2 md:mb-0 hover:bg-primary hover:text-white duration-500 cursor-pointer">
              <a href="#" className="text-[16px] font-medium">
                Consistent
              </a>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-2xl">
          <Image
            src="/Image/aboutpage/about_bg.webp"
            alt="about background"
            width={705}
            height={705}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
