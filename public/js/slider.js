// Get the slider wrapper and all the slider cards
const sliderWrapper = document.querySelector('.slider-wrapper')

// Duplicate the content inside the slider wrapper for a seamless scroll
sliderWrapper.innerHTML += sliderWrapper.innerHTML

// CSS-only animation speed: adjust this value for faster or slower scroll
const animationSpeed = 20

// Apply the CSS animation directly to the slider wrapper
sliderWrapper.style.animation = `scrollAnimation ${animationSpeed}s linear infinite`

// Pause the animation when hovering over the slider
sliderWrapper.addEventListener('mouseover', () => {
  sliderWrapper.style.animationPlayState = 'paused'
})

// Resume the animation when the mouse leaves the slider
sliderWrapper.addEventListener('mouseout', () => {
  sliderWrapper.style.animationPlayState = 'running'
})
