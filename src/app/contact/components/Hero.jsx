import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import { FiCheckCircle, FiClock, FiGlobe } from "react-icons/fi";

export default function Hero() {
  return (
    <main className="relative z-0 bg-[#FCFCFC] px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center md:mb-14">
          <h1 className="font-heading text-[40px] font-semibold leading-tight text-primary md:text-[48px] xl:text-[64px]">
            Contact Us
          </h1>
          <p className="mx-auto mt-2 max-w-142.5 text-[14px] leading-[1.4] text-[#0E0E0E] md:text-[16px]">
            Have questions about our healthy and vegan products? Want to partner
            with us? Reach out and our team will get back to you as soon as
            possible.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[12px] font-medium tracking-[0.02em] text-primary md:gap-2.5 md:text-[13px]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-secondary px-3 py-1"><FiCheckCircle />100% Plant-Based Purity</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-secondary px-3 py-1"><FiClock />24-Hour Imperial Response</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-secondary px-3 py-1"><FiGlobe />Global HoReCa &amp; Export Inquiries</span>
          </div>
        </header>
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.12fr_1fr] lg:gap-10">
          <div className="flex flex-col gap-6 lg:gap-9">
            <ContactForm />
            <ContactInformation />
          </div>
          <div className="flex flex-col gap-6 lg:gap-9">
            <div className="overflow-hidden rounded-2xl border border-stroke bg-secondary">
              <Image
                src="/Image/contactpage/contact-img.webp"
                alt="Get in touch with Shahiking"
                width={783}
                height={533}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="h-65 overflow-hidden rounded-2xl border border-stroke bg-secondary sm:h-75 lg:h-75">
              <iframe
                title="Shahiking Foods location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8364454633947!2d72.88551507600228!3d21.238333280546147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1cf89aa199%3A0x51b7475766080238!2sShahiKing%20Foods!5e0!3m2!1sen!2sin!4v1777546816420!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
