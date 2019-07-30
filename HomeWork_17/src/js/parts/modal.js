function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function openModal(btn){
        btn.addEventListener('click', () => {
            overlay.style.display = 'block';
            more.classList.add('more-splash');
            //запретить прокрутку при открытие модального окна
            document.body.style.overflow = 'hidden';
        });
    }
    openModal(more);

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
}

module.exports = modal;