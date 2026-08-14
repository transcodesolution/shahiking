import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GetInTouch() {
  return (
    <div className="py-12 md:py-16 relative z-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Card */}
        <div className="relative rounded-[20px] md:rounded-[30px] overflow-hidden border border-[#C1C8C2]">
          <Image
            src="/Image/exportpage/get_in_touch_bg.webp"
            alt="bg"
            width={1632}
            height={472}
            className="w-full h-124 sm:h-87.5 xl:h-106.5 object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center max-w-full lg:max-w-150 xl:max-w-169 mx-auto lg:ml-12 xl:ml-18 px-6 lg:px-0">
            <h1 className="display-heading font-semibold text-primary max-w-169">
              Let's Build a Healthy Future Together
            </h1>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#333333] mt-4 mb-2 max-w-full lg:max-w-150 xl:max-w-169">
             Partner with Shahiking for premium-quality healthy food products backed by reliable manufacturing,
             competitive pricing, flexible packaging, and dependable export services.
            </p>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#333333] mt-2 mb-3 max-w-full lg:max-w-150 xl:max-w-169">
             Whether you're an importer, distributor, retailer, or private-label brand, we're here to support your business growth with world-class products from India.
            </p>
 
            <div className="flex flex-wrap justify-start items-center gap-x-3 mt-2 md:mt-4">
            <Link
              href="/"
              className="bg-primary text-secondary border border-secondary px-4 py-2 rounded-full body-sm text-center max-w-full sm:max-w-50 mt-1 hover:bg-secondary hover:text-primary hover:border-primary duration-500 cursor-pointer"
            >
              Get Export Quote
            </Link>
            <Link
              href="/"
              className="bg-secondary text-primary border border-primary px-4 py-2 rounded-full body-sm text-center max-w-full sm:max-w-50 mt-1 hover:bg-primary hover:text-secondary duration-500 cursor-pointer"
            >
              Become a Distributor
            </Link>
            <Link
              href="/"
              className="bg-secondary text-primary border border-primary px-4 py-2 rounded-full body-sm text-center max-w-full sm:max-w-50 mt-1 hover:bg-primary hover:text-secondary duration-500 cursor-pointer"
            >
              Contact Export Team
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
