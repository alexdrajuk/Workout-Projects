const nav = document.querySelector('.nav');
window.addEventListener('scroll', function(e) {
    if (window.scrollY > nav.offsetHeight + 100) {
        nav.classList.add('nav_sticky');
    } else {
        nav.classList.remove('nav_sticky');
    }
});
