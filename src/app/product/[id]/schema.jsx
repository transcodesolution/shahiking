export default function ProductSchema({
  product,
}) {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description:
      product.metaDescription,
    brand: {
      "@type": "Brand",
      name: "Shahiking",
    },

    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability:
        "https://schema.org/InStock",
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      bestRating: "5",
      ratingCount: "50",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}