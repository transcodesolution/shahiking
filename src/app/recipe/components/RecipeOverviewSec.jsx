import { recipeOverviewData } from "@/data/ui/recipes";
import React from "react";

export default function RecipeOverviewSec() {
  return (
    <div className="border-t border-[#AEAEAE]">
      <div className="shadow-brand">
        <h1 className="text-[28px] text-black font-semibold font-heading py-2">
          Recipe Overview Section
        </h1>
      </div>
      <div>
        {recipeOverviewData.map((item, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <p className="body-md text-black">
              <span className="font-medium">Author: </span>
              {item.title}
            </p>
            <p className="body-md text-black">
              <span className="font-medium">Cuisine: </span>
              {item.cuisine}
            </p>
            <p className="body-md text-black">
              <span className="font-medium">Best For: </span>
              {item.best_for}
            </p>
            <div>
              <p className="body-md text-black py-2">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
