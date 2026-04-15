import { recipeIngredientsData } from "@/data/ui/recipes";
import React from "react";
import { FcOk } from "react-icons/fc";

export default function Ingredients() {
  return (
    <div className="border-t border-[#AEAEAE]">
      <div className="shadow-brand">
        <h1 className="text-[28px] text-black font-semibold font-heading py-2">
          Ingredients
        </h1>
      </div>
      <div>
        {recipeIngredientsData.map((item, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-[24px] font-medium">
                <FcOk />
              </p>
              <p className="body-md">{item.details}</p>
            </div>
          </div>
        ))}
        <p className="body-md">
          <span>👉 Add “Shop Ingredients” button linking to product pages.</span>
        </p>
      </div>
    </div>
  );
}
