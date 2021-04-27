const btns = document.querySelectorAll('.button');
const showRippleEffect = (e) => {
    const circle = document.createElement('span');
    const btnOffsetTop = e.target.offsetTop;
    const btnOffsetLeft = e.target.offsetLeft;
    const circleX = e.clientX - btnOffsetLeft;
    const circleY = e.clientY - btnOffsetTop;
    circle.classList.add('button__circle');
    circle.style.top = `${circleY}px`;
    circle.style.left = `${circleX}px`;
    e.target.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 800);
};

btns.forEach(btn => {
    btn.addEventListener('click', showRippleEffect);
});



