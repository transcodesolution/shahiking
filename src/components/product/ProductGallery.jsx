"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function ProductGallery({ product }) {
  const images = product?.image || [];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Image */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-secondary group">
        {images[activeIndex] && (
          <Image
            src={images[activeIndex]}
            alt="Product image"
            width={872}
            height={642}
            className="object-cover transition-all ease-in-out w-full h-128 duration-700 rounded-[30px] border border-primary"
          />
        )}

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-62 -translate-y-1/2 bg-secondary p-2 rounded-full cursor-pointer shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040]"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-6 top-62 -translate-y-1/2 bg-secondary p-2 rounded-full cursor-pointer shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040]"
        >
          <FaArrowRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto md:overflow-visible pb-2 mt-8 snap-x snap-mandatory">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-26 xl:w-36 h-28 xl:h-38 shrink-0 rounded-[20px] overflow-hidden border snap-start cursor-pointer
              ${activeIndex === index ? "border-primary" : "border-primary"}`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={140}
              height={145}
              className="cursor-pointer rounded-[20px] w-full h-32 xl:h-38 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
