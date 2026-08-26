"use client";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import { productsDetail} from "@/data/ui/productDetail";
import { GiCheckMark } from "react-icons/gi";
import { useParams } from "next/navigation";

export default function StorageInstruction() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const params = useParams();
  const id = params?.id;

  const product = productsDetail.find((p) => p.slug === id);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-[18px] lg:text-[20px] xl:text-[24px] text-black font-heading font-semibold mb-3 flex justify-between items-center w-full cursor-pointer"
      >
        Storage Instructions
        <span
          className={`text-[18px] transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>
      {isDropdownOpen && (
        <div>
          {product?.storage?.length > 0 &&
            product.storage.map((item, index) => (
              <div key={index}>
                <div className="flex justify-start items-center gap-2 py-1">
                  <span className="text-[18px] lg:text-[22px] text-primary">
                    <GiCheckMark />
                  </span>
                  <span className="body-sm text-black">{item.detail}</span>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
