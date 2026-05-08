
export default function BlogSchema({
  blog,
}) {

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

        url:
          "https://shahiking.in/logo.webp",
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id":
        `https://shahiking.in/blog/${blog.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}