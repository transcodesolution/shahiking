
import { whychooseData } from "@/data/ui/categories";
import Image from "next/image";
import React from "react";
import { SiTicktick } from "react-icons/si";

export default function WhyChooseUs() {
  return (
    <div className="bg-white relative z-0">
      <Image
        src="/Image/homepage/whychoose_bgleft.webp"
        alt="why choose bg left"
        width={416.81}
        height={342}
        className="hidden xl:block absolute top-31.75 left-0 h-85.5"
      />
      <Image
        src="/Image/homepage/whychoose_bgleft1.webp"
        alt="why choose bg left1"
        width={250.8}
        height={250.8}
        className="hidden xl:block absolute top-43 left-50"
      />
      <Image
        src="/Image/homepage/whychoose_bgright.webp"
        alt="why choose bg right"
        width={416.81}
        height={342}
        className="hidden xl:block absolute top-31.75 right-0 h-85.5"
      />
      <Image
        src="/Image/homepage/whychoose_bgright1.webp"
        alt="why choose bg right1"
        width={250.8}
        height={250.8}
        className="hidden xl:block absolute top-43 right-50"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-15 relative z-10">
          <div className="mb-6">
            <h1 className="display-heading text-primary font-semibold text-center mb-4">
              Why Choose Shahiking?
            </h1>
            <p className="body-md text-black text-center">
              Not Just Snacks. A Standard.
            </p>
          </div>
          <div>
          {whychooseData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center py-3"
            >
              <div className="py-4 px-5 border-2 w-full md:max-w-124.5 rounded-[40px] border-secondary shadow-sm shadow-[#0000004D]">
                <p className="body-md text-black font-medium flex justify-center items-center gap-2">
                  <span className="text-[#02BC7D]">
                    <SiTicktick />
                  </span>
                  {item.name}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
