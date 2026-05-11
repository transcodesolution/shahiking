import Link from "next/link";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import { productsDetail, productsMetadata } from "@/data/ui/productDetail";
import { productsData } from "@/data/ui/categories";
import RelatedProducts from "@/components/product/RelatedProducts";
import Testimonials from "@/components/common/Testimonials";
import GetInTouch from "@/components/common/GetInTouch";
import ProductSchema from "../schema";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = productsMetadata.find((item) => item.slug === id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product does not exist.",
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `https://shahiking.in/product/${product.slug}`,
    },

    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://shahiking.in/product/${product.slug}`,
      type: "website",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDescription,
      images: [product.image],
    },
  };
}


export default async function Page({ params }) {
  const { id } = await params;

  // All products
  const allProducts = Object.values(productsData).flat();

  // Product from category
  const product = allProducts.find((p) => p.slug === id);

  // Product detail
  const productDetail = productsDetail.find((item) => item.slug === id);

  // Product name
  const productName = productDetail?.name || product?.name || "Product";

  // Not found
  if (!productDetail) {
    return (
      <div className="p-10 text-center text-2xl font-bold">
        Product not found
      </div>
    );
  }

  return (
    <>
      <ProductSchema product={productDetail} />

      <div className="bg-secondary py-6 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex p-2">
            <ol className="flex items-center">
              <li>
                <Link
                  href="/product"
                  className="font-semibold text-primary font-heading body-md"
                >
                  All Categories
                </Link>
              </li>

              <li className="flex items-center">
                <span className="mx-1 body-md">/</span>

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
