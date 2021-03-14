var searchForm = document.querySelector('.search');
var searchInput = searchForm.querySelector('.search__input');

searchForm.addEventListener('click', function(e) {
    e.preventDefault();
    if (!e.target.classList.contains('search__submit')) {
        return;
    }

    searchInput.classList.toggle('active');

    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
});
