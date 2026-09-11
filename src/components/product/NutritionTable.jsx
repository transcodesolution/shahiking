"use client";

import { productsDetail } from "@/data/ui/productDetail";
import { useParams } from "next/navigation";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const NutritionTable = ({ isOpen, onToggle }) => {
  const params = useParams();
  const id = params?.id;

  const product = productsDetail.find((p) => p.slug === id);

  return (
    <div className="mt-4">
      {/* Header */}
      <button
        onClick={onToggle}
        className="text-[18px] lg:text-[20px] xl:text-[24px] text-black font-heading font-semibold mb-3 flex justify-between text-start items-center w-full cursor-pointer"
      >
        Nutritional Information (Per 100g Approx)

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
            {!product ? (
              <p className="text-red-500">
                No product found
              </p>
            ) : (
              <>
                {/* Nutrition Table */}
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
                          key={`${item.name}-${index}`}
                          className={`flex justify-between items-center mx-auto rounded-full px-15 py-3 body-sm ${
                            index % 2 === 0
                              ? "bg-[#FCFCFC]"
                              : "bg-secondary"
                          }`}
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

                {/* Note */}
                <p className="body-sm text-black my-3">
                  (Values may vary slightly due to natural sourcing.)
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionTable;