"use client";

import { nutritionData } from "@/data/ui/productDetail";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function NutritionBox () {
  return (
    <div className="mt-4">
      <button
        className="display-heading text-primary font-heading font-semibold mb-3 flex justify-between items-center text-start w-full cursor-pointer"
      >
        Nutritional Information Box
        {/* <span
          className={`text-[18px] transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown />
        </span> */}
      </button>

        <div className="w-full bg-[#FCFCFC] rounded-[30px] border border-accent p-3 max-w-160 mt-5">
          {/* Header */}
          <div className="flex justify-between px-12 md:px-20 py-3 font-semibold text-black font-heading text-[18px] lg:text-[20px] xl:text-[24px]">
            <span className="w-35 text-start">Nutrient</span>
            <span className="w-20 text-start">Value</span>
          </div>

          {/* Rows */}
          <div className="">
            {nutritionData.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center mx-auto rounded-full px-12 md:px-20 py-3 body-sm 
                ${index % 2 === 0 ? "bg-secondary" : "bg-[#FCFCFC]"}
              `}
              >
                <span className="text-black w-35 text-start">{item.name}</span>
                <span className="text-black w-20 text-start">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};
