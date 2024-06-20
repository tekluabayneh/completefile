const openmodelbuttons = document.querySelectorAll("[data-model-target]");
const closemodelbutton = document.querySelectorAll("[data-model-close]");
const overlay = document.getElementById("overlay");

openmodelbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    const model = document.querySelector(".model");

    openModel(model);
    console.log("click");
  });
  console.log("cli");
});


overlay.addEventListener("click", () => {
  const models = document.querySelectorAll(".model.active");
  models.forEach((model) => {
    closeModel(model);
  });
});

closemodelbutton.forEach((button) => {
  button.addEventListener("click", () => {
    const model = document.querySelector(".model.active");
    closeModel(model);
  });
});

function openModel(model) {
  if (model == null) return;
  model.classList.add("active");
  overlay.classList.add("active");
}
function closeModel(model) {
  if (model == null) return;
  model.classList.remove("active");
  overlay.classList.remove("active");
}
