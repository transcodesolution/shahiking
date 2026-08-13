import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Image/exportpage/export_hero.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/35"></div> */}

      {/* Content */}
      <div className="relative z-10 container mx-auto min-h-screen flex items-center px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="max-w-25 mb-1">
            <h6 className="bg-[#7C601333] border border-primary rounded-3xl font-semibold py-1 px-4 text-center">EXPORT</h6>
          </div>
          <h1 className="font-heading text-black font-bold leading-tight text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px]">
            Bringing India's Finest
            <span className="block">
              <span className="text-primary">Healthy Foods</span> to
            </span>
            Global Markets
          </h1>

          <p className="mt-4 max-w-xl text-[#414844] text-sm sm:text-base md:text-lg leading-7">
            Premium-quality Makhana (Fox Nuts) and plant-based food products,
            proudly manufactured in India and trusted by international buyers.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 mt-6">
             <div className="bg-[#FFFFFF5A] border-2 border-primary rounded-xl w-full max-w-42 p-3 backdrop-blur-sm">
                <div className="flex justify-center">
                <Image
                 src="/Image/exportpage/premium_quality_icon.webp"
                 alt="premium quality"
                 width={30}
                 height={30} 
                />
                </div>
                <p className="text-[14px] md:text-[18px] font-bold text-[#414844] text-center mt-2 pt-2">PREMIUM QUALITY</p>
             </div>
             <div className="bg-[#FFFFFF5A] border-2 border-primary rounded-xl w-full max-w-42 p-3 backdrop-blur-sm">
                <div className="flex justify-center">
                <Image
                 src="/Image/exportpage/export_ready_icon.webp"
                 alt="premium quality"
                 width={30}
                 height={30} 
                />
                </div>
                <p className="text-[14px] md:text-[18px] font-bold text-[#414844] text-center mt-2 pt-2">EXPORT READY</p>
             </div>
             <div className="bg-[#FFFFFF5A] border-2 border-primary rounded-xl w-full max-w-42 p-3 backdrop-blur-sm">
                <div className="flex justify-center">
                <Image
                 src="/Image/exportpage/international_stds_icon.webp"
                 alt="premium quality"
                 width={30}
                 height={30} 
                />
                </div>
                <p className="text-[14px] md:text-[18px] font-bold text-[#414844] text-center mt-2 pt-2">INTERNATIONAL STDS</p>
             </div>
             <div className="bg-[#FFFFFF5A] border-2 border-primary rounded-xl w-full max-w-42 p-3 backdrop-blur-sm">
                <div className="flex justify-center">
                <Image
                 src="/Image/exportpage/global_trusted_icon.webp"
                 alt="premium quality"
                 width={30}
                 height={30} 
                />
                </div>
                <p className="text-[14px] md:text-[18px] font-bold text-[#414844] text-center mt-2 pt-2">GLOBAL TRUSTED</p>
             </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2 mt-8">
            <button className="text-secondary bg-primary px-1 py-2 rounded-full w-full max-w-59 mb-2 md:mb-0 hover:bg-white hover:text-primary hover:border hover:border-primary duration-500 cursor-pointer">
              <a
                href="#"
                className="text-[16px] font-medium flex justify-center items-center gap-2"
              >
                Get Export Quote{" "}
                <span>
                  <FaArrowRightLong />
                </span>
              </a>
            </button>
            <button className="bg-secondary text-primary border border-primary px-1 py-2 rounded-full w-full max-w-56 mb-2 md:mb-0 hover:bg-primary hover:text-white duration-500 cursor-pointer">
              <a href="#" className="text-[16px] font-medium">
                Become a Distributor
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
