import React from 'react'
import Hero from './components/Hero'
import OurProduct from './components/OurProduct'
import GetInTouch from '@/components/common/GetInTouch'
import ProductSchema from './schema';

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
  return (
    <React.Fragment>
      <ProductSchema/>
      <Hero />
      <OurProduct/>
      <GetInTouch/>     
    </React.Fragment>
  )
}