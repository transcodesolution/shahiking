"use client";
import Image from "next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function GlobalMarkets() {
  const buyerTypes = [
    "Importers",
    "Health Food Stores",
    "Distributors",
    "E-commerce Brands",
    "Wholesalers",
    "Private Label Companies",
    "Supermarkets",
    "Hotels & Restaurants",
    "Retail Chains",
  ];

  const countries = [
    { name: "USA", code: "us", image:"/Image/exportpage/USA.webp"},
    { name: "Canada", code: "ca", image:"/Image/exportpage/canada.webp" },
    { name: "United Kingdom", code: "gb" ,image:"/Image/exportpage/uk.webp" },
    { name: "Australia", code: "au",image:"/Image/exportpage/australia.webp" },
    { name: "Germany", code: "de",image:"/Image/exportpage/germany.webp" },
    { name: "France", code: "fr",image:"/Image/exportpage/france.webp" },
    { name: "Netherlands", code: "nl",image:"/Image/exportpage/netherland.webp" },
    { name: "Singapore", code: "sg",image:"/Image/exportpage/singapore.webp" },
    { name: "UAE", code: "ae",image:"/Image/exportpage/UAE.webp" },
    { name: "Saudi Arabia", code: "sa",image:"/Image/exportpage/saudi_arabia.webp" },
    { name: "Malaysia", code: "my",image:"/Image/exportpage/malaysia.webp" },
    { name: "New Zealand", code: "nz",image:"/Image/exportpage/new_zealand.webp" },
  ];
  return (
    <div className="py-6 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <h1 className="display-heading text-primary font-bold text-center mb-2">
            Global Markets We Serve
          </h1>
          <p className="body-md text-center">
            We welcome business inquiries from buyers across the world.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 items-center mt-4 py-4">
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
              {buyerTypes.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-2.5 ${
                    index === 5 ? "sm:col-start-2" : ""
                  }`}
                >
                  {/* Green Check */}
                  <span className="text-[#16A34A]">
                    <FaRegCircleCheck />
                  </span>

                  <span className="body-md text-[#29251F]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-7">
              {countries.map((country) => (
                <div
                  key={country.code}
                  className="flex flex-col items-center justify-center"
                >
                  {/* Flag */}
                  <Image 
                  src={country.image}
                  alt="flag image"
                  width={50} 
                  height={33}
                  className="object-contain"
                  />

                  {/* Country Name */}
                  <span className="mt-2 text-center text-[9px] leading-3 text-[#242424] sm:text-[12px]">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
