import BlogContent from "@/components/blogDetail/BlogContent";
import BlogHero from "@/components/blogDetail/BlogHero";
import BlogFeaturedImage from "@/components/blogDetail/BlogFeaturedImage";
import BlogRelated from "@/components/blogDetail/BlogRelated";
import { blogDetailData, blogMetadata } from "@/data/ui/blog";
import React from "react";
import GetInTouch from "@/components/common/GetInTouch";
import BlogFaq from "@/components/blogDetail/BlogFaq";

export async function generateMetadata({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const currentSlug = resolvedParams?.id || resolvedParams?.slug;
  const blog =
    blogMetadata.find(
      (item) => item.slug === currentSlug || item.id === currentSlug
    ) || blogMetadata[0];

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    alternates: {
      canonical: `https://shahiking.in/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: `https://shahiking.in/blog/${blog.slug}`,
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.image],
    },
  };
}

export default async function page({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const currentSlug = resolvedParams?.id || resolvedParams?.slug;
  const blog =
    blogMetadata.find(
      (item) => item.slug === currentSlug || item.id === currentSlug
    ) || blogMetadata[0];

  if (!blog) {
    return <div>Blog Not Found</div>;
  }

  const currentItem =
    blogDetailData.find(
      (item) => item.slug === currentSlug || item.id === currentSlug
    ) || blogDetailData[0];

  const schema = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",
    headline: blog.metaTitle,
    description: blog.metaDescription,
    image: [blog.image],
    datePublished: blog.publishedAt,
    dateModified: blog.publishedAt,

    author: {
      "@type": "Organization",
      name: "Shahiking Team",
    },

    publisher: {
      "@type": "Organization",

      name: "Shahiking",
      logo: {
        "@type": "ImageObject",
        url: "https://shahiking.in/logo.webp",
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://shahiking.in/blog/${blog.slug}`,
    },
  };
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <BlogHero item={currentItem} />
      <BlogFeaturedImage item={currentItem} />
      <BlogContent />
      <BlogRelated />
      <BlogFaq />
    </div>
  );
}
