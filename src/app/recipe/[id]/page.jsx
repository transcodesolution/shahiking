import React from "react";
import { recipeDetailData} from "@/data/ui/recipes";
import NutritionBox from "../components/NutritionBox";
import RecipeVideo from "../components/RecipeVideo";
import RecipeVideoDetails from "../components/RecipeVideoDetails";
import Testimonials from "@/components/common/Testimonials";
import Recipes from "@/app/(home)/components/Recipes";
import RelatedProducts from "@/components/product/RelatedProducts";
import GetInTouch from "@/components/common/GetInTouch";

export default function page() {
  return (
    <>
    <div className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
          <div>
            <RecipeVideo />
            <div className="py-5">
              <NutritionBox />
            </div>
          </div>
          <div>
            <RecipeVideoDetails product={recipeDetailData[0]} />
          </div>
        </div>
      </div>
    </div>
    <Testimonials  bg="white"/>
    <Recipes/>
    <RelatedProducts/>
    <GetInTouch/>
    </>
  );
}
