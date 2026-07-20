import Image from "next/image";
import React from "react";
import FaqAccordion from "./FaqAccordion";

export default function FAQ() {
  return (
    <div className="bg-secondary relative py-10 overflow-hidden ">
      <Image
        src="/Image/blogpage/faq_bg.webp"
        alt="Faq background"
        fill
        priority
        className="object-cover z-10"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="display-heading text-primary font-semibold text-center py-2">
            Frequently Asked Questions
          </h1>
          <p className="body-md text-black text-center mt-2">
            Find answers to common questions about our products and brand
          </p>
        </div>
        <div className="relative z-10">
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
}
