document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("nav");

  menuButton.addEventListener("click", function () {
    this.classList.toggle("active");

    nav.classList.toggle("active");
  });

  // menuButton.addEventListener("transitionend", function (event) {
  //   // console.log(event.propertyName);
  //   console.log(event);
  // });
});
