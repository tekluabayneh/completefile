let tags = document.querySelectorAll("[data-tab-target]");
let tabcontent = document.querySelectorAll("[data-tab-content]");

console.log(tags);

tags.forEach((tab) => {
  tab.addEventListener("click", function () {
    const target = document.querySelector("[tab.dataset.tabTarget]");
    target.classList.add("active");
  });
});

tags.forEach((tab) => {
  tab.addEventListener("click", function () {
    const targetSelector = tab.dataset.tabTarget;
    tabcontent.forEach((tabcontent) => {
      tabcontent.classList.remove("active");
    });
    const target = document.querySelector(targetSelector);

    if (target) {
      target.classList.add("active");
    }
  });
});
