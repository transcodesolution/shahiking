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
    <div className="w-full">
      {/* MAIN IMAGE */}
      <div className="relative rounded-[30px] overflow-hidden border border-primary">
        <Image
          src={images[activeIndex]}
          alt="product"
          width={872}
          height={642}
          className="object-cover transition-all ease-in-out w-full h-125 duration-700 rounded-[30px]"
        />

        {/* LEFT BUTTON */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-62 -translate-y-1/2 bg-secondary p-2 rounded-full cursor-pointer shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040]"
        >
          <FaArrowLeft className="w-6 h-6 text-gray-800" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={handleNext}
          className="absolute right-6 top-62 -translate-y-1/2 bg-secondary p-2 rounded-full cursor-pointer shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040]"
        >
          <FaArrowRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex md:justify-center gap-3 mt-6 overflow-x-auto md:overflow-visible pb-2 px-4 md:px-0 custom-scrollbar snap-x snap-mandatory">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`shrink-0 w-25 xl:w-34 h-25 xl:h-36 rounded-[20px] overflow-hidden border snap-start
        ${activeIndex === index ? "border-primary" : "border-gray-300"}`}
          >
            <Image
              src={img}
              alt="thumb"
              width={162}
              height={170}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
