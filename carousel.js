
let currentSlide = 0;
const slides = document.querySelectorAll('.carouselImages a');
const totalSlides = slides.length / 1; // Since we show 3 images at a time

function showSlide(index) {
    // Calculate the margin-left for the carousel
    const marginLeft = index * -400; // 400px width * 3 images
    document.querySelector('.carouselImages').style.marginLeft = `${marginLeft}px`;
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = 0; // Prevent going before the first item
        
    } else if (currentSlide +2 >= totalSlides) {
        currentSlide = totalSlides - 6; // Prevent going past the last item
    }
    showSlide(currentSlide);
}

// Initialize the carousel with the first group of images displayed
showSlide(currentSlide);
