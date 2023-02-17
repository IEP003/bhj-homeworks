const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'))
let tooltip = document.createElement('div')
tooltip.classList.add('tooltip')

hasTooltip.forEach(item => {
    item.addEventListener('click', (evt) => {
        evt.preventDefault();
        let place = item.getBoundingClientRect();
        let left = place.left;
        let top = place.bottom;
        tooltip.innerHTML = item.title;
        tooltip.classList.toggle('tooltip_active')
        item.insertAdjacentElement('beforeend', tooltip)
        tooltip.style.left = left + 'px'
        tooltip.style.top = top + 'px' 
    })
})