const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("change", onInputChange);

function onInputChange(event) {
  inputEl.textContent = event.currentTarget.value;
  inputEl.classList.add("invalid");

  if (event.currentTarget.value.length === parseInt(inputEl.dataset.length)) {
    inputEl.classList.replace("invalid", "valid");
  }
}
