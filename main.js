let clockTime = document.querySelector('.clock-display');


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
    console.log(percentSec / 60);
}

setInterval(function() {
    clockTime.textContent = displayTime();
    //percentTime();
}, 1000);


