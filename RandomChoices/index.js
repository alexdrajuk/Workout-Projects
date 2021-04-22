document.querySelector('.randomizer__input').addEventListener('input', function(e) {
    var choices = e.target.value.trim().split(';');
    choices = choices.filter(function(choice) {
        return choice !== ''
    });
    var fragment = document.createDocumentFragment();
    choices.forEach(function(choice) {
        fragment.append(createChoice(choice));
    });
    document.querySelector('.randomizer__choices').innerHTML ='';
    document.querySelector('.randomizer__choices').appendChild(fragment);
    
});

document.querySelector('.randomizer__input').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        var duration = 5; // Duration in seconds
        var currentTime = new Date().getTime();
        var stopTime = currentTime + (duration * 1000);
        var interval = setInterval(function() {
            highlightRandomChoice();
            if (stopTime - new Date().getTime() < 0) {
                clearInterval(interval);
            }
        }, 100);
    }
});


function highlightRandomChoice() {
    var choices = document.querySelectorAll('.choices-list__choice');
    var random;
    if (!choices.length) {
        return;
    }
    choices.forEach(function(choice) {
        choice.classList.remove('choices-list__choice_active');
    });

    random = Math.floor(Math.random() * choices.length);
    choices[random].classList.add('choices-list__choice_active');
}


function createChoice(txt) {
    var el = document.createElement('li');
    el.className = 'choices-list__choice';
    el.textContent = txt.trim();
    return el;
}
