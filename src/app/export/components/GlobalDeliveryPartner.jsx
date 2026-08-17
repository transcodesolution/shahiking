import Image from "next/image";
import React from "react";
import { RxDotFilled } from "react-icons/rx";

export default function GlobalDeliveryPartner() {
  return (
    <div className="bg-secondary py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 py-6">
          <div className="w-full xl:max-w-150">
            <div>
              <h1 className="font-heading text-black font-bold leading-tight text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px]">
                Global Delivery
                <span className="xl:block text-primary"> Partners</span>
              </h1>
              <p className="flex items-center gap-2 body-md py-3 font-medium">
                Reliable Shipping
                <span className="text-primary">
                  <RxDotFilled />
                </span>
                Global Reach
              </p>
              <p className="body-sm w-full xl:max-w-110 text-[#333333]">
                We work with trusted international delivery partners to ensure
                your products are shipped safely and efficiently to customers
                and businesses worldwide.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-6 mt-6 xl:mt-10">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white w-26 md:w-32 h-26 md:h-32 border border-primary rounded-full flex justify-center items-center">
                  <Image
                    src="/image/exportpage/fssai_logo.webp"
                    alt="FSSAI"
                    width={65}
                    height={49}
                  />
                </div>
                <p className="body-md text-primary font-semibold">FSSAI Certified</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-white w-26 md:w-32 h-26 md:h-32 border border-primary rounded-full flex justify-center items-center">
                  <Image
                    src="/image/exportpage/haccp_img.webp"
                    alt="FSSAI"
                    width={92}
                    height={92}
                  />
                </div>
                <p className="body-md text-primary font-semibold">HACCP</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-white w-26 md:w-32 h-26 md:h-32 border border-primary rounded-full flex justify-center items-center">
                  <Image
                    src="/image/exportpage/brcgs_logo.webp"
                    alt="FSSAI"
                    width={110}
                    height={100}
                  />
                </div>
                <p className="body-md text-primary font-semibold">BRCGS</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-white w-26 md:w-32 h-26 md:h-32 border border-primary rounded-full flex justify-center items-center">
                  <Image
                    src="/image/exportpage/apeda_logo.webp"
                    alt="FSSAI"
                    width={80}
                    height={80}
                  />
                </div>
                <p className="body-md text-primary font-semibold">APEDA Registered</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-white w-26 md:w-32 h-26 md:h-32 border border-primary rounded-full flex justify-center items-center">
                  <Image
                    src="/image/exportpage/iec_logo.webp"
                    alt="FSSAI"
                    width={65}
                    height={49}
                  />
                </div>
                <p className="body-md text-primary font-semibold">IEC</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="bg-secondary border border-[#C1C8C2] rounded-[30px] p-8 flex flex-wrap justify-between items-enter ">
               <div>
                 <Image
                  src="/image/exportpage/fedex_icon.webp"
                  alt="FedEx"
                  width={180}
                  height={120}
                  />

                <p className="body-md text-primary font-semibold w-full max-w-56 mb-2">Fast & Reliable International Shipping</p>  

                <p className="body-sm w-full  max-w-66 text-[#333333]">Express delivery solutions for international samples, parcels, and commercial shipments.</p>
              </div>
              <div>
                <Image
                  src="/image/exportpage/fedex_parcel.webp"
                  alt="FedEx"
                  width={355}
                  height={237}
                  />
              </div>   
            </div>

            <div className="bg-secondary border border-[#C1C8C2] rounded-[30px] p-8 flex flex-wrap justify-between items-enter">
               <div>
                 <Image
                  src="/image/exportpage/dhl_logo.webp"
                  alt="FedEx"
                  width={180}
                  height={120}
                  />

                <p className="body-md text-primary font-semibold w-full max-w-56 mb-2">Worldwide Logistics & Delivery</p>  

                <p className="body-sm w-full  max-w-66 text-[#333333]">Reliable global shipping solutions designed to support international orders and export requirements.</p>
              </div>
              <div>
                <Image
                  src="/image/exportpage/dhl_parcel.webp"
                  alt="FedEx"
                  width={355}
                  height={237}
                  />
              </div>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
