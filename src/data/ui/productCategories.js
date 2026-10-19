const normalizeCategory = (category) => {
  const normalized = category?.trim().toLowerCase();
  if (normalized === "pure powder spices" || normalized === "powder spices") {
    return "powder spice";
  }
  if (
    normalized === "makhana (foxnuts)" ||
    normalized === "fox nuts" ||
    normalized === "foxnuts" ||
    normalized === "nuts"
  ) {
    return "fox nuts (makhana)";
  }
  return normalized;
};

export function matchesProductCategory(product, selectedCategories) {
  if (!selectedCategories.length || selectedCategories.includes("All Products")) {
    return true;
  }

  const categories = Array.isArray(product.category)
    ? product.category
    : [product.category];
  return selectedCategories.some((selected) =>
    categories.some(
      (category) => normalizeCategory(category) === normalizeCategory(selected),
    ),
  );
}

export function toggleProductCategory(current, category) {
  if (category === "All Products") return [];
  const withoutAll = current.filter((value) => value !== "All Products");
  return withoutAll.includes(category)
    ? withoutAll.filter((value) => value !== category)
    : [...withoutAll, category];
}
