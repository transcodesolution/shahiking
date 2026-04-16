import Image from "next/image";
import React from "react";

export default function BlogHero() {
  return (
    <div className="flex flex-col items-center justify-center relative z-0">
      <Image
        src="/Image/blogpage/blog_detail_hero.webp"
        alt="Hero Background"
        width={1920}
        height={355}
        className="w-full h-105 lg:h-88.75 object-cover"
      />
      <span className="absolute top-0 left-0 w-full h-full bg-[#00000080]"></span>
    </div>
  );
}
