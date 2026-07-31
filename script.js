import { typingHeader } from "./js/typewriter.js";
import { shiftSlide, startAutoRotate, stopAutoRotate } from "./js/carousel.js";

const carousel = document.querySelector(".carousel__track");
const prevBtn = document.querySelector(".carousel__btn--prev");
const nextBtn = document.querySelector(".carousel__btn--next");

// typewriter functionality
document.addEventListener("DOMContentLoaded", typingHeader);

// rotating carousel
prevBtn.addEventListener("click", () => {
  shiftSlide(-1);
});

nextBtn.addEventListener("click", () => {
  shiftSlide(+1);
});

carousel.addEventListener("mouseenter", stopAutoRotate);
carousel.addEventListener("mouseleave", startAutoRotate);

startAutoRotate();
