import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center relative z-0">
      <Image
        src="/Image/productpage/hero_bg.webp"
        alt="Hero Background"
        width={1920}
        height={355}
        className="w-full h-105 lg:h-88.75 object-cover"
      />
      <span className="absolute top-0 left-0 w-full h-full bg-[#00000080]"></span>
      <div className="absolute inset-0 top-35  text-center px-4 md:px-6 lg:px-8">
        <h1 className="font-heading text-[32px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold text-secondary mx-auto leading:[40px] sm:leading-12.5 lg:leading-18">
          Healthy &amp; Vegan Food
        </h1>
        <p className="paragraph md:text-xl text-secondary mb-8 py-2 mx-auto">
          Clean, nutritious and protein-rich food for your lifestyle
        </p>
      </div>
    </div>
  );
}