import { recipePreparationsData } from "@/data/ui/recipes";
import React from "react";

export default function Preparations() {
  return (
    <div className="border-t border-[#AEAEAE]">
      <div className="shadow-brand">
        <h1 className="text-[28px] text-black font-semibold font-heading py-2">
          Preparation Steps
        </h1>
      </div>
      <div>
        {recipePreparationsData.map((item, index) => (
          <div key={index} >
            <div className="flex items-start gap-1 mb-2 w-full">
            <p className="body-md text-black font-medium">
              {item.title}
            </p>
            <span>:</span>
            <p className="body-md">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
