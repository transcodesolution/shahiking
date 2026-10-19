"use client";

import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import ProductCard from "./ProductCard";
import { IoIosArrowBack, IoIosArrowForward, IoMdSearch } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import {
  exportCatalogProducts as products,
  exportMakhanaSlugs as makhanaSlugs,
} from "@/data/export/products";
import { matchesProductCategory } from "@/data/ui/productCategories";

export default function OurProduct() {
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const [isStock, setIsStock] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState("");

  const filteredProducts = products.filter((item) => {
    const term = search.trim().toLowerCase();
    const categories = Array.isArray(item.category) ? item.category : [item.category];
    const matchesCategory = matchesProductCategory(item, isChecked);
    const matchesQuantity = !selectedQuantity ||
      (Array.isArray(item.quantity) ? item.quantity.includes(selectedQuantity) : item.quantity === selectedQuantity);
    return (!term || `${item.name} ${categories.join(" ")}`.toLowerCase().includes(term)) &&
      matchesCategory && (!isStock || item.availability === isStock) && matchesQuantity;
  });

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentPage = Math.min(activePage, Math.max(1, totalPages));
  const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const updateFilter = (setter) => (value) => {
    setter(value);
    setActivePage(1);
  };
  const clearFilters = () => {
    setSearch(""); setIsChecked([]); setIsStock(null); setSelectedQuantity(""); setActivePage(1);
  };

  return (
    <>
    <section className="bg-[#F6F6F6]">
      <div className="mx-auto max-w-[1830px] px-4 py-4 sm:px-6 lg:px-[5.25%] lg:py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-[3.4%]">
          <aside className="w-full shrink-0 lg:w-[27%]">
            <FilterSidebar onClear={clearFilters} isChecked={isChecked} setIsChecked={updateFilter(setIsChecked)} isStock={isStock} setIsStock={updateFilter(setIsStock)}
              selectedQuantity={selectedQuantity} setSelectedQuantity={updateFilter(setSelectedQuantity)} />
          </aside>
          <div className="min-w-0 flex-1">
            <div className="rounded-lg border border-[#D8D5CC] bg-[#F6F6F6]">
              <div className="flex flex-col items-center justify-between gap-4 border-b border-[#D8D5CC] px-5 py-5 sm:flex-row md:px-7">
                <p className="text-sm text-accent" aria-live="polite">Showing {filteredProducts.length} {filteredProducts.length === 1 ? "result" : "results"}</p>
                <label className="relative flex w-full items-center rounded-full border border-[#D8D5CC] px-4 py-2.5 sm:max-w-70">
                  <IoMdSearch className="absolute left-3 text-xl text-accent" />
                  <input aria-label="Search products" type="search" placeholder="Search product" value={search}
                      onChange={(e) => { setSearch(e.target.value); setActivePage(1); }} className="ml-6 w-full bg-transparent text-sm outline-none [&::-webkit-search-cancel-button]:cursor-pointer" />
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3 p-4 sm:gap-5 sm:p-5 md:grid-cols-3 md:gap-5 md:p-6 xl:grid-cols-4 xl:gap-5 xl:p-6">
                {currentProducts.map((item) => (
                  <Link key={`${item.id}-${item.slug}`} href={makhanaSlugs.has(item.slug) ? "/export" : `/product/${item.slug}`} className="min-w-0">
                    <ProductCard item={item} isWishlisted={wishlist.includes(item.id)}
                      onWishlistToggle={() => setWishlist((prev) => prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id])} />
                  </Link>
                ))}
                {currentProducts.length === 0 && (
                  <div className="col-span-full flex min-h-64 flex-col items-center justify-center px-4 text-center">
                    <p className="font-heading text-xl font-semibold text-primary">No products available</p>
                    <p className="mt-2 text-sm text-accent">Try another search or clear your filters to see more products.</p>
                    <button type="button" onClick={clearFilters} className="mt-5 rounded-full bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-[#654d0e]">Clear search and filters</button>
                  </div>
                )}
              </div>
            </div>
            {totalPages > 1 && <nav aria-label="Product pages" className="mt-6 flex items-center justify-between gap-2 sm:mt-8">
              <button type="button" onClick={() => setActivePage((page) => Math.max(1, Math.min(page, totalPages) - 1))} disabled={currentPage === 1}
                  className="flex items-center cursor-pointer gap-1 rounded-full border border-primary px-3 py-2 text-sm text-primary disabled:cursor-not-allowed disabled:opacity-40 sm:px-5">
                <IoIosArrowBack /> <span className="hidden sm:inline">Previous</span>
              </button>
              <div className="flex items-center gap-1 sm:gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).filter((page) => totalPages <= 5 || page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1).map((page, index, visible) => (
                  <span key={page} className="flex items-center gap-1 sm:gap-2">
                    {index > 0 && page - visible[index - 1] > 1 && <span className="px-1 text-accent">…</span>}
                    <button type="button" aria-current={currentPage === page ? "page" : undefined} onClick={() => setActivePage(page)}
                      className={`h-9 w-9 cursor-pointer rounded-full text-sm ${currentPage === page ? "bg-primary text-white" : "text-primary hover:bg-[#eee9dc]"}`}>{page}</button>
                  </span>
                ))}
              </div>
              <button type="button" onClick={() => setActivePage((page) => Math.min(totalPages, Math.min(page, totalPages) + 1))} disabled={currentPage === totalPages}
                  className="flex items-center cursor-pointer gap-1 rounded-full border border-primary px-3 py-2 text-sm text-primary disabled:cursor-not-allowed disabled:opacity-40 sm:px-5">
                <span className="hidden sm:inline">Next</span> <IoIosArrowForward />
              </button>
            </nav>}
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-257.5">
          <Link href="/export" aria-label="Explore ShahiKing spices and export products" className="block overflow-hidden rounded-2xl">
            <Image src="/Image/product/export/bringing-natures-finest-export-banner.webp" alt="Bringing nature's finest spices to the world" width={2048} height={610}
              sizes="(max-width: 768px) 100vw, 1030px" className="h-auto w-full" />
          </Link>
        </div>
    </section>
    </>
  );
}
