const interestCheck = Array.from(document.querySelectorAll('.interest__check'));
const interestActive = interestCheck.filter(item => item.closest('.interests_active') === null);
const interest = interestCheck.filter(item => item.closest('.interests_active') != null);

interestCheck.forEach(item => item.addEventListener('change', () =>{
    let chekedMainElement = Array.from(item.closest('.interest').querySelectorAll('.interest__check'));
    for(let i in chekedMainElement){
        item.checked === true ? chekedMainElement[i].checked = true : chekedMainElement[i].checked = false;
    }
    if(item.parentElement.closest('.interests_active')){
        if(item.checked){
            recursion(item);
        }
    }
}))

function recursion(item){
    if(item.querySelector('.interest__check') !== false){
        item = item.parentElement
        if(item.classList.contains('interest')){
            item.querySelector('.interest__check').checked = true
        }
        if(item.parentElement.classList.contains('interests_main')){
            return;
        }
        recursion(item)
    }
}