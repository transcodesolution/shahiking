"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is Shahiking?",
      answer:
        "Shahiking is a trusted online health food store in India offering premium Dry Fruits, Flavored Makhana, Plant-Based Protein, Superfoods, and Healthy Snack Mixes for clean and healthy living.",
    },
    {
      question: "What healthy products can I buy online from Shahiking?",
      answer:
        "You can buy dry fruits, protein powders, healthy snacks, makhana, and more.",
    },
    {
      question: "Are Shahiking products natural and preservative-free?",
      answer:
        "Yes, all products are made with natural ingredients and are preservative-free.",
    },
    {
      question: "Are your products good for weight loss and fitness?",
      answer:
        "Yes, our products are designed for healthy lifestyle and fitness goals.",
    },
    {
      question: "Do you offer doorstep delivery across India?",
      answer: "Yes, we deliver across India.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white relative z-0">
        <Image 
        src="/Image/homepage/faq_bg.webp" 
        alt="Faq background" 
        width={1920}
        height={1402}
        className="h-full w-full object-cover absolute inset-0 z-10 overflow-hidden"
        />
      <div className="container mx-auto px-4 lg:px-8 py-8 md:py-0">
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center relative z-10 pt-0 md:pt-10">

          {/* LEFT IMAGE */}
          <div className="hidden md:flex justify-center">
            <Image
              src="/Image/homepage/faq_section_bg.webp"
              alt="faq"
              width={572}
              height={772}
              className="object-contain h-160 xl:h-193 w-143"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="display-heading font-semibold text-primary text-center lg:text-start">
              Find the answer to your confusion
            </h2>
            <p className="body-md text-accent mt-3 text-center lg:text-start">
              Find answers to common questions about our products and brand
            </p>

            {/* FAQ LIST */}
            <div className="mt-8 space-y-4 mb-6">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-4xl px-4 md:px-8 py-5 shadow-sm border-2 border-secondary transition"
                >
                  {/* QUESTION */}
                  <button
                    className="flex justify-between items-center cursor-pointer w-full"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <h3 className="body-md font-medium">
                      {item.question}
                    </h3>
                    <IoIosArrowDown
                      className={`text-xl transition-transform ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* ANSWER */}
                  {activeIndex === index && (
                    <p className="body-sm text-accent mt-4 leading-relaxed border-t-2 border-secondary pt-3">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
