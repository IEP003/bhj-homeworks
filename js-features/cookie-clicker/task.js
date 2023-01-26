let clickerCounter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let clickPerSecond = document.getElementById('click__per__second');
let firstTimeClick = new Date;
let secondTimeClick = new Date;

function cookieClicker(){
    clickerCounter.textContent ++;
    if (clickerCounter.textContent % 2){
        cookie.width = 250;
        firstTimeClick = new Date();
        clickPerSecond.textContent = ((1/(firstTimeClick - secondTimeClick))*1000).toFixed(2);
    } else {
        cookie.width = 200;
        secondTimeClick = new Date();
        clickPerSecond.textContent = ((1/(secondTimeClick - firstTimeClick))*1000).toFixed(2);
    }
}

cookie.onclick = cookieClicker;