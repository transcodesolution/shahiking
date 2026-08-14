"use client";

import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { LuClipboardCheck } from "react-icons/lu";

const packagingData = [
  {
    title: "Retail Packaging",
    subtitle: "55g, 100g, 250g, 500g, 1kg",
    icon: AiOutlineShopping,
    image: "/Image/exportpage/retail_packaging.webp",
    type: "image",
  },
  {
    title: "Bulk Packaging",
    subtitle: "5kg, 10kg, 20kg, 25kg",
    icon: LuClipboardCheck,
    image: "/Image/exportpage/bulk_packaging.webp",
    type: "image",
  },
  {
    title: "Custom Packaging",
    subtitle: "Private Label / OEM",
    icon: GoTag ,
    image: "/Image/exportpage/custom_packaging.webp",
    type: "custom",
    features: [
      "Private Label",
      "OEM Manufacturing",
      "Customized Designs",
      "Barcode Printing",
      "Country-Specific Labels",
    ],
  },
];

export default function PackagingOptions() {
  return (
    <div className="py-6 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
            <h1 className='display-heading text-primary font-bold text-center'>
                Packaging Options
            </h1>
          </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 py-6 md:py-8">
          {packagingData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[20px] border border-[#d8d8d8] bg-white transition-all duration-300 hover:border-[#9b7418] hover:shadow-lg cursor-pointer"
              >
                {/* Header */}
                <div className="flex min-h-16 items-center gap-3 border-b border-[#dedede] px-4 py-4 sm:px-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                    <Icon
                      size={30}
                      className="text-[#967014]"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="body-md font-semibold leading-5 text-[#967014]">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 body-sm text-[#666]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Cards */}
                {item.type === "image" ? (
                  <div className="relative flex items-center justify-center px-6 py-8">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={350}
                      height={180}
                      className="object-contain transition-transform duration-500"
                    />
                  </div>
                ) : (
                  /* Custom Packaging */
                  <div className="flex min-h-38.75 items-center justify-between gap-3 px-6 py-8 sm:min-h-41.25 sm:px-6">
                    <div className="flex flex-1 flex-col gap-4">
                      {item.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2"
                        >
                          <FaRegCircleCheck
                            size={15}
                            className="shrink-0 text-green-600"
                          />

                          <span className="text-[14px] leading-5 text-[#333] sm:text-[18px]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="relative h-30 w-23.75 shrink-0 sm:h-40 sm:w-30">
                      <Image
                        src={item.image}
                        alt="Custom packaging"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}