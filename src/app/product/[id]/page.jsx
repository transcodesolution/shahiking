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

  // ✅ Get product from category data (for name)
  const allProducts = Object.values(productsData).flat();
  const product = allProducts.find((p) => p.slug === id);

  // ✅ Get product detail (MAIN FIX)
  const productDetail = productsDetail.find(
    (item) => item.slug === id
  );

  const productName = productDetail?.name || product?.name || "Product";

  // ✅ Handle not found
  if (!productDetail) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <>
      <div className="bg-secondary py-6 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
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

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
            <div>
              <ProductGallery product={productDetail} />
            </div>
            <div>
              <ProductInfo product={productDetail} />
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