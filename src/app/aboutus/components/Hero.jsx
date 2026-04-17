import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-primary relative z-0 overflow-hidden h-auto xl:h-245 py-35 md:py-62 lg:py-0">
      {/* Background Image */}
      <Image
        src="/Image/aboutpage/hero_bg.webp"
        alt="Hero Background"
        width={1920}
        height={1080} 
        className="w-full h-162.5 xl:h-245 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary to-[#5CAB72] opacity-100 z-10"></div>

      {/* Optional Hover Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-[#66666600] to-[#396A47] opacity-100 z-10"></div>

      <div className="absolute inset-0 w-141.5 h-133.5 rounded-full blur-3xl -top-59 -left-52.25 bg-linear-to-tr from-[#6EBA83] to-[#32543B] opacity-100 transition duration-500 z-10"></div>
      <div className="absolute inset-0 w-141.5 h-133.5 rounded-full blur-3xl top-170 left-398 bg-linear-to-br from-[#6EBA83] to-[#32543B] opacity-100 transition duration-500 z-10"></div>
      <div className="absolute inset-y-0 w-453 h-45 -rotate-49 rounded-full blur-3xl top-40 left-65 bg-linear-to-br from-[#32543B] to-[#32543B] opacity-100 transition duration-500 z-10"></div>
      <div className="absolute inset-y-0 w-453 h-45 -rotate-49 rounded-full blur-3xl top-30 left-196 bg-linear-to-br from-[#32543B] to-[#32543B] opacity-100 transition duration-500 z-10"></div>
      <div className="absolute inset-y-0 w-453 h-45 -rotate-49 rounded-full blur-3xl top-20 -left-80 bg-linear-to-br from-[#32543B] to-[#32543B] opacity-100 transition duration-500 z-10"></div>

      {/* Content (optional) */}

      <div className="absolute inset-0 flex flex-col lg:flex-row gap-10 items-center justify-center text-center px-4 md:px-6 lg:px-8 z-10">
        <div className="w-full max-w-2xl">
          <h1 className="font-heading text-[32px] sm:text-[36px] md:text-[48px] xl:text-[64px] font-bold text-start text-secondary mx-auto leading:8 md:leading-12.5 lg:leading-18">
            Nourishing Modern
            <span className="block">Lifestyles with </span>Premium Health Foods
          </h1>
          <p className="body-md text-secondary text-start mb-6 max-w-141.25 py-2">
            At ShahiKing, we&apos;re building a trusted premium health food brand for
            modern families. Our range of nutritious snacks and high-protein
            plant-based foods is crafted with clean ingredients, authentic
            taste, and strict quality standards to support healthy, balanced
            lifestyles.🌿🥗
          </p>
          <div className="flex-wrap md:flex justify-start items-center gap-4">
            <button className="bg-secondary text-primary border border-secondary px-1 py-2 rounded-full w-full md:max-w-29.75 mb-2 md:mb-0 hover:bg-primary hover:text-[#FFFFFF] duration-500 cursor-pointer">
              <a href="#" className="text-[16px] font-medium">
                Healthy
              </a>
            </button>
            <button className="bg-secondary text-primary border border-secondary px-1 py-2 rounded-full w-full md:max-w-31 mb-2 md:mb-0 hover:bg-primary hover:text-[#FFFFFF] duration-500 cursor-pointer">
              <a href="#" className="text-[16px] font-medium">
                Premium
              </a>
            </button>
            <button className="bg-secondary text-primary border border-secondary px-1 py-2 rounded-full w-full md:max-w-35 mb-2 md:mb-0 hover:bg-primary hover:text-[#FFFFFF] duration-500 cursor-pointer">
              <a href="#" className="text-[16px] font-medium">
                Consistent
              </a>
            </button>
          </div>
        </div>
        <div>
            <img src="/Image/aboutpage/about_bg.webp" alt="about background" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
