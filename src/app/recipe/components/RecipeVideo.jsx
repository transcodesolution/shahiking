"use client";
import { recipeDetailsData } from "@/data/ui/recipes";
import { useParams } from "next/navigation";
import React from "react";

export default function RecipeVideo() {
  const params = useParams();
  const id = params?.id;

    const product = recipeDetailsData.find(
    (p) => p.slug?.toLowerCase() === id?.toLowerCase()
  );
  return (
    <div>
      {product?.videoData?.length > 0 &&
        product.videoData.map((item, index) => (
          <div key={index}>
            <video
              className="w-full h-155 rounded-[40px] object-cover border border-primary"
              controls
              autoPlay
              muted
              loop
            >
              <source src={item.video} ype="video/mp4" />
            </video>
          </div>
        ))}
    </div>
  );
}
