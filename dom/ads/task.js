const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let currentIndex = 0;
let speedInterval = 1000;

setInterval(() => {
    currentIndex < rotator.length - 1 ? currentIndex++ : currentIndex = 0
    rotator.forEach(item => {
        speedInterval = Number(item.dataset.speed)
        item.classList.remove('rotator__case_active');
    })
    rotator[currentIndex].classList.add('rotator__case_active')
    rotator[currentIndex].style.color = rotator[currentIndex].dataset.color;
}, speedInterval);
