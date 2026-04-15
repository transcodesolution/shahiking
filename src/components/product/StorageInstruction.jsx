"use client";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import { benefitData, storageData } from "@/data/ui/productDetail";
import { GiCheckMark } from "react-icons/gi";

export default function StorageInstruction() {
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
            {storageData.map((item,index) => (
                <div key={index} className="flex justify-start items-center gap-2 py-1">
                    <span className="text-[18px] lg:text-[22px] text-primary"><GiCheckMark /></span>
                    <span className="body-sm">{item.name}</span>
                </div>
            ))}
        </div>
      )}
    </div>
  );
}
