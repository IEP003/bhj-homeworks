const fontSize = Array.from(document.querySelectorAll('.font-size'));
const text = document.querySelector('.book');
const color = Array.from(document.querySelectorAll('.color'));

fontSize.forEach(item => item.addEventListener('click', (event) => {
    event.preventDefault();
    fontSize.forEach(item => removeClass(item, 'font-size_active'));
    addClass(item, 'font-size_active');
    text.classList.remove('font-size_active');
}))

color.forEach(item => item.addEventListener('click', (evt)=>{
    evt.preventDefault();
    if(item.dataset.textColor){
        color
        .filter(colorText => colorText.dataset.textColor)
        .forEach(item => removeClass(item, 'color_active'));
        addClass(item, 'color_active');

    } else if(item.dataset.bgColor){
        color
        .filter(colorBg => colorBg.dataset.bgColor)
        .forEach(item => removeClass(item, 'color_active'));
        addClass(item, 'color_active');
    }
}))

function removeClass(iterableColor, activeClass){
    console.log(activeClass)
    iterableColor.classList.remove(activeClass);
    text.classList.remove(iterableColor.classList[1]);
}

function addClass(iterableColor, activeClass){
    iterableColor.classList.add(activeClass);
    text.classList.add(iterableColor.classList[1]);
}