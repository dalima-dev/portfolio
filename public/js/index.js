const english = document.querySelector("#english");

const h1 = document.querySelector("h1");

english.addEventListener("click", () => {
  h1.textContent = "change";
});
