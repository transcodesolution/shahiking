"use client";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";

export default function Ingredients() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="mt-4">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-[24px] text-black font-heading font-semibold flex justify-between items-center w-full cursor-pointer mb-3"
      >
        Ingredients
        <span
          className={`text-[18px] transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>
      {isDropdownOpen && (
        <div className="mt-2">
            <p className="body-sm text-black">100% Premium Grade Raw Makhana | No added preservatives | No artificial flavors | No additives.</p>
        </div>    
      )}
    </div>
  );
}
