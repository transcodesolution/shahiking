"use client";

import { useState } from "react";
import products from "@/data/products";
import FilterSidebar from "./FilterSidebar";
import ProductCard from "./ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function OurProduct() {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
  setWishlist((prev) =>
    prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
  );
};

  const totalPages = 10;

  const handlePrev = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };

  const handleNext = () => {
    if (activePage < totalPages) setActivePage(activePage + 1);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <div>
            <FilterSidebar />
          </div>

          <div className="flex-1 border border-[#C1C1C1] rounded-xl shadow-sm bg-secondary">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-[#C1C1C1] p-6">
              <p className="text-accent">
                Showing {filteredProducts.length} results
              </p>

              <div className="flex items-center border border-[#C1C1C1] rounded-full px-4 py-2 bg-[#FCFCFC] w-full sm:max-w-68.5">
                <input
                  type="text"
                  placeholder="Search product"
                  className="outline-none w-full bg-transparent"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 p-4 md:p-6 xl:p-8">
              {filteredProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  isWishlisted={wishlist.includes(item.id)}
                  onWishlistToggle={() => toggleWishlist(item.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* pagination button */}
        <div className="w-full max-w-262.5 ml-auto">
          <div className="flex justify-center md:justify-between items-center mt-10 flex-wrap gap-4">
            {/* Previous */}
            <button
              onClick={handlePrev}
              disabled={activePage === 1}
              className={`px-4 py-1 border rounded-full flex items-center gap-2 ${
                activePage === 1
                  ? "text-accent border-accent cursor-not-allowed"
                  : "text-primary"
              }`}
            >
              <IoIosArrowBack />
              Previous
            </button>

            {/* Pages */}
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setActivePage(num)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    activePage === num
                      ? "bg-[#1F3D2B] text-white"
                      : "text-black"
                  }`}
                >
                  {num}
                </button>
              ))}

              {/* Dots */}
              <span className="px-2">...</span>

              {/* Last Page */}
              <button
                onClick={() => setActivePage(totalPages)}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  activePage === totalPages
                    ? "bg-[#1F3D2B] text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {totalPages}
              </button>
            </div>

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={activePage === totalPages}
              className={`px-4 py-1 border rounded-full flex items-center gap-2 ${
                activePage === totalPages
                  ? "text-accent border-accent cursor-not-allowed"
                  : "text-primary"
              }`}
            >
              Next
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
