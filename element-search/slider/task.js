const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrows = Array.from(document.querySelectorAll('.slider__arrow'));
let currentIndex = 0;

function showCurrent(index){
    sliderItem.forEach(item => item.classList.remove('slider__item_active'))
    sliderItem[index].classList.add('slider__item_active')
}

sliderArrows.forEach(item => item.onclick = () => {
    if (item.classList.contains('slider__arrow_next')) {
        if (currentIndex >= sliderItem.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
    } else {
        if (currentIndex <= 0) {
            currentIndex = sliderItem.length - 1;
        } else {
            currentIndex--;
        }
    }
    showCurrent(currentIndex);
});