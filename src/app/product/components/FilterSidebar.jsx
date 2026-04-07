"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import FilterOption from "./FilterOption";
import PriceRangeFilter from "./PriceRangeFilter";

export default function FilterSidebar() {
  const categories = [
    { id: 1, name: "Berries" },
    { id: 2, name: "Roasted Seeds" },
    { id: 3, name: "Anjeer" },
    { id: 4, name: "Healthy Snacks" },
    { id: 5, name: "Makhana" },
    { id: 6, name: "Flavoured Makhana" },
    { id: 7, name: "Dates" },
    { id: 8, name: "Whole Spices" },
    { id: 9, name: "Combo" },
  ];

  const quantity = [
    { id: 1, name: "40g" },
    { id: 2, name: "100g" },
    { id: 3, name: "200g" },
    { id: 4, name: "250g" },
    { id: 5, name: "300g" },
  ];

  const availability = [
    { id: 1, name: "In Stock" },
    { id: 2, name: "Out of Stock" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isQuantityOpen, setIsQuantityOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const min = 0;
  const max = 1500;
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(900);
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
    <div className="w-full lg:w-94 h-auto bg-secondary rounded-xl shadow-sm border border-[#C1C1C1]">
      <div className="flex justify-between p-4">
        <h2 className="font-semibold text-primary">Filters</h2>
        <button className="text-sm font-semibold text-primary">
          Clear All
        </button>
      </div>

      <div className="border-t border-[#D2D2D2] p-4">
        {/* Header */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="font-semibold mb-2 text-primary flex justify-between items-center w-full"
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
            {categories.map((cat) => (
              <FilterOption
                key={cat.id}
                label={cat.name}
                value={cat.name}
                checked={isChecked === cat.name}
                onChange={(e) => setIsChecked(e.target.value)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-[#D2D2D2] p-4">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="font-semibold mb-2 text-primary flex justify-between items-center w-full"
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
                checked={isChecked === item.name}
                onChange={(e) => setIsChecked(e.target.value)}
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
          className="font-semibold mb-2 text-primary flex justify-between items-center w-full"
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
