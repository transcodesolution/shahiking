"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { LuFileText } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { WhatsAppIcon } from "@/components/common/WhatsAppFloat";
import { getProductSpecification } from "@/data/productSpecifications";

const displaySpecValue = (value) => {
  if (value === null || value === undefined || value === "") return "-";
  return typeof value === "string" ? value.trim() || "-" : value;
};

const getFallbackProductDescription = (product, spec) => {
  const name = spec.name || product.name || "This product";
  const category = String(spec.category || product.category || "").toLowerCase();
  const productText = `${name} ${category}`.toLowerCase();

  if (/makhana|foxnuts/.test(productText)) {
    return `${name} is a crisp fox nuts snack to enjoy on its own or add to your favourite snack mix.`;
  }
  if (/seasoning/.test(productText)) {
    return `${name} adds a savoury, flavourful touch to snacks and everyday recipes.`;
  }
  if (/tofu|protein/.test(productText)) {
    return `${name} is a versatile plant-based option for curries, stir-fries, salads, and everyday meals.`;
  }
  if (/spice|masala|chilli|chili|turmeric|pepper|cumin|coriander/.test(productText)) {
    return `${name} brings a distinctive spice flavour to curries, sauces, and everyday cooking.`;
  }
  return `${name} is a versatile ingredient for adding its distinctive character to everyday cooking.`;
};

export default function RegularProductHero({
  product,
  categoryName = "All Categories",
  categoryHref = "/product",
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState("description");
  const [activeInfoTooltip, setActiveInfoTooltip] = useState(null);
  const [truncatedInfoValues, setTruncatedInfoValues] = useState({});
  const infoValueRefs = useRef(new Map());

  useEffect(() => {
    const measureValues = () => {
      const next = {};
      infoValueRefs.current.forEach((element, label) => {
        next[label] = element.scrollWidth > element.clientWidth + 1;
      });

      setTruncatedInfoValues((current) => {
        const labels = Object.keys(next);
        if (
          labels.length === Object.keys(current).length &&
          labels.every((label) => current[label] === next[label])
        ) {
          return current;
        }
        return next;
      });
    };

    measureValues();
    window.addEventListener("resize", measureValues);

    return () => {
      window.removeEventListener("resize", measureValues);
    };
  }, [product?.slug]);

  if (!product) return null;

  // Resolve verified specification if available
  const spec = getProductSpecification(product) || {};

  // Resolve regular product images strictly from regular/buy product data
  let galleryImages = [];
  if (Array.isArray(product.image) && product.image.length > 0) {
    galleryImages = product.image.filter(Boolean);
  } else if (Array.isArray(product.images) && product.images.length > 0) {
    galleryImages = product.images.filter(Boolean);
  } else if (typeof product.img === "string" && product.img) {
    galleryImages = [product.img];
  } else if (typeof product.image === "string" && product.image) {
    galleryImages = [product.image];
  }

  if (galleryImages.length === 0) {
    galleryImages = ["/Image/product/buy/lemon-taste-seasoning.webp"];
  }

  const toggleAccordion = (key) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  const shortDescription =
    spec.description ||
    product.description ||
    getFallbackProductDescription(product, spec);

  // Product information cards tailored for regular retail/buy products
  const packageSize =
    (product.weight || product.weight_1
      ? [product.weight, product.weight_1].filter(Boolean).join(" / ")
      : null) ||
    (Array.isArray(product.quantity)
      ? product.quantity.join(", ")
      : product.quantity) || "-";

  const infoCards = [
    { label: "Product Name", value: displaySpecValue(spec.name) },
    { label: "Product Category", value: displaySpecValue(spec.category) },
    { label: "HSN Code", value: displaySpecValue(spec.hsnCode) },
    { label: "Shelf Life", value: displaySpecValue(spec.shelfLife) },
    { label: "Quality Grade", value: displaySpecValue(spec.qualityGrade) },
    { label: "Variety", value: displaySpecValue(spec.variety) },
    { label: "Availability", value: product.availability || "-" },
    { label: "SKUs", value: displaySpecValue(spec.skus) },
    { label: "Packaging Option", value: displaySpecValue(spec.packagingOption) },
    { label: "Package Size", value: packageSize },
    {
      label: "Price",
      value: product.price ? `\u20B9${product.price}` : "-",
    },
  ];

  // Build accordion items for regular products
  const formattedIngredients =
    Array.isArray(product.ingredient) && product.ingredient.length > 0
      ? product.ingredient
          .map((i) => (typeof i === "object" ? i.detail : i))
          .filter(Boolean)
          .join(" • ")
      : null;

  const formattedBenefits = displaySpecValue(spec.healthBenefits);

  const formattedStorage = displaySpecValue(spec.storageTips);

  const formattedUsage =
    Array.isArray(product.usage) && product.usage.length > 0
      ? product.usage
          .map((u) => (typeof u === "object" ? u.detail : u))
          .filter(Boolean)
          .join(" • ")
      : null;

  const accordionItems = [
    {
      key: "description",
      title: "Description",
      content: displaySpecValue(spec.description),
    },
    {
      key: "container-capacity",
      title: "Container Capacity",
      content: displaySpecValue(spec.containerCapacity),
    },
    {
      key: "cultivation-type",
      title: "Cultivation Type",
      content: displaySpecValue(spec.cultivationType),
    },
    {
      key: "packaging-solutions",
      title: "Packaging Solutions",
      content: displaySpecValue(spec.packagingSolutions),
    },
    {
      key: "ingredients",
      title: "Ingredients",
      content: formattedIngredients,
    },
    {
      key: "nutrition",
      title: "Nutrition Facts",
      content:
        Array.isArray(product.nutrition) && product.nutrition.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
            {product.nutrition.map((item, idx) => (
              <div
                key={idx}
                className="border-stroke bg-white border rounded-lg p-2 text-xs"
              >
                <span className="text-[12px] text-[#7C7C7E] block">{item.name}</span>
                <span className="font-semibold text-xs sm:text-sm text-[#0E0E0E]">{item.value}</span>
              </div>
            ))}
          </div>
        ) : null,
    },
    {
      key: "health-benefits",
      title: "Health Benefits",
      content: formattedBenefits,
    },
    {
      key: "storage-tips",
      title: "Storage Tips",
      content: formattedStorage,
    },
    {
      key: "usage",
      title: "Usage & Directions",
      content: formattedUsage,
    },
  ].filter((item) => Boolean(item.content));

  // Regular WhatsApp inquiry & direct order message
  const inquiryMessage = encodeURIComponent(
    `Hello ShahiKing! I am interested in purchasing ${product.name}.`
  );
  const whatsappUrl = `https://wa.me/917435917404?text=${inquiryMessage}`;

  return (
    <div className="overflow-hidden bg-[#F6F6F6] pt-4 sm:pt-5 lg:pt-6 pb-8 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
          <ol className="flex flex-wrap items-center text-xs sm:text-base gap-2">
            <li>
              <Link href="/" className="text-[#7C7C7E] hover:text-primary transition-colors font-normal">
                Home
              </Link>
            </li>
            <li className="text-[#7C7C7E] select-none" aria-hidden="true">
              /
            </li>
            <li>
              <Link
                href={categoryHref || "/product"}
                className="text-[#7C7C7E] hover:text-primary transition-colors font-normal"
              >
                {categoryName}
              </Link>
            </li>
            <li className="text-[#7C7C7E] select-none" aria-hidden="true">
              /
            </li>
            <li className="font-semibold text-[#0E0E0E] truncate max-w-xs sm:max-w-md">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Section Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col items-center lg:items-start w-full">
            {/* Main Preview Container */}
            <div className="relative w-full aspect-square max-w-135 rounded-2xl sm:rounded-3xl bg-white border border-stroke p-6 sm:p-8 flex items-center justify-center shadow-xs overflow-hidden">
              <Image
                src={galleryImages[activeImageIndex] || galleryImages[0]}
                alt={product.name}
                width={425}
                height={425}
                priority
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>

            {/* Thumbnails Row */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6 overflow-x-auto max-w-full pb-2">
                {galleryImages.slice(0, 4).map((imgSrc, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View image ${idx + 1}`}
                    className={`relative w-20 h-20 sm:w-25 sm:h-25 rounded-xl sm:rounded-2xl border p-2 bg-white cursor-pointer transition-all shrink-0 ${
                      activeImageIndex === idx
                        ? "border-primary"
                        : "border-stroke hover:border-primary/50"
                    }`}
                  >
                    <Image
                      src={imgSrc}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      width={90}
                      height={90}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Information & Details */}
          <div className="flex flex-col w-full">
            {/* Product Title */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold text-primary leading-tight">
              {product.name}
            </h1>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-[#7C7C7E] leading-relaxed mt-2 font-medium line-clamp-2">
              {shortDescription}
            </p>

            {/* Quality Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-[#7A4A1433] bg-[#F1F8F2] text-primary">
                <FaCheck className="w-3 h-3 text-primary shrink-0" />
                ISO 22000 & HACCP Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-[#7A4A1433] bg-[#F1F8F2] text-primary">
                <FaCheck className="w-3 h-3 text-primary shrink-0" />
                100% Pure & Laboratory Tested
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-[#7A4A1433] bg-[#F1F8F2] text-primary">
                <FaCheck className="w-3 h-3 text-primary shrink-0" />
                Premium Food Grade Quality
              </span>
            </div>

            {/* Product Information Cards Grid */}
            {infoCards.length > 0 && (
              <div className="mt-7">
                <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-primary mb-3">
                  Product Information
                </h2>

                <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {infoCards.map((card) => {
                    const isTruncated = truncatedInfoValues[card.label] === true;
                    const tooltipOpen =
                      isTruncated && activeInfoTooltip === card.label;
                    const tooltipId = `regular-info-${card.label
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`;

                    return (
                      <div
                        key={card.label}
                        className="relative flex h-full items-center gap-2.5 p-3 rounded-xl border border-stroke bg-white"
                      >
                        <LuFileText className="w-6 h-6 text-primary shrink-0" />
                        <div className={`min-w-0 flex-1 ${isTruncated ? "relative group" : ""}`}>
                          <span className="block text-[12px] text-[#7C7C7E]">
                            {card.label}
                          </span>
                          {isTruncated ? (
                            <button
                              type="button"
                              title={String(card.value)}
                              aria-label={`${card.label}: ${card.value}`}
                              aria-expanded={tooltipOpen}
                              aria-describedby={isTruncated ? tooltipId : undefined}
                              onClick={() =>
                                setActiveInfoTooltip((current) =>
                                  current === card.label ? null : card.label,
                                )
                              }
                              onBlur={() => setActiveInfoTooltip(null)}
                              onKeyDown={(event) => {
                                if (event.key === "Escape") {
                                  setActiveInfoTooltip(null);
                                }
                              }}
                              className="block w-full border-0 bg-transparent p-0 text-left cursor-pointer"
                            >
                              <span
                                ref={(element) => {
                                  if (element) infoValueRefs.current.set(card.label, element);
                                  else infoValueRefs.current.delete(card.label);
                                }}
                                className="block text-xs sm:text-sm font-medium text-[#0E0E0E] truncate"
                              >
                                {card.value}
                              </span>
                            </button>
                          ) : (
                            <span
                              ref={(element) => {
                                if (element) infoValueRefs.current.set(card.label, element);
                                else infoValueRefs.current.delete(card.label);
                              }}
                              className="block text-xs sm:text-sm font-medium text-[#0E0E0E] truncate"
                            >
                              {card.value}
                            </span>
                          )}
                          {isTruncated && (
                            <span
                              id={tooltipId}
                              role="tooltip"
                              className={`absolute left-0 top-full z-40 mt-1 w-max max-w-[min(18rem,80vw)] rounded-lg bg-[#0E0E0E] px-3 py-2 text-xs text-white shadow-lg whitespace-normal wrap-break-words ${
                                tooltipOpen
                                  ? "block"
                                  : "hidden group-focus-within:block"
                              }`}
                            >
                              {card.value}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
              <Link
                href={`mailto:sales@shahiking.in?subject=${encodeURIComponent(
                  `Product Inquiry: ${product.name}`
                )}&body=${encodeURIComponent(
                  `Hi ShahiKing,\n\nI would like to inquire about ${product.name}.\nQuantity:\nDelivery Location:`
                )}`}
                className="px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-[#E5E7EB] text-[#0E0E0E]  transition-colors cursor-pointer text-center"
              >
                Request Quote
              </Link>

              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-primary text-[#F6F6F6] hover:bg-[#654d0e] transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#F6F6F6]" />
                WhatsApp Now
              </Link>
            </div>

            {/* Accordions */}
            {accordionItems.length > 0 && (
              <div className="mt-8 border-t border-[#E5E5E5] divide-y divide-[#E5E5E5]">
                {accordionItems.map((item) => {
                  const isOpen = openAccordion === item.key;
                  return (
                    <div key={item.key} className="py-1">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(item.key)}
                        className="w-full py-3.5 flex items-center justify-between text-left cursor-pointer group transition-colors"
                      >
                        <span
                          className={`text-base sm:text-2xl font-semibold transition-colors ${
                            isOpen
                              ? "text-primary"
                            : "text-[#0E0E0E] group-hover:text-primary"
                          }`}
                        >
                          {item.title}
                        </span>
                        <IoIosArrowDown
                          className={`w-5 h-5 text-[#0E0E0E] transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-primary" : "rotate-0"
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="pb-4 text-xs sm:text-base text-[#0E0E0E] pr-2">
                          {item.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
