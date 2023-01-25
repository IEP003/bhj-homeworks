let timer = document.getElementById('timer')
let hh = 0;
let mm = 0;
let ss = Number(timer.textContent); 

function timeToWin(){
    if(timer.textContent == `00:00:00`){
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
        location.assign("https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B9876AAC2-741D-5004-ADC0-1609F8B3060A%7D%26lang%3Dru%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe");
    } else {
        ss --; 
        timer.textContent = `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
        if (ss > 60){
            let x = ss / 60;
            mm = Math.floor( x);
            ss = ss % 60;
        } 
        if (ss == 0 && mm >= 1){
            mm --;
            ss = 60;
        }
        if (mm > 60){
            let x = mm / 60;
            hh = Math.floor( x) 
            mm = mm % 60;
        }
        if (mm == 0 && hh >= 1){
            hh --;
            mm = 59;
        }
    }
}   

let intervalId = setInterval(timeToWin, 1000);