import React from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { blogCardData } from "@/data/ui/blog";

export default function BlogRelated() {
  const relatedArticles = blogCardData.slice(0, 3);

  return (
    <section className="bg-secondary py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1720px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 sm:mb-10 lg:mb-12">
          <div className="flex items-center gap-3 sm:gap-4">
            <h2 className="font-heading text-2xl font-bold text-primary sm:text-[28px] md:text-[32px]">
              You May Also Like
            </h2>
            <span className="hidden sm:inline-block h-[1.5px] w-12 sm:w-16 bg-[#BFA35E]" />
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-primary transition-colors hover:text-[#5F470B]"
          >
            <span>See All Blogs</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 xl:gap-8">
          {relatedArticles.map((article, idx) => (
            <BlogCard key={article.id || idx} item={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
