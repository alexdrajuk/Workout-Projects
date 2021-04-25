document.addEventListener('DOMContentLoaded', (e) => {
    const glass = document.querySelector('.main-cup');
    const size = parseInt(glass.dataset.size, 10);
    glass.querySelector('.main-cup__top-rest').textContent = `${size / 1000}L`;
});

var cupsList = document.querySelector('.cups__list');
const fillCup = (water) => {
    const glass = document.querySelector('.main-cup');
    const glassSize = parseInt(glass.dataset.size, 10);
    if (water >= glassSize) {
        glass.querySelector('.main-cup__top').style.height = '0%';
        glass.querySelector('.main-cup__bottom').style.height = '100%';
        glass.querySelector('.main-cup__bottom-filled').textContent = '100%';
        return;
    }

    const bottomHeightPercents = 100 / glassSize * water;
    const topHeightPercents = 100 - bottomHeightPercents;
    const bottomFilledText = `${100 - topHeightPercents}%`;
    const topRestText = `${(glassSize - water) / 1000}L`;

    glass.querySelector('.main-cup__top').style.height = `${topHeightPercents}%`;
    glass.querySelector('.main-cup__bottom').style.height = `${bottomHeightPercents}%`;
    glass.querySelector('.main-cup__top-rest').textContent = topRestText;
    glass.querySelector('.main-cup__bottom-filled').textContent = bottomFilledText;
}

cupsList.addEventListener('mouseenter', (e) => {
    if (e.target.classList.contains('cup')) {
        const targetIdx = e.target.dataset.number;
        const cups = document.querySelectorAll('.cup');
        Array.prototype.slice.call(cups, 0, targetIdx).forEach((cup) => {
            cup.classList.add('cup_active');
        });
        
    }
}, true);

cupsList.addEventListener('mouseleave', (e) => {
    if (e.target.classList.contains('cup')) {
        const cups = document.querySelectorAll('.cup');
        cups.forEach((cup) => {
            cup.classList.remove('cup_active');
        });
    }
}, true);

cupsList.addEventListener('click', (e) => {
    if (!e.target.classList.contains('cup')) {
        return;
    }
    const targetIdx = e.target.dataset.number;
    const cups = document.querySelectorAll('.cup');
    const water = Array.prototype.slice.call(cups, 0, targetIdx).reduce((acc, cup) => {
        return acc + parseInt(cup.dataset.value, 10);
    }, 0);
    fillCup(water);
});

