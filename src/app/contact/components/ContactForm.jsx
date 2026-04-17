"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.agree) {
      newErrors.agree = "You must accept privacy policy";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);

      // reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        agree: false,
      });
    }
  };

  return (
    <div className="py-6 relative z-10">
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
                {errors.name && <p className="text-red-500">{errors.name}</p>}
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
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
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
              {errors.email && <p className="text-red-500">{errors.email}</p>}
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
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex items-center mt-4 mb-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="w-6 h-6 cursor-pointer"
              />
              <label className="ml-2 body-md">
                I agree to with friendly{" "}
                <span className="underline underline-offset-5">
                  {" "}
                  privacy policy.
                </span>
              </label>
            </div>
            {errors.agree && <p className="text-red-500">{errors.agree}</p>}

            {/* Button */}
            <button
              type="submit"
              className="mt-5 bg-primary text-secondary border border-primary px-6 py-2 rounded-full w-full max-w-85 hover:bg-secondary hover:text-primary duration-500 cursor-pointer"
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

