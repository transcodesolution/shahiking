
"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaCheck } from "react-icons/fa6";
import { LuFileText } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

import { WhatsAppIcon } from "@/components/common/WhatsAppFloat";
import { getProductSpecification } from "@/data/productSpecifications";

const FALLBACK_IMAGE = "/Image/product/export/product-export-hero.webp";
const WHATSAPP_NUMBER = "917435917404";
const EXPORT_EMAIL = "export@shahiking.in";

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
  if (/spice|masala|chilli|chili|turmeric|pepper|cumin|coriander/.test(productText)) {
    return `${name} brings a distinctive spice flavour to curries, sauces, and everyday cooking.`;
  }
  return `${name} is a versatile ingredient for adding its distinctive character to everyday cooking.`;
};

const getGalleryImages = (product) => {
  if (typeof product.img === "string" && product.img.trim()) {
    return [product.img];
  }

  const sourceImages = Array.isArray(product.images)
    ? product.images
    : Array.isArray(product.image)
      ? product.image
      : typeof product.image === "string"
        ? [product.image]
        : [];

  const validImages = sourceImages.filter(
    (image) => typeof image === "string" && image.trim(),
  );

  return validImages.length > 0 ? validImages : [FALLBACK_IMAGE];
};

const getInfoCards = (spec) => [
    { label: "Product Name", value: displaySpecValue(spec.name) },
    { label: "Product Category", value: displaySpecValue(spec.category) },
    { label: "HSN Code", value: displaySpecValue(spec.hsnCode) },
    { label: "Shelf Life", value: displaySpecValue(spec.shelfLife) },
    { label: "Quality Grade", value: displaySpecValue(spec.qualityGrade) },
    { label: "Variety", value: displaySpecValue(spec.variety) },
    { label: "SKUs", value: displaySpecValue(spec.skus) },
    { label: "Packaging Option", value: displaySpecValue(spec.packagingOption) },
  ];

const getAccordionItems = (spec) =>
  [
    {
      key: "description",
      title: "Description",
      content: displaySpecValue(spec.description),
    },
    {
      key: "container-capacity",
      title: "Container capacity",
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
      key: "health-benefits",
      title: "Health Benefits",
      content: displaySpecValue(spec.healthBenefits),
    },
    {
      key: "storage-tips",
      title: "Storage Tips",
      content: displaySpecValue(spec.storageTips),
    },
  ];

const getProductInfoCard = (
  card,
  isTruncated,
  activeTooltip,
  infoValueRefs,
  setActiveTooltip,
) => {
  const tooltipOpen = isTruncated && activeTooltip === card.label;
  const tooltipId = `export-info-${card.label
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
              setActiveTooltip((current) =>
                current === card.label ? null : card.label,
              )
            }
            onBlur={() => setActiveTooltip(null)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setActiveTooltip(null);
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
            className={`absolute left-0 top-full z-40 mt-1 w-max max-w-[min(18rem,80vw)] rounded-lg bg-[#0E0E0E] px-3 py-2 text-xs text-white shadow-lg whitespace-normal break-words ${
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
};

export default function ExportProductHero({
  product,
  categoryName = "Export Products",
  categoryHref = "/export/products",
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

  const accordionId = useId();

  if (!product) return null;

  const spec = getProductSpecification(product) || {};
  const galleryImages = getGalleryImages(product);

  const activeImage =
    galleryImages[activeImageIndex] || galleryImages[0];

  const shortDescription =
    spec.description ||
    product.description ||
    getFallbackProductDescription(product, spec);

  const infoCards = getInfoCards(spec);
  const accordionItems = getAccordionItems(spec);

  const toggleAccordion = (key) => {
    setOpenAccordion((previous) => (previous === key ? null : key));
  };

  const emailSubject = encodeURIComponent(
    `Quote Request: ${product.name}`,
  );

  const emailBody = encodeURIComponent(
    `Hi ShahiKing,\n\nI would like to request an export quotation for ${product.name}.\nQuantity:\nPackaging:\nDestination:`,
  );

  const emailInquiryUrl = `mailto:${EXPORT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappMessage = encodeURIComponent(
    `Hello ShahiKing! I am interested in an export inquiry for ${product.name}.`,
  );

  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="overflow-hidden bg-[#F6F6F6] pt-4 sm:pt-5 lg:pt-6 pb-8 sm:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
          <ol className="flex flex-wrap items-center text-xs sm:text-base gap-2">
            <li>
              <Link
                href="/"
                className="text-[#7C7C7E] hover:text-primary transition-colors font-normal"
              >
                Home
              </Link>
            </li>

            <li
              className="text-[#7C7C7E] select-none"
              aria-hidden="true"
            >
              /
            </li>

            <li>
              <Link
                href={categoryHref}
                className="text-[#7C7C7E] hover:text-primary transition-colors font-normal"
              >
                {categoryName}
              </Link>
            </li>

            <li
              className="text-[#7C7C7E] select-none"
              aria-hidden="true"
            >
              /
            </li>

            <li
              className="font-semibold text-[#0E0E0E] truncate max-w-xs sm:max-w-md"
              aria-current="page"
            >
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Main Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* Product Image Gallery */}
          <div className="flex flex-col items-center lg:items-start w-full">

            {/* Main Image */}
            <div className="relative w-full aspect-square max-w-135 rounded-2xl sm:rounded-3xl bg-white border border-stroke p-6 sm:p-8 flex items-center justify-center shadow-xs overflow-hidden">
              <Image
                src={activeImage}
                alt={product.name}
                width={425}
                height={425}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-[85%] h-[85%] object-contain rounded-2xl"
              />
            </div>

            {/* Image Thumbnails */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6 overflow-x-auto max-w-full pb-2">
                {galleryImages.slice(0, 4).map((image, index) => {
                  const isActive = activeImageIndex === index;

                  return (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`View image ${index + 1}`}
                      aria-pressed={isActive}
                      className={`relative w-20 h-20 sm:w-25 sm:h-25 rounded-xl sm:rounded-2xl border p-2 bg-white cursor-pointer transition-all shrink-0 ${isActive
                          ? "border-primary"
                          : "border-stroke hover:border-primary/50"
                        }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        width={90}
                        height={90}
                        sizes="100px"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Product Information */}
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
              {[
                "ISO 22000 & HACCP Certified",
                "100% Pure & Laboratory Tested",
                "Global Bulk Export Grade",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-[#7A4A1433] bg-[#F1F8F2] text-primary"
                >
                  <FaCheck className="w-3 h-3 text-primary shrink-0" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Product Information Cards */}
            {infoCards.length > 0 && (
              <div className="mt-7">
                <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-primary mb-3">
                  Product Information
                </h2>

                <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                  {infoCards.map((card) =>
                    getProductInfoCard(
                      card,
                      truncatedInfoValues[card.label] === true,
                      activeInfoTooltip,
                      infoValueRefs,
                      setActiveInfoTooltip,
                    ),
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
              <Link
                href={emailInquiryUrl}
                className="px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-[#E5E7EB] text-[#0E0E0E] transition-colors cursor-pointer text-center"
              >
                Request Quote
              </Link>

              <Link
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-primary text-[#F6F6F6] hover:bg-[#654d0e] transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#F6F6F6]" />
                WhatsApp Now
              </Link>
            </div>

            {/* Export Product Accordions */}
            {accordionItems.length > 0 && (
              <div className="mt-8 border-t border-[#E5E5E5] divide-y divide-[#E5E5E5]">
                {accordionItems.map((item) => {
                  const isOpen = openAccordion === item.key;
                  const panelId = `${accordionId}-${item.key}`;

                  return (
                    <div key={item.key} className="py-1">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(item.key)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="w-full py-3.5 flex items-center justify-between text-left cursor-pointer group transition-colors"
                      >
                        <span
                          className={`text-base sm:text-2xl font-semibold transition-colors ${isOpen
                              ? "text-primary"
                              : "text-[#0E0E0E] group-hover:text-primary"
                            }`}
                        >
                          {item.title}
                        </span>

                        <IoIosArrowDown
                          aria-hidden="true"
                          className={`w-5 h-5 text-[#0E0E0E] transition-transform duration-200 ${isOpen
                              ? "rotate-180 text-primary"
                              : "rotate-0"
                            }`}
                        />
                      </button>

                      <div
                        id={panelId}
                        hidden={!isOpen}
                        className="pb-4 text-xs sm:text-base text-[#0E0E0E] pr-2"
                      >
                        {item.content}
                      </div>
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
