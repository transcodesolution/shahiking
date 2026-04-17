import Image from "next/image";
import React from "react";
import { BsEnvelope } from "react-icons/bs";

export default function ContactInformation() {
  return (
    <div className="py-3 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-secondary p-5 md:p-10 border-2 border-secondary shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040] rounded-[30px]">
          <h1 className="display-heading text-primary font-semibold border-b border-accent pb-5">
            Contact Information
          </h1>
          <div className="mt-6 flex flex-col space-y-4">
            <div className="flex gap-2">
              <p className="h-12.5 w-12.5 bg-white rounded-full border border-secondary shadow-sm inset-shadow-sm inset-shadow-[#00000040] flex justify-center items-center">
                <span className="text-[24px]">
                  <Image
                    src="/Image/contactpage/email_icon.webp"
                    alt="email_icon"
                    width={24}
                    height={24}
                  />
                </span>
              </p>
              <div>
                <p className="body-md text-black font-medium">Phone</p>
                <p className="body-md text-black ">+91 74359 17404</p>
              </div>
            </div>
            <div className="flex gap-2">
              <p className="h-12.5 w-12.5 bg-white rounded-full border border-secondary shadow-sm inset-shadow-sm inset-shadow-[#00000040] flex justify-center items-center">
                <span className="text-[24px]">
                  <Image
                    src="/Image/contactpage/mobile_icon.webp"
                    alt="email_icon"
                    width={24}
                    height={24}
                  />
                </span>
              </p>
              <div>
                <p className="body-md text-black font-medium">Email</p>
                <p className="body-md text-black ">info@shahiking.in</p>
              </div>
            </div>
            <div className="flex gap-2">
              <p className="h-12.5 w-12.5 bg-white rounded-full border border-secondary shadow-sm inset-shadow-sm inset-shadow-[#00000040] flex justify-center items-center">
                <span className="text-[24px]">
                  <Image
                    src="/Image/contactpage/location_icon.webp"
                    alt="location_icon"
                    width={24}
                    height={24}
                  />
                </span>
              </p>
              <div>
                <p className="body-md text-black font-medium">Location</p>
                <p className="body-md text-black w-full max-w-120">
                  Ambika Pinnacle, 301, beside Lajamni Chowk, Mota Varachha,
                  Surat, Gujarat 394101
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8386097921216!2d72.88554337600243!3d21.23824748054903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f5100c5afcd%3A0xf0c8c348ba866c82!2sAmbika%20Pinnacle!5e0!3m2!1sen!2sin!4v1776338668805!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-94 lg:h-full w-full rounded-[30px] border-2 border-secondary shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
