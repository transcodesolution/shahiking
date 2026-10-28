
"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { faqData } from "@/data/ui/blog";

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <div className="w-full space-y-4">
      {faqData.map((item, index) => {
        const isActive = activeIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div
            key={item.question}
            className={`rounded-4xl border bg-white px-4 py-5 shadow-sm transition-colors duration-300 md:px-10 ${isActive ? "border-primary" : "border-secondary"
              }`}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              aria-expanded={isActive}
              aria-controls={answerId}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <h3 className="body-md font-medium">
                {item.question}
              </h3>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <IoIosArrowDown
                  aria-hidden="true"
                  className={`text-xl text-primary transition-transform duration-300 cursor-pointer ${isActive ? "rotate-180" : ""
                    }`}
                />
              </div>
            </button>

            <div
              id={answerId}
              aria-hidden={!isActive}
              className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${isActive
                  ? "mt-4 grid-rows-[1fr] opacity-100"
                  : "mt-0 grid-rows-[0fr] opacity-0"
                }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="border-t-2 border-secondary pt-3 leading-relaxed text-accent body-sm">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
