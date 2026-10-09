"use client"
import { exportCategories, productsData } from '@/data/ui/exportCategories';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

export default function ExploreProducts() {
    const [activeCategory, setActiveCategory] = useState("nuts");

  const activeProducts = productsData[activeCategory];
  return (
    <div className='bg-secondary py-8 md:py-14'>
       <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
         <div>
            <h1 className='display-heading text-primary font-bold text-center mb-3'><span className='text-black'>Explore</span> Products</h1>
            <p className='text-[#7C7C7E] body-md text-center mb-3'>Premium foods for everyday goodness.</p> 
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
                    onClick={() => setActiveCategory(category.id)}
                    aria-pressed={isActive}
                    className="group flex min-w-16.5 flex-col items-center gap-2 sm:min-w-19 cursor-pointer"
                  >
                    <div
                      className={`relative h-12 w-12 overflow-hidden rounded-full border bg-white transition-all duration-300 sm:h-20 sm:w-20 ${
                        isActive
                          ? "border-[#967019] border-2 shadow-[0_0_0_3px_rgba(150,112,25,0.12)]"
                          : "border-secondary border-2 group-hover:border-[#967019]"
                      }`}
                    >
                      <Image
                        src={category.image}
                        alt={category.label}
                        fill
                        sizes='82px'
                        className="object-cover"
                      />
                    </div>

                    <span
                      className={`whitespace-nowrap font-medium transition-colors body-sm ${
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 py-2">
          {activeProducts.map((product) => (
            <article
              key={product.slug || product.name}
              className="group overflow-hidden rounded-[20px] border border-[#C0C0C0] bg-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-[#EAE7E0]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Information */}
              <div className="flex min-h-33 flex-col p-5">
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
                      <FaArrowRightLong/>
                    </span>
                  </Link>
                ) : (
                  <span className="mt-auto pt-3 text-xs font-semibold text-[#89630B]">
                    Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* See All Products */}
        <div className="mt-8 text-center">
          <Link
            href="/export/Product"
            className="inline-flex items-center gap-2 body-sm font-medium text-[#89630B] underline underline-offset-4 transition-colors"
          >
            See All Products
            <span aria-hidden="true" className="text-base">
              <FaArrowRightLong/>
            </span>
          </Link>
        </div> 
        </div>
       </div>
    </div>
  )
}
