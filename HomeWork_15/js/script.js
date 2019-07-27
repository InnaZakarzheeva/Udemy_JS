window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        moreTabContent = document.querySelectorAll('.description-btn');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);
    openModal(moreTabContent[0]);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');

            openModal(moreTabContent[b]);
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })

        
    //timer
    let dedline = '2019-10-27';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime){
        let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if(Math.floor(t.hours / 10) == 0){
                hours.textContent = `0${t.hours}`;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            } else if (Math.floor(t.minutes / 10) == 0) {
                hours.textContent = t.hours;
                minutes.textContent = `0${t.minutes}`;
                seconds.textContent = t.seconds;
            }else if(Math.floor(t.seconds / 10) == 0){
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = `0${t.seconds}`;
            } else {
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            }

            if (t.total <= 0) {
                clearInterval(timeInterval)
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', dedline);

    //Modal

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
    //post server - form
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        formContact = document.getElementById('form');

    statusMessage.classList.add('status');
        
    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(form);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    
                    request.onreadystatechange = function() {
                        if(request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4){
                            if (request.status == 200 && request.status < 300){
                                resolve();
                            } else {
                                reject();
                            }  
                        } 
                    }
                    request.send(data);
                })
            } //End postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then( () => statusMessage.innerHTML = message.loading)
                .then( () => statusMessage.innerHTML = message.success)
                .catch( () => statusMessage.innerHTML = message.failure)
                .then(clearInput)
         })
    }
    sendForm(form);
    sendForm(formContact);
    //slider
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
    })

    next.addEventListener('click', () => {
        plussSlides(1);
    })

    dotsWrap.addEventListener('click', (event) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    })
});

