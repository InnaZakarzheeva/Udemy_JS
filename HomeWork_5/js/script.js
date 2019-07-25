let menu = document.querySelector('.menu'),
    list = document.getElementsByClassName('menu-item'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    prom = document.getElementById('prompt');
//replace
menu.insertBefore(list[2], list[1]);
//create
let li = document.createElement('li');
li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
menu.appendChild(li);
//title
title.innerHTML = 'Мы продаем только подлинную технику Apple';
//remove
adv.remove();

//prompt
let answer = prompt('Ваше отношение к технике Apple?', '');
prom.innerHTML = answer;
//img
document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';


