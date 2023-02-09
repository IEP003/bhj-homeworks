const reveal = Array.from(document.querySelectorAll('.reveal'));

function isVisible(element){
    const {top, bottom} = element.getBoundingClientRect();
    if(bottom < 0 || top > window.innerHeight ? false : true){
        element.classList.add('reveal_active');
    }
}

window.addEventListener('scroll', () => reveal.forEach(item => isVisible(item)))