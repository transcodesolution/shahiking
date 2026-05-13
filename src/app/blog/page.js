import React from "react";
import Hero from "./components/Hero";
import OurBlog from "./components/OurBlog";
import FAQ from "./components/FAQ";
import GetInTouch from "@/components/common/GetInTouch";
// import BlogSchema from './schema'

export const metadata = {
  title: "Healthy Food Blog | Nutrition Tips & Clean Eating Guide",
  description:
    "Explore Shahiking's healthy food blog for nutrition tips, vegan recipes, clean eating ideas & high-protein lifestyle guidance every day.",
  alternates: {
    canonical: "https://shahiking.in/blog",
  },

  openGraph: {
    title: "Healthy Food Blog | Nutrition Tips & Clean Eating Guide",
    description:
      "Explore Shahiking's healthy food blog for nutrition tips, vegan recipes, clean eating ideas & high-protein lifestyle guidance every day.",
    url: "https://shahiking.in/blog",
    type: "website",
    images: [
      {
        url: "https://shahiking.in/Image/blog-banner.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Healthy Food Blog | Nutrition Tips & Clean Eating Guide",
    description:
      "Explore Shahiking's healthy food blog for nutrition tips, vegan recipes, clean eating ideas & high-protein lifestyle guidance every day.",
    images: ["https://shahiking.in/Image/blog-banner.jpg"],
  },
};

export default function page() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://shahiking.in/blog#blog",
        url: "https://shahiking.in/blog",
        name: "Healthy Food Blog | Nutrition Tips & Clean Eating Guide",
        description:
          "Explore Shahiking's healthy food blog for nutrition tips, vegan recipes, clean eating ideas & high-protein lifestyle guidance every day.",
        publisher: {
          "@type": "Organization",
          name: "Shahiking",
          url: "https://shahiking.in",
        },
        inLanguage: ["en-IN", "hi-IN"],
      },

      {
        "@type": "CollectionPage",
        "@id": "https://shahiking.in/blog#collectionpage",
        url: "https://shahiking.in/blog",
        name: "Healthy Food Blog | Nutrition Tips & Clean Eating Guide",
        description:
          "Explore Shahiking's healthy food blog for nutrition tips, vegan recipes, clean eating ideas & high-protein lifestyle guidance every day.",
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://shahiking.in/blog#breadcrumb",
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
            name: "Blog",
            item: "https://shahiking.in/blog",
          },
        ],
      },

      {
        "@type": "FAQPage",
        "@id": "https://shahiking.in/blog#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is clean eating?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Clean eating focuses on nutritious whole foods with balanced nutrition.",
            },
          },
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
      <OurBlog />
      <FAQ />
      <GetInTouch />
    </React.Fragment>
  );
}
