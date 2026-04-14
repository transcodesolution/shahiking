import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center relative z-0">
      <Image
        src="/Image/homepage/hero_bg.webp"
        alt="Hero Background"
        width={1920}
        height={1080}
        className="w-full h-162.5 lg:h-245 object-cover"
      />
      <div className="absolute inset-0 top-37.5 lg:top-60 text-center px-4 md:px-6 lg:px-8">
        <h1 className="font-heading text-[32px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold text-secondary mx-auto leading:[40px] sm:leading-12.5 lg:leading-18">
          Eat Clean. Live Pure.
          <span className="block">Feel Powerful.</span>{" "}
        </h1>
        <p className="body-md text-secondary mb-8 max-w-189.75 py-2 mx-auto">
          100% Plant-Based Nutrition Designed for Modern Life. Shahiking brings
          you premium plant-based and vegan nutrition. Wholesome superfoods,
          protein-rich products, and clean ingredients designed for everyday
          wellness.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
          <Link href="/product" className="bg-secondary body-sm font-medium text-primary p-2.5 rounded-full w-full md:max-w-47.5 mb-2 md:mb-0 hover:bg-primary hover:text-secondary duration-500 cursor-pointer">
            Discover Categories
          </Link>
          <Link href="/product" className="bg-primary text-secondary body-sm font-medium p-2.5 rounded-full w-full md:max-w-47.5 mb-2 md:mb-0 hover:bg-secondary hover:text-primary duration-500 cursor-pointer">
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
}
