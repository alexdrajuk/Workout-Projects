const slidesWrapperLeft = document.querySelector('.slides__wrapper_left');
const slidesWrapperRight = document.querySelector('.slides__wrapper_right');
const slideUp = document.querySelector('.slider__btn_up');
const slideDown = document.querySelector('.slider__btn_down');
const slidesLeft = slidesWrapperRight.querySelectorAll('.slide');
const slidesRight = slidesWrapperLeft.querySelectorAll('.slide');

const initialTop = `-${(slidesRight.length - 1) * 100}%`;
let step = 0;

slidesWrapperRight.style.top = initialTop;

slideUp.addEventListener('click', function() {
    moveSlides('up');
});
slideDown.addEventListener('click', function() {
    moveSlides('down');
});

function moveSlides(direction) {
    if (direction === 'up') {
        if (step === slidesLeft.length - 1) {
            slidesWrapperLeft.style.top = 0;
            slidesWrapperRight.style.top = initialTop;
            step = 0;
            return;
        }
        step += 1;
        console.log(slidesWrapperLeft.style.top);
        slidesWrapperLeft.style.top = `${(parseInt(slidesWrapperLeft.style.top, 10) || 0) - 100}%`;
        slidesWrapperRight.style.top = `${(parseInt(slidesWrapperRight.style.top, 10) || 0) + 100}%`;
    }
    if (direction === 'down') {
        if (step === 0) {
            slidesWrapperLeft.style.top = initialTop;
            slidesWrapperRight.style.top = 0;
            step = slidesLeft.length - 1;
            return;
        }
        step -= 1;
        slidesWrapperLeft.style.top = `${(parseInt(slidesWrapperLeft.style.top, 10) || 0) + 100}%`;
        slidesWrapperRight.style.top = `${(parseInt(slidesWrapperRight.style.top, 10) || 0) - 100}%`;
    }
}
