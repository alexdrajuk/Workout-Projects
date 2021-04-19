document.querySelector('.sound-board').addEventListener('click', function (e) {
    if (!e.target.classList.contains('sound__btn')) {
        return;
    }
    e.preventDefault();
    stopSounds();
    var audio = document.querySelector(`audio[id="${e.target.dataset.audio}"]`);
    audio.play();
});


function stopSounds () {
    document.querySelectorAll('audio').forEach(function (sound) {
        sound.pause();
    });
}
