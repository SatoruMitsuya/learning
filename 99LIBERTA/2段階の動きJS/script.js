document.addEventListener("DOMContentLoaded", function () {
  const burgerWrapper = document.getElementById("burger-wrapper");
  const menuButton = document.getElementById("hamburger");
  // const nav = document.getElementById("nav");

  burgerWrapper.addEventListener("click", function () {
    menuButton.classList.toggle("active");
    console.log(burgerWrapper);
    // nav.classList.toggle("active");
  });
});
