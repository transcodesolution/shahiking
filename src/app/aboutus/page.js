import React from 'react'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Testimonials from '@/components/common/Testimonials'
import GetInTouch from '@/components/common/GetInTouch'
import AboutSchema from './schema'

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

    description:
      "Premium healthy snacks & vegan foods.",

    images: ["https://shahiking.in/Image/logo.webp"],
  },
};

export default function page() {
  return (
    <React.Fragment>
      <AboutSchema/>
       <Hero/>
       <OurStory/>
       <Testimonials/>
       <GetInTouch/>
    </React.Fragment>
  )
}
