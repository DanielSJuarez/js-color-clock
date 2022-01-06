const clockTime = document.querySelector('.clock-display');
const progBar = document.querySelector('.clock-progress-bar');
const clockFaceColor = document.querySelector('.clock');

function displayTimeColor() {
    let getTime = new Date();
    let seconds = getTime.getSeconds();
    let minutes = getTime.getMinutes();
    let hours = getTime.getHours();

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    let currentTime = hours + ":" + minutes + ":" + seconds;

    let hexColor = '#' + seconds + hours + minutes;
    clockFaceColor.style.background = hexColor;

    clockTime.addEventListener('mouseover', () => {
        clockTime.textContent = hexColor;
    })
    return currentTime;
}

function percentTime() {
    let percentDay = new Date();
    let percentSec = percentDay.getSeconds();
    let percentOfMin = percentSec / 60;

    if (percentOfMin == 0) {
        progBar.style.width = '0rem';
    } else {
        let remPercent = percentOfMin * 15;
        progBar.style.width = remPercent + 'rem';
    }
}

setInterval(function () {
    clockTime.textContent = displayTimeColor();
    percentTime();
}, 1000);




