"use client";
import { categoriesData, products, productsItem } from "@/data/ui/products";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function ProductDropdown() {
  const [active, setActive] = useState("nuts");
  const [openIndex, setOpenIndex] = useState(null);

  const router = useRouter();

  return (
    <>
      <div className="hidden md:block w-full">
        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Product Categories"
          className="flex justify-center gap-16 overflow-x-auto no-scrollbar py-5 mt-5 border-b border-[#2A2A2A33]"
        >
          {categoriesData.map((cat) => {
            const isActive = active === cat.id;

            return (
              <div
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                onClick={() => setActive(cat.id)}
                className={`relative pb-3 body-md flex items-center gap-2 transition cursor-pointer ${
                  isActive ? "font-medium text-black" : "text-gray-500"
                }`}
              >
                {cat.name}
                <IoIosArrowDown />

                {/* Active Border */}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-5 h-px bg-black"></span>
                )}
              </div>
            );
          })}
        </div>

        {/* Panels */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {categoriesData.map((cat) => (
            <div
              key={cat.id}
              role="tabpanel"
              id={`panel-${cat.id}`}
              aria-labelledby={`tab-${cat.id}`}
              hidden={active !== cat.id}
            >
              {active === cat.id && (
                <div className="grid grid-cols-4 gap-10 py-6">
                  {productsItem[cat.id]?.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        router.push(`/product?slug=${item.slug}`);
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

                      <p className="body-md mt-3">{item.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* See All */}
          <div className="flex justify-end">
            <Link
              href="/product"
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
          {categoriesData.map((cat, index) => (
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
                  {Array.isArray(productsItem[cat.id]) &&
                    productsItem[cat.id]?.map((item) => (
                      <div
                        key={item.id}
                         onClick={() => {
                        router.push(`/product?slug=${item.slug}`);
                      }}
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
                      </div>
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
