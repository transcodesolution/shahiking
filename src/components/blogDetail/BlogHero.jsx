import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function BlogHero({ item }) {
  const category = item?.category || item?.name || "Nutrition";
  const title =
    item?.fullTitle ||
    (item?.title && item?.subtitle
      ? `${item.title} ${item.subtitle}`
      : item?.title ||
        "Plant-Based Protein: The Ultimate Guide for Muscle Growth, Weight Loss & Clean Nutrition");

  return (
    <section className="bg-[#FCFCFC] pt-28 pb-8 sm:pt-32 sm:pb-10 md:pt-36 md:pb-12 lg:pt-40 lg:pb-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2 text-sm sm:text-[15px] text-[#7C7C7E]"
        >
          <Link
            href="/"
            className="transition-colors hover:text-primary"
          >
            Home
          </Link>
          <span className="text-[#A0A0A0]">/</span>
          <Link
            href="/blog"
            className="transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <span className="text-[#A0A0A0]">/</span>
          <span className="font-medium capitalize text-primary">{category}</span>
        </nav>

        {/* Category Pill Badge */}
        <div className="mt-4 flex justify-center sm:mt-5">
          <span className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-1.5 text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-primary">
            {category}
          </span>
        </div>

        {/* Centered Article Title */}
        <h1 className="mx-auto mt-5 max-w-[1040px] text-center font-heading text-[30px] font-bold leading-[1.14] tracking-[-0.01em] text-primary sm:mt-6 sm:text-[40px] md:text-[50px] lg:text-[58px] xl:text-[64px]">
          {title}
        </h1>

        {/* Social Share Bar */}
        <div className="mt-7 flex items-center justify-center gap-2.5 sm:mt-8 sm:gap-3 md:mt-10">
          <span className="mr-1 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-[#7C7C7E]">
            SHARE:
          </span>

          <a
            href="https://www.facebook.com/sharer/sharer.php"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="group flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary shadow-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white sm:h-10 sm:w-10"
          >
            <FaFacebookF className="h-3.5 w-3.5 transition-transform duration-200 sm:h-4 sm:w-4" />
          </a>

          <a
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
            className="group flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary shadow-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white sm:h-10 sm:w-10"
          >
            <FaXTwitter className="h-3.5 w-3.5 transition-transform duration-200 sm:h-4 sm:w-4" />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Instagram"
            className="group flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary shadow-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white sm:h-10 sm:w-10"
          >
            <FaInstagram className="h-3.5 w-3.5 transition-transform duration-200 sm:h-4 sm:w-4" />
          </a>

          <a
            href="https://www.linkedin.com/sharing/share-offsite/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="group flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-primary shadow-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white sm:h-10 sm:w-10"
          >
            <FaLinkedinIn className="h-3.5 w-3.5 transition-transform duration-200 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
