(() => {
  const btnBurger = document.querySelector(".menu__buger");
  const header = document.querySelector(".header");
  const link = document.querySelectorAll(".menu__link a");

  btnBurger.addEventListener("click", () => {
    if (header.classList.contains("open")) {
      header.classList.remove("open");
    } else {
      header.classList.add("open");
    }
  });

  link.forEach((item) => {
    item.addEventListener("click", () => {
      header.classList.remove("open");
    });
  });
})();
