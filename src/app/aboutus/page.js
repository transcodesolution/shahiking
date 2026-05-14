import React from "react";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Testimonials from "@/components/common/Testimonials";
import GetInTouch from "@/components/common/GetInTouch";


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
          name: "What is Shahiking?",
          acceptedAnswer: {
            "@type": "Answer",

            text: "Shahiking is a premium healthy food brand.",
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
      <Testimonials />
      <GetInTouch />
    </React.Fragment>
  );
}
