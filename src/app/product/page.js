import React from 'react'
import Hero from './components/Hero'
import OurProduct from './components/OurProduct'
import GetInTouch from '@/components/common/GetInTouch'
// import ProductSchema from './schema';

export const metadata = {
  title: "Healthy Snacks | Buy Plant-Based Foods",
  description:
    "Shop healthy snacks, makhana & tofu online. Discover plant-based, protein-rich foods for a clean lifestyle. Fast delivery & premium quality.",
  alternates: {
    canonical: "https://shahiking.in/product",
  },

  openGraph: {
    title: "Healthy Snacks | Buy Plant-Based Foods",
    description:
      "Shop healthy snacks, makhana & tofu online. Discover plant-based, protein-rich foods for a clean lifestyle.",
    url: "https://shahiking.in/product",
    siteName: "Shahiking",
    images: [
      {
        url: "https://shahiking.in/_next/image?url=%2FImage%2Flogo.webp&w=256&q=75",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Healthy Snacks | Buy Plant-Based Foods",
    description:
      "Shop healthy snacks, makhana & tofu online. Discover plant-based, protein-rich foods.",
    images: [
      "https://shahiking.in/_next/image?url=%2FImage%2Flogo.webp&w=256&q=75",
    ],
  },
};

export default function page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://shahiking.in/#organization",
        name: "Shahiking",
        url: "https://shahiking.in/",
        logo:
          "https://shahiking.in/_next/image?url=%2FImage%2Flogo.webp&w=256&q=75",

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
        "@type": "WebPage",
        "@id": "https://shahiking.in/product#webpage",
        url: "https://shahiking.in/product",
        name: "Healthy Snacks | Buy Plant-Based Foods",
        description:
          "Shop healthy snacks, makhana & tofu online. Discover plant-based, protein-rich foods for a clean lifestyle.",
        inLanguage: ["en", "hi"],
        isPartOf: {
          "@id": "https://shahiking.in/#website",
        },
      },

      {
        "@type": "ItemList",
        name: "Healthy Snacks Products",
        url: "https://shahiking.in/product",
        numberOfItems: 4,
        itemListElement: [
          {
            "@type": "Product",
            position: 1,
            name: "Premium Raw Makhana",
            image:
              "https://shahiking.in/product/makhana1.jpg",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              bestRating: "5",
              ratingCount: "50",
            },

            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "250",
              availability:
                "https://schema.org/InStock",
            },
          },

          {
            "@type": "Product",
            position: 2,
            name: "Peri-Peri Makhana",
            image:
              "https://shahiking.in/product/makhana2.jpg",

            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              bestRating: "5",
              ratingCount: "40",
            },

            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "134",
              availability:
                "https://schema.org/InStock",
            },
          },
        ],
      },

      {
        "@type": "FAQPage",
        "@id": "https://shahiking.in/product#faq",

        mainEntity: [
          {
            "@type": "Question",
            name: "Are makhana snacks healthy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, makhana is a low calorie and high protein snack rich in antioxidants.",
            },
          },

          {
            "@type": "Question",
            name: "Is tofu a good protein source?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, tofu is an excellent plant-based protein source.",
            },
          },
        ],
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://shahiking.in/product#breadcrumb",

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://shahiking.in/",
          },

          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: "https://shahiking.in/product",
          },
        ],
      },
    ],
  };

  return (
    <React.Fragment>
      {/* <ProductSchema/> */}
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
      <Hero />
      <OurProduct/>
      <GetInTouch/>     
    </React.Fragment>
  )
}