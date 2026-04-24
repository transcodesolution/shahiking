"use client";
import { IoIosArrowDown } from "react-icons/io";

export default function PriceRangeFilter({
  isOpen,
  onToggle,
  min,
  max,
  minVal,
  maxVal,
  onMinChange,
  onMaxChange,
}) {
  return (
    <div className="border-t border-[#D2D2D2] p-4">
      {/* Header */}
      <button
        onClick={onToggle}
        className="font-semibold mb-2 text-primary flex justify-between items-center w-full cursor-pointer"
      >
        Price
        <span
          className={`text-[24px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown />
        </span>
      </button>

      {isOpen && (
        <div className="mt-4">
          {/* Slider */}
          <div className="relative w-full h-6">
            {/* Track */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300 rounded" />

            {/* Active Range */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-1 bg-primary rounded"
              style={{
                left: `${(minVal / max) * 100}%`,
                right: `${100 - (maxVal / max) * 100}%`,
              }}
            />

            {/* Min */}
            <input
              type="range"
              min={min}
              max={max}
              value={minVal}
              onChange={onMinChange}
              className="thumb thumb--left"
            />

            {/* Max */}
            <input
              type="range"
              min={min}
              max={max}
              value={maxVal}
              onChange={onMaxChange}
              className="thumb thumb--right"
            />
          </div>

          {/* Price Text */}
          <div className="flex items-center gap-1 mt-4">
            <p className="text-[18px] text-accent font-medium">Price:</p>
            <p className="text-[18px] text-primary font-medium">
              Rs. {Number(minVal).toFixed(2)} - Rs. {Number(maxVal).toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
