import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ContactForm() {
  return (
    <div className="py-5 relative z-10">
        <div className="grid grid-cols-1 not-visited:lg:grid-cols-2 gap-8">
          <div className="bg-secondary p-10 border-2 border-secondary inset-shadow-sm inset-shadow-[#00000040] rounded-[30px]">
            <form>
              <h1 className="display-heading text-primary font-semibold border-b border-accent pb-5">
                Let’s Get in Touch
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-3">
                <div>
                  <label
                    className="block mb-2.5 body-md text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-white border border-secondary text-heading body-sm rounded-[30px] shadow-sm shadow-[#00000040] block w-full px-5 py-3 placeholder:text-accent"
                    placeholder="Enter your name*"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block mb-2.5 body-md text-black"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone number"
                    className="bg-white border border-secondary text-heading body-sm rounded-[30px] shadow-sm shadow-[#00000040] block w-full px-5 py-3 placeholder:text-accent"
                    placeholder="Enter your phone number*"
                    required
                  />
                </div>
              </div>
              <div className="py-3">
                <label className="block mb-2.5 body-md text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-white border border-secondary text-heading body-sm rounded-[30px] shadow-sm shadow-[#00000040] block w-full px-5 py-3 placeholder:text-accent"
                  placeholder="Enter your email*"
                  required
                />
              </div>
              <div className="py-3">
                <label className="block mb-2.5 body-md text-black">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="bg-white border border-secondary text-heading body-sm rounded-[30px] shadow-sm shadow-[#00000040] block w-full p-3.5 placeholder:text-accent"
                  placeholder="Leave us a message..."
                ></textarea>
              </div>
              <div className="flex items-center py-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-6 h-6 border border-[#464646] rounded-sm bg-secondary"
                />
                <label className="select-none ms-2 body-md">
                  I agree to with friendly{" "}
                  <span className="underline underline-offset-5">
                    privacy policy.
                  </span>
                </label>
              </div>
              <div className="mt-5">
                <Link
                  href="/"
                  className="bg-primary text-secondary body-sm flex justify-center items-center gap-4 border border-primary font-medium py-2 px-4 max-w-65.5 rounded-full hover:bg-secondary hover:text-primary duration-500"
                >
                  Send Message
                </Link>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center">
            <Image
             src="/Image/contactpage/contact_form.webp" 
             alt="contact form"
             width={778}
             height={610}
             className="h-152.5 w-full object-cover"
            />
          </div>
        </div>
    </div>
  );
}
