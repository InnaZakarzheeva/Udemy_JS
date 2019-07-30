window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tabs = require('./parts/tabs.js'),
        modal = require('./parts/modal.js'),
        timer = require('./parts/timer.js'),
        slider = require('./parts/slider.js'),
        form = require('./parts/form.js'),
        calc = require('./parts/calc.js');
    
    tabs();
    modal();
    timer();
    slider();
    form();
    calc();
});

