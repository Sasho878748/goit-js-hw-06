const text = document.querySelector("#text");

const input = document.querySelector("#font-size-control");

input.addEventListener("input", (event) => {
  const value = event.target.value;
  text.style.fontSize = `${value}px`;
});
