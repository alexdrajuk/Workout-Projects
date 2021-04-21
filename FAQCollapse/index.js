document.querySelector('.faqs').addEventListener('click', function (e) {
    if (e.target.classList.contains('faq__btn_show')) {
        e.target.closest('.faq').classList.add('faq_active');
    }
    if (e.target.classList.contains('faq__btn_hide')) {
        e.target.closest('.faq').classList.remove('faq_active');
    }
});
