import './style/style.sass';

function colorOfClock() {
    let nowDate = new Date();
    let hours = nowDate.getHours().toString();
    let minutes = nowDate.getMinutes().toString();
    let seconds = nowDate.getSeconds().toString();
    if(hours.length < 2){
        hours = '0' + hours
    }
    if(minutes.length < 2){
        minutes = '0' + minutes
    }
    if(seconds.length < 2){
        seconds = '0' + seconds
    }
    document.querySelector('.time').innerHTML = hours + "." + minutes + "." +seconds;
    document.querySelector('.hex').innerHTML = '#' + hours + minutes + seconds;
    document.querySelector('body').style.background = '#' + hours + minutes + seconds;
}
setInterval(colorOfClock, 1000);