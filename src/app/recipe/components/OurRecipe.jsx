
import RecipeCard from "@/components/RecipeCard";
import { recipeCardData} from "@/data/ui/recipes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function OurRecipe() {
  return (
    <div className="relative z-0 py-10">
      <Image
        src="/Image/blogpage/our_blogbg.webp"
        alt="Hero Background"
        width={1920}
        height={1482}
        className="w-full h-full object-cover opacity-15 absolute top-0 left-0 z-10"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-50 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-10">
          {recipeCardData.map((item) => (
            <RecipeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}