"use client"
import { faqData } from "@/data/ui/blog";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="mt-8 space-y-4 mb-6 w-full py-4 max-w-228 mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-4xl px-4 md:px-10 py-4 shadow-sm border transition
              ${activeIndex === index ? "border-primary" : "border-secondary"}`}
          >
            {/* QUESTION */}
            <button
              className="flex justify-between items-center cursor-pointer w-full"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              <h3 className="body-md font-medium text-start">
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
              <p className="body-sm text-accent mt-4 text-start leading-relaxed border-t-2 border-secondary pt-3">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
