"use client";

import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import ProductCard from "./ProductCard";
import { IoIosArrowBack, IoIosArrowForward, IoMdSearch } from "react-icons/io";
import { products } from "@/data/ui/products";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function OurProduct() {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const [isStock, setIsStock] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(2000);

  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handlePrev = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };

  const handleNext = () => {
    if (activePage < totalPages) setActivePage(activePage + 1);
  };

  // FILTER
  const filteredProducts = products.filter((item) => {
  const matchesSlug = !slug || item.slug === slug;

  const matchesSearch = item.name
    ?.toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    isChecked.length === 0 ||
    isChecked.some(
      (cat) => cat.toLowerCase() === item.category?.toLowerCase(),
    );

  const matchesStock = !isStock || item.availability === isStock;

  const matchesQuantity =
    !selectedQuantity || item.quantity === selectedQuantity;

  const matchesPrice = item.price >= minVal && item.price <= maxVal;

  return (
    matchesSlug &&
    matchesSearch &&
    matchesCategory &&
    matchesStock &&
    matchesQuantity &&
    matchesPrice
  );
});

  // PAGINATION
  const itemsPerPage = 12;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <div>
            <FilterSidebar
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
          </div>
          <div className="w-full max-w-300">
            <div className="flex-1 border border-[#C1C1C1] rounded-xl shadow-sm bg-secondary min-h-screen">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-[#C1C1C1] p-6">
                <p className="text-accent">
                  Showing {filteredProducts.length} results
                </p>

                <div className="relative flex items-center border border-[#C1C1C1] rounded-full px-4 py-2 bg-[#FCFCFC] w-full sm:max-w-68.5">
                  <input
                    type="text"
                    placeholder="Search product"
                    className="outline-none w-full bg-transparent ml-6"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-[20px] text-accent">
                      <IoMdSearch />
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 p-4 md:p-6 xl:p-8">
                {currentProducts.map((item) => (
                  <Link key={item.id} href={`/product/${item.slug}`}>
                  <ProductCard
                    key={item.id}
                    item={item}
                    isWishlisted={wishlist.includes(item.id)}
                    onWishlistToggle={() => toggleWishlist(item.id)}
                  />
                  </Link>
                ))}
              </div>
            </div>
            {/* pagination button */}
            <div>
              <div className="none xl:flex justify-between items-center mt-10  gap-4 ">
                <div className="max-w-full flex justify-center mb-2">
                  {/* Previous */}
                  <button
                    onClick={handlePrev}
                    disabled={activePage === 1}
                    className={`px-3 py-1 border rounded-full font-medium flex items-center gap-2 w-full max-w-35 cursor-pointer ${
                      activePage === 1
                        ? "text-accent border-accent cursor-not-allowed"
                        : "text-primary"
                    }`}
                  >
                    <IoIosArrowBack className="text-2xl" />
                    Previous
                  </button>
                </div>

                {/* Pages */}
                <div className="flex justify-center items-center gap-3 max-w-full mb-2">
                  {/* First Page */}
                  {activePage > 3 && totalPages > 7 && (
                    <>
                      <button
                        onClick={() => setActivePage(1)}
                        className="w-10 h-10 flex items-center justify-center cursor-pointer"
                      >
                        1
                      </button>
                      <span>...</span>
                    </>
                  )}

                  {/* Dynamic Middle Pages */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((num) => {
                      if (totalPages <= 7) return true;
                      if (activePage <= 3) return num <= 5;
                      if (activePage >= totalPages - 2)
                        return num >= totalPages - 4;
                      return num >= activePage - 1 && num <= activePage + 1;
                    })
                    .map((num) => (
                      <button
                        key={num}
                        onClick={() => setActivePage(num)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${
                          activePage === num
                            ? "bg-primary text-secondary"
                            : "text-black"
                        }`}
                      >
                        {num}
                      </button>
                    ))}

                  {/* Last Page */}
                  {totalPages > 7 && activePage < totalPages - 2 && (
                    <>
                      <span>...</span>
                      <button
                        onClick={() => setActivePage(totalPages)}
                        className="w-10 h-10 flex items-center justify-center cursor-pointer"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>
                <div className="flex justify-center">
                  {/* Next */}
                  <button
                    onClick={handleNext}
                    disabled={activePage === totalPages}
                    className={`px-7 py-1 border rounded-full font-medium flex items-center gap-2 w-full max-w-35 cursor-pointer ${
                      activePage === totalPages
                        ? "text-accent border-accent cursor-not-allowed"
                        : "text-primary"
                    }`}
                  >
                    Next
                    <IoIosArrowForward className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
