"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

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
    emailjs.init(""); // your public key
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
        "", // your service ID
        "", // your template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          message: formData.message,
        },
        "", // your public key
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
    <div className="py-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FORM */}
        <div className="bg-secondary border-2 border-secondary shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040] p-5 md:p-10 rounded-[30px]">
          <form onSubmit={handleSubmit}>
            <h1 className="display-heading text-primary font-semibold border-b border-accent pb-2 md:pb-5">
              Let&apos;s Get in Touch
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 py-1 md:py-3">
              {/* Name */}
              <div>
                <label className="block body-md text-black">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name*"
                  className="w-full mt-2 md:mt-4 py-2 md:py-4 px-6 block border-2 shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040] border-secondary rounded-full bg-white"
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
                  className="w-full mt-2 md:mt-4 py-2 md:py-4 px-6 block border-2 shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040] border-secondary rounded-full bg-white"
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
                className="w-full mt-2 md:mt-4 py-2 md:py-4 px-6 block border-2 shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040] border-secondary rounded-full bg-white"
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
                className="w-full mt-2 md:mt-4 py-2 md:py-4 px-6 block border-2 shadow-sm shadow-[#00000040] inset-shadow-sm inset-shadow-[#00000040] border-secondary rounded-[30px] bg-white"
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
                {/* Custom Checkbox Box */}
                <div className="w-6 h-6 rounded-md border-2 border-gray-400 flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-all">
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
              className="mt-4 bg-primary text-secondary border border-primary px-6 py-2 rounded-full w-full max-w-85 hover:bg-secondary hover:text-primary duration-500 cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <Image
            src="/Image/contactpage/contact_form.webp"
            alt="contact"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
