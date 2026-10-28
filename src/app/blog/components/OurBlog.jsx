
import BlogCard from "@/components/BlogCard";
import { blogCardData } from "@/data/ui/blog";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function OurBlog() {
  return (
    <section
      id="latest-articles"
      className="relative overflow-hidden bg-[#FCFCFC] pb-10 md:pb-12"
    >
      <div className="relative z-10 mx-auto max-w-[1720px] px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="mb-3 flex items-center justify-between border-b border-[#E8E1D3] pb-5">
          <h2 className="font-heading text-xl md:text-[24px] font-semibold text-primary">
            Latest Articles
          </h2>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-lg md:text-xl font-medium text-primary transition-colors hover:text-[#5F470B]"
          >
            See All Blogs
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 pt-0 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-7 xl:gap-y-[68px]">
          {blogCardData.slice(0, 6).map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>

        {/* Pagination UI */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            type="button"
            aria-current="page"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#896811] text-xs font-medium text-white"
          >
            1
          </button>

          <Link
            href="/blog?page=2"
            aria-label="Page 2"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E1D3] bg-white text-xs text-[#896811] transition-colors hover:bg-[#896811] hover:text-white"
          >
            2
          </Link>

          <Link
            href="/blog?page=3"
            aria-label="Page 3"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E1D3] bg-white text-xs text-[#896811] transition-colors hover:bg-[#896811] hover:text-white"
          >
            3
          </Link>

          <Link
            href="/blog?page=2"
            aria-label="Next page"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E1D3] bg-white text-sm text-[#896811] transition-colors hover:bg-[#896811] hover:text-white"
          >
            →
          </Link>
        </div>
      </div>
    </section>
  );
}
