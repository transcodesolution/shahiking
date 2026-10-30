import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function BlogCard({ item }) {
  if (!item) return null;

  const slug = item.slug || "plant-based-protein";
  const title =
    item.title ||
    "Plant-Based Protein: The Ultimate Guide for Muscle Growth, Weight Loss & Clean Nutrition";
  const image = item.img || "/Image/blogpage/blog_1.webp";
  const category = item.category || "Dietary Science";
  const time = item.time || 5;
  const date = item.date || "May 01, 2026";
  const description =
    item.description ||
    "Learn how plant-based protein supports muscle recovery, weight loss, and overall wellness.";

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#EBE4D5] bg-white shadow-xs transition-shadow duration-300 hover:shadow-md">
      {/* Article Image */}
      <Link
        href={`/blog/${slug}`}
        className="relative block h-[190px] shrink-0 overflow-hidden sm:h-[210px] xl:h-[235px]"
        aria-label={`Read ${title}`}
      >
        <Image
          src={image}
          alt={title}
          width={546}
          height={310}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Category Badge */}
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3.5 py-1 text-[11px] font-semibold text-primary shadow-xs sm:text-xs">
          {category}
        </span>
      </Link>

      {/* Article Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Metadata */}
        <div className="mb-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#7C7C7E] sm:text-[13px]">
          <span>{time} Min Read</span>
          <span aria-hidden="true">•</span>
          <span>{date}</span>
          <span aria-hidden="true">•</span>
          <span>By Shahiking Team</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold leading-[1.35] text-primary sm:text-[20px]">
          <Link
            href={`/blog/${slug}`}
            className="transition-colors hover:text-[#5F470B]"
          >
            {title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-[13px] leading-[1.6] text-[#7C7C7E] sm:text-[14px]">
          {description}
        </p>

        {/* Read More */}
        <div className="mt-auto pt-4 sm:pt-5">
          <Link
            href={`/blog/${slug}`}
            className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-[#5F470B] sm:text-[15px]"
          >
            <span>Read More</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary transition-transform duration-300 group-hover/btn:translate-x-0.5">
              <FaArrowRight className="text-[10px]" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
