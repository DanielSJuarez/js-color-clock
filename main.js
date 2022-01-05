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

setInterval(function() {
    clockTime.textContent = displayTime();
}, 1000);






