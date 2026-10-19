"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import FilterOption from "./FilterOption";
import FilterDrawer from "./FilterDrawer";
import { availability, productCategories, quantity } from "@/data/export/filters";
import { IoOptionsOutline } from "react-icons/io5";

export default function FilterSidebar({
  isChecked,
  setIsChecked,
  isStock,
  setIsStock,
  selectedQuantity,
  setSelectedQuantity,
  onClear,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isQuantityOpen, setIsQuantityOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-auto w-full rounded-lg border border-[#D8D5CC] bg-[#F6F6F6]">
      <div className="relative flex justify-between p-4">
        <h2 className="hidden lg:flex items-center gap-2 body-md font-semibold text-primary cursor-pointer">
          <span>
          <IoOptionsOutline className="text-3xl"/>
          </span>
          Filters
        </h2>
        <button
          className="lg:hidden flex items-center gap-2 font-semibold text-primary cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span>
           <IoOptionsOutline className="text-2xl md:text-3xl"/>
          </span>
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
          onClear={onClear}
        />

        <button
          className="text-[18px] font-semibold text-primary cursor-pointer hover:underline"
          onClick={onClear}
        >
          Clear All
        </button>
      </div>

      <div className="border-t border-[#D8D5CC] p-4 hidden lg:block">
        {/* Header */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="font-semibold mb-2 body-md text-primary flex justify-between items-center w-full cursor-pointer"
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

      <div className="border-t border-[#D8D5CC] p-4 hidden lg:block">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="font-semibold mb-2 text-primary body-md flex justify-between items-center w-full cursor-pointer"
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
                onChange={() =>
                  setIsStock(isStock === item.name ? "" : item.name)
                }
              />
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-[#D8D5CC] p-4 hidden lg:block">
        <button
          onClick={() => setIsQuantityOpen(!isQuantityOpen)}
          className="font-semibold mb-2 body-md text-primary flex justify-between items-center w-full cursor-pointer"
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
                key={q.id} // must be unique
                label={q.name}
                value={q.name}
                checked={selectedQuantity === q.name}
                onChange={() =>
                  setSelectedQuantity(selectedQuantity === q.name ? "" : q.name)
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
