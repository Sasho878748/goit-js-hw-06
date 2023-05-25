const button = document.querySelector(".change-color");

const colorSpan = document.querySelector(".color");


function changeColor() {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;

  colorSpan.textContent = newColor;
}

button.addEventListener("click", changeColor);

/**
 * 
 * @returns Random Color
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
