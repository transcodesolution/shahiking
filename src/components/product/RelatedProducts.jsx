"use client";

import RegularRelatedProducts from "@/app/product/[id]/_components/RegularRelatedProducts";
import ExportRelatedProducts from "@/app/export/products/[id]/_components/ExportRelatedProducts";

export default function RelatedProducts({
  currentSlug = "",
  isExport = false,
  title = "Related products",
  maxItems = 8,
}) {
  if (isExport) {
    return (
      <ExportRelatedProducts
        currentSlug={currentSlug}
        title={title}
        maxItems={maxItems}
      />
    );
  }

  return (
    <RegularRelatedProducts
      currentSlug={currentSlug}
      title={title}
      maxItems={maxItems}
    />
  );
}
