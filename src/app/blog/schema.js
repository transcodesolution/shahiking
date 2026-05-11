export default function BlogSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://shahiking.in/blog#blog",
        url: "https://shahiking.in/blog",
        name:
          "Healthy Food Blog | Nutrition Tips & Clean Eating Guide",
        description:
          "Explore Shahiking’s healthy food blog for nutrition tips, vegan recipes, clean eating ideas & high-protein lifestyle guidance every day.",
        publisher: {
          "@type": "Organization",
          name: "Shahiking",
          url: "https://shahiking.in",
        },
        inLanguage: ["en-IN" ,"hi-IN"],
      },

      {
        "@type": "CollectionPage",
        "@id":
          "https://shahiking.in/blog#collectionpage",
        url: "https://shahiking.in/blog",
        name:
          "Healthy Food Blog | Nutrition Tips & Clean Eating Guide",
        description:
          "Explore Shahiking’s healthy food blog for nutrition tips, vegan recipes, clean eating ideas & high-protein lifestyle guidance every day.",
      },

      {
        "@type": "BreadcrumbList",
        "@id":
          "https://shahiking.in/blog#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://shahiking.in/",
          },

          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://shahiking.in/blog",
          },
        ],
      },

      {
        "@type": "FAQPage",
        "@id": "https://shahiking.in/blog#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is clean eating?",
            acceptedAnswer: {
             "@type": "Answer",
              text:
                "Clean eating focuses on nutritious whole foods with balanced nutrition.",
            },
          },
        ],
      },
    ],
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