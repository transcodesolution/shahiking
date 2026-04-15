"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import { productsDetail } from "@/data/ui/productDetail";
import { productsData } from "@/data/ui/categories";
import RelatedProducts from "@/components/product/RelatedProducts";
import Testimonials from "@/components/common/Testimonials";
import GetInTouch from "@/components/common/GetInTouch";

export default function Page() {
  const params = useParams();
  const id = params?.id;

  const allProducts = Object.values(productsData).flat();

  const product = allProducts.find((p) => p.slug === id);

  // ✅ FIXED HERE
  const productName = product?.name || "Product";

  return (
    <>
      <div className="bg-secondary py-6 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex p-2">
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-primary font-heading body-md"
                >
                  All Categories
                </Link>
              </li>

              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="font-semibold text-primary font-heading body-md">
                  {productName}
                </span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 pb">
            <div>
              <ProductGallery product={productsDetail[0]} />
            </div>
            <div>
              <ProductInfo product={productsDetail[0]} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <RelatedProducts />
      </div>
      
        <Testimonials />
        <GetInTouch />
      
    </>
  );
}
