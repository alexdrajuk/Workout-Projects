var loadingCounter = document.querySelector('.loading-counter');
var bg = document.querySelector('.bg');
var counterStart = 0;
var counterEnd = 100;
var filterInitial = 50;
var filterTik = filterInitial / counterEnd;
 

var interval = setInterval(function() {
    counterStart += 1;
    filterInitial -= filterTik;
    if (counterStart === counterEnd) {
        clearInterval(interval);
    }
    loadingCounter.textContent = `${counterStart}%`;
    bg.style.filter = `blur(${filterInitial}px)`;
    loadingCounter.style.opacity = 1 - (0.01 * counterStart);
}, 25);

