import React from "react";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Recipes from "./components/Recipes";
import ShopByCategory from "./components/ShopByCategory";
import WhatIsShahiking from "./components/WhatIsShahiking";
import WhyChooseUs from "./components/WhyChooseUs"
import Testimonials from "@/components/common/Testimonials";
import GetInTouch from "@/components/common/GetInTouch";
import HomeSchema from "./schema";

export const metadata = {
  title:
    "Healthy Bites | Fresh & Nutritious Food Delivered",

  description:
    "Discover delicious healthy meals, recipes, and fresh food options crafted for a better lifestyle. Order nutritious dishes and explore a variety of wholesome recipes.",

  alternates: {
    canonical: "https://shahiking.in/",
  },

  openGraph: {
    title:
      "Healthy Bites | Fresh & Nutritious Food Delivered",

    description:
      "Discover delicious healthy meals, recipes, and fresh food options crafted for a better lifestyle.",

    url: "https://shahiking.in/",

    siteName: "Shahiking",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "https://shahiking.in/_next/image?url=%2FImage%2Flogo.webp&w=256&q=75",

        width: 1200,

        height: 630,

        alt: "Shahiking Healthy Snacks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Healthy Bites | Fresh & Nutritious Food Delivered",

    description:
      "Discover delicious healthy meals, recipes, and fresh food options crafted for a better lifestyle.",

    images: [
      "https://shahiking.in/_next/image?url=%2FImage%2Flogo.webp&w=256&q=75",
    ],
  },
};

export default function Home() {
  return (
    <React.Fragment>
      <HomeSchema/>
      <Hero />
      <WhatIsShahiking />
      <ShopByCategory />
      <WhyChooseUs />
      <Recipes />
      <FAQ />
      <Testimonials/>
      <GetInTouch />
    </React.Fragment>
  );
}
