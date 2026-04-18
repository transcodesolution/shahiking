"use client";

import { nutritionData } from "@/data/ui/productDetail";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const NutritionTable = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {id} = nutritionData[0];
  const product = nutritionData.find((p) => p.id === id);
  return (
    <div className="mt-4">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-[18px] lg:text-[20px] xl:text-[24px] text-black font-heading font-semibold mb-3 flex justify-between items-center text-start w-full cursor-pointer"
      >
        Nutritional Information (Per 100g Approx)
        <span
          className={`text-[18px] transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>

      {isDropdownOpen && (
        <div>
          <div className="w-full bg-secondary rounded-[30px] p-3 ml-0 md:ml-3 xl:ml-5 max-w-136 mt-4">
            {/* Header */}
            <div className="flex justify-between px-15 py-3 font-semibold text-black font-heading text-[18px] lg:text-[20px] xl:text-[24px]">
              <span>Nutrient</span>
              <span>Value</span>
            </div>

            {/* Rows */}
            <div className="">
              {product?.nutrition?.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center mx-auto rounded-full px-15 py-3 body-sm 
                ${index % 2 === 0 ? "bg-[#FCFCFC]" : "bg-secondary"}
              `}
                >
                  <span className="text-black text-start ">
                    {item.name}
                  </span>
                  <span className="text-black w-16.25 text-start">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="body-sm text-black my-3">
            (Values may very slightly due to natural sourcing.)
          </p>
        </div>
      )}
    </div>
  );
};

export default NutritionTable;
