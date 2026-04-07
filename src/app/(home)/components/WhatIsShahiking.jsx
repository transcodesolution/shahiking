import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhatIsShahiking() {
  return (
    <div className="bg-primary relative h-auto lg:h-172.5 z-0">
      <Image
        src="/Image/homepage/whatis_background.webp"
        alt="what is background"
        width={1224}
        height={816}
        className="absolute right-0 top-0 h-full object-contain"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="block lg:flex justify-center items-center py-8 gap-20 xl:gap-37.5">
            <div className="mb-6 lg:mb-0">
            <Image 
            src="/Image/homepage/whatis_main_bg.webp" 
            alt="what is main bg"
            width={924}
            height={616} 
            className="h-full lg:h-154 object-contain"
            />
            </div>
            <div className="w-full max-w-145 mx-auto text-left relative z-10">
                <h1 className="display-heading text-secondary font-bold mb-3">What Is Shahiking?</h1>
                <p className="body-md text-secondary mb-6">Shahiking is a modern vegan food brand dedicated to health, nutrition, and conscious living.
                     We create plant based foods that support everyday wellness while respecting animals and the environment. 
                     Our journey begins with high quality tofu and continues toward a wide range of vegan and healthcare focused products. 
                     Shahiking is built for those who choose clean, mindful, and sustainable nutrition
                </p>
                <Link href="/" className="relative z-10 bg-secondary text-primary border border-primary font-medium px-8 py-2 rounded-full text-[16px] mt-4 hover:bg-primary hover:text-secondary hover:border hover:border-secondary duration-500 cursor-pointer">
                    Read More
                </Link>
            </div>

        </div>
      </div>
    </div>
  );
}

