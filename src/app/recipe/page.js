import React from "react";
import Testimonials from "@/components/common/Testimonials";
import GetInTouch from "@/components/common/GetInTouch";
import Hero from "./components/Hero";
import OurRecipe from "./components/OurRecipe";
import RecipeSchema from "./schema";

export const metadata = {
  title: "Healthy High Protein Recipes | Vegan & Snack Recipes",

  description:
    "Explore healthy high-protein recipes by Shahiking with vegan meals, makhana snacks & nutritious dishes for balanced everyday eating.",

  alternates: {
    canonical: "https://shahiking.in/recipe",
  },

  openGraph: {
    title: "Healthy High Protein Recipes",

    description:
      "Healthy vegan & high-protein recipes by Shahiking.",

    url: "https://shahiking.in/recipe",

    siteName: "Shahiking",

    images: [
      {
        url: "https://shahiking.in/Image/logo.webp",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Healthy High Protein Recipes",

    description:
      "Explore healthy vegan recipes and snacks.",

    images: ["https://shahiking.in/Image/logo.webp"],
  },
};

export default function page() {
  return (
    <React.Fragment>
      <RecipeSchema/>
      <Hero />
      <OurRecipe />
      <Testimonials bg="bg-white" />
      <GetInTouch />
    </React.Fragment>
  );
}
