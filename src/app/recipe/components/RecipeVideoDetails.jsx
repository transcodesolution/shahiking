"use client";
import { recipeDetailsData } from "@/data/ui/recipes";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RecipeOverviewSec from "./RecipeOverviewSec";
import Preparations from "./Preparations";
import Ingredients from "./Ingredients";

export default function RecipeVideoDetails() {
  const params = useParams();
  const id = params?.id;

  const product = recipeDetailsData.find(
  (p) => p.slug?.toLowerCase() === id?.toLowerCase()
  );

  return (
    <div>
      <div className="bg-white p-3 md:p-6 xl:p-8 rounded-[30px] shadow-brand">
        {product?.videoData?.length > 0 &&
        product.videoData.map((item, index) => (
        <div key={index}>
          <h1 className="display-heading text-primary font-semibold">
            {item.title}
            <span className="block">{item.title_1}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-5 py-2 mt-2">
            <p className="flex items-center gap-2 text-black border-r pr-4">
              <span>
                <Image
                  src="/Image/recipe/timing_icon.webp"
                  alt="timing icon"
                  width={22}
                  height={21}
                />
              </span>
              <span className="body-md">{item.time} mins</span>
            </p>
            <p className="flex items-center gap-2 text-black border-r pr-4">
              <span>
                <Image
                  src="/Image/recipe/serving_icon.webp"
                  alt="servings icon"
                  width={22}
                  height={21}
                />
              </span>
              <span className="body-md">Servings</span>
            </p>
            <p className="flex items-center gap-2 text-black border-r pr-4">
              <span>
                <Image
                  src="/Image/recipe/protein_icon.webp"
                  alt="high protein icon"
                  width={22}
                  height={21}
                />
              </span>
              <span className="body-md">High Protein</span>
            </p>
            <p className="flex items-center gap-2 text-black">
              <span>
                <Image
                  src="/Image/recipe/vegan_icon.webp"
                  alt="vegan icon"
                  width={22}
                  height={21}
                />
              </span>
              <span className="body-md">Vegan</span>
            </p>
          </div>
          <p className="body-md text-black mt-2 max-w-183 py-2">
            {item.details}
          </p>
        </div>
        ))}

        <div className="flex items-start gap-6 py-2">
          {/* Button */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="/Image/recipe/whatsapp.webp"
              alt="whatsapp icon"
              width={42}
              height={42}
              className="w-8 md:w-10.5 h-8 md:h-10.5 object-cover"
            />
          </Link>
          <Link href="https://www.instagram.com/shahiking_foods" className="cursor-pointer">
            <Image
              src="/Image/recipe/instagram.webp"
              alt="instagram icon"
              width={42}
              height={42}
              className="w-8 md:w-10.5 h-8 md:h-10.5 object-cover"
            />
          </Link>
          <Link href="https://www.facebook.com/ShahiKingFoods" className="cursor-pointer">
            <Image
              src="/Image/recipe/facebook.webp"
              alt="facebook icon"
              width={42}
              height={42}
              className="w-8 md:w-10.5 h-8 md:h-10.5"
            />
          </Link>
          <Link href="/" className="cursor-pointer object-cover">
            <Image
              src="/Image/recipe/pinterest.webp"
              alt="pinterest icon"
              width={42}
              height={42}
              className="w-8 md:w-10.5 h-8 md:h-10.5 object-cover"
            />
          </Link>
        </div>

        <div className="mt-4">
          <RecipeOverviewSec />
        </div>
        <div className="mt-4">
          <Preparations />
        </div>
        <div className="mt-4">
          <Ingredients />
        </div>
      </div>
    </div>
  );
}
