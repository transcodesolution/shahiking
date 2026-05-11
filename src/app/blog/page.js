import React from 'react'
import Hero from './components/Hero'
import OurBlog from './components/OurBlog'
import FAQ from './components/FAQ'
import GetInTouch from '@/components/common/GetInTouch'
import BlogSchema from './schema'

export const metadata = {
  title:
    "Healthy Food Blog | Nutrition Tips & Clean Eating Guide",
  description:
    "Explore Shahiking's healthy food blog for nutrition tips, vegan recipes, clean eating ideas & high-protein lifestyle guidance every day.",
  alternates: {
    canonical: "https://shahiking.in/blog",
  },

  openGraph: {
    title:
      "Healthy Food Blog | Nutrition Tips & Clean Eating Guide",
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
    title:
      "Healthy Food Blog | Nutrition Tips & Clean Eating Guide",
    description:
      "Explore Shahiking's healthy food blog for nutrition tips, vegan recipes, clean eating ideas & high-protein lifestyle guidance every day.",
    images: [
      "https://shahiking.in/Image/blog-banner.jpg",
    ],
  },
};


export default function page() {
  return (
   <React.Fragment>
    <BlogSchema/>
      <Hero/>
      <OurBlog/>
      <FAQ/>
      <GetInTouch/>
    </React.Fragment>
  )
}
