import BlogContent from "@/components/blogDetail/BlogContent";
import BlogHero from "@/components/blogDetail/BlogHero";
import BlogSection from "@/components/blogDetail/BlogSection";
import { blogContentData, blogDetailData, blogMetadata } from "@/data/ui/blog";
import React from "react";
import GetInTouch from "@/components/common/GetInTouch";
import BlogFaq from "@/components/blogDetail/BlogFaq";

export async function generateMetadata({ params }) {
  const blog = blogMetadata.find((item) => item.id === params.id);

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

export default function page({ params }) {
  const blog = blogMetadata.find((item) => item.id === params.id);

  if (!blog) {
    return <div>Blog Not Found</div>;
  }

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
      <BlogHero />
      <BlogSection item={blogDetailData[0]} />
      <BlogContent item={blogContentData} />
      <BlogFaq />
      <GetInTouch />
    </div>
  );
}
