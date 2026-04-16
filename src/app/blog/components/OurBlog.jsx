import BlogCard from "@/components/BlogCard";
import { blogCardData } from "@/data/ui/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function OurBlog() {
  return (
    <div className="relative z-0 py-10">
      <Image
        src="/Image/blogpage/our_blogbg.webp"
        alt="Hero Background"
        width={1920}
        height={1482}
        className="w-full h-105 lg:h-392 object-cover opacity-15 absolute top-0 left-0 z-10"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-10">
          {blogCardData.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex justify-end relative z-10">
          <Link
            href="/product"
            className="body-sm text-primary font-medium flex items-center gap-2 underline underline-offset-3 group cursor-pointer"
          >
            See All Products
            <span className="font-medium group-hover:translate-x-1 transition-transform duration-500">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
