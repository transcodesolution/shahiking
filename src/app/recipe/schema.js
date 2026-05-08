export default function RecipeSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "CollectionPage",

        "@id": "https://shahiking.in/recipe#collectionpage",

        url: "https://shahiking.in/recipe",

        name: "Healthy High Protein Recipes | Vegan & Snack Recipes",

        description:
          "Explore healthy high-protein recipes by Shahiking with vegan meals, makhana snacks and nutritious dishes for balanced everyday eating.",

        inLanguage: "en",
      },

      {
        "@type": "Recipe",

        "@id":
          "https://shahiking.in/recipe/high-protein-makhana-pizza-wreath#recipe",

        name: "High-Protein Makhana Pizza Wreath",

        image: ["https://shahiking.in/recipe/makhana-pizza-wreath.jpg"],

        description:
          "A delicious high-protein plant-based pizza wreath made using Shahiking flavored makhana and nutritious ingredients.",

        recipeCuisine: "Indian",

        recipeCategory: "Healthy Recipe",

        keywords:
          "high protein recipe, makhana recipe, vegan recipe, healthy pizza recipe",

        prepTime: "PT20M",

        cookTime: "PT25M",

        totalTime: "PT45M",

        recipeYield: "4 servings",

        nutrition: {
          "@type": "NutritionInformation",

          calories: "320 kcal",

          proteinContent: "14 g",

          carbohydrateContent: "38 g",

          fatContent: "10 g",

          fiberContent: "6 g",
        },
      },

      {
        "@type": "FAQPage",

        "@id": "https://shahiking.in/recipe#faq",

        mainEntity: [
          {
            "@type": "Question",

            name: "Are Shahiking recipes healthy?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "Yes, Shahiking recipes focus on balanced nutrition, healthy ingredients and protein-rich meals for everyday healthy eating.",
            },
          },

          {
            "@type": "Question",

            name: "Do Shahiking recipes support high-protein diets?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "Yes, many Shahiking recipes include high-protein ingredients like makhana and tofu suitable for fitness and healthy lifestyles.",
            },
          },

          {
            "@type": "Question",

            name: "Are Shahiking recipes vegetarian or vegan?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "Yes, Shahiking offers vegetarian and vegan recipe ideas using healthy plant-based ingredients.",
            },
          },

          {
            "@type": "Question",

            name: "Can I use Shahiking products in daily meals?",

            acceptedAnswer: {
              "@type": "Answer",

              text: "Yes, Shahiking products like makhana and tofu can be used in healthy everyday recipes and snacks.",
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
