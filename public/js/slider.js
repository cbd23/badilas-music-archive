const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderBack = document.querySelector('.slider-back');
const sliderForward = document.querySelector('.slider-forward');
const sliderCards = document.querySelectorAll('.slider-card');

let cardIndex = 0;
let numCards = sliderCards.length / 2;

function showCard(index) {
  sliderWrapper.style.transform = `translateX(-${index * 320}px)`;
  cardIndex = index;
}

function slideBack() {
  if (cardIndex === 0) {
    showCard(numCards);
  } else {
    showCard(cardIndex - 1);
  }
}

function slideForward() {
  if (cardIndex === numCards - 1) {
    showCard(0);
  } else {
    showCard(cardIndex + 1);
  }
}

sliderBack.addEventListener('click', slideBack);
sliderForward.addEventListener('click', slideForward);

// start auto slide every 3 seconds
let slideInterval = setInterval(slideForward, 3000);

// pause auto slide when mouse is over the slider
sliderWrapper.addEventListener('mouseover', () => {
  clearInterval(slideInterval);
});

// resume auto slide when mouse leaves the slider
sliderWrapper.addEventListener('mouseout', () => {
  slideInterval = setInterval(slideForward, 3000);
});