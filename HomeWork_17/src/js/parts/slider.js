function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(index) {
        if (index > slides.length) {
            slideIndex = 1;
        } else if (index < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => item.style.display = 'none');
        dots.forEach(item => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plussSlides(index) {
        showSlides(slideIndex += index);
    }

    function currentSlide(index) {
        showSlides(slideIndex = index);
    }

    prev.addEventListener('click', () => {
        plussSlides(-1);
    });

    next.addEventListener('click', () => {
        plussSlides(1);
    });

    dotsWrap.addEventListener('click', (event) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
}

module.exports = slider;