"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { products as buyCatalogProducts } from "@/data/buy/products";
import { productsDetail } from "@/data/ui/productDetail";
import { productsData } from "@/data/buy/categories";

const normalizeCategory = (category) =>
  String(Array.isArray(category) ? category[0] || "" : category || "")
    .trim()
    .toLowerCase();

const getRelatedProducts = (currentSlug, category) => {
  const catalogBySlug = new Map(
    [...buyCatalogProducts, ...Object.values(productsData).flat()]
      .filter((product) => product.slug)
      .map((product) => [product.slug, product]),
  );

  const productsBySlug = new Map();
  productsDetail.forEach((product) => {
    if (!product.slug) return;
    productsBySlug.set(product.slug, {
      ...catalogBySlug.get(product.slug),
      ...product,
      category: catalogBySlug.get(product.slug)?.category || product.category,
    });
  });
  catalogBySlug.forEach((product, slug) => {
    if (!productsBySlug.has(slug)) productsBySlug.set(slug, product);
  });

  const currentCategory = normalizeCategory(category);
  if (!currentCategory) return [];

  return [...productsBySlug.values()]
    .filter(
      (product) =>
        product.slug !== currentSlug &&
        normalizeCategory(product.category) === currentCategory,
    )
    .map((product) => ({
      ...product,
      description: product.description || product.details || product.desc || "",
      image: Array.isArray(product.image)
        ? product.image[0]
        : product.img || product.image,
    }));
};

export default function RegularRelatedProducts({
  currentSlug = "",
  category,
  title = "Related products",
  maxItems = 8,
}) {
  const displayItems = getRelatedProducts(currentSlug, category).slice(0, maxItems);

  if (displayItems.length === 0) return null;

  return (
    <section className="bg-secondary py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-370">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0E0E0E] text-center mb-10 sm:mb-12">
          {title}
        </h2>

        {/* 4-Column Grid matching Figma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item, idx) => {
            const productHref = `/product/${item.slug}`;
            const itemImage = item.image;
            if (!itemImage?.startsWith("/Image/product/buy/")) return null;

            return (
              <Link
                key={item.slug || idx}
                href={productHref}
                className="group flex flex-col bg-[#F6F6F6] rounded-[18px] overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#C0C0C0] hover:border-primary"
              >
                {/* Image Container with precise sizing matching Frame 1000007602.png (336x309px) */}
                <div
                  className="relative w-full overflow-hidden bg-[#ECE8DF]"
                  style={{ aspectRatio: "336 / 309" }}
                >
                  <Image
                    src={itemImage}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="p-5 flex flex-col grow justify-between bg-[#F6F6F6]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0E0E0E] tracking-tight group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-base text-[#7C7C7E] leading-5 mt-1.5 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center">
                    <span className="inline-flex items-center gap-2 text-xl text-primary font-semibold group-hover:gap-3 transition-all">
                      View Details
                      <FaArrowRightLong className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
