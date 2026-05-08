const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://shahiking.in/#organization",
      name: "Shahiking",
      url: "https://shahiking.in/",
      logo: "https://shahiking.in/Image/logo.webp",
    },

    {
      "@type": "AboutPage",
      "@id": "https://shahiking.in/aboutus#aboutpage",

      url: "https://shahiking.in/aboutus",

      name: "About Shahiking",

      description:
        "Learn about Shahiking, a trusted healthy food brand offering premium snacks, vegan foods and protein-rich nutrition for modern lifestyles.",

      inLanguage: "en",
      isPartOf: {
        "@id": "https://shahiking.in/#website",
      }, 
    },

    {
      "@type": "FAQPage",
      "@id": "https://shahiking.in/aboutus#faq",

      mainEntity: [
        {
          "@type": "Question",
          name: "What is Shahiking?",
          acceptedAnswer: {
            "@type": "Answer",

            text: "Shahiking is a premium healthy food brand.",
          },
        },
      ],
    },
  ],
};

export default function AboutSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}