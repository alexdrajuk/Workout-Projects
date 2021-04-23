document.querySelector('.menu__btn').addEventListener('click', function(e) {
    var nav = e.target.closest('.nav');
    var menuBtn = nav.querySelector('.menu__btn');
    if (nav.classList.contains('nav_active')) {
        nav.classList.remove('nav_active');
        menuBtn.classList.add('menu__btn_closed');
    } else {
        nav.classList.add('nav_active');
        menuBtn.classList.remove('menu__btn_closed');
    }
});
