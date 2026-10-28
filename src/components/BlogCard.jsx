
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function BlogCard({ item }) {
  if (!item) return null;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#F5F3EC] bg-white shadow-[0px_1px_2px_0px_#0000000D] transition-shadow duration-300 hover:shadow-md">
      {/* Article Image */}
      <Link
        href={`/blog/${item.slug}`}
        className="relative block h-[180px] shrink-0 overflow-hidden sm:h-[200px] xl:h-[240px]"
        aria-label={`Read ${item.title}`}
      >
        <Image
          src={item.img}
          alt={item.title}
          width={546}
          height={310}
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Category Badge */}
        <span className="absolute bottom-2 left-2 rounded-full bg-[#FFFFFFF2] px-4 py-1 text-[12px] font-medium text-primary shadow-sm">
          Dietary Science
        </span>
      </Link>

      {/* Article Content */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-4 sm:pb-4">
        {/* Metadata */}
        <div className="mb-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px] leading-[20px] text-[#858585] sm:text-sm">
          <span>{item.time} Min Read</span>
          <span aria-hidden="true">•</span>
          <span>{item.date}</span>
          <span aria-hidden="true">•</span>
          <span>By Shahiking Team</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg sm:text-[20px] font-semibold leading-[26px] text-primary">
          <Link
            href={`/blog/${item.slug}`}
            className="transition-colors]"
          >
            {item.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-1.5 line-clamp-2 text-[12px] sm:text-[14px] leading-[22px] text-[#858585]">
          {item.description}
        </p>

        {/* Read More */}
        <div className="mt-auto pt-3">
          <Link
            href={`/blog/${item.slug}`}
            className="inline-flex items-center gap-1.5 text-sm sm:text-[16px] font-medium text-[#896811] transition-colors hover:text-[#5F470B]"
          >
            Read More
            <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#896811]">
              <FaArrowRight className="text-[8px]" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
