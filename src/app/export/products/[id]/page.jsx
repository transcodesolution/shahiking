
import { notFound } from "next/navigation";

import ExportProductHero from "./_components/ExportProductHero";
import ExportRelatedProducts from "./_components/ExportRelatedProducts";
import Testimonials from "@/components/common/Testimonials";

import { exportCatalogProducts } from "@/data/export/products";
import { exportMakhanaProducts } from "@/data/export/categories";

const SITE_URL = "https://shahiking.in";
const PRODUCT_NOT_FOUND_TITLE = "Product Not Found | Shahiking Export";
const DEFAULT_CATEGORY = "Export Products";

const findProductById = (products, id) =>
  products.find(
    (product) =>
      product.slug === id || String(product.id) === String(id),
  );

const getExportProduct = (id) =>
  findProductById(exportCatalogProducts, id) ||
  findProductById(exportMakhanaProducts, id);

const getProductDescription = (product) =>
  product.description ||
  `Explore premium quality ${product.name} available for bulk export from Shahiking.`;

const getProductImage = (product) => {
  const image = product.img || product.image;
  const imageUrl = Array.isArray(image) ? image[0] : image;

  return typeof imageUrl === "string" && imageUrl.trim()
    ? imageUrl
    : null;
};

const getCategoryName = (category) => {
  const value = Array.isArray(category) ? category[0] : category;

  return typeof value === "string" && value.trim()
    ? value
    : DEFAULT_CATEGORY;
};

const buildReturnQuery = (searchParams = {}) => {
  const query = new URLSearchParams();

  Object.entries(searchParams).forEach(([key, value]) => {
    const values = Array.isArray(value) ? value : [value];

    values.forEach((entry) => {
      if (typeof entry === "string" && entry.length > 0) {
        query.append(key, entry);
      }
    });
  });

  return query.toString();
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getExportProduct(id);

  if (!product) {
    return {
      title: PRODUCT_NOT_FOUND_TITLE,
      description: "Product not found.",
    };
  }

  const title = `${product.name} | Shahiking Export`;
  const description = getProductDescription(product);
  const canonicalUrl = `${SITE_URL}/export/products/${product.slug || id}`;
  const image = getProductImage(product);

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      ...(image && {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
          },
        ],
      }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && {
        images: [image],
      }),
    },
  };
}

export default async function ExportProductDetailPage({
  params,
  searchParams,
}) {
  const [{ id }, queryParams = {}] = await Promise.all([
    params,
    searchParams,
  ]);

  const product = getExportProduct(id);

  if (!product) {
    notFound();
  }

  const categoryName = getCategoryName(product.category);
  const returnQuery = buildReturnQuery(queryParams);

  const categoryHref = `/export/products${returnQuery ? `?${returnQuery}` : ""
    }`;

  return (
    <>
      <ExportProductHero
        product={product}
        categoryName={categoryName}
        categoryHref={categoryHref}
      />

      <ExportRelatedProducts
        currentSlug={product.slug}
        category={categoryName}
      />

      <Testimonials />
    </>
  );
}
