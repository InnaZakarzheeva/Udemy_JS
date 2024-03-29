function timer() {
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
}

module.exports = timer;