"use client";
import { exportCategories, productsData } from "@/data/export/categories";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ExploreProducts() {
  const [activeCategory, setActiveCategory] = useState("nuts");
  const timerRef = useRef(null);

  const startAutoSwitch = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setActiveCategory((prev) => (prev === "nuts" ? "spices" : "nuts"));
    }, 4000);
  }, []);

  useEffect(() => {
    startAutoSwitch();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startAutoSwitch]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    startAutoSwitch();
  };

  const activeProducts = productsData[activeCategory] || [];

  return (
    <div className="bg-secondary py-8 md:py-14">
      <style>{`
        @keyframes premiumCardEnter {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.985);
            filter: blur(2px);
          }
          60% {
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        .animate-card-enter {
          animation: premiumCardEnter 0.65s cubic-bezier(0.16, 1, 0.3, 1) both;
          will-change: opacity, transform, filter;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-card-enter {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="display-heading text-primary font-bold text-center mb-3">
            <span className="text-black">Explore</span> Products
          </h1>
          <p className="text-[#7C7C7E] body-md text-center mb-3">
            Premium foods for everyday goodness.
          </p>
        </div>
        <div>
          <div className="mb-8 flex justify-center">
            <div className="flex justify-center items-center gap-2 rounded-[40px] border border-[#E8E5DE] bg-white px-3 py-3 shadow-sm sm:gap-4 sm:px-5 w-full max-w-117 min-h-42">
              {exportCategories.map((category, index) => {
                const isActive = activeCategory === category.id;

                return (
                  <div key={category.id} className="flex items-center gap-2 sm:gap-4">
                    <button
                      type="button"
                      onClick={() => handleCategoryClick(category.id)}
                      aria-pressed={isActive}
                      className="group flex min-w-16.5 flex-col items-center gap-2 sm:min-w-19 cursor-pointer"
                    >
                      <div
                        className={`relative h-12 w-12 overflow-hidden rounded-full border bg-white transition-all duration-500 ease-out sm:h-20 sm:w-20 ${
                          isActive
                            ? "border-[#967019] border-2 shadow-[0_0_0_3px_rgba(150,112,25,0.12)]"
                            : "border-secondary border-2 group-hover:border-[#967019]"
                        }`}
                      >
                        <Image
                          src={category.image}
                          alt={category.label}
                          fill
                          sizes="82px"
                          className="object-cover"
                        />
                      </div>

                      <span
                        className={`whitespace-nowrap font-medium transition-colors duration-500 ease-out body-sm ${
                          isActive
                            ? "text-[#89630B]"
                            : "text-gray-800 group-hover:text-[#89630B]"
                        }`}
                      >
                        {category.label}
                      </span>
                    </button>
                    {index < exportCategories.length - 1 && (
                      <div className="h-15 w-px bg-gray-200" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Product Grid */}
          <div
            key={activeCategory}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 py-2"
          >
            {activeProducts.map((product, index) => (
              <div
                key={product.slug || product.name}
                className="animate-card-enter h-full"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#C0C0C0] bg-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* Product Image */}
                  <div className="flex h-44 items-center justify-center overflow-hidden bg-[#EAE7E0] p-4 sm:h-48 md:h-66">
                    <div className="relative h-full w-full max-w-40">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 639px) 160px, 176px"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  {/* Product Information */}
                  <div className="flex min-h-33 flex-1 flex-col p-5">
                    <h3 className="body-md font-semibold text-[#222222]">
                      {product.name}
                    </h3>

                    <p className="body-sm text-gray-500">
                      {product.description}
                    </p>

                    {product.slug ? (
                      <Link
                        href={`/product/${product.slug}`}
                        className="mt-auto inline-flex w-fit items-center gap-2 pt-3 body-md font-medium text-[#89630B] transition-colors"
                      >
                        View Details
                        <span
                          aria-hidden="true"
                          className="text-base transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <FaArrowRightLong />
                        </span>
                      </Link>
                    ) : (
                      <span className="mt-auto pt-3 text-xs font-semibold text-[#89630B]">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* See All Products */}
          <div className="mt-8 text-center">
            <Link
              href="/export/products"
              className="inline-flex items-center gap-2 body-sm font-medium text-[#89630B] underline underline-offset-4 transition-colors"
            >
              See All Products
              <span aria-hidden="true" className="text-base">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
