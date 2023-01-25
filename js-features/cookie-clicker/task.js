let clickerCounter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let clickPerSecond = document.getElementById('click__per__second');
const date = new Date();

function cookieClicker(){
    let timeClick = new Date;
    clickerCounter.textContent ++;
    if (clickerCounter.textContent % 2){
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }
    clickPerSecond.textContent = (clickerCounter.textContent / ((timeClick - date)/1000)).toFixed(2);
}

cookie.onclick = cookieClicker;
