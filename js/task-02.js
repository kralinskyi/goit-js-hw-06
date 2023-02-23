const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingredientElements = ingredients.map((ingredient) => {
  const newIngredientRef = document.createElement("li");
  newIngredientRef.textContent = ingredient;
  newIngredientRef.classList.add("item");
  return newIngredientRef;
});

ingredientsListRef.append(...ingredientElements);
