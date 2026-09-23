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

// pack block transition
const blockObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("page-block--visible");
        // blockObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

const pageBlocks = document.querySelectorAll(".page-block");

pageBlocks.forEach((block) => {
  blockObserver.observe(block);
});
