import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export default function ContactInformation() {
  return (
    <section className="relative z-10 rounded-[20px] border border-stroke bg-secondary p-6 sm:p-8 lg:p-9 xl:p-10">
      <h2 className="border-b border-[#EAE8E0] pb-4 font-heading text-[30px] font-semibold leading-tight text-primary md:text-[36px] xl:text-[40px]">
        Contact Information
      </h2>
      <div className="mt-5 flex flex-col gap-4">
        <a href="mailto:info@shahiking.in" className="group flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-sm transition-colors group-hover:border-primary group-hover:bg-primary">
            <FiMail className="text-[22px] text-black transition-colors group-hover:text-white" />
          </span>
          <span>
            <span className="block text-[16px] font-medium text-[#0E0E0E]">Email</span>
            <span className="block text-[16px] leading-6 text-[#7C7C7C]">info@shahiking.in</span>
          </span>
        </a>
        <a href="tel:+917435917404" className="group flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-sm transition-colors group-hover:border-primary group-hover:bg-primary">
            <FiPhone className="text-[22px] text-black transition-colors group-hover:text-white" />
          </span>
          <span>
            <span className="block text-[16px] font-medium text-[#0E0E0E]">Phone</span>
            <span className="block text-[16px] leading-6 text-[#7C7C7C]">+91 74359 17404</span>
          </span>
        </a>
        <div className="group flex items-start gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-sm transition-colors group-hover:border-primary group-hover:bg-primary">
            <GrLocation className="text-[22px] text-black transition-colors group-hover:text-white" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[16px] font-medium text-[#0E0E0E]">Location</span>
            <span className="block wrap-break-word text-[16px] leading-5 text-[#7C7C7C]">
              Ambika Pinnacle, 301, beside Lajamni Chowk, Mota Varachha,
              Surat, Gujarat 394101
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
