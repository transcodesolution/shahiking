"use client";

import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import { productsDetail } from "@/data/ui/productDetail";
import { GiCheckMark } from "react-icons/gi";
import { useParams } from "next/navigation";

export default function KeyBenefits({ isOpen, onToggle }) {
  const params = useParams();
  const id = params?.id;

  const product = productsDetail.find((p) => p.slug === id);

  return (
    <div className="mt-4">
      {/* Header */}
      <button
        onClick={onToggle}
        className="text-[18px] lg:text-[20px] xl:text-[24px] text-black font-heading font-semibold mb-3 flex justify-between items-center w-full cursor-pointer"
      >
        Key Benefits

        <span
          className={`text-[18px] transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>

      {/* Content */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`transition-all duration-500 ease-in-out ${
              isOpen
                ? "translate-y-0 pb-2"
                : "-translate-y-2 pb-0"
            }`}
          >
            {product?.benefit?.length > 0 ? (
              product.benefit.map((item, index) => (
                <div key={`${item.detail}-${index}`}>
                  <div className="flex justify-start items-center gap-2 py-1">
                    <span className="text-[18px] lg:text-[22px] text-primary">
                      <GiCheckMark />
                    </span>

                    <span className="body-sm text-black">
                      {item.detail}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="body-sm text-black">
                No benefits available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}