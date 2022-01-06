const clockTime = document.querySelector('.clock-display');
const progBar = document.querySelector('.clock-progress-bar');
const clockFaceColor = document.querySelector('.clock');
//let isHovering = false;

function displayTimeColor() {
    let getTime = new Date();
    let seconds = getTime.getSeconds();
    let minutes = getTime.getMinutes();
    let hours = getTime.getHours();
// seconds = ( '0' + now.getSeconds()).slice(-2); adds a zero and grabs the last two
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
    clockTime.textContent = currentTime
//.toString(16; get heacecimal numbers - use .toString(option) converts
    let hexColor = '#' + seconds + hours + minutes;
    clockFaceColor.style.background = hexColor;
// let isHoverging = false
//set mouseover  = equal to true
//set mouseout = equal to false
// if else statement calling out what to diplay to display 
    clockTime.addEventListener('mouseover', () => {
        clockTime.textContent = hexColor;
    })
}

function percentTime() {
    let percentDay = new Date();
    let percentSec = percentDay.getSeconds();
    let percentOfMin = percentSec / 60;

    if (percentOfMin == 0) {
        progBar.style.width = '0rem';
    } else {
        let remPercent = percentOfMin * 14;
        progBar.style.width = remPercent + 'rem';
    }
}

setInterval(function () {
    //clockTime.textContent = displayTimeColor(); refactored to grap just the function
    displayTimeColor();
    percentTime();
}, 1000);




