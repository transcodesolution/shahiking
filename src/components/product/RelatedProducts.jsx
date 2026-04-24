import { productsData } from "@/data/ui/categories";
import Image from "next/image";
import ProductCard from "../ProductCard";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function RelatedProducts() {
  // ✅ Convert object to array
  const products = [...productsData.nuts];

  return (
    <div className="bg-white py-8 relative z-0 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leaf Images */}
        <Image
          src="/Image/homepage/category_leaf.webp"
          alt="leaf"
          width={47.42}
          height={75.05}
          className="hidden lg:block absolute top-0 right-55 object-cover h-30 w-17.5 -rotate-170 blur-2 z-10"
        />

        <Image
          src="/Image/homepage/category_leaf.webp"
          alt="leaf"
          width={47.42}
          height={75.05}
          className="hidden lg:block absolute top-0 left-55 object-cover h-30 w-17.5 -rotate-195 blur-2 translate scale-x-[-1] z-10"
        />

        <h2 className="display-heading font-semibold text-primary text-center">
          Related Product
        </h2>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {products.length > 0 ? (
            products.map((item, i) => (
              <ProductCard
                key={i}
                product={item}
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
    </div>
  );
}
