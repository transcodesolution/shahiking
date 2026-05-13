import React from "react";

import NutritionBox from "../components/NutritionBox";
import RecipeVideo from "../components/RecipeVideo";
import RecipeVideoDetails from "../components/RecipeVideoDetails";

import Testimonials from "@/components/common/Testimonials";
import Recipes from "@/app/(home)/components/Recipes";
import RelatedProducts from "@/components/product/RelatedProducts";
import GetInTouch from "@/components/common/GetInTouch";

import { recipeMetadata } from "@/data/ui/recipes";

export async function generateMetadata({ params }) {
  const recipe = recipeMetadata.find((item) => item.id === params.id);

  if (!recipe) {
    return {
      title: "Recipe Not Found",
    };
  }

  return {
    title: recipe.metaTitle,

    description: recipe.metaDescription,

    alternates: {
      canonical: `https://shahiking.in/recipe/${recipe.slug}`,
    },
  };
}

export default function Page({ params }) {
  const recipe = recipeMetadata.find((item) => item.id === params.id);

  if (!recipe) {
    return <div>Recipe Not Found</div>;
  }

  const schema = {
    "@context": "https://schema.org",

    "@type": "Recipe",

    name: recipe.name,

    image: [recipe.image],

    description: recipe.description,

    prepTime: recipe.prepTime,

    cookTime: recipe.cookTime,

    totalTime: recipe.totalTime,

    recipeYield: recipe.recipeYield,

    nutrition: {
      "@type": "NutritionInformation",

      calories: recipe.calories,

      proteinContent: recipe.protein,
    },

    recipeIngredient: recipe.ingredients,

    recipeInstructions: recipe.instructions.map((step) => ({
      "@type": "HowToStep",

      text: step,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

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
