const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const expectedLength = Number(input.dataset.length);

  const actualLength = input.value.length;

  if (expectedLength === actualLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
);
