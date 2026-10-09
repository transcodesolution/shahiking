// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { HiMenu, HiX } from "react-icons/hi";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { usePathname } from "next/navigation";
// import ProductDropdown from "@/app/product/components/ProductDropdown";
// import SearchBar from "./SearchBar";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const isActive = (path) => {
//     if (path === "/") return pathname === "/";

//     return pathname.startsWith(path);
//   };

//   const navClass = (path) =>
//     `body-sm font-medium py-[8px] px-[12px] xl:px-[16px] ${
//       isActive(path)
//         ? "bg-primary text-secondary rounded-3xl"
//         : "text-secondary hover:text-white"
//     }`;

//   return (
//     <header className="bg-[#111313] sticky top-0 z-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/Image/logo.webp"
//             alt="shahiking logo"
//             width={137}
//             height={83}
//             className="h-15 md:h-17.5 w-auto"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
//           <Link href="/" className={`${navClass("/")}`}>
//             Home
//           </Link>
//           {/* Product Dropdown */}
//           <div className="static group">
//             {/* Product Link */}
//             <Link
//               href="/product"
//               className={`${navClass("/product")} flex items-center gap-1`}
//             >
//               Product
//               <span>
//                 <IoIosArrowDown />
//               </span>
//             </Link>

//             {/* Dropdown Menu */}
//             <div className="absolute inset-x-0 left-0 mt-6 z-50 w-full h-92 bg-white text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 overflow-hidden">
//               <ProductDropdown />
//             </div>
//           </div>
//           <Link href="/export" className={`${navClass("/export")}`}>
//             Export
//           </Link>
//           <Link href="/aboutus" className={`${navClass("/aboutus")}`}>
//             About
//           </Link>
//           <Link href="/recipe" className={`${navClass("/recipe")}`}>
//             Recipes
//           </Link>
//           <Link href="/blog" className={`${navClass("/blog")}`}>
//             Blog
//           </Link>
//           <Link href="/contact" className={`${navClass("/contact")}`}>
//             Contact Us
//           </Link>
//         </nav>

//         {/* Search Bar */}
//         <div className="hidden lg:flex justify-between items-center cursor-pointer">
//           <SearchBar />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="lg:hidden text-white text-3xl cursor-pointer"
//         >
//           {menuOpen ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden fixed top-21 left-0 w-full bg-primary border-t border-gray-700 z-50 transform transition-all duration-500 ease-in-out">
//           <nav className="flex flex-col px-6 py-4 gap-4">
//             <Link
//               href="/"
//               onClick={() => setMenuOpen(false)}
//               className="text-secondary border-b border-secondary py-2 text-lg"
//             >
//               Home
//             </Link>

//             {/* Mobile Product Dropdown */}
//             <div className="relative z-0 border-b border-secondary py-2">
//               <Link href="/product" className="flex items-center gap-1 text-lg">
//                 <button
//                   onClick={() => {setOpen(!open);setMenuOpen(false)}}
//                   className="text-secondary flex justify-between items-center w-full text-lg"
//                 >
//                   Product
//                   <span>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
//                 </button>
//               </Link>
//               {open && (
//                 <div className="bg-secondary">
//                   <ProductDropdown closeMenu={() => {
//                     setOpen(false);
//                     setMenuOpen(false);
//                   }}
//                   />
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/export"
//               onClick={() => setMenuOpen(false)}
//               className="text-secondary text-lg border-b border-secondary py-2"
//             >
//               Export
//             </Link>

//             <Link
//               href="/aboutus"
//               onClick={() => setMenuOpen(false)}
//               className="text-secondary text-lg border-b border-secondary py-2"
//             >
//               About
//             </Link>

//             <Link
//               href="/recipe"
//               onClick={() => setMenuOpen(false)}
//               className="text-secondary text-lg border-b border-secondary py-2"
//             >
//               Recipes
//             </Link>

//             <Link
//               href="/blog"
//               onClick={() => setMenuOpen(false)}
//               className="text-secondary text-lg border-b border-secondary py-2"
//             >
//               Blog
//             </Link>

//             <Link
//               href="/contact"
//               onClick={() => setMenuOpen(false)}
//               className="text-secondary text-lg"
//             >
//               Contact
//             </Link>

//             {/* Search */}
//             <div className="rounded-3xl flex items-center px-2">
//               <SearchBar className="w-full" />
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { usePathname } from "next/navigation";

import ProductDropdown from "@/app/product/components/ProductDropdown";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  // Detect E-Commerce or Export mode
  const isExportMode =
    pathname === "/export" || pathname.startsWith("/export/");

  // Dynamic navigation routes
  const homeHref = isExportMode ? "/export" : "/";
  const productHref = isExportMode ? "/export/products" : "/product";

  const actionHref = isExportMode ? "/" : "/export";
  const actionLabel = isExportMode ? "Buy Online" : "Global Exports";

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active menu detection
  const isActive = (path) => {
    if (path === "/" || path === "/export") {
      return pathname === path;
    }

    return pathname.startsWith(path);
  };

  // Navigation styles
  const navClass = (path) =>
    `body-sm font-medium py-[8px] px-[12px] xl:px-[16px]
    transition-all duration-300 ${
      isActive(path)
        ? "bg-primary text-secondary rounded-2xl"
        : "text-black hover:text-primary"
    }`;

  // Close mobile menu
  const closeMobileMenu = () => {
    setMenuOpen(false);
    setProductOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/50 backdrop-blur-xl shadow-lg shadow-black/5"
          : "py-4"
      }`}
    >
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-8
        flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-2" : "bg-white rounded-full py-2"
        }`}
      >
        {/* LOGO */}
        <Link
          href={homeHref}
          onClick={closeMobileMenu}
          className="flex items-center shrink-0"
        >
          <Image
            src="/Image/footer_logo_brown.webp"
            alt="ShahiKing logo"
            width={130}
            height={78}
            priority
            className="w-auto h-12 xl:h-13 object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
          {/* HOME */}
          <Link href={homeHref} className={navClass(homeHref)}>
            Home
          </Link>
          {/* PRODUCTS */}
         
          {isExportMode ? (
            <div className="relative group">
              <Link
                href="/export/products"
                className={`${navClass("/export/products")} flex items-center gap-1`}
              >
                Products
                <IoIosArrowDown className="transition-transform duration-300 group-hover:rotate-180" />
              </Link>

              {/* Export Products Dropdown */}
              <div
                className="
                  fixed left-0 top-20 z-50 w-full pt-2
                  invisible opacity-0 translate-y-2
                  pointer-events-none
                  group-hover:visible group-hover:opacity-100
                  group-hover:translate-y-0
                  group-hover:pointer-events-auto
                  transition-all duration-300
                "
              >
                <div
                  className="
                    w-full bg-white/95 backdrop-blur-xl
                    border-y border-gray-200 shadow-2xl
                    overflow-hidden py-2
                  "
                >
                  <ProductDropdown />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <Link
                href="/product"
                className={`${navClass("/product")} flex items-center gap-1`}
              >
                Product
                <IoIosArrowDown className="transition-transform duration-300 group-hover:rotate-180" />
              </Link>

              {/* E-Commerce Product Dropdown */}
              <div
                className="
                  fixed left-0 top-20 z-50 w-full pt-2
                  invisible opacity-0 translate-y-2
                  pointer-events-none
                  group-hover:visible group-hover:opacity-100
                  group-hover:translate-y-0
                  group-hover:pointer-events-auto
                  transition-all duration-300
                "
              >
                <div
                  className="
                  w-full bg-white/95 backdrop-blur-xl
                  border-y border-gray-200 shadow-2xl
                  overflow-hidden py-2
                "
                >
                  <ProductDropdown />
                </div>
              </div>
            </div>
          )}
          {/* ABOUT */}
          <Link href="/aboutus" className={navClass("/aboutus")}>
            About
          </Link>
          {/* RECIPES: E-COMMERCE ONLY */}
          {!isExportMode && (
            <Link href="/recipe" className={navClass("/recipe")}>
              Recipes
            </Link>
          )}
          {/* BLOG */}
          <Link href="/blog" className={navClass("/blog")}>
            Blog
          </Link>
          {/* CONTACT */}
          <Link href="/contact" className={navClass("/contact")}>
            Contact Us
          </Link>
        </nav>

        {/* DESKTOP RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <SearchBar />

          <Link
            href={actionHref}
            className="
              bg-primary text-white border border-primary
              py-2 px-4 xl:px-6 rounded-2xl whitespace-nowrap
              transition-all duration-300
              hover:bg-white hover:text-primary hover:shadow-lg
            "
          >
            {actionLabel}
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="
            lg:hidden flex items-center justify-center
            w-11 h-11 rounded-2xl bg-primary
            text-white text-2xl cursor-pointer
          "
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`
          lg:hidden fixed top-20 left-0 w-full px-4
          transition-all duration-300
          ${
            menuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }
        `}
      >
        <div
          className="
            bg-primary/95 backdrop-blur-xl
            border border-white/20 shadow-2xl
            rounded-3xl overflow-hidden
          "
        >
          <nav className="flex flex-col px-6 py-5 gap-1">
            {/* HOME */}
            <Link
              href={homeHref}
              onClick={closeMobileMenu}
              className={`
                text-secondary border-b border-secondary/30
                py-3 text-lg transition-all
                ${isActive(homeHref) ? "font-semibold" : "hover:pl-2"}
              `}
            >
              Home
            </Link>

            {/* MOBILE PRODUCTS */}
            {isExportMode ? (
              <Link
                href="/export/products"
                onClick={closeMobileMenu}
                className={`
                  text-secondary border-b border-secondary/30
                  py-3 text-lg transition-all
                  ${
                    isActive("/export/products")
                      ? "font-semibold"
                      : "hover:pl-2"
                  }
                `}
              >
                Products
              </Link>
            ) : (
              <div className="border-b border-secondary/30">
                <div className="flex items-center justify-between">
                  <Link
                    href="/product"
                    onClick={closeMobileMenu}
                    className={`
                      text-secondary py-3 text-lg flex-1
                      ${isActive("/product") ? "font-semibold" : ""}
                    `}
                  >
                    Product
                  </Link>

                  <button
                    type="button"
                    onClick={() => setProductOpen((prev) => !prev)}
                    aria-label={
                      productOpen ? "Close product menu" : "Open product menu"
                    }
                    aria-expanded={productOpen}
                    className="text-secondary text-xl p-2 cursor-pointer"
                  >
                    {productOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                </div>

                {/* Mobile product dropdown */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${
                      productOpen
                        ? "max-h-[500px] opacity-100 pb-3"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="bg-secondary rounded-2xl overflow-hidden">
                    <ProductDropdown
                      closeMenu={() => {
                        setProductOpen(false);
                        setMenuOpen(false);
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ABOUT */}
            <Link
              href="/aboutus"
              onClick={closeMobileMenu}
              className={`
                text-secondary text-lg
                border-b border-secondary/30 py-3
                transition-all
                ${isActive("/aboutus") ? "font-semibold" : "hover:pl-2"}
              `}
            >
              About
            </Link>

            {/* RECIPES: E-COMMERCE ONLY */}
            {!isExportMode && (
              <Link
                href="/recipe"
                onClick={closeMobileMenu}
                className={`
                  text-secondary text-lg
                  border-b border-secondary/30 py-3
                  transition-all
                  ${isActive("/recipe") ? "font-semibold" : "hover:pl-2"}
                `}
              >
                Recipes
              </Link>
            )}

            {/* BLOG */}
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className={`
                text-secondary text-lg
                border-b border-secondary/30 py-3
                transition-all
                ${isActive("/blog") ? "font-semibold" : "hover:pl-2"}
              `}
            >
              Blog
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`
                text-secondary text-lg py-3
                transition-all
                ${isActive("/contact") ? "font-semibold" : "hover:pl-2"}
              `}
            >
              Contact Us
            </Link>

            {/* MOBILE SEARCH */}
            <div className="pt-4">
              <div className="bg-white/10 rounded-2xl p-2 backdrop-blur-sm">
                <SearchBar className="w-full" />
              </div>
            </div>

            {/* MODE SWITCH BUTTON */}
            <div className="pt-3">
              <Link
                href={actionHref}
                onClick={closeMobileMenu}
                className="
                  block w-full rounded-2xl bg-secondary
                  py-3 text-center font-medium text-primary
                  transition-colors hover:bg-white
                "
              >
                {actionLabel}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
