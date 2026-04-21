"use client";

import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // check empty fields
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    // checkbox validation
    if (!formData.agree) {
      toast.error("Please accept privacy policy");
      return;
    }

    // ✅ success
    toast.success("Message sent successfully");

    // reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      agree: false,
    });
  };

  return (
    <div className="py-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FORM */}
        <div className="bg-secondary border-2 border-secondary shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040] p-5 md:p-10 rounded-[30px]">
          <form onSubmit={handleSubmit}>
            <h1 className="display-heading text-primary font-semibold border-b border-accent pb-5">
              Let’s Get in Touch
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-3">
              <div>
                {/* Name */}
                <label className="block body-md text-black">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name*"
                  className="w-full mt-4 py-3 px-5 block border-2 shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040] border-secondary rounded-full bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block body-md text-black">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number*"
                  className="w-full mt-4 py-3 px-5 block border-2 shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040] border-secondary rounded-full bg-white"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-3">
              <label className="block body-md text-black">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email*"
                className="w-full mt-4 py-3 px-5 block border-2 shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040] border-secondary rounded-full bg-white"
              />
            </div>

            {/* Message */}
            <div className="mt-4">
              <label className="block body-md text-black">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave us a message..."
                rows={6}
                className="w-full mt-4 py-3 px-5 block border-2 shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040] border-secondary rounded-[30px] bg-white"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center mt-4 mb-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="hidden peer"
                />

                {/* Custom Box */}
                <div className="w-6 h-6 rounded-md border-2 border-gray-400 flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-all">
                  {/* Tick Icon */}
                  <svg
                    className="w-5 h-5 text-secondary peer-checked:block"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <span className="body-md text-black">
                  I agree to with friendly {" "}
                  <span className="underline underline-offset-4 decoration-accent decoration-1">
                  privacy policy.
                  </span>
                </span>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-5 bg-primary text-secondary font-medium border border-primary px-6 py-2 rounded-full w-full max-w-85 hover:bg-secondary hover:text-primary duration-500 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <Image
            src="/Image/contactpage/contact_form.webp"
            alt="contact form"
            width={778}
            height={610}
            className="h-full lg:h-152 w-full"
          />
        </div>
      </div>
    </div>
  );
}
