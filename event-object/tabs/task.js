const tab = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'))

tab.forEach(item => item.addEventListener('click', () => {
    tab.forEach(itemTab => itemTab.classList.remove('tab_active'))
    tabContent.forEach(itemTabContent => itemTabContent.classList.remove('tab__content_active'))
    item.classList.add('tab_active')
    tabContent[tab.indexOf(item)].classList.add('tab__content_active')
}))