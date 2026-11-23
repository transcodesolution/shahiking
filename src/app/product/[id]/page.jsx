import { redirect } from "next/navigation";
import RegularProductHero from "./_components/RegularProductHero";
import { productsDetail, productsMetadata } from "@/data/ui/productDetail";
import { productsData } from "@/data/buy/categories";
import { products as buyProducts } from "@/data/buy/products";
import RegularRelatedProducts from "./_components/RegularRelatedProducts";
import Testimonials from "@/components/common/Testimonials";
import GetInTouch from "@/components/common/GetInTouch";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = productsMetadata.find((item) => item.slug === id);

  if (product) {
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

  const fallbackProduct =
    productsDetail.find((item) => item.slug === id) ||
    buyProducts.find((item) => item.slug === id) ||
    Object.values(productsData)
      .flat()
      .find((item) => item.slug === id);

  if (!fallbackProduct) {
    return {
      title: "Product Not Found",
      description: "This product does not exist.",
    };
  }

  const title = fallbackProduct.name
    ? `${fallbackProduct.name} | Shahiking`
    : "Shahiking Product";
  const description =
    fallbackProduct.metaDescription ||
    fallbackProduct.description ||
    fallbackProduct.details ||
    `${fallbackProduct.name} from Shahiking.`;
  const image = Array.isArray(fallbackProduct.image)
    ? fallbackProduct.image[0]
    : fallbackProduct.img || fallbackProduct.image;
  const canonical = `https://shahiking.in/product/${fallbackProduct.slug || id}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function Page({ params, searchParams }) {
  const [{ id }, queryParams] = await Promise.all([params, searchParams]);
  const returnQuery = new URLSearchParams(
    Object.entries(queryParams || {}).flatMap(([key, value]) =>
      (Array.isArray(value) ? value : [value]).filter(Boolean).map((entry) => [key, entry]),
    ),
  ).toString();
  const sellerOnlyMakhana = productsDetail.some(
    (item) => item.slug === id && /makhana|foxnuts/i.test(item.name),
  );
  if (sellerOnlyMakhana) redirect("/export/products");

  // All products
  const allProducts = Object.values(productsData).flat();

  // Product from category / buy catalog
  const catalogProduct =
    buyProducts.find((p) => p.slug === id) ||
    allProducts.find((p) => p.slug === id);

  // Product detail
  const productDetail = productsDetail.find((item) => item.slug === id);

  // Merged product
  const mergedProduct = {
    ...catalogProduct,
    ...productDetail,
  };

  // Not found
  if (!mergedProduct.name && !productDetail && !catalogProduct) {
    return (
      <div className="p-10 text-center text-2xl font-bold">
        Product not found
      </div>
    );
  }

  const categoryName = mergedProduct.category || "All Categories";

  return (
    <>
      <RegularProductHero
        product={mergedProduct}
        categoryName={categoryName}
        categoryHref={`/product${returnQuery ? `?${returnQuery}` : ""}`}
      />

      <RegularRelatedProducts currentSlug={id} category={categoryName} />

      <Testimonials />

      {/* <GetInTouch /> */}
    </>
  );
}
