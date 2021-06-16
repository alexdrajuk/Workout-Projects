const products = document.querySelectorAll('.product');

const makeImagePagination = (product) => {
    const imageSwitchItems = product.querySelectorAll('.image-switch__item');
    const productImagePagination = product.querySelector('.product__image-pagination');
    if (!imageSwitchItems.length || imageSwitchItems.length === 1) {
        return;
    }
    imageSwitchItems.forEach((imageSwitchItem, idx) => {
        let className = (idx === 0) ? 'image-pagination__item image-pagination__item_active' : 'image-pagination__item';
        productImagePagination.innerHTML += `<li class="${className}" data-switch-item="${idx+1}" aria-hidden="true"></li>`;
    });

}

const switchProductImage = (e) => {
    if (!e.target.classList.contains('image-pagination__item')) {
        return;
    }
    const product = e.target.closest('.product');
    product.querySelector('.image-pagination__item_active').classList.remove('image-pagination__item_active');
    product.querySelector('.image-switch__item_active').classList.remove('image-switch__item_active');
    product.querySelectorAll('.image-pagination__item').forEach((imageSwitchItem) => {
        imageSwitchItem.classList.remove('image-pagination__item_active');
        e.target.classList.add('image-pagination__item_active')
        product.querySelector(`.image-switch__item[data-switch-item="${e.target.dataset.switchItem}"]`).classList.add('image-switch__item_active');
    });
}

if (products.length) {
    products.forEach((product) => {
        makeImagePagination(product);
        product.addEventListener('click', switchProductImage);
    });
}
