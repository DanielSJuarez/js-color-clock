const clockTime = document.querySelector('.clock-display');
const progBar = document.querySelector('.clock-progress-bar');
const clockFaceColor = document.querySelector('.clock');

function displayTime() {
    let getTime = new Date();
    let seconds = getTime.getSeconds();
    let minutes = getTime.getMinutes();
    let hours = getTime.getHours();

    if(seconds < 10){
        seconds = '0' + seconds;
    }
    if(minutes < 10){
         minutes = '0' + minutes;
    }
    if(hours < 10){
        hours = '0' + hours;
    }
    let currentTime = hours + ":" + minutes + ":" + seconds;
    return currentTime;
}

function percentTime(){
    let percentDay = new Date();
    let percentSec = percentDay.getSeconds();
    let percentOfMin = percentSec / 60;
    console.log(percentOfMin);
    if(percentOfMin == 0){
        progBar.style.width = '0rem';
    } else {
        let remPercent = percentOfMin * 15;
        progBar.style.width = remPercent + 'rem';
    }
}

function changeBackground(){
    let colorTime = new Date();
    let colorSec = colorTime.getSeconds();
    let colorMin = colorTime.getMinutes();
    let colorHrs = colorTime.getHours();
    let hexColor = '#' + colorSec + colorHrs + colorMin;
    console.log(hexColor);
    clockFaceColor.style.background = hexColor;
}

setInterval(function() {
    clockTime.textContent = displayTime();
    percentTime();
    changeBackground();
}, 1000);


