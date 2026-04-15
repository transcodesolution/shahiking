import Link from "next/link";
import React from "react";
import NutritionTable from "./NutritionTable";
import Ingredients from "./Ingredients";
import KeyBenefits from "./KeyBenefits";
import StorageInstruction from "./StorageInstruction";

export default function ProductInfo({ product }) {
  return (
    <div className="bg-white p-6.5 rounded-[30px] shadow-brand">
      <h1 className="display-heading text-primary font-semibold">
        {product.name}
      </h1>

      <p className="body-md text-black mt-2">{product.description}</p>
      <p className="body-sm text-black mt-2 max-w-118 mb-4">
        {product.details}
      </p>
      <h2 className="body-md text-black mb-3">Package Size</h2>

      {/* Price */}
      <div className="mt-4 mb-4 flex justify-start items-center gap-6">
        <div className="flex flex-col justify-center items-center w-full md:max-w-21 bg-primary rounded-xl py-2.5 px-4">
          <span className="body-sm text-secondary">{product.weight}</span>
          <span className="body-sm text-secondary">₹{product.price}</span>
        </div>
        {/* Button */}
        <Link
          href="/"
          className="bg-primary text-secondary body-sm text-center font-medium p-2.5 rounded-full w-full md:max-w-38.5 mb-2 md:mb-0 hover:bg-secondary hover:text-primary duration-500 cursor-pointer"
        >
          Buy it now
        </Link>
      </div>

      <p className="body-sm text-black mt-2 mb-4">{product.contact_detail}</p>

      <div className="border-t border-[#AEAEAE] mb-2">
            <NutritionTable/>
      </div>

      <div className="border-t border-[#AEAEAE] mb-2">
           <Ingredients/>
      </div>

      <div className="border-t border-[#AEAEAE] mb-2">
           <KeyBenefits/>
      </div>

      <div className="border-t border-[#AEAEAE] mb-2">
           <StorageInstruction/>
      </div>

    </div>
  );
}
