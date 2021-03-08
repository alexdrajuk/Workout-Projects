document.querySelector('.js-container_cards').addEventListener('click', function(e) {
    if (e.target.classList.contains('card') && !e.target.classList.contains('card_active')) {
        document.querySelector('.card_active').classList.remove('card_active');
        e.target.classList.add('card_active');
    }
});
