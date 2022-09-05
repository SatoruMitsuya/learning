const modalWrapper = document.querySelector(".modal-wrapper");
const images = document.querySelectorAll(".images");
const modalImage = document.querySelector(".modal-image");
const bodyScrollAllowed = document.querySelector("body");

images.forEach(function (image) {
  image.addEventListener("click", function () {
    modalWrapper.classList.add("show");
    modalImage.classList.add("show");

    var imageSrc = image.getAttribute("data-src");
    modalImage.src = imageSrc;

    bodyScrollAllowed.classList.add("IsScrollAllowed");
  });
});

modalWrapper.addEventListener("click", function () {
  if (this.classList.contains("show")) {
    this.classList.remove("show");
    modalImage.classList.remove("show");

    bodyScrollAllowed.classList.remove("IsScrollAllowed");
  }
});
