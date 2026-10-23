
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative z-0 overflow-hidden flex flex-col items-center justify-center w-full h-[84vh] sm:h-[86vh] lg:h-[87vh] min-h-[540px] max-h-[800px]">
      <Image
        src="/Image/homepage/hero_bg.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />
      <span className="absolute inset-0 bg-[#00000050] z-[1]"></span>

      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28">
        <h1 className="font-heading text-[32px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-semibold text-secondary mx-auto leading-[1.2]">
          Eat Clean. Live Pure.
          <span className="block">Feel Powerful.</span>
        </h1>

        <p className="body-md text-secondary mb-6 sm:mb-8 max-w-189.75 py-2 mx-auto">
          100% Plant-Based Nutrition Designed for Modern Life. Shahiking brings
          you premium plant-based and vegan nutrition. Wholesome superfoods,
          protein-rich products, and clean ingredients designed for everyday
          wellness.
        </p>

        <div className="flex justify-center items-center gap-2 md:gap-4">
          <Link
            href="/product"
            className="bg-secondary body-sm font-medium text-primary p-2.5 rounded-full whitespace-nowrap min-w-max mb-2 md:mb-0 hover:bg-primary hover:text-secondary duration-500 cursor-pointer"
          >
            Discover Categories
          </Link>

          <Link
            href="/product"
            className="bg-primary text-secondary body-sm font-medium p-2.5 rounded-full whitespace-nowrap min-w-max mb-2 md:mb-0 hover:bg-secondary hover:text-primary duration-500 cursor-pointer"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
