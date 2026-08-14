import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CustomProductSolution() {
  return (
    <div className="py-6 md:py-12 z-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="border border-[#C1C8C2] rounded-[20px] md:rounded-[30px] overflow-hidden">
          <Image
            src="/Image/exportpage/custom_product_packaging.webp"
            alt="bg"
            width={1678}
            height={472}
            className="object-cover"
          />
        </div>  
      </div>
    </div>
  );
}
