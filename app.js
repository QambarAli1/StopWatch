var getmin = document.getElementById('min');
var getsec = document.getElementById('sec');
var getmilliSec = document.getElementById('milliSec');
var interval;
var btnDis = document.getElementById('disable');

var min = 0;
var sec = 0;
var milliSec = 0;


function timer(){
    milliSec++
    getmilliSec.innerHTML = milliSec;
    if(milliSec==100){
        sec++
        getsec.innerHTML = sec;
        milliSec = 0;
    }
    else if(sec==60){
        sec=0
        min++
        getmin.innerHTML = min;
    }
}



// created by Qambar Ali

function start(){
    interval = setInterval(timer,10);
    btnDis.disabled = true;
}
function pause(){
    clearInterval(interval);
    btnDis.disabled = false;
}
function reset(){
    min = "000";
    sec = '000';
    milliSec = '000';
    getmilliSec.innerHTML = milliSec;
    getsec.innerHTML = sec;
    getmin.innerHTML = min;
    clearInterval(interval);
    btnDis.disabled = false;
}