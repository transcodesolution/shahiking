"use client";
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
            className={`bg-white rounded-4xl px-4 md:px-10 py-5 shadow-sm border transition .35s ease-in 
              ${activeIndex === index ? "border-primary" : "border-secondary"}`}
          >
            {/* QUESTION */}
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full cursor-pointer"
            >
              <h3 className="body-md font-medium text-start">
                {item.question}
              </h3>

              <IoIosArrowDown
                className={`text-xl transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* ANSWER */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="body-sm text-accent leading-relaxed border-t-2 border-secondary pt-3">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
