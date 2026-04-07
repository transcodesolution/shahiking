import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-primary py-12 md:py-16 relative z-0 h-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#FCFCFC] relative rounded-2xl md:rounded-[30px] overflow-hidden">
          <Image
            src="/Image/footer_bg.webp"
            alt="Footer Background"
            width={1720}
            height={359}
            className="w-full h-[120vh] sm:h-[115vh] md:h-170 lg:h-90 object-cover"
          />
        </div>
        {/* Content */}
        <div className="absolute inset-0 z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-0 gap-x-8 px-10 md:px-22.5 py-7.5 md:py-10 lg:py-15">
          <div className="w-full lg:max-w-68.75">
            <img
              src="/Image/footer_logo.webp"
              alt="Footer Logo"
              className="w-25 md:w-32.25 h-16.25 md:h-19.5 object-contain"
            />
            <p className="mt-4 body-md text-primary font-medium">
              India's premium plant-based protein destination. We bring royalty
              to your table without compromising your health.
            </p>
          </div>
          <div className=" col-span-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-10">
            <div className="py-2">
              <h2 className="body-md text-primary font-semibold font-heading pb-2">
                Quick Links
              </h2>
              <div className="flex flex-col gap-2 text-[14px] md:text-[16px] xl:text-[18px]">
                <Link
                  href="/"
                  className="text-primary font-medium cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  href="/product"
                  className="text-primary font-medium"
                >
                  Product
                </Link>
                <Link
                  href="/aboutus"
                  className="text-primary font-medium"
                >
                  About
                </Link>
                <Link
                  href="/recipes"
                  className="text-primary font-medium"
                >
                  Recipes
                </Link>
                <Link
                  href="/blog"
                  className="text-primary font-medium"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-primary font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="py-2">
              <h2 className="body-md text-primary font-semibold font-heading pb-2">
                Trust & Safety
              </h2>
              <div className="flex flex-col gap-2 text-[14px] md:text-[16px] xl:text-[18px]">
                <Link
                  href="/"
                  className="text-primary font-medium"
                >
                  Shipping Policy
                </Link>
                <Link
                  href="/"
                  className="text-primary font-medium"
                >
                  Refund & Return
                </Link>
                <Link
                  href="/"
                  className="text-primary font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/"
                  className="text-primary font-medium"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="py-2">
              <h2 className="body-md text-primary font-semibold font-heading pb-2">
                Social
              </h2>
              <div className="flex flex-col gap-2 text-[14px] md:text-[16px] xl:text-[18px]">
                <a
                  href=""
                  className="text-primary font-medium flex items-center gap-1"
                >
                  <span className="text-[20px] md:text-[22px] xl:text-[24px]">
                    <FaFacebookSquare />
                  </span>
                  Facebook
                </a>
                <a
                  href=""
                  className="text-primary font-medium flex items-center gap-1"
                >
                  <span className="text-[20px] md:text-[22px] xl:text-[24px]">
                    <FaSquareXTwitter />
                  </span>
                  Twitter
                </a>
                <a
                  href=""
                  className="text-primary font-medium flex items-center gap-1"
                >
                  <span className="text-[20px] md:text-[22px] xl:text-[24px]">
                    <FaSquareInstagram />
                  </span>
                  Instagram
                </a>
                <a
                  href=""
                  className="text-primary font-medium flex items-center gap-1"
                >
                  <span className="text-[20px] md:text-[22px] xl:text-[24px]">
                    <FaLinkedin />
                  </span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="py-2">
            <h2 className="body-md text-primary font-semibold font-heading pb-2">
              Newsletter
            </h2>
            <p className="pt-2 text-primary text-[14px] md:text-[18px] font-medium w-full max-w-92.5">
              Subscribe for loyal recipes and exclusive offers.
            </p>
            <form>
            <div className="bg-[#D9D9D9] rounded-3xl flex justify-between items-center mt-5">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2 w-full outline-none"
              />
              <button className="bg-primary text-white px-6 py-1 rounded-3xl mr-1 border border-primary hover:bg-white hover:text-primary duration-500 cursor-pointer">
                <a href="/">
                  Join
                </a>
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
