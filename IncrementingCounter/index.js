document.querySelectorAll('.counter__number').forEach(counter => {
    counter.innerText = 0;
    // var counter = 0;
    let maxCounter = parseInt(counter.dataset.counter, 10);
    const interval = setInterval(() => {
        let currentCounter = parseInt(counter.innerText, 10);
        if (currentCounter <= maxCounter) {
            counter.innerText = currentCounter += 200;
        } else {
            counter.innerText = maxCounter;
            clearInterval(interval);
        }
    }, 4);
});
