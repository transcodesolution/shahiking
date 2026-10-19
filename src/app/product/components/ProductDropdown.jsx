"use client";
import { categoriesData, productsItem } from "@/data/buy/products";
import {
  exportDropdownCategories,
  exportDropdownItems,
} from "@/data/export/products";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function ProductDropdown({ closeMenu, isExport = false }) {
  const categories = isExport ? exportDropdownCategories : categoriesData;
  const dropdownItems = isExport ? exportDropdownItems : productsItem;
  const [active, setActive] = useState(categories[0]?.id ?? "protein");
  const [openIndex, setOpenIndex] = useState(null);

  const router = useRouter();
  const productLink = (slug) =>
    isExport ? "/export/products" : `/product/${slug}`;

  return (
    <>
      <div className="hidden md:block w-full">
        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Product Categories"
          className="flex justify-center gap-16 overflow-x-auto no-scrollbar py-2 border-b border-[#2A2A2A33]"
        >
          {categories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <div
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                onClick={() => setActive(cat.id)}
                className={`relative pb-1 body-sm font-heading font-medium flex items-center gap-2 transition cursor-pointer ${
                  isActive ? "text-black" : "text-accent"
                }`}
              >
                {cat.name}
                <IoIosArrowDown />

                {/* Active Border */}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-2 h-px bg-black"></span>
                )}
              </div>
            );
          })}
        </div>

        {/* Panels */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              role="tabpanel"
              id={`panel-${cat.id}`}
              aria-labelledby={`tab-${cat.id}`}
              hidden={active !== cat.id}
            >
              {active === cat.id && (
                <div className="grid grid-cols-4 gap-10 py-5">
                  {dropdownItems[cat.id]?.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        router.push(productLink(item.slug));
                      }}
                      className="text-center border-b border-[#D2D2D2] pb-2 cursor-pointer"
                    >
                      <div className="flex justify-center">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={161}
                          height={225}
                          className="w-58 h-45 object-contain"
                        />
                      </div>

                      <p className="body-sm mt-3 font-heading font-medium">{item.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* See All */}
          <div className="flex justify-end">
            <Link
              href={isExport ? "/export/products" : "/product"}
              className="body-sm text-primary font-medium flex items-center gap-2 underline underline-offset-3"
            >
              See All Products <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>

      {/* mobile screen in product dropdown  */}

      <div className="md:hidden">
        <div className="flex flex-col gap-2 p-4">
          {categories.map((cat, index) => (
            <div key={cat.id} className="border-b pb-2">
              {/* Category Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-primary"
              >
                <p className="text-lg font-medium">{cat.name}</p>
                <span>
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>
              {/* Products */}
              {openIndex === index && (
                <div className="flex flex-col gap-3 mt-3">
                  {Array.isArray(dropdownItems[cat.id]) &&
                    dropdownItems[cat.id]?.map((item) => (
                      <Link
                        key={item.id}
                        onClick={closeMenu}
                        href={productLink(item.slug)}
                        className="flex flex-col items-center gap-3 pb-2"
                      >
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={72}
                          height={72}
                          className="w-18 h-18 object-contain"
                        />
                        <p className="text-sm border-b">{item.name}</p>
                      </Link>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
