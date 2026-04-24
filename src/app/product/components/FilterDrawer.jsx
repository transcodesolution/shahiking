"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import PriceRangeFilter from "./PriceRangeFilter";
import FilterOption from "./FilterOption";
import { availability, productCategories, quantity } from "@/data/ui/filters";

export default function FilterDrawer({
  isChecked,
  setIsChecked,
  isStock,
  setIsStock,
  selectedQuantity,
  setSelectedQuantity,
  minVal,
  setMinVal,
  maxVal,
  setMaxVal,
  isOpen,
  onClose,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isQuantityOpen, setIsQuantityOpen] = useState(false);
  const min = 0;
  const max = 2000;

  // handle min change
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - 10);
    setMinVal(value);
  };

  // handle max change
  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minVal + 10);
    setMaxVal(value);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 left-0 h-screen w-full max-w-137.5 bg-secondary z-50 overflow-auto transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-semibold text-primary">Filter</h1>
          <button className="text-xl" onClick={onClose}>
            <IoMdClose />
          </button>
        </div>
        <div className="border-t border-[#D2D2D2] p-4">
          {/* Header */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="font-semibold mb-2 text-primary flex justify-between items-center w-full cursor-pointer"
          >
            Categories
            <span
              className={`text-[24px] transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <IoIosArrowDown />
            </span>
          </button>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="mt-2">
              {productCategories.map((cat) => (
                <FilterOption
                  key={cat.id}
                  label={cat.name}
                  value={cat.name}
                  checked={isChecked.includes(cat.name)}
                  onChange={() => {
                    setIsChecked((prev) =>
                      prev.includes(cat.name)
                        ? prev.filter((c) => c !== cat.name)
                        : [...prev, cat.name],
                    );
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[#D2D2D2] p-4">
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="font-semibold mb-2 text-primary flex justify-between items-center w-full cursor-pointer"
          >
            Availability
            <span
              className={`text-[24px] transition-transform duration-300 ${
                isModalOpen ? "rotate-180" : ""
              }`}
            >
              <IoIosArrowDown />
            </span>
          </button>
          {isModalOpen && (
            <div className="mt-2">
              {availability.map((item) => (
                <FilterOption
                  key={item.id}
                  label={item.name}
                  value={item.name}
                  checked={isStock === item.name}
                  onChange={(e) => setIsStock(e.target.value)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="">
          {/* Header */}
          <PriceRangeFilter
            isOpen={isPriceOpen}
            onToggle={() => setIsPriceOpen(!isPriceOpen)}
            min={min}
            max={max}
            minVal={minVal}
            maxVal={maxVal}
            onMinChange={handleMinChange}
            onMaxChange={handleMaxChange}
          />
        </div>

        <div className="border-t border-[#D2D2D2] p-4">
          <button
            onClick={() => setIsQuantityOpen(!isQuantityOpen)}
            className="font-semibold mb-2 text-primary flex justify-between items-center w-full cursor-pointer"
          >
            Quantity
            <span
              className={`text-[24px] transition-transform duration-300 ${
                isQuantityOpen ? "rotate-180" : ""
              }`}
            >
              <IoIosArrowDown />
            </span>
          </button>

          {isQuantityOpen && (
            <div className="mt-2">
              {quantity.map((q) => (
                <FilterOption
                  key={q.id}
                  label={q.name}
                  value={q.name}
                  checked={selectedQuantity === q.name}
                  onChange={(e) => setSelectedQuantity(e.target.value)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
