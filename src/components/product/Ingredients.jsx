"use client";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { ingredientsData } from "@/data/ui/productDetail";

export default function Ingredients() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const params = useParams();
  const id = params?.id;

  const product = ingredientsData.find((p) => p.slug === id);
  return (
    <div className="mt-4">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-[18px] lg:text-[20px] xl:text-[24px] text-black font-heading font-semibold flex justify-between items-center w-full cursor-pointer mb-3"
      >
        Ingredients
        <span
          className={`text-[18px] transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>
      {isDropdownOpen && (
        <div className="mt-2">
          {product?.ingredient?.length > 0 &&
            product.ingredient.map((item, index) => (
              <div key={index}>
                <p className="body-sm text-black">{item.detail}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
