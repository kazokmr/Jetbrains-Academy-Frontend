document.querySelectorAll(".open-window").forEach(function (element, index) {
  element.addEventListener("click", () => {
    document.querySelectorAll(".window")[index].style.display = "block";
  })
});

document.querySelectorAll(".close-window").forEach((element, index) => {
  element.addEventListener("click", () => {
    document.querySelectorAll(".window")[index].style.display = "none";
  })
});

const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav ul");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active")
  });
}

navSlide();