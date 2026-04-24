"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import FilterOption from "./FilterOption";
import PriceRangeFilter from "./PriceRangeFilter";
import FilterDrawer from "./FilterDrawer";
import { availability, productCategories, quantity } from "@/data/ui/filters";

export default function FilterSidebar({
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
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isQuantityOpen, setIsQuantityOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleClearAll = () => {
    setIsChecked([]);
    setIsStock(null);
    setSelectedQuantity("");
    setMinVal(0);
    setMaxVal(900);
  };

  return (
    <div className="w-full lg:w-94 h-auto bg-secondary rounded-xl shadow-sm border border-[#C1C1C1]">
      <div className="relative flex justify-between p-4">
        <h2 className="hidden lg:block font-semibold text-primary cursor-pointer">
          Filters
        </h2>
        <button
          className="lg:hidden font-semibold text-primary cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span>Filters</span>
        </button>

        <FilterDrawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          isStock={isStock}
          setIsStock={setIsStock}
          selectedQuantity={selectedQuantity}
          setSelectedQuantity={setSelectedQuantity}
          minVal={minVal}
          setMinVal={setMinVal}
          maxVal={maxVal}
          setMaxVal={setMaxVal}
        />

        <button
          className="text-sm font-semibold text-primary cursor-pointer hover:underline"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>

      <div className="border-t border-[#D2D2D2] p-4 hidden lg:block">
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

      <div className="border-t border-[#D2D2D2] p-4 hidden lg:block">
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

      <div className="hidden lg:block">
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

      <div className="border-t border-[#D2D2D2] p-4 hidden lg:block">
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
  );
}
