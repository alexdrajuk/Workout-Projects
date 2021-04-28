const drag = document.querySelector('.drag');
const cells__cell = document.querySelectorAll('.cells__cell');
let dragTarget;
let temp;

cells__cell.forEach(cell => {
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('drop', dragDrop);
});

drag.addEventListener('dragstart', (e) => {
    dragTarget = e.target;
    temp = dragTarget.cloneNode(true);
    dragTarget.classList.add('drag_holded');
    setTimeout(() => dragTarget.classList.add('invisible'), 4);
});

drag.addEventListener('dragend', () => {
    dragTarget.classList.remove('drag_holded');
    dragTarget.classList.remove('invisible');
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('cells__cell_under-draggable');
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave(e) {
    e.target.classList.remove('cells__cell_under-draggable');
}

function dragDrop(e) {
    console.log(e.target);
    e.target.append(temp);
    dragTarget.remove();
}

