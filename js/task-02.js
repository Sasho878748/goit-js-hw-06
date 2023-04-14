const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const liEl = document.createElement("LI");
  liEl.textContent = ingredient;
  liEl.classList = "item";
  ulEl.appendChild(liEl);
}

document.body.prepend(ulEl);
