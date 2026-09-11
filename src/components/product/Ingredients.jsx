"use client";

import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import { useParams } from "next/navigation";
import { productsDetail } from "@/data/ui/productDetail";

export default function Ingredients({ isOpen, onToggle }) {
  const params = useParams();
  const id = params?.id;

  const product = productsDetail.find((p) => p.slug === id);

  return (
    <div className="mt-4">
      {/* Header */}
      <button
        onClick={onToggle}
        className="text-[18px] lg:text-[20px] xl:text-[24px] text-black font-heading font-semibold flex justify-between items-center w-full cursor-pointer mb-3"
      >
        Ingredients

        <span
          className={`text-[18px] transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>

      {/* Content*/}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
            {product?.ingredient?.length > 0 ? (
              product.ingredient.map((item, index) => (
                <div key={`${item.detail}-${index}`}>
                  <p className="body-sm text-black py-1">
                    {item.detail}
                  </p>
                </div>
              ))
            ) : (
              <p className="body-sm text-black">
                No ingredients available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}