import React from "react";
import RecipeVideo from "./RecipeVideo";
import NutritionBox from "./NutritionBox";
import RecipeVideoDetails from "./RecipeVideoDetails";
import { recipeDetailData, recipeOverviewData } from "@/data/ui/recipes";
import RecipeOverviewSec from "./RecipeOverviewSec";


export default function RecipeDetails() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
          <div>
            <RecipeVideo/>
            <div className="py-5">
                <NutritionBox/>
            </div>
          </div>
          <div>
             <RecipeVideoDetails product={recipeDetailData[0]}/>
          </div>
        </div>
      </div>
    </div>
  );
}
