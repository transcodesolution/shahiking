import FAQ from "@/app/blog/components/FAQ";
import Image from "next/image";
import React from "react";

export default function BlogFaq() {
  return (
    <div className="relative z-0 overflow-hidden">
      <Image
        src="/Image/blogpage/blog_detail_leaf.webp"
        alt="blog detail leaf"
        width={118}
        height={70}
        className="h-17.5 object-cover hidden xl:block absolute top-50 -right-8 z-10 overflow-hidden -rotate-20 blur-2"
      />
      <Image
        src="/Image/blogpage/blog_detail_leaf.webp"
        alt="blog detail leaf"
        width={118}
        height={70}
        className="h-17.5 object-cover hidden xl:block absolute bottom-1 -left-10 z-10 overflow-hidden rotate-40 blur-2"
      />
       <div>
        <FAQ/>
      </div>
    </div>
  );
}
