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

      <div className="absolute inset-0 flex flex-col lg:flex-row gap-12 items-center justify-center text-center md:mt-15 lg:mt-0 px-4 md:px-6 lg:px-8 z-10">
        <div className="w-full max-w-167">
          <h1 className="font-heading text-[32px] sm:text-[36px] md:text-[48px] xl:text-[64px] font-bold text-start text-secondary mx-auto leading:7 md:leading-12.5 lg:leading-18">
            Nourishing Modern
            <span className="block">Lifestyles with </span>Premium Health Foods
          </h1>
          <p className="body-md text-secondary text-start mb-6 max-w-141.25 py-2">
            At ShahiKing, we&apos;re building a trusted premium health food
            brand for modern families. Our range of nutritious snacks and
            high-protein plant-based foods is crafted with clean ingredients,
            authentic taste, and strict quality standards to support healthy,
            balanced lifestyles.🌿🥗
          </p>
          <div className="flex justify-start items-center gap-2 md:gap-4">
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
        <div className="md:p-16 lg:p-0">
          <Image
            src="/Image/aboutpage/about_bg.webp"
            alt="about background"
            width={788}
            height={756}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
