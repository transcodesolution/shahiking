import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function GetInTouch() {
  return (
    <div className="bg-secondary py-12 md:py-16 relative z-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Background Card */}
        <div className="bg-primary relative rounded-[20px] md:rounded-[30px] overflow-hidden">
          <Image
            src="/Image/homepage/getintouch_bg.webp"
            alt="bg"
            width={429}
            height={472}
            className="w-full h-75 sm:h-87.5 xl:h-106.5 object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center max-w-full md:max-w-156.75 mx-auto lg:ml-14 xl:ml-30 px-6 md:px-0">
            <h1 className="display-heading font-semibold text-secondary max-w-156.75">
              Join the Shahiking Movement
            </h1>

            <p className="text-[14px] sm:text-[16px] md:text-[24px] text-secondary mt-3 mb-4">
              Be part of a community that chooses health, sustainability,
              and better living. Start your journey with Shahiking today.
            </p>

            <Link
              href="/"
              className="bg-secondary text-primary border border-secondary px-5 py-2 rounded-full text-[14px] md:text-[16px] font-semibold text-center max-w-full sm:max-w-50 mt-4 hover:bg-primary hover:text-secondary duration-500 cursor-pointer">
              Join Community
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:block absolute -bottom-42.5 xl:-bottom-58.75 right-10 xl:right-20 transform -translate-y-1/2">
          <Image
            src="/Image/homepage/getintouch_img.webp"
            alt="side"
            width={429}
            height={472}
            className="h-87.5 xl:h-118 object-contain"
          />
        </div>

      </div>
    </div>
  );
}