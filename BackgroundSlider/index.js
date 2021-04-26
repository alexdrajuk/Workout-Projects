const slider = document.querySelector('.slider');

slider.addEventListener('click', (e) => {
    if (e.target.classList.contains('slider__control_right')) {
        showNextSlide();
    }
    if (e.target.classList.contains('slider__control_left')) {
        showPrevSlide();
    }
}); 

const findActiveSlideIndex = () => {
    const slides = slider.querySelectorAll('.slide');
    let activeIndex;
    slides.forEach((slide, idx) => {
        if (slide.classList.contains('slide_active')) {
            activeIndex = idx;
        }
    });
    return activeIndex;
};

const showNextSlide = () => {
    const slides = slider.querySelectorAll('.slide');
    const activeSlideIndex = findActiveSlideIndex();
    const nextSlide = (activeSlideIndex + 1 === slides.length) ? 0 : activeSlideIndex + 1;
    slides[activeSlideIndex].classList.remove('slide_active');
    slides[nextSlide].classList.add('slide_active');
    slider.style.backgroundImage = slides[nextSlide].style.backgroundImage;
    
}

const showPrevSlide = () => {
    const slides = slider.querySelectorAll('.slide');
    const activeSlideIndex = findActiveSlideIndex();
    const prevSlide = (activeSlideIndex === 0) ? slides.length - 1 : activeSlideIndex - 1;
    slides[activeSlideIndex].classList.remove('slide_active');
    slides[prevSlide].classList.add('slide_active');
    slider.style.backgroundImage = slides[prevSlide].style.backgroundImage;
}



