let killedMole = document.getElementById('dead');
let lose = document.getElementById('lost');
let holes = document.getElementsByClassName('hole');


getHole = (i) => {
    let currentHole = holes[i];
    function winLose(){
        if(currentHole.className.includes('hole_has-mole')){
            killedMole.textContent ++;
            if(killedMole.textContent >= 10){
                killedMole.textContent = 0;
                lose.textContent = 0;
                return alert('Вы выйграли!')
            }
        } else {
            lose.textContent ++;
            if(lose.textContent >= 5){
                killedMole.textContent = 0;
                lose.textContent = 0;
                return alert('Вы проиграли!')
            }
        }
    }
    currentHole.onclick = winLose;
}

for (let i = 0; i < holes.length; i++){
    getHole(i)
}