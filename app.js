// Select elements
const slides = document.querySelectorAll(".slide");

const nextButton = document.querySelector(".nextBtn");
const previousButton = document.querySelector(".prevBtn");

// Add event listeners
nextButton.addEventListener("click", navigateNext);
previousButton.addEventListener("click", navigatePrevious);

// Variables
let currentIndex = 0;
const offsetInterval = 100;

// Functions to navigate and set the slide selection
function navigateNext() {
  if (currentIndex >= slides.length - 1) return;

  currentIndex++;
  displaySlide(currentIndex);
}

function navigatePrevious() {
  if (currentIndex <= 0) return;

  currentIndex--;
  displaySlide(currentIndex);
}

function displaySlide(index) {
  for (let i = 0; i < slides.length; i++) {
    const current = slides[i];
    current.style.transform = `translateX(-${index * offsetInterval}%)`;
  }

  //   Decide if the previous/next button(s) should be visible
  const previousButtonVisibility = index <= 0 ? "none" : "flex";
  const nextButtonVisibility = index >= slides.length - 1 ? "none" : "flex";

  previousButton.style.display = previousButtonVisibility;
  nextButton.style.display = nextButtonVisibility;
}

// Display the first slide by default
displaySlide(currentIndex);
