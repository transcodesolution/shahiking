
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[84vh] sm:h-[86vh] lg:h-[87vh] min-h-[540px] max-h-[800px] overflow-hidden">
      <Image
        src="/Image/aboutpage/about_hero_bg_img.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35"></div>

      <div className="relative z-10 container mx-auto h-full flex items-center px-5 sm:px-8 lg:px-12 pt-20 sm:pt-24 md:pt-28">
        <div className="max-w-3xl">
          <h1 className="font-heading text-secondary font-bold leading-tight text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px]">
            Nourishing Modern
            <span className="block">Lifestyles with</span>
            Premium Health Foods
          </h1>

          <p className="mt-5 max-w-2xl text-secondary text-sm sm:text-base md:text-lg leading-7">
            At ShahiKing, we're building a trusted premium health food brand
            for modern families. Our range of nutritious snacks and
            high-protein plant-based foods is crafted with clean ingredients,
            authentic taste, and strict quality standards to support healthy,
            balanced lifestyles. 🌿🥗
          </p>

          <div className="flex flex-wrap gap-3 pt-2 mt-8">
            <button className="bg-secondary text-primary border border-secondary px-3 py-2 rounded-full whitespace-nowrap hover:bg-primary hover:text-white duration-500 cursor-pointer">
              <a href="#" className="text-[16px] font-medium">
                Healthy
              </a>
            </button>

            <button className="bg-secondary text-primary border border-secondary px-3 py-2 rounded-full whitespace-nowrap hover:bg-primary hover:text-white duration-500 cursor-pointer">
              <a href="#" className="text-[16px] font-medium">
                Premium
              </a>
            </button>

            <button className="bg-secondary text-primary border border-secondary px-3 py-2 rounded-full whitespace-nowrap hover:bg-primary hover:text-white duration-500 cursor-pointer">
              <a href="#" className="text-[16px] font-medium">
                Consistent
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
