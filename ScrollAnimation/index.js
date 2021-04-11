var boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBoxes);

function showBoxes() {
    const triggerThreshold = window.innerHeight / 5 * 4;
    var topBox;

    boxes.forEach(function(box) {
        topBox = box.getBoundingClientRect().top;
        if (topBox < triggerThreshold) {
            box.classList.add('box_show');
        } else {
            box.classList.remove('box_show');
        }
    });
}
