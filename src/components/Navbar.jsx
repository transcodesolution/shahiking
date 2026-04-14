"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSearchAlt } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { usePathname } from "next/navigation";
import ProductDropdown from "@/app/product/components/ProductDropdown";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open,setOpen] = useState(false);
  const pathname = usePathname();

  const navClass = (path) =>
    `desc font-medium py-[10px] px-[14px] xl:px-[18px] ${
      pathname === path
        ? "bg-primary text-secondary rounded-3xl"
        : "text-secondary hover:text-white"
    }`; 


  return (
    <header className="bg-[#111313] sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Image/logo.webp"
            alt="shahiking logo"
            width={137}
            height={83}
            className="h-15 md:h-17.5 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-3">
          <Link href="/" className={`${navClass("/")}`}>
            Home
          </Link>
          {/* Product Dropdown */}
          <div className="static group">
            {/* Product Link */}
            <Link
              href="/product"
              className={`${navClass("/product")} flex items-center gap-1`}
            >
               Product
              <span><IoIosArrowDown /></span>
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute inset-x-0 left-0 mt-6 z-50 w-full h-115 bg-white text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 overflow-hidden">
              <ProductDropdown />
            </div>
          </div>
          <Link href="/aboutus" className={`${navClass("/aboutus")}`}>
            About
          </Link>
          <Link href="/recipes" className={`${navClass("/recipes")}`}>
            Recipes
          </Link>
          <Link href="/blog" className={`${navClass("/blog")}`}>
            Blog
          </Link>
          <Link href="/contact" className={`${navClass("/contact")}`}>
            Contact Us
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex justify-between items-center cursor-pointer">
          <SearchBar/>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl cursor-pointer"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-21 left-0 w-full bg-primary border-t border-gray-700 z-50 transform transition-transform duration-500 .3s ease-in-out">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <Link href="/" className="text-secondary border-b border-secondary py-2 text-lg">
              Home
            </Link>

            {/* Mobile Product Dropdown */}
            <div className="relative z-0 border-b border-secondary py-2">
              <Link href="/product" className="flex items-center gap-1 text-lg">
                <button 
                 onClick={() =>setOpen(!open)}
                 className="text-secondary hover:text-white flex justify-between items-center w-full cursor-pointer">
                  Product
                  <span>
                    {open ? <IoIosArrowUp /> : <IoIosArrowDown /> }
                  </span>
                </button>
              </Link>
              {open && (
                <div className="bg-secondary w-full z-10">
                  <ProductDropdown />
                </div>
              )}
            </div>

            <Link href="/aboutus" className="text-secondary text-lg border-b border-secondary py-2">
              About
            </Link>
            <Link href="/recipes" className="text-secondary text-lg border-b border-secondary py-2">
              Recipes
            </Link>
            <Link href="/blog" className="text-secondary text-lg border-b border-secondary py-2">
              Blog
            </Link>
            <Link href="/contact" className="text-secondary text-lg">
              Contact
            </Link>

            {/* Search */}
            <div className="rounded-3xl flex items-center px-2">
              <SearchBar className="w-full"/>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
