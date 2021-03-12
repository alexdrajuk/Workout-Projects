var progress = document.querySelector('.progress');
var progressSteps = document.querySelectorAll('.progress__step');
var progressLine = document.querySelector('.progress__line');
var btnPrev = document.querySelector('.progress__control_prev');
var btnNext = document.querySelector('.progress__control_next');

var percentsPerStep = (100 / (progressSteps.length - 1)).toFixed(2);
var currentStep = 1;


progress.addEventListener('click', function(e) {
    if (e.target === btnPrev) {
        if (currentStep <= 1) {
            currentStep = 1;
            return;
        }
        document.querySelector('[data-step="' + currentStep + '"]').classList.remove('progress__step_active');
        currentStep -= 1;
        btnNext.disabled = false;
        progressLine.style.width = (currentStep - 1) * percentsPerStep + '%';

        if (currentStep <= 1) {
            e.target.disabled = true;
        }

    }

    if (e.target === btnNext) {
        if (currentStep >= progressSteps.length) {
            currentStep = progressSteps.length;
            return;
        }
        currentStep += 1;
        btnPrev.disabled = false;
        document.querySelector('[data-step="' + currentStep + '"]').classList.add('progress__step_active');
        progressLine.style.width = (currentStep - 1) * percentsPerStep + '%';

        if (currentStep >= progressSteps.length) {
            e.target.disabled = true;
        }
    }
    
});
