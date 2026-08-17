"use client";

import React from "react";
import { FaRegFileAlt, FaRegComments, FaRegFile } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";

export default function OurExportProcess() {
  const steps = [
    {
      step: "Step 1",
      description: "Share Your Requirement",
      icon: FaRegFileAlt,
      active: true,
    },
    {
      step: "Step 2",
      title: "",
      description: "Receive Quotation & Samples",
      icon: FaRegComments,
    },
    {
      step: "Step 3",
      description: "Confirm Order",
      icon: IoMdCheckmarkCircleOutline,
    },
    {
      step: "Step 4",
      description: "Production & Quality Inspection",
      icon: MdOutlinePrecisionManufacturing,
    },
    {
      step: "Step 5",
      description: "Documentation & Shipping",
      icon: FaRegFile,
    },
    {
      step: "Step 6",
      description: "Safe Delivery",
      icon: FiTruck,
    },
  ];
  return (
    <div className="py-8 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="display-heading text-primary text-center font-bold">
            Our Export Process
          </h1>
        </div>

        <div className="relative hidden md:block py-8">
          {/* Connecting Line */}
          <div className="absolute left-[8.33%] right-[8.33%] top-17 h-0.5 bg-[#C9C9C4]" />

          <div className="relative grid grid-cols-6">
            {steps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div
                    className={`
                      relative z-10 flex h-18 w-18
                      items-center justify-center rounded-full
                      border bg-white
                      transition-all duration-300
                      ${
                        item.active
                          ? "border-[#8C6913] text-[#8C6913]"
                          : "border-[#BFC3C0] text-black"
                      }
                    `}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Step */}
                  <div
                    className={`
                      mt-1 body-md font-semibold leading-5
                      ${item.active ? "text-[#8C6913]" : "text-[#111111]"}
                    `}
                  >
                    {item.step}
                  </div>

                  {/* Description */}
                  <div className="mt-1.5 max-w-35 body-sm font-normal text-[#555555]">
                    <div>{item.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden py-4">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute bottom-7 left-5 top-7 w-px bg-[#C9C9C4]" />

            <div className="space-y-6">
              {steps.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.step}
                    className="relative flex items-start gap-4"
                  >
                    {/* Icon */}
                    <div
                      className={`
                        relative z-10 flex h-10 w-10
                        shrink-0 items-center justify-center
                        rounded-full border bg-white
                        ${
                          item.active
                            ? "border-[#8C6913] text-[#8C6913]"
                            : "border-[#BFC3C0] text-black"
                        }
                      `}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* Content */}
                    <div className="pt-0.5">
                      <div
                        className={`
                          body-md font-semibold
                          ${item.active ? "text-[#8C6913]" : "text-[#111111]"}
                        `}
                      >
                        {item.step}
                      </div>

                      <div className="mt-1 text-[13px] leading-5 text-[#555555]">
                        <span>{item.title}</span>{" "}
                        <span>{item.description}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
