
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import { exportCatalogProducts } from "@/data/export/products";
import { exportMakhanaProducts } from "@/data/export/categories";

const normalizeCategory = (category) => {
  const value = Array.isArray(category) ? category[0] : category;

  return typeof value === "string" ? value.trim().toLowerCase() : "";
};

// Build the product lookup map once at module level.
// Catalog products retain priority when duplicate slugs exist.
const exportProductsBySlug = new Map();

[...exportMakhanaProducts, ...exportCatalogProducts].forEach((product) => {
  if (!product.slug) return;

  exportProductsBySlug.set(product.slug, {
    ...exportProductsBySlug.get(product.slug),
    ...product,
  });
});

const getProductImage = (product) => {
  const image = product.img || product.image;

  if (Array.isArray(image)) {
    return image.find(
      (src) => typeof src === "string" && src.trim(),
    );
  }

  return typeof image === "string" && image.trim() ? image : null;
};

const getRelatedProducts = (currentSlug, category) => {
  const currentCategory = normalizeCategory(category);

  if (!currentCategory) return [];

  return Array.from(exportProductsBySlug.values())
    .filter(
      (product) =>
        product.slug !== currentSlug &&
        normalizeCategory(product.category) === currentCategory,
    )
    .map((product) => ({
      ...product,
      description: product.description || "",
      image: getProductImage(product),
    }))
    .filter(
      (product) =>
        typeof product.image === "string" &&
        product.image.startsWith("/Image/product/export/"),
    );
};

export default function ExportRelatedProducts({
  currentSlug = "",
  category,
  title = "Related products",
  maxItems = 8,
}) {
  const displayItems = getRelatedProducts(
    currentSlug,
    category,
  ).slice(0, Math.max(0, maxItems));

  if (displayItems.length === 0) return null;

  return (
    <section className="bg-secondary py-14 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-370">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#0E0E0E] text-center mb-10 sm:mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item) => (
            <Link
              key={item.slug}
              href={`/export/products/${item.slug}`}
              className="group flex flex-col bg-white rounded-[18px] overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#C0C0C0] hover:border-primary"
            >
              {/* Product Image */}
              <div
                className="relative w-full overflow-hidden bg-[#ECE8DF] flex items-center justify-center"
                style={{ aspectRatio: "336 / 309" }}
              >
                <Image
                  src={item.image}
                  alt={item.name || "Export product"}
                  width={250}
                  height={230}
                  sizes="(max-width: 640px) 65vw, (max-width: 1024px) 32.5vw, 16.25vw"
                  className="w-[65%] h-[65%] object-contain"
                />
              </div>

              {/* Product Content */}
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
          ))}
        </div>
      </div>
    </section>
  );
}