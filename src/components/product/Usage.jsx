"use client";

import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import { productsDetail } from "@/data/ui/productDetail";
import { useParams } from "next/navigation";

export default function Usage({ isOpen, onToggle }) {
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
        Usage

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
            {product?.usage?.length > 0 ? (
              product.usage.map((item, index) => (
                <div key={`${item.detail}-${index}`}>
                  <div className="flex justify-start items-center gap-2 py-1">
                    <span className="body-sm text-black">
                      {item.detail}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="body-sm text-black">
                No usage information available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}