const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".ul");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav:active");
  });
};

navSlide();
