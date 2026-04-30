"use client";

import { useState } from "react";
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
    <div className="">
      {/* MAIN IMAGE */}
      <div className="relative rounded-[30px] overflow-hidden max-w-150">
        <Image
          src={images[activeIndex]}
          alt="product"
          width={760}
          height={760}
          className="object-cover transition .5s ease-in-out w-120 h-120 md:w-150 md:h-150 duration-500 rounded-[30px] border border-primary"
        />

        {/* LEFT BUTTON */}
        <button
          onClick={handlePrev}
          className="absolute left-8 top-1/2 -translate-y-1/2  bg-secondary p-2 rounded-full cursor-pointer shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040]"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-800" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={handleNext}
          className="absolute right-8 top-1/2 -translate-y-1/2  bg-secondary p-2 rounded-full cursor-pointer shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040]"
        >
          <FaArrowRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex md:justify-center gap-3 mt-6 overflow-x-auto md:overflow-visible pb-2 px-4 md:px-0 custom-scrollbar snap-x snap-mandatory max-w-150">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`shrink-0 w-24 xl:w-30 h-24 xl:h-30 rounded-[20px] overflow-hidden border snap-start cursor-pointer
            ${activeIndex === index ? "border-primary" : "border-primary"}`}
          >
            <Image
              src={img}
              alt="thumb"
              width={152}
              height={152}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
