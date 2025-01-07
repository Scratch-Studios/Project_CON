let currentIndex = 0; // Track the current slide index
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesPerMove = 3; // Move 3 slides at a time

// Function to move the slider to the left (3 slides at a time)
function moveLeft() {
  if (currentIndex > 0) {
    currentIndex -= slidesPerMove;
    if (currentIndex < 0) currentIndex = 0; // Prevent going below 0
    updateSliderPosition();
    updatePagination();
  }
}

// Function to move the slider to the right (3 slides at a time)
function moveRight() {
  if (currentIndex < totalSlides - slidesPerMove) { // Prevent moving past the last slide
    currentIndex += slidesPerMove;
    updateSliderPosition();
    updatePagination();
  }
}

// Function to update the slider position and hide/show slides
function updateSliderPosition() {
  // Display only the current set of 3 slides
  slides.forEach((slide, index) => {
    if (index >= currentIndex && index < currentIndex + slidesPerMove) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

// Function to update the pagination dots
function updatePagination() {
  const dots = document.querySelectorAll('.pagination-dot');
  dots.forEach((dot, index) => {
    if (index === Math.floor(currentIndex / slidesPerMove)) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Function to create pagination dots
function createPagination() {
  const paginationContainer = document.getElementById('pagination');
  const numDots = Math.ceil(totalSlides / slidesPerMove); // One dot for each set of 3 slides
  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('pagination-dot');
    dot.addEventListener('click', () => {
      currentIndex = i * slidesPerMove; // Jump to the corresponding set of slides
      updateSliderPosition();
      updatePagination();
    });
    paginationContainer.appendChild(dot);
  }
  updatePagination(); // Set the initial active dot
}

// Event listeners for the arrow buttons
document.querySelector('.prev-btn').addEventListener('click', moveLeft);
document.querySelector('.next-btn').addEventListener('click', moveRight);

// Initialize the slider position and pagination
createPagination();
updateSliderPosition();
