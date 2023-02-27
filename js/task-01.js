const countCategoriesAndItems = () => {
  const categoriesItemsRef = document.querySelectorAll(".item");
  const categoriesRef = categoriesItemsRef.length;

  console.log(`Number of categories: ${categoriesRef}`);

  categoriesItemsRef.forEach((item) => {
    const categoryNameRef = item.querySelector("h2");
    const elementsRef = item.querySelectorAll("li");

    console.log(`Category: ${categoryNameRef.textContent}`);
    console.log(`Elements: ${elementsRef.length}`);
  });
};

countCategoriesAndItems();
