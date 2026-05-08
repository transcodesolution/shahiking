
export default function HomeSchema() {

  const schema = {
    "@context": "https://schema.org",

    "@graph": [

      {
        "@type": "Product",

        name: "Shahiking Healthy Snacks",

        image:
          "https://shahiking.in/_next/image?url=%2FImage%2Flogo.webp&w=256&q=75",

        description:
          "Shahiking offers premium Dry Fruits, Flavored Makhana, Plant-Based Protein, Superfoods, and Healthy Snack Mixes for clean and healthy living across India.",

        brand: {
          "@type": "Brand",

          name: "Shahiking",
        },

        aggregateRating: {
          "@type": "AggregateRating",

          ratingValue: "4.8",

          bestRating: "5",

          worstRating: "1",

          ratingCount: "250",
        },
      },

      {
        "@type": "Organization",

        "@id": "https://shahiking.in/#organization",

        name: "Shahiking",

        url: "https://shahiking.in/",

        logo:
          "https://shahiking.in/_next/image?url=%2FImage%2Flogo.webp&w=256&q=75",

        description:
          "Shahiking is a trusted online health food store in India offering premium Dry Fruits, Flavored Makhana, Plant-Based Protein, Superfoods, and Healthy Snack Mixes.",

        sameAs: [
          "https://www.instagram.com/shahiking_foods/",
          "https://www.linkedin.com/company/shahiking/posts/?feedView=all",
          "https://www.facebook.com/ShahiKingFoods/",
          "https://www.youtube.com/@ShahiKing-FoodX",
          "https://x.com/ShahiKing_Foods",
          "https://www.threads.com/@shahiking_foods",
          "https://in.pinterest.com/Shahiking_Foods/",
        ],

        contactPoint: {
          "@type": "ContactPoint",

          telephone: "+91-7435917404",

          contactType: "customer support",

          areaServed: "IN",

          availableLanguage: [
            "English",
            "Hindi",
          ],
        },
      },

      {
        "@type": "LocalBusiness",

        "@id": "https://shahiking.in/#localbusiness",

        name: "Shahiking",

        image:
          "https://shahiking.in/_next/image?url=%2FImage%2Flogo.webp&w=256&q=75",

        url: "https://shahiking.in/",

        telephone: "+91-7435917404",

        priceRange: "₹100-₹500",

        address: {
          "@type": "PostalAddress",

          streetAddress:
            "301, Ambika Pinnacle, beside Lajamni Chowk, Maruti Dham Society, Mota Varachha",

          addressLocality: "Surat",

          addressRegion: "Gujarat",

          postalCode: "394101",

          addressCountry: "IN",
        },

        areaServed: {
          "@type": "Country",

          name: "India",
        },
      },

      {
        "@type": "WebSite",

        "@id": "https://shahiking.in/#website",

        url: "https://shahiking.in/",

        name: "Shahiking Healthy Snacks",

        publisher: {
          "@id":
            "https://shahiking.in/#organization",
        },

        potentialAction: {
          "@type": "SearchAction",

          target:
            "https://shahiking.in/product?search={search_term_string}",

          "query-input":
            "required name=search_term_string",
        },
      },

      {
        "@type": "WebPage",

        "@id": "https://shahiking.in/#webpage",

        url: "https://shahiking.in/",

        name:
          "Shahiking - Healthy Snacks & Plant-Based Foods",

        description:
          "Buy healthy snacks, makhana, dry fruits, plant-based protein, and superfoods online in India.",

        inLanguage: ["en", "hi"],

        isPartOf: {
          "@id":
            "https://shahiking.in/#website",
        },
      },

      {
        "@type": "FAQPage",

        "@id": "https://shahiking.in/#faq",

        mainEntity: [

          {
            "@type": "Question",

            name: "What is Shahiking?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Shahiking is a trusted online health food store in India offering premium Dry Fruits, Flavored Makhana, Plant-Based Protein, Superfoods, and Healthy Snack Mixes for clean and healthy living.",
            },
          },

          {
            "@type": "Question",

            name:
              "What healthy products can I buy online from Shahiking?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "You can buy dry fruits, protein powders, healthy snacks, makhana, and more.",
            },
          },

          {
            "@type": "Question",

            name:
              "Are Shahiking products natural and preservative-free?",

            acceptedAnswer: {
              "@type": "Answer",

              text:
                "Yes, all products are made with natural ingredients and are preservative-free.",
            },
          },

        ],
      },

      {
        "@type": "BreadcrumbList",

        "@id": "https://shahiking.in/#breadcrumb",

        itemListElement: [
          {
            "@type": "ListItem",

            position: 1,

            name: "Home",

            item: "https://shahiking.in/",
          },
        ],
      },

    ],
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