window.addEventListener('keydown', function (e) {
    document.querySelector('.key-codes__cell-data_key').textContent = (e.key === ' ') ? 'Space' :  e.key;
    document.querySelector('.key-codes__cell-data_key-code').textContent = e.keyCode;
    document.querySelector('.key-codes__cell-data_code').textContent = e.code;
});
