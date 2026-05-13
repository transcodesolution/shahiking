import React from "react";
import Hero from "./components/Hero";

export const metadata = {
  title: "Contact Shahiking | Healthy Snacks & Vegan Food Support",

  description:
    "Contact Shahiking for healthy snacks, vegan foods, bulk orders, partnerships & customer support.",

  alternates: {
    canonical: "https://shahiking.in/contact",
  },

  openGraph: {
    title: "Contact Shahiking | Healthy Snacks & Vegan Food Support",

    description:
      "Contact Shahiking for healthy snacks, vegan foods, bulk orders & customer support.",

    url: "https://shahiking.in/contact",

    type: "website",
  },
};

export default function page() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://shahiking.in/#organization",
        name: "Contact Shahiking",
        url: "https://shahiking.in/contact",
        logo: "https://shahiking.in/_next/image?url=%2FImage%2Flogo.webp&w=256&q=75",

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
          availableLanguage: ["English", "Hindi"],
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
          "@id": "https://shahiking.in/#organization",
        },

        potentialAction: {
          "@type": "SearchAction",
          target: "https://shahiking.in/product?search={search_term_string}",

          "query-input": "required name=search_term_string",
        },
      },

      {
        "@type": "WebPage",
        "@id": "https://shahiking.in/#webpage",
        url: "https://shahiking.in/",
        name: "Shahiking - Healthy Snacks & Plant-Based Foods",
        description:
          "Buy healthy snacks, makhana, dry fruits, plant-based protein, and superfoods online in India.",
        inLanguage: ["en", "hi"],
        isPartOf: {
          "@id": "https://shahiking.in/#website",
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
              text: "Shahiking is a trusted online health food store in India offering premium Dry Fruits, Flavored Makhana, Plant-Based Protein, Superfoods, and Healthy Snack Mixes for clean and healthy living.",
            },
          },

          {
            "@type": "Question",
            name: "What healthy products can I buy online from Shahiking?",

            acceptedAnswer: {
              "@type": "Answer",
              text: "You can buy dry fruits, protein powders, healthy snacks, makhana, and more.",
            },
          },

          {
            "@type": "Question",
            name: "Are Shahiking products natural and preservative-free?",

            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all products are made with natural ingredients and are preservative-free.",
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
          {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://shahiking.in/contact"
        }

        ],
      },
    ],
  };

  return (
    <React.Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <Hero />
    </React.Fragment>
  );
}
