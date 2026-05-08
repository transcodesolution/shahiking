export default function RecipeSchema({
  recipe,
}) {

  const schema = {
    "@context": "https://schema.org",

    "@type": "Recipe",

    name: recipe.name,

    image: [recipe.image],

    description: recipe.description,

    prepTime: recipe.prepTime,

    cookTime: recipe.cookTime,

    totalTime: recipe.totalTime,

    recipeYield: recipe.recipeYield,

    nutrition: {
      "@type": "NutritionInformation",

      calories: recipe.calories,

      proteinContent: recipe.protein,
    },

    recipeIngredient: recipe.ingredients,

    recipeInstructions:
      recipe.instructions.map((step) => ({
        "@type": "HowToStep",

        text: step,
      })),
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