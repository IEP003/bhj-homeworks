const menuLink = Array.from(document.getElementsByClassName('menu__link'))

menuLink.forEach(item => item.onclick = (event) => {
    let menuSub = Array.from(item.parentElement.getElementsByClassName('menu_sub'))
    if(menuSub.length == 1){
        event.preventDefault();
        menuSub.forEach(item => item.classList.toggle('menu_active'))  
    }
})