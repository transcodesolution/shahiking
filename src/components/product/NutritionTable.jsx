"use client";

import { nutritionData } from "@/data/ui/productDetail";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const NutritionTable = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const params = useParams();
  const id = params?.id;

  const product = nutritionData.find((p) => p.slug === id);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-[18px] lg:text-[20px] xl:text-[24px] text-black font-heading font-semibold mb-3 flex justify-between text-start items-center w-full"
      >
        Nutritional Information (Per 100g Approx)
        <span
          className={`transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>

      {isDropdownOpen && (
        <div>
          {!product ? (
            <p className="text-red-500">No product found</p>
          ) : (
            <>
              <div className="w-full bg-secondary rounded-[30px] p-3 ml-0 md:ml-3 xl:ml-5 max-w-136 mt-4">
                {/* Header */}
                <div className="flex justify-between px-15 py-3 font-semibold text-black font-heading text-[18px] lg:text-[20px] xl:text-[24px]">
                  <span>Nutrient</span>
                  <span>Value</span>
                </div>

                {/* Rows */}
                <div>
                  {product.nutrition?.length > 0 ? (
                    product.nutrition.map((item, index) => (
                      <div
                        key={index}
                        className={`flex justify-between items-center mx-auto rounded-full px-15 py-3 body-sm 
                        ${index % 2 === 0 ? "bg-[#FCFCFC]" : "bg-secondary"}`}
                      >
                        <span className="text-black text-start">
                          {item.name}
                        </span>
                        <span className="text-black w-17 text-start">
                          {item.value}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-3">
                      No nutrition data available
                    </p>
                  )}
                </div>
              </div>

              <p className="body-sm text-black my-3">
                (Values may vary slightly due to natural sourcing.)
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NutritionTable;
