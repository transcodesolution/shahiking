import React from "react";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import CoreProductPillars from "./components/CoreProductPillars";
import WhyChoose from "./components/WhyChoose";
import PeopleBehind from "./components/PeopleBehind";
import Testimonials from "@/components/common/Testimonials";
import FAQ from "./components/FAQ";


export const metadata = {
  title: "About Shahiking | Premium Healthy Snacks & Vegan Foods",
  description:
    "Learn about Shahiking, a trusted healthy food brand offering premium snacks, vegan foods & protein-rich nutrition for modern lifestyles.",
  alternates: {
    canonical: "https://shahiking.in/aboutus",
  },

  openGraph: {
    title: "About Shahiking | Premium Healthy Snacks & Vegan Foods",
    description:
      "Learn about Shahiking, a trusted healthy food brand offering premium snacks, vegan foods & protein-rich nutrition.",
    url: "https://shahiking.in/aboutus",
    siteName: "Shahiking",
    images: [
      {
        url: "https://shahiking.in/Image/logo.webp",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Shahiking",
    description: "Premium healthy snacks & vegan foods.",
    images: ["https://shahiking.in/Image/logo.webp"],
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
        logo: "https://shahiking.in/Image/logo.webp",
      },

      {
        "@type": "AboutPage",
        "@id": "https://shahiking.in/aboutus#aboutpage",
        url: "https://shahiking.in/aboutus",
        name: "About Shahiking",
        description:
          "Learn about Shahiking, a trusted healthy food brand offering premium snacks, vegan foods and protein-rich nutrition for modern lifestyles.",
        inLanguage: "en",
        isPartOf: {
          "@id": "https://shahiking.in/#website",
        },
      },

      {
        "@type": "FAQPage",
        "@id": "https://shahiking.in/aboutus#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is plant-based protein effective for weight loss?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, absolutely. High-quality plant-based protein promotes natural satiety, stabilizes insulin levels, and induces thermogenic metabolic efficiency. Shahiking isolates pea and sprouted grains without dairy bloat, delivering 25g of pure protein per scoop without synthetic fillers or added sugars.",
            },
          },
          {
            "@type": "Question",
            name: "Does Shahiking protein contain all essential amino acids?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Shahiking's plant-based protein is designed to help support your daily protein needs. Whether it provides all nine essential amino acids in sufficient amounts depends on its specific protein blend and formulation. Check the product label for its amino acid profile to confirm its completeness.",
            },
          },
          {
            "@type": "Question",
            name: "How does plant protein compare to traditional whey in muscle synthesis?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Plant-based protein and whey protein can both support muscle growth and recovery when consumed in adequate amounts. Whey is naturally rich in essential amino acids, while plant proteins can provide similar benefits when appropriately blended and consumed in sufficient quantities. Shahiking's plant-based protein is an option for those seeking a dairy-free alternative to support their fitness goals.",
            },
          },
          {
            "@type": "Question",
            name: "Are Shahiking products suitable for gluten-free and vegan lifestyles?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Shahiking's plant-based protein may suit vegan lifestyles if all ingredients and processing aids are plant-derived. Gluten-free suitability depends on the product's ingredients, manufacturing practices, and cross-contamination controls. Please check the packaging or official product information to confirm whether your chosen product meets your dietary requirements.",
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
      <OurStory />
      <CoreProductPillars />
      <WhyChoose />
      <PeopleBehind />
      <FAQ />
      <Testimonials />
    </React.Fragment>
  );
}
