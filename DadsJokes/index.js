document.querySelector('.joke__get-joke').addEventListener('click', function (e) {
    e.preventDefault();
    getJoke();
});

function getJoke () {
    var jokeEl = document.querySelector('.joke__text');
    var config = {
        headers: {
            Accept: 'application/json',
        },
        method: 'GET'
    };

    fetch('https://icanhazdadjoke.com/', config)
        .then(response => response.json())
        .then(data => {
            jokeEl.textContent = data.joke
         });
}
