const carousel = document.querySelector(".carousel__track");
const cards = Array.from(carousel.children);
const cardWidth = cards[0].getBoundingClientRect().width;

let currentIndex = 0;

function rotateCarouselToIndex(index) {
  if (index === -1) {
    currentIndex = cards.length - 1;
  } else if (index >= cards.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  const gap = 48;
  const amountToMove = (cardWidth + gap) * currentIndex;

  carousel.style.transform = `translateX(-${amountToMove}px)`;

  cards.forEach((card, i) => {
    card.classList.toggle("active", i === currentIndex);
  });
}

let autoRotateInterval = null;

export const startAutoRotate = () => {
  if (!autoRotateInterval) {
    autoRotateInterval = setInterval(() => {
      rotateCarouselToIndex(currentIndex + 1);
    }, 3000);
  }
};

export const stopAutoRotate = () => {
  clearInterval(autoRotateInterval);
  autoRotateInterval = null;
};

export const shiftSlide = (direction) => {
  stopAutoRotate();
  rotateCarouselToIndex(currentIndex + direction);
  startAutoRotate();
};
