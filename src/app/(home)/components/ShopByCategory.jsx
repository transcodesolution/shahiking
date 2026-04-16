"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, productsData } from "@/data/ui/categories";

export default function ShopCategory() {
  const [activeCategory, setActiveCategory] = useState("nuts");
  const products = productsData[activeCategory] || [];

  return (
    <section className="bg-secondary py-8 md:py-16 relative z-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Image
          src="/Image/homepage/category_leaf.webp"
          alt="category leaf img"
          width={47.42}
          height={75.05}
          className="hidden lg:block absolute inset-y-0 top-12.5 right-60 h-30 w-17.5 object-cover -rotate-170 blur-2"
        />
        <Image
          src="/Image/homepage/category_leaf.webp"
          alt="category leaf img"
          width={47.42}
          height={75.05}
          className="hidden lg:block absolute inset-y-0 top-30 left-55 h-30 w-17.5 object-cover -rotate-195 blur-2 translate scale-x-[-1]"
        />

        {/* Heading */}
        <div className="text-center">
          <h2 className="display-heading font-semibold text-primary">
            Shop By Category
          </h2>
          <p className="body-md text-black mt-2">Better Food. Better Living.</p>
        </div>

        {/* Categories */}
        <div className="mt-10 overflow-x-auto scrollbar-hide">
          <div className="flex justify-center gap-14 md:gap-24 min-w-max px-4">
            {categories.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveCategory(item.id)}
                className="text-center cursor-pointer group shrink-0"
              >
                <div
                  className={`w-25 h-25 sm:w-27.5 sm:h-27.5 md:w-30 md:h-30 lg:w-35 lg:h-35 
                    rounded-full overflow-hidden border-2 border-secondary shadow-md shadow-[#0000004D]
                  ${activeCategory === item.id ? "mt-4" : "mt-4"}`}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={140}
                    height={140}
                    className="object-cover w-full h-full"
                  />
                </div>

                <p className="mt-3 body-md font-medium text-black w-25 md:w-35 mx-auto">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-auto md:max-w-327.5 h-0.5 bg-white mt-6 mx-auto"></div>

        <div className="flex justify-center gap-8 md:gap-24 -mt-0.5">
          {categories.map((item, i) => (
            <div key={i} className="w-35 flex justify-center">
              {activeCategory === item.id && (
                <div className="w-26 md:w-28 lg:w-24 h-0.75 bg-primary rounded-full transition-all duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {products.length > 0 ? (
            products.map((item, i) => (
              <ProductCard
                key={i}
                product={item} // ✅ FIXED
                className="bg-secondary rounded-[40px] shadow-sm h-114 flex flex-col"
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>

        {/* See All */}
        <div className="text-right mt-6 py-4 flex justify-end">
          <Link
            href="/product"
            className="body-sm text-primary font-medium flex items-center gap-2 underline underline-offset-3 group cursor-pointer"
          >
            See All Products
            <span className="font-medium group-hover:translate-x-1 transition-transform duration-500">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
