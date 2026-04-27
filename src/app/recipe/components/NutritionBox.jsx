"use client";

import { recipeNutritionData } from "@/data/ui/recipes";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function NutritionBox() {
  const params = useParams();
  const id = params?.id;

  const product = recipeNutritionData.find((p) => p.slug === id);
  return (
    <div className="mt-4">
      <button className="display-heading text-primary font-heading font-semibold mb-3 flex justify-between items-center text-start w-full cursor-pointer">
        Nutritional Information Box
      </button>

      <div className="w-full bg-[#FCFCFC] rounded-[30px] border border-accent p-3 max-w-160 mt-5">
        {/* Header */}
        <div className="flex justify-between px-12 md:px-22 py-3 font-semibold text-black font-heading text-[18px] lg:text-[20px] xl:text-[24px]">
          <span className="w-35 text-start">Nutrient</span>
          <span className="w-20 text-start">Value</span>
        </div>

        {/* Rows */}
        <div className="">
          {product?.nutrition?.length > 0 &&
          product.nutrition.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center mx-auto rounded-full px-12 md:px-22 py-3 body-sm 
                ${index % 2 === 0 ? "bg-[#FCFCFC]" : "bg-secondary"}
              `}
            >
              <span className="text-black text-start">{item.name}</span>
              <span className="text-black w-20 text-start">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
