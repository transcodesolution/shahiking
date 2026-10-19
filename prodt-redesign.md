# Task: Refactor Product Management into a Simple, Clean, and Separate Structure

Please refactor my existing project to make product management simple, clean, maintainable, and easy to understand.

## 1. Separate Buy and Export Products Completely

I want to manage these two sections independently:

- `/product` — Buy products for customers.
- `/export/product` — Export products for business buyers.

Keep their product data, image mappings, category data, and dropdown data separate wherever appropriate.

## 2. Create a Clean Folder Structure

First, inspect the existing project structure and follow its current framework and coding conventions. Then organize the code into a structure similar to this, adapting it to the actual project:

```text
src/
  data/
    buy/
      products.js
      categories.js
    export/
      products.js
      categories.js

  components/
    products/
      BuyProductCard.jsx
      ExportProductCard.jsx

public/
  Image/
    product/
      buy/
        ...buy product images...
      export/
        ...export product images...
```

Use existing components where possible. Do not create unnecessary files or duplicate components.

## 3. Keep Product Data Simple

Each product should have one clear source of truth.

Example Buy product:

```js
{
  id: 1,
  name: "Lemon Taste",
  slug: "lemon-taste",
  category: "Seasoning",
  price: 300,
  image: "/Image/product/buy/lemon-taste-seasoning.webp"
}
```

Example Export product:

```js
{
  id: 1,
  name: "Premium Raw Makhana",
  slug: "premium-raw-makhana",
  category: "Nuts & Snacks",
  image: "/Image/product/export/premium-raw-makhana.webp"
}
```

These are examples only. Preserve the actual product information, existing fields, prices, descriptions, and functionality.

## 4. Remove Complicated Image Mapping

Currently, there is a large `exportProductImages` object that manually maps product slugs to image paths. This is difficult to maintain and contains incorrect image mappings.

Refactor this so that each product has its correct image path directly in its own data entry.

For example:

```js
{
  name: "Pudina Burst",
  slug: "pudina-burst",
  image: "/Image/product/buy/pudina-burst-seasoning.webp"
}
```

Requirements:
- Do not maintain multiple conflicting image mappings for the same product.
- Do not guess image paths or assign unrelated images.
- Verify that image files actually exist.
- Match images to products using filenames and existing project references.
- If an image cannot be confidently matched, report it instead of silently assigning another image.
- Use a fallback image only when necessary and handle missing images gracefully.

## 5. Keep Categories and Dropdowns Separate

Create simple, independent data for Buy and Export categories and dropdowns.

For example:
- Buy categories and Buy dropdown products should come from Buy data.
- Export categories and Export dropdown products should come from Export data.

Avoid maintaining the same product details in multiple arrays if they can be derived safely from one source.

## 6. Preserve All Existing Functionality

Before changing anything, inspect:
- `/product`
- `/export/product`
- Product detail pages
- Product cards
- Navbar dropdowns
- Category filters
- Product slugs and routing
- Any imports or components that depend on the existing data

Make sure the refactor does not break:
- Existing URLs and navigation
- Product details
- Product filtering
- Images
- Prices, ratings, quantities, and descriptions
- Buy and Export page layouts
- Any existing business logic

Keep the existing UI design unchanged unless a code change is necessary for functionality.

## 7. Clean Up the Code

- Remove obsolete mappings, duplicate data, and unused imports only after verifying they are unnecessary.
- Use consistent naming, such as `image` or `img`, throughout the relevant data model where practical.
- Use readable variable names and small, understandable functions.
- Avoid overengineering, unnecessary abstractions, and complicated dynamic logic.
- Do not rewrite unrelated parts of the application.
- Do not introduce a new library unless genuinely necessary.

## 8. Protect Existing Images and Data

This is very important:

- Do not delete any product images.
- Do not move or rename images unless absolutely necessary.
- Do not remove images just because they appear duplicated.
- Never overwrite existing product data with guessed values.
- Keep all existing valid images and functionality intact.
- Only remove unused code after confirming that it is safe to remove.

## 9. Verify Everything After Refactoring

After making the changes:

1. Verify all product image paths against actual files.
2. Check for duplicate or conflicting product definitions.
3. Run the available lint, build, and test commands.
4. Fix any errors introduced by the refactor.
5. Check both Buy and Export product pages and their dropdowns.
6. Report any pre-existing issues or image mismatches that could not be resolved confidently.

## 10. Final Report

When finished, explain in simple language:

- Which files were created, updated, or removed.
- How Buy and Export product management are now separated.
- Where I should add a new Buy product.
- Where I should add a new Export product.
- Where I should place each product image.
- Any remaining image mismatches or issues.
- Which verification commands passed or failed.

First inspect the existing code and dependencies, then implement the refactor carefully. Do not stop after providing a plan. Complete the changes and verify them while preserving the existing website functionality.