
let currentSlide = 0;
const slides = document.querySelectorAll('.carouselImages a');
const totalSlides = slides.length / 1;

function showSlide(index) {
  
    const marginLeft = index * -400;
    document.querySelector('.carouselImages').style.marginLeft = marginLeft + 'px';
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = 0;
        
    } else if (currentSlide +2 >= totalSlides) {
        currentSlide = totalSlides - 6;
    }
    showSlide(currentSlide);
}

showSlide(currentSlide);
