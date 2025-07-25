function countCategories(categories) {
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const sortedCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])         
    .map(entry => entry[0]);             

  return {
    counts: categoryCount,
    sorted: sortedCategories
  };
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const result = countCategories(input);
console.log("Counts:", result.counts);
console.log("Sorted Categories:", result.sorted);
