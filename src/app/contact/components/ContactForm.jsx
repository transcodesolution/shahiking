"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiSend, FiUser } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  // Initialize EmailJS (IMPORTANT FIX)
  useEffect(() => {
    emailjs.init("mrYnEJl1pHHZ6wjmX"); // your public key
  }, []);

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

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    if (!formData.agree) {
      toast.error("Please accept privacy policy");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_433a5yr", // your service ID
        "template_4wdubdk", // your template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          message: formData.message,
        },
        "mrYnEJl1pHHZ6wjmX", // your public key
      )
      .then((result) => {
        console.log("SUCCESS:", result);
        toast.success("Message sent successfully");

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          agree: false,
        });
      })
      .catch((error) => {
        console.log("ERROR:", error);
        console.log("STATUS:", error?.status);
        console.log("TEXT:", error?.text);

        toast.error(error?.text || "Failed to send message");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="relative z-10">
      <div className="rounded-[20px] border border-stroke bg-secondary p-6 sm:p-8 lg:p-9 xl:p-10">
          <form onSubmit={handleSubmit}>
            <h2 className="font-heading text-[30px] font-semibold leading-tight text-primary md:text-[36px] xl:text-[40px]">
              Let&apos;s Get in Touch
            </h2>
            <p className="mt-3 max-w-146.75 text-[14px] leading-6 text-[#5D594D] md:text-[16px]">Fill out the royal inquiry form below and our dedicated culinary advisors will respond with utmost promptness.</p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 pt-5 md:grid-cols-2">
              {/* Name */}
              <div>
                  <label className="block text-[14px] text-[#0E0E0E]">Name<span className="text-red-600">*</span></label>
                <div className="relative mt-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name*"
                    required
                    className="block w-full rounded-full border border-[#E7DDBE] bg-[#FCFCFC] py-3 pl-5 pr-12 text-[14px] outline-none transition focus:border-primary"
                  />
                  <FiUser aria-hidden="true" className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[18px] text-[#BDBDBD]" />
                </div>
              </div>
              {/* Phone */}
              <div>
                  <label className="block text-[14px] text-[#0E0E0E]">Phone Number<span className="text-red-600">*</span></label>
                <div className="relative mt-2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number*"
                    required
                    className="block w-full rounded-full border border-[#E7DDBE] bg-[#FCFCFC] py-3 pl-5 pr-12 text-[14px] outline-none transition focus:border-primary"
                  />
                  <FiPhone aria-hidden="true" className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[18px] text-[#BDBDBD]" />
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="mt-4">
              <label className="block text-[14px] text-[#0E0E0E]">Email<span className="text-red-600">*</span></label>
              <div className="relative mt-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email*"
                  required
                  className="block w-full rounded-full border border-[#E7DDBE] bg-[#FCFCFC] py-3 pl-5 pr-12 text-[14px] outline-none transition focus:border-primary"
                />
                <FiMail aria-hidden="true" className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[18px] text-[#BDBDBD]" />
              </div>
            </div>
            {/* Message */}
            <div className="mt-4">
              <label className="block text-[14px] text-[#0E0E0E]">Your Message <span className="text-red-600">*</span></label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave us a message..."
                rows={5}
                required
                className="mt-2 block w-full resize-y rounded-3xl border border-[#E7DDBE] bg-[#FCFCFC] px-5 py-4 text-[14px] outline-none transition focus:border-primary"
              />
            </div>
            {/* Checkbox */}
            <div className="mt-4 mb-1 flex items-center">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="peer sr-only"
                />
                {/* Custom Checkbox Box */}
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-[#E7DDBE] bg-[#FCFCFC] transition-all peer-checked:border-primary peer-checked:bg-primary">
                  <svg
                    className="h-4 w-4 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[14px] text-[#5D594D]">
                  I agree to with friendly{" "}
                  <span className="underline underline-offset-4 decoration-accent decoration-1">
                    privacy policy.
                  </span>
                </span>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 inline-flex min-w-54.75 items-center justify-center rounded-full border border-primary bg-primary px-7 py-3 text-[14px] font-semibold text-white shadow-md transition hover:bg-[#654D0F] disabled:cursor-wait disabled:opacity-70"
            >
              {loading ? "Sending..." : <>Send Message <FiSend aria-hidden="true" className="ml-2 text-[16px]" /></>}
            </button>
          </form>
        </div>
    </section>
  );
}
