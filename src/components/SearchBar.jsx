"use client"
import React, { useState, useRef, useEffect } from "react";
import { BiSearchAlt} from "react-icons/bi";
import { products } from "../data/ui/products";
import { useRouter } from "next/navigation";

export default function SearchBar({ className = "", onSearch }) {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef(null);

  // Filter products
  const suggestions = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    if (onSearch) onSearch();

    if (search.trim()) {
      router.push(`/product?search=${(search.trim())}`);
    } else {
      router.push(`/product`);
    }
  };

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <form
        onSubmit={handleSearch}
        className="bg-secondary rounded-3xl flex justify-between items-center w-full border border-gray-300  transition-all shadow-sm px-2"
      >
        
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-2 w-full outline-none text-accent"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
        />

        <button
          type="button"
          onClick={() => {
            setShowSuggestions(false);
            if (onSearch) onSearch();
            router.push("/product");
          }}
          className="text-accent text-xl px-3 py-2 cursor-pointer "
          title="Advanced Filters"
        >
          <BiSearchAlt />
        </button>
      </form>

      {/* Suggestions */}
      {showSuggestions && search.trim().length > 0 && (
        <div className="absolute top-full right-0 lg:left-0 mt-2 w-full lg:w-65 xl:w-102 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
          <div className="px-5 py-4 text-sm font-medium text-gray-500">
            Search Suggestions
          </div>

          <div className="max-h-[60vh] overflow-y-auto pb-2">
            {suggestions.length > 0 ? (
              <ul className="px-2">
                {suggestions.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setSearch(item.name);
                        setShowSuggestions(false);
                        if (onSearch) onSearch();
                        router.push(`/product?search=${(item.name)}`);
                      }}
                      className="w-full text-left px-3 py-3 hover:bg-gray-100 rounded-xl flex items-center justify-between transition-colors group mb-1"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover border border-gray-200"
                        />

                        <div>
                          <div className="font-semibold text-gray-900 text-base">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.category} |
                            <span className="ml-1">{item.quantity}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm font-medium text-gray-700 pr-2">
                        ₹ {item.price}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-6 text-sm text-gray-500 text-center">
                No products found for "{search}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}