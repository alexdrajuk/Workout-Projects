window.addEventListener('load', function (e) {
    var labelsText = document.querySelectorAll('.wave-form__label');
    labelsText.forEach(function (labelText) {
        labelText.innerHTML = labelText.textContent.split('')
            .map(function (letter, idx) {
                var transitionDuration = (idx + 1) * 50 + 'ms'
                return `<span class="wave-form__label-letter" style="transition-delay: ${transitionDuration}">${letter}</span>`;
            })
            .join('');
    });
});

