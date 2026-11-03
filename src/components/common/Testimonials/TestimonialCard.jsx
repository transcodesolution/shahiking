
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ item }) {
  const rating = Math.min(5, Math.max(0, Number(item.rating ?? 5)));

  return (
    <article className="flex h-62 w-full flex-col overflow-hidden rounded-lg border border-[#E8E2D5] bg-secondary p-6 transition-shadow duration-300 hover:shadow-sm">

      {/* Rating */}
      <div className="mb-2 flex shrink-0 items-center gap-0.5">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-[14px] ${index < rating ? "text-[#C59B27]" : "text-[#0E0E0E]"
              }`}
          />
        ))}
      </div>

      {/* Review */}
      <p className="mb-2.5 line-clamp-4 overflow-hidden text-[14px] leading-[1.45] font-normal italic text-[#68645C] sm:text-[16px]">
        &ldquo;{item.review}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-auto flex shrink-0 items-center gap-1.5 border-t border-[#E5E0D5] pt-2">

        {/* Avatar */}
        {item.img ? (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#D5CBB0]">
            <Image
              src={item.img}
              alt={item.name || "Customer"}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C59B2733] text-[14px] font-semibold text-[#C59B27]">
            {item.avatar || item.name?.slice(0, 2).toUpperCase()}
          </div>
        )}

        {/* Name and Role */}
        <div className="min-w-0">
          <h4 className="truncate text-[14px] leading-tight font-bold text-[#25231F]">
            {item.name}
          </h4>

          <p className="mt-0.5 truncate text-[12px] leading-tight font-normal text-[#68645C]">
            {item.role || item.date}
          </p>
        </div>
      </div>
    </article>
  );
}
