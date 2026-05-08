import React from "react";

import NutritionBox from "../components/NutritionBox";
import RecipeVideo from "../components/RecipeVideo";
import RecipeVideoDetails from "../components/RecipeVideoDetails";

import Testimonials from "@/components/common/Testimonials";
import Recipes from "@/app/(home)/components/Recipes";
import RelatedProducts from "@/components/product/RelatedProducts";
import GetInTouch from "@/components/common/GetInTouch";

import RecipeSchema from "../schema";

import { recipeMetadata } from "@/data/ui/recipes";

export async function generateMetadata({
  params,
}) {

  const recipe = recipeMetadata.find(
    (item) => item.id === params.id
  );

  if (!recipe) {
    return {
      title: "Recipe Not Found",
    };
  }

  return {
    title: recipe.metaTitle,

    description: recipe.metaDescription,

    alternates: {
      canonical:
        `https://shahiking.in/recipe/${recipe.slug}`,
    },
  };
}

export default function Page({ params }) {

  const recipe = recipeMetadata.find(
    (item) => item.id === params.id
  );

  if (!recipe) {
    return <div>Recipe Not Found</div>;
  }

  return (
    <>
      <RecipeSchema recipe={recipe} />

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
              <RecipeVideoDetails />
            </div>

          </div>

        </div>
      </div>

      <Testimonials bg="white" />

      <Recipes />

      <RelatedProducts />

      <GetInTouch />
    </>
  );
}