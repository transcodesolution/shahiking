export default function ContactSchema() {

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "ContactPage",

        name:
          "Contact Shahiking",

        url:
          "https://shahiking.in/contact",
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