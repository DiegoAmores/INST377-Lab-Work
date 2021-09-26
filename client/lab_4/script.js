let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item')
const totalSlides = slides.length;

const nextButton = document.querySelector('#carousel_button_next');
const prevButton = document.querySelector('#carousel_button_prev');

nextButton.addEventListener("click", function(){

    nextButton.style.setProperty('background-color', 'orange');

    if(prevButton.style.backgroundColor === 'orange'){
        prevButton.style.removeProperty('background-color')
    }
   
    moveToNextSlide();
})

prevButton.addEventListener("click", function(){

    nextButton.style.removeProperty('background-color')
    prevButton.style.setProperty('background-color', 'orange');

    if(nextButton.style.backgroundColor === 'orange'){
        nextButton.style.removeProperty('background-color')
    }
    
    moveToPrevSlide();
})

function updateSlidePosition(){
    for(let slide of slides){
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item');

    }

    slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide(){

    if(slidePosition === totalSlides - 1)
        slidePosition = 0;

    else
        slidePosition++;
    
    updateSlidePosition();
}

function moveToPrevSlide(){

    if(slidePosition === 0)
        slidePosition = totalSlides - 1;

    else
        slidePosition--;

    updateSlidePosition();
}