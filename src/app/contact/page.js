import React from 'react'
import Hero from './components/Hero'
import ContactSchema from './schema';

export const metadata = {
  title:
    "Contact Shahiking | Healthy Snacks & Vegan Food Support",

  description:
    "Contact Shahiking for healthy snacks, vegan foods, bulk orders, partnerships & customer support.",

  alternates: {
    canonical:
      "https://shahiking.in/contact",
  },

  openGraph: {
    title:
      "Contact Shahiking | Healthy Snacks & Vegan Food Support",

    description:
      "Contact Shahiking for healthy snacks, vegan foods, bulk orders & customer support.",

    url:
      "https://shahiking.in/contact",

    type: "website",
  },
};

export default function page() {
  return (
    <React.Fragment>
      <ContactSchema/>
        <Hero/>   
    </React.Fragment>
  )
}