const countCategoriesAndItems = () => {
  const categoriesItemsRef = document.querySelectorAll(".item");
  const categoriesRef = categoriesItemsRef.length;
  const categoryNameRef = null;
  const elementsRef = null;

  console.log(`Number of categories: ${categoriesRef}`);

  categoriesItemsRef.forEach((item) => {
    categoryNameRef = item.querySelector("h2");
    elementsRef = item.querySelectorAll("li");

    console.log(`Category: ${categoryNameRef.textContent}`);
    console.log(`Elements: ${elementsRef.length}`);
  });
};

countCategoriesAndItems();
